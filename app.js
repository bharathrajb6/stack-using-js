
let max=2;
let nums=[];
function add()
{
	document.getElementById("num").style.visibility="visible";
	document.getElementById('btn').style.visibility="visible";
	document.getElementById('display_item').style.visibility="hidden";

}
function add_item()
{
	let number=document.getElementById("num").value;
	if(max==nums.length)
	{
		alert("Stack is full..")
	}
	else if(isNaN(number))
	{
		alert("Value must be number..")
	}
	else if(number=="")
	{
		alert("It must be filled out..")
	}
	else
	{
		nums.push(number);
		display();
		document.getElementById("num").style.visibility="hidden";
		document.getElementById("num").value="";
		document.getElementById('btn').style.visibility="hidden";
	}
}
function remove()
{
	document.getElementById("num").style.visibility="hidden";
	document.getElementById('btn').style.visibility="hidden";
	if(nums.length==0)
	{
		document.getElementById('display_item').style.visibility="visible";
		document.getElementById("display_item").innerHTML="Array Elements are : 0";
	}
	else
	{
		nums.pop();
		display();
	}
}
function display()
{
	if(nums.length===0)
	{
		document.getElementById('display_item').style.visibility="visible";
		document.getElementById("display_item").innerHTML="Array is empty.";
	}
	else
	{
		document.getElementById('display_item').style.visibility="visible";
		document.getElementById("display_item").innerHTML="Array Elements are : "+nums;
	}
	
}
function exit()
{
	window.location.reload();
}