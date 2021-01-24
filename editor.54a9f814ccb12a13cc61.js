(()=>{"use strict";var __webpack_modules__={362:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AREA_TYPE_WATER:()=>AREA_TYPE_WATER,AREA_TYPE_PLAINS:()=>AREA_TYPE_PLAINS,AREA_TYPE_FOREST:()=>AREA_TYPE_FOREST,AREA_TYPE_DESERT:()=>AREA_TYPE_DESERT,AREA_TYPE_CANYON:()=>AREA_TYPE_CANYON});const AREA_TYPE_WATER="AREA_TYPE_WATER",AREA_TYPE_PLAINS="AREA_TYPE_PLAINS",AREA_TYPE_FOREST="AREA_TYPE_FOREST",AREA_TYPE_DESERT="AREA_TYPE_DESERT",AREA_TYPE_CANYON="AREA_TYPE_CANYON"},360:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EditorMap:()=>EditorMap});var _src_utils_Grid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_EditorMapCell__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(361);class EditorMap{constructor(width,height){this.grid=new _src_utils_Grid__WEBPACK_IMPORTED_MODULE_0__.default(width,height,((x,y)=>new _EditorMapCell__WEBPACK_IMPORTED_MODULE_1__.EditorMapCell({x,y})))}serialize(){return{}}}},361:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EditorMapCell:()=>EditorMapCell});var _AreaType__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(362);class EditorMapCell{constructor(data){this.x=data.x,this.y=data.y,this.type=data.type||_AreaType__WEBPACK_IMPORTED_MODULE_0__.AREA_TYPE_WATER}serialize(){return{x:this.x,y:this.y,type:this.type}}}},363:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{renderEditorMap:()=>renderEditorMap});const colorMap={AREA_TYPE_PLAINS:"#57723a",AREA_TYPE_CANYON:"#804c36",AREA_TYPE_DESERT:"#b3904d",AREA_TYPE_FOREST:"#3c5837",AREA_TYPE_WATER:"#005784"},renderEditorMap=data=>{const display=document.getElementsByClassName("display-grid")[0];display.innerHTML="";for(let y=0;y<data.grid.height;y++){const row=document.createElement("div");row.classList.add("display-row");for(let x=0;x<data.grid.width;x++){const area=data.grid.get(x,y),cell=document.createElement("div");cell.dataset.x=x,cell.dataset.y=y,cell.classList.add("display-cell"),cell.style.backgroundColor=colorMap[area.type],row.appendChild(cell)}display.appendChild(row)}}},364:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{generateWorld:()=>generateWorld});var _src_utils_rand__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(48),_AreaType__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(362),_EditorMap__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(360);const generateWorld=(width,height)=>{const data=new _EditorMap__WEBPACK_IMPORTED_MODULE_2__.EditorMap(width,height);data.grid.data.forEach((cell=>{cell.type=(0,_src_utils_rand__WEBPACK_IMPORTED_MODULE_0__.pickRandom)([_AreaType__WEBPACK_IMPORTED_MODULE_1__.AREA_TYPE_PLAINS,_AreaType__WEBPACK_IMPORTED_MODULE_1__.AREA_TYPE_CANYON,_AreaType__WEBPACK_IMPORTED_MODULE_1__.AREA_TYPE_DESERT,_AreaType__WEBPACK_IMPORTED_MODULE_1__.AREA_TYPE_FOREST,_AreaType__WEBPACK_IMPORTED_MODULE_1__.AREA_TYPE_WATER])}));for(let i=0;i<width;i++)data.grid.get(i,0).type=_AreaType__WEBPACK_IMPORTED_MODULE_1__.AREA_TYPE_WATER,data.grid.get(i,height-1).type=_AreaType__WEBPACK_IMPORTED_MODULE_1__.AREA_TYPE_WATER;for(let i=0;i<height;i++)data.grid.get(0,i).type=_AreaType__WEBPACK_IMPORTED_MODULE_1__.AREA_TYPE_WATER,data.grid.get(width-1,i).type=_AreaType__WEBPACK_IMPORTED_MODULE_1__.AREA_TYPE_WATER;return data}},359:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__(360);var _EditorRenderer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(363);const data=(0,__webpack_require__(364).generateWorld)(32,24);window.data=data,(0,_EditorRenderer__WEBPACK_IMPORTED_MODULE_1__.renderEditorMap)(data),document.addEventListener("click",(e=>{if(e.target.classList.contains("display-cell")){const x=parseInt(e.target.dataset.x),y=parseInt(e.target.dataset.y),cell=data.grid.get(x,y);console.log(cell)}}))},7:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Grid});class Grid{get width(){return this._width}get height(){return this._height}get size(){return this._width*this._height}constructor(width,height,defaultValueGenerator=(()=>null)){_defineProperty(this,"_width",0),_defineProperty(this,"_height",0),_defineProperty(this,"data",[]),_defineProperty(this,"suppressOOBWarn",!1),_defineProperty(this,"defaultValueGenerator",(()=>null)),this._width=width,this._height=height,this.defaultValueGenerator=defaultValueGenerator,this.clear()}idx(x,y){return y*this._width+x}coord(idx){return{x:Math.trunc(idx%this._width),y:Math.trunc(idx/this._width)}}clear(){this.data=[];for(let i=0;i<this.size;i++){const{x,y}=this.coord(i);this.data[i]=this.defaultValueGenerator(x,y)}}setAll(value){this.data=[];for(let i=0;i<this.size;i++)this.data[i]=value}set(x,y,value){if(this.isOutOfBounds(x,y))return void(this.suppressOOBWarn||console.warn("Trying to set out-of-bounds coordinates (".concat(x,", ").concat(y,") to value ").concat(value)));const idx=this.idx(x,y);this.data[idx]=value}serialize(){const entries=[...this.data];return{width:this.width,height:this.height,entries}}deserialize(data){this._width=data.width,this._height=data.height,this.data=data.entries}get(x,y){return this.isOutOfBounds(x,y)?this.defaultValueGenerator():this.data[this.idx(x,y)]}isOutOfBounds(x,y){return x<0||y<0||x>=this._width||y>=this.height}getNeighbors(x,y){return[this.get(x-1,y-1),this.get(x,y-1),this.get(x+1,y-1),this.get(x-1,y),this.get(x+1,y),this.get(x-1,y+1),this.get(x,y+1),this.get(x+1,y+1)]}clearAndResize(width,height){this._width=width,this._height=height,this.clear()}}},48:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{pickRandom:()=>pickRandom,randomInt:()=>randomInt,randomBool:()=>randomBool,randomWeightedBool:()=>randomWeightedBool});const pickRandom=arr=>arr[Math.floor(Math.random()*arr.length)],randomInt=(min,max)=>Math.floor(Math.random()*(max-min+1)+min),randomBool=()=>pickRandom([!0,!1]),randomWeightedBool=(weight=.5)=>Math.random()<=weight}},__webpack_module_cache__={};function __webpack_require__(moduleId){if(__webpack_module_cache__[moduleId])return __webpack_module_cache__[moduleId].exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.exports}__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__(359)})();
//# sourceMappingURL=editor.54a9f814ccb12a13cc61.js.map