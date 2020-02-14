import { colors } from './colors';

export const genHexagon = function(x=0, y=0) {
    const hexagon = new PIXI.Graphics();
    hexagon.beginFill(colors[Math.floor(Math.random() * colors.length)]);
    x ? x:x = Math.floor(Math.random() * ((window.innerWidth / 2 - 100) - 100) + 100);
    y ? y:y = -130;

    let xArr = [25, 0, 20, 80, 100, 75];
    let yArr = [50, 90, 130, 130, 90, 50];

    let drawHexagon = () =>{
        hexagon.moveTo(xArr[0], yArr[0]);

        for (let i = 1; i< xArr.length; i++)
            hexagon.lineTo(xArr[i], yArr[i])
    };
    
    drawHexagon();
    const area = () => {

        let sum = 0;
        const arrsLen = xArr.length
        for (let i = 0; i < arrsLen-1; i++)
            sum += xArr[i] * yArr[i+1] - yArr[i] * xArr[i+1]
        
        sum += xArr[arrsLen-1] * yArr[0] - yArr[arrsLen-1] * xArr[0]

        return Math.abs(sum/2)
    };

    hexagon.area = area();
    hexagon.position.x = x;
    hexagon.position.y = y;
    hexagon.interactive = true;
    hexagon.buttonMode = true;

    hexagon.changeColor = () => {
        hexagon.beginFill(colors[Math.floor(Math.random() * colors.length)]);
        drawHexagon();
        hexagon.endFill();
    };
    hexagon.type = 'hexagon';
    return hexagon;
}
