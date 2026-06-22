const container = document.querySelector(".container");
const section =document.querySelectorAll("section")


function handleClick(e) {
    e.preventDefault()
    
    const paragraphTag = e.target.parentElement.nextElementSibling
     if (e.target.classList.contains("show-details-icon")) {

        if (!paragraphTag.classList.contains("active")) {
            getPTag()
             paragraphTag.classList.add("active")
            e.target.src = "assets/images/icon-minus.svg"
            
        } else  {
             paragraphTag.classList.remove("active")
            e.target.src = "assets/images/icon-plus.svg"
          
        }
       
        
    }
  

}

function getPTag() {
    section.forEach(element => {
        if (element.children[1].classList.contains("active")) {
            element.children[1].classList.remove("active")
            element.children[0].lastElementChild.src = "assets/images/icon-plus.svg"
           
        }     
    });
}




container.addEventListener("click", handleClick)