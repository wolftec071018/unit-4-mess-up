$(document).ready(function(){

    var random = Math.floor(Math.random()*101 + 19);

    $("#randomNumber").text(random);

    var num1= Math.floor(Math.random()*11+1);
    var num2= Math.floor(Math.random()*11+1);
    var num3= Math.floor(Math.random()*11+1);
    var num4= Math.floor(Math.random()*11+1);

    var userTotal=0;
    var win=0;
    var lose =0;

    $("#numberWins").text(win);
    $("#numberLosses").text(lose);

    function reset(){
        random=Math.floor(Math.random()*101+19);
        console.log(random)
        $('#randomNumber').text(random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 

    function winner(){
        alert("goodjob! you can add!");
        win++;
        $("#numberWins").text(win);
        reset();
    
    };
    function loser(){
        alert("who taught you to count? you lose.")
        lose++;
        $("#numberLosses").text(lose);
        reset();
    }
    $('#one').on ('click', function(){
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal); 
            if (userTotal == random){
              winner();
            }
            else if ( userTotal > random){
              loser();
            }   
      })  
      $("#two").on ("click", function(){
          userTotal = userTotal + num2;
          $("#finalTotal").text(userTotal);
            if(userTotal==random){
                winner();
            }
            else if( userTotal > random){
                loser();
            }
      })
      $("#three").on ("click", function(){
        userTotal = userTotal + num3;
        $("#finalTotal").text(userTotal);
          if(userTotal==random){
              winner();
          }
          else if( userTotal > random){
              loser();
          }
    })
    $("#four").on ("click", function(){
        userTotal = userTotal + num4;
        $("#finalTotal").text(userTotal);
          if(userTotal==random){
              winner();
          }
          else if( userTotal > random){
              loser();
          }
        })
});