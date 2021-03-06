Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot(){
        Webcam.snap();
    }
    
    console.log('ml5 vrsion',ml5.version);
    
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AyLJY8ULE/model.json',modelLoaded);
    
    function modelLoaded(){
        console.log('Model is loaded');
    }