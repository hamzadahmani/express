function myFunction() {
 document.getElementById("myDIV").style.display = "block";
}
function close() {
  let parentclose =  document.getElementById("myDIV");
  parentclose.style.display = "none";
   }


   document.addEventListener("click", function(event){
       if(event.target.className == "btn btn-secondary" || event.target.className == "close") {
           close()
       }
   })

   document.addEventListener("click", function(event){
    if(event.target.id == "remove"  ) {
        remove()
    }
})

document.addEventListener("click", function(event){
    if(event.target.className == "btn btn-primary") {
        copy()
        close()
    }
})

function copy() {
    let copydiv =  document.querySelector("#temp");
    let newElem= copydiv.cloneNode(true);
    let add = document.getElementById("article")
    let addresimg = document.getElementById("address").value
    let prixx = document.getElementById("prix1").value
    let name = document.getElementById("nom").value


     add.appendChild(newElem);
     copydiv.querySelector(".card-img-top").setAttribute("src",String(addresimg))
     copydiv.getElementsByTagName("H5")[0].innerHTML=prixx+" "+"DT"
     console.log(prixx)
     copydiv.getElementsByTagName("A")[1].innerHTML=name
    }
   
    function remove() {
      let removediv =  event.target.parentElement.parentElement.parentElement  ;
      removediv.remove()
       
     
         }
         

         
         document.addEventListener("click", function(event){
            
            if(event.target.className == "btn btn-outline-success" ){
                calc()
            }  
            
             
        })


        function calc() {
            
            var items=document.getElementsByClassName('row')[0]
            var itemsrows=items.getElementsByClassName('col-lg-4 col-md-6 mb-4')
            var total=0
            for(var i=0;i<itemsrows.length;i++){
                var itemrow=itemsrows[i]
                var prixblock=itemrow.getElementsByTagName('h5')[0]
                var qnt=itemrow.getElementsByClassName('number')[0]
                var prix = prixblock.innerHTML.replace('DT','')
                var quantity=parseInt(qnt.value)
                total=total+(parseInt(prix)*  quantity )
        let achat = document.querySelector("#caisse");
            achat.innerHTML = total+" "+'DT'
               
            }
        }

        document.addEventListener("change", function(event){
            if(event.target.className == "number") {
                charge()
            }
        })

        function charge() {
            event.target
            if(isNaN(event.target.value) || event.target.value <0){
                event.target.value = 0
            }

            calc() 
        }




        
               

