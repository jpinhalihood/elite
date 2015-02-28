/**
 * Requires:
 *  /common/scripts/serialScroll/jquery-1.3.2.min.js
 *
 */
var MAX_HEIGHT = 400;

$(document).ready(

function() {
    $("div#videoLink").click(
        function() {
            if($("div#videoPanel").height() < MAX_HEIGHT) {
                $("div#videoPanel").animate({height: MAX_HEIGHT + "px", opacity: "1.0", display: "block"});

            } else {
                $("div#videoPanel").animate({height: "0px", opacity: "0.0", display: "none"});
            }
        }
    );
    $("div#blackLightLazerLink").click(
        function() {
            if($("div#blackLightLazerPanel").height() < MAX_HEIGHT) {
                $("div#blackLightLazerPanel").animate({height: MAX_HEIGHT + "px", opacity: "1.0"});
            } else {
                $("div#blackLightLazerPanel").animate({height: "0px", opacity: "0.0"});
            }
        }
    );
    $("div#noVideoLink").click(
        function() {
            if($("div#noVideoPanel").height() < MAX_HEIGHT) {
                $("div#noVideoPanel").animate({height: MAX_HEIGHT + "px", opacity: "1.0"});
            } else {
                $("div#noVideoPanel").animate({height: "0px", opacity: "0.0"});
            }
        }
    );
    $("div#soundLightLink").click(
        function() {
            if($("div#soundLightPanel").height() < MAX_HEIGHT) {
                $("div#soundLightPanel").animate({height: MAX_HEIGHT + "px", opacity: "1.0"});
            } else {
                $("div#soundLightPanel").animate({height: "0px", opacity: "0.0"});
            }
        }
    );
    $("div#juniorLink").click(
        function() {
            if($("div#juniorPanel").height() < MAX_HEIGHT*2) {
                $("div#juniorPanel").animate({height: MAX_HEIGHT + "px", opacity: "1.0"});
            } else {
                $("div#juniorPanel").animate({height: "0px", opacity: "0.0"});
            }
        }
    );
});


