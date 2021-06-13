class Scene1 extends Phaser.Scene {
    
    constructor(){
        super("scene1");
    }
    
    init(data){

        this.x = data.playerX;
        this.y = data.playerY;


        this.speed = data.speed;
        this.playerSpeed = this.speed;


    }
   

    create(){
        
        this.bg = this.add.image(0,0,"bg").setOrigin(0,0);
        this.physics.world.setBounds(0, 0, 6400, 3340);

        const map = this.make.tilemap({ key: 'Foret' })
        const tileset = map.addTilesetImage('Asset_eClipse','Map',32,32)

        const sol = map.createStaticLayer('Sol', tileset)
        const platform = map.createStaticLayer('Platform', tileset)
        const pique = map.createStaticLayer('Pique', tileset)
        const wall = map.createStaticLayer('Wall', tileset)

        sol.setCollisionByProperty({collides: true })
        pique.setCollisionByProperty({collides: true })
        wall.setCollisionByProperty({collides: true })
        platform.setCollisionByProperty({collides: true })

       const debugGraphics = this.add.graphics().setAlpha(0.7)
        sol.renderDebug(debugGraphics,{
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        })  
        /*
        pique.renderDebug(debugGraphics,{
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        }) 
        platform.renderDebug(debugGraphics,{
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        }) 
        wall.renderDebug(debugGraphics,{
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        }) 
*/


        this.control = this.scene.get('control');
        player = this.player = this.physics.add.sprite(this.x, this.y, 'player');
        this.player.setGravityY(200);
        this.player.body.setSize(80,120).setOffset(100,70)
        this.player.setBounce(0.0);
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.addKeys({ 'up': Phaser.Input.Keyboard.KeyCodes.UP,
            'down': Phaser.Input.Keyboard.KeyCodes.DOWN, 
            'left': Phaser.Input.Keyboard.KeyCodes.LEFT,
            'right': Phaser.Input.Keyboard.KeyCodes.RIGHT,
            'space' : Phaser.Input.Keyboard.KeyCodes.SPACE,
            'buttonX' : Phaser.Input.Keyboard.KeyCodes.X,
        });

        this.control.resetTouche(this.cursors);

        this.projectiles = this.add.group();

        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, 6400, 3300);
        
        this.physics.add.collider(this.player,sol,resetJump);
        this.physics.add.collider(this.player,platform,resetJump);
        this.physics.add.collider(this.player,wall,resetJump);
        this.physics.add.collider(this.player,pique,mort);
        this.physics.add.collider(this.projectiles,wall);
        


    }
 
    update(){
        if (vie <= 0 )
        {
            vie=5;
            this.registry.destroy();
            this.events.off();
            this.scene.restart();
            
        }
        let pad = Phaser.Input.Gamepad.Gamepad;
    
        if(this.input.gamepad.total){   //Si une manette est connecté
            pad = this.input.gamepad.getPad(0);  //pad récupère les inputs du joueur
            xAxis = pad ? pad.axes[0].getValue() : 0;   //Si le stick est utilisé xAxys récupère la valeur sur l'axe X, sinon il est égale a 0
            yAxis = pad ? pad.axes[1].getValue() : 0;   //Pareil pour l'axe Y
    }
    toucheSol = this.control.move(this.control.inputPP(this.cursors, inputP, pad, xAxis, yAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif)[2];
    doubleSaut = this.control.move(this.control.inputPP(this.cursors, inputP, pad, xAxis, yAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif)[3];
    doubleSautActif = this.control.move(this.control.inputPP(this.cursors, inputP, pad, xAxis, yAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif)[4];

    this.player.setVelocity(
        //X
        this.control.move(this.control.inputPP(this.cursors, inputP, pad, xAxis, yAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif)[0],
        //Y
        this.control.move(this.control.inputPP(this.cursors, inputP, pad, xAxis, yAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif)[1]);

     
    
        if (this.cursors.buttonX.isDown && fire==true && nbProjectile==true)
        {
            this.shootBeam();
            nbProjectile=false;  
            fire=false ;
            if (p>0)
            {
               p = p - 1;
            }
        }
        if (this.cursors.buttonX.isUp && p>0 && recoveryProjectile == false || !pad.X && p>0 && recoveryProjectile == false)
        {
            fire=true;
            nbProjectile=true;
            recoveryProjectile = true;
        }

        if(recoveryProjectile == true){
            timerProj = timerProj + 1
            if(timerProj >= 60)
            {
                recoveryProjectile = false
                timerProj = 0;
            }
        }

        }

    shootBeam(){
        var beam = new Beam(this);
    }

}
function resetJump() {
    toucheSol=true;
    doubleSaut=false;
}
function mort() {
    vie=0;
}
