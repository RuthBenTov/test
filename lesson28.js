
const imgLink = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTWugjM_bSMMSkHMwhzPVDWqupbTvwpJUFA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTWugjM_bSMMSkHMwhzPVDWqupbTvwpJUFA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTWugjM_bSMMSkHMwhzPVDWqupbTvwpJUFA&usqp=CAU"   
    ]
    
    let rut = document.createElement("h1")
    console.log(rut);
    rut.textContent ="hiosh"
    document.body.appendChild(rut)
    
    
    imgLink.forEach( img => {
        let newDiv = document.createElement("div")
        let newImg = document.createElement("img")
        newImg.setAttribute("src",img)
        document.body.appendChild("newDiv")
        newDiv.appendChild("newImg")
    })
