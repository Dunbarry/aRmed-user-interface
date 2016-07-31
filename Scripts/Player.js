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
              weapons: ["Misdemeanor","Repeat Offender"],
              equip:["empty"]
            },
            2:{
              plating: 10,
              insulation: 10,
              weapons:["Misdemeanor","Felony"],
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
  // rutger();
  $("#moniker").html(shoulder.Player.name)
  $("#health").html(shoulder.Player.health);
/*Q1*/
  $("#armor1").html("Armor: "+shoulder.aRm["1"].plating);
  $("#insulation1").html("Insulation: "+shoulder.aRm["1"].insulation);
  $("#weapon10").html(shoulder.aRm["1"].weapons[0]);
  $("#weapon11").html(shoulder.aRm["1"].weapons[1]);
/*Q2*/
  $("#armor2").html("Armor: "+shoulder.aRm["2"].plating);
  $("#insulation2").html("Insulation: "+shoulder.aRm["2"].insulation);
  $("#weapon20").html(shoulder.aRm["2"].weapons[0]);
  $("#weapon21").html(shoulder.aRm["2"].weapons[1]);
/*Q3*/
  $("#armor3").html("Armor: "+shoulder.aRm["3"].plating);
  $("#insulation3").html("Insulation: "+shoulder.aRm["3"].insulation);
  $("#weapon30").html(shoulder.aRm["3"].weapons[0]);
  $("#weapon31").html(shoulder.aRm["3"].weapons[1]);
/*Q4*/
  $("#armor4").html("Armor: "+shoulder.aRm["4"].plating);
  $("#insulation4").html("Insulation: "+shoulder.aRm["4"].insulation);
  $("#weapon40").html(shoulder.aRm["4"].weapons[0]);
  $("#weapon41").html(shoulder.aRm["4"].weapons[1]);

  OPrutger();
})
