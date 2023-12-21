function handleButtonClick(buttonName, buttonElement) {


   const activeButton = document.querySelector('.nav-link.active');
   if (activeButton) {
     activeButton.classList.remove('active');
   }

  buttonElement.classList.add('active');

    if (buttonName == 1)
      openPage('./signin.html');
    else if (buttonName == 2)
      openPage('./register.html');
    else if (buttonName == 3)
      openPage('./reservation.html');
    else if (buttonName == 4)
      openPage('./movie1.html');
    else if (buttonName == 5)
      openPage('./movie2.html');
    else if (buttonName == 6)
      openPage('./movie3.html');


  }

  function openPage(url) {
    window.location.href = url;
}

function alertMSG() {

  alert("예매가 완료되었습니다.");

}


