import { colors } from './colors';

export const genEllipse = function() {
    const ellipse = new PIXI.Graphics();
    ellipse.beginFill(colors[Math.floor(Math.random() * colors.length)]);
    let x = Math.floor(Math.random() * ((window.innerWidth / 2 - 100) - 100) + 100);
    let y = -50;
    ellipse.drawEllipse(x, y, 60, 40);
    ellipse.endFill();
    ellipse.interactive = true;
    ellipse.buttonMode = true;

    ellipse.changeColor = () => {
        ellipse.beginFill(colors[Math.floor(Math.random() * colors.length)]);
        ellipse.drawEllipse(x, y, 60, 40);
        ellipse.endFill();
    };
    ellipse.type = 'ellipse'
    return ellipse
}