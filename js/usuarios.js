$(function () {

    $("button").on("click", function () {
        $(this).css({
            "display": "none"
        });
        var usuarios = $.ajax({
            method: 'GET',
            url: 'https://randomuser.me/api/',
            data: 'results=50'

        });
        usuarios.done(function (data) {
            console.log(data);
            $(data.results).each(function (iE, vE) {
                console.log("hastaaquífunciona");
                $("#listusuarios").append("<div class='row text-left'><img src='"
                    + vE.picture.large + "'></img><br>"
                    + vE.name.first + " "
                    + vE.name.last + "<br>"
                    + vE.email + "<br>"
                    + vE.location.street + ", "
                    + vE.location.postcode + ", "
                    + vE.location.city + "("
                    + vE.location.state
                    + ")</div>")
            })
        });
        usuarios.fail(function () {
            console.log("Error!")

        });
    });
});
