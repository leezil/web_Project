document.addEventListener("DOMContentLoaded", function () {
  var mapContainer = document.getElementById('map');
  var mapOption = {
    center: new kakao.maps.LatLng(37.3436677130607, 126.9537408346191),
    level: 3
  };

  var map = new kakao.maps.Map(mapContainer, mapOption);

  var mapTypeControl = new kakao.maps.MapTypeControl();
  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

  var markerPosition = new kakao.maps.LatLng(37.3436677130607, 126.9537408346191);// 한세대 이공관 좌표
  var marker = new kakao.maps.Marker({
    position: markerPosition,
    map: map
  });

  // function getInfo() { // 
  //   var center = map.getCenter();
  //   var level = map.getLevel();
  //   var mapTypeId = map.getMapTypeId();
  //   var bounds = map.getBounds();
  //   var swLatLng = bounds.getSouthWest();
  //   var neLatLng = bounds.getNorthEast();
  //   var boundsStr = bounds.toString();

  //   var message = '지도 중심좌표는 위도 ' + center.getLat() + ', 경도 ' + center.getLng() + ' 이고\n';
  //   message += '지도 레벨은 ' + level + ' 입니다\n\n';
  //   message += '지도 타입은 ' + mapTypeId + ' 이고\n';
  //   message += '지도의 남서쪽 좌표는 ' + swLatLng.getLat() + ', ' + swLatLng.getLng() + ' 이고\n';
  //   message += '북동쪽 좌표는 ' + neLatLng.getLat() + ', ' + neLatLng.getLng() + ' 입니다';

  //   console.log(message);
  // }

  // function handleDragend() {
  //   getInfo();
  // }

 // kakao.maps.event.addListener(map, 'dragend', handleDragend);
});