import { genRectangle } from './drawRectangle';
import { genCircle } from './drawCircle';
import { genEllipse } from './drawEllipse';
import { genTriangle } from './drawTriangle';
import { genPentagon } from './drawPentagon';
import { genHexagon } from './drawHexagon';
//import { genRandomShape } from './drawRandomShape';


export const shapes = [ genTriangle, genRectangle,  genCircle, genEllipse, genPentagon, genHexagon];
