// Containers
const videoContainer = document.querySelector('.video-container');
const videoControlsContainer = document.querySelector('.video-controls-container');
const video = document.querySelector('video');

// Buttons
const openFilesBtn = document.querySelector('.open-files-btn');
const playlistBtn = document.querySelector('.play-list-btn');
const themeBtn = document.querySelector('.theme-btn');
const volumeBtn = document.querySelector('.volume-btn');
const prevBtn = document.querySelector('.prev-btn');
const rwdBtn = document.querySelector('.rwd-btn');
const playPauseBtn = document.querySelector('.play-pause-btn');
const ffdBtn = document.querySelector('.ffd-btn');
const nextBtn = document.querySelector('.next-btn');
const subtitlesBtn = document.querySelector('.subtitles-btn');
const pipBtn = document.querySelector('.pip-btn');
const fullscreenBtn = document.querySelector('.fullscreen-btn');
const settings = document.querySelector('.settings-btn');

//Fit content
window.resizeTo(video.clientWidth, video.clientHeight);

//-- Event Listeners --//

//-- Element event listeners

video.addEventListener('volumechange', ()=>{
    if(video.muted || video.volume == 0){
        volumeBtn.classList.remove('high');
        volumeBtn.classList.remove('low');
        volumeBtn.classList.add('mute');
    } else {
        volumeBtn.classList.remove('mute');
        if(video.volume>.5){
            volumeBtn.classList.remove('low');
            volumeBtn.classList.add('high');
        }else{
            volumeBtn.classList.remove('high');
            volumeBtn.classList.add('low');
        }
    }
});

//Play Pause
video.addEventListener('play', () => {
    videoContainer.classList.remove('paused');
});

video.addEventListener('pause', () => {
    videoContainer.classList.add('paused');
});

video.addEventListener('click', togglePlay);

// Fullscreen
document.addEventListener('fullscreenchange', () => {
    videoContainer.classList.toggle('fullscreen', document.fullscreenElement);
});

// Keyboard event listners
document.addEventListener('keydown', e => {
    // Remove focus to prevent double event
    e.preventDefault();
    e.target.blur();

    switch (e.key.toLowerCase()) {
        // Play Pause
        case " ":
        case "k":
            togglePlay();
            break;
        // Fullscreen
        case "f":
            toggleFullscreenMode();
            break;
        // Fast forward
        case "arrowleft":
            if (e.shiftKey) {
                rewind10();
            } else {
                rewind5();
            }
            break;
        // Rewind
        case "arrowright":
            if (e.shiftKey) {
                fastforward10();
            } else {
                fastforward5();
            }
            break;
        // Volume Up
        case "arrowup":
            video.volume = Math.min(1, video.volume + .1);
            break;
        //Volume Down
        case "arrowdown":
            video.volume = Math.max(0, video.volume - .1);
            break;
    }
    // console.log('key:' + e.key);
    // console.log('vol: ' + video.volume);
});

//-- Control event Listeners

// Open Files event listener
openFilesBtn.addEventListener('click', openFiles);

// Playlist button event listener
playlistBtn.addEventListener('click', () => {
    alert("Playlist!");
});

// Theme button event listener
themeBtn.addEventListener('click', toggleTheme);
function toggleTheme() {
    videoControlsContainer.classList.toggle('chromeos-theme');
    videoControlsContainer.classList.toggle('youtube-theme');
}

// Previous Button event listener
prevBtn.addEventListener('click', () => {
    alert("Previous!");
});

// Rewind Button event listner
rwdBtn.addEventListener('click', rewind5);

// Play Pause Button event listerner
playPauseBtn.addEventListener('click', togglePlay);

// Fast Forward Button event listener
ffdBtn.addEventListener('click', fastforward5);

//Next Button event listener
nextBtn.addEventListener('click', () => {
    alert("Next!");
});

// Subtitle Button event listener
subtitlesBtn.addEventListener('click', () => {
    alert("Subtitles!");
});

// PiP Button event listener
pipBtn.addEventListener('click', () => {
    alert("PiP!");
});

// Fullscreen Button event listener
fullscreenBtn.addEventListener('click', toggleFullscreenMode);

// Settings Button event listener
settings.addEventListener('click', () => {
    alert("Settings!");
});

//-- Functions

// Open Files
function openFiles() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*';
    input.addEventListener('change', () => {
        var file = input.files[0];
        if (video.canPlayType(file.type)) {
            video.src = URL.createObjectURL(file);
            video.load();
        } else {
            alert('Error! File format not supported.');
        }
    }, false);
    input.click();
}

// Rewind
function rewind5() {
    video.currentTime -= 5;
    if (video.currentTime == 0) {
        video.pause();
    }
}

function rewind10() {
    video.currentTime -= 10;
    if (video.currentTime == 0) {
        video.pause();
    }
}

// Play Pause
function togglePlay() {
    video.paused ? video.play() : video.pause();
}

// Fast Forward
function fastforward5() {
    video.currentTime += 5;
}

function fastforward10() {
    video.currentTime += 10;
}

// Fullscreen
function toggleFullscreenMode() {
    if (document.fullscreenElement == null) {
        videoContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
        window.resizeTo(video.clientWidth, video.clientHeight);
    }
}