function swapLinkText(linkId, onText, offText, onImg, offImg) {

	var link = document.getElementById(linkId);
	if(link) {
		if(link.innerHTML == onText)
			link.innerHTML = offText;
		else
			link.innerHTML = onText;
	}
}
