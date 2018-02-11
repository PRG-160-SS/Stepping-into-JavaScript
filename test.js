var average = 0;

function getAverage (a,b){
	
	average = (a + b) / 2;
	return(average);
	
}

var myResult = getAverage(7,11);

function logResults(){
	
	console.log("The average is " + myResult + " inside the function");

}

logResults();