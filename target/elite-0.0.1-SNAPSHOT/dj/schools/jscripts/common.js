//<!---
//************************************************************************************************
//	DESCRIPTION:	A method to create an object representing the browser
//	NOTES:	This was taken directly from www.htmlguru.com
//************************************************************************************************
function Is() 
{
	var agent = navigator.userAgent.toLowerCase();
	this.major = parseInt(navigator.appVersion);
	this.minor = parseFloat(navigator.appVersion);
	this.ns =	((agent.indexOf('mozilla')!=-1)&&((agent.indexOf('spoofer')==-1) && (agent.indexOf('compatible') == -1)));
	this.ns2 = (this.ns &&(this.major == 3));
	this.ns3 = (this.ns && (this.major ==3));
	this.ns4b = (this.ns && (this.minor < 4.04));
	this.ns4 = (this.ns && (this.major >= 4));
	this.ie = (agent.indexOf("msie") != -1);
	this.ie3 = (this.ie && (this.major == 2));
	this.ie4 = (this.ie && (this.major >= 4));
	this.op3 = (agent.indexOf("opera") != -1);
	this.win = (agent.indexOf("win")!=-1);
	this.mac = (agent.indexOf("mac")!=-1);
	this.unix = (agent.indexOf("x11")!=-1);
}

var is = new Is();


//	Again from www.htmlguru.com
if(is.ns4) 
{
	doc = "document";
	sty = "";
	htm = ".document";
} 
else if(is.ie4) 
{
	doc = "document.all";
	sty = ".style";
	htm = "";
}

function ActivateLink( pLink )
{
	if( is.ie4 )
	{
		lnk = eval( doc + '["' + pLink + '"]' + sty );
		lnk.textDecoration = "none";
	}
}

function DeactivateLink( pLink )
{
	if( is.ie4 )
	{
		lnk = eval( doc + '["' + pLink + '"]' + sty );
		lnk.textDecoration = "underline";
	}
}


//**************************************************************************************************************************************
//	DESCRIPTION:	A function that determines if a given string is empty
//	PARAMETERS:		
//								- sStrVal -the string to test
//*******************************************************************************************************************
function isEmptyString( sStrVal )
{
	var bTOF = false;
	if( sStrVal == null || sStrVal.length == 0)
	{
		bTOF = true;
	}
	return bTOF;
}

//**************************************************************************************************************************************
//	DESCRIPTION:	A function that pops up a lil window
//	PARAMETERS:		
//								- sName -the string name of the window
//								- sURL - the string URL
//								- iHeight - the integer height of the window (pixels)
//								- iWidth - the integer width of the window (pixels)
//**************************************************************************************************************************************
function PopUpWindow( sName, sURL, iHeight, iWidth )
{
        var sSettings = "width=" + iWidth + ",height=" + iHeight + ",scrollable=no,resizable=no,status=no";
	var newWin = window.open( sURL, sName, sSettings)
}

function PopUpWindow2( sName, sURL, iHeight, iWidth, sScroll )
{
	var newWin = window.open( sURL, sName, "width=" + iWidth + ",height=" + iHeight + ",scrollbars=" + sScroll + ",resizable=no,status=no")
}
//**************************************************************************************************************************************
//	DESCRIPTION:	A function that determines if a select is empty
//	PARAMETERS:		
//								- pSelect - a pointer to a select element
//**************************************************************************************************************************************
function isSelected( pSelect )
{
	bTOF = false;
	for(i=0; i<pSelect.length; i++)
	{
		if(pSelect.options[i].selected && parseInt(pSelect.options[pSelect.selectedIndex].value) != 0)
		{
			bTOF = true;
		}
	}
	return bTOF;
}
//**************************************************************************************************************************************
//	DESCRIPTION:	A function that determines if a given value has been selected
//	PARAMETERS:		
//								- pSelect - a pointer to a select element
//								- iValue - the value in query - this doesn't work
//**************************************************************************************************************************************
function isValueSelected( pSelect, iValue )
{
	if( pSelect.selectedIndex == iValue )
		return true
	else return false
}
//**************************************************************************************************************************************
//	DESCRIPTION:	A function that selects the option with the given value
//	PARAMETERS:		
//								- pSelect - a pointer to a select element
//								- iValue - the value in to select
//**************************************************************************************************************************************
function selectValue( pSelect, iValue )
{
	var L = pSelect.options.length
	for( i = 0; i<L; i++ )
	{
		if( pSelect.options[ i ].value == iValue )
			pSelect.options[ i ].selected = true
	}
}
//**************************************************************************************************************************************
//	DESCRIPTION:	A function that retreives the value of the selected option
//	PARAMETERS:		
//								- pSelect - a pointer to a select element.
//**************************************************************************************************************************************
function getSelectedValue( pSelect )
{
	return pSelect.options[pSelect.selectedIndex].value
}
//**************************************************************************************************************************************
//	DESCRIPTION:	A function that determines if a select is empty
//	PARAMETERS:		
//								- pSelect - a pointer to a select element
//**************************************************************************************************************************************
function isChecked( pCheckBox )
{
	if( pCheckBox.checked )
		return true
	else
		return false
}

