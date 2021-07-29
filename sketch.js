var backImg,backdrop;
var player , player_running;
var food ,foodImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground,groundImg;
var survivalTime=0;
var time;

var hunter,hunter_running,child_running,man_running;
var cactusImg,bevarageImg,drinkImg;
var meatImg,booksImg,folderImg;
var gameState = "MONKEY";
function preload(){
  
  backImg=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  foodImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");

  hunter_running = loadAnimation("hunter1-removebg-preview.png","hunter2-removebg-preview.png","hunter3-removebg-preview.png","hunter4-removebg-preview.png","hunter5-removebg-preview.png","hunter6-removebg-preview.png");
  
  cactusImg = loadImage("cactusImg.png");
  meatImg = loadImage("meatImg.png");

  child_running = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png","boy9.png","boy10.png","boy11.png","boy12.png")

  booksImg = loadImage("books.png");
  beverageImg = loadImage("pizza.png");

  man_running = loadAnimation("man1.png","man2.png","man3.png","man4.png","man5.png","man6.png","man7.png","man8.png","man9.png","man10.png");

  folderImg = loadImage("folder.png");
  drinkImg  = loadImage("coldDrink.png");


}



function setup() {
  createCanvas(400,400);
  
  backdrop=createSprite(400,380,10,10);
  backdrop.addImage("ground",backImg);
  backdrop.velocityX=-4;
 

  player=createSprite(70,400,10,10);
  
 
  
  ground=createSprite(200,400,400,10);
  ground.visible=false;
  //console.log(ground.x);
  
 
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  
  score=0;
  time=0;
}


function draw() {

  background(2);
  if(backdrop.x<0)
    {
       backdrop.x=backdrop.width/2;
    }

  if(score>=0 && score<2)
  {
    gameState==="MONKEY"
    player.addAnimation("running",player_running);
    player.scale=0.12;
  }

  else if(score>=2 && score<4)
  {
    gameState==="HUNTER"
    player.addAnimation("running",hunter_running);
    player.scale=0.62;
  }

  else if(score>=4 && score<6)
  {
    gameState==="CHILD"
    player.addAnimation("running",child_running);
    player.scale=0.62;
  }

  else if(score>=6 && score<8)
  {
    gameState==="MAN"
    player.addAnimation("running",man_running);
    //player.scale=0.12;
  }
  // if (time===100){
  //  player.changeAnimation("run", )
  // }

 
  
  
   if(keyDown("space")&& player.y>330)
     {
       player.velocityY=-20;
     }
   player.velocityY=player.velocityY + 0.8;
  
  
   player.collide(ground);
  
   if(player.isTouching(foodGroup))
     {
       foodGroup.destroyEach();
       score=score+2;
     }

  // if((score>=10) && (score<20))
  // {
  //   console.log("changed to hunter");
  //   player.changeAnimation("running",hunter_running);
  //   food.addImage("benifit",meatImg);
  //   obstacle.addImage("hurdle",cactusImg);
  // }

  // else if((score>=20) && (score<30))
  // {
  //   console.log("changed to child");
  //   player.changeAnimation("run",child_running);
  //   food.addImage("education",booksImg);
  //   obstacle.addImage("unhealthy",beverageImg);
  // }

  // else if((score>=30) && (score<40))
  // {
  //   console.log("changed to man");
  //   player.changeAnimation("adult",man_running);
  //   food.addImage("success",folderImg);
  //   obstacle.addImage("failure",drinkImg);
  // }
 
  /* switch (score)
    {
      case 10: 
      player.changeAnimation("running",hunter_running);
      food.changeAnimation("benifit",meatImg);
      obstacle.changeAnimation("hurdle",cactusImg);
      break;
      
      case 20:
      player.scale=0.17;
      break;
      
      case 30:
      player.scale=0.19;
      break;
      
      case 40:
      player.scale=0.21;
      break;
      
      default:
      break;  
    }*/
 
  
  if(obstacleGroup.isTouching(player))
    {
      time=time+1;
      //player.scale=0.12;
    }
 
 
  
  
  
  
  spwanFood();
  spwanObstacles();
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,300,50);
  
  stroke("brown");
  textSize(20);
  fill("brown");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
  
}

function spwanFood()
{
  if(frameCount%100==0)
    {
  food=createSprite(400,Math.round(random(120,200)),10,10);
  food.addImage(foodImage);
  food.scale=0.06;
     
      food.velocityX=-4;
      food.lifeTime=400;
      foodGroup.add(food);
    }
}

function spwanObstacles()
{
  if(frameCount%130==0)
    {
      obstacle=createSprite(400,385,10,10);
     
     // obstacle.debug=true;
      obstacle.velocityX=-4;
      obstacleGroup.add(obstacle);
    }
}



