var q=0;
var targeted="";
var impact=('aim'+q);

//Randomly selecting a quadrant
function rngQ(){
	num=Math.floor(Math.random()*4);
	if(num===0){
		random=4;
	}
	else{
		random=num;
	}
	return random;
}


//Reticle dynamics~~~~~~~~~~~~~~~~~
// Strobe controls
function strobeHold(){
	$('#aim'+q).removeClass('strobe');
}

function strobe(){
	console.log("Strobe Online.")
	console.log($('#aim'+q));
	$('#aim'+q).addClass('strobe');
	// setTimeout(strobeHold,4000);
}

//Reticle controls
function reticleMgt(){			//Q aimed for
	managed=1;
	while(managed<5){
		$('#aim'+managed).css('background-color','white');
		$('#aim'+managed).css('opacity','0');
		managed++;
	}
	$('#aim'+targeted).css('background-color','lightblue');
	$('#aim'+targeted).css('opacity','.25');
}

function impactMgt(){				//Q hit
	$('#aim'+q).css('background-color','red');
	$('#aim'+q).css('opacity','.25');
}

function dynamicsHold(){		//Clear holds
	$('#aim'+q).removeClass('strobe')
	$('#aim'+q).css('background-color','white');
	$('#aim'+q).css('opacity','0');
}

// Rumble controls
function shakeHold(){
	$(turn+'imgInsert').removeClass('shakeMe');
}

function rumble(){
	$(turn+'imgInsert').addClass('shakeMe')
	setTimeout(shakeHold,900);
}

function driftImpact(){

}

// Determining DisaRmed
function disaRmed(){
	if(turnState()==="OP"){
		for(var weapCheck in target.aRm){
			if(target.aRm[weapCheck].weapons[0]!="empty"&&target.aRm[weapCheck].weapons[0]!="error 0"){
				break;
			}
			else if(target.aRm[weapCheck].weapons[1]!="empty"&&target.aRm[weapCheck].weapons[1]!="error 0"){
				break;
			}
			weapCheck++
			if(weapCheck===5){
				console.log("You lose!");
				setTimeout(hsalps,3000);
			}
		}
	}
}

//Reticle safety checks
$(document).on('click', '#aim1, #aim2, #aim3, #aim4', function(){
	targeted=document.getElementById(($(this).attr('id'))).innerHTML;
	console.log(this);
	turnState();
	safety();
	if(state==="Player"){
		q=targeted
		reticleMgt();
	}
	else{
		alert(find[(((document.getElementById('OPmoniker')).innerHTML).toLowerCase())+"Object"]()+" is firing!")
	}
})

var turn="";
function check(dmg){		//Player attacking enemy.
	turn=turnState();
	if (turn==="Player"){ //Figure out who's shooting at whom!
		target=find[(((document.getElementById('OPmoniker')).innerHTML).toLowerCase())+"Object"]();
		turn="#OP";
		write="OP"
		strobe();
	}
	else{
		target=playerFind();
		// [((document.getElementById('moniker')).innerHTML)+"Object"]();
		turn="#";
		write="Player"
		q=rngQ();					//Quadrant to assign damage to.
	}
	if(dmg===0){
		$('#'+write+'Log').append(">Miss!<br />")
	}
	// q=rngQ();						//Quadrant to assign damage to.
	else{
		if(turn==="Player"){
			setTimeout(strobe,1200);
		}
		setTimeout(rumble,900);
		for(var i in target.aRm){
	  	if(target.aRm[i]===target.aRm[q]){		//Find the right quadrant & check armor
				if(target.aRm[q].plating===0){			//If there is no armor call breach func
		     	pass=dmg
		      breach(pass);
	      }
		  	else if(target.aRm[q].plating===dmg){	//If the armor is destroyed declare it.
		  		target.aRm[q].plating=0;
					$(turn+'armor'+q).text("Armor: "+target.aRm[q].plating);
					// impact=$(turn+'armor'+q);
					// strobe(impact);
					$("#"+write+"Log").append('>Plating destroyed in quadrant #'+q+'!<br />');
		    }
		    else if(target.aRm[q].plating<=dmg){	//If destroyed with spare dmg call breach func.
		      pass=dmg-target.aRm[q].plating;
		      target.aRm[q].plating=0;
					$(turn+'armor'+q).text("Armor: "+target.aRm[q].plating);
					// impact=$(turn+'armor'+q);
					// strobe(impact);
					$("#"+write+"Log").append('>Plating breached in quadrant #'+q+'<br />');
		      breach(pass)
		    }
		    else{																	//Else mark damage.
		      target.aRm[q].plating-=dmg;
					// impact=$(turn+'armor'+q);
					// strobe(impact);
					$("#"+write+"Log").append('>Plating reduced in quadrant #'+q+'<br />');
					$(turn+'armor'+q).text("Armor: "+target.aRm[q].plating);
		    }
			}
	  }
	}
	setTimeout(dynamicsHold,2400);
	turnSwap();
}

function breach(pass){ //Checks damage breaching armor against insulation.
  if(target.aRm[q].insulation>pass){ //If insulated mark damage.
    target.aRm[q].insulation-=pass;
		$(turn+'insulation'+q).text("Insulation: "+target.aRm[q].insulation);
		// impact=$(turn+'insulation'+q);
		// strobe(impact);
		$("#"+write+"Log").append('>'+pass+' insulation damaged in quadrant #'+q+'<br />');
  }
  else if(target.aRm[q].insulation===pass){ //If insulation destroyed declare it.
    target.aRm[q].insulation=0;
		$(turn+'insulation'+q).text("Insulation: "+target.aRm[q].insulation);
		// impact=$(turn+'insulation'+q);
		// strobe(impact);
		$("#"+write+"Log").append('>Fatal error: #'+q+' quadrant insulation offline<br />');
  }
  else{ //If pass is bigger than or equal to insultation...
    target.aRm[q].insulation=0;
		$(turn+'insulation'+q).text("Insulation: "+target.aRm[q].insulation);
		$("#"+write+"Log").append('>Warning: #'+q+' quadrant insulation offline<br />');
		// impact=$(turn+'insulation'+q);
		// strobe(impact);
    if(target.aRm[q].weapons[0]!="error 0"&&target.aRm[q].weapons[0]!="empty"){	//...destroy top weapon.
			$("#"+write+"Log").append('>Warning: '+target.aRm[q].weapons[0]+' offline<br />');
			target.aRm[q].weapons.splice(0,1,"error 0");
			$(turn+'weapon'+q+0).text(target.aRm[q].weapons[0])
			disaRmed();
		}
		else if(target.aRm[q].weapons[1]!="error 0"&&target.aRm[q].weapons[1]!="empty"){
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
