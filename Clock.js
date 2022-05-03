var Status = "";
function preLoad()
{
    img = loadImage('Clock.jpg');
}

function setup()
{
    canvas = createCanvas(500,600);
    canvas.center();
    document.getElementById("status").innerHTML = "Status : Detcting objects";
}

function draw()
{
    for(i=0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "status : object detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" + objects[i].x + 15,objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
}

function modelLoaded()
{
    console.log("Model Loaded");
    Status = true;
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}