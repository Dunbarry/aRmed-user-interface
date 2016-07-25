function percentage(){
	p=Math.floor(Math.random()*10);
	percent=p*'.1';
	return percent;
}

function rng3(){
	n=Math.floor(Math.random()*3);
		if(n===0){
			random=3;
		}
		else{
			random=n;
		}
	return random;
}

 //Standard
	function RoundsSt(r){
		return(r);
	}

//Hellfire
	function RoundsHf(r){
		return(r+1)+" damage and steady debuff!";
	}

//Hellwater || Highwater (acid)
	function RoundsHw(r){
		acid=rng();
		turns=rng();
			if(turns===1){
			return(r+" damage + "+acid+" acid damage per turn for "+turns+" turn.");
			}
			else{
			return(r+" damage + "+acid+" acid damage per turn for "+turns+" turns.");
			}
	}

//Armor Piercing
	function RoundsDp(r){
		aDmg=Math.floor(r*percentage());
		wDmg=r-aDmg;
		return(aDmg+" armor damage + "+wDmg+" damage to Slot x.");
	}

//Misdemeanor Assault Rifle
	function Misdemeanor(ammo){
		console.log(ammo(5));
	}

//Felony Assault Rifle
	function Felony(ammo){
		console.log(ammo(10));
	}

//Misdemeanor();
//Felony();
// rng3();
//percentage();
