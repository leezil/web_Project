
function handleButtonClick(buttonName, buttonElement) {


  const activeButton = document.querySelector('.nav-link.active');
  if (activeButton) {
    activeButton.classList.remove('active');
  }

 buttonElement.classList.add('active');



if(getLoginStatus() == false){

  if (buttonName == 1)
  openPage('./signin.HTML');
 else if (buttonName == 2)
  //openPage('./register.HTML');
   alert('지원하지 않는 기능입니다.')

 alert('로그인이 필요한 작업입니다.')
 openPage('./signin.HTML');

} else {

    if (buttonName == 1)
     logOutStatus();
    else if (buttonName == 2)
     alert('지원하지 않는 기능입니다.')
   else if (buttonName == 3)
     openPage('./reservation.HTML');
   else if (buttonName == 4)
     openPage('./movie1.HTML');
   else if (buttonName == 5)
     openPage('./movie2.HTML');
   else if (buttonName == 6)
     openPage('./movie3.HTML');

 }}




function handleLogin() {

    var email = document.getElementById('floatingInput').value;
    var password = document.getElementById('floatingPassword').value;
  
    if (email && password) {
      if (email === 'admin@naver.com' && password === 'admin') {
        alert('로그인 성공!');
        saveLoginStatus(true);
        openPage('./test1.HTML');
      } else {
        alert('아이디 또는 비밀번호가 잘못되었습니다.');
      }
    } else {
        alert('이메일과 비밀번호를 입력하세요.');
    }
  }

  function saveLoginStatus(isLoggedIn) {
    localStorage.setItem('isLoggedIn', isLoggedIn);
}


  function getLoginStatus() {
    var isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        return true;
    } else {
        return false;
    }
}
function logOutStatus(){
  return isLoggedIn = false;
}


 function openPage(url) {
   window.location.href = url;
}





function alertMSG() {

 alert("예매가 완료되었습니다.");

}


