// Hit scale:
// 0= Crit(dmg+.5%) OR suicide w/explosives
// 1:6=hit
// 7&8=glance (.5dmg)
// 9 <= miss (no dmg)

var base = 10;
function toHit(aim,dmg){
	hit=(Math.floor(Math.random()*10)+aim);
  if(hit<=0){ 			       //crit
    dmg=dmg+(dmg*'.5');
  }
  else if(hit===7||hit===8){   //glance
    dmg=(dmg*'.5');
  }
  else if(hit>=9){        			//miss
  	dmg=0;
  }
  else{					          //Standard
    dmg=dmg;
  }
	console.log(state+" is about to fire with "+hit+" to hit and at aim "+aim+", for "+dmg+" damage!")
	console.log("~~~~~~~~~~~=>");
  check(dmg);
}

var aRmaments={
  Misdemeanor: function(toHit){
    aim=0;
    dmg=base;
    toHit(aim,dmg);
  },
  Felony: function(toHit){
    aim=1;
    dmg=base*2;
    toHit(aim,dmg);
  },
  "Repeat Offender": function(toHit){
  	shots=1;
  	dmg=base;
  	while(shots<=3){	      //Aim bonus grows with each shot in burst
  		aim=shots;
    	if(shots===3){
    		dmg=base+1;	        //"Reeling enemy" bonus for a third hit
  		}
  	  toHit(aim,dmg);
  		shots++;
  	}
  }
}

$(".trigger").click(function(){
  //Find what was clicker: $(this).val();
  //Find what slot that corresponds to in the doc: document.getElementById(^);
  //What is in the slot: thing.innerHTML
  var fire=(document.getElementById(($(this).val()))).innerHTML;
  console.log(fire);
  aRmaments[fire](toHit);
})

// fel(toHit);
// repOff(toHit);
