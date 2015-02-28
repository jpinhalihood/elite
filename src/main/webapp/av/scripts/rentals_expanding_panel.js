/**
 * Requires:
 *  /common/scripts/serialScroll/jquery-1.3.2.min.js
 *  /common/scripts/serialScroll/jquery.serialScroll-1.2.2-min.js
 *  /common/scripts/serialScroll/jquery.scrollTo-1.4.2-min.js
 *
 *  create a div called 'slider'
 *  create two divs called 'hideButton' and 'showButton' of class
 *  'expanding_panel_button'
 */
$(document).ready(
function() {

	$("div.expanding_panel_button").click(
		function() {
			$("div#slider").animate({ height: "400px", opacity: "1.0"});
                        $("div.categoryPanel").animate({ opacity: "1.0"});
			$("div.expanding_panel_button").toggle();
		}
	);

	$("div#hideButton").click(
		function() {
			$("div#slider").animate({ height: "0px", opacity: "0.0"});
                        $("div.categoryPanel").animate({ opacity: "0.0"});
                        $("div#slider").height(0);
		}
	);
});