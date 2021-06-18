class Attack extends Phaser.GameObjects.Sprite{
    constructor(scene){
      if (firedirection[0])
      {
      var x = scene.player.x+115;
      var y = scene.player.y+10;
      }
      else if (firedirection[1])
      {
      var x = scene.player.x-35;
      var y = scene.player.y+10;
      }
      else 
      {
        var x = scene.player.x+115;
        var y = scene.player.y+10;
      }
      super(scene, x, y, "attack");
  
      // 3.2 add to scene
      scene.add.existing(this);
      
      scene.physics.world.enableBody(this);

      scene.hitbox.add(this);
  
    }
    update(){

    }
  }
