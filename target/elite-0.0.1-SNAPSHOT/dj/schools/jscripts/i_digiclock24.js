//<!--
//***********************************************************************************
//	Digital Clock
//***********************************************************************************
// Pre-load the images

var zero = new Image(20,20);
zero.src = "images/zero.jpg"
var one = new Image(20,20);
one.src = "images/one.jpg"
var two = new Image(20,20);
two.src = "images/two.jpg"
var three = new Image(20,20);
three.src = "images/three.jpg"
var four = new Image(20,20);
four.src = "images/four.jpg"
var five = new Image(20,20);
five.src = "images/five.jpg"
var six = new Image(20,20);
six.src = "images/six.jpg"
var seven = new Image(20,20);
seven.src = "images/seven.jpg"
var eight = new Image(20,20);
eight.src = "images/eight.jpg"
var nine = new Image(20,20);
nine.src = "images/nine.jpg"

var arrImages = new Array( 10 )
arrImages[0] = zero
arrImages[1] = one
arrImages[2] = two
arrImages[3] = three
arrImages[4] = four
arrImages[5] = five
arrImages[6] = six
arrImages[7] = seven
arrImages[8] = eight
arrImages[9] = nine

function SwapMe( Img1, Img2 )
{
	document.images[Img1].src = eval( Img2 + '.src' )
}


var iTimerID = null;
var iTimerID2 = null;
var sTimeValue;
var bTimerIsRunning = true;
var bTimeOutTimerIsRunning = true;
var bUserWarned = false;
var bUseTimeOuts = false;
var iTimer1;
var iTimer2;

function StopClock()
{
	if( bTimerIsRunning )
	{
		clearTimeout( iTimerID )
		bTimerIsRunning = false
	}
}

function StartClock()
{
	StopClock()
	bTimerIsRunning = true;	
	ShowTime()
}

function ShowTime()
{
	var hours
	var minutes
	var seconds
	var sHours
	var iHour1
	var iHour2
	var iMin1
	var iMin2
	var iSec1
	var iSec2
	
	var iHourToGet
	var iMinToGet
	var iSecToGet
	var dStartTime
	
	bTimerIsRunning = true;
	dStartTime = new Date();
	hours = dStartTime.getHours()
	minutes = dStartTime.getMinutes()
	seconds = dStartTime.getSeconds()

	sHours = hours.toString()
	// Make the images do the work...

	iHourToGet = parseInt( hours )
	iMinToGet = parseInt( minutes )
	iSecToGet = parseInt( seconds )
	if(  ( iHourToGet < 24 ) && ( sHours.length < 2 ) )
	{
		iHour1 = 0
		iHour2 = iHourToGet
	}
	else if( ( iHourToGet < 24 ) && ( sHours.length == 2 ))
	{
		iHour1 =  GetCharAt( iHourToGet, 0 )
		iHour2 = GetCharAt( iHourToGet, 1 )
	}

	if( iMinToGet < 10 )
	{
		iMin1 = 0
		iMin2 = iMinToGet
	} 
	else
	{
		iMin1 = GetCharAt( iMinToGet, 0 )
		iMin2 = GetCharAt( iMinToGet, 1 )
	}

	if( iSecToGet < 10 )
	{
		iSec1 = 0
		iSec2 = iSecToGet
	} 
	else
	{
		iSec1 = GetCharAt( iSecToGet, 0 )
		iSec2 = GetCharAt( iSecToGet, 1 )
	}

	document.images["hour1"].src = arrImages[iHour1].src
	document.images["hour2"].src = arrImages[iHour2].src
	document.images["min1"].src = arrImages[iMin1].src
	document.images["min2"].src = arrImages[iMin2].src
	document.images["sec1"].src = arrImages[iSec1].src
	document.images["sec2"].src = arrImages[iSec2].src

	iTimerID = setTimeout( "ShowTime()", 1000 )
}


function GetCharAt( iNumber, iIndex )
{
	var sNumber = new String( iNumber )
	var sRet = parseInt( sNumber.charAt( iIndex ) )
	return sRet
}



/*  This text is required in any HTML document that will use i_digiclock.js

<table border="0" cellpadding="0" cellspacing="0" width="70" height="17">
<tr>
     <td width="10"><img name="hour1" src="images/zero.jpg" width="10" height="17"></td>
     <td width="10"><img name="hour2" src="images/zero.jpg" width="10" height="17"></td>
     <td width="5"><img name="colon1" src="images/colon.jpg" width="5" height="17"></td>
     <td width="10"><img name="min1" src="images/zero.jpg" width="10" height="17"></td>
     <td width="10"><img name="min2" src="images/zero.jpg" width="10" height="17"></td>
     <td width="5"><img name="colon2" src="images/colon.jpg" width="5" height="17"></td>
     <td width="10"><img name="sec1" src="images/zero.jpg" width="10" height="17"></td>
     <td width="10"><img name="sec2" src="images/zero.jpg" width="10" height="17"></td>
</tr>
</table>
*/
//-->
