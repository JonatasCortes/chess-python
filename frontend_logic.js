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

display_pieces()
