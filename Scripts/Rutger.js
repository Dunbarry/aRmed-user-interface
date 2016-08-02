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
              weapons:["empty","Felony"],
              // weapons: ["Misdemeanor","Felony"],
              equip:["empty"]
            },
            2:{
              plating: 10,
              insulation: 10,
              // weapons:["empty","empty"],
              weapons:["Misdemeanor","empty"],
              equip:["gyros","aRc"]
            },
            3:{
              plating:5,
              insulation: 10,
              weapons:["empty","empty"],
              // weapons:["Polarizer", "empty"],
              equip:["Polarizer"]
            },
            4:{
              plating: 10,
              insulation: 10,
              // weapons:["empty","empty"],
              weapons:["empty","Felony"],
              equip:["30","30","empty"]
            },
            // cylinder:["empty"]
}
};

function OPrutger(){
  console.log("Rutger online.");
  $("#OPmoniker").html(rutger.Player.name)
  $("#OPhealth").html(rutger.Player.health);
  /*Q1*/
  $("#OParmor1").html("Armor: "+rutger.aRm["1"].plating);
  $("#OPinsulation1").html("Insulation: "+rutger.aRm["1"].insulation);
  $("#OPweapon10").html(rutger.aRm["1"].weapons[0]);
  $("#OPweapon11").html(rutger.aRm["1"].weapons[1]);
  /*Q2*/
  $("#OParmor2").html("Armor: "+rutger.aRm["2"].plating);
  $("#OPinsulation2").html("Insulation: "+rutger.aRm["2"].insulation);
  $("#OPweapon20").html(rutger.aRm["2"].weapons[0]);
  $("#OPweapon21").html(rutger.aRm["2"].weapons[1]);
  /*Q3*/
  $("#OParmor3").html("Armor: "+rutger.aRm["3"].plating);
  $("#OPinsulation3").html("Insulation: "+rutger.aRm["3"].insulation);
  $("#OPweapon30").html(rutger.aRm["3"].weapons[0]);
  $("#OPweapon31").html(rutger.aRm["3"].weapons[1]);
  /*Q4*/
  $("#OParmor4").html("Armor: "+rutger.aRm["4"].plating);
  $("#OPinsulation4").html("Insulation: "+rutger.aRm["4"].insulation);
  $("#OPweapon40").html(rutger.aRm["4"].weapons[0]);
  $("#OPweapon41").html(rutger.aRm["4"].weapons[1]);
}

var find={
  rutgerObject: function(){
  return rutger;
  }
}
