var gamestate=0;
var playercount=0;
var database;
var form1,player1;
var players;
var game1;
function setup(){
  createCanvas(800,500);
   database=firebase.database();
   game1=new game();
   game1.getstate();
   game1.start();
   
}
function draw(){
   
}