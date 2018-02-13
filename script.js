$(document).ready(function () {
    var loading = $('.loading');
    var results = $('.results');

    var ipOut = $('.ip');
    var cityOut = $('.city');
    var regionOut = $('.region');
    var countryOut = $('.country');
    var postalOut = $('.postal');
    var latitudeOut = $('.latitude');
    var longitudeOut = $('.longitude');
    var orgOut = $('.org');

    var handler = function (data) {
        ipOut.html(data.ip);
        cityOut.html(data.city);
        regionOut.html(data.region);
        countryOut.html(data.country_name);
        postalOut.html(data.postal);
        latitudeOut.html(data.latitude);
        longitudeOut.html(data.longitude);
        orgOut.html(data.org);

        loading.hide();
        results.show();
    };

    setTimeout(function() {
        $.getJSON('https://ipapi.co/json/', function (data) {
            handler(data);
        });
    }.bind(this), 500);
    
    // var dummyData = {
    //     "ip": "66.219.235.240", //
    //     "city": "Provo", //
    //     "region": "Utah", //
    //     "region_code": "UT",
    //     "country": "US",
    //     "country_name": "United States",
    //     "continent_code": "NA",
    //     "postal": "84604",
    //     "latitude": 40.3393,
    //     "longitude": -111.5709,
    //     "timezone": "America/Denver",
    //     "utc_offset": "-0700",
    //     "country_calling_code": "+1",
    //     "currency": "USD",
    //     "languages": "en-US,es-US,haw,fr",
    //     "asn": "AS29933",
    //     "org": "Off Campus Telecommunications"
    // };

    // handler(dummyData);
});
