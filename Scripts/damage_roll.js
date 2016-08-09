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
	console.log(state+" is about to fire with "+hit+" to hit, for "+dmg+" damage!")
	console.log("~~~~~~~~~~~=>");
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
		console.log(shots+" shot remaining. Byass: "+bypass);
	}
}

var aRmaments={
  Misdemeanor: function(toHit){
    aim=0;
    dmg=base;
		bypass=0
    toHit(aim,dmg);
  },
  Felony: function(toHit){
    aim=1;
    dmg=base*2;
		bypass=0
    toHit(aim,dmg);
  },
  "Repeat Offender": function(toHit){
  	shots=2;
		bypass=0
		multiHit(shots);
    dmg=base+1;	        //"Reeling enemy" bonus for a third hit
  	aim=3;
		toHit(aim,dmg);
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
  //Find what was clicker: $(this).val();
  //Find what slot that corresponds to in the doc: document.getElementById(^);
  //What is in the slot: thing.innerHTML
  var fire=(document.getElementById(($(this).val()))).innerHTML;
  console.log(fire);
  aRmaments[fire](toHit);
})
