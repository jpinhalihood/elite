function initCollapsableAreaPanel(capId, height, width, opacity, visibility) {
    var cap = document.getElementById(capId);
    if(height) {
        //alert('h');
        cap.style.height = height;
    }
    
    if(width) {
        //alert('w');
        cap.style.width = width;
    }
    
    if(opacity) {
        //alert('o');
        cap.style.opacity = opacity;
    }
    
    if(visibility) {
        //alert('v');
        cap.style.visibility = visibility;
    }
}

function toggleCollapsableAreaPanel(capId) {

    var cap = document.getElementById(capId);
    var height = parseInt(cap.style.height);
    
    //alert('HEIGHT: ' + height);
    if(height < 200) {
        //alert('HEIGHT is ' + cap.style.height + '; Resizing to 200px!');
        cap.style.visibility = 'visible';
        cap.style.opacity = 1.0;
        cap.style.height = 200;
    } else {
        //alert('HEIGHT is ' + cap.style.height + '; Resizing to 0px!');
        cap.style.visibility = 'hidden';
        cap.style.opacity = 0;
        cap.style.height = 0;
    }
}