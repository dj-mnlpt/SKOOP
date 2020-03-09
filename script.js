
let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
    
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
           
            let panel1 = this.nextElementSibling;
            if (panel1.style.display === "none") {
                panel1.style.display = "block";     
            } 
            else {
                panel1.style.display = "none";
            }
        });
    }

