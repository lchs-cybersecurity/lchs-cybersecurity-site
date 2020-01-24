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