var oneTimeOnly=1;
var counter=0;
var colorCounter=0;
var basics='<button class="closer" id="closer">"Go on."</button><p>No, aRmed Combat is not blood sport. Killing your opponent does nothing but cut into your purse. Our duals allow the augmented, known as Shoulders, pit their self-made, armored prosthetics against one another in a test of design, durability, and destructive capabilty. To win, the other Shoulder must be disaRmed: their entire arsenal reduced to zero functionality. Or, have their aRm broken: the entire prosthesis reduced to zero functionality.'

var basicTactics='<button class="closer" id="closer">"Please continue."</button><p>Any school child knows the history of aRm technology. Our tournaments cater to the inevitable next step in that so-called abandoned tehcnology: weaponization. Basic aRm design is based around four quadrants, each fitted with a custom amount of <span class="green" id="crossPlating">plating</span>, <span class="yellow" id="crossInsul">insulation</span>, <span class="offline" id="crossWeap">weapons</span>, and other equipment. Ten minutes on a Tor browser and your basic user could have this information. So do not feel flattered.</p><p>Remove the defensive measures from a quadrant and you can then destory the weapons and equipment. Punch through the defenses and weapons of a quadrant, and the core will be exposed. Destory the core and you break the aRm.</p>\
<div class="crossSection">\
  <div class="outerHousing">\
    <p class="insulation">|X|_|X|_|X|_|X|_|X|</p>\
  </div>\
  <div class="weapon"></div>\
  <div class="innerHousing">\
    <div class="weapPeg"></div>\
    <div class="weapConduit"></div>\
    <div class="weapConduit1"></div>\
    <div class="weapConduit2"></div>\
  </div>\
  <div class="core"></div>\
  <div class="charge"></div>\
</div>'

var chips='<button class="closer" id="closer">"I see."</button><p>But every dual has two sides, so handing out punishment must be done while also tanking it. Some Shoulders fortify their aRms like tanks, some build a completely offensive and bring the pain. And there are plenty of designers inbetween. Keeping abreast of the status of your own arm is key. Plating breaches, insulation failures and and destroyed weapons are all regular occurences. Without nerves to warn them, Shoulders must keep themselves informed.</p>'

var core='<button class="closer" id="closer">Giddy up.</button><p>As for your question regarding power failures: I should think anyone who knows anything knows Cool Fusion is half of what makes aRm technology possible. Not quite cold, but much cooler than hot fusion. Not to mention infintely less messy when it goes critical. If a combants core does exactly that, the aRm is broken and they lose.</p>'

var transition='<button class="closer" id="ender">Giddy up.</button><p>Come to think of it, I know the perfect match for you to see. One of the Shoulders is new to the circuit. The name is: <input type="text" placeholder="Character Name" id="name"> A newcomer, but one with promise. And should you decide to dishonor our agreement? Well, better one of our veterans is not the one to suffer.</p><p>I will be in contact with you on a date, time, and protocol. If you make me regret doing so, it will be a state we share.</p>'

var signOff='<p>Thank you for playing the demo for aRmed Combat! Future plans include:</p>\
  <ul>\
    <li>Additional weapons</li>\
    <li>Weapon mods</li>\
    <li>Character customization</li>\
    <li>Character perks</li>\
    <li>And more!</li>\
  </ul>'

function newSplash(){
  $('.icon').remove();
  $('.splashVeil').remove();
}

function tutorial(text){
  $('.infoPane').html(text)
}

$(document).on("click", "#crossPlating", function(){
  if($(this).hasClass('marked')){
    $(this).removeClass('marked');
    $('.outerHousing').css('border', '10px solid gray')
    $('.outerHousing').css('border-bottom', '0');
  }
  else{
    $('.outerHousing').css('border', '10px solid #66ff66')
    $('.outerHousing').css('border-bottom', '0');
    $(this).addClass('marked');
  }
});

$(document).on("click", "#crossInsul", function(){
  if($(this).hasClass('marked')){
    $(this).removeClass('marked');
    $('.insulation').css('color', 'black');
  }
  else{
    $('.insulation').css('color', '#F5F533');
    $(this).addClass('marked');
  }
});

$(document).on("click", "#crossWeap", function(){
  if($(this).hasClass('marked')){
    $(this).removeClass('marked');
    $('.weapon').css('background-color', 'black');
    $('.weapPeg').css('background-color', 'black');
    $('.weapConduit').css('background-color', 'black');
  }
  else{
    $('.weapon').css('background-color', 'red');
    $('.weapPeg').css('background-color', 'red');
    $('.weapConduit').css('background-color', 'red');
    $(this).addClass('marked');
  }
});

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
      $('.arrowPulse').remove();
      $('.infoPane').html(transition);
      break;
  }
})

function quadArrow(){
  $('body').append('<div class="arrowPulse" id="quadArrow"></div>')
}

$(document).ready(function(){
  $('.weapSelect').append(
    '<option selected>empty</option>\
    <option>Misdemeanor</option>\
    <option>Felony</option>\
    <option>Repeat Offender</option>\
    <option>Pontificator</option>');
  setTimeout(newSplash, 12500);
})

$('.splashVeil, .icon').click(function(){
  newSplash();
})
