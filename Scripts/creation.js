console.log("Drone online.");
function charCheck(){
var x=$("#character-select").find("option:selected");
var y=x[0].id;
$("#creationInsert").attr("src","images/"+y+".jpg")
}

$("#creator").submit(function(){
  // var x=$("#role").find("option:selected");
  // var y=x[0].value; //Converting user-selection to "Tank" or "Attack" etc.
  event.preventDefault();
  var user={
    "Player":{
     	name:$('#name').val(),
      height:$('#height').val(),
      nationality:$('#nationality').val(),
      health:4,
    },
    "aRm":{
      1:{
        plating: $('#armor1').val(),
        insulation: $('#insulation1').val(),
        weapons: [$('#weapon10').val(),$('#weapon11').val()],
        equip:["empty"]
      },
      2:{
        plating: $('#armor2').val(),
        insulation: $('#insulation2').val(),
        weapons: [$('#weapon20').val(),$('#weapon21').val()],
        equip:["empty"]
      },
      3:{
        plating:$('#armor3').val(),
        insulation: $('#insultation').val(),
        weapons: [$('#weapon30').val(),$('#weapon31').val()],
        equip:["empty"]
      },
      4:{
        plating: $('#armor4').val(),
        insulation: $('#insulation').val(),
        weapons: [$('#weapon30').val(),$('#weapon31').val()],
        equip:["empty"]
      },
      cylinder:["empty"]
    }
  }
  console.log(user);
})

// var y=x[0].value; //Converting user-selection to "Tank" or "Attack" etc.
//     $("#insert").attr("src","assets/images/"+y+".jpg");
// }

//
// $("#ignition").on('click', function(){
//   $("#health span").html(shoulder.Player.health);
// /*Q1*/
//   $("#armor1").html("Armor: "+shoulder.aRm["1"].plating+"  Insulation: "+shoulder.aRm["1"].insulation);
// //  $("#insulation1 span").html(shoulder.aRm["1"].insulation);
//   $("#weapon11").html(shoulder.aRm["1"].weapons[0]);
//   $("#weapon12").html(shoulder.aRm["1"].weapons[1]);
// /*Q2*/
//   $("#armor2").html("Armor: "+shoulder.aRm["2"].plating+"  Insulation: "+shoulder.aRm["2"].insulation);
//   $("#weapon21").html(shoulder.aRm["2"].weapons[0]);
//   $("#weapon22").html(shoulder.aRm["2"].weapons[1]);
// /*Q3*/
//   $("#armor3").html("Armor: "+shoulder.aRm["3"].plating+"  Insulation: "+shoulder.aRm["3"].insulation);
//   $("#weapon31").html(shoulder.aRm["3"].weapons[0]);
//   $("#weapon32").html(shoulder.aRm["3"].weapons[1]);
// /*Q4*/
//   $("#armor4").html("Armor: "+shoulder.aRm["4"].plating+"  Insulation: "+shoulder.aRm["4"].insulation);
//   $("#insulation4 span").html(shoulder.aRm["4"].insulation);
//   $("#weapon41").html(shoulder.aRm["4"].weapons[0]);
//   $("#weapon42").html(shoulder.aRm["4"].weapons[1]);
// })
