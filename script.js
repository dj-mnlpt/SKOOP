let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
    
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let arrow = this.querySelector(".arrow");
            let panel = this.nextElementSibling;
        
            if (panel.style.maxHeight) {
                // panel.style.display = "block";
                arrow.classList.remove("up");
                panel.style.maxHeight = null;
                panel.style.marginBottom = 0 + "px";  
                
            } else {
                // panel.style.display = "none";
                arrow.classList.add("up");
                panel.style.maxHeight = panel.scrollHeight + "px";  
                panel.style.marginBottom = 20 + "px";          
            }
        });
    }
    $(".accordion").trigger('click');


let slider = document.getElementById("priceRangeMin");
let output = document.getElementById("priceInputMin");
    output.value = " " + slider.value + ".00";

    slider.oninput = function () {
    output.value = " " + this.value + ".00";
        }

    output.oninput = function (){
    slider.value = this.value; 
    }

let slider1 = document.getElementById("priceRangeMax");
let output1 = document.getElementById("priceInputMax");
    output1.value = " " + slider1.value + ".00";

    slider1.oninput = function () {
        output1.value = " " + this.value + ".00";
        }

    output1.oninput = function (){
        slider1.value = this.value;
        }

let mobileBtn = document.getElementsByClassName("mobile-button");

    for (let j = 0; j < mobileBtn.length; j++) {

        mobileBtn[j].addEventListener("click", function() {
            this.classList.toggle("active");
           
            let filterPanel = this.nextElementSibling;
            console.log(filterPanel);
            if (filterPanel.style.maxHeight) {      
                
                filterPanel.style.maxHeight = null; 
                
            } else  {
                filterPanel.style.maxHeight = filterPanel.scrollHeight + "px";
            }
        });
    }