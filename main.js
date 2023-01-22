difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 90);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#000033');
    fill("#004080");
    stroke("#4db8ff");
    textSize(difference);
    text("Bryant", 50, 400)
    document.getElementById("font_size").innerHTML= "Font Size of text = " + difference + "px";
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX =" + leftWristX + "rightWristX = " + rightWristX +"difference = " + difference);
    }
}
