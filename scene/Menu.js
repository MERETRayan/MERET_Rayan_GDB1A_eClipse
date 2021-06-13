class Menu extends Phaser.Scene{

    constructor(){
        super("menu");
    }

    preload(){
        this.load.spritesheet("player","Asset/Perso_Eclipse.png", { frameWidth: 200 , frameHeight: 200 });
        this.load.spritesheet("vie","Asset/Vie.png", { frameWidth: 123 , frameHeight: 326 });
        this.load.image("bg","Asset/Ecran_Titre.png");
        this.load.image("beam","asset/Oeuf.png");
        this.load.tilemapTiledJSON('Foret', 'Asset/Map_eClipse.json');
        this.load.image('Map',"Asset/Asset_eClipse.png");
    }
    create(){
        this.scene.start('scene1', {playerX: 100, playerY: 500, speed: 300 })
    }
} 