var quadCount=0;
var User={
  "Player":{
    name:"",
    height:0,
    nationality:"",
    health:4,
  },
  "aRm":{
    1:{
      plating:0,
      insulation: 0,
      weapons: ["",""],
      equip:["empty"]
    },
    2:{
      plating:0,
      insulation: 0,
      weapons: ["",""],
      equip:["empty"]
    },
    3:{
      plating:0,
      insulation: 0,
      weapons: ["",""],
      equip:["empty"]
    },
    4:{
      plating:0,
      insulation: 0,
      weapons: ["",""],
      equip:["empty"]
    }
  }
}

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

function quadCreator(){
  $('.creationPane').html(
    '<form>\
      <span class="top" id="Q">Quadrant '+quadCount+'</span>\
      <span>Plating:<input type="number" value="0" min="0" max="80" id="armor1"></span>\
      <span>Insulation Units:<input type="number" value="0" min="0" max="5.0"  id="insulation1"></span>\
      <span>Weapon 1:\
        <select class="weapSelect" id="weapon10">\
        </select>\
      </span>\
      <span>Weapon 2:\
        <select class="weapSelect" id="weapon11">\
        </select>\
      </span>\
      <button class="closer" id="ender">Quadrant #'+quadCount+' Complete</button>\
    </form>')
  $('.weapSelect').append(
    '<option selected>empty</option>\
    <option>Misdemeanor</option>\
    <option>Felony</option>\
    <option>Repeat Offender</option>');
  quadCount++;
}

$(document).on('click','#ender',function(){
  event.preventDefault();
  if(quadCount===0){
    $('.infoPane').remove();
    $('body').append('<div class="creationPane"></div>');
    quadCount++;
  }
  quadCreator();
})

// $('#quadCreator').click(function(){
//   quadCreator();
// })


// $("#creator").submit(function(){
//   event.preventDefault();
//   User={
//     "Player":{
//      	name:$('#name').val(),
//       height:$('#height').val(),
//       nationality:$('#nationality').val(),
//       health:4,
//     },
//     "aRm":{
//       1:{
//         plating: $('#armor1').val(),
//         insulation: $('#insulation1').val(),
//         weapons: [$('#weapon10').val(),$('#weapon11').val()],
//         equip:["empty"]
//       },
//       2:{
//         plating: $('#armor2').val(),
//         insulation: $('#insulation2').val(),
//         weapons: [$('#weapon20').val(),$('#weapon21').val()],
//         equip:["empty"]
//       },
//       3:{
//         plating:$('#armor3').val(),
//         insulation: $('#insulation3').val(),
//         weapons: [$('#weapon30').val(),$('#weapon31').val()],
//         equip:["empty"]
//       },
//       4:{
//         plating: $('#armor4').val(),
//         insulation: $('#insulation4').val(),
//         weapons: [$('#weapon40').val(),$('#weapon41').val()],
//         equip:["empty"]
//       }
//     }
//   }

//   var x=$("#character-select").find("option:selected");
//   chosen=x[0].id;
//   console.log(User,chosen);
//   //Append remaining UI elements.
//   $('.box1').html('<img id="imgInsert" src="http://placehold.it/370x490">');
//   $('.box1').append('<div class="combatLog" id="PlayerLog"></div>');
//   $('.box2').html('<img id="OPimgInsert" src="http://placehold.it/370x490">');
//   $('.box2').append('<div class="combatLog" id="OPLog"></div>');
//   $('.container').append('<div id="turnBox">...</div>');
//   setTimeout(loader,2000);
//   //Populate user fields with User created data when the match begins.
//   $("#ignition").on('click', function(){
//     $('#imgInsert').attr('src','images/'+chosen+'.jpg')
//     // $('#imgInsert').addClass('shakeMe');
//     $("#PlayerLog").append('>Match has begun!<br /><br />');
//     $("#moniker").html(User.Player.name)
//     $('#turnBox').html(User.Player.name);
//     $("#health").html(User.Player.health);
//   /*Q1*/
//     $("#armor1").html("Armor: "+User.aRm["1"].plating);
//     $("#insulation1").html("Insulation: "+User.aRm["1"].insulation);
//     $("#weapon10").html(User.aRm["1"].weapons[0]);
//     $("#weapon11").html(User.aRm["1"].weapons[1]);
//   /*Q2*/
//     $("#armor2").html("Armor: "+User.aRm["2"].plating);
//     $("#insulation2").html("Insulation: "+User.aRm["2"].insulation);
//     $("#weapon20").html(User.aRm["2"].weapons[0]);
//     $("#weapon21").html(User.aRm["2"].weapons[1]);
//   /*Q3*/
//     $("#armor3").html("Armor: "+User.aRm["3"].plating);
//     $("#insulation3").html("Insulation: "+User.aRm["3"].insulation);
//     $("#weapon30").html(User.aRm["3"].weapons[0]);
//     $("#weapon31").html(User.aRm["3"].weapons[1]);
//   /*Q4*/
//     $("#armor4").html("Armor: "+User.aRm["4"].plating);
//     $("#insulation4").html("Insulation: "+User.aRm["4"].insulation);
//     $("#weapon40").html(User.aRm["4"].weapons[0]);
//     $("#weapon41").html(User.aRm["4"].weapons[1]);
//   //Set up the opponent.
//     OPrutger();
//   })
// })
