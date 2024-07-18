// Create the application helper and add its render target to the page
const app = new PIXI.Application({
    width: window.innerWidth * 0.95,
    height: window.innerHeight * 0.95,
    backgroundColor: 0x1099bb
});
console.log(app)
document.body.appendChild(app.canvas);  // app.view instead of app.canvas

// Load the asset and create the sprite
PIXI.Assets.load('assets/images/cannonball.webp').then(() => {
    let sprite = PIXI.Sprite.from('assets/images/cannonball.webp');
    app.stage.addChild(sprite);

    // Add a ticker callback to move the sprite back and forth
    let elapsed = 0.0;
    app.ticker.add((ticker) => {
        elapsed += ticker.deltaTime;
        sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
    });
}).catch((error) => {
    console.error('Error loading asset:', error);
});
