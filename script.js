// Containers
const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('video');

// Buttons
const openFilesBtn = document.querySelector('.open-files-btn');
const playlistBtn = document.querySelector('.play-list-btn');
const prevBtn = document.querySelector('.prev-btn');
const rwdBtn = document.querySelector('.rwd-btn');
const playPauseBtn = document.querySelector('.play-pause-btn');
const ffdBtn = document.querySelector('.ffd-btn');
const nextBtn = document.querySelector('.next-btn');
const subtitlesBtn = document.querySelector('.subtitles-btn');
const pipBtn = document.querySelector('.pip-btn');
const fullscreenBtn = document.querySelector('.fullscreen-btn');
const settings = document.querySelector('.settings-btn');

//-- Event Listeners --//

// Video event listener
video.addEventListener('play', () => {
    videoContainer.classList.remove('paused');
});

video.addEventListener('pause', () => {
    videoContainer.classList.add('paused');
});

// Keyboard event listners
//Play Pause
document.addEventListener('keydown', e => {
    // Remove focus to prevent double event
    e.preventDefault();
    e.target.blur();

    switch (e.key.toLowerCase()) {
        case " ":
        case "k":
            togglePlay();
            break;
    }
});

//-- Control event Listeners --//

// Open Files event listener
openFilesBtn.addEventListener('click', ()=>{
    alert("Open Files!");
});

// Playlist button event listener
playlistBtn.addEventListener('click', ()=>{
    alert("Playlist!");
});

// Previous Button event listener
prevBtn.addEventListener('click', ()=>{
    alert("Previous!");
});

rwdBtn.addEventListener('click', ()=>{
    alert("Rewind!");
});

// Play Pause Button event listerner
playPauseBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

// Fast Forward Button event listener
ffdBtn.addEventListener('click', ()=>{
    alert("Fast Forward!");
});

//Next Button event listener
nextBtn.addEventListener('click', ()=>{
    alert("Next!");
});

// Subtitle Button event listener
subtitlesBtn.addEventListener('click', ()=>{
    alert("Subtitles!");
});

// PiP Button event listener
pipBtn.addEventListener('click', ()=>{
    alert("PiP!");
});

// Fullscreen Button event listener
fullscreenBtn.addEventListener('click', ()=>{
    alert("Fullscreen!");
});

// Settings Button event listener
settings.addEventListener('click', ()=>{
    alert("Settings!");
});