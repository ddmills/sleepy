import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.js',
    output: {
        dir: 'build',
    },
    plugins: [json(), resolve(), babel(), commonjs()],
};
