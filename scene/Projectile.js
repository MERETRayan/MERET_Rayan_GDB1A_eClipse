class Beam extends Phaser.GameObjects.Sprite{
    constructor(scene){
  
      var x = scene.player.x;
      
      var y = scene.player.y +30;
  
      super(scene, x, y, "beam");
  
      // 3.2 add to scene
      scene.add.existing(this);
      
      if (firedirection[0])
      {
        this.play("Projright");
      }
      else if (firedirection[1])
      {
        this.play("Projleft");
      }
      else 
      {
        this.play("Projright");
      }
      // 3.3
      scene.physics.world.enableBody(this);

      if (firedirection[0])
      {
        this.body.velocity.x = 600;
      }
      else if (firedirection[1])
      {
        this.body.velocity.x = - 600;
      }
      else 
      {
        this.body.velocity.x = - 600;
      }
      // 4.2 add the beam to the projectiles group
      scene.projectiles.add(this);
  
    }
    update(){

    }
  }
