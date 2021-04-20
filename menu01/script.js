var mapContainer = document.getElementById('map'). //지도를 표시할 div
  mapOption = {
    center: new window.kakao.maps.LatLng(36.43237, 127.39426), //지도의 중심좌표
    level: 3 //지도의 확대 레벨
  };

var map = new window.kakao.maps.Map(mapContainer, mapOption); //지도 생성

//마커가 표시될 위치
var markerPosition = new window.kakao.maps.LatLng(36.43237, 127.39426);

//마커 생성
var marker = new window.kakao.maps.Marker ({
  position: markerPosition
});

//마커가 지도 위에 표시되도록 설정
marker.setMap(map);

//아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);
