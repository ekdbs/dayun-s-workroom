let musicFile;
let musicFile2;
let button;
let button2;
let button3;
let button4;
var t=0;
let amp;
let music;
var sliderRate;
var vol;

let skipper=0;
let skipper2=0;

function preload(){
    ZICO = loadImage("ZICO.png")
    neck = loadImage("neck.jpeg")
    ZICO2 = loadImage("ZICO2.png")
}

function setup()
{
    createCanvas(640, 480);
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('music', loadMusic);
    musicFile2 = loadSound('music2', loadMusic);

    button = createButton("play");
    button.mousePressed(togglePlaying1);

    button2 = createButton("Music1");
    button2.mousePressed(togglePlaying2);
    music = 1;

    button3 = createButton("volume(+)");
    button3.mousePressed(volumeUP);
    

    button4 = createButton("volume(-)");
    button4.mousePressed(volumeDown);

    music = 1;

    sliderRate = createSlider(-2, 1.5, 1, 0.1);

    jump1 = createButton("jump1");
    jump2 = createButton("jump2");
    jump3 = createButton("jump3");
    jump4 = createButton("jump4");
    jump5 = createButton("jump5");

    jump1.position(5, 550);
    jump2.position(60, 550);
    jump3.position(120, 550);
    jump4.position(180, 550);
    jump5.position(240, 550);

    jump1.mousePressed(skip1);
    jump2.mousePressed(skip2);
    jump3.mousePressed(skip3);
    jump4.mousePressed(skip4);
    jump5.mousePressed(skip5);



    

    amp = new p5.Amplitude();
}

function togglePlaying1(){
    if(music === 1){
        if(!musicFile.isPlaying()){
            // rB=musicFile.reverseBuffer();
            musicFile.setVolume(0.5);
            musicFile.rate(1);
            musicFile.play();
            musicFile2.stop();
            button.html('pause');
        }else{
            musicFile.stop();
            button.html('play');
            // background(255);
        }
    }
    if(music === 2){
        if(!musicFile2.isPlaying()){
            // rB=musicFile.reverseBuffer();
            musicFile2.jump(100);
            musicFile2.setVolume(0.5);
            musicFile.rate(1);
            musicFile2.play();
            musicFile.stop();
            button.html('pause');
        }else{
            musicFile2.stop();
            button.html('play');
            // background(255);
        }
    }
 }

 function togglePlaying2(){
    if(music === 1){
        music = 2;
        button2.html('Music2');
        button.html('play');
        musicFile.stop();
    }else{
        music = 1;
        button2.html('Music1');
        musicFile2.stop();
    }
    console.log(music);
 }

function loadMusic()
{
    console.log("It's Working");
}

// function jumpSong(){
//     var len = musicFile.duration();
//     var t;
//     musicFile.jump(10);
// }
function volumeUP(){
    musicFile.setVolume(2);
    musicFile2.setVolume(2);
}

function volumeDown(){
    musicFile.setVolume(0.1);
    musicFile2.setVolume(0.1);
    
}

function skip1(){
    musicFile.jump(0);
    musicFile2.jump(0)
}

function skip2(){
    skipper  = musicFile.duration()/5;
    skipper2  = musicFile2.duration()/5;
    musicFile.jump(skipper);
    musicFile2.jump(skipper2);
    // musicFile.jump(musicFile.duration()/5);
    // musicFile2.jump(musicFile2.duration()/5)
}
function skip3(){
    skipper = musicFile.duration()*2/5;
    skipper2 = musicFile2.duration()*2/5;
    musicFile.jump(skipper);
    musicFile2.jump(skipper2);
    // musicFile.jump(musicFile.duration()*2/5);
    // musicFile2.jump(musicFile2.duration()*2/5);
}
function skip4(){
    skipper = musicFile.duration()*3/5;
    skipper2 = musicFile2.duration()*3/5;
    musicFile.jump(skipper);
    musicFile2.jump(skipper2);
    // musicFile.jump(musicFile.duration()*3/5);
    // musicFile2.jump(musicFile2.duration()*3/5)
}
function skip5(){
    skipper = musicFile.duration()*4/5;
    skipper2 = musicFile2.duration()*4/5;
    musicFile.jump(skipper);
    musicFile2.jump(skipper2);
    // musicFile.jump(musicFile.duration()*4/5);
    // musicFile2.jump(musicFile2.duration()*4/5)
}

function draw(){
    

    if(music === 1){
        console.log(amp.getLevel(), musicFile.duration());
        background(255)

// fill('pink');
// rect(musicFile.currentTime()*3,480-amp.getLevel()*1000, 20, 20);
    textSize(25);
        fill(0);
        // ellipse(skipper+1080/7+20, amp.getLevel()*1500, 100, 100);
        // ellipse(skipper+1080/3, amp.getLevel()*1500, 100, 100);
        image(ZICO2, skipper, amp.getLevel()*1500, 1080/2, 1548/2);
        fill(255);
        rect(skipper+1080/8, amp.getLevel()*1800+360, 270,50);
        fill(0);
        text("  아무노래나 일단 틀어 '넵'", skipper+1080/8, amp.getLevel()*1800+405);
    } else{
        console.log(amp.getLevel(), musicFile2.duration());
        // fill('yellow');
        // ellipse(musicFile2.currentTime()*4,480-amp.getLevel()*1000, 20, 20);
        textSize(50);
        image(neck, 0, 0, width, height);
        background(0,0,0);
        noStroke();
        fill(255, 255, 0);
        // ellipse(width/2-50, height/3+amp.getLevel()*1500, 500, 500);
        image(neck, 0, 0, width, height);
        text("나는 새삥", skipper+1080/4, amp.getLevel()*1500);
        image(ZICO, skipper, amp.getLevel()*1500, 1080/2, 1548/2);  
    }
    musicFile.rate(sliderRate.value());
    musicFile2.rate(sliderRate.value());

    

}

