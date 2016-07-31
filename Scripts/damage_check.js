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
	var q=rngQ();
	var target=find[(((document.getElementById('OPmoniker')).innerHTML).toLowerCase())+"Object"]();
	// var found=find[target+"Object"]();
	console.log(dmg+" damage headed toward #"+q+" quadrant!");
  for(var i in target.aRm){
  	if(target.aRm[i]===target.aRm[q]){
   		if(target.aRm[i].plating===0){
		 		x=i;
       	pass=dmg
       	console.log("check",x,pass)
        // breach(pass);
      }
    	else if(target.aRm[i].plating===dmg){
    		target.aRm[i].plating=0;
        console.log("Armor destroyed!")
      }
      else if(target.aRm[i].plating<=dmg){
        x=i;
        pass=dmg-target.aRm[i].plating;
        target.aRm[i].plating=0;
        console.log("Armor breached");
        // breach(pass)
    	}
      else{
        target.aRm[i].plating-=dmg;
        console.log(target.aRm[i].plating)
      }
    }
  }
}

function breach(pass){
  if(target.aRm[x].insulation===0){
    console.log("breach")
      if(target.aRm[x].weapons[0]==="empty"){
      	console.log("breach 2");
        wound(pass);
      }
  }
  else if(target.aRm[x].insulation>pass){
    target.aRm[x].insulation-=pass;
    Console.log(pass+" Insulation damaged!");
  }
  else if(target.aRm[x].insulation===pass){
    target.aRm[x].insulation=0;
    console.log("Insulation offline!")
  }
  else{
    z=pass-target.aRm[x].insulation
    target.aRm[x].insulation=0;
    console.log("Insulation offline!")
      if(target.aRm[x].weapons!= "empty"){
        console.log(target.aRm[x].weapons[0]+" destroyed!")
        target.aRm[x].weapons.shift();
      }
  }
}

function wound(pass){
    target["Val.R/E"]["health"]-=1;
    if(target["Val.R/E"]["health"]===0){
        console.log("target is unconcious!")
    }
    else{
       console.log("Beginning medical protocols!")
    }

}
//console.log(target["aRm"]q3.equip);
