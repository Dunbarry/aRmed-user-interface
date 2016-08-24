//Here do pre-builds for all three avatars. When the button is clicked for the pre-built selection, these will be chosen by picture and the correct values will load.
var wtaf=0;
var danny={
  "Player":{
   	name:"Danny",
    height:"2",
    nationality:"American",
    health: 4,
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
    }
  }
};

var brooks={
  "Player":{
   	name:"General",
    height:"1.6",
    nationality:"American",
    health: 4,
  },
  "aRm":{
    1:{
      plating: 15,
      insulation: 5,
      weapons: ["Repeat Offender","empty"],
      equip:["empty"]
    },
    2:{
      plating: 10,
      insulation: 10,
      weapons:["empty","empty"],
      equip:["gyros","aRc"]
    },
    3:{
      plating:10,
      insulation: 10,
      weapons:["empty", "empty"],
      equip:["empty"]
    },
    4:{
      plating: 5,
      insulation: 20,
      weapons:["empty","empty"],
      equip:["30","30","empty"]
    }
  }
};

var valerie={
  "Player":{
   	name:"Val.r[E]",
    height:"1.45",
    nationality:"American",
    health: 4,
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
      weapons:["empty","empty"],
      equip:["gyros","aRc"]
    },
    3:{
      plating:20,
      insulation: 10,
      weapons:["Felony", "Felony"],
      equip:["empty"]
    },
    4:{
      plating: 5,
      insulation: 20,
      weapons:["empty","empty"],
      equip:["empty"]
    }
  }
};

function buttonClear(){
  $('.splashVeil').remove();
}

function populate(chosen){
  // Removing frames
  $('.frame1').remove();
  $('.frame2').remove();
  // Adding backgrounds
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
  // $('.igntion').html(id="ignitionAlt");
  setTimeout(loader,2000);
  $('#imgInsert').attr('src','images/'+chosen+'.jpg')
  $('#health').append(
    '<span class="healthSpan" id="health0"></span>\
    <span class="healthSpan" id="health1"></span>\
    <span class="healthSpan" id="health2"></span>\
    <span class="healthSpan" id="health3"></span>')
  //Populate user fields with User created data when the match begins.
  $('.wrapper').click(function(){
    setTimeout(buttonClear,3000);
    // $('#imgInsert').attr('src','images/'+chosen+'.jpg')
    // $('#imgInsert').addClass('shakeMe');
    if(wtaf===0){
    $("#PlayerLog").append('>Match has begun!<br /><br />');
    }
    wtaf++;
    // $('#imgInsert').attr('src','images/'+chosen+'.jpg')
    if(chosen==="danny"){
    chosen = danny;
    }
    else if(chosen==="brooks"){
    chosen=brooks;
    }
    else{
    chosen=valerie
    }
    User=chosen;
    $("#moniker").html(chosen.Player.name)
    $('#turnBox').html(chosen.Player.name);
    // $("#health").html(chosen.Player.health);
    // $('#health').append(
    //   '<span class="healthSpan" id="health0"></span>\
    //   <span class="healthSpan" id="health1"></span>\
    //   <span class="healthSpan" id="health2"></span>\
    //   <span class="healthSpan" id="health3"></span>')
  /*Q1*/
    $("#armor1").html("Armor: "+chosen.aRm["1"].plating);
    $("#insulation1").html("Insulation: "+chosen.aRm["1"].insulation);
    $("#weapon10").html(chosen.aRm["1"].weapons[0]);
    $("#weapon11").html(chosen.aRm["1"].weapons[1]);
  /*Q2*/
    $("#armor2").html("Armor: "+chosen.aRm["2"].plating);
    $("#insulation2").html("Insulation: "+chosen.aRm["2"].insulation);
    $("#weapon20").html(chosen.aRm["2"].weapons[0]);
    $("#weapon21").html(chosen.aRm["2"].weapons[1]);
  /*Q3*/
    $("#armor3").html("Armor: "+chosen.aRm["3"].plating);
    $("#insulation3").html("Insulation: "+chosen.aRm["3"].insulation);
    $("#weapon30").html(chosen.aRm["3"].weapons[0]);
    $("#weapon31").html(chosen.aRm["3"].weapons[1]);
  /*Q4*/
    $("#armor4").html("Armor: "+chosen.aRm["4"].plating);
    $("#insulation4").html("Insulation: "+chosen.aRm["4"].insulation);
    $("#weapon40").html(chosen.aRm["4"].weapons[0]);
    $("#weapon41").html(chosen.aRm["4"].weapons[1]);
  //Set up the opponent.
    OPrutger();
  })
}
