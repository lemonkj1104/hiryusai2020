function onKonamiCode(cb) {
    var input = '';
    var key = '38384040373937396665';
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) {
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }
  
  onKonamiCode(
    function () {
      alert("ここから先のコンテンツには成人向けの表現が含まれています。よろしいですか？");
      window.open("img/secret.mp4", "target = _blank");
    }
  )