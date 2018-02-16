var baseUrl = 'https://ipapi.co/json/';

$(document).ready(function () {
    var input = $('input');
    var button = $('button');

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
        $.getJSON(baseUrl, function (data) {
            handler(data);
        });
    }.bind(this), 500);

    button.on('click', function () {
        results.hide()
        loading.show();

        var ip = input.val();

        var url = baseUrl;
        if (ip != '')
            url = 'https://ipapi.co/' + ip + '/json/';

        $.getJSON(url, function (data) {
            handler(data);
        });
    });
});
