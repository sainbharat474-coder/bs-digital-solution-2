// Smooth Scroll
document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click',function(e){
        e.preventDefault();
        const id=this.getAttribute('href');
        if(id!=="#"){
            document.querySelector(id).scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});

// Header Shadow
window.addEventListener('scroll',()=>{
    const header=document.querySelector('header');
    if(window.scrollY>50){
        header.style.background="#000";
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.5)";
    }else{
        header.style.background="#111";
        header.style.boxShadow="none";
    }
});

// Reveal Animation
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

document.querySelectorAll("section,.card").forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition="1s";
    observer.observe(el);
});
