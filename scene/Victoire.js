class Victoire extends Phaser.Scene{
    constructor(){
        super("victoire");
    }
    preload(){

    }
    create(){
        this.bgVictory = this.add.image(0,0,"victoire").setOrigin(0,0);
    }

    update(){
    }
}