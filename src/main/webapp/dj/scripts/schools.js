/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


jQuery.easing.easeOutQuart = function (x, t, b, c, d) {
	return -c * ((t=t/d-1)*t*t*t - 1) + b;
};

jQuery(function( $ ){

	$('div#container').serialScroll({
		target:'div#sections',
		items:'li',
		axis:'xy',
		navigation:'#navigation li a',
		duration:700,
		force:true,

		onBefore:function( e, elem, $pane, $items, pos ){
			e.preventDefault();
			if( this.blur )
				this.blur();
		},
		onAfter:function( elem ){
		}
	});

});