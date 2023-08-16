// JavaScript source code
console.log("Welcome to Spotify");

//initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/4.mp3')
let masterplay = document.getElementById('masterplay');
let myProgress = document.getElementById('myProgress');
let mygif = document.getElementById('mygif');
let SongItems = Array.from(document.getElementsByClassName('SongItem'));
let songs = [

    { Songname: "Steal my girl",  filePath:"songs/1.mp3", coverpath:"covers/2.jpg"},
    { Songname: "History",        filePath:"songs/2.mp3", coverpath:"covers/3.jpg"},
    { Songname: "Best Song Ever", filePath:"songs/3.mp3", coverpath:"covers/5.jpg"},
    { Songname: "Night Changes",  filePath:"songs/4.mp3", coverpath:"covers/4.jpg"},
    { Songname: "Heal the World", filePath:"songs/5.mp3", coverpath:"covers/7.jpg"},
    { Songname: "Drag me Down",   filePath:"songs/6.mp3", coverpath:"covers/2.jpg"},
]

SongItems.forEach((element, i) => {
     element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("Songname")[0].innerText = songs[i].Songname;

})
   
//audioElement.play();

//handle play/pause click
masterplay.addEventListener('click',() => {
    if (audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        mygif.style.opacity = 1;
     }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        mygif.style.opacity = 0;

  }
 })

//Listen to Events
audioElement.addEventListener('timeupdate',()=> {
    //Update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgress.value = progress;
})
myProgress.addEventListener('change', () => {
    audioElement.currentTime = myProgress.value * audioElement.duration/100

})

const makeallPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=> {
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=> {
    element.addEventListener('click', (e) => {
        makeallPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex>=6) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
}) 
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex<=0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})