var rutger= {
  "Player":{
   	name:"Rutger",
    height:"6.08",
    nationality:"Dutch",
    health:4,
  },
      "aRm":{
            1:{
              plating: 15,
              insulation: 5,
              weapons: ["Misdemeanor","R"],
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

function OPrutger(){
  console.log("Rutger online.");
  $("#OPhealth span").html(rutger.Player.health);
/*Q1*/
  $("#OParmor1").html("Armor: "+rutger.aRm["1"].plating+"  Insulation: "+rutger.aRm["1"].insulation);
  $("#insulation1 span").html(rutger.aRm["1"].insulation);
  $("#OPweapon11").html(rutger.aRm["1"].weapons[0]);
  $("#OPweapon12").html(rutger.aRm["1"].weapons[1]);
/*Q2*/
  $("#OParmor2").html("Armor: "+rutger.aRm["2"].plating+"  Insulation: "+rutger.aRm["2"].insulation);
  $("#OPweapon21").html(rutger.aRm["2"].weapons[0]);
  $("#OPweapon22").html(rutger.aRm["2"].weapons[1]);
/*Q3*/
  $("#OParmor3").html("Armor: "+rutger.aRm["3"].plating+"  Insulation: "+shoulder.aRm["3"].insulation);
  $("#OPweapon31").html(rutger.aRm["3"].weapons[0]);
  $("#OPweapon32").html(rutger.aRm["3"].weapons[1]);
/*Q4*/
  $("#OParmor4").html("Armor: "+rutger.aRm["4"].plating+"  Insulation: "+shoulder.aRm["4"].insulation);
  $("#OPinsulation4 span").html(rutger.aRm["4"].insulation);
  $("#OPweapon41").html(rutger.aRm["4"].weapons[0]);
  $("#OPweapon42").html(rutger.aRm["4"].weapons[1]);
}
