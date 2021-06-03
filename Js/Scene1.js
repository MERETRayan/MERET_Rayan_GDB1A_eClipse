class Scene extends Phaser.Scene{
    constructor(){
        super("Scene");
    }
    init(data){
        this.maxSpeed = data.maxSpeed;
        this.playerSpeed = this.maxSpeed;
    }
    preload(){
    }
    create(){
        //this.pomme=false ;

        this.controle = this.scene.get('controle');

        this.player = this.physics.add.sprite(400,300,"PP").setSize(28, 15).setOffset(1, 40);
        this.player.setCollideWorldBounds(true);


        this.cursors = this.input.keyboard.addKeys({
        'up': Phaser.Input.Keyboard.KeyCodes.UP,
        'down': Phaser.Input.Keyboard.KeyCodes.DOWN, 
        'left': Phaser.Input.Keyboard.KeyCodes.LEFT,
        'right': Phaser.Input.Keyboard.KeyCodes.RIGHT,
        'space' : Phaser.Input.Keyboard.KeyCodes.SPACE
    });

        this.controle.resetControl(this.cursors);

        
    }
    uptdate(){
        
        
        let pad = Phaser.Input.Gamepad.Gamepad;
    
        if(this.input.gamepad.total){   //Si une manette est connecté
            pad = this.input.gamepad.getPad(0);  //pad récupère les inputs du joueur
            xAxis = pad ? pad.axes[0].getValue() : 0;   //Si le stick est utilisé xAxys récupère la valeur sur l'axe X, sinon il est égale a 0
            yAxis = pad ? pad.axes[1].getValue() : 0;   //Pareil pour l'axe Y
    }
    
    
        this.player.setVelocity(
            //X
            this.controle.movementJ(this.controle.inputJoueur(this.cursors, inputP, pad, xAxis, yAxis), this.player,this.playerSpeed, this.maxSpeed)[0],
            //Y
            this.controle.movementJ(this.controle.inputJoueur(this.cursors, inputP, pad, xAxis, yAxis), this.player,this.playerSpeed, this.maxSpeed)[1]);
        
            
    }
    }
