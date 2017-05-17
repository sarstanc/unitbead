window.addEventListener("keydown", function(event){
  var pos = document.getElementById('view').getAttribute('position');
  var cam = document.getElementById('view');

  if (event.defaultPrevented){
    return; // do nothing if the event was already processed
  }

  switch (event.key) {
    // move up with spacebar " "
    case " ":
      console.log(pos);
      pos.y += .05;
      cam.setAttribute('position', pos);
      console.log("up");
      console.log(pos);
      break;
    // move down with control "Control"
    case "Control":
      console.log(pos);
      pos.y -= .05;
      cam.setAttribute('position', pos);
      console.log("down");
      console.log(pos);
      break;
    default:
      return; // quit when this doesn't handle the key event
  }

  // cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
