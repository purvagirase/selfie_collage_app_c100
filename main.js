var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
} 

recognition.onresult = function(event){

    console.log(event);

var Content = event.results[0][0].transcript.toLowerCase();

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
}




function speak(){
    var synth = window.speechSynthesis;

    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    setTimeout(function(){
        image_id = "selfie_image1"
        take_snapshot()
        speak_data = "Taking your next Selfie in 10 seconds";

        var utterThis = new SpeechSynthesisUtterance(speak_data);

        synth.speak(utterThis);
    }, 5000);


    setTimeout(function(){

        image_id = "selfie_image2"
        take_snapshot()
        speak_data = "Taking your next Selfie in 15 seconds";

        var utterThis = new SpeechSynthesisUtterance(speak_data);

        synth.speak(utterThis);
    }, 10000);

    setTimeout(function(){
        
        image_id = "selfie_image3"
        take_snapshot()
    }, 15000);
}
;

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        if (image_id == "selfie_image1"){
            document.getElementById("result1").innerHTML = '<img id = "selfie_image1" src = "' + data_uri + '">';
        }
        if (image_id == "selfie_image2"){
            document.getElementById("result2").innerHTML = '<img id = "selfie_image2" src = "' + data_uri + '">';
        }
        if (image_id == "selfie_image3"){
            document.getElementById("result3").innerHTML = '<img id = "selfie_image3" src = "' + data_uri + '">';
        }

    })
}


