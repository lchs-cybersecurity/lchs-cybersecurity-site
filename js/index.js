$(document).ready(function() {
    $(".typing-effect").each(function() {
        var element = $(this)
        var length = element.text().length + 1
        var delay = parseInt(element.css("animation-delay").replace('s', ''))
        element.css("visibility", "hidden")
        element.css("animation",
            `typing 2s steps(${length}, end) ${delay}s,
            blink-caret 1s step-end 2 ${delay + 2}s`)
        setTimeout(function() {
            element.css("border-right-width", "0")
        }, 4000 + delay * 1000)
        setTimeout(function() {
            element.css("visibility", "visible")
        }, 10 + delay * 1000)
    })
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