/**
 * Requires:
 *  /common/scripts/serialScroll/jquery-1.3.2.min.js
 *
 */
$(document).ready(

function() {
    
    $("img#link1").click(
        function() {
            var h = 300;
            
            if($("div#rp1").height() < h) {
                $("div#rp1").animate({height: h + "px", opacity: "1.0"});
                $("div#xp1").animate({height: h + "px", opacity: "1.0"});
                $("div#desc1").animate({height: h + "px", opacity: "1.0"});
                $("img#vidImg").animate({height: "175px"});

                $("img#link2").animate({opacity: "0.4"});
                $("img#link3").animate({opacity: "0.4"});
                $("img#link4").animate({opacity: "0.4"});
                $("img#link5").animate({opacity: "0.4"});
                $("img#link6").animate({opacity: "0.4"});


            } else {
                $("div#rp1").animate({height: "75px", opacity: "1.0"});
                $("div#xp1").animate({opacity: "0.0"});
                $("div#desc1").animate({height: "0px", display: "none"});
                $("img#vidImg").animate({height: "0px", display: "none"});
                $("div#xp1").css("display", "none");

                $("img#link2").animate({opacity: "1.0"});
                $("img#link3").animate({opacity: "1.0"});
                $("img#link4").animate({opacity: "1.0"});
                $("img#link5").animate({opacity: "1.0"});
                $("img#link6").animate({opacity: "1.0"});
            }
        }
    );
    $("img#link2").click(
        function() {
            var h = 300;
            
            if($("div#rp2").height() < h) {
                $("div#rp2").animate({height: h + "px", opacity: "1.0"});
                $("div#xp2").animate({height: h + "px", opacity: "1.0"});
                $("div#desc2").animate({height: h + "px", opacity: "1.0"});
                $("img#blImg").animate({height: "175px"});

                $("img#link1").animate({opacity: "0.4"});
                $("img#link3").animate({opacity: "0.4"});
                $("img#link4").animate({opacity: "0.4"});
                $("img#link5").animate({opacity: "0.4"});
                $("img#link6").animate({opacity: "0.4"});

            } else {
                $("div#rp2").animate({height: "75px", opacity: "1.0"});
                $("div#xp2").animate({opacity: "0.0"});
                $("div#desc2").animate({height: "0px", display: "none"});
                $("img#blImg").animate({height: "0px", display: "none"});
                $("div#xp2").css("display", "none");

                $("img#link1").animate({opacity: "1.0"});
                $("img#link3").animate({opacity: "1.0"});
                $("img#link4").animate({opacity: "1.0"});
                $("img#link5").animate({opacity: "1.0"});
                $("img#link6").animate({opacity: "1.0"});
            }
        }
    );

    $("img#link3").click(
        function() {
            var h = 400;

            if($("div#rp3").height() < h) {
                $("div#rp3").animate({height: h + "px", opacity: "1.0"});
                $("div#xp3").animate({height: h + "px", opacity: "1.0"});
                $("div#desc3").animate({height: h + "px", opacity: "1.0"});
                $("img#nvImg").animate({height: "175px"});

                $("img#link1").animate({opacity: "0.4"});
                $("img#link2").animate({opacity: "0.4"});
                $("img#link4").animate({opacity: "0.4"});
                $("img#link5").animate({opacity: "0.4"});
                $("img#link6").animate({opacity: "0.4"});

            } else {
                $("div#rp3").animate({height: "75px", opacity: "1.0"});
                $("div#xp3").animate({opacity: "0.0"});
                $("div#desc3").animate({height: "0px", display: "none"});
                $("img#nvImg").animate({height: "0px", display: "none"});
                $("div#xp3").css("display", "none");

                $("img#link1").animate({opacity: "1.0"});
                $("img#link2").animate({opacity: "1.0"});
                $("img#link4").animate({opacity: "1.0"});
                $("img#link5").animate({opacity: "1.0"});
                $("img#link6").animate({opacity: "1.0"});
            }
        }
    );

    $("img#link4").click(
        function() {
            var h = 300;

            if($("div#rp4").height() < h) {
                $("div#rp4").animate({height: h + "px", opacity: "1.0"});
                $("div#xp4").animate({height: h + "px", opacity: "1.0"});
                $("div#desc4").animate({height: h + "px", opacity: "1.0"});
                $("img#slImg").animate({height: "175px"});

                $("img#link1").animate({opacity: "0.4"});
                $("img#link2").animate({opacity: "0.4"});
                $("img#link3").animate({opacity: "0.4"});
                $("img#link5").animate({opacity: "0.4"});
                $("img#link6").animate({opacity: "0.4"});

            } else {
                $("div#rp4").animate({height: "75px", opacity: "1.0"});
                $("div#xp4").animate({opacity: "0.0"});
                $("div#desc4").animate({height: "0px", display: "none"});
                $("img#slImg").animate({height: "0px", display: "none"});
                $("div#xp4").css("display", "none");

                $("img#link1").animate({opacity: "1.0"});
                $("img#link2").animate({opacity: "1.0"});
                $("img#link3").animate({opacity: "1.0"});
                $("img#link5").animate({opacity: "1.0"});
                $("img#link6").animate({opacity: "1.0"});
            }
        }
    );

    $("img#link5").click(
        function() {
            var h = 600;

            if($("div#rp5").height() < h) {
                $("div#rp5").animate({height: h + "px", opacity: "1.0"});
                $("div#xp5").animate({height: h + "px", opacity: "1.0"});
                $("div#desc5").animate({height: h + "px", opacity: "1.0"});
                $("img#ejImg1").animate({height: "175px"});
                $("img#ejImg2").animate({height: "175px"});

                $("img#link1").animate({opacity: "0.4"});
                $("img#link2").animate({opacity: "0.4"});
                $("img#link3").animate({opacity: "0.4"});
                $("img#link4").animate({opacity: "0.4"});
                $("img#link6").animate({opacity: "0.4"});

            } else {
                $("div#rp5").animate({height: "75px", opacity: "1.0"});
                $("div#xp5").animate({opacity: "0.0"});
                $("div#desc5").animate({height: "0px", display: "none"});
                $("img#ejImg1").animate({height: "0px", display: "none"});
                $("img#ejImg2").animate({height: "0px", display: "none"});
                $("div#xp5").css("display", "none");

                $("img#link1").animate({opacity: "1.0"});
                $("img#link2").animate({opacity: "1.0"});
                $("img#link3").animate({opacity: "1.0"});
                $("img#link4").animate({opacity: "1.0"});
                $("img#link6").animate({opacity: "1.0"});
            }
        }
    );
    $("img#link6").click(
        function() {
            var h = 100;

            if($("div#rp6").height() < h) {
                $("div#rp6").animate({height: h + "%", opacity: "1.0"});
                $("div#xp6").animate({height: h + "%", opacity: "1.0"});
                //$("div#desc6").animate({height: h + "%", opacity: "1.0"});

                $("img#link1").animate({opacity: "0.4"});
                $("img#link2").animate({opacity: "0.4"});
                $("img#link3").animate({opacity: "0.4"});
                $("img#link4").animate({opacity: "0.4"});
                $("img#link5").animate({opacity: "0.4"});

            } else {
                $("div#rp6").animate({height: "75px", opacity: "1.0"});
                $("div#xp6").animate({opacity: "0.0"});
                //$("div#desc6").animate({height: "0px", display: "none"});
                $("div#xp6").css("display", "none");

                $("img#link1").animate({opacity: "1.0"});
                $("img#link2").animate({opacity: "1.0"});
                $("img#link3").animate({opacity: "1.0"});
                $("img#link4").animate({opacity: "1.0"});
                $("img#link5").animate({opacity: "1.0"});
            }
        }
    );
});


