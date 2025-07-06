class MusicPlayer {
  constructor() {
    this.songs = [
      {
        title: "I Wanna Be Yours (Instrumental)",
        artist: "Arctic Monkeys",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Arctic Monkeys - I Wanna Be Yours (Instrumental).mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/am.png",
        lyrics: [
          {
            time: 2,
            text: "♪",
          },
        ],
      },
      {
        title: "Apocalypse",
        artist: "CAS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/CAS - Apocalypse.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cas.jpeg",
        lyrics: [
          {
            time: 2,
            text: "♪",
          },
          {
            time: 35,
            text: "You leapt from crumbling bridges, watching cityscapes turn to dust",
          },
          {
            time: 44,
            text: "Filming helicopters crashing in the ocean from way above",
          },
          {
            time: 55,
            text: "Got the music in you, baby, tell me why",
          },
          {
            time: 60,
            text: "Got the music in you, baby, tell me why",
          },
          {
            time: 65,
            text: "You've been locked in here forever, and you just can't say goodbye",
          },
          {
            time: 76,
            text: "Kisses on the foreheads of the lovers wrapped in your arms",
          },
          {
            time: 86,
            text: "You've been hiding them in hollowed-out pianos left in the dark",
          },
          {
            time: 96,
            text: "Got the music in you, baby, tell me why",
          },
          {
            time: 101,
            text: "Got the music in you, baby, tell me why",
          },
          {
            time: 107,
            text: "You've been locked in here forever, and you just can't say goodbye",
          },
          {
            time: 119,
            text: "Your lips, my lips",
          },
          {
            time: 121,
            text: "Apocalypse",
          },
          {
            time: 128,
            text: "Your lips, my lips",
          },
          {
            time: 131,
            text: "Apocalypse",
          },
          {
            time: 137,
            text: "Go and sneak us through the rivers",
          },
          {
            time: 140,
            text: "Flood is rising up on your knees",
          },
          {
            time: 144,
            text: "Oh, please",
          },
          {
            time: 148,
            text: "Come out and haunt me, I know you want me",
          },
          {
            time: 153,
            text: "Come out and haunt me",
          },
          {
            time: 157,
            text: "Sharing all your secrets with each other, since you were kids",
          },
          {
            time: 167,
            text: "Sleeping soundly with the locket that she gave you clutched in your fist",
          },
          {
            time: 177,
            text: "Got the music in you, baby, tell me why",
          },
          {
            time: 182,
            text: "Got the music in you, baby, tell me why",
          },
          {
            time: 187,
            text: "You've been locked in here forever, and you just can't say goodbye",
          },
          {
            time: 195,
            text: "♪",
          },
          {
            time: 207,
            text: "You've been locked in here forever, and you just can't say goodbye",
          },
          {
            time: 215,
            text: "♪",
          },
          {
            time: 237,
            text: "Oh, when you're all alone",
          },
          {
            time: 245,
            text: "I will reach for you",
          },
          {
            time: 250,
            text: "When you're feeling low",
          },
          {
            time: 255,
            text: "I will be there too",
          },
          {
            time: 261,
            text: "♪",
          },
        ],
      },
      {
        title: "Cry",
        artist: "CAS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/CAS - Cry.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cas.jpeg",
        lyrics: [],
      },
      {
        title: "K.",
        artist: "CAS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/CAS - K..mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cas.jpeg",
        lyrics: [],
      },
      {
        title: "Sunsetz",
        artist: "CAS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/CAS - Sunsetz.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cas.jpeg",
        lyrics: [],
      },
      {
        title: "Chezile",
        artist: "Beanie",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Chezile - Beanie.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/chezile.jpeg",
        lyrics: [],
      },
      {
        title: "Yellow",
        artist: "Coldplay",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Coldplay - Yellow.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cold.jpeg",
        lyrics: [],
      },
      {
        title: "Trouble",
        artist: "Coldplay",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Coldplay - Trouble.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cold.jpeg",
        lyrics: [],
      },
      {
        title: "Welcome And Goodbye",
        artist: "Dream, Ivory",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Dream, ivory - Welcome and Goodbye.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/dream.jpeg",
        lyrics: [
          {
            time: 2,
            text: "♪",
          },
          {
            time: 43,
            text: "Through it all once again",
          },
          {
            time: 46,
            text: "Came to know my only friend",
          },
          {
            time: 49,
            text: "Lost control",
          },
          {
            time: 56,
            text: "Can't begin, I seek within",
          },
          {
            time: 59,
            text: "To feel the warmth brought within your skin",
          },
          {
            time: 63,
            text: "Did you know?",
          },
          {
            time: 69,
            text: "For how it seemed",
          },
          {
            time: 74,
            text: "I should've stayed and let you be",
          },
          {
            time: 81,
            text: "Run into my heart so carelessly",
          },
          {
            time: 88,
            text: "That's the reason I'm afraid",
          },
          {
            time: 91,
            text: "You're the thoughts that can't be tamed",
          },
          {
            time: 95,
            text: "And I'm trying to be sane",
          },
          {
            time: 102,
            text: "And I'm trying to be sane",
          },
          {
            time: 108,
            text: "And I'm trying to be sane",
          },
          {
            time: 111,
            text: "♪",
          },
        ],
      },
      {
        title: "Walking Back Home",
        artist: "FUR",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/FUR - Walking Back Home.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/fur.jpeg",
        lyrics: [],
      },
      {
        title: "Nina",
        artist: "Feast",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Feast - Nina.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/feast.jpeg",
        lyrics: [],
      },
      {
        title: "o,Tuan",
        artist: "Feast",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Feast - o,Tuan.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/feast.jpeg",
        lyrics: [],
      },
      {
        title: "Iris",
        artist: "Goo Goo Dolls",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Goo Goo Dolls - Iris.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/goo.jpg",
        lyrics: [],
      },
      {
        title: "Tip Toe",
        artist: "HYBS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/HYBS - Tip Toe.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/hybs.jpeg",
        lyrics: [],
      },
      {
        title: "Drunk text",
        artist: "Henry Moodie",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Henry Moodie - Drunk text.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/henry.jpeg",
        lyrics: [],
      },
      {
        title: "Car's Outside",
        artist: "James Arthur",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/James Arthur - Car's Outside.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/james.jpeg",
        lyrics: [],
      },
      {
        title: "Chamber Of Reflection",
        artist: "Mac DeMarco",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Mac DeMarco - Chamber Of Reflection.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/mac.jpg",
        lyrics: [],
      },
      {
        title: "Moonlight On The River",
        artist: "Mac DeMarco",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Mac DeMarco - Moonlight On The River.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/mac.jpg",
        lyrics: [],
      },
      {
        title: "Teruntuk Mia",
        artist: "Nuh..",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Nuh.. - Teruntuk Mia.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/nuh.png",
        lyrics: [],
      },
      {
        title: "Let Down",
        artist: "RadioHead",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/RadioHead - Let Down.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/radio.jpeg",
        lyrics: [],
      },
      {
        title: "Sebuah Kisah Klasik",
        artist: "Sheila On 7",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Sheila On 7 - Sebuah Kisah Klasik.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/sheila.jpg",
        lyrics: [],
      },
      {
        title: "Dan",
        artist: "Sheila On 7",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Sheila on 7 - Dan.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/sheila.jpg",
        lyrics: [],
      },
      {
        title: "Film Favorit",
        artist: "Sheila On 7",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Sheila on 7 - Film Favorit.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/sheila.jpg",
        lyrics: [],
      },
      {
        title: "Back to friends",
        artist: "Sombr",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Sombr - Back to friends.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/sombr.jpeg",
        lyrics: [],
      },
      {
        title: "Bad Habit",
        artist: "Steve Lacy",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Steve Lacy - Bad Habit.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/steve.jpg",
        lyrics: [],
      },
      {
        title: "Vacations",
        artist: "Telephones",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Telephones - Vacations.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/tele.png",
        lyrics: [
          {
            time: 2,
            text: "♪",
          },
          {
            time: 24,
            text: "Rise with the morning",
          },
          {
            time: 30,
            text: "You call to me",
          },
          {
            time: 37,
            text: "My thoughts are crawling",
          },
          {
            time: 42,
            text: "You're all I see",
          },
          {
            time: 47,
            text: "I wish I could live without you",
          },
          {
            time: 53,
            text: "But you're a part of me",
          },
          {
            time: 59,
            text: "Wherever I go",
          },
          {
            time: 62,
            text: "You'll always be next to me",
          },
          {
            time: 70,
            text: "♪",
          },
          {
            time: 101,
            text: "Fall into the night",
          },
          {
            time: 106,
            text: "As I gaze into you",
          },
          {
            time: 112,
            text: "Shine so bright",
          },
          {
            time: 118,
            text: "It's all I do",
          },
          {
            time: 123,
            text: "I wish I could live without you",
          },
          {
            time: 129,
            text: "But you're a part of me",
          },
          {
            time: 135,
            text: "Wherever I go",
          },
          {
            time: 138,
            text: "You'll always be next to me",
          },
          {
            time: 150,
            text: "♪ You'll always be next to me",
          },
          {
            time: 156,
            text: "♪ You'll always be next to me",
          },
          {
            time: 162,
            text: "♪ You'll always be next to me",
          },
          {
            time: 168,
            text: "♪ You'll always be next to me",
          },
          {
            time: 172,
            text: "♪",
          },
        ],
      },
      {
        title: "Bunga Maaf",
        artist: "The Lantis",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/The Lantis - Bunga Maaf.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/lantis.webp",
        lyrics: [],
      },
      {
        title: "Perayaan Mati Rasa",
        artist: "Umay, Natania",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Umay, Natania - Perayaan mati rasa.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/umay.png",
        lyrics: [],
      },
      {
        title: "Seasons",
        artist: "Wave To Earth",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Wave to earth - Seasons.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/wave.jpeg",
        lyrics: [],
      },
      {
        title: "Favorite Lesson",
        artist: "Yaeow",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Yaeow - Favorite lesson.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/yaeow.jpeg",
        lyrics: [],
      },
      {
        title: "Missin Something",
        artist: "Zach Templar",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Zach Templar - Missin something.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/zach.jpeg",
        lyrics: [],
      },
      {
        title: "Here With Me",
        artist: "d4vd",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/d4vd - Here With Me.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/d4vd.jpeg",
        lyrics: [],
      },
      {
        title: "Romantic Homicide",
        artist: "d4vd",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/d4vd - Romantic Homicide.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/d4vd.jpeg",
        lyrics: [
          {
            time: 2,
            text: "♪",
          },
          {
            time: 16,
            text: "I'm scared (oh-oh-oh)",
          },
          {
            time: 21,
            text: "It feels like you don't care (ooh-ooh)",
          },
          {
            time: 29,
            text: "Enlighten me, my dear (ooh-ooh-ooh)",
          },
          {
            time: 36,
            text: "Why am I still here? Mm (oh-oh)",
          },
          {
            time: 43,
            text: "I don't mean to be",
          },
          {
            time: 45,
            text: "Complacent with the decisions you made",
          },
          {
            time: 51,
            text: "But why? Mm",
          },
          {
            time: 58,
            text: "In the back of my mind, you died",
          },
          {
            time: 65,
            text: "And I didn't even cry",
          },
          {
            time: 68,
            text: "No, not a single tear",
          },
          {
            time: 72,
            text: "And I'm sick of waiting patiently",
          },
          {
            time: 77,
            text: "For someone that won't even arrive",
          },
          {
            time: 89,
            text: "♪ Ooh-ooh-ooh-ooh-ooh-oh",
          },
          {
            time: 102,
            text: "In the back of my mind, I killed you",
          },
          {
            time: 109,
            text: "And I didn't even regret it",
          },
          {
            time: 113,
            text: "I can't believe I said it",
          },
          {
            time: 116,
            text: "But it's true",
          },
          {
            time: 124,
            text: "I hate you",
          },
        ],
      },
    ];
    this.currentSongIndex = 0;
    this.isPlaying = false;
    this.isShuffled = false;
    this.isNextButtonPressed = false;
    this.prevSongThreshold = 5;
    this.lastSongStartTime = 0;
    this.ignoreSeekThreshold = 2000;
    this.repeatMode = 0;
    this.shuffledIndices = [];
    this.currentShuffleIndex = 0;
    this.audioPlayer = document.getElementById("audioPlayer");
    this.audioContext = null;
    this.analyser = null;
    this.dataArray = null;
    this.source = null;
    this.animationId = null;
    this.preloadedAudios = {};
    this.preloadQueue = [];
    this.currentlyPreloading = 0;
    this.maxParallelPreloads = 3;
    this.lyricsActive = false;
    this.currentLyricIndex = -1;

    this.playBtn = document.getElementById("playBtn");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.shuffleBtn = document.getElementById("shuffleBtn");
    this.repeatBtn = document.getElementById("repeatBtn");
    this.songTitle = document.getElementById("songTitle");
    this.artistName = document.getElementById("artistName");
    this.albumArt = document.getElementById("albumArt");
    this.backgroundBlur = document.getElementById("backgroundBlur");
    this.progress = document.getElementById("progress");
    this.progressBar = document.getElementById("progressBar");
    this.progressTooltip = document.createElement("div");
    this.progressTooltip.className = "progress-tooltip";
    this.progressContainer = document.querySelector(".progress-container");
    this.progressContainer.appendChild(this.progressTooltip);
    this.currentTimeEl = document.getElementById("currentTime");
    this.durationEl = document.getElementById("duration");
    this.playlistContainer = document.getElementById("playlistContainer");
    this.playlist = document.getElementById("playlist");
    this.playlistTrigger = document.getElementById("playlistTrigger");
    this.visualizer = document.getElementById("visualizer");
    this.audioPreloadContainer = document.getElementById(
      "audioPreloadContainer"
    );
    this.body = document.body;
    this.musicPlayer = document.getElementById("musicPlayer");
    this.lyricsContainer = document.getElementById("lyricsContainer");
    this.lyricsContent = document.getElementById("lyricsContent");
    this.closeLyrics = document.getElementById("closeLyrics");
    this.lyricsBox = this.lyricsContainer.querySelector(".lyrics-box");

    this.backgroundImages = [
      "./image/background.jpg",
      "./image/background2.jpg",
      "./image/background3.jpg",
      "./image/background4.jpg",
      "./image/background5.jpg",
    ];
    this.preloadedImages = [];
    this.preloadBackgrounds();
    this.previousBackgroundIndex = -1;
    this.backgroundChangeInterval = null;
    this.backgroundTransitionDuration = 1000;

    this.playlistVisible = false;
    this.playlistHovered = false;
    this.triggerHovered = false;
    this.playlistTransitioning = false;
    this.searchInput = document.getElementById("searchInput");
    this.clearSearch = document.getElementById("clearSearch");
    this.isSearching = false;
    this.searchResults = [];
    this.searchActive = false;
    this.isTypingInSearch = false;

    this.init();
  }

  async init() {
    this.setupVisualizer();
    this.setupEventListeners();
    this.setupAudioEvents();
    this.setupSearch();
    this.renderPlaylist();
    this.updateSongDisplay();
    this.generateShuffledIndices();
    this.updateBackground(false);
    this.startBackgroundRotation();
    this.startPreloading();
  }

  startPreloading() {
    const initialPreloadCount = Math.min(5, this.songs.length);
    for (let i = 0; i < initialPreloadCount; i++) {
      this.preloadAudio(i);
    }

    for (let i = initialPreloadCount; i < this.songs.length; i++) {
      this.preloadQueue.push(i);
    }

    this.processPreloadQueue();
  }

  processPreloadQueue() {
    while (
      this.preloadQueue.length > 0 &&
      this.currentlyPreloading < this.maxParallelPreloads
    ) {
      const index = this.preloadQueue.shift();
      this.preloadAudio(index);
    }
  }

  preloadAudio(index) {
    if (this.preloadedAudios[index]) return;

    this.currentlyPreloading++;
    const song = this.songs[index];
    const audio = document.createElement("audio");
    audio.preload = "auto";
    audio.src = song.src;
    audio.crossOrigin = "anonymous";

    audio.oncanplaythrough = () => {
      this.preloadedAudios[index] = audio;
      this.currentlyPreloading--;
      this.processPreloadQueue();

      const playlistItem = this.playlistContainer.querySelector(
        `.playlist-item[data-index="${index}"]`
      );
      if (playlistItem) {
        playlistItem.classList.add("preloaded");
      }
    };

    audio.onerror = () => {
      console.error(`Failed to preload song: ${song.title}`);
      this.currentlyPreloading--;
      this.processPreloadQueue();
    };

    this.audioPreloadContainer.appendChild(audio);
  }

  setupVisualizer() {
    this.visualizer.innerHTML = "";
    const barCount = 32;
    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement("div");
      bar.className = "visualizer-bar";
      bar.style.height = `${Math.random() * 20 + 2}px`;
      this.visualizer.appendChild(bar);
    }

    this.visualizerBars = Array.from(
      this.visualizer.querySelectorAll(".visualizer-bar")
    );
  }

  startBackgroundRotation() {
    this.backgroundChangeInterval = setInterval(() => {
      this.updateBackground(true);
    }, 30000);
  }

  preloadBackgrounds() {
    this.backgroundImages.forEach((img) => {
      const image = new Image();
      image.src = img;
      this.preloadedImages.push(image);
    });
  }

  updateBackground(smoothTransition = true) {
    if (this.backgroundImages.length === 0) return;

    const availableImages = this.preloadedImages.filter((img) => img.complete);

    const getImageUrl = (index) => {
      return availableImages[index]?.src || this.backgroundImages[index];
    };

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * this.backgroundImages.length);
    } while (
      randomIndex === this.previousBackgroundIndex &&
      this.backgroundImages.length > 1
    );

    this.previousBackgroundIndex = randomIndex;

    const imgToUse = availableImages[randomIndex] || new Image();
    const bgUrl = getImageUrl(randomIndex);

    if (imgToUse.complete) {
      this.backgroundBlur.style.transition = `background-image ${this.backgroundTransitionDuration}ms ease-in-out`;
      this.backgroundBlur.style.backgroundImage = `url(${bgUrl})`;
    } else {
      const tempImg = new Image();
      tempImg.onload = () => {
        this.backgroundBlur.style.transition = `background-image ${this.backgroundTransitionDuration}ms ease-in-out`;
        this.backgroundBlur.style.backgroundImage = `url(${bgUrl})`;
      };
      tempImg.src = bgUrl;
    }
  }

  setupAudioAnalysis() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;
      this.source = this.audioContext.createMediaElementSource(
        this.audioPlayer
      );
      this.source.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    }

    if (this.isPlaying) {
      this.animateVisualizer();
    }
  }

  animateVisualizer() {
    if (!this.analyser) return;

    this.analyser.getByteFrequencyData(this.dataArray);

    const binSkip = Math.floor(
      this.dataArray.length / this.visualizerBars.length
    );

    for (let i = 0; i < this.visualizerBars.length; i++) {
      const mirrorIndex = this.visualizerBars.length - 1 - i;
      const value =
        (this.dataArray[i * binSkip] + this.dataArray[mirrorIndex * binSkip]) /
          2 || 0;
      const height = Math.pow(value / 255, 0.7) * 80 + 2;
      const currentHeight =
        parseFloat(this.visualizerBars[i].style.height) || 2;
      const newHeight = currentHeight * 0.6 + height * 0.4;

      this.visualizerBars[i].style.height = `${newHeight}px`;
      this.visualizerBars[mirrorIndex].style.height = `${newHeight}px`;

      if (newHeight > 15) {
        this.visualizerBars[i].classList.add("active");
        this.visualizerBars[mirrorIndex].classList.add("active");
      } else {
        this.visualizerBars[i].classList.remove("active");
        this.visualizerBars[mirrorIndex].classList.remove("active");
      }
    }

    this.animationId = requestAnimationFrame(() => this.animateVisualizer());
  }

  stopVisualizer() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }

    if (this.visualizerBars) {
      this.visualizerBars.forEach((bar) => {
        bar.style.height = "2px";
        bar.classList.remove("active");
      });
    }
  }

  generateShuffledIndices() {
    this.shuffledIndices = [...Array(this.songs.length).keys()];
    for (let i = this.shuffledIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledIndices[i], this.shuffledIndices[j]] = [
        this.shuffledIndices[j],
        this.shuffledIndices[i],
      ];
    }
    this.currentShuffleIndex = this.shuffledIndices.indexOf(
      this.currentSongIndex
    );
  }

  toggleShuffle() {
    if (!this.isShuffled && this.repeatMode !== 0) {
      this.repeatMode = 0;
      this.repeatBtn.classList.remove("active");
      this.repeatBtn.title = "Repeat Off";
      this.repeatBtn.querySelector("i").className = "fas fa-repeat";
    }

    this.isShuffled = !this.isShuffled;
    this.shuffleBtn.classList.toggle("active", this.isShuffled);

    if (this.isShuffled) {
      this.generateShuffledIndices();
    }
  }

  toggleRepeat() {
    if (this.repeatMode === 0 && this.isShuffled) {
      this.isShuffled = false;
      this.shuffleBtn.classList.remove("active");
    }

    this.repeatMode = (this.repeatMode + 1) % 3;

    const icon = this.repeatBtn.querySelector("i");

    switch (this.repeatMode) {
      case 0:
        icon.className = "fas fa-repeat";
        this.repeatBtn.classList.remove("active");
        this.repeatBtn.title = "Repeat Off";
        break;
      case 1:
        icon.className = "fas fa-repeat";
        this.repeatBtn.classList.add("active");
        this.repeatBtn.title = "Repeat One";
        break;
      case 2:
        icon.className = "fas fa-arrow-right";
        this.repeatBtn.classList.add("active");
        this.repeatBtn.title = "Play Once";
        break;
    }
  }

  renderPlaylist() {
    const playlistHTML = this.songs
      .map((song, index) => {
        return `
                      <div class="playlist-item ${
                        index === this.currentSongIndex ? "active" : ""
                      }" data-index="${index}">
                        <div class="album-art-small" style="background-image: url('${
                          song.albumArt
                        }')"></div>
                        <div class="playlist-item-info">
                          <div class="playlist-item-title">${song.title}</div>
                          <div class="playlist-item-artist">${song.artist}</div>
                          <div class="playlist-item-duration">--:--</div>
                        </div>
                      </div>
                    `;
      })
      .join("");

    this.playlistContainer.innerHTML = playlistHTML;

    this.playlistContainer
      .querySelectorAll(".playlist-item")
      .forEach((item) => {
        item.addEventListener("click", (e) => {
          const index = parseInt(e.currentTarget.dataset.index);
          this.selectSong(index);
        });
      });
  }

  formatTime(seconds) {
    if (isNaN(seconds)) return "--:--";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  updateSongDisplay() {
    if (this.songs.length === 0) return;

    const song = this.songs[this.currentSongIndex];
    this.songTitle.textContent = song.title;
    this.artistName.textContent = song.artist;

    this.albumArt.style.backgroundImage = `url('${song.albumArt}')`;
    this.albumArt.style.backgroundSize = "cover";
    this.albumArt.style.backgroundPosition = "center";
    this.albumArt.textContent = "";

    this.durationEl.textContent = "--:--";

    this.playlistContainer
      .querySelectorAll(".playlist-item")
      .forEach((item, index) => {
        item.classList.toggle("active", index === this.currentSongIndex);
      });

    this.updateLyricsDisplay();
  }

  updateLyricsDisplay() {
    this.lyricsContent.innerHTML = "";
    const song = this.songs[this.currentSongIndex];

    if (song.lyrics && song.lyrics.length > 0) {
      song.lyrics.forEach((line, index) => {
        const lyricLine = document.createElement("div");
        lyricLine.className = "lyrics-line";
        lyricLine.dataset.time = line.time;
        lyricLine.dataset.index = index;
        lyricLine.textContent = line.text;
        this.lyricsContent.appendChild(lyricLine);
      });
    } else {
      const noLyrics = document.createElement("div");
      noLyrics.className = "lyrics-line";
      noLyrics.textContent = "No lyrics available for this song";
      this.lyricsContent.appendChild(noLyrics);
    }

    this.currentLyricIndex = -1;
  }

  updateActiveLyric() {
    if (!this.lyricsActive) return;

    const currentTime = this.audioPlayer.currentTime;
    const song = this.songs[this.currentSongIndex];

    if (!song.lyrics || song.lyrics.length === 0) return;

    const allLyrics = this.lyricsContent.querySelectorAll(".lyrics-line");

    let activeIndex = -1;
    for (let i = 0; i < song.lyrics.length; i++) {
      if (song.lyrics[i].time <= currentTime) {
        activeIndex = i;
      } else {
        break;
      }
    }

    if (activeIndex === this.currentLyricIndex) return;

    allLyrics.forEach((lyric) => {
      lyric.classList.remove("active", "active-prev", "active-next");
    });

    if (activeIndex >= 0) {
      const currentLyric = allLyrics[activeIndex];
      if (currentLyric) {
        currentLyric.classList.add("active");

        if (activeIndex > 0) {
          allLyrics[activeIndex - 1].classList.add("active-prev");
        }
        if (activeIndex < song.lyrics.length - 1) {
          allLyrics[activeIndex + 1].classList.add("active-next");
        }

        const lyricsBox = this.lyricsBox;
        const lyricTop = currentLyric.offsetTop;
        const lyricHeight = currentLyric.offsetHeight;
        const boxHeight = lyricsBox.clientHeight;

        const scrollTo = lyricTop - boxHeight / 2 + lyricHeight / 2;

        lyricsBox.scrollTo({
          top: scrollTo,
          behavior: "smooth",
        });
      }
    }

    this.currentLyricIndex = activeIndex;
  }

  toggleLyrics() {
    this.lyricsActive = !this.lyricsActive;
    const lyricsContainer = this.lyricsContainer;

    if (this.lyricsActive) {
      lyricsContainer.classList.add("active");
      this.musicPlayer.classList.add("lyrics-active");

      void lyricsContainer.offsetWidth;

      lyricsContainer.style.left = "-450px";
      lyricsContainer.style.transform = "translateX(-100%)";

      setTimeout(() => {
        lyricsContainer.style.left = "0";
        lyricsContainer.style.transform = "translateX(0)";
      }, 10);

      setTimeout(() => {
        this.updateActiveLyric();
      }, 300);
    } else {
      lyricsContainer.style.left = "-450px";
      lyricsContainer.style.transform = "translateX(-100%)";

      setTimeout(() => {
        lyricsContainer.classList.remove("active");
        this.musicPlayer.classList.remove("lyrics-active");
      }, 300);
    }
  }

  showPlaylist() {
    if (this.playlistVisible || this.playlistTransitioning) return;

    this.playlistTransitioning = true;
    this.playlistVisible = true;
    this.playlist.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    this.playlist.style.transform = "translateX(0)";
    this.playlist.style.opacity = "1";

    setTimeout(() => {
      this.playlistTransitioning = false;
    }, 300);
  }

  hidePlaylist() {
    if (!this.playlistVisible || this.playlistTransitioning) return;

    this.playlistTransitioning = true;
    this.playlistVisible = false;
    this.playlist.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    this.playlist.style.transform = "translateX(calc(100% - 20px))";
    this.playlist.style.opacity = "0";

    setTimeout(() => {
      this.playlistTransitioning = false;
    }, 300);
  }

  async selectSong(index) {
    if (index < 0 || index >= this.songs.length) return;

    const wasPlaying = this.isPlaying;

    if (this.isPlaying) {
      this.pause();
    }

    this.currentSongIndex = index;

    if (this.isShuffled) {
      this.currentShuffleIndex = this.shuffledIndices.indexOf(index);
    }

    const song = this.songs[this.currentSongIndex];

    if (this.preloadedAudios[index]) {
      this.audioPlayer.src = song.src;
      this.audioPlayer.currentTime = 0;
    } else {
      this.audioPlayer.src = song.src;
      this.preloadAudio(index);
    }

    this.updateSongDisplay();
    this.updateBackground(true);

    if (this.audioContext && this.audioContext.state === "suspended") {
      await this.audioContext.resume();
    }
    this.setupAudioAnalysis();

    if (wasPlaying) {
      try {
        await this.audioPlayer.play();
        this.isPlaying = true;
        this.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        this.animateVisualizer();
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }

    this.preloadAdjacentSongs(index);
  }

  preloadAdjacentSongs(currentIndex) {
    const nextIndex =
      currentIndex < this.songs.length - 1 ? currentIndex + 1 : 0;
    if (!this.preloadedAudios[nextIndex]) {
      this.preloadAudio(nextIndex);
    }

    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : this.songs.length - 1;
    if (!this.preloadedAudios[prevIndex]) {
      this.preloadAudio(prevIndex);
    }
  }

  async togglePlay() {
    if (this.songs.length === 0) return;

    if (this.isPlaying) {
      this.pause();
    } else {
      await this.play();
    }
  }

  async play() {
    try {
      if (!this.audioPlayer.src) {
        this.audioPlayer.src = this.songs[this.currentSongIndex].src;
      }

      await this.audioPlayer.play();
      this.isPlaying = true;
      this.playBtn.innerHTML = '<i class="fas fa-pause"></i>';

      if (!this.audioContext) {
        this.setupAudioAnalysis();
      }
      this.animateVisualizer();
    } catch (error) {
      console.error("Error playing audio:", error);
      alert(
        "Cannot play this audio file. Please check if the file exists and is in a supported format."
      );
    }
  }

  pause() {
    this.audioPlayer.pause();
    this.isPlaying = false;
    this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
    this.stopVisualizer();
  }

  prevSong() {
    if (this.songs.length === 0) return;

    const currentTime = this.audioPlayer.currentTime;
    const now = Date.now();
    const timeSinceSongStart = (now - this.lastSongStartTime) / 1000;
    const timeSinceLastSeek = this.lastSeekTime
      ? (now - this.lastSeekTime) / 1000
      : Infinity;

    if (timeSinceLastSeek < 2) {
      this.audioPlayer.currentTime = 0;
      this.updateProgress();
      if (this.isPlaying) {
        this.audioPlayer.play();
      }
      return;
    }

    if (currentTime > this.prevSongThreshold) {
      this.audioPlayer.currentTime = 0;
      this.updateProgress();
      this.lastSeekTime = Date.now();
      if (this.isPlaying) {
        this.audioPlayer.play();
      }
    } else {
      let prevIndex;

      if (this.isShuffled) {
        this.currentShuffleIndex =
          this.currentShuffleIndex > 0
            ? this.currentShuffleIndex - 1
            : this.shuffledIndices.length - 1;
        prevIndex = this.shuffledIndices[this.currentShuffleIndex];
      } else {
        prevIndex =
          this.currentSongIndex > 0
            ? this.currentSongIndex - 1
            : this.songs.length - 1;
      }

      this.selectSong(prevIndex);
    }
  }

  nextSong() {
    if (this.songs.length === 0) return;

    if (this.repeatMode === 1 && !this.isNextButtonPressed) {
      this.audioPlayer.currentTime = 0;
      if (this.isPlaying) {
        this.audioPlayer.play();
      }
      return;
    }

    this.isNextButtonPressed = false;

    let nextIndex;

    if (this.isShuffled) {
      this.currentShuffleIndex =
        this.currentShuffleIndex < this.shuffledIndices.length - 1
          ? this.currentShuffleIndex + 1
          : 0;
      nextIndex = this.shuffledIndices[this.currentShuffleIndex];
    } else {
      nextIndex =
        this.currentSongIndex < this.songs.length - 1
          ? this.currentSongIndex + 1
          : 0;
    }

    this.selectSong(nextIndex);
  }

  updateProgress() {
    if (this.audioPlayer.duration) {
      const progressPercent =
        (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
      this.progress.style.width = `${progressPercent}%`;
      this.currentTimeEl.textContent = this.formatTime(
        this.audioPlayer.currentTime
      );
    }
  }

  setupEventListeners() {
    this.playlistTrigger.addEventListener("mouseenter", () => {
      this.showPlaylist();
    });

    this.playlistTrigger.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!this.playlistHovered) {
          this.hidePlaylist();
        }
      }, 300);
    });

    this.playlist.addEventListener("mouseenter", () => {
      this.playlistHovered = true;
    });

    this.playlist.addEventListener("mouseleave", () => {
      this.playlistHovered = false;
      this.hidePlaylist();
    });

    this.albumArt.addEventListener("click", () => {
      this.toggleLyrics();
    });

    this.playBtn.addEventListener("click", () => this.togglePlay());
    this.prevBtn.addEventListener("click", () => this.prevSong());

    this.nextBtn.addEventListener("click", () => {
      this.isNextButtonPressed = true;
      this.nextSong();
    });

    this.shuffleBtn.addEventListener("click", () => this.toggleShuffle());
    this.repeatBtn.addEventListener("click", () => this.toggleRepeat());

    this.progressBar.addEventListener("click", (e) => {
      if (this.audioPlayer.duration) {
        const clickX = e.offsetX;
        const width = this.progressBar.offsetWidth;
        const newTime = (clickX / width) * this.audioPlayer.duration;
        this.audioPlayer.currentTime = newTime;
      }
    });

    this.progressBar.addEventListener("mousemove", (e) => {
      if (this.audioPlayer.duration) {
        const width = this.progressBar.offsetWidth;
        const clickX = e.offsetX;
        const percent = clickX / width;
        const time = percent * this.audioPlayer.duration;

        this.progressTooltip.textContent = this.formatTime(time);
        this.progressTooltip.style.left = `${percent * 100}%`;
        this.progressTooltip.style.opacity = "1";
      }
    });

    this.progressBar.addEventListener("mouseleave", () => {
      this.progressTooltip.style.opacity = "0";
    });

    document.addEventListener("keydown", (e) => {
      if (this.isTypingInSearch) return;

      switch (e.code) {
        case "Space":
          e.preventDefault();
          this.togglePlay();
          break;
          break;
        case "ArrowLeft":
          this.prevSong();
          break;
        case "ArrowRight":
          this.nextSong();
          break;
        case "KeyS":
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            this.toggleShuffle();
          }
          break;
        case "KeyR":
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            this.toggleRepeat();
          }
          break;
      }
    });
  }

  setupAudioEvents() {
    this.audioPlayer.addEventListener("timeupdate", () => {
      this.updateProgress();
      this.updateActiveLyric();
    });

    this.audioPlayer.addEventListener("loadedmetadata", () => {
      this.durationEl.textContent = this.formatTime(this.audioPlayer.duration);

      const activeItem = this.playlistContainer.querySelector(
        ".playlist-item.active"
      );
      if (activeItem) {
        const durationElement = activeItem.querySelector(
          ".playlist-item-duration"
        );
        if (durationElement) {
          durationElement.textContent = this.formatTime(
            this.audioPlayer.duration
          );
        }
      }
    });

    this.audioPlayer.addEventListener("ended", () => {
      if (this.repeatMode === 1) {
        this.audioPlayer.currentTime = 0;
        this.audioPlayer.play();
      } else if (this.repeatMode === 2) {
        if (
          (this.isShuffled &&
            this.currentShuffleIndex === this.shuffledIndices.length - 1) ||
          (!this.isShuffled && this.currentSongIndex === this.songs.length - 1)
        ) {
          this.pause();
        } else {
          this.nextSong();
        }
      } else {
        this.nextSong();
      }
    });

    this.audioPlayer.addEventListener("error", (e) => {
      console.error("Audio error:", e);
      this.pause();
      this.durationEl.textContent = "0:00";
    });
  }

  setupSearch() {
    this.searchInput.addEventListener("input", (e) => {
      this.filterSongs(e.target.value);
    });

    this.searchInput.addEventListener("keydown", (e) => {
      this.isTypingInSearch = true;

      if (e.code === "Space") {
        e.stopPropagation();
      }

      if (e.key === "Escape") {
        this.searchInput.value = "";
        this.filterSongs("");
      }
    });

    this.searchInput.addEventListener("keyup", () => {
      this.isTypingInSearch = false;
    });

    this.clearSearch.addEventListener("click", () => {
      this.searchInput.value = "";
      this.filterSongs("");
      this.searchInput.focus();
    });
  }

  filterSongs(searchTerm) {
    const term = searchTerm.toLowerCase().trim();

    if (term === "") {
      this.isSearching = false;
      this.renderPlaylist();
      return;
    }

    this.isSearching = true;
    this.searchResults = this.songs.filter((song) => {
      return song.title.toLowerCase().includes(term);
    });

    this.renderFilteredPlaylist();
  }

  renderFilteredPlaylist() {
    if (this.searchResults.length === 0) {
      this.playlistContainer.innerHTML = `
                  <div class="no-results">
                    No songs found
                  </div>
                `;
      return;
    }

    const playlistHTML = this.searchResults
      .map((song) => {
        const index = this.songs.findIndex(
          (s) => s.title === song.title && s.artist === song.artist
        );
        return `
                <div class="playlist-item ${
                  index === this.currentSongIndex ? "active" : ""
                }" data-index="${index}">
                  <div class="album-art-small" style="background-image: url('${
                    song.albumArt
                  }')"></div>
                  <div class="playlist-item-info">
                    <div class="playlist-item-title">${song.title}</div>
                    <div class="playlist-item-artist">${song.artist}</div>
                    <div class="playlist-item-duration">--:--</div>
                  </div>
                </div>
              `;
      })
      .join("");

    this.playlistContainer.innerHTML = playlistHTML;

    this.playlistContainer
      .querySelectorAll(".playlist-item")
      .forEach((item) => {
        item.addEventListener("click", (e) => {
          const index = parseInt(e.currentTarget.dataset.index);
          this.selectSong(index);
          this.searchInput.value = "";
          this.filterSongs("");
        });
      });
  }
  destroy() {
    if (this.backgroundChangeInterval) {
      clearInterval(this.backgroundChangeInterval);
    }
    this.stopVisualizer();
    if (this.audioContext) {
      this.audioContext.close();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const player = new MusicPlayer();

  window.addEventListener("beforeunload", () => {
    player.destroy();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.querySelector(".welcome-overlay");
  const welcomeSound = document.getElementById("welcomeSound");

  const playWelcomeSound = () => {
    welcomeSound.volume = 0.3;
    welcomeSound.play().catch((e) => console.log("Autoplay prevented:", e));
  };

  const hideWelcome = () => {
    welcome.classList.add("fade-out");
    setTimeout(() => welcome.remove(), 800);
  };

  playWelcomeSound();
  const minDisplayTime = 1500;
  const startTime = Date.now();

  const checkLoad = () => {
    const elapsed = Date.now() - startTime;
    if (elapsed >= minDisplayTime && document.readyState === "complete") {
      hideWelcome();
    } else if (elapsed >= 3000) {
      hideWelcome();
    } else {
      requestAnimationFrame(checkLoad);
    }
  };

  checkLoad();
});
