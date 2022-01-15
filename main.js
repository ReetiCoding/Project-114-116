rabbit_x=0;
rabbit_y=0;

function preload(){
    rabbit= loadImage("https://i.postimg.cc/T1yQNX29/5c7d78f837a36c40b2dd0e28dff2cc43.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,300,300);
    image(rabbit,rabbit_x,rabbit_y,60,45);
}

function take_snapshot(){
    save("my_picture.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x: "+results[0].pose.nose.x);
        rabbit_x = results[0].pose.nose.x-30;
        console.log("nose y: "+results[0].pose.nose.y);
        rabbit_y = results[0].pose.nose.y;
    };
}