import Grid from '../../utils/Grid';
import { randomInt } from '../../utils/rand';
import RenderingBackend from './RenderingBackend';

const VSS = `#version 300 es

// in vec4 a_position;
// in vec2 a_texcoord;


in vec2 a_texCoord;
in vec2 a_position;

uniform vec2 u_resolution;
uniform vec2 u_translation;
out vec2 v_texCoord;

void main() {
    vec2 position = a_position + u_translation;
    vec2 zeroToOne = position / u_resolution;
    vec2 zeroToTwo = zeroToOne * 2.0;
    vec2 clipSpace = zeroToTwo - 1.0;
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    v_texCoord = a_texCoord;
}`.trim();

const FSS = `#version 300 es
precision highp float;

in vec2 v_texCoord;
uniform sampler2D u_image;

out vec4 outColor;

void main() {
    outColor = texture(u_image, v_texCoord);
}`.trim();


// https://webgl2fundamentals.org/webgl/lessons/webgl-2d-drawimage.html
export default class CanvasWebGLRenderingBackend extends RenderingBackend {
    gl;
    canvas;
    width;
    height;
    tileWidth;
    tileHeight;
    cells;
    _uniforms = {};
    clearColor = '#141a23';

    constructor({ width, height, tileWidth, tileHeight }) {
        super();
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;

        this.cells = new Grid(width * 2, height, () => null);

        this.canvas = document.createElement('canvas');
        this.gl = this.canvas.getContext('webgl2', { preserveDrawingBuffer: true });

        if (!this.gl) {
            alert('webgl2 is not supported');
        }

        const VS = this._createShader(this.gl.VERTEX_SHADER, VSS);
        const FS = this._createShader(this.gl.FRAGMENT_SHADER, FSS);

        this.program = this._createProgram(VS, FS);

        this.gl.useProgram(this.program);

        this._setup();

        // this._createQuad();

        // this._textureLocation = this.gl.getUniformLocation(program, "u_texture");

        // const vao = this.gl.createVertexArray();
        // this.gl.bindVertexArray(vao);

        this.setSize(width, height);
    }

    setSize(width, height) {
        this.width = width;
        this.height = height;

        const widthPx = this.tileWidth * this.width;
        const heightPx = this.tileHeight * this.height;

        this.canvas.style.cssText = `width: ${widthPx}px; height: ${heightPx}px`;
        this.canvas.width = widthPx;
        this.canvas.height = heightPx;

        this.gl.viewport(0, 0, widthPx, heightPx);

        // Pass in the canvas resolution so we can convert from
        // pixels to clipspace in the shader
        this.gl.uniform2f(this._resolutionUniformLocation, this.gl.canvas.width, this.gl.canvas.height);

        // this.gl.uniform2fv(this._uniforms["tileSize"], [this.tileWidth, this.tileHeight]);
        // this.gl.uniform2fv(this._uniforms["targetSize"], [widthPx, heightPx]);

        this.cells.clearAndResize(width * 2, height);
    }

    _setup() {
        // look up where the vertex data needs to go.
        var positionAttributeLocation = this.gl.getAttribLocation(this.program, "a_position");

        // look up uniform locations
        this._resolutionUniformLocation = this.gl.getUniformLocation(this.program, "u_resolution");
        this._colorLocation = this.gl.getUniformLocation(this.program, "u_color");
        this._translationLocation = this.gl.getUniformLocation(this.program, "u_translation");
        this._texCoordAttributeLocation = this.gl.getAttribLocation(this.program, "a_texCoord");
        this._imageLocation = this.gl.getUniformLocation(this.program, "u_image");

        // Create a buffer
        var positionBuffer = this.gl.createBuffer();

        // Create a vertex array object (attribute state)
        var vao = this.gl.createVertexArray();

        // and make it the one we're currently working with
        this.gl.bindVertexArray(vao);

        // Turn on the attribute
        this.gl.enableVertexAttribArray(positionAttributeLocation);

        // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);

        // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        var size = 2;          // 2 components per iteration
        var type = this.gl.FLOAT;   // the data is 32bit floats
        var normalize = false; // don't normalize the data
        var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0;        // start at the beginning of the buffer
        this.gl.vertexAttribPointer(
          positionAttributeLocation, size, type, normalize, stride, offset);
        this._setRectangle(0, 0, this.tileWidth, this.tileHeight);


        // Tell it to use our program (pair of shaders)
        // this.gl.useProgram(program);

        // Bind the attribute/buffer set we want.
        this.gl.bindVertexArray(vao);

        // this.gl.enableVertexAttribArray(this._texCoordAttributeLocation);
          // Tell the attribute how to get data out of texCoordBuffer (ARRAY_BUFFER)
        var size = 2;          // 2 components per iteration
        var type = this.gl.FLOAT;   // the data is 32bit floats
        var normalize = false; // don't normalize the data
        var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0;        // start at the beginning of the buffer
        this.gl.vertexAttribPointer(
            this._texCoordAttributeLocation, size, type, normalize, stride, offset
        );

        var texCoordBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, texCoordBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
            0.0,  0.0,
            1.0,  0.0,
            0.0,  1.0,
            0.0,  1.0,
            1.0,  0.0,
            1.0,  1.0,
        ]), this.gl.STATIC_DRAW);

        // Turn on the attribute
        this.gl.enableVertexAttribArray(this._texCoordAttributeLocation);


        // Create a texture.
        this._texture = this.gl.createTexture();

        // make unit 0 the active texture uint
        // (ie, the unit all other texture commands will affect
        this.gl.activeTexture(this.gl.TEXTURE0 + 0);
        // Bind it to texture unit 0' 2D bind point
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._texture);

        // Set the parameters so we don't need mips and so we're not filtering
        // and we don't repeat
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);

        this.gl.uniform1i(this._imageLocation, 0);
    }

    draw(x, y, sprite, fg1, fg2, bg) {
        const img = sprite.colorize(fg1, fg2);
        // const tex = this._createTexture(img);

        this.cells.set(x * 2, y, {
            img,
            // tex,
            width: sprite.width,
            height: sprite.height,
            bg,
            x,
            y,
        });
    }

    clear() {
        // this.gl.fillStyle = this.clearColor;
        // this.gl.fillRect(0, 0, this.canvas.width, this.canvas.height);
        // Clear the canvas
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.cells.clear();
    }

    clearArea(x, y, width, height) {
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                this.clearTile(x + i, y + j);
            }
        }
    }

    clearTile(x, y) {
        this.cells.set(x * 2, y, null);
    }

    _setRectangle(x, y, width, height) {
        var x1 = x;
        var x2 = x + width;
        var y1 = y;
        var y2 = y + height;
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
           x1, y1,
           x2, y1,
           x1, y2,
           x1, y2,
           x2, y1,
           x2, y2,
        ]), this.gl.STATIC_DRAW);
    }

    _setTexture(data) {
        var mipLevel = 0;               // the largest mip
        var internalFormat = this.gl.RGBA;   // format we want in the texture
        var srcFormat = this.gl.RGBA;        // format of data we are supplying
        var srcType = this.gl.UNSIGNED_BYTE  // type of data we are supplying
        this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            mipLevel,
            internalFormat,
            srcFormat,
            srcType,
            data
        );
    }

    render() {
        this.cells.data.filter((c) => c).forEach((cell) => {
            const pixelX = cell.x * this.tileWidth;
            const pixelY = cell.y * this.tileHeight;

            // Put a rectangle in the position buffer

            // Set a random color.
            // this.gl.uniform4f(this._colorLocation, Math.random(), Math.random(), Math.random(), 1);

            this._setTexture(cell.img);
            // Draw the rectangle.
            var primitiveType = this.gl.TRIANGLES;
            var offset = 0;
            var count = 6;
            var translation = [pixelX, pixelY];
            this.gl.uniform2fv(this._translationLocation, translation);
            this.gl.drawArrays(primitiveType, offset, count);

            // if (cell.bg) {
            //     this.gl.fillStyle = cell.bg;
            //     this.gl.fillRect(pixelX, pixelY, sprite.width, sprite.height);
            // }

            // drawImage(this.gl, cell.img, pixelX, pixelY);
            // this._drawImage(cell.tex, cell.width, cell.height, pixelX, pixelY);
        });
    }

    _createShader(type, source) {
        var shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        var success = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);

        if (success) {
          return shader;
        }

        console.log(this.gl.getShaderInfoLog(shader));
        this.gl.deleteShader(shader);
    }

    _createProgram(vertexShader, fragmentShader) {
        const program = this.gl.createProgram();

        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.linkProgram(program);

        const success = this.gl.getProgramParameter(program, this.gl.LINK_STATUS);

        if (success) {
          return program;
        }

        console.log(this.gl.getProgramInfoLog(program));
        this.gl.deleteProgram(program);
    }

    _createQuad() {
        const pos = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
        const buf = this.gl.createBuffer();

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buf);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, pos, this.gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(0);
        this.gl.vertexAttribPointer(0, 2, this.gl.FLOAT, false, 0, 0);
    }

    _createTexture(data) {
        const texture = this.gl.createTexture();

        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, data);
        this.gl.generateMipmap(this.gl.TEXTURE_2D);

        return texture;
    }
}
