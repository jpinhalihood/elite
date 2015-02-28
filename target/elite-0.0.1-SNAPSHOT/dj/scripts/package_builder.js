/**
 * Requires:
 *  /common/scripts/serialScroll/jquery-1.3.2.min.js
 *
 *  create a div called 'slider'
 *  create two divs called 'hideButton' and 'showButton' of class
 *  'expanding_panel_button'
 */
var BASE_VAL = '499.00';

$(document).ready(
    function() {
        initPackageBuilder();

        $(".packageBuilderLink").click(
            function(e){
            var y = e.pageY - this.offsetTop;
            showPopUp('div#packageBuilderPopUp', y);
        })
        
    }
);
    

function initPackageBuilder() {

    var $totalElement = $("div#total");

    var currency = formatCurrency(BASE_VAL);
   
    if($totalElement) {
        //alert('Currency: ' + currency);
        $totalElement.text(currency);
    }
}

function formatCurrency(val) {

    var toRet = '';
    var hasChange = (val.indexOf('.') > -1) ? true : false;
    
    if(hasChange) {
        //alert('Has change');
        var dollars = val.substr(0, val.indexOf('.'));    
        var change = val.substr(val.indexOf('.') + 1, val.length);

        //alert('Val: ' + val + '\n' + 'Dollars: ' + dollars + '\n' + 'Change: ' + change);

        if(change.length < 2)
            change += '0';
            
        toRet = dollars += '.' + change;

    } else {
        
        //alert('Has no change');
        toRet = val += '.00';
                
    }
    return toRet;
}

function handleClick(linkId, expanderId) {
    var h = 150;
    if($(expanderId).height() < h) {
        $(expanderId).animate({height: h +  "px", opacity: "1.0"});
        $(linkId).text("-");
    } else {
        $(expanderId).animate({height: "0px", opacity: "0.0"});
        $(linkId).text("+");
    }
}

function handleCheck(formElement) {
    
    var totalElement = document.getElementById('total');
    var totalVal = parseFloat(totalElement.innerHTML);
    
    if(formElement.checked) {
        // Add to total
        var addVal = parseFloat(formElement.value);
        totalVal += addVal;
    } else {
        // Remove from total
        var remVal = parseFloat(formElement.value);
        totalVal -= remVal;
    }
    //alert(totalVal);
    var totalValAsString = totalVal.toString();
    totalElement.innerHTML = formatCurrency(totalValAsString);
}

function showPopUp(popupPanel, link) {
    var $clickedItem = $(link)
    var $popup = $(popupPanel);
    var x = $clickedItem.position().top;
    $popup.css("top", x - 150);
    $popup.css("left", "5%");
    $popup.animate({height: "300px", width: "90%", opacity: "0.95"});
    
}

function showPopUp(popupPanel, topPos) {
    var $popup = $(popupPanel);
    $popup.css("top", topPos - 250);
    $popup.css("left", "10%");
    $popup.animate({height: "300px", width: "90%", opacity: "1.0"});

}

function hidePopUp(popupPanel) {
    var $popup = $(popupPanel);
    $popup.animate({height: "0px", width: "0px", opacity: "0.0"});
}

