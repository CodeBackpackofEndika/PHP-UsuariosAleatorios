$(function () {
    usuarios=$.ajax({
        url: 'https://randomuser.me/api/?results=50',
        dataType:'json'
    });

    $("button").on("click", function () {
        $(this).css({
            "display": "none"
        })
    })
});