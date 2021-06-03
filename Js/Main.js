var config = {
    type: Phaser.AUTO,
    width: 1280 ,
    height: 720 , 
    physics: {
        default: 'arcade',
            arcade:{   
                gravity: {y: 0 },
                debug:false,
                
            }
    },
    input:{gamepad:true},
    scene: [Preloader,Scene,Controle] ,
};

var game = new Phaser.Game(config);



//Controle 

var inputP = [false, false, false, false, false];
var xAxis = 0 ;
var yAxis = 0 ;




