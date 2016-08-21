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
  $("#creationInsert").attr("src","images/"+chosen+".jpg")
}

function loader(){
  $("#PlayerLog").append('<br/>>Match pending...<br />')
  $("#OPLog").append('<br/>>Match pending...<br />')
}

$('#preMade').click(function(){
  populate(chosen)
})

$(document).on('click','#ender',function(){
  // event.preventDefault();
  $('.infoPane').remove();
  $('.splashCloud').remove()
  $('.status1').append(
    '<div class="frame1">\
      <p class="info" id="platingInfo">A layer of ultra-thin armor forming the outer shell of an aRm.\
      A single quadrant can have a maximum of 15 layers of Plating. But assign them wisely, as the entire\
      aRm can only carry 40 layers. Anything more risks be heavy enough to break even the Shoulders\
      reinforced spine, or ripping the aRm from it"s fixtures.</p>\
      <p class="info" id="insulationInfo">Insulation units manage heat within the casing of an aRm. They"re\
      most useful in conjuction with energy weapons and explosives, but also serve as a secondary layer\
      of protection for weapons and an aRm"s core.</p>\
    </div>');
  $('.status2').append('<div class="frame2"></div>');
})

$(document).on('mouseenter', '#armor1, #info4Plating', function(){
  console.log("Hover online.")
  $('#platingInfo').css('opacity','1');
})

$(document).on('mouseleave', '#armor1, #info4Plating', function(){
  console.log("Hover offline.")
  $('#platingInfo').css('opacity','0');
})

$(document).on('mouseenter', '#insulation1, #info4Insulation', function(){
  console.log("Hover online.")
  $('#insulationInfo').css('opacity','1');
})

$(document).on('mouseleave', '#insulation1, #info4Insulation', function(){
  console.log("Hover offline.")
  $('#insulationInfo').css('opacity','0');
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
    $("#PlayerLog").append('>Match has begun!<br /><br />');
    $("#moniker").html(User.Player.name)
    $('#turnBox').html(User.Player.name);
    // $("#health").html(User.Player.health);
    $('#health').append(
      '<span class="healthSpan" id="health0"></span>\
      <span class="healthSpan" id="health1"></span>\
      <span class="healthSpan" id="health2"></span>\
      <span class="healthSpan" id="health3"></span>')
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

function playerFind(){
    return User;
}
