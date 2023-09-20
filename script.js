    
    const button = document.querySelector("button");

    button.addEventListener("click", () => {
      
        function MakeBubble(){
            var clutter = "";
    
            for( var i=1; i<=1000; i++){
                var rn =  Math.floor(Math.random()*10)
            clutter +=  `<div class="bubble"> ${rn} </div>`;
            }
            
            document.querySelector("#pbtm").innerHTML = clutter;
        }
        var Score = 0;
        var hitrn = 0;
        var  timer= 30;     
        function runTimer(){
        var timerInt = setInterval(function(){
            if(timer>0){
                timer--;
                document.querySelector("#timerval").textContent = timer;    
            }   else{
                clearInterval(timerInt);
                document.querySelector("#pbtm").innerHTML = ` <h1>Game Over</h1>`;
            }
        },1000); 
        }
    
        function getNewHit(){
            hitrn = Math.floor(Math.random() *10);
            document.querySelector("#hitval").textContent = hitrn;
        }
    
        function increaseScore(){
            Score += 10;
            document.querySelector("#scoreval").textContent = Score;
        }
    
        document.querySelector("#pbtm").addEventListener("click", function(dets) {
        var Clickedknum = Number(dets.target.textContent);
        if(Clickedknum ===  hitrn){
            increaseScore();
            getNewHit();
            MakeBubble();
           
        }
        });
        getNewHit();
        MakeBubble();
        runTimer();


    });


    $('btn1').click({
        
    })
 
    
    
    
   
    
 