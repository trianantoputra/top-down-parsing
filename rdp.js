//SAMPLE NO.3
//RULES:
//E -> i | i*T | i/T
//	   i+E | i*T+E | i/T+E  
//	   i-E | i*T-E | i/T-E

//T -> i | i*T | i/T

string = 'i/i/i*i-i+i';
query = string;
operator = ['+','-','*','/'];

head = lookhead(string);
function E()
{
	if(head == 'i')
	{
		match('i');T();
	}
	else if(head == '*')
	{
		match('*');T();
	}
	else if(head == '/')
	{
		match('/');T();
	}
	else if(head == '+')
	{
		match('+');E();
	}
	else if(head == '-')
	{
		match('-');E();
	}
	else
		return;
}
function T()
{
	if(head == 'i')
	{
		match('i');T();
	}
	else if(head == '*')
	{
		match('*');T();
	}
	else if(head == '/')
	{
		match('/');T();
	}
	else
		E();
}
function lookhead(str)
{	
	//return str.slice(0,1);
	return str.charAt(0);
}
function match(str)
{
	if(head == str)
	{
		console.log('head now: ',head);
		string = string.slice(1);
		//head = string.slice(0,1);
		head = string.charAt(0);
	}
	else
		console.log('error');
}
function validate(str)
{
	for(var i=0;i<str.length;i++)
	{
		if(i%2 == 0)
		{
			if(str.charAt(i) != 'i')
			{
				return false;
			}
		}
		else if(i%2 == 1)
		{
			if(!operator.includes(str.charAt(i)))
			{
				return false;
			}
		}
	}
	//if(str.length%2 == 0)
	//	return false;
	return true;
	
}
if(validate(string))
	E();

if(lookhead(string) == '')
	console.log(query,'diterima');
else
	console.log(query,'tidak diterima');

//var tes = 'i/ii*i/i';
//console.log(validate(tes));
//console.log(Math.ceil(7/2));
/*console.log(tes.slice(0,1));
console.log(tes.slice(2,3));
console.log(tes.slice(3,4));
console.log(tes.slice(5,6));
console.log(tes.slice(9,10));
console.log(tes.slice(10,11));
console.log(tes);*/