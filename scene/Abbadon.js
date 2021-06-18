class Abbadon extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,image){
      super(scene, x, y, image);
  
      // 3.2 add to scene
  
      scene.add.existing(this);
      scene.abbadon.add(this);
  
    }
    update(player){

    }
  }
