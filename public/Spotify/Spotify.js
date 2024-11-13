// DOM Elements
const songList = document.getElementById("songList");
const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-btn");
const pauseButton = document.getElementById("pause-btn");
const volumeButton = document.getElementById("volume-btn");
const seekbar = document.getElementById("seekbar");
const seekCircle = document.getElementById("seek-circle");
const durationDisplay = document.getElementById("duration");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const volumeSlider = document.getElementById("volume-slider");
const Left = document.querySelector(".left");
const closesvg = document.querySelector(".closesvg");
const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener("click", () => {
    Left.style.left = "0%"
});

closesvg.addEventListener("click", () => {
    Left.style.left = "-100%"
});

// Singer and Song Data
const singerImage = ['Pritam.jpeg', 'neha kakkar.jpeg', 'Shreya Ghoshal.jpg', 'Pritam.jpeg', 'neha kakkar.jpeg', 'Shreya Ghoshal.jpg'];
const singerName = ['Pritam', 'Neha Kakkar', 'Shreya Ghoshal'];

const randomSongs = [
    'Leke-Pehla-Pehla-Pyar.mp3',
    'Mile-Ho-Tum-Humko-Bade-Nasibon-Se(PagalWorld).mp3',
    'Mere-Sanam(PagalWorld).mp3',
    'Agar-Tum-Mil-Jao-Female-Version(PagalWorld).mp3'
];

const Pritam = [
    'Leke-Pehla-Pehla-Pyar.mp3',
    'Mere-Sanam(PagalWorld).mp3',
    'Leke-Pehla-Pehla-Pyar.mp3',
    'Mere-Sanam(PagalWorld).mp3',
    'Paisa(PagalWorld).mp3'
];

const NehaKakkar = [
    'Mile-Ho-Tum-Humko-Bade-Nasibon-Se(PagalWorld).mp3',
    'Dilbar-Remix---DJ-Hardik(PagalWorld).mp3'
];

const ShreyaGhoshal = [
    'Tu-Phir-Bhi-Jaan-Hai-Meri(PagalWorld).mp3',
    'Agar-Tum-Mil-Jao-Female-Version(PagalWorld).mp3'
];

let songs = [];
let currentSongIndex = 0;
let currentPlayingElement = null;

// Function to load songs into the song list
function loadSongs(songArray) {
    songs = songArray;
    songList.innerHTML = '';
    songs.forEach((song, index) => {
        const songdata = document.createElement('div');
        songdata.className = 'songnumber';
        songdata.innerHTML = `
            <img src="music.svg" alt="song">
            <div class="songname">${song}</div>
            <span class="playnow">Play Now</span>
            <img class="playsvg" id="play-icon-${index}" onclick="playSong(${index}, this)" src="play.svg" alt="">
            <img class="pausesvg" id="pause-icon-${index}" onclick="pauseSong(${index}, this)" src="pause.svg" alt="" style="display:none;">
        `;
        songList.appendChild(songdata);
    });
}

// Function to load random songs
function loadRandomSongs() {
    loadSongs(randomSongs);
}

// Function to load songs by a specific artist
function loadArtistSongs(artistName) {
    let artistSongs = [];
    switch (artistName) {
        case 'Pritam':
            artistSongs = Pritam;
            break;
        case 'Neha Kakkar':
            artistSongs = NehaKakkar;
            break;
        case 'Shreya Ghoshal':
            artistSongs = ShreyaGhoshal;
            break;
        default:
            artistSongs = randomSongs;
    }
    loadSongs(artistSongs);

    // Add class to the selected singer's div and remove it from others
    const singerDivs = document.querySelectorAll('.images');
    singerDivs.forEach(div => {
        if (div.children[1].textContent === artistName) {
            div.classList.add('selected-singer');
        } else {
            div.classList.remove('selected-singer');
        }
    });
}

// Function to populate the singer list
function populateSingers() {
    const singerList = document.getElementById("singerList");
    singerImage.forEach((SImage, index) => {
        const SName = singerName[index];
        const singerDiv = document.createElement('div');
        singerDiv.className = 'images';
        singerDiv.innerHTML = `
            <img aria-hidden="false" draggable="false" loading="lazy" src="${SImage}" alt="img" class="img">
            <h2>${SName}</h2>
            <p>Artist</p>
        `;
        singerDiv.addEventListener('click', () => loadArtistSongs(SName));
        singerList.appendChild(singerDiv);
    });
}

// Function to play a song
function playSong(index, element) {
    if (currentPlayingElement && currentPlayingElement !== element) {
        currentPlayingElement.style.display = 'inline';
        currentPlayingElement.nextElementSibling.style.display = 'none';
    }
    currentSongIndex = index;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    playButton.style.display = "none";
    pauseButton.style.display = "inline";
    element.style.display = 'none';
    element.nextElementSibling.style.display = 'inline';
    currentPlayingElement = element;
}

// Function to pause a song
function pauseSong(index, element) {
    audioPlayer.pause();
    element.style.display = 'none';
    element.previousElementSibling.style.display = 'inline';
    playButton.style.display = "inline";
    pauseButton.style.display = "none";
}

// Event listeners for play and pause buttons
playButton.addEventListener("click", () => {
    audioPlayer.play();
    playButton.style.display = "none";
    pauseButton.style.display = "inline";
    if (currentPlayingElement) {
        currentPlayingElement.style.display = 'none';
        currentPlayingElement.nextElementSibling.style.display = 'inline';
    }
});

pauseButton.addEventListener("click", () => {
    audioPlayer.pause();
    playButton.style.display = "inline";
    pauseButton.style.display = "none";
    if (currentPlayingElement) {
        currentPlayingElement.style.display = 'inline';
        currentPlayingElement.nextElementSibling.style.display = 'none';
    }
});

// Event listener for time update on the audio player
audioPlayer.addEventListener("timeupdate", () => {
    const currentTime = formatTime(audioPlayer.currentTime);
    const duration = formatTime(audioPlayer.duration);

    if (!isNaN(audioPlayer.duration)) {
        durationDisplay.textContent = `${currentTime} / ${duration}`;
    }

    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    seekCircle.style.left = `${progress}%`;
});

// Function to format time (convert seconds to minutes and seconds)
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

// Event listener for seeking on the seekbar
seekbar.addEventListener("click", (e) => {
    const seekTime = (e.offsetX / seekbar.clientWidth) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});

// Event listener for the volume button (mute/unmute)
volumeButton.addEventListener("click", () => {
    audioPlayer.muted = !audioPlayer.muted;
    volumeButton.src = audioPlayer.muted ? "muted.svg" : "volume.svg";
});

// Event listener for volume slider (adjusting volume)
volumeSlider.addEventListener("input", () => {
    audioPlayer.volume = volumeSlider.value;
});

// Event listener for the next button (play the next song)
nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex, document.getElementById(`play-icon-${currentSongIndex}`));
});

// Event listener for the previous button (play the previous song)
prevButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex, document.getElementById(`play-icon-${currentSongIndex}`));
});

// Initialize the singer list and load random songs initially
populateSingers();
loadRandomSongs();
