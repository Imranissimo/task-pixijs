import { colors } from './colors';

export const genPentagon = function(x=0, y=0) {
    const pentagon = new PIXI.Graphics();
    pentagon.beginFill(colors[Math.floor(Math.random() * colors.length)]);

    x ? x:x = Math.floor(Math.random() * ((window.innerWidth / 2 - 100) - 100) + 100);
    y ? y:y = -150;

    let xArr = [50, 0, 20, 80, 100];
    let yArr = [50, 90, 150, 150, 90];

    let drawPentagon = () => {
        pentagon.moveTo(xArr[0], yArr[0]);

        for (let i = 1; i< xArr.length; i++)
            pentagon.lineTo(xArr[i], yArr[i])
    };

    drawPentagon();
    const area = () => {

        let sum = 0;
        const arrsLen = xArr.length
        for (let i = 0; i < arrsLen-1; i++)
            sum += xArr[i] * yArr[i+1] - yArr[i] * xArr[i+1]
        
        sum += xArr[arrsLen-1] * yArr[0] - yArr[arrsLen-1] * xArr[0]

        return Math.abs(sum/2)
    };

    pentagon.area = area();
    pentagon.position.x = x;
    pentagon.position.y = y;
    pentagon.interactive = true;
    pentagon.buttonMode = true;

    pentagon.changeColor = () => {   
        pentagon.beginFill(colors[Math.floor(Math.random() * colors.length)]);
        drawPentagon();
        pentagon.endFill();
    };
    pentagon.type = 'pentagon';
    return pentagon;
}