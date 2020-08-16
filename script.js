var res= document.getElementById("res");

function operand(v){
	res.innerHTML+= v;
}

function optr(v){
	res.innerHTML+= v;
}

function cl(){
	res.innerHTML= "";
}

function eq(){
	var ans= "No Operator";

	if(res.innerHTML.indexOf('+') != -1){
		let nums= res.innerHTML.split('+');
		let a= parseInt(nums[0],2);
		let b= parseInt(nums[1],2);
		ans= (a+b).toString(2);
	}
	else if(res.innerHTML.indexOf('-') != -1){
		let nums= res.innerHTML.split('-');
		let a= parseInt(nums[0],2);
		let b= parseInt(nums[1],2);
		ans= (a-b).toString(2);
	}
	else if(res.innerHTML.indexOf('*') != -1){
		let nums= res.innerHTML.split('*');
		let a= parseInt(nums[0],2);
		let b= parseInt(nums[1],2);
	    ans= (a*b).toString(2);
	}
	else if(res.innerHTML.indexOf('/') != -1){
		let nums= res.innerHTML.split('/');
		let a= parseInt(nums[0],2);
		let b= parseInt(nums[1],2);
		ans= parseInt((a/b)).toString(2);
	}
	res.innerHTML= ans;
}