import { colors } from './colors';

export const genCircle = function(x=0, y=0) {

    const circle = new PIXI.Graphics();
    circle.beginFill(colors[Math.floor(Math.random() * colors.length)]);
    x ? x:x=Math.floor(Math.random() * ((window.innerWidth / 2 - 100) - 100) + 100);
    y ? y:y=-50;
    circle.drawCircle(x, y, 40);
    circle.endFill();
    circle.interactive = true;
    circle.buttonMode = true;
    
    circle.changeColor = () => {
        circle.beginFill(colors[Math.floor(Math.random() * colors.length)]);
        circle.drawCircle(x, y, 40);
        circle.endFill();
    };
    circle.type = 'circle';
    return circle;
}
