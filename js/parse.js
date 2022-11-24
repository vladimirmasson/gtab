(function () {
   var app = "https://script.google.com/macros/s/AKfycbwfAQGP4UNQPEg8bkrfejKhXOgDHVZK8ng4OcnaGpwuoY4qC40KHH_ARH51Cer9bjt3/exec",
      output = '',
      xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
            for (var i = 0; i < result.length; i++){
                  var obj = r["result"][i];
                  output += obj.join("<br/>") + "<br/><hr/>";
            }
        } catch(e) {}
     } 
     
   document.getElementById('img1').src = result[1][1];
   document.getElementById('img2').src = result[2][1];
   document.getElementById('img3').src = result[3][1];
   document.getElementById('img4').src = result[4][1];
   document.getElementById('heading1').innerHTML = result[1][2];
   document.getElementById('heading2').innerHTML = result[2][2];
   document.getElementById('heading3').innerHTML = result[3][2];
   document.getElementById('heading4').innerHTML = result[4][2];
   document.getElementById('blog1').innerHTML = result[1][3];
   document.getElementById('blog2').innerHTML = result[2][3];
   document.getElementById('blog3').innerHTML = result[3][3];
   document.getElementById('blog4').innerHTML = result[4][3];

   }
   xhr.send()
})()