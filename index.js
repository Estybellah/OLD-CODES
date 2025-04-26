


// // function changes(){
//     const element = document.querySelector('#intro-div')
//     let colors = ["palevioletred", "mediumvioletred" , "fruschia", "mediumorchid"]
    
//     for(i=0; i <= colors.length; i++){
//             let currentIndex = 0;
//     function updateColor(){
//        element.style.transition = 'background 5s';
//       element.style.backgroundColor = colors[currentIndex];
//       currentIndex= currentIndex++ * colors.length
//       }
//     }
//    setTimeout(updateColor, 1000)
    
    
//    changes()

  // function changes(){
  //   let colors = ["palevioletred", "rebeccapurple",  "fruschia", "mediumorchid"]

  //   for(i=0; i<=colors.length; i++){
  //        return colors[Math.floor(Math.random()* colors.length)]
        
  //   }

  // }
   
  //     function updateColor(){
  //         let divEl = document.getElementById('intro-div')
  //        setInterval(function(){
  //         divEl.style.transition = "background 3s"
  //            divEl.style.backgroundColor = changes()
  //        },1000)
       
  //     }

  //     updateColor()

document.addEventListener('DOMContentLoaded', ()=>{


 var sidebarToggle = document.body.querySelector("#sidebar")
  if(sidebarToggle){
    sidebarToggle.addEventListener("click", ()=>{
      document.body.classList.toggle("sidebar-open")
    })
  }

})













      