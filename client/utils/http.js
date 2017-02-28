const http = {
  get: function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.status == 200) {
          callback(xhr.responseText);
        } else {
          console.log(xhr.statusText);
        }
      }
    }
    xhr.send();
  }
}
