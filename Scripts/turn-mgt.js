var targetAdjust=0;
var safetyState="on";
var state="Player";

// Turns~~~~~~~~~~~~~~~~~~
function turnSwap(){
  if(state==="Player"){
    state="OP";
    console.log("It is now "+state+"'s turn.");
    $('#turnBox').html(rutger.Player.name);
    setTimeout(OPfire,5500);
  }
  else if(state==="OP"){
    state="Player";
    $('#turnBox').html(User.Player.name);
  }
}

function turnState(){
  return state;
}

// Safety~~~~~~~~~~~~~~~
function safety(){
  if(targetAdjust===0){
    if(safetyState==="on"){
      safetyState="off";
      $('.trigger').attr('id','safetyOff')
    }
    else if(safetyState==="off"){
      safetyState="on";
      $('.trigger').attr('id','safetyOn')
    }
  }
  targetAdjust++;
}

function safetyCheck(){
  return safetyState;
}

// Opponent Shot~~~~~~~~~~
function OPfire(){
	shooter=find[(((document.getElementById('OPmoniker')).innerHTML).toLowerCase())+"Object"]();
  quadrantChoice=rngQ();
  if(shooter.aRm[quadrantChoice].weapons[0]!="empty"&&shooter.aRm[quadrantChoice].weapons[0]!="error 0"){
    var fire=shooter.aRm[quadrantChoice].weapons[0];
    // console.log("Firing "+fire+" from frame one.");
    $("#PlayerLog").append('>Opponent is about to fire '+fire+'<br />');
    aRmaments[fire](toHit);
  }
  else if(shooter.aRm[quadrantChoice].weapons[1]!="empty"&&shooter.aRm[quadrantChoice].weapons[1]!="error 0"){
    var fire=shooter.aRm[quadrantChoice].weapons[1];
    // console.log("Firing "+fire+" from frame one.");
    $("#PlayerLog").append('>Opponent is about to fire '+fire+'<br />');
    aRmaments[fire](toHit);
  }
  else{
    for(var roulette in shooter.aRm){
      // console.log(roulette);
      if(shooter.aRm[roulette].weapons[0]!="empty"&&shooter.aRm[roulette].weapons[0]!="error 0"){
      var fire=shooter.aRm[roulette].weapons[0];
      // console.log("Firing "+fire+" from Loop one.");
      $("#PlayerLog").append('>Opponent is about to fire '+fire+'<br />');
      aRmaments[fire](toHit);
      break;
      }
      else if(shooter.aRm[roulette].weapons[1]!="empty"&&shooter.aRm[roulette].weapons[1]!="error 0"){
          var fire=shooter.aRm[roulette].weapons[1];
          // console.log("Firing "+fire+" from Loop two.");
          $("#PlayerLog").append('>Opponent is about to fire '+fire+'<br />');
          aRmaments[fire](toHit);
          break;
      }
      roulette++
      if(roulette===5){
        console.log(shooter+" cannot fire!");
        $("#PlayerLog").append('>'+shooter.Player.name+' cannot fire!<br />');
        turnSwap();
      }
    }
  }
  console.log("OPfire finished.");
}
