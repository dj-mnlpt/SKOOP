let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
    
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let arrow = this.querySelector(".arrow");
            let panel = this.nextElementSibling;
        
            if (panel.style.display === "none") {
                panel.style.display = "block";
                arrow.classList.remove("up");      
            } else {
                panel.style.display = "none";
                arrow.classList.add("up");
            }
        });
    }

