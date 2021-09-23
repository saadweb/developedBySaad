var navbar= document.getElementsByClassName('navbar')[0];
var containerModal= document.getElementsByClassName('modal_container')[0];
var imageModal= document.getElementsByClassName('modal-body')[0];
var btnClose= document.getElementsByClassName('close')[0];
var project= document.getElementsByClassName('project')[0];
window.addEventListener('scroll',function(params) {
    if (this.scrollY > 200) {
        navbar.style.backgroundColor = '#fac9f6'
    } else {
        navbar.style.backgroundColor = ''
    }
})
project.addEventListener('click',function(e){
   var src= e.target.getAttribute('src');
   if (src === null) {
       return
   }
   imageModal.setAttribute('src',src);
   containerModal.classList.add('show');
})
btnClose.addEventListener('click',function(){
    containerModal.classList.remove('show');
})