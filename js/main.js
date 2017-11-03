$(document).ready(function() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            var apiCall = "https:\/\/fcc-weather-api.glitch.me/api/current?" + "lat=" + parseInt(position.coords.latitude) + "&lon=" + parseInt(position.coords.longitude);

            $.getJSON(apiCall, function(data) {
                function findUnit() {
                    if (data.sys.country != "US") {
                        return "C"
                    } else {
                        return "F"
                    }
                }

                var tempUnit = findUnit();

                var html = "";

                html += data.name + "<br>";
                var temp = data.main.temp;
                html += temp + "<button id='converter'>" + tempUnit + "</button>" + "<br>";
                html += data.weather[0].description + "<br>";
                html += "<img src = '" + data.weather[0].icon + "' " + "alt='" + data.weather.description + "'>";
                $("#data").html(html);

                $("#converter").click(function() {
                  if (tempUnit === "C") {
                      tempUnit = "F";
                  } else {
                    tempUnit = "C";
                  }
  });



            });
        });
    }
});



/* {"coord":{"lon":-83,"lat":42},
"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F04d.png?1499366020964"}],
"base":"stations",
"main":{"temp":9.6,"pressure":1025,"humidity":70,"temp_min":9,"temp_max":11},
"visibility":16093,
"wind":{"speed":5.1,"deg":340,"gust":7.2},
"clouds":{"all":75},
"dt":1509726000,
"sys":{"type":1,"id":1401,"message":0.1662,"country":"CA","sunrise":1509710895,"sunset":1509747736},
"id":5971462,"name":"Harrow","cod":200}
*/
