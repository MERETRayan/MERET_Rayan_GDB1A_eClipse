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
        this.sol = data.toucheSol;
        this.deuxSol = data.doubleSaut;
        this.deuxSolActif = data.doubleSautActif;

        this.vieAbba = data.vieAbba;

        this.timerRecovery = data.timerRecovery
        this.recovery = data.recovery
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

        this.cursors = this.input.keyboard.addKeys({ 'up': Phaser.Input.Keyboard.KeyCodes.UP,
            'down': Phaser.Input.Keyboard.KeyCodes.DOWN, 
            'left': Phaser.Input.Keyboard.KeyCodes.LEFT,
            'right': Phaser.Input.Keyboard.KeyCodes.RIGHT,
            'space' : Phaser.Input.Keyboard.KeyCodes.SPACE,
            'buttonC' : Phaser.Input.Keyboard.KeyCodes.C,
            'buttonV' : Phaser.Input.Keyboard.KeyCodes.V,
            'buttonX' : Phaser.Input.Keyboard.KeyCodes.X,
            
        });
        this.end = false ;
        this.control = this.scene.get('control');

        item = this.physics.add.group();
        if (seau1 == false){
            item1 = item.create(1800,120,"seau");
        }
        if (seau2 == false){
            item2 = item.create(3250,1630,"seau");
        }
        
        this.porte = this.physics.add.staticGroup();
        
        if (porte_1 == false)
        {
           this.porte1 =  this.porte.create(4200,550,"porte1")
           this.porte1.body.setSize(600,20).setOffset(0,20);
        }
        if (porte_2 == false)
        {
            this.porte2 = this.porte.create(1380,2370,"porte2");
            this.porte2.body.setSize(600,20).setOffset(0,20);
        }
        this.arret=false;

        this.stele = this.physics.add.staticGroup();
        if (stele_1 == false)
        {
           this.stele1 =  this.stele.create(4300,510,"stele1")
        }
        if (stele_2 == false)
        {
            this.stele2 = this.stele.create(1280,2330,"stele2")
        }
        this.fin =  this.physics.add.sprite(4050,2980,'Halo').setOrigin(0,0);
        
        sceau = this.physics.add.sprite(700, 0, 'sceau').setOrigin(0,0);
        sceau.setScrollFactor(0,0);
        player = this.player = this.physics.add.sprite(this.x, this.y, 'player');
        this.barreVie = this.physics.add.sprite(0,0,'barreVie').setOrigin(0,0);
        this.barreVie.setScrollFactor(0,0);
        this.buttonProj = this.physics.add.sprite(785,340,'buttonProj').setOrigin(0,0);
        this.buttonProj.setScrollFactor(0,0);
        this.heal = this.physics.add.sprite(685,341,'Heal').setOrigin(0,0);
        this.heal.setScrollFactor(0,0);
        

        timerRecovery = this.timerRecovery
        recovery = this.recovery
        vieAbba = this.vieAbba
        vie = this.life;
        blood = this.sang;
        toucheSol = this.sol;
        doubleSaut = this.deuxSol;
        doubleSautActif = this.deuxSolActif;

        this.projectiles = this.add.group();


        this.hitbox = this.add.group();




        this.araigne = this.physics.add.group();
        this.araigne1 = new Araigne(this,2000,550,"Araigne");
        this.araigne2 = new Araigne(this,3400,550,"Araigne");
        this.araigne3 = new Araigne(this,3800,2300,"Araigne");

        this.timearret=0;
        this.abbadon = this.physics.add.group();
        
        this.archer = this.physics.add.group();
        
        this.chauve_souris = this.physics.add.group();
        new Chauve_souris(this,4000,600,"Chauve_Souris");
        this.chauve_souris1 = new Chauve_souris(this,3800,2200,"Chauve_Souris");
        this.chauve_souris1.flipX = 180;

        this.player.setGravityY(200);
        this.player.body.setSize(80,120).setOffset(60,43)
        this.player.setBounce(0.0);
        this.player.setCollideWorldBounds(true);

        this.control.resetTouche(this.cursors);

     

        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, 6400, 3300);
        
        this.physics.add.collider(this.player,sol,resetJump);
        this.physics.add.collider(this.player,platform,resetJump);
        this.physics.add.collider(this.player,wall,resetJump);
        this.physics.add.collider(this.player,this.porte,resetJump);
        this.physics.add.collider(this.player,this.stele1,overture1);
        this.physics.add.collider(this.player,this.stele2,overture2);

        this.physics.add.collider(this.player,item1,collect1);
        this.physics.add.collider(this.player,item2,collect2);

        this.physics.add.collider(this.araigne,sol);
        this.physics.add.collider(this.araigne,platform);
        this.physics.add.collider(this.araigne,wall);

        this.physics.add.collider(this.chauve_souris,sol);
        this.physics.add.collider(this.chauve_souris,platform);
        this.physics.add.collider(this.chauve_souris,wall);



        this.physics.add.collider(this.player,pique,mort);
        this.physics.add.overlap(this.player,this.araigne,degat);
        this.physics.add.overlap(this.player,this.chauve_souris,degat);


        this.physics.add.collider(this.projectiles,wall,destroyBullet);
        this.physics.add.collider(this.hitbox,this.araigne,atkAraigne);
        this.physics.add.collider(this.hitbox,this.archer,atkAraigne);
        this.physics.add.collider(this.hitbox,this.chauve_souris,atkAraigne);
        this.physics.add.collider(this.projectiles,this.araigne,projAraigne);
        this.physics.add.collider(this.projectiles,this.archer,projAraigne);
        this.physics.add.collider(this.projectiles,this.chauve_souris,projAraigne);

        this.physics.add.overlap(this.projectiles,this.abbadon,projAbbadon,null,this)
        this.physics.add.overlap(this.player,this.fin,fin,null,this)

        this.bgcontrol = this.add.image(125,400,"control").setOrigin(0,0);
        this.bgcontrol.setVisible(false);

    }
 
    update(){

        let pad = Phaser.Input.Gamepad.Gamepad;
    
        if(this.input.gamepad.total){   //Si une manette est connect??
            pad = this.input.gamepad.getPad(0);  //pad r??cup??re les inputs du joueur
            xAxis = pad ? pad.axes[0].getValue() : 0;   //Si le stick est utilis?? xAxys r??cup??re la valeur sur l'axe X, sinon il est ??gale a 0
            yAxis = pad ? pad.axes[1].getValue() : 0;   //Pareil pour l'axe Y
    }
    
        if (debut==true)
        {
            this.bgcontrol.setVisible(true);
            if (this.cursors.buttonX.isDown==true || pad.A)
            {
                debut=false; 
                this.bgcontrol.setVisible(false);
            }
        }
        if (debut==false)
        {
            this.fin.anims.play("Halo",true);
            if (porte_1==true)
            {
                this.porte1.destroy();
                this.stele1.destroy();
            }
            if (porte_2==true)
            {
                this.porte2.destroy();
                this.stele2.destroy();
            }
            if (seau==0){
                sceau.anims.play("0seau",true);
            }
            if (seau==1){
                sceau.anims.play("1seau",true);
            }
            if (seau==2){
                sceau.anims.play("2seau",true);
            }
            if (seau==3){
                sceau.anims.play("3seau",true);
            }

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
       
    toucheSol = this.control.move(this.control.inputPP(this.cursors, inputP, pad, xAxis, yAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif,attaque)[2];
    doubleSaut = this.control.move(this.control.inputPP(this.cursors, inputP, pad, xAxis, yAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif,attaque)[3];
    doubleSautActif = this.control.move(this.control.inputPP(this.cursors, inputP, pad, xAxis, yAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif,attaque)[4];

    this.player.setVelocity(
        //X
        this.control.move(this.control.inputPP(this.cursors, inputP, pad, xAxis, yAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif,attaque)[0],
        //Y
        this.control.move(this.control.inputPP(this.cursors, inputP, pad, xAxis, yAxis), this.player,this.playerSpeed, this.speed,toucheSol,firedirection,doubleSaut,doubleSautActif,attaque)[1]);



        if (this.player.body.velocity.x < 0)
        {
            this.player.anims.play("marchegauche",true);
        }
        if (this.player.body.velocity.x > 0)
        {
            this.player.anims.play("marchedroite",true);
        }
        if (this.player.body.velocity.x == 0 && this.arret==false )
        {
           if (firedirection[0])
           {
            this.player.anims.play("arretdroite",true);
           }
           if (firedirection[1])
           {
            this.player.anims.play("arretgauche",true);
           }
        }

        if (this.player.body.velocity.y < 0)
        {
            if (firedirection[0])
           {
            this.player.anims.play("hautdroite",true);
           }
           if (firedirection[1])
           {
            this.player.anims.play("hautgauche",true);
           }
        }
        if (this.player.body.velocity.y > 0)
        {
            if (firedirection[0] )
           {
            this.player.anims.play("basdroite",true);
           }
           if (firedirection[1])
           {
            this.player.anims.play("basgauche",true);
           }
        }






        if (fire==true)
        {
            this.buttonProj.anims.play("ProjOn",true);
        }
        if (fire==false)
        {
            this.buttonProj.anims.play("ProjOff",true);
        }
        if (cdHeal==true && vie<5 && blood>=3)
        {
            this.heal.anims.play("HealOn",true);
        }
        if (cdHeal==false ||cdHeal==true && vie==5 || blood<3)
        {
            this.heal.anims.play("HealOff",true);
        }
    
        if (this.cursors.buttonV.isDown && attaque == true && this.player.body.onFloor() || pad.X && attaque == true && this.player.body.onFloor()  )
        {
            this.arret=true ;
            if (firedirection[0])
            {
                this.player.anims.play("attaquedroite",true)
            }
            if (firedirection[1])
            {
                this.player.anims.play("attaquegauche",true)
            }
            this.attack = new Attack(this);
            attaque=false ;
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);
        }
        if(attaque == false){
            timerAtk = timerAtk + 1
            if(timerAtk >= 10)
            {
                attaque=true;
                timerAtk = 0;
                this.attack.destroy();
            }
        }
        if(recovery == false){
            timerRecovery = timerRecovery + 1
            if(timerRecovery >= 60)
            {
                recovery=true;
                timerRecovery = 0;
            }
        }
        if(this.arret == true){
            this.timearret = this.timearret + 1
            if(this.timearret >= 30)
            {
                this.arret=false;
                this.timearret = 0;
            }
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
        if (blood>10)
        {
            blood=10;
        }
        if (blood<0)
        {
            blood=0;
        }
        if (vie>5)
        {
            vie=5;
        }
        if (this.cursors.buttonC.isDown && blood>=3 && cdHeal==true && vie<5 || pad.Y && blood>=3 && cdHeal==true  && vie<5)
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


        for(var i = 0; i < this.chauve_souris.getChildren().length; i++){
            var chauve_souris = this.chauve_souris.getChildren()[i];
            chauve_souris.movement(this.player);
        }


        for(var i = 0; i < this.araigne.getChildren().length; i++){
            var araigne = this.araigne.getChildren()[i];
            animAraigne = araigne.movement(this.player,animAraigne);
        }
        if (this.player.x < this.araigne1.x)
        {
            this.araigne1.flipX = 180;
        }
        if (this.player.x > this.araigne1.x)
        {
            this.araigne1.flipX = 0;
        }
        if (this.player.x < this.araigne2.x)
        {
            this.araigne2.flipX = 180;
        }
        if (this.player.x > this.araigne2.x)
        {
            this.araigne2.flipX = 0;
        }
        if (this.player.x < this.araigne3.x)
        {
            this.araigne3.flipX = 180;
        }
        if (this.player.x > this.araigne3.x)
        {
            this.araigne3.flipX = 0;
        }
        if (this.end==true)
        {
            this.scene.start("victoire");
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
            if(timerSang >= 720)
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
        doubleSautActif=false;
    }
    }
   
function mort() {
    vie = 0 ;
}
function degat() {
    if (recovery==true)
    {
        vie -= 1 ;
        recovery=false ;
    }
    
}
function overture1(player,stele)
{
    if (seau1==true)
    {
        stele_1=true;
        porte_1=true;
    }
}
function overture2(player,stele)
{
    if (seau2==true)
    {
        stele_2=true;
        porte_2=true;
    }
}
function atkAraigne(player,araigne) {
    araigne.destroy();
}
function collect1(player,item) {
    seau += 1 ;
    item.destroy();
    seau1 = true;
}
function collect2(player,item) {
    seau += 1 ;
    item.destroy();
    seau2 = true;
}
function collect3(player,item) {
    seau += 1 ;
    item.destroy();
    seau3 = true;
}
function projAraigne(projectiles,araigne) {
    araigne.destroy();
    projectiles.destroy();
}
function projAbbadon(projectiles,abbadon) {
    vieAbba -=1 ;
    projectiles.destroy();
    if (vieAbba <= 0)
    {
        abbadon.destroy();
    }
}

function destroyBullet(projectiles,wall)
{
    projectiles.destroy();
}

function fin ()
{
    this.end = true;
}