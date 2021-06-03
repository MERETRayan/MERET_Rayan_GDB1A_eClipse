class Preloader extends Phaser.Scene{
    
    constructor(){
        super("Preloader");
    }
    preload(){
        this.load.spritesheet("PP","Asset/Perso_Aventure.png", { frameWidth: 25 , frameHeight: 32 });
        this.load.image("bg","Asset/j.jpg");
    }
    create(){
        this.scene.start("Scene",{maxSpeed : 200});
    }
}