var pos = document.getElementById('wasd-controls').getAttribute('position');

window.addEventListener("keydown", function(event){
  if (event.defaultPrevented){
    return; // do nothing if the event was already processed
  }

  switch (event.key) {
    case " ":
      // move up with spacebar " "
      y: pos.y ++;
      element.setAttribute('position', pos.x+" "+pos.y+" "+pos.z);
      console.log("up");
      break;
    case "Control":
      // move down with control "Control"
      y: pos.y --;
      element.setAttribute('position', pos.x+" "+pos.y+" "+pos.z);
      console.log("down");
      break;
    default:
      return; // quit when this doesn't handle the key event
  }

  // cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
