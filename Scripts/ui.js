var state="Player";
function turnSwap(){
  if(state==="Player"){
    state="OP";
  }
  else{
    state="Player";
  }
  return state;
}

function turnState(){
  return state;
}
