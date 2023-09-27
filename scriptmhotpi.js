var center = document.querySelector("#center")

const btn=document.querySelector("#throttle");
     
const throttleFunction=(func, delay)=>{
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();
      // console.log(now-prev, delay);
         
      if(now - prev> delay){
        prev = now;
        return func(...args); 
      }
    }
}

// Throttling Helps In Decreasing The No. Of Execution Of A Code.
// Kisi particular code ke No. of execution ko kam kardena.

center.addEventListener("mousemove", throttleFunction((dets)=>{
    // console.log("Hover Hua")
    // console.log(dets.clientX, dets.clientY);
    var div = document.createElement("div")  // Creates the element.

    div.classList.add("imagediv")  // JS me div ya koi bhi element humne banaya to uske jo properties humne css me likhe ho to use JS me lagane ke liye classList.add use karte hay.
    
    div.style.left = dets.clientX + "px"
    div.style.top = dets.clientY + "px"

    var img = document.createElement("img")
    img.setAttribute("src", "https://images.bewakoof.com/utter/content/4906/content_SRK_A-B-Cs_-_Shahrukh_Khan_Biography_-_Bewakoof_Blog.jpg")
    div.appendChild(img)

    img.style.transform = "translateY(0)"
    img.style.transition = "ease 0.2s"

    
    document.body.appendChild(div)  // Vo div ka effect screen pe dekhne ke liye appendChild() use karte hay.

    setTimeout(function(){
        div.remove();
    }, 500)
}, 200));