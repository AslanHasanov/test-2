


let inp = document.querySelector('#inp')
let index=0

inp.addEventListener('change', function() {
    let div=document.createElement("div")
    div.setAttribute("class","box mt-3 bg-warning py-1 align-items-center")
    index++;
    div.setAttribute("id",index)
    
    div.setAttribute('draggable','true')

    let h2=document.createElement("h2")
    h2.innerHTML=inp.value
    div.appendChild(h2)
    document.querySelector(".first").appendChild(div)

    div.ondragstart=function(e){
        e.dataTransfer.setData('first',this.id)
    }

})

let inps=document.querySelectorAll('.box')

let dropArea=document.querySelectorAll('.to-do')

dropArea.forEach(drop=>{
    drop.ondragover=function(e){
        e.preventDefault()
    }

    drop.ondrop=function(e){
        let id= e.dataTransfer.getData("first")
        let newi= document.getElementById(id)
        drop.append(newi)
    }
})






