function rngQ(){									//Randomly selecting a quadrant
	num=Math.floor(Math.random()*4);
	if(num===0){
		random=4;
	}
	else{
		random=num;
	}
	return random;
}

function disaRmed(){
	if(turnState()==="OP"){
		for(var weapCheck in target.aRm){
			console.log(weapCheck);
			if(target.aRm[weapCheck].weapons[0]!="empty"&&target.aRm[weapCheck].weapons[0]!="error 0"){
				console.log(target.aRm[weapCheck].weapons[0])
				break;
			}
			else if(target.aRm[weapCheck].weapons[1]!="empty"&&target.aRm[weapCheck].weapons[1]!="error 0"){
					console.log(target.aRm[weapCheck].weapons[1])
				break;
			}
			weapCheck++
			console.log("Final "+weapCheck);
			if(weapCheck===5){
				console.log("You lose!");
				setTimeout(hsalps,3000);
			}
		}
	}
}

var turn="";
var q=0;
function check(dmg){		//Player attacking enemy.
		turn=turnState();
		if (turn==="Player"){ //Figure out who's shooting at whom!
			target=find[(((document.getElementById('OPmoniker')).innerHTML).toLowerCase())+"Object"]();
			turn="#OP";
			write="OP"
		}
		else{
			target=playerFind();
			// Playerfind[((document.getElementById('moniker')).innerHTML)+"Object"]();
			turn="#";
			write="Player"
		}
		if(dmg===0){
			console.log("Miss!")
			$('#'+write+'Log').append(">Miss!<br />")
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
	        console.log("Armor destroyed!");
					$("#"+write+"Log").append('>Plating destroyed in quadrant #'+q+'!<br />');
	      }
	      else if(target.aRm[q].plating<=dmg){	//If destroyed with spare dmg call breach func.
	        pass=dmg-target.aRm[q].plating;
	        target.aRm[q].plating=0;
					$(turn+'armor'+q).text("Armor: "+target.aRm[q].plating);
	        console.log("Armor breached");
					$("#"+write+"Log").append('>Plating breached in quadrant #'+q+'<br />');
	        breach(pass)
	    	}
	      else{																	//Else mark damage.
	        target.aRm[q].plating-=dmg;
	        console.log("Damage blocked. Plating reduced by "+dmg+".")
					$("#"+write+"Log").append('>Plating reduced in quadrant #'+q+'<br />');
					$(turn+'armor'+q).text("Armor: "+target.aRm[q].plating);
	      }
	    }
	  }
	console.log("~~~~~~~~~~~*$")
	turnSwap();
}

function breach(pass){ //Checks damage breaching armor against insulation.
  if(target.aRm[q].insulation>pass){ //If insulated mark damage.
    target.aRm[q].insulation-=pass;
		$(turn+'insulation'+q).text("Insulation: "+target.aRm[q].insulation);
    console.log(pass+" Insulation units damaged!");
		$("#"+write+"Log").append('>'+pass+' insulation damaged in quadrant #'+q+'<br />');

  }
  else if(target.aRm[q].insulation===pass){ //If insulation destroyed declare it.
    target.aRm[q].insulation=0;
		$(turn+'insulation'+q).text("Insulation: "+target.aRm[q].insulation);
    console.log("Fatal error. Insulation offline.")
		$("#"+write+"Log").append('>Fatal error: #'+q+' quadrant insulation offline<br />');
  }
  else{ //If pass is bigger than or equal to insultation...
    target.aRm[q].insulation=0;
		$(turn+'insulation'+q).text("Insulation: "+target.aRm[q].insulation);
		$("#"+write+"Log").append('>Warning: #'+q+' quadrant insulation offline<br />');
    console.log("Insulation offline!")
    if(target.aRm[q].weapons[0]!="error 0"&&target.aRm[q].weapons[0]!="empty"){
			console.log(target.aRm[q].weapons[0]+" destroyed!") //...destroy top weapon.
			$("#"+write+"Log").append('>Warning: '+target.aRm[q].weapons[0]+' offline<br />');
			target.aRm[q].weapons.splice(0,1,"error 0");
			$(turn+'weapon'+q+0).text(target.aRm[q].weapons[0])
			disaRmed();
		}
		else if(target.aRm[q].weapons[1]!="error 0"&&target.aRm[q].weapons[1]!="empty"){
			console.log(target.aRm[q].weapons[1]+" destroyed!") //...or destroy bottom weapon.
			$("#"+write+"Log").append('>Warning: '+target.aRm[q].weapons[1]+' offline<br />');
			target.aRm[q].weapons.splice(1,1,"error 0");
			$(turn+'weapon'+q+1).text(target.aRm[q].weapons[1])
			disaRmed();
		}
		else{
			disaRmed();
			wound();
		}
  }
}

function wound(){
  target.Player.health-=1;
	$(turn+'health').html(target.Player.health);
	console.log(target.Player.name+"'s core has been damaged!")
	$("#"+write+"Log").append('>Warning: core has been damaged.<br />');
  if(target.Player.health===0){
    console.log("aRm destroyed!")
		if(turnState()==="OP"){
			console.log("You lose...")
		}
		else{
			console.log("You win!");
		}
		setTimeout(hsalps,3000);
  }
};
