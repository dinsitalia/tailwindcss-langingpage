const menu_button = document.querySelector("#button-mobile");
menu_button.addEventListener('click',function(event){

    const menu = document.querySelector("#menu");

    menu.classList.toggle("hidden");
    menu.classList.add("transition-all");
   
});

const menu_button2 = document.querySelector("#button-mobile");
menu_button2.addEventListener('click',function(event){

    const menu = document.querySelector("#button-close");

    menu.classList.toggle("hidden");
    menu.classList.add("transition-all");
});

function myFunction() {
    document.getElementById("myCheck").click();
  }

 