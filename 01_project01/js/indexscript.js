//main03 slider





//일기예보
$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=2d2e310f5a4020c7e639b0e744db9988&units=metric',function(data){
                let minTemp=data.main.temp_min;
                let maxTemp=data.main.temp_max;
                let temp=data.main.temp;
                let icon=data.weather[0].icon;
                let dt=data.dt0
                let d=new Date();
                dd=`${moment(d).format(`dddd, Do MM YYYY`)}`;
                
                $('.ctemp').append(temp);
                $('.cmintemp').append(minTemp);
                $('.cmaxtemp').append(maxTemp);
                $('.cicon').append('<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png" />')
                $('.cdate').append(dd)
            })

//카카오맵
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.3171, 126.9524), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
// 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입을 바꾸는 함수입니다
function setMapType(maptype) { 
    var roadmapControl = document.getElementById('btnRoadmap');
    var skyviewControl = document.getElementById('btnSkyview'); 
    if (maptype === 'roadmap') {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);    
        roadmapControl.className = 'selected_btn';
        skyviewControl.className = 'btn';
    } else {
        map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);    
        skyviewControl.className = 'selected_btn';
        roadmapControl.className = 'btn';
    }
}

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}


//뉴스
$(function(){
    $.ajax({
        url:"news.php",
        dataType:'xml',
        success:function(data){
           let $items=$(data).find("item");
           if($items.length > 0 ){
                $items=$items.slice(0, 10);
                let $ulTag=$("<ul />");
                $.each($items, function(i, o){
                    let $title=$(o).find("title").text();
                    let $link=$(o).find("link").text();

                    let $aTag=$("<a />").attr({"href":$link, "target": "_blank"}).text($title);
                    let $liTag=$("<li />").append($aTag);
                    $ulTag.append($liTag);
                })
                $('.news').append( $ulTag);
           }
        }
    });
});