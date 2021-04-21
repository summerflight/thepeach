var container = document.getElementById('map');
		var options = {
			center: new window.kakao.maps.LatLng(36.43237, 127.39426),
			level: 3
		};

		var map = new window.kakao.maps.Map(container, options);

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
