/*
 * Using:
 * IP Geolocation API: https://app.abstractapi.com/api/ip-geolocation/documentation
 * IP API: https://ip-api.com/docs/api:json
 * Maps JavaScript API: https://developers.google.com/maps/documentation/javascript
 *
 */
var data;
$(function () {
  // $.getJSON(
  //   "https://ipgeolocation.abstractapi.com/v1/?api_key=1331725a33da4ae4bc6674a87e8c3c9b",
  //   function (data) {
  //     $("#ipAddressInput").val(data.ip_address);
  //     $("#ipAddress").text(data.ip_address);
  //     $("#coordinates").text(data.latitude + ", " + data.longitude);
  //     $("#city").text(data.city);
  //     $("#country").text(data.country);
  //     $("#flag img").attr("src", data.flag.png);
  //     $("#continent").text(data.continent);
  //     $("#timezone").text(data.timezone.name);
  //     $("#isp").text(data.connection.isp_name);
  //     //Google Maps
  //     function initMap() {
  //       const uluru = { lat: data.latitude, lng: data.longitude };
  //       const map = new google.maps.Map(document.getElementById("map"), {
  //         zoom: 6,
  //         center: uluru,
  //       });
  //       const marker = new google.maps.Marker({
  //         position: uluru,
  //         map: map,
  //       });
  //     }
  //     initMap();
  //   }
  // );
  // $("#ipAddressInput").on("change", function () {
  //   $.getJSON(
  //     "https://ipgeolocation.abstractapi.com/v1/?api_key=1331725a33da4ae4bc6674a87e8c3c9b & ip_address =" +
  //       $("#ipAddressInput").val(),
  //     function (data) {
  //       $("#ipAddress").text(data.ip_address);
  //       $("#coordinates").text(data.latitude + ", " + data.longitude);
  //       $("#city").text(data.city);
  //       $("#country").text(data.country);
  //       $("#flag img").attr("src", data.flag.png);
  //       $("#continent").text(data.continent);
  //       $("#timezone").text(data.timezone.name);
  //       $("#isp").text(data.connection.isp_name);
  //       //Google Maps
  //       function initMap() {
  //         const uluru = { lat: data.latitude, lng: data.longitude };
  //         const map = new google.maps.Map(document.getElementById("map"), {
  //           zoom: 5,
  //           center: uluru,
  //         });
  //         const marker = new google.maps.Marker({
  //           position: uluru,
  //           map: map,
  //         });
  //       }
  //       initMap();
  //     }
  //   );
  // });

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
