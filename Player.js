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
              weapons:["empty"],
              equip:["polarizer"]
            },
            4:{
              plating: 0,
              insulation: 0,
              weapons:["empty"],
              equip:["ammo","ammo"]
            },
            cylinder:["empty"]
}
};

$("#ignition").on('click', function(){
  $("#health span").html(shoulder.Player.health);
})
