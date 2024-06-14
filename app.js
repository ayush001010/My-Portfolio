let menubtn1 = document.querySelector("#menu-bar");
let menubtn2 = document.querySelector("#menu-cancel");
let menubar = document.querySelector(".menu-bar");
let weblist= document.querySelector(".webD");
let gamelist= document.querySelector(".gameD");
let active= document.querySelector(".active-line-bar");


menubtn1.addEventListener("click", () => {
    
    menubar.style.display = "block";
    menubtn1.style.display = "none";
    menubtn2.style.display = "block";
    
});
menubtn2.addEventListener("click", () => {
    
    menubar.style.display = "none";
    menubtn1.style.display = "block";
    menubtn2.style.display = "none";

});

 function anchor(){
    
    menubar.style.display = "none";
    menubtn1.style.display = "block";
    menubtn2.style.display = "none";

};

function optionWb(){
    
    weblist.style.display = "block";
    gamelist.style.display = "none";
    active.style.top = "0";
    

};
function optionGb(){
    
    weblist.style.display = "none";
    gamelist.style.display = "block";
    active.style.top = "60%";
};

/*------------------------------------Message Me----------------------------------*/


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzx-UaeTdtPYS5bZIokw8ZDfv3CZnpWhY_BJBKPN0IrmWVLpcQRQNLT6YQBes3z81zPew/exec'
  const form = document.forms['submit-to-google-sheet']

  function submitForm(){
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
            alert('Message Send To Ayush Chaurasiya Successfully!')
            form.reset();
        })
      .catch(error => console.error('Error!', error.message))
  }

