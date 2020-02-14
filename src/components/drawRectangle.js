import { colors } from './colors';

export const genRectangle = function() {
    const rectangle = new PIXI.Graphics();
    rectangle.beginFill(colors[Math.floor(Math.random() * colors.length)]);
    let x = Math.floor(Math.random() * ((window.innerWidth / 2 - 100) - 100) + 100);
    let y = -80;
    rectangle.drawRect(x, y, 80, 80);
    rectangle.endFill();
    rectangle.interactive = true;
    rectangle.buttonMode = true;

    rectangle.changeColor = () => {
        rectangle.beginFill(colors[Math.floor(Math.random() * colors.length)]);
        rectangle.drawRect(x, y, 80, 80);
        rectangle.endFill();
    };
    rectangle.type = 'rectangle';
    return rectangle;
}