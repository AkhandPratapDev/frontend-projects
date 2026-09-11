// home_ads section:- 

let myIndex = 0;
        carousel();

        function carousel() {
            let i;
            let x = document.getElementsByClassName("add_1_img");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) { myIndex = 1 }
            x[myIndex - 1].style.display = "block";
            setTimeout(carousel, 3000);
        }

        let myInde = 0;
        carouse();

        function carouse() {
            let a;
            let y = document.getElementsByClassName("add_2_img");
            for (a = 0; a < y.length; a++) {
                y[a].style.display = "none";
            }
            myInde++;
            if (myInde > y.length) { myInde = 1 }
            y[myInde - 1].style.display = "block";
            setTimeout(carouse, 2500); 
        }

        
        let myInd = 0;
        carous();

        function carous() {
            let b;
            let z = document.getElementsByClassName("add_3_img");
            for (b = 0; b < z.length; b++) {
              z[b].style.display = "none";
            }
            myInd++;
            if (myInd > z.length) { myInd = 1 }
            z[myInd - 1].style.display = "block";
            setTimeout(carous, 3000);
        }

        let myIn = 0;
        carou();

        function carou() {
            let b;
            let z = document.getElementsByClassName("add_4_img");
            for (b = 0; b < z.length; b++) {
              z[b].style.display = "none";
            }
            myIn++;
            if (myIn > z.length) { myIn = 1 }
            z[myIn - 1].style.display = "block";
            setTimeout(carou, 3200); 
        }



        let scrollContainer = document.querySelector(".ads_container");

        let backBtn = document.getElementById('backBtn');
        let nextBtn = document.getElementById('nextBtn');

        nextBtn.addEventListener("click",()=>{
            scrollContainer.style.scrollBehavior="smooth";
            scrollContainer.scrollLeft += 1490;
        })
        backBtn.addEventListener("click",()=>{
            scrollContainer.style.scrollBehavior="smooth";
            scrollContainer.scrollLeft -= 1500;
        })



        // scroll bar

        let scrollProducts = document.querySelector(".product_gallery");
        let back_Btn = document.getElementById('back_btn');
        let next_Btn = document.getElementById('next_btn');

        // EventListners
        scrollProducts.addEventListener("wheel",(evt)=>{
            evt.preventDefault();
            scrollProducts.scrollLeft += evt.deltaY;
            scrollProducts.style.scrollBehavior="auto";
        })

        next_Btn.addEventListener("click",()=>{
            scrollProducts.style.scrollBehavior="smooth";
            scrollProducts.scrollLeft += 1000;
        })
        back_Btn.addEventListener("click",()=>{
            scrollProducts.style.scrollBehavior="smooth";
            scrollProducts.scrollLeft -= 1000;
        })