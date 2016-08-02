$(document).ready(function(){
    $('.combatLog').scrollTop($('.combatLog')[0].scrollHeight);
    $("#PlayerLog").append('>Welcome to aRmed combat.<br />')
    $("#OPLog").append('>Welcome to aRmed combat.<br />')
    console.log("This is working");
});

var state="Player";
function turnSwap(){
  // console.log("I was just called!")
  if(state==="Player"){
    state="OP";
    console.log("It is now "+state+"'s turn.");
    OPfire();
  }
  else if(state==="OP"){
    state="Player";
    console.log("It is now "+state+"'s turn.")
  }
}

function turnState(){
  return state;
}

function OPfire(){
	shooter=find[(((document.getElementById('OPmoniker')).innerHTML).toLowerCase())+"Object"]();
  quadrantChoice=rngQ();
  if(shooter.aRm[quadrantChoice].weapons[0]!="empty"&&shooter.aRm[quadrantChoice].weapons[0]!="error 0"){
    var fire=shooter.aRm[quadrantChoice].weapons[0];
    console.log("Firing "+fire+" from frame one.");
    $("#PlayerLog").append('>Opponent is about to fire '+fire+'<br />');
    delay=(Math.floor(Math.random()*15)*1000);
    console.log(delay);
    setTimeout(aRmaments[fire](toHit),delay);
  }
  else if(shooter.aRm[quadrantChoice].weapons[1]!="empty"&&shooter.aRm[quadrantChoice].weapons[1]!="error 0"){
    var fire=shooter.aRm[quadrantChoice].weapons[1];
    console.log("Firing "+fire+" from frame one.");
    $("#PlayerLog").append('>Opponent is about to fire '+fire+'<br />');
    delay=(Math.floor(Math.random()*15)*1000);
    console.log(delay);
    setTimeout(aRmaments[fire](toHit),delay);
  }
  else{
    for(var roulette in shooter.aRm){
      if(shooter.aRm[roulette].weapons[0]!="empty"&&shooter.aRm[roulette].weapons[0]!="error 0"){
      var fire=shooter.aRm[roulette].weapons[0];
      console.log("Firing "+fire+" from Loop one.");
      $("#PlayerLog").append('>Opponent is about to fire '+fire+'<br />');
      delay=(Math.floor(Math.random()*15)*1000);
      console.log(delay);
      setTimeout(aRmaments[fire](toHit),delay);
      break;
      }
      else if(shooter.aRm[roulette].weapons[1]!="empty"&&shooter.aRm[roulette].weapons[1]!="error 0"){
          var fire=shooter.aRm[roulette].weapons[1];
          console.log("Firing "+fire+" from Loop two.");
          $("#PlayerLog").append('>Opponent is about to fire '+fire+'<br />');
          delay=(Math.floor(Math.random()*15)*1000);
          console.log(delay);
          setTimeout(aRmaments[fire](toHit),delay);
          break;
      }
    }
  }
  console.log("OPfire finished.");
}
