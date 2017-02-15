console.log('Loaded!');
 
 var element = document.getElementById("main-text");
 
 element.innerHTML= "New Value";
 
 var img = document.getElementById("move_image");
 
 img.onclick= function(){
     img.style.marginright = '200px';
 };