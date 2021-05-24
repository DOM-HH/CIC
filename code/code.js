  // Based Upon GfG Page Functionality
  var x = document.getElementById('menubar');
  x.style.display = "none";

  function show() {
    if (x.style.display == 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
    document.getElementById('menubarInner').classList.add('menubarAni');
  }
  var y = document.getElementById('sb');
  y.style.display = "none";

  function search() {
    if (y.style.display == 'none') {
      y.style.display = 'block';
    } else {
      y.style.display = 'none';
    }

  }