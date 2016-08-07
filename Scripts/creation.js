
function charCheck(){
var x=$("#character-select").find("option:selected");
var y=x[0].id;
console.log(y)
$("#creationInsert").attr("src","images/"+y+".jpg")
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
        insulation: $('#insultation3').val(),
        weapons: [$('#weapon30').val(),$('#weapon31').val()],
        equip:["empty"]
      },
      4:{
        plating: $('#armor4').val(),
        insulation: $('#insulation4').val(),
        weapons: [$('#weapon40').val(),$('#weapon41').val()],
        equip:["empty"]
      },
      cylinder:["empty"]
    }
  }
  var x=$("#character-select").find("option:selected");
  y=x[0].id;
  console.log(User,y);
  $('.box1').html('<img id="imgInsert" src="http://placehold.it/370x490">');
  $('.box1').append('<div class="combatLog" id="PlayerLog"></div>');
  $('.box2').html('<img id="OPimgInsert" src="http://placehold.it/370x490">');
  $('.box2').append('<div class="combatLog" id="OPLog"></div>');
  $('.container').append('<div id="turnBox">...</div>');
  setTimeout(loader,2000);

  $("#ignition").on('click', function(){
    $('#imgInsert').attr('src','images/'+y+'.jpg')
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
    OPrutger();
  })
})

function playerFind(){
    return User;
}
