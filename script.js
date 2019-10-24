
    var city = "Athens";
    


    $.getJSON(
        "https://openweathermap.org/data/2.5/weather?q=" +city +"&appid=b6907d289e10d714a6e88b30761fae22", function(data){
            console.log(data);
           
        
        
          var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon +".png";
            
          var temperature = Math.round(data.main.temp);
          var weather =  data.weather[0].main;
        
          $('.icon').attr('src', icon);
          $('.weather').append(weather);
          $('.temp').append(temperature);
          
        
        
        });







