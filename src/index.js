import { shapes } from './components/shapes';
import { app } from './app';

let gravityAmountView = document.getElementById('grav');
let figuresAmountView = document.getElementById('figures')

let gravityIncreaseButton = document.getElementById('plus-grav');
let gravityDecreaseButton = document.getElementById('minus-grav');

let increaseAmoutOfFiguresButton = document.getElementById('plus-figure')
let decreaseAmoutOfFiguresButton = document.getElementById('minus-figure')

let figuresAmount = 2
let gravityAmount = 1;

gravityAmountView.innerHTML = gravityAmount;
figuresAmountView.innerHTML = figuresAmount;

decreaseAmoutOfFiguresButton.onclick = () => { 
    if (figuresAmount > 1) {
        figuresAmountView.innerHTML = --figuresAmount;
    }
};

increaseAmoutOfFiguresButton.onclick = () => { 
    figuresAmountView.innerHTML = ++figuresAmount;
};

gravityDecreaseButton.onclick = () => { 
    if (gravityAmount > 1) {
        gravityAmountView.innerHTML = --gravityAmount;
    }
};

gravityIncreaseButton.onclick = () => {
    gravityAmountView.innerHTML = ++gravityAmount;
}


export let view = {
    loadGame: () => {

        app.ticker.add(() => {
            let shape = shapes[Math.floor(Math.random() * shapes.length)]()
            shape.on('pointerdown', () => {
                shape.clear()
                app.stage.children.forEach(child => {
                    if (child.type === shape.type) {
                        child.changeColor()
                    }
                })
                shape.destroy();
            });
            if (app.stage.children.length < figuresAmount)
                app.stage.addChild(shape)
        })

        app.ticker.add(function () {
            document.getElementById('numSh').innerHTML = app.stage.children.length;
            app.stage.children.forEach(shape => {
                // console.log(shape.type)
                shape.y += gravityAmount
                if (shape.position.y >= app.renderer.height){
                    shape.destroy()
                }
            })
        });
        
    }
}
view.loadGame();