var shoulder= {
  "Player":{
   	name:"Skylar",
    height:"5.83",
    nationality:"Dutch",
    health:4,
  },
      "aRm":{
            1:{
              plating: 15,
              insulation: 5,
              weapons: ["Misdemeanor","S"],
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

// $("#ignition").on('click', function(){
function skylar(){
  $("#OPhealth span").html(shoulder.Player.health);
/*Q1*/
  $("#OParmor1").html("Armor: "+shoulder.aRm["1"].plating+"  Insulation: "+shoulder.aRm["1"].insulation);
  $("#insulation1 span").html(shoulder.aRm["1"].insulation);
  $("#OPweapon11").html(shoulder.aRm["1"].weapons[0]);
  $("#OPweapon12").html(shoulder.aRm["1"].weapons[1]);
/*Q2*/
  $("#OParmor2").html("Armor: "+shoulder.aRm["2"].plating+"  Insulation: "+shoulder.aRm["2"].insulation);
  $("#OPweapon21").html(shoulder.aRm["2"].weapons[0]);
  $("#OPweapon22").html(shoulder.aRm["2"].weapons[1]);
/*Q3*/
  $("#OParmor3").html("Armor: "+shoulder.aRm["3"].plating+"  Insulation: "+shoulder.aRm["3"].insulation);
  $("#OPweapon31").html(shoulder.aRm["3"].weapons[0]);
  $("#OPweapon32").html(shoulder.aRm["3"].weapons[1]);
/*Q4*/
  $("#OParmor4").html("Armor: "+shoulder.aRm["4"].plating+"  Insulation: "+shoulder.aRm["4"].insulation);
  $("#OPinsulation4 span").html(shoulder.aRm["4"].insulation);
  $("#OPweapon41").html(shoulder.aRm["4"].weapons[0]);
  $("#OPweapon42").html(shoulder.aRm["4"].weapons[1]);
}
