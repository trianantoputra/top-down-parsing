//SAMPLE NO.3
//RULES:

//E -> T | T+E | T-E
//T -> i | i*T | i/T

string = 'i/i-i';
//debug:
//i/i*i+i-i
query = string;
curr = 0;
head = string.charAt(0);
root = 1;
function back()
{
	curr--;
}
function E()
{
	return E1()||
	(back(),E2())||
	(back(),E3());
}
function E1()
{
	console.log('E1 jalan');
	return T() ;//&& (head=='');
}
function E2()
{
	console.log('E2 jalan');
	head = string.charAt(curr);
	return match('+') && E();
}
function E3()
{
	console.log('E3 jalan');
	head = string.charAt(curr);
	return match('-') && E();
}
function T()
{
	return T1()||
	(back(),T2())||
	(back(),T3());
}
function T1()
{
	console.log('T1 jalan');
	match('i');

	if(head=='+')
	{
		return E2();
	}
	else if(head=='-')
	{
		return E3();
	}
	else if(head == '')
		return true;
	else
		return false;
}
function T2()
{
	console.log('T2 jalan');
	head = string.charAt(curr);
	return match('i') && match('*') && T();
}
function T3()
{
	console.log('T3 jalan');
	head = string.charAt(curr);
	return match('i') && match('/') && T();
}
function match(str)
{
	console.log('string: ',str);
	console.log('head|curr : ',head,curr);
	if(head == str)
	{
		curr++;
		head = string.charAt(curr);
		return true;
	}
	/*else if (head == '' && str != '')
	{
		head = string.charAt(0);
		curr = 0;
		return arguments.callee.caller(++track);
	}
	else
	{
		b = ++track;
		//console.log('b',b);
		return match.caller(b);
	}*/
	
}

E();

if(head == '')
	console.log(query,'diterima');
else
	console.log(query,'tidak diterima');