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

function check(dmg){
	if(dmg===0){
		console.log("Miss!")
	}
	var q=rngQ();
	target=find[(((document.getElementById('OPmoniker')).innerHTML).toLowerCase())+"Object"]();
	console.log(dmg+" damage headed toward #"+q+" quadrant!");
  for(var i in target.aRm){
  	if(target.aRm[i]===target.aRm[q]){		//find the right quadrant & check armor
   		if(target.aRm[i].plating===0){			//If there is no armor call breach func
		 		x=i;
       	pass=dmg
       	console.log("check",x,pass)
        breach(pass);
      }
    	else if(target.aRm[i].plating===dmg){	//If the armor is destroyed declare it.
    		target.aRm[i].plating=0;
				$('#OParmor'+q).text("Armor: "+target.aRm[i].plating);
        console.log("Armor destroyed!")
      }
      else if(target.aRm[i].plating<=dmg){	//If destroyed with spare dmg call breach func.
        x=i;
        pass=dmg-target.aRm[i].plating;
        target.aRm[i].plating=0;
				$('#OParmor'+q).text("Armor: "+target.aRm[i].plating);
        console.log("Armor breached");
        breach(pass)
    	}
      else{																	//Else mark damage.
        target.aRm[i].plating-=dmg;
        console.log(target.aRm[i].plating)
				$('#OParmor'+q).text("Armor: "+target.aRm[i].plating);
      }
    }
  }
}

function breach(pass){
  if(target.aRm[x].insulation===0){		//Find the right quadrant and check insulation.
    console.log("Insulation offline!")
		target.aRm[x].insulation=0;
		$('#OPinsulation'+x).text("Insulation: "+target.aRm[x].insulation);
      if(target.aRm[x].weapons[0]==="empty"){	//If no insulation call wound function.
      	console.log("breach 2");
        wound(pass);
      }
			else{
				console.log(target.aRm[x].weapons[0]+" destroyed!")
				target.aRm[x].weapons.shift();
				// console.log(target.aRm[x].weapons[0]+" destroyed!")
				$('#OPweapon'+x).text(target.aRm[x].weapons[0]);
				// target.aRm[x].weapons.shift();
			}
  }
  else if(target.aRm[x].insulation>pass){ //If insulated mark damage.
    target.aRm[x].insulation-=pass;
		$('#OPinsulation'+x).text("Insulation: "+target.aRm[x].insulation);
    console.log(pass+" Insulation damaged!");
  }
  else if(target.aRm[x].insulation===pass){ //If insulation destroyed declare it.
    target.aRm[x].insulation=0;
		$('#OPinsulation'+x).text("Insulation: "+target.aRm[x].insulation);
    console.log("Insulation offline!")
  }
  else{
    z=pass-target.aRm[x].insulation
    target.aRm[x].insulation=0;
		$('#OPinsulation'+x).text("Insulation: "+target.aRm[x].insulation);
    console.log("Insulation offline!")
      if(target.aRm[x].weapons!= "empty"){
				console.log(target.aRm[x].weapons[0]+" destroyed!")
				target.aRm[x].weapons.shift();
        // console.log(target.aRm[x].weapons[0]+" destroyed!")
				$('#OPweapon'+x).text(target.aRm[x].weapons[0]);
        // target.aRm[x].weapons.shift();
      }
			else{
				wound(pass);
			}
  }
}

function wound(pass){
  target.Player.health-=1;
  if(target.Player.health===0){
    console.log("aRm destroyed!")
		if(target==="Player"){
			console.log("You lose...")
		}
		else{
			console.log("You win!");
		}
  }

}
//console.log(target["aRm"]q3.equip);
