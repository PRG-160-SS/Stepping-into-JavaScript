function primeCheck(p){

	if(p===1){
		return false;
	}
	else if(p===2){
		return true;
	}
	else{
		for(var a = 2; a < p ; a++){
			if(p % a === 0){
				return false;
			}
			
		}
		return true;	
	}
	
	
}

console.log("The number is a prime: true/false: " + primeCheck(19));








