var shoulder= {
  "Player":{
   	name:"Player",
    height:"5.41",
    nationality:"American",
    health:4,
  },
      "aRm":{
            1:{
              plating: 15,
              insulation: 5,
              weapons: ["Misdemeanor","empty"],
              equip:["empty"]
            },
            2:{
              plating: 10,
              insulation: 10,
              weapons:["Misdemeanor","empty"],
              equip:["gyros","aRc"]
            },
            3:{
              plating:0,
              insulation: 0,
              weapons:["empty", "empty"],
              equip:["polarizer"]
            },
            4:{
              plating: 0,
              insulation: 0,
              weapons:["empty","empty"],
              equip:["30","30","empty"]
            },
            cylinder:["empty"]
}
};

$("#ignition").on('click', function(){
  $("#health span").html(shoulder.Player.health);
/*Q1*/
  $("#armor1").html("Armor: "+shoulder.aRm["1"].plating+"  Insulation: "+shoulder.aRm["1"].insulation);
  $("#insulation1 span").html(shoulder.aRm["1"].insulation);
  $("#weapon11").html(shoulder.aRm["1"].weapons[0]);
  $("#weapon12").html(shoulder.aRm["1"].weapons[1]);
/*Q2*/
  $("#armor2").html("Armor: "+shoulder.aRm["2"].plating+"  Insulation: "+shoulder.aRm["2"].insulation);
  $("#weapon21").html(shoulder.aRm["2"].weapons[0]);
  $("#weapon22").html(shoulder.aRm["2"].weapons[1]);
/*Q3*/
  $("#armor3").html("Armor: "+shoulder.aRm["3"].plating+"  Insulation: "+shoulder.aRm["3"].insulation);
  $("#weapon31").html(shoulder.aRm["3"].weapons[0]);
  $("#weapon32").html(shoulder.aRm["3"].weapons[1]);
/*Q4*/
  $("#armor4").html("Armor: "+shoulder.aRm["4"].plating+"  Insulation: "+shoulder.aRm["4"].insulation);
  $("#insulation4 span").html(shoulder.aRm["4"].insulation);
  $("#weapon41").html(shoulder.aRm["4"].weapons[0]);
  $("#weapon42").html(shoulder.aRm["4"].weapons[1]);
})
