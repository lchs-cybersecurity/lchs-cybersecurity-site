$(document).ready(function() {
    $("#content").css("margin-top", "516px")
})

$(window).scroll(function() {
    var height = getScrolledValue(scrollY*2, 60, 360)
    $("#title-block").css("height", `${height}px`)
    var padding = getScrolledValue(scrollY, 1, 90)
    $("#title-block").css("padding-top", `${padding}px`)
    var fontSize = getScrolledValue(scrollY*0.12, 40, 60)
    $("#title-text").css("font-size", `${fontSize}px`)
    var opacity = getScrolledValue(scrollY*0.01, 0, 1)
    $("#subtitle-text").css("opacity", `${opacity}`)
    $("#subtitle-text").css("visibility", `${opacity > 0 ? "visible" : "hidden"}`)

    var contentMargin = $("header").height()
    $("#content").css("margin-top", contentMargin)

    $(".anchor").each(function() {
        var actual = $(`#${$(this).attr("id")}-anchor`)
        var offset = actual.offset().top;
        $(this).css("top", offset - contentMargin - 60)
    })
})

function getScrolledValue(scroll, min, max) {
    return Math.max(max - scroll, min)
}