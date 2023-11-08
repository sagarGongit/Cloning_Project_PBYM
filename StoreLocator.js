let sbtn = document.querySelector("#sicon");
    let cbtn = document.querySelector("#cicon");
    let ibox = document.getElementById("inp");
      cbtn.addEventListener("click",function(){
         ibox.value = "";
      });
      document.body.onload = function(){hidefunction()};
      function hidefunction(){
        document.getElementById("cicon").style.display = "none";
      }
   document.getElementById("inp").addEventListener("click",function(){
     if(document.getElementById("inp").value.length>1){
        document.getElementById("cicon").style.display="block";
     }
  })

  let inpbox = document.getElementById("").