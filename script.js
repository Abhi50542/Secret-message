var a=document.querySelector("h1")
a.style.width="460px";
a.style.color="yellow";
a.style.backgroundColor="black";

var b=document.querySelector("button")
b.addEventListener("click",function(){
    b.innerHTML="I Love You"
    b.style.width="400px"
    b.style.height="80px"
    b.style.fontSize="40px"
    b.style.marginLeft="30px"
    b.style.background="pink"
    b.style.color="red"
    b.style.fontWeight="bold"
    b.style.transitionDuration="1s"
    b.style.borderRadius="40px"
})