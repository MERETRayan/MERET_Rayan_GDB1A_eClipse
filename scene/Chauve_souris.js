class Chauve_souris extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,image){
      super(scene, x, y, image);
  
      // 3.2 add to scene
  
      scene.add.existing(this);
      scene.chauve_souris.add(this);
  
    }
    update(player){
    }
  }
