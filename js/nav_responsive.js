let home = document.getElementById("home")
let socials = document.getElementById("socials")
let community = document.getElementById("community")
let download = document.getElementById("download")
let store = document.getElementById("store")
let menu = document.getElementById("menu")
let btn = document.getElementById("donate")
let visible =false;

menu.addEventListener('click', ()=>{
    if(!visible){
        home.classList.remove("hidden")
        community.classList.remove("hidden")
        download.classList.remove("hidden")
        store.classList.remove("hidden")
        donate.classList.remove("hidden")
        visible=true;
    }else{
        home.classList.add("hidden")
        community.classList.add("hidden")
        download.classList.add("hidden")
        store.classList.add("hidden")
        donate.classList.add("hidden")
        visible=false;
    }
})
