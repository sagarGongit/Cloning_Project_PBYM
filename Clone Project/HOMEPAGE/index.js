let sbtn = document.querySelector("#sicon");
    let cbtn = document.querySelector("#cicon");
    let ibox = document.getElementById("inp");
      cbtn.addEventListener("click",function(){
         ibox.value = "";
      });

      // image array functionality

      let imgArray = [
         "https://logan.nnnow.com/content/dam/nnnow-project/16-oct-2023/RareBeauty_HolidayCollectionLaunch_TopBanner_Desktop_1125x500px.jpg",
         "https://logan.nnnow.com/content/dam/nnnow-project/02-nov-2023/desktop1125pxx500px.jpg",
         "https://logan.nnnow.com/content/dam/nnnow-project/29-sep-2023/SCSummerlaunch_TopBanner_Desktop_1125x500(1).jpg",
         "https://logan.nnnow.com/content/dam/nnnow-project/17-oct-2023/Benefit_SephoraEtail_Homepage_Desktop_1125x500.jpg",
         "https://logan.nnnow.com/content/dam/nnnow-project/03-nov-2023/04NOV23-SephoraDiwali-TopBanner-Desktop-1125x500px.jpg"
                   ];
 
                   let currvalue = 0;
                document.querySelector("#slideim").setAttribute("src",imgArray[currvalue]);
          document.getElementById("prev").addEventListener("click",function(){
                 currvalue--
                 if(currvalue<0){
                   currvalue = imgArray.length-1
                 }
                 document.querySelector("#slideim").setAttribute("src",imgArray[currvalue]);
          })
          document.getElementById("next").addEventListener("click",function(){
                     currvalue++
                     if(currvalue>imgArray.length-1){
                        currvalue = 0
                     }
                document.querySelector("#slideim").setAttribute("src",imgArray[currvalue]);     
          });

                
         // back to top button
         
             let bbutton = document.getElementById("top");
          bbutton.addEventListener("click",function(){
             document.body.scrollTop = 0;
             document.documentElement.scrollTop = 0;
          });

          // search functionality
          document.body.onload = function(){
            hidefunction()
         };
             function hidefunction(){
               document.getElementById("cicon").style.display = "block";
             }
          document.getElementById("inp").addEventListener("click",function(){
            if(document.getElementById("inp").value.length>1){
               document.getElementById("cicon").style.display ="block";
            }
         })

       
       