var state="Player";
function turnSwap(){
  if(state==="Player"){
    state="OP";
  }
  else{
    state="Player";
  }
  console.log(state);
  return state;
}

function turnState(){
  console.log(state);
  return state;
}
