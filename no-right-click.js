function allOne() {

	if(document.all) { 

		return false; 

  }

}

function elementSecond(e) {

	if(document.layers || (document.getElementById &! document.all)) {

		if(e.which==2 || e.which==3) { 

			return false; 

    }

  }

}

if(document.layers) {

  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = allOne;

}

else {

  document.onmouseup = elementSecond;
  document.oncontextmenu = allOne;

}

document.oncontextmenu = new function("return false");
