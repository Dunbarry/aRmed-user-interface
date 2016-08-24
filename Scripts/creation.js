wtlf=0;
var User={};

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
      <p class="info" id="platingInfo">Plating: A layer of ultra-thin, ultra-dense, ablative armor forming the\
      outer shell of an aRm. A single quadrant can have a maximum of 15 layers of Plating. But assign\
      them wisely, as the entire aRm can only carry 40 layers. Anything more risks be heavy enough to\
      break even the Shoulders reinforced spine, or pull an aRm from a socket.</p>\
      <p class="info" id="insulationInfo">Insulation: Micro units manage heat within the casing of an aRm.\
      They are most useful in conjuction with energy weapons and explosives (coming soon!), but also\
      serve as a secondary layer of protection for weapons and an aRm core. A single unit negates 5 points of heat while operating and one point of damage when destroyed.</p>\
      <p class="info" id="creationInfo">To make a custom character and aRm, fill out the character sheet and select a picture. Then click this button. For tips on how to use a pre-made character and aRm, mouse over the "Deploy" button.</p>\
      <p class="info" id="preMadeInfo">To use a pre-made character and aRm, select a picture and then click this button. For tips on how to create a custom character and aRm, mouse over the "Deploy" button.</p>\
    </div>');
  $('.status2').append(
    '<div class="frame2">\
      <div>\
        <p class="weapInfo" id="misInfo">Misdemeanor: One of the first weapons platforms developed for aRm mounting.\
        As weaponization of aRm constructs is illegal, it has never seen mass production. So the simplicity of the\
        design and use of fairly common parts makes it favored by builders on a budget.</p>\
        <span class="weapInfo">Damage : \
          <span class="healthSpan"></span>\
          <span class="healthSpan"></span>\
        </span>\
        <span class="weapInfo">Accuracy : \
          <span class="healthSpan"></span>\
          <span class="healthSpan"></span>\
        </span>\
      </div>\
      <div>\
        <p class="weapInfo" id="felInfo">Felony: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed\
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\
        <span class="weapInfo">Damage : \
          <span class="healthSpan"></span>\
          <span class="healthSpan"></span>\
          <span class="healthSpan"></span>\
        </span>\
        <span class="weapInfo">Accuracy : \
          <span class="healthSpan"></span>\
        </span>\
      </div>\
      <div>\
        <p class="weapInfo" id="repInfo">Repeat Offender: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed\
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\
        <span class="weapInfo">Damage : \
          <span class="healthSpan"></span>\
          <span class="healthSpan"></span>\
          <span class="yellowSpan"></span>\
          <span class="yellowSpan"></span>\
        </span>\
        <span class="weapInfo">Accuracy : \
          <span class="yellowSpan"></span>\
        </span>\
      </div>\
    </div>');
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

$(document).on('mouseenter', '#submit', function(){
  console.log("Hover online.")
  $('#creationInfo').css('opacity','1');
})

$(document).on('mouseleave', '#submit', function(){
  console.log("Hover offline.")
  $('#creationInfo').css('opacity','0');
})

$(document).on('mouseenter', '#preMade', function(){
  console.log("Hover online.")
  $('#preMadeInfo').css('opacity','1');
})

$(document).on('mouseleave', '#preMade', function(){
  console.log("Hover offline.")
  $('#preMadeInfo').css('opacity','0');
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
  // removing UI elements.
  $('.frame1').remove();
  $('.frame2').remove();
  $('.healthSpan').remove();
  //Adding Button
  $('body').append('<div class="splashVeil"></div>')
  $('.splashVeil').append(
  '<div class="wrapper">\
    <input type="checkbox" id="toggle" class="toggle" name="toggle" />\
    <label for="toggle" class="powerBtn">\
      <span class="powerBtn-light"></span>\
    </label>\
  </div>');
  //Append remaining UI elements.
  $('.box1').html('<img id="imgInsert" src="http://placehold.it/370x490">');
  $('.box1').append('<div class="combatLog" id="PlayerLog"></div>');
  $('.box2').html('<img id="OPimgInsert" src="http://placehold.it/370x490">');
  $('.box2').append('<div class="combatLog" id="OPLog"></div>');
  $('.container').append('<div id="turnBox">...</div>');
  setTimeout(loader,2000);
  //Populate user fields with User created data when the match begins.
  $(".wrapper").on('click', function(){
    if(wtlf===0){
    setTimeout(buttonClear,3000);
    $('#imgInsert').attr('src','images/'+chosen+'.jpg')
    $("#PlayerLog").append('>Match has begun!<br /><br />');
    $("#moniker").html(User.Player.name)
    $('#turnBox').html(User.Player.name);
    $('#health').append(
      '<span class="healthSpan" id="health0"></span>\
      <span class="healthSpan" id="health1"></span>\
      <span class="healthSpan" id="health2"></span>\
      <span class="healthSpan" id="health3"></span>')
      wtlf++;
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
    }
  })
});

function playerFind(){
    return User;
}
