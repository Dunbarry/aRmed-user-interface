// var quadCount=0;
var User={};
//   "Player":{
//     name:"",
//     height:0,
//     nationality:"",
//     health:4,
//   },
//   "aRm":{
//     1:{
//       plating:0,
//       insulation: 0,
//       weapons: ["",""],
//       equip:["empty"]
//     },
//     2:{
//       plating:0,
//       insulation: 0,
//       weapons: ["",""],
//       equip:["empty"]
//     },
//     3:{
//       plating:0,
//       insulation: 0,
//       weapons: ["",""],
//       equip:["empty"]
//     },
//     4:{
//       plating:0,
//       insulation: 0,
//       weapons: ["",""],
//       equip:["empty"]
//     }
//   }
// }

function charCheck(){
  var x=$("#character-select").find("option:selected");
  chosen=x[0].id;
  console.log(chosen)
  $("#creationInsert").attr("src","images/"+chosen+".jpg")
}

function loader(){
  $("#PlayerLog").append('<br/>>Match pending...<br />')
  $("#OPLog").append('<br/>>Match pending...<br />')
}

$('#preMade').click(function(){
  populate(chosen)
})

function playerFind(){
    return User;
}

// function quadCreator(){
//   $('.creationPane').html(
//     '<form id="creator">\
//       <span class="top" id="Q">Quadrant '+quadCount+'</span>\
//       <span>Plating:<input type="number" value="0" min="0" max="80" id="armor'+quadCount+'"></span>\
//       <span>Insulation Units:<input type="number" value="0" min="0" max="5.0"  id="insulation1'+quadCount+'"></span>\
//       <span>Weapon 1:\
//         <select class="weapSelect" id="weapon'+quadCount+'0">\
//         </select>\
//       </span>\
//       <span>Weapon 2:\
//         <select class="weapSelect" id="weapon'+quadCount+'1">\
//         </select>\
//       </span>\
//       <input type="submit" id="submit" value="Create!">Quadrant #'+quadCount+' complete</input>\
//     </form>')

$(document).on('click','#ender',function(){
  // event.preventDefault();
    $('.infoPane').remove();
    $('.splashVeil').remove()
    $('body').append('<div class="creationPane"></div>');
    // $('.creationPane').append(
    //   '<form id="creator">\
    //     <span>Character Name:<input type="text" placeholder="Character Name" id="name"></span>\
    //     <span>Height:<input type="text" placeholder="1.65m" id="height"></span>\
    //     <span>Nationality:<input type="text" placeholder="City, Country" id="nationality"></span>\
    //     <!--Q1-->\
    //     <span class="top" id="Q">Quadrant 1</span>\
    //     <span>Plating:<input type="number" value="0" min="0" max="80" id="armor1"></span>\
    //     <span>Insulation Units:<input type="number" value="0" min="0" max="5.0"  id="insulation1"></span>\
    //     <span>Weapon 1:\
    //       <select class="weapSelect" id="weapon10">\
    //       </select>\
    //     </span>\
    //     <span>Weapon 2:\
    //       <select class="weapSelect" id="weapon11">\
    //       </select>\
    //     </span>\
    //     <!--Q2-->\
    //     <span id="Q">Quadrant 2</span>\
    //     <span>Plating:<input type="number" value="0" min="0" max="80"  id="armor2"></span>\
    //     <span>insulation Units:<input type="number" value="0" min="0" max="5.0"  id="insulation2"></span>\
    //     <span>Weapon 1:\
    //       <select class="weapSelect" id="weapon20">\
    //       </select>\
    //     </span>\
    //     <span>Weapon 2:\
    //       <select class="weapSelect" id="weapon21">\
    //       </select>\
    //     </span>\
    //     <!--Q3-->\
    //     <span id="Q">Quadrant 3</span>\
    //     <span>armor3:<input type="number" value="0" min="0" max="80"  id="armor3"></span>\
    //     <span>Insulation Units:<input type="number" value="0" min="0" max="5.0"  id="insulation3"></span>\
    //     <span>Weapon 1:\
    //       <select class="weapSelect" id="weapon30">\
    //       </select>\
    //     </span>\
    //     <span>weapon 2:\
    //       <select class="weapSelect" id="weapon31">\
    //       </select>\
    //     </span>\
    //     <!--Q4-->\
    //     <span id="Q">Quadrant 4</span>\
    //     <span>Plating:<input type="number" value="0" min="0" max="80"  id="armor4"></span>\
    //     <span>Insulation Units:<input type="number" value="0" min="0" max="5.0"  id="insulation4"></span>\
    //     <span>Weapon 1:\
    //       <select class="weapSelect" id="weapon40">\
    //       </select>\
    //     </span>\
    //     <span>Weapon 2:\
    //       <select class="weapSelect" id="weapon41">\
    //       </select>\
    //     </span>\
    //     <input type="submit" id="submit" value="Create!">\
    //   </form>')
  })


$("#creator").submit(function(event){
  event.preventDefault();
  User={
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
        insulation: $('#insulation3').val(),
        weapons: [$('#weapon30').val(),$('#weapon31').val()],
        equip:["empty"]
      },
      4:{
        plating: $('#armor4').val(),
        insulation: $('#insulation4').val(),
        weapons: [$('#weapon40').val(),$('#weapon41').val()],
        equip:["empty"]
      }
    }
  }

  var x=$("#character-select").find("option:selected");
  chosen=x[0].id;
  console.log(User,chosen);
  //Append remaining UI elements.
  $('.box1').html('<img id="imgInsert" src="http://placehold.it/370x490">');
  $('.box1').append('<div class="combatLog" id="PlayerLog"></div>');
  $('.box2').html('<img id="OPimgInsert" src="http://placehold.it/370x490">');
  $('.box2').append('<div class="combatLog" id="OPLog"></div>');
  $('.container').append('<div id="turnBox">...</div>');
  setTimeout(loader,2000);
  //Populate user fields with User created data when the match begins.
  $("#ignition").on('click', function(){
    $('#imgInsert').attr('src','images/'+chosen+'.jpg')
    // $('#imgInsert').addClass('shakeMe');
    $("#PlayerLog").append('>Match has begun!<br /><br />');
    $("#moniker").html(User.Player.name)
    $('#turnBox').html(User.Player.name);
    $("#health").html(User.Player.health);
  /*Q1*/
    $("#armor1").html("Armor: "+User.aRm["1"].plating);
    $("#insulation1").html("Insulation: "+User.aRm["1"].insulation);
    $("#weapon10").html(User.aRm["1"].weapons[0]);
    $("#weapon11").html(User.aRm["1"].weapons[1]);
  /*Q2*/
    $("#armor2").html("Armor: "+User.aRm["2"].plating);
    $("#insulation2").html("Insulation: "+User.aRm["2"].insulation);
    $("#weapon20").html(User.aRm["2"].weapons[0]);
    $("#weapon21").html(User.aRm["2"].weapons[1]);
  /*Q3*/
    $("#armor3").html("Armor: "+User.aRm["3"].plating);
    $("#insulation3").html("Insulation: "+User.aRm["3"].insulation);
    $("#weapon30").html(User.aRm["3"].weapons[0]);
    $("#weapon31").html(User.aRm["3"].weapons[1]);
  /*Q4*/
    $("#armor4").html("Armor: "+User.aRm["4"].plating);
    $("#insulation4").html("Insulation: "+User.aRm["4"].insulation);
    $("#weapon40").html(User.aRm["4"].weapons[0]);
    $("#weapon41").html(User.aRm["4"].weapons[1]);
  //Set up the opponent.
    OPrutger();
  })
});
