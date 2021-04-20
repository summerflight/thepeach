var mapContainer = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스

var mapOption = {
  center: new kakao.maps.LatLng(36.43237, 127.39426), //지도의 중심좌표
  level: 3 //지도의 확대 레벨
}

var map = new kakao.maps.Map(mapContainer, mapOption);

//마커가 표시될 위치
//var markerPosition = new kakao.maps.LatLng(36.43237, 127.39426);

//마커 생성
//var marker = new kakao.maps.Marker ({
//  position: markerPosition
//});

//마커가 지도 위에 표시되도록 설정
//marker.setMap(wayto);

//아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);
