class Menu extends Phaser.Scene{

    constructor(){
        super("menu");
    }

    preload(){
        this.load.spritesheet("player","Asset/Perso_Eclipse.png", { frameWidth: 200 , frameHeight: 200 });
        this.load.spritesheet("barreVie","Asset/Vie.png", { frameWidth: 275.3 , frameHeight: 99.6 });
        this.load.image("bg","Asset/Ecran_Titre.png");
        this.load.image("attack","Asset/Attack.png");
        this.load.image("control","Asset/control.png");
        this.load.spritesheet("beam","Asset/ProjSang.png", { frameWidth: 80 , frameHeight: 64 });
        this.load.spritesheet("buttonProj","Asset/Projectile.png", { frameWidth: 101 , frameHeight: 105 });
        this.load.spritesheet("Heal","Asset/life.png", { frameWidth: 101 , frameHeight: 105 });
        this.load.spritesheet("Araigne","Asset/Araigne.png", { frameWidth: 120 , frameHeight: 40 });
        this.load.spritesheet("Abbadon","Asset/Abbadon.png", { frameWidth: 300 , frameHeight: 300 });
        this.load.spritesheet("Archer","Asset/Archer.png", { frameWidth: 100 , frameHeight: 200 });
        this.load.spritesheet("Chauve_Souris","Asset/Chauve_Souris.png", { frameWidth: 67 , frameHeight: 67 });
        this.load.tilemapTiledJSON('Foret', 'Asset/Map_eClipse.json');
        this.load.image('Map',"Asset/Asset_eClipse.png");
    }
    create(){
        this.scene.start('titre')

        this.anims.create({
            key: 'AraiRight',
            frames: this.anims.generateFrameNumbers('Araigne', { start: 2, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'AraiLeft',
            frames: this.anims.generateFrameNumbers('Araigne', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'Projright',
            frames: this.anims.generateFrameNumbers('beam', { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'Projleft',
            frames: this.anims.generateFrameNumbers('beam', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });


        this.anims.create({
            key: 'HealOn',
            frames: [ { key: 'Heal', frame: 0 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'HealOff',
            frames: [ { key: 'Heal', frame: 1 } ],
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'ProjOn',
            frames: [ { key: 'buttonProj', frame: 0 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'ProjOff',
            frames: [ { key: 'buttonProj', frame: 1 } ],
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: '5vie_10blood',
            frames: [ { key: 'barreVie', frame: 0 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '5vie_9blood',
            frames: [ { key: 'barreVie', frame: 1 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '5vie_8blood',
            frames: [ { key: 'barreVie', frame: 2 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '5vie_7blood',
            frames: [ { key: 'barreVie', frame: 3 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '5vie_6blood',
            frames: [ { key: 'barreVie', frame: 4 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '5vie_5blood',
            frames: [ { key: 'barreVie', frame: 5 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '5vie_4blood',
            frames: [ { key: 'barreVie', frame: 6 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '5vie_3blood',
            frames: [ { key: 'barreVie', frame: 7 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '5vie_2blood',
            frames: [ { key: 'barreVie', frame: 8 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '5vie_1blood',
            frames: [ { key: 'barreVie', frame: 9 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '5vie_0blood',
            frames: [ { key: 'barreVie', frame: 10 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '4vie_10blood',
            frames: [ { key: 'barreVie', frame: 11 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '4vie_9blood',
            frames: [ { key: 'barreVie', frame: 12} ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '4vie_8blood',
            frames: [ { key: 'barreVie', frame: 13 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '4vie_7blood',
            frames: [ { key: 'barreVie', frame: 14 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '4vie_6blood',
            frames: [ { key: 'barreVie', frame: 15 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '4vie_5blood',
            frames: [ { key: 'barreVie', frame: 16 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '4vie_4blood',
            frames: [ { key: 'barreVie', frame: 17 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '4vie_43blood',
            frames: [ { key: 'barreVie', frame: 18 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '4vie_2blood',
            frames: [ { key: 'barreVie', frame: 19 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '4vie_1blood',
            frames: [ { key: 'barreVie', frame: 20 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '4vie_0blood',
            frames: [ { key: 'barreVie', frame: 21 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '3vie_10blood',
            frames: [ { key: 'barreVie', frame: 22 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '3vie_9blood',
            frames: [ { key: 'barreVie', frame: 23 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '3vie_8blood',
            frames: [ { key: 'barreVie', frame: 24 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '3vie_7blood',
            frames: [ { key: 'barreVie', frame: 25 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '3vie_6blood',
            frames: [ { key: 'barreVie', frame: 26 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '3vie_5blood',
            frames: [ { key: 'barreVie', frame: 27 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '3vie_4blood',
            frames: [ { key: 'barreVie', frame: 28 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '3vie_3blood',
            frames: [ { key: 'barreVie', frame: 29 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '3vie_2blood',
            frames: [ { key: 'barreVie', frame: 30 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '3vie_1blood',
            frames: [ { key: 'barreVie', frame: 31 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '3vie_0blood',
            frames: [ { key: 'barreVie', frame: 32 } ],
            frameRate: 10,
            repeat: -1
        });this.anims.create({
            key: '2vie_10blood',
            frames: [ { key: 'barreVie', frame: 33 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '2vie_9blood',
            frames: [ { key: 'barreVie', frame: 34 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '2vie_8blood',
            frames: [ { key: 'barreVie', frame: 35 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '2vie_7blood',
            frames: [ { key: 'barreVie', frame: 36 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '2vie_6blood',
            frames: [ { key: 'barreVie', frame: 37 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '2vie_5blood',
            frames: [ { key: 'barreVie', frame: 38 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '2vie_4blood',
            frames: [ { key: 'barreVie', frame: 39 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '2vie_3blood',
            frames: [ { key: 'barreVie', frame: 40 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '2vie_2blood',
            frames: [ { key: 'barreVie', frame: 41 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '2vie_1blood',
            frames: [ { key: 'barreVie', frame: 42 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '2vie_0blood',
            frames: [ { key: 'barreVie', frame: 43 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '1vie_10blood',
            frames: [ { key: 'barreVie', frame: 44 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '1vie_9blood',
            frames: [ { key: 'barreVie', frame: 45 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '1vie_8blood',
            frames: [ { key: 'barreVie', frame: 46 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '1vie_7blood',
            frames: [ { key: 'barreVie', frame: 47 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '1vie_6blood',
            frames: [ { key: 'barreVie', frame: 48 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '1vie_5blood',
            frames: [ { key: 'barreVie', frame: 49 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '1vie_4blood',
            frames: [ { key: 'barreVie', frame: 50 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '1vie_3blood',
            frames: [ { key: 'barreVie', frame: 51 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '1vie_2blood',
            frames: [ { key: 'barreVie', frame: 52 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '1vie_1blood',
            frames: [ { key: 'barreVie', frame: 53 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '1vie_0blood',
            frames: [ { key: 'barreVie', frame: 54 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '0vie_10blood',
            frames: [ { key: 'barreVie', frame: 55 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '0vie_9blood',
            frames: [ { key: 'barreVie', frame: 56 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '0vie_8blood',
            frames: [ { key: 'barreVie', frame: 57 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '0vie_7blood',
            frames: [ { key: 'barreVie', frame: 58 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '0vie_6blood',
            frames: [ { key: 'barreVie', frame: 59 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '0vie_5blood',
            frames: [ { key: 'barreVie', frame: 60 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '0vie_4blood',
            frames: [ { key: 'barreVie', frame: 61 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '0vie_3blood',
            frames: [ { key: 'barreVie', frame: 62 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '0vie_2blood',
            frames: [ { key: 'barreVie', frame: 63 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '0vie_1blood',
            frames: [ { key: 'barreVie', frame: 64 } ],
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: '0vie_0blood',
            frames: [ { key: 'barreVie', frame: 65 } ],
            frameRate: 10,
            repeat: -1
        });
    }
} 