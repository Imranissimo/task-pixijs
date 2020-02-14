import { colors } from './colors';

export const genTriangle = function(x=0, y=0) {
    const triangle = new PIXI.Graphics();
    triangle.beginFill(colors[Math.floor(Math.random() * colors.length)]);
    x ? x:x = Math.floor(Math.random() * ((window.innerWidth / 2 - 100) - 100) + 100);
    y ? y:y = -250;

    let xArr = [50, 120, 20];
    let yArr = [150, 250, 220];

    let drawTriangle = () => {
        triangle.moveTo(xArr[0], yArr[0]);
        
        for (let i = 1; i< xArr.length; i++)
            triangle.lineTo(xArr[i], yArr[i])
    };

    drawTriangle();
    const area = () => {

        let sum = 0;
        const arrsLen = xArr.length
        for (let i = 0; i < arrsLen-1; i++)
            sum += xArr[i] * yArr[i+1] - yArr[i] * xArr[i+1]
        
        sum += xArr[arrsLen-1] * yArr[0] - yArr[arrsLen-1] * xArr[0]

        return Math.abs(sum/2)
    };

    triangle.area = area();
    triangle.position.x = x;
    triangle.position.y = y;
    triangle.interactive = true;
    triangle.buttonMode = true;
    
    triangle.changeColor = () => {
        triangle.beginFill(colors[Math.floor(Math.random() * colors.length)]);
        drawTriangle();
        triangle.endFill();
    };
    triangle.type = 'triangle';
    return triangle;
} 