const canvas = document.getElementById('mycanvas');

export let app = new PIXI.Application({
    view: canvas,
    width: window.innerWidth / 2, 
    height: window.innerHeight / 1.7,
});