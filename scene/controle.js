class Control extends Phaser.Scene{

    constructor(){
        super("control");
    }

    inputPP(cursors, inputP, pad, xAxis, yAxis){
        //Input
        inputP[4] = cursors.buttonX.isDown || pad.B ? true : false;

        inputP[3] = cursors.space.isDown || pad.A ? true : false;
        
        //Le joueur appuie sur Droite(Clavier) ou pad Droite/stick vers la Droite(Manette)
        inputP[0] = cursors.right.isDown || pad.right || xAxis > 0.4 ? true : false;
        

        //Le joueur appuie sur Gauche(Clavier) ou pad gauche/stick vers la Gauche(Manette)
        inputP[1] = cursors.left.isDown || pad.left || xAxis < -0.4 ? true : false;
        //Le joueur appuie sur Bas(Clavier) ou pad Bas/stick vers la Bas(Manette)
        
        inputP[2] = cursors.up.isDown || pad.up || yAxis > +0.5 ? true : false;

        return (inputP);
    }
    
    move(inputP, player, playerSpeed, speed ,toucheSol,firedirection,doubleSaut,doubleSautActif,attaque){
        playerSpeed = speed;
        

        if (inputP[0] && !inputP[4] && attaque==true){
            player.setVelocityX(playerSpeed);
            firedirection[0]=true;
            firedirection[1]=false;
        }
        
        if (inputP[1] && !inputP[4] && attaque==true){
            player.setVelocityX(-playerSpeed);
            firedirection[0]=false;
            firedirection[1]=true;
        }

        if (!inputP[0] && !inputP[1]){
            player.setVelocityX(0);
        }

        if (inputP[0] && inputP[1]){
            player.setVelocityX(0);
        }

        if (inputP[3]  && toucheSol==true && attaque==true){
            player.setVelocityY(-250);
            toucheSol=false;
        }

        if (!inputP[3] && toucheSol==false && doubleSaut==false &&  attaque==true)
        {
            
            doubleSautActif=true;
            
        }
        if (inputP[3] && doubleSautActif==true &&  attaque==true)
        {
            player.setVelocityY(-250);
            doubleSautActif = false;
            doubleSaut = true;
            
            
        }
        
        return [player.body.velocity.x, player.body.velocity.y,toucheSol,doubleSaut,doubleSautActif];
    }
    resetTouche(cursors){
            cursors.left.isDown = false;
            cursors.right.isDown = false;
            cursors.up.isDown = false;
            cursors.down.isDown = false;
    }
}