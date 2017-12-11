$(function () {

    $("button").on("click", function () {
        $(this).css({
            "display": "none"
        });
        var usuarios=$.ajax({
            method:'GET',
            url: 'https://randomuser.me/api/',
            data:'results=50'

        });
        usuarios.done(function (data) {
            console.log(data);
        })


    });
});