//**************************************************************************************************************************************
//	DESCRIPTION:	A function that determines the number of days in a given month
//	PARAMETERS:		sMM - teh string representing the month from 0-11.
//**************************************************************************************************************************************
function getDaysInMonth(sMM)
{
	var iOut = 0;
	
	var lOneDayMillis = 24 * 60 * 60 * 1000;
	var dToday = new Date();
	var dFirstDayInMonth = new Date(dToday.getYear(), parseInt(sMM), 1);
	var dLastDayInMonth = null;
	var lMillis = Date.parse(dFirstDayInMonth);	
	var iMM = 0;
	
	
	// Test the month for all months except Feb.
	iMM = parseInt(sMM);	
	if(iMM == 0 || iMM == 2 || iMM == 4 || iMM == 6 || iMM == 7 || iMM == 9 || iMM == 11)
	{
		// Month is January, March, May, July, Auguest, October or December.
		iOut = 31;
	}
	else if(iMM == 3 || iMM == 5 || iMM == 8 || iMM == 10)
	{
		// Month is April, June, September, November.
		iOut = 30;
	}
	else if(iMM == 1)
	{
		// Month is February.
		// Assign the last day to the 28 days after the first
		// day of the given month, current year. (Year is irrelavant)
		dLastDayInMonth = new Date((lOneDayMillis * 28) + lMillis);
	
		// If the month changes, there are 28 days, otherwise 29.
		if(dFirstDayInMonth.getMonth()!= dLastDayInMonth.getMonth())
		{
			iOut = 28;
		}
		else
		{
			iOut = 29;
		}
		
	}
	return iOut;	
}
//**************************************************************************************************************************************
//	DESCRIPTION:	A function that adds an option from one select to another
//	PARAMETERS:		
//			- pSelectSrc - the source select
//			- pSelectDest - the destination select
//**************************************************************************************************************************************
function addOption(pSelectSrc, pSelectDest)
{	
	var selText = "";
	var selVal = "";
	var selIndex = "";
	var objOption = null;
	var arr = new Array();
	var iIndex = 0;
	var iSel = 0;
	
		for(i=0; i<pSelectSrc.options.length; i++)
		{ 
			if(pSelectSrc.options[i].selected == true)
			{
				arr[iIndex] = i;
				iIndex++;
			}
		}	
		for(i=0; i<arr.length; i++)
		{
			iSel = arr[i];
			selText = pSelectSrc.options[iSel].text;
			selVal = pSelectSrc.options[iSel].value;
				
			if(valueExistsInDest(selVal, pSelectDest))
			{
					alert("This value already exists in the destination.\n"
							+ "Please deselect it and try another value.");					
			}				
			else
			{
				objOption = new Option(selText, selVal, false, false);				
				pSelectDest.options[pSelectDest.options.length] = objOption;
				objOption = null;					
			}						
		}
}
//**************************************************************************************************************************************
//	DESCRIPTION:	A function to test is one value exists in a select.
//	PARAMETERS:		
//								- sTestVal - the current value to test
//								- pSelDest - a select menu with options to check through.
//**************************************************************************************************************************************
function valueExistsInDest(sTestVal, pSelDest)
{
	var bTOF = false;
	var sVal = "";
	var s = "";
	if(pSelDest.options.length > 0)
	{
		for(i=0; i<pSelDest.options.length; i++)
		{			
			sVal = pSelDest.options[i].value;
			if(sTestVal == sVal)
			{
				bTOF = true;
				break;
			}
		}
	}	
return bTOF;
}
//**************************************************************************************************************************************
//	DESCRIPTION:	A function that removes a selected option from a select.
//	PARAMETERS:		
//			- pSelectSrc - the source select
//			- pSelectDest - the destination select
//**************************************************************************************************************************************
function removeOption(pSelect)
{
	if(pSelect.options.length > 0)
	{
		for(i=pSelect.options.length-1; i>=0; i--)
		{
			if(pSelect.options[i].selected == true)
			{							
				pSelect.options[i] = null;
			}
		}
	}
}

function selectAllOptionValues(pSelect)
{
	for(i=0; i<pSelect.options.length; i++)
	{
		pSelect.options[i].selected = true;
	}
}

function countSelectedOptions(pSelect)
{
	var iOut = 0;
	for(i=0; i<pSelect.options.length; i++)
	{
		if(pSelect.options[i].selected == true)
		{
			iOut++;
		}
	}
return iOut;
}
//**************************************************************************************************************************************
//	DESCRIPTION:	A function that selects all available options in a select.
//	PARAMETERS:		
//			- pSelect - the source select
//**************************************************************************************************************************************
function getAllSelectedOptionValues(pSelect)
{
	var sOut = "";
	for(i=0; i<pSelect.options.length; i++)
	{
		if( pSelect.options[i].selected == true)
		{
			sOut += pSelect.options[i].value + ",";
		}
	}
return sOut;
}
//**************************************************************************************************************************************
//	DESCRIPTION:	A function that opens a pop-up window with printable content
//**************************************************************************************************************************************
function openPrintable(sTitle, sURL)
{
	var win = null;
	win = window.open(sURL, sTitle, "width=620,height=460,status=no,toolbar=no,scrollbars=yes");
}
//-->
