function rngQ(){
	n=Math.floor(Math.random()*4);
		if(n===0){
			random=4;
		}
		else{
			random=n;
		}
	return random;
}

var shoulder= {
  "Val.R/E":{
   	name:"Val.R/E",
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

function check(Dmg){
	var q=rngQ();
    console.log(q);
    console.log(Dmg);
        for(var i in shoulder.aRm){
            if(shoulder.aRm[i]===shoulder.aRm[q]){
               if(shoulder.aRm[i].plating===0){
                 x=i;
                 pass=Dmg
                 console.log("check")
                 breach(pass);
               }
               else if(shoulder.aRm[i].plating===Dmg){
               shoulder.aRm[i].plating=0;
               console.log("Armor destroyed!")
               }
               else if(shoulder.aRm[i].plating<=Dmg){
                    x=i;
                    pass=Dmg-shoulder.aRm[i].plating;
                    shoulder.aRm[i].plating=0;
                    console.log("Armor breached");
                    breach(pass)
               }
               else{
               shoulder.aRm[i].plating-=Dmg;
               console.log(shoulder.aRm[i].plating)
               }
           }
        }
}

function breach(pass){
    if(shoulder.aRm[x].insulation===0){
        console.log("breach")
        if(shoulder.aRm[x].weapons[0]==="empty"){
           console.log("breach 2");
           wound(pass);
       }
    }
    else if(shoulder.aRm[x].insulation>pass){
        shoulder.aRm[x].insulation-=pass;
        Console.log(pass+" Insulation damaged!");
    }
    else if(shoulder.aRm[x].insulation===pass){
        shoulder.aRm[x].insulation=0;
        console.log("Insulation offline!")
    }
    else{
        z=pass-shoulder.aRm[x].insulation
        shoulder.aRm[x].insulation=0;
        console.log("Insulation offline!")
        if(shoulder.aRm[x].weapons!= "empty"){
          console.log(shoulder.aRm[x].weapons[0]+" destroyed!")
          shoulder.aRm[x].weapons.shift();          
        }
    }
}

function wound(pass){
    shoulder["Val.R/E"]["health"]-=1;
    if(shoulder["Val.R/E"]["health"]===0){
        console.log("Shoulder is unconcious!")
    }
    else{
       console.log("Beginning medical protocols!")
    }

}
//console.log(shoulder["aRm"]q3.equip);
check(30);
