function rngQ(){									//Randomly selecting a quadrant
	n=Math.floor(Math.random()*4);
	if(n===0){
		random=4;
	}
	else{
		random=n;
	}
	return random;
}

var turn="";
var q=0;
function check(dmg){		//Player attacking enemy.
	if(dmg===0){
		console.log("Miss!")
	}
	else{
		turn=turnState();
		if (turn==="Player"){ //Figure out who's shooting at whom!
			target=find[(((document.getElementById('OPmoniker')).innerHTML).toLowerCase())+"Object"]();
			turn="#OP";
		}
		else{
			target=Playerfind[((document.getElementById('moniker')).innerHTML)+"Object"]();
			turn="#";
		}
		q=rngQ();						//Quadrant to assign damage to.
		console.log(dmg+" damage headed toward "+target.Player.name+"'s #"+q+" quadrant!");
	  for(var i in target.aRm){
	  	if(target.aRm[i]===target.aRm[q]){		//Find the right quadrant & check armor
	   		if(target.aRm[q].plating===0){			//If there is no armor call breach func
	       	pass=dmg
	       	console.log("check",q,pass)
	        breach(pass);
	      }
	    	else if(target.aRm[q].plating===dmg){	//If the armor is destroyed declare it.
	    		target.aRm[q].plating=0;
					$(turn+'armor'+q).text("Armor: "+target.aRm[q].plating);
	        console.log("Armor destroyed!")
	      }
	      else if(target.aRm[q].plating<=dmg){	//If destroyed with spare dmg call breach func.
	        pass=dmg-target.aRm[q].plating;
	        target.aRm[q].plating=0;
					$(turn+'armor'+q).text("Armor: "+target.aRm[q].plating);
	        console.log("Armor breached");
	        breach(pass)
	    	}
	      else{																	//Else mark damage.
	        target.aRm[q].plating-=dmg;
	        console.log("Damage blocked. Plating reduced by "+dmg+".")
					$(turn+'armor'+q).text("Armor: "+target.aRm[q].plating);
	      }
	    }
	  }
	}
	console.log("~~~~~~~~~~~*$")
	turnSwap();
}

function breach(pass){ //Checks damage breaching armor against insulation.
	slot=0;
	if(target.aRm[q].weapons[0]==="error 0"||target.aRm[q].weapons[0]==="empty"){
		slot=1;
	} 	//Check if something is in slot 0 and act accordingly.
  if(target.aRm[q].insulation>pass){ //If insulated mark damage.
    target.aRm[q].insulation-=pass;
		$(turn+'insulation'+q).text("Insulation: "+target.aRm[q].insulation);
    console.log(pass+" Insulation units damaged!");
  }
  else if(target.aRm[q].insulation===pass){ //If insulation destroyed declare it.
    target.aRm[q].insulation=0;
		$(turn+'insulation'+q).text("Insulation: "+target.aRm[q].insulation);
    console.log("Fatal error. Insulation offline.")
  }
  else{ //If pass is bigger than or equal to insultation...
    pass=pass-target.aRm[q].insulation;
    target.aRm[q].insulation=0;
		$(turn+'insulation'+q).text("Insulation: "+target.aRm[q].insulation);
    console.log("Insulation offline!")
      if(target.aRm[q].weapons[0]==="error 0"||target.aRm[q].weapons[0]==="empty"){
				wound(pass); //...and there's no weapon to destroy, call wound for core damage.
      }
			else{
				console.log(target.aRm[q].weapons[slot]+" destroyed!") //...destroy a weapon.
				target.aRm[q].weapons.splice(0,1,"error 0");
				$(turn+'weapon'+q+slot).text(target.aRm[q].weapons[slot]);
			}
  }
}

function wound(pass){
  target.Player.health-=1;
	$(turn+'health').html(target.Player.health);
	console.log(target.Player.name+"'s core has been damaged!")
  if(target.Player.health===0){
    console.log("aRm destroyed!")
		if(turnState()==="OP"){
			console.log("You lose...")
		}
		else{
			console.log("You win!");
		}
  }
}
