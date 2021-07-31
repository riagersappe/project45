var sky, skyImg
var plane, planeImg
var obstacle, obstacleImg, obstacleGroup

function preload(){
    skyImg = loadImage("background.jpeg");
    planeImg = loadImage("plane.png");
    obstacle1Img = loadImage("badplane.png");
    obstacle2Img = loadImage("meteor.png");
    obstacle3Img = loadImage("storm.png");
    obstacle4Img = loadImage("tornado.png");
}

function setup(){
    createCanvas(600,500);
    plane = createSprite(50,150,20,50);
    plane.addImage("plane",planeImg);

    obstacleGroup = new Group();
}

function draw(){
    if(keyDown("UP_ARROW")){
        plane.y = plane.y - 5;
    }
    if(keyDown("DOWN_ARROW")){
        plane.y = plane.y + 5;
    }

    drawSprites();
}

function spawnObstacles(){
    if (frameCount % 100 === 0){
        obstacle = createSprite(600,(Math.round(random(50,350))),10,40);
        obstacle.velocityX = -6;

        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: obstacle.addImage(obstacle1Img);
            break;
            case 2: obstacle.addImage(obstacle2Img);
            break;
            case 3: obstacle.addImage(obstacle3Img);
            break;
            case 4: obstacle.addImage(obstacle4Img);
            break;
            default: break;
        }
        obstacle.lifetime = 1000;
        obstacleGroup.add(obstacle);
    }
}