(function createBtn(){
    const backBtn = document.getElementById("back")
    const forwardBtn = document.getElementById("forward")
    const img1 = document.getElementById("furn1")
    const img2 = document.getElementById("furn2")
    const img3 = document.getElementById("furn3")
    const card1 = document.getElementById("card1")
    const card2 = document.getElementById("card2")
    const card3 = document.getElementById("card3")
    let counter = 0


    backBtn.addEventListener("click", () =>{
        counter-=1
        console.log(counter)
        if(counter == -1){
            img1.style.display = "none"
            card1.style.display = "none"
            img2.style.display = "none"
            card2.style.display = "none"
            


            img3.style.display = "flex"
            card3.style.display = "flex"
        }
            
        else if(counter == 1){
            img1.style.display = "none"
            card1.style.display = "none"
            img3.style.display = "none"
            card3.style.display = "none"
            


            img2.style.display = "flex"
            card2.style.display = "flex"   
            
        }else if(counter == -2 || counter == 2){
            img3.style.display = "none"
            card3.style.display = "none"
            img1.style.display = "none"
            card1.style.display = "none"


            img2.style.display = "flex"
            card2.style.display = "flex"

        }else if(counter == -3 || counter == 3){
            img3.style.display = "none"
            card3.style.display = "none"
            img2.style.display = "none"
            card2.style.display = "none"

            img1.style.display = "flex"
            card1.style.display = "flex"

            counter = 0
        }else if(counter == 0){
            img1.style.display = "flex"
            card1.style.display = "flex"

            img3.style.display = "none"
            card3.style.display = "none"

            img2.style.display = "none"
            card2.style.display = "none"
        }
    })

    
    forwardBtn.addEventListener("click", () =>{
        counter+=1
        console.log(counter)

        if(counter == 1){
            img1.style.display = "none"
            card1.style.display = "none"
            img3.style.display = "none"
            card3.style.display = "none"

            img2.style.display = "flex"
            card2.style.display = "flex"
        }
        else if (counter == -1){
            img1.style.display = "none"
            card1.style.display = "none"
            img2.style.display = "none"
            card2.style.display = "none"
            


            img3.style.display = "flex"
            card3.style.display = "flex"
            
        }else if(counter == 2 || counter == -2){
            img2.style.display = "none"
            card2.style.display = "none"
            img1.style.display = "none"
            card1.style.display = "none"


            img3.style.display = "flex"
            card3.style.display = "flex"

        }else if(counter == 3 || counter == -3){
            img3.style.display = "none"
            card3.style.display = "none"
            img2.style.display = "none"
            card2.style.display = "none"

            img1.style.display = "flex"
            card1.style.display = "flex"

            counter = 0

        }else if(counter == 0){
            img1.style.display = "flex"
            card1.style.display = "flex"

            img3.style.display = "none"
            card3.style.display = "none"

            img2.style.display = "none"
            card2.style.display = "none"
        }
    })

}())

