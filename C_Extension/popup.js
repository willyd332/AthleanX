let changeColor = document.getElementById('changeColor');

 chrome.storage.sync.get('color', function(data) {
   changeColor.style.backgroundColor = data.color;
   changeColor.setAttribute('value', data.color);
 });

 changeColor.onclick = function(element) {
     const rand = Math.round(Math.random() * data.length);
     window.open(`https://www.youtube.com/${data[rand]}`, "_blank");
   };
