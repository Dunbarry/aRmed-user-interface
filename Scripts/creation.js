var counter=0;
var basics='<p>aRmed Combat is not blood sport. Killing your opponent does nothing but cut into your purse. To win a match, a Shoulder must be disaRmed: their entire arsenal reduced to zero functionality. Or leave them with their aRm broken: their prosthesis reduced to zero functionality.</p><button class="closer" id="closer">Okay!</button>'

var basicTactics='<p>Basic aRm design is based around four quadrants, each fitted with a custom amount of plating, insulation, weapons, and other equipment. Remove the defensive measures from a quadrant and you can then destory the weapons and equipment. Destroy an the entire arsenal across all quadrants and your opponent is disaRmed. Punch through the defenses and weapons of a quadrant, and the core will be exposed and vulnerable. Destory the core and you break the aRm.</p><button class="closer" id="closer">Okay!</button>'

var chips='<p>But your opponent will have their own tools of destruction, and while you try to break their aRm, they will be trying to break yours. Fortify your aRm like a tank, build a completely offensive arm and bring the pain, or anything inbetween. No matter what, all those choices and their status will be displayed here, with your opponent displayed on the other side. Plating breach? Insulation offline? Weapon scrapped? These windows will let you know.</p><button class="closer" id="closer">Okay!</button>'

var core='<p>Anyone who knows anything knows Cool Fusion is half of what makes aRm technology possible. Not quite cold, and much cooler than hot, not to mention far less messy when it goes critical. If yours does, your aRm is broken and you lose. So keep an eye on this readout and make sure that does not happen!</p><button class="closer" id="closer">Giddy up.</button>'

var transition='<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><button class="closer" id="ender">Giddy up.</button>'

function tutorial(text){
  $('.infoPane').html(text)
}

$(document).on("click","#closer",function(){
  counter++;
  switch (counter){
    case 1:
      $('.splash').remove();
      $('body').append('<div class="infoPane"></div>');
      tutorial(basics);
      break;
    case 2:
      $('.infoPane').html(basicTactics);
      break;
    case 3:
      $('.infoPane').html(chips);
      $('body').append('<div class="arrowStrafe"></div>');
      break;
    case 4:
      $('.arrowStrafe').remove();
      $('.infoPane').html(core);
      $('body').append('<div class="arrowPulse"></div>');
      break;
    case 5:
      $('.aprrowPulse').remove();
      $('.infoPane').html(transition);
      break;
  }
})

$(document).on('click','#ender',function(){
  $('.infoPane').remove();
  $('.splashCloud').remove();
})

$(document).ready(function(){``
  $('.weapSelect').append(
    '<option selected>empty</option>\
    <option>Misdemeanor</option>\
    <option>Felony</option>\
    <option>Repeat Offender</option>\
    <option>Streaker</option>'
  )
})

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

var User={};
$("#creator").submit(function(){
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
})

$('#preMade').click(function(){
  populate(chosen)
})

function playerFind(){
    return User;
}

function quoteFetch(){
		$.ajax({
			url:'http://quotes.rest/qod.json',
			error: function(err) {console.error(err)},
		method: 'GET',
		success: function(data) {
			quote=data.contents.quotes[0].quote
			alert(quote);
		}
	})
}

  // $('.hsalps').html("<p>Thank you for playing this demo of aRmed Combat.\
  // Please be sure to read the credits for all artists involved in the project!\
  // And check back in the future for updates.</p><ul>Upcoming features include:\
  // <li>Unlockable lore</li><li>Additional weapons and characters</li><li>aRm and\
  // weapon mods</li><li>Local PvP</li><li>Much, much more!</li><br><p>Until then,\
  //  stay aRmed and dangerous.");
