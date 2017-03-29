$("#country").change(function () {
    var country = this.value;
    console.log("country: " + country);

    $.ajax({
        url: 'http://worldcup.sfg.io/teams/results',
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                if (country === data[i].country) {
                    $(".code").html(data[i].fifa_code);
                    $(".wins").html(data[i].wins);
                    $(".draws").html(data[i].draws);
                    $(".losses").html(data[i].losses);
                    $(".points").html(data[i].points);
                    break;
                }
            }
            


            console.log(data);
        }
    });


});
