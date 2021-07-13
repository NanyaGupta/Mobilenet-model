Webcam.set({
    height:350,
    width:350,
    image_format:"png",
    png_quality:90,

   constraints:{
       facingMode:"environment"
   }
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='capturedImage' src='"+data_uri+"'>";
});
}

console.log("Ml5 version is- ",ml5.version);

var classifier= ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function check(){
 img=document.getElementById("capturedImage");
 classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
   document.getElementById("objectName").innerHTML=results[0].label;
}
}
