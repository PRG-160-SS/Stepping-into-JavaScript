function ageLimit(d){
	
	if( d < 1997 ){
		return "You are above the drinking age limit";
	} 
	else{
		return "You are too young to drink alcohol";
	}
	
}

console.log(ageLimit(1987));
document.write(ageLimit(1987));

