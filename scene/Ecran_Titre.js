class Titre extends Phaser.Scene{
    constructor(){
        super("titre");
    }
    preload(){

    }
    create(){
        this.bg = this.add.image(0,0,"bg").setOrigin(0,0);

        
        this.cursors = this.input.keyboard.addKeys({ 'up': Phaser.Input.Keyboard.KeyCodes.UP,
            'down': Phaser.Input.Keyboard.KeyCodes.DOWN, 
            'left': Phaser.Input.Keyboard.KeyCodes.LEFT,
            'right': Phaser.Input.Keyboard.KeyCodes.RIGHT,
            'space' : Phaser.Input.Keyboard.KeyCodes.SPACE,
            'buttonC' : Phaser.Input.Keyboard.KeyCodes.C,
            'buttonX' : Phaser.Input.Keyboard.KeyCodes.X,
        });
    
    }
    
    update(){
        let pad = Phaser.Input.Gamepad.Gamepad;
    
        if(this.input.gamepad.total){   //Si une manette est connecté
            pad = this.input.gamepad.getPad(0);  //pad récupère les inputs du joueur
            xAxis = pad ? pad.axes[0].getValue() : 0;   //Si le stick est utilisé xAxys récupère la valeur sur l'axe X, sinon il est égale a 0
            yAxis = pad ? pad.axes[1].getValue() : 0;   //Pareil pour l'axe Y
    }
    if (pad.A || this.cursors.buttonX.isDown)
    {
        this.scene.start('scene1', {playerX: 100, playerY: 575, speed: 300 ,vie: 5,blood: 10, toucheSol:true, doubleSaut:false,doubleSautActif:false ,vieAbba: 6,recovery:true ,timerRecovery:0})
    }
     
}
}       

