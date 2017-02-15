console.log('Loaded!');
 
 var element = document.getElementById("main-text");
 
 element.innerHTML= "New Value";
 
 var element1 = document.getElementById("move_image");
 
 element1.onclick= function(){
     element1.style.marginleft = '100px';
 };