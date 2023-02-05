const express = require("express");
const https = require("https");



const app = express();

app.get("/", (req,res) =>{

    const url = "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=1c077333c1658e5e8b96fd3fc7a62d2d"
    https.get(url, (response)=>{
        console.log(response.statusCode);

        //get a data from the response and to parse this JSON data 
        response.on("data",(data)=>{
            const wheatherData = JSON.parse(data);//JSON.stringify(data) opposit
            const temp = wheatherData.main.temp;
            
            console.log(temp); 

        
        }) 

    })

    res.send("server is running");
})


app.listen(3000, ()=>{
    console.log(("Server id running on port 3000"));
})