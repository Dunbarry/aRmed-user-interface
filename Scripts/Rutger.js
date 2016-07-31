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
  $("#OPmoniker").html(shoulder.Player.name)
  $("#OPhealth").html(shoulder.Player.health);
  /*Q1*/
  $("#OParmor1").html("Armor: "+shoulder.aRm["1"].plating);
  $("#OPinsulation1").html("Insulation: "+shoulder.aRm["1"].insulation);
  $("#OPweapon10").html(shoulder.aRm["1"].weapons[0]);
  $("#OPweapon11").html(shoulder.aRm["1"].weapons[1]);
  /*Q2*/
  $("#OParmor2").html("Armor: "+shoulder.aRm["2"].plating);
  $("#OPinsulation2").html("Insulation: "+shoulder.aRm["2"].insulation);
  $("#OPweapon20").html(shoulder.aRm["2"].weapons[0]);
  $("#OPweapon21").html(shoulder.aRm["2"].weapons[1]);
  /*Q3*/
  $("#OParmor3").html("Armor: "+shoulder.aRm["3"].plating);
  $("#OPinsulation3").html("Insulation: "+shoulder.aRm["3"].insulation);
  $("#OPweapon30").html(shoulder.aRm["3"].weapons[0]);
  $("#OPweapon31").html(shoulder.aRm["3"].weapons[1]);
  /*Q4*/
  $("#OParmor4").html("Armor: "+shoulder.aRm["4"].plating);
  $("#OPinsulation4").html("Insulation: "+shoulder.aRm["4"].insulation);
  $("#OPweapon40").html(shoulder.aRm["4"].weapons[0]);
  $("#OPweapon41").html(shoulder.aRm["4"].weapons[1]);
}
