document.querySelector("#search").addEventListener("click",search);

async function search(){

    try{
       
    let city=document.querySelector("#inputCity").value;
    let api="6858de9adf95cb56ad43d9cacef3ac73";
    let mapurl=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`; 
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    
    let res=await fetch(url);
    let data=await res.json();
    // console.log(data);
    na(data);
    console.log(data);
    //displaymap(mapurl);
    display(data,mapurl);
    
    }catch(err){

    }


}

async function na(data){
    let murl=`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=af5866d50eb7aeb061dd3a373bdc15c2&units=metric`;

try{
    let res1=await fetch(murl);
    let fata=await res1.json();
    //console.log(fata.daily);
    dis(fata);
}catch(err){

    }
}


// function displaymap(url){
// let frame=document.querySelector("iframe");
// frame.src=url;
// document.querySelector("#map").append(frame);
// console.log("89");

// }

function dis(fata){
    document.querySelector("#future").innerHTML="";
console.log(fata.daily);
fata.daily.forEach(element => {
    let di=document.createElement("div");

    let maxi=document.createElement("p");
    maxi.innerText="Min     "+element.temp.max;

    let min=document.createElement("p");
    min.innerText="Min    "+element.temp.min;
    di.append(maxi,min);
    document.querySelector("#future").append(di);

});


}

function display(data,mapurl){
    document.querySelector("#details").innerHTML="";
    document.querySelector("#map").innerHTML="";
    let mintem=document.createElement("p");
    mintem.innerText="Min temperature " +data.main.temp_min;

    let maxtem=document.createElement("p");
    maxtem.innerText="Max temperature "+data.main.temp_max;

    let tem=document.createElement("p");
    tem.innerText="Temperature "+data.main.temp;

    let wind=document.createElement("p");
    wind.innerText="Speed  "+data.wind.speed+"           Deg  "+data.wind.deg;

    let humidity=document.createElement("p");
    humidity.innerText="Humidity "+data.main.humidity

    let sunrise=document.createElement("p");
    sunrise.innerText="Sunrise "+data.sys.sunrise;

    let sunset=document.createElement("p");
    sunset.innerText="Sunset "+data.sys.sunset;

    let frame=document.createElement("iframe");
    frame.src=mapurl;

    document.querySelector("#map").append(frame);

     document.querySelector("#details").append(tem,mintem,maxtem,wind,humidity,sunrise,sunset);
}


       //mintem= data.main.temp_min;
       //maxtem= data.main.temp_max;
       //wind= data.wind;
       //temp= data.main.temp;
       //humidity= data.main.humidity;
       //sunrise=data.sys.sunrise;
       //sunset=data.sys.sunset;
//Show min temp, max temp, wind, clounds, sunrise, sunset etc.
//https://app.getpostman.com/join-team?invite_code=047a53eb30a8bc1e8e8d0080f1135a57