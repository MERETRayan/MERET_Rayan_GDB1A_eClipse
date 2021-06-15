class Scene1 extends Phaser.Scene {
    
    constructor(){
        super("scene1");
    }
    
    init(data){

        this.x = data.playerX;
        this.y = data.playerY;


        this.speed = data.speed;
        this.playerSpeed = this.speed;

        this.life = data.vie;
        this.sang = data.blood;


    }
   

    create(){
        
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


        this.control = this.scene.get('control');
      
        

        player = this.player = this.physics.add.sprite(this.x, this.y, 'player');
        this.barreVie = this.physics.add.sprite(0,0,'barreVie').setOrigin(0,0);
        this.barreVie.setScrollFactor(0,0);
        this.buttonProj = this.physics.add.sprite(785,340,'buttonProj').setOrigin(0,0);
        this.buttonProj.setScrollFactor(0,0);
        vie = this.life;
        blood = this.sang;
        this.player.setGravityY(200);
        this.player.body.setSize(80,120).setOffset(100,70)
        this.player.setBounce(0.0);
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.addKeys({ 'up': Phaser.Input.Keyboard.KeyCodes.UP,
            'down': Phaser.Input.Keyboard.KeyCodes.DOWN, 
            'left': Phaser.Input.Keyboard.KeyCodes.LEFT,
            'right': Phaser.Input.Keyboard.KeyCodes.RIGHT,
            'space' : Phaser.Input.Keyboard.KeyCodes.SPACE,
            'buttonC' : Phaser.Input.Keyboard.KeyCodes.C,
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
        
        if (vie == 5 ){
            if (blood==10){
                this.barreVie.anims.play("5vie_10blood",true);
            }
            if (blood==9){
                this.barreVie.anims.play("5vie_9blood",true);
            }
            if (blood==8){
                this.barreVie.anims.play("5vie_8blood",true);
            }
            if (blood==7){
                this.barreVie.anims.play("5vie_7blood",true);
            }
            if (blood==6){
                this.barreVie.anims.play("5vie_6blood",true);
            }
            if (blood==5){
                this.barreVie.anims.play("5vie_5blood",true);
            }
            if (blood==4){
                this.barreVie.anims.play("5vie_4blood",true);
            }
            if (blood==3){
                this.barreVie.anims.play("5vie_3blood",true);
            }
            if (blood==2){
                this.barreVie.anims.play("5vie_2blood",true);
            }
            if (blood==1){
                this.barreVie.anims.play("5vie_1blood",true);
            }
            if (blood==0){
                this.barreVie.anims.play("5vie_0blood",true);
            }
    
        }
        if (vie == 4 ){
            if (blood==10){
                this.barreVie.anims.play("4vie_10blood",true);
            }
            if (blood==9){
                this.barreVie.anims.play("4vie_9blood",true);
            }
            if (blood==8){
                this.barreVie.anims.play("4vie_8blood",true);
            }
            if (blood==7){
                this.barreVie.anims.play("4vie_7blood",true);
            }
            if (blood==6){
                this.barreVie.anims.play("4vie_6blood",true);
            }
            if (blood==5){
                this.barreVie.anims.play("4vie_5blood",true);
            }
            if (blood==4){
                this.barreVie.anims.play("4vie_4blood",true);
            }
            if (blood==3){
                this.barreVie.anims.play("4vie_3blood",true);
            }
            if (blood==2){
                this.barreVie.anims.play("4vie_2blood",true);
            }
            if (blood==1){
                this.barreVie.anims.play("4vie_1blood",true);
            }
            if (blood==0){
                this.barreVie.anims.play("4vie_0blood",true);
            }
        }
        if (vie == 3 ){
            if (blood==10){
                this.barreVie.anims.play("3vie_10blood",true);
            }
            if (blood==9){
                this.barreVie.anims.play("3vie_9blood",true);
            }
            if (blood==8){
                this.barreVie.anims.play("3vie_8blood",true);
            }
            if (blood==7){
                this.barreVie.anims.play("3vie_7blood",true);
            }
            if (blood==6){
                this.barreVie.anims.play("3vie_6blood",true);
            }
            if (blood==5){
                this.barreVie.anims.play("3vie_5blood",true);
            }
            if (blood==4){
                this.barreVie.anims.play("3vie_4blood",true);
            }
            if (blood==3){
                this.barreVie.anims.play("3vie_3blood",true);
            }
            if (blood==2){
                this.barreVie.anims.play("3vie_2blood",true);
            }
            if (blood==1){
                this.barreVie.anims.play("3vie_1blood",true);
            }
            if (blood==0){
                this.barreVie.anims.play("3vie_0blood",true);
            }
        }
        if (vie == 2 ){
            if (blood==10){
                this.barreVie.anims.play("2vie_10blood",true);
            }
            if (blood==9){
                this.barreVie.anims.play("2vie_9blood",true);
            }
            if (blood==8){
                this.barreVie.anims.play("2vie_8blood",true);
            }
            if (blood==7){
                this.barreVie.anims.play("2vie_7blood",true);
            }
            if (blood==6){
                this.barreVie.anims.play("2vie_6blood",true);
            }
            if (blood==5){
                this.barreVie.anims.play("2vie_5blood",true);
            }
            if (blood==4){
                this.barreVie.anims.play("2vie_4blood",true);
            }
            if (blood==3){
                this.barreVie.anims.play("2vie_3blood",true);
            }
            if (blood==2){
                this.barreVie.anims.play("2vie_2blood",true);
            }
            if (blood==1){
                this.barreVie.anims.play("2vie_1blood",true);
            }
            if (blood==0){
                this.barreVie.anims.play("2vie_0blood",true);
            }
        }
        if (vie == 1 ){
            if (blood==10){
                this.barreVie.anims.play("1vie_10blood",true);
            }
            if (blood==9){
                this.barreVie.anims.play("1vie_9blood",true);
            }
            if (blood==8){
                this.barreVie.anims.play("1vie_8blood",true);
            }
            if (blood==7){
                this.barreVie.anims.play("1vie_7blood",true);
            }
            if (blood==6){
                this.barreVie.anims.play("1vie_6blood",true);
            }
            if (blood==5){
                this.barreVie.anims.play("1vie_5blood",true);
            }
            if (blood==4){
                this.barreVie.anims.play("1vie_4blood",true);
            }
            if (blood==3){
                this.barreVie.anims.play("1vie_3blood",true);
            }
            if (blood==2){
                this.barreVie.anims.play("1vie_2blood",true);
            }
            if (blood==1){
                this.barreVie.anims.play("1vie_1blood",true);
            }
            if (blood==0){
                this.barreVie.anims.play("1vie_0blood",true);
            }
        }
        if (vie == 0 ){
            if (blood==10){
                this.barreVie.anims.play("0vie_10blood",true);
            }
            if (blood==9){
                this.barreVie.anims.play("0vie_9blood",true);
            }
            if (blood==8){
                this.barreVie.anims.play("0vie_8blood",true);
            }
            if (blood==7){
                this.barreVie.anims.play("0vie_7blood",true);
            }
            if (blood==6){
                this.barreVie.anims.play("0vie_6blood",true);
            }
            if (blood==5){
                this.barreVie.anims.play("0vie_5blood",true);
            }
            if (blood==4){
                this.barreVie.anims.play("0vie_4blood",true);
            }
            if (blood==3){
                this.barreVie.anims.play("0vie_3blood",true);
            }
            if (blood==2){
                this.barreVie.anims.play("0vie_2blood",true);
            }
            if (blood==1){
                this.barreVie.anims.play("0vie_1blood",true);
            }
            if (blood==0){
                this.barreVie.anims.play("0vie_0blood",true);
            }
        }

        if (vie <= 0 )
        {
            toucheSol=true;
            cdHeal=true;
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

        if (fire==true)
        {
            this.buttonProj.anims.play("ProjOn",true);
        }
        if (fire==false)
        {
            this.buttonProj.anims.play("ProjOff",true);
        }
    
        if (this.cursors.buttonX.isDown && fire==true && nbProjectile==true || pad.B && fire==true && nbProjectile==true)
        {
            this.shootBeam();
            nbProjectile=false;  
            fire=false ;
            if (blood==0)
            {
                vie -=1 ;
            }
            if (blood>0)
            {
               blood = blood - 1;
            }
            if (blood<0)
            {
                blood=0;
            }
           
        }
        if (blood>10 || blood<0)
        {
            blood=10;
        }
        if (vie>5 || vie<0)
        {
            vie=5;
        }
        if (this.cursors.buttonC.isDown && cdHeal==true && vie<5 || pad.Y && cdHeal==true  && vie<5)
        {
            cdHeal=false;
            vie += 2;
            blood -= 3 ; 
            
        }
        if(cdHeal == false){
            timerHeal = timerHeal + 1
            if(timerHeal >= 1000)
            {
                cdHeal=true;
                timerHeal = 0;
            }
        }

        if (this.cursors.buttonX.isUp && vie>0 && recoveryProjectile == false || !pad.B && vie>0 && recoveryProjectile == false)
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
        if(gainSang == true){
            timerSang = timerSang + 1
            if(timerSang >= 1000)
            {
                blood += 1;
                if (blood>=10)
                {
                    blood=10;
                }
                timerSang = 0;
            }
        }
       
        }
        

    shootBeam(){
        var beam = new Beam(this);
    }

}
function resetJump() {
    if ( player.body.onFloor())
    {
        toucheSol=true;
        doubleSaut=false;
    }
    }
   
function mort() {
    vie = 0 ;
}
