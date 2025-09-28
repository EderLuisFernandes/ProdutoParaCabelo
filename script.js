const fagitems = document.querySelectorAll(".faq-item");

fagitems.forEach(frags => {
    let buttonfag  = frags.querySelector(".faq-question")

     buttonfag.addEventListener("click", ()=>{
        
        frags.classList.toggle("active")
     })
});