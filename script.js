const button = $("#btn");
const url_endpoint = "https://cataas.com/cat?json=true"
const url = "https://cataas.com";

window.onload = getRandomCat;

function getRandomCat() {
    $.ajax({
        method: "get",
        url: url_endpoint,
        dataType: "json"
    })
    .done((data) => {
        $("#catPhoto").attr("src", url + data.url);
    })
    .fail((err) => {
        console.log(err);
    });
}

$(button).on("click", getRandomCat);