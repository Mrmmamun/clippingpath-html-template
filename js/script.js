var searchIcon=document.querySelector(".search-nav-item");
var searchCloseIcon=document.querySelector('.search-nav-close-icon');
var searchBox=document.querySelector('.nav-search-box');


 searchIcon.addEventListener('click',function(){
     searchBox.style.display="block";
     searchIcon.style.display="none";
     searchCloseIcon.style.display="block";
     
 });

 searchCloseIcon.addEventListener('click',function(){
     searchBox.style.display="none";
     searchIcon.style.display="block";
     searchCloseIcon.style.display="none";
      
 });


/**Service area js***/











