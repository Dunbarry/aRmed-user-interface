//Here do pre-builds for all three avatars. When the button is clicked for the pre-built selection, these will be chosen by picture and the correct values with load.


var Player={
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
      plating:10,
      insulation: 10,
      weapons:["empty", "empty"],
      equip:["polarizer"]
    },
    4:{
      plating: 5,
      insulation: 20,
      weapons:["empty","empty"],
      equip:["30","30","empty"]
    },
    cylinder:["empty"]
  }
};

//function preBuilt(){}

// $(#ignition).on('click', function(){
//   $('#imgInsert').attr('src','images/danny.jpg')
//   $("#PlayerLog").append('>Match has begun!<br /><br />');
//   $("#moniker").html(Player.Player.name)
//   $('#turnBox').html(Player.Player.name);
//   $("#health").html(Player.Player.health);
// /*Q1*/
//   $("#armor1").html("Armor: "+Player.aRm["1"].plating);
//   $("#insulation1").html("Insulation: "+Player.aRm["1"].insulation);
//   $("#weapon10").html(Player.aRm["1"].weapons[0]);
//   $("#weapon11").html(Player.aRm["1"].weapons[1]);
// /*Q2*/
//   $("#armor2").html("Armor: "+Player.aRm["2"].plating);
//   $("#insulation2").html("Insulation: "+Player.aRm["2"].insulation);
//   $("#weapon20").html(Player.aRm["2"].weapons[0]);
//   $("#weapon21").html(Player.aRm["2"].weapons[1]);
// /*Q3*/
//   $("#armor3").html("Armor: "+Player.aRm["3"].plating);
//   $("#insulation3").html("Insulation: "+Player.aRm["3"].insulation);
//   $("#weapon30").html(Player.aRm["3"].weapons[0]);
//   $("#weapon31").html(Player.aRm["3"].weapons[1]);
// /*Q4*/
//   $("#armor4").html("Armor: "+Player.aRm["4"].plating);
//   $("#insulation4").html("Insulation: "+Player.aRm["4"].insulation);
//   $("#weapon40").html(Player.aRm["4"].weapons[0]);
//   $("#weapon41").html(Player.aRm["4"].weapons[1]);
//
//   OPrutger();
// })
//
// var Playerfind={
//   PlayerObject: function(){
//   return Player;
//   }
// }
