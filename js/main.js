// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

const SubmitBtn = document.querySelector('#btn-submit');


let showMenu = false;
let submit = false;

if(menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  }
  

  function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      menuBranding.classList.add('show');
      navItems.forEach(item => item.classList.add('show'));
  
      // Set Menu State
      showMenu = true;
    } else {
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      menuBranding.classList.remove('show');
      navItems.forEach(item => item.classList.remove('show'));
  
      // Set Menu State
      showMenu = false;
    }
  }


  if(SubmitBtn) {
    SubmitBtn.addEventListener('click',formsubmission);
  }
  
  function formsubmission (){
    if (!submit){
      alert("Your details were succesfully sent Thanks");
    }
  }
  

  // Get modal element

var modal = document.getElementById('simpleModal');

//Get open Modal Button
var modalBtn = document.getElementById('modalBtn');

//Close Button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
//Listen for outside click
window.addEventListener('click', clickOutside);

//Function to open Modal 
function openModal() {
    // console.log(142);
    modal.style.display = 'block';
}

//Function to close Modal 
function closeModal() {
    // console.log(142);
    modal.style.display = 'none';
}

//Function to close Modal if outside click 
function clickOutside(e) {
    if(e.target == modal){
        modal.style.display = 'none';
    }
   
}


  