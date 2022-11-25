// let musicFile;
// function setup()
// {
// soundFormats('mp3','ogg');
// musicFile = loadSound('intention',loadMusic);
// // musicFile.play();
// }

// function loadMusic()
// {
// musicFile.play(); 
// }

var song
var button;

function setup(){
    createCanvas(640, 480);
    song = loadSound('intention.mp3', loaded);
    button = createButton('play');
    button.mousePressed(togglePlaying);
}
function togglePlaying(){
    if(!song.isPlaying()){
        song.play();
        song.setVolume(0.3);
        button.html('pause');
    } else{
        song.stop();
        button.html('play');
    }
}

function loaded(){
    console.log("It's working");
}

function draw(){
    fill('pink')
    ellipse(50, 50, 100, 100);
}