
var data;
$(function () {

  $.getJSON("http://ip-api.com/json/", function (info) {
    data = info;
    fillData(data);
    initMap(data);
  });

  $("#ipAddressInput").on("change", function () {
    var path = $("#ipAddressInput").val();

    $.getJSON("http://ip-api.com/json/" + path, function (info) {
      data = info;
      fillData(data);
      initMap(data);
    });
  });
});
function fillData(data) {
  $("#ipAddress").text(data.query);
  $("#coordinates").text(data.lat + ", " + data.lon);
  $("#city").text(data.city);
  $("#country").text(data.country);
  $("#timezone").text(data.timezone);
  $("#isp").text(data.isp);
}
function initMap(data) {
  const uluru = { lat: data.lat, lng: data.lon };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
