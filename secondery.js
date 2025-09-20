let categoryButtons = document.getElementsByClassName("category-btn");

const activateButton = () => {
  for (let button of categoryButtons) {
    button.addEventListener('click', ()=>{
        for(let btn of categoryButtons){
            btn.classList.remove('clicked')
        }
        button.classList.add('clicked')
        // console.log(button)
        
    })
  }
};

let allContainer = document.getElementsByClassName("all-div");
// console.log(allContainer)
const spinner = () => {
  document.getElementById("loader").style.display = "flex";
  
};
const showAll = () =>{
  spinner();
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    for(let container of allContainer){
      // console.log(container)
      container.classList.remove('hidden')
    }
  }, 3000);
}
showAll()
