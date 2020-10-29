const closePath = "./imagem/janelaAberta.jpg"
const openPath = "./imagem/janelaFechada.jpg"
const brokenPath = "./imagem/janelaQuebrada.jpg"

document.addEventListener("DOMContentLoaded", function() {
    const $img = document.querySelector("img")
    $img.src = closePath
    $img.addEventListener("mouseover", () => {
        $img.src = openPath
    })
    $img.addEventListener("mouseout", () => {
        $img.src = closePath
    })
    $img.addEventListener("click", () => {
        $img.src = brokenPath
    })
})