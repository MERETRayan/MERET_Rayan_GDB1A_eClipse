class Araigne extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,image){
      super(scene, x, y, image);
  
      // 3.2 add to scene
  
      scene.add.existing(this);
      scene.araigne.add(this);

      this.play("AraiRight");  
  
    }
    movement(player,animAraigne){
       if ((player.x-this.x)<=10)
        {
          animAraigne=true;
          this.body.setVelocityX(-200);
        }
        if ((player.x-this.x)>=-10)
        {
          animAraigne=false;
          this.body.setVelocityX(200);
        }
        return animAraigne;
    }
  }
