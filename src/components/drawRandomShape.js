import { colors } from './colors';

export const genRandomShape = function() {
const randomShape = new PIXI.Graphics();
randomShape.lineTextureStyle(2, 0xAA0000);
randomShape.quadraticCurveTo(0, 0, 50, 100);
randomShape.interactive = true;
randomShape.buttonMode = true;

randomShape.type = 'randomShape';
return randomShape;
};
