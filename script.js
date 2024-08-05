const pannelElement =document.querySelectorAll(`.pannel`);


pannelElement.forEach(
    pannel =>{
        pannel.addEventListener(`click`, ()=>{
            removeActiveclasses();
            pannel.classList.add(`active`)
        })
    }
)
function removeActiveclasses(){
    pannelElement.forEach(pannel => {
        pannel.classList.remove(`active`)
        
    });
}