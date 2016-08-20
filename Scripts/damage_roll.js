// Hit scale:
// 0= Crit(dmg+.5%) OR suicide w/explosives
// 1:6=hit
// 7&8=glance (.5dmg)
// 9 <= miss (no dmg)

var base=2;
function toHit(aim,dmg){
	hit=(Math.floor(Math.random()*10)+aim);
  if(hit<=0){ 			       //crit
    dmg=(dmg+(dmg*'.5'))+bypass;
  }
  else if(hit===7||hit===8){   //glance
    dmg=(dmg*'.5')+bypass;
  }
  else if(hit>=9){        			//miss
  	dmg=0+bypass;
  }
  else{					          //Standard
    dmg=dmg+bypass;
  }
  check(dmg);
}

function multiHit(shots){
	while(shots>0){	      //Aim bonus grows with each shot in burst
		aim=shots;
		hit=(Math.floor(Math.random()*10)+aim);
		if(hit<=0){ 			       //crit
			bypass+=base+(base*'.5');
		}
		else if(hit===7||hit===8){   //glance
			bypass+=(base*'.5');
		}
		else if(hit>=9){        			//miss
			bypass+=0;
		}
		else{					          //Standard
			bypass+=base;
		}
		shots--;
	}
}

var aRmaments={
  Misdemeanor: function(toHit){
    aim=0;
    dmg=base;
		bypass=0
    toHit(aim,dmg);
		MIS();
  },
  Felony: function(toHit){
    aim=1;
    dmg=base*2;
		bypass=0
    toHit(aim,dmg);
		FEL();
  },
  "Repeat Offender": function(toHit){
  	shots=2;
		bypass=0
		multiHit(shots);
    dmg=base+1;	        //"Reeling enemy" bonus for a third hit
  	aim=3;
		toHit(aim,dmg);
		RO();
  }
	,
	Pontificator:	function(toHit){
		bypass=0;
		dmg=quoteFetch;
		aim=4;
		toHit(aim,dmg);
	}
}
// ,
// 	Flasher: function(toHit){
// 		shots=2;
// 		bypass=0;
// 		multiHit(shots);
// 		dmg=base
// 	}

$(".trigger").click(function(){
	playerFind();
	safetyCheck();
	if(safetyState==="on"){
		if(state==="Player"){
			alert("You must select a target quadrant!")
		}
		else{
			alert(find[(((document.getElementById('OPmoniker')).innerHTML).toLowerCase())+"Object"]()+" is firing!")
		}
	}
	else{
  	var fire=(document.getElementById(($(this).val()))).innerHTML;
  	aRmaments[fire](toHit);
		targetAdjust=0;
		safety();
		targetAdjust=0;
	}
})
