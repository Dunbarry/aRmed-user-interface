var state="Player";
function turnSwap(){
  if(state==="Player"){
    state="OP";
    OPfire();
  }
  else if(state==="OP"){
    state="Player";
  }
  console.log("It is now "+state+"'s turn.")
}

function turnState(){
  return state;
}

function OPfire(){
	shooter=find[(((document.getElementById('OPmoniker')).innerHTML).toLowerCase())+"Object"]();
  quadrantChoice=rngQ();
  weaponChoice=1;
	alt=0;
	if(quadrantChoice===0||quadrantChoice===2){
		weaponChoice=0;
		alt=1;
	}
  console.log(quadrantChoice, weaponChoice);
  if(shooter.aRm[quadrantChoice].weapons[weaponChoice]!="empty"&&shooter.aRm[quadrantChoice].weapons[weaponChoice]!="error 0"){
    var fire=shooter.aRm[quadrantChoice].weapons[weaponChoice];
    console.log("Firing "+fire+" from frame one.");
    aRmaments[fire](toHit);
  }
  else if(shooter.aRm[quadrantChoice].weapons[alt]!="empty"&&shooter.aRm[quadrantChoice].weapons[alt]!="error 0"){
    var fire=shooter.aRm[quadrantChoice].weapons[alt];
    console.log("Firing "+fire+" from frame two.");
    aRmament[fire](toHit);
  }
  else{
    for(var roulette in shooter.aRm){
      if(shooter.aRm[roulette].weapons[0]!="empty"&&shooter.aRm[roulette].weapons[0]!="error 0"){
      var fire=shooter.aRm[roulette].weapons[0];
      console.log("Firing "+fire+" from Loop one.");
      aRmaments[fire](toHit);
      break;
      }
      else if(shooter.aRm[roulette].weapons[1]!="empty"&&shooter.aRm[roulette].weapons[1]!="error 0"){
          var fire=shooter.aRm[roulette].weapons[1];
          console.log("Firing "+fire+" from Loop two.");
          aRmaments[fire](toHit);
          break;
      }
    }
  }
  console.log("OPfire finished.");
}
