let hotelData= [];//匯入的民宿資料集合
let city = '';//紀錄選取的城市名稱
let town = '';//紀錄選取的行政區名稱
let cityData = [];//城市資料集合
let townData = [];//行政區資料集合

$(function () {
    $.when(
        $.getJSON("js/hotel.json"),
        $.getJSON('js/citydata.json')
    ).done(function (hotelRes, cityRes){
        hotelData = hotelRes.XML_Head.Infos.Info;
        cityData = cityRes.map(e=>e.CityName);
        // let hotelData= hotelRes.XML_HeadInfos.Info;
    }).fail(function(error) {
        alert(error);
    });
    console.log(cityData);
    console.log(hotelData);
})