const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackground()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackground()
}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg)
background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here
if(hour>=12){
    text("Time : "+ hour%12 + " PM", 50,100);

}
else{
    text("Time : "+ hour%12 + " AM", 50,100);

}


}
async function getBackground(){
    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON= await response.json();
    console.log(responseJSON)
    var daytime=responseJSON.datetime();
    var hour=daytime.slice(11,13)
    
    if(hour>=06 && hour<=08){ 
        bg = "sunrise1.png";
     } 

     else if(hour>=08 && hour<=11){ 
        bg = "sunrise2.png";
     } 

     else if(hour>=11 && hour<=14){ 
        bg = "sunrise3.png";
     } 

     else if(hour>=14 && hour<=16){ 
        bg = "sunrise4.png";
     } 

     else if(hour>=16 && hour<=18){ 
        bg = "sunrise5.png";
     } 

     else if(hour>=18 && hour<=19){ 
        bg = "sunset7.png";
     } 

     else if(hour>=19 && hour<=21){ 
        bg = "sunset8.png";
     } 

     else if(hour>=21 && hour<=23){ 
        bg = "sunset11.png";
     } 


     

    
         
       


    }