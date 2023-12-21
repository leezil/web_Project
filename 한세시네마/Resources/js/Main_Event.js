
function handleButtonClick(buttonName, buttonElement) {


  const activeButton = document.querySelector('.nav-link.active');
  if (activeButton) {
    activeButton.classList.remove('active');
  }

 buttonElement.classList.add('active');

 if (buttonName == 2) {
 alert('지원하지 않는 기능입니다.');
 return false;
 }

if(getLoginStatus() == false){

  if (buttonName == 1) {
  openPage('./signin.html');
  }else if (buttonName != 2) {
 alert('로그인이 필요한 작업입니다.');
 openPage('./signin.html');
} 
}else {

    if (buttonName == 1) 
     logOutStatus();
   else if (buttonName == 3)
     openPage('./reservation.html');
   else if (buttonName == 4)
     openPage('./movie1.html');
   else if (buttonName == 5)
     openPage('./movie2.html');
   else if (buttonName == 6)
     openPage('./movie3.html');

 }}




function handleLogin() {

    var email = document.getElementById('floatingInput').value;
    var password = document.getElementById('floatingPassword').value;
  
    if (email && password) {
      if (email === 'admin@naver.com' && password === 'admin') {
        alert('관리자님 환영합니다!');
        saveLoginStatus(true);
        location.href="./test2.html";
       
      } else {
        alert('아이디 또는 비밀번호가 잘못되었습니다.');
        return false;
      }
    } else {
      
      alert('이메일과 비밀번호를 입력하세요.');
      return false;  

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


function writeSession(){
  if (getLoginStatus() == false) {
      return 로그인;
  } else {
    return 로그아웃;
  }
}


function alertMSG() {


  if (!$("input:radio[Name='time']").is(":checked")){ 
    alert("시간을 선택해주세요");

    return false;

} else if (!$("input:checked[Name='seat']").is(":checked")){ 
    alert("좌석을 선택해주세요");

    return false;


}else{

  alert("예매가 완료되었습니다.");
  return true;
  
}

}


function moojyogunLogOut() {

  saveLoginStatus(false);
  alert("로그아웃 되었습니다.");
  location.href="./test.html";

}

function ticket(length) {

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;

}


