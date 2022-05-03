var Status = "";
function preLoad()
{
    img1 = loadImage('Clock.jpg');
}

function setup()
{
    canvas = createCanvas(500,600);
    canvas.center();
    document.getElementById("status").innerHTML = "Status : Detcting objects";
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