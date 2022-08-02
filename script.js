const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
musicArtist = wrapper.querySelector(".song-details .artist"),
playPauseBtn = wrapper.querySelector(".play-pause"),
prevBtn = wrapper.querySelector("#prev"),
nextBnt = wrapper.querySelector("#next"),
mainAudio = wrapper.querySelector("#main-audio"),
progressArea = wrapper.querySelector(".progress-area"),
progressBar = progressArea.querySelector(".progressBar"),
musicList = wrapper.querySelector(".music-list"),
moreMusicBtn = wrapper.querySelector(".more-music"),
closemoreMusic = musicList.querySelector("#close");

let musicIndex = Math.floor((Math.random() * allmusic.length) + 1);
isMusicPaused = true;

window.addEventListener("load", () =>{
    loadMusic(musicIndex);
    playSong();
});

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = 'images/${allMusic[indexNumb - 1].src}.jpg';
    mainAudio.src = 'songs/${allMusic[indexNumb - 1].src}.mp3';
}

//PLAY MUSIC FUNCTION
function playMusic() {
    wrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";
    mainAudio.play();
}

//PAUSE MUSIC FUNCTION
function pauseMusic() {
    wrapper.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
}

//PREV MUSIC FUNCTION
function prevMusic() {
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}

//NEXT MUSIC FUNCTION
function nextMusic() {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}

//PLAY OR PAUSE BUTTON EVENT
playPauseBtn.addEventListener("click", () => {
    const isMusicPlay = wrapper.classList.contains("paused");
    isMusicPlay ? pauseMusic() : playMusic();
    playingSong();
});

//PREV MUSIC BUTTON EVENT
prevBtn.addEventListener("click", () => {
    prevMusic();
});

//NEXT MUSIC BUTTON EVENT
nextBnt.addEventListener("click", () => {
    nextMusic();
});


