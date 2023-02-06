const express = require("express");
const https = require("https");



const app = express();

app.get("/", (req,res) =>{

    const url = "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=1c077333c1658e5e8b96fd3fc7a62d2d&units=metric"
    https.get(url, (response)=>{
        console.log(response.statusCode);

        //get a data from the response and to parse this JSON data 
        response.on("data",(data)=>{
            const wheatherData = JSON.parse(data);//JSON.stringify(data) opposit
            const temp = wheatherData.main.temp; //accede a une attribut de lobjet
            const icon = wheatherData.weather[0].icon;
            const img = "https://openweathermap.org/img/wn/"+icon+"@2x.png"


            console.log(wheatherData); 
            console.log(icon); 
            console.log(temp); 
            
            //after write all this thing than send it res.send();
            
            res.write("<h1>The temperature in London is "+temp+" degrees Celcius.</h1>");
            res.write("<p>The Weather is currently "+wheatherData.weather[0].description+"</p>");
            res.write("<img src="+img+">");
            res.send();

            
        }) 

    })

})


app.listen(3000, ()=>{
    console.log(("Server id running on port 3000"));
})