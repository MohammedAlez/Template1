let MenuIcon = document.querySelector("header .container nav .icon");
MenuIcon.onclick = (e)=>{
    console.log(e);
    e.target.parentElement.classList.add("open");
}


let closeBtn = document.querySelector("header ul .close");
closeBtn.onclick = (e)=>{
    e.target.parentElement.parentElement.parentElement.classList.remove("open");
}
let searchBtn = document.querySelector("header .container nav .form i");
searchBtn.onclick = ()=>{
    searchBtn.parentElement.parentElement.classList.toggle("search");
}

let statsSection = document.querySelector(".stats");
let stats = Array.from(document.querySelectorAll(".stats h2"));
console.log(stats)
console.log(statsSection)
let skillsSection = document.querySelector(".skills")
let skills = document.querySelectorAll(".skill")
console.log(skills)
console.log(skillsSection)
window.onscroll = ()=>{
    if(statsSection.offsetTop - 300 < window.scrollY){
        stats.forEach((e)=>{
            let target = e.dataset.progresse
            let x = setInterval(()=>{
                if(e.innerHTML != target){
                    e.innerHTML ++;
                }
            },2000 / target)
        })
    }
    if(skillsSection.offsetTop -200 < window.scrollY){
        skills.forEach((e)=>{
            e.style.width = e.dataset.progress
        })
    }
}


let shuffle = Array.from(document.querySelectorAll(".shuffle li"));
let Pelements = Array.from(document.querySelectorAll(".img-content .box"))
console.log(Pelements)
shuffle.forEach((el)=>{
    el.addEventListener("click",()=>{
        shuffle.forEach((ell)=>{
            ell.classList.remove("on");
        })
        el.classList.add("on")
        Pelements.forEach((e)=>{
            if((e.classList.contains(el.dataset.type))){
                e.style.display = "block";
            }else{
                e.style.display = "none";
            }
        })
    })
})

let TopBtn = document.querySelector(".top");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 500){
        TopBtn.style.right = "30px";
    }else{
        TopBtn.style.right = "-100%";
    }
    TopBtn.addEventListener("click",()=>{
        window.scroll({
            top:0,
            behavior:"smooth"
        })
    })
})