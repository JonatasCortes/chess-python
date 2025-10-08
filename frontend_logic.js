function display_pieces(){

    document.querySelectorAll(".cell").forEach(piece => {

        if(piece.innerText.length == 0){
            return
        }

        piece.innerHTML = `${piece.innerText} <img class='piece' 
        src="pieces/${piece.innerText}.png" alt="" draggable=true>`
        piece.style.cursor = "pointer"

    })

}

function display_piece_animation(){
    let pieces = document.querySelectorAll(".piece")

    pieces.forEach(piece => {

        piece.addEventListener("mouseenter", () => {

            piece.classList.add("animate")

            piece.addEventListener("animationend", () => {

                piece.classList.remove("animate")
                
            }, {once: true})
        })

    })
}

display_pieces()
display_piece_animation()
