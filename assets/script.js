class MusicPlayer {
  constructor() {
    this.songs = [
      {
        title: "About You",
        artist: "The 1975",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/The 1975 - About You.opus",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/1975.jpg",
        lyricsKey: "about_you",
      },
      {
        title: "A Sorrowful Reunion",
        artist: "Reality Club",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/A Sorrowful Reunion - Reality Club.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/rc.png",
        lyricsKey: "sorrowful",
      },
      {
        title: "Let it Happen",
        artist: "Tame Impala",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Tame Impala - Let It Happen.opus",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/tame.jpeg",
        lyricsKey: "let_it_happen",
      },
      {
        title: "Apocalypse",
        artist: "CAS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/CAS - Apocalypse.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cas.jpeg",
        lyricsKey: "apocalypse",
      },
      {
        title: "Cry",
        artist: "CAS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/CAS - Cry.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cas.jpeg",
        lyricsKey: "cry",
      },
      {
        title: "K.",
        artist: "CAS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/CAS - K..mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cas.jpeg",
        lyricsKey: "k",
      },
      {
        title: "Sunsetz",
        artist: "CAS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/CAS - Sunsetz.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cas.jpeg",
        lyricsKey: "sunsetz",
      },
      {
        title: "Chezile",
        artist: "Beanie",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Chezile - Beanie.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/chezile.jpeg",
        lyricsKey: "chezile",
      },
      {
        title: "Yellow",
        artist: "Coldplay",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Coldplay - Yellow.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cold.jpeg",
        lyricsKey: "yellow",
      },
      {
        title: "Trouble",
        artist: "Coldplay",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Coldplay - Trouble.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cold.jpeg",
        lyricsKey: "trouble",
      },
      {
        title: "Welcome And Goodbye",
        artist: "Dream, Ivory",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Dream, ivory - Welcome and Goodbye.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/dream.jpeg",
        lyricsKey: "welcome_and_goodbye",
      },
      {
        title: "Walking Back Home",
        artist: "FUR",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/FUR - Walking Back Home.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/fur.jpeg",
        lyricsKey: "walking_back_home",
      },
      {
        title: "Iris",
        artist: "Goo Goo Dolls",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Goo Goo Dolls - Iris.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/goo.jpg",
        lyricsKey: "iris",
      },
      {
        title: "Tip Toe",
        artist: "HYBS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/HYBS - Tip Toe.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/hybs.jpeg",
        lyricsKey: "tip_toe",
      },
      {
        title: "Drunk text",
        artist: "Henry Moodie",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Henry Moodie - Drunk text.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/henry.jpeg",
        lyricsKey: "drunk_text",
      },
      {
        title: "Car's Outside",
        artist: "James Arthur",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/James Arthur - Car's Outside.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/james.jpeg",
        lyricsKey: "cars_outside",
      },
      {
        title: "Everything Goes On",
        artist: "Porter Robinson",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Everything Goes On - Porter Robinson.opus",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/porter.jpeg",
        lyricsKey: "everything_goes_on",
      },
      {
        title: "No Other Heart",
        artist: "Mac DeMarco",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Mac DeMarco - No Other Heart.opus",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/mac-heart.jpeg",
        lyricsKey: "no_other_heart",
      },
      {
        title: "Chamber Of Reflection",
        artist: "Mac DeMarco",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Mac DeMarco - Chamber Of Reflection.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/mac.jpg",
        lyricsKey: "chamber_of_reflection",
      },
      {
        title: "Moonlight On The River",
        artist: "Mac DeMarco",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Mac DeMarco - Moonlight On The River.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/mac.jpg",
        lyricsKey: "moonlight_on_the_river",
      },
      {
        title: "Exit Music",
        artist: "RadioHead",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/RadioHead - Exit Music.opus",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/radio.jpeg",
        lyricsKey: "exit_music",
      },
      {
        title: "Let Down",
        artist: "RadioHead",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/RadioHead - Let Down.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/radio.jpeg",
        lyricsKey: "let_down",
      },
      {
        title: "No Surprises",
        artist: "RadioHead",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Radiohead - No Surprises.opus",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/radio.jpeg",
        lyricsKey: "no_surprises",
      },
      {
        title: "Creep",
        artist: "RadioHead",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Radiohead - Creep.opus",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/radiohead-pablohoney.jpeg",
        lyricsKey: "creep",
      },
      {
        title: "Back to friends",
        artist: "Sombr",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Sombr - Back to friends.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/sombr.jpeg",
        lyricsKey: "back_to_friends",
      },
      {
        title: "Bad Habit",
        artist: "Steve Lacy",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Steve Lacy - Bad Habit.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/steve.jpg",
        lyricsKey: "bad_habit",
      },
      {
        title: "Vacations",
        artist: "Telephones",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Telephones - Vacations.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/tele.png",
        lyricsKey: "vacations",
      },
      {
        title: "Seasons",
        artist: "Wave To Earth",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Wave to earth - Seasons.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/wave.jpeg",
        lyricsKey: "seasons",
      },
      {
        title: "Bad",
        artist: "Wave To Earth",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/wave to earth - bad.opus",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/wave.jpeg",
        lyricsKey: "bad",
      },
      {
        title: "Love",
        artist: "Wave To Earth",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/wave to earth - love.opus",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/wave.jpeg",
        lyricsKey: "love",
      },
      {
        title: "Favorite Lesson",
        artist: "Yaeow",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Yaeow - Favorite lesson.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/yaeow.jpeg",
        lyricsKey: "favorite_lesson",
      },
      {
        title: "Missin Something",
        artist: "Zach Templar",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Zach Templar - Missin something.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/zach.jpeg",
        lyricsKey: "missin_something",
      },
      {
        title: "Here With Me",
        artist: "d4vd",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/d4vd - Here With Me.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/d4vd.jpeg",
        lyricsKey: "here_with_me",
      },
      {
        title: "Romantic Homicide",
        artist: "d4vd",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/d4vd - Romantic Homicide.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/d4vd.jpeg",
        lyricsKey: "romantic_homicide",
      },
    ];
    this.currentSongIndex = Math.floor(Math.random() * this.songs.length);
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
    this.lyricsActive = false;
    this.currentLyricIndex = -1;

    this.networkInfo = this.detectNetworkCondition();
    this.maxParallelPreloads = this.networkInfo.parallelLoads;
    this.preloadRetryLimit = this.networkInfo.retryLimit;
    this.preloadRetryDelay = this.networkInfo.retryDelay;
    this.preloadBufferSize = this.networkInfo.bufferSize;
    this.preloadTimeout = this.networkInfo.timeout;
    this.preloadQueue = [];
    this.preloadedAudios = {};
    this.currentlyPreloading = 0;
    this.preloadAttempts = {};
    this.preloadPriorities = [];

    this.setupNetworkListener();

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
      "audioPreloadContainer",
    );
    this.body = document.body;
    this.musicPlayer = document.getElementById("musicPlayer");
    this.lyricsContainer = document.getElementById("lyricsContainer");
    this.lyricsContent = document.getElementById("lyricsContent");
    this.closeLyrics = document.getElementById("closeLyrics");
    this.lyricsBox = this.lyricsContainer.querySelector(".lyrics-box");

    this.toastContainer = document.getElementById("toastContainer");
    this.toastIcon = this.toastContainer.querySelector(".toast-icon");
    this.toastMessage = this.toastContainer.querySelector(".toast-message");
    this.toastTimeout = null;

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

    this.sleepTimerBtn = document.getElementById("sleepTimerBtn");
    this.sleepTimerMenu = document.getElementById("sleepTimerMenu");
    this.sleepTimerDisplay = document.getElementById("sleepTimerDisplay");
    this.sleepTimerTimeout = null;
    this.sleepTimerEndTime = null;
    this.sleepTimerInterval = null;

    this.bgSwitcherBtn = document.getElementById("bgSwitcherBtn");
    this.bgSwitcherMenu = document.getElementById("bgSwitcherMenu");
    this.backgroundMode = localStorage.getItem("harmony_bg_mode") || "rotation";

    this.crossfadeEnabled = true;
    this.crossfadeDuration = 1000;
    this.isCrossfading = false;
    this.crossfadeAudio = null;

    this.init();
  }

  async init() {
    this.setupVisualizer();
    this.setupEventListeners();
    this.setupAudioEvents();
    this.setupSearch();
    this.setupCursorHide();
    this.setupSleepTimer();
    this.setupBackgroundSwitcher();
    this.renderPlaylist();
    this.updateSongDisplay();
    this.generateShuffledIndices();
    this.currentShuffleIndex = this.shuffledIndices.indexOf(
      this.currentSongIndex,
    );
    this.updateBackground(false);
    this.startBackgroundRotation();
    this.startPreloading();
  }

  setupCursorHide() {
    let cursorTimeout;

    document.addEventListener("mousemove", () => {
      document.body.style.cursor = "auto";
      clearTimeout(cursorTimeout);

      cursorTimeout = setTimeout(() => {
        document.body.style.cursor = "none";
      }, 5000);
    });
  }

  startPreloading() {
    this.clearPreloads();
    this.preloadAttempts = {};

    if (!this.preloadedAudios[this.currentSongIndex]) {
      this.preloadPriorities.push(this.currentSongIndex);
    }

    for (let i = 1; i <= this.preloadBufferSize; i++) {
      const nextIndex = (this.currentSongIndex + i) % this.songs.length;
      if (!this.preloadedAudios[nextIndex]) {
        this.preloadPriorities.push(nextIndex);
      }
    }

    for (let i = 1; i <= this.preloadBufferSize; i++) {
      const prevIndex =
        (this.currentSongIndex - i + this.songs.length) % this.songs.length;
      if (
        !this.preloadedAudios[prevIndex] &&
        !this.preloadPriorities.includes(prevIndex)
      ) {
        this.preloadPriorities.push(prevIndex);
      }
    }

    for (let i = 0; i < this.songs.length; i++) {
      if (!this.preloadedAudios[i] && !this.preloadPriorities.includes(i)) {
        this.preloadPriorities.push(i);
      }
    }

    this.processPreloadQueue();
  }

  processPreloadQueue() {
    while (
      this.preloadPriorities.length > 0 &&
      this.currentlyPreloading < this.maxParallelPreloads
    ) {
      const index = this.preloadPriorities.shift();
      this.preloadAudio(index);
    }
  }

  preloadAudio(index) {
    if (this.preloadedAudios[index]) return;

    if (!this.preloadAttempts[index]) {
      this.preloadAttempts[index] = 0;
    }

    if (this.preloadAttempts[index] >= this.preloadRetryLimit) {
      console.warn(`Max preload attempts reached for song ${index}`);
      return;
    }

    this.preloadAttempts[index]++;
    this.currentlyPreloading++;

    const song = this.songs[index];
    const audio = document.createElement("audio");
    audio.preload = "auto";
    audio.src = song.src;
    audio.crossOrigin = "anonymous";
    audio.dataset.songIndex = index;

    const onLoadSuccess = () => {
      this.preloadedAudios[index] = audio;
      this.currentlyPreloading--;

      const playlistItem = this.playlistContainer.querySelector(
        `.playlist-item[data-index="${index}"]`,
      );
      if (playlistItem) {
        playlistItem.classList.add("preloaded");
      }

      this.processPreloadQueue();
    };

    const onLoadError = () => {
      console.error(
        `Failed to preload song: ${song.title} (attempt ${this.preloadAttempts[index]})`,
      );
      this.currentlyPreloading--;
      audio.remove();

      if (this.preloadAttempts[index] < this.preloadRetryLimit) {
        setTimeout(() => {
          this.preloadAudio(index);
        }, this.preloadRetryDelay);
      } else {
        this.processPreloadQueue();
      }
    };

    audio.oncanplaythrough = onLoadSuccess;
    audio.onerror = onLoadError;
    audio.onabort = onLoadError;

    const loadTimeout = setTimeout(() => {
      if (!audio.readyState) {
        console.warn(`Preload timeout for song ${index}`);
        audio.src = "";
        onLoadError();
      }
    }, this.preloadTimeout);

    audio.onloadeddata = () => clearTimeout(loadTimeout);

    this.audioPreloadContainer.appendChild(audio);
  }

  clearPreloads() {
    Object.values(this.preloadedAudios).forEach((audio) => {
      audio.src = "";
      audio.remove();
    });

    this.preloadedAudios = {};
    this.currentlyPreloading = 0;
    this.preloadPriorities = [];

    document.querySelectorAll(".playlist-item.preloaded").forEach((item) => {
      item.classList.remove("preloaded");
    });
  }

  detectNetworkCondition() {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    const defaultSettings = {
      parallelLoads: 2,
      retryLimit: 3,
      retryDelay: 3000,
      bufferSize: 3,
      timeout: 30000,
      connectionType: "unknown",
    };

    if (!connection) {
      console.log("🌐 Network API not supported, using default settings");
      return defaultSettings;
    }

    const effectiveType = connection.effectiveType;
    const downlink = connection.downlink;
    const saveData = connection.saveData;

    console.log(
      `🌐 Network detected: ${effectiveType}, ${downlink}Mbps, saveData: ${saveData}`,
    );

    if (saveData) {
      return {
        parallelLoads: 1,
        retryLimit: 1,
        retryDelay: 5000,
        bufferSize: 1,
        timeout: 60000,
        connectionType: "data-saver",
      };
    }

    switch (effectiveType) {
      case "4g":
        return {
          parallelLoads: 3,
          retryLimit: 2,
          retryDelay: 2000,
          bufferSize: 5,
          timeout: 20000,
          connectionType: "4g",
        };
      case "3g":
        return {
          parallelLoads: 2,
          retryLimit: 3,
          retryDelay: 3000,
          bufferSize: 3,
          timeout: 30000,
          connectionType: "3g",
        };
      case "2g":
        return {
          parallelLoads: 1,
          retryLimit: 3,
          retryDelay: 5000,
          bufferSize: 2,
          timeout: 45000,
          connectionType: "2g",
        };
      case "slow-2g":
        return {
          parallelLoads: 1,
          retryLimit: 2,
          retryDelay: 8000,
          bufferSize: 1,
          timeout: 60000,
          connectionType: "slow-2g",
        };
      default:
        if (downlink >= 10) {
          return {
            parallelLoads: 4,
            retryLimit: 2,
            retryDelay: 1500,
            bufferSize: 6,
            timeout: 15000,
            connectionType: "fast",
          };
        } else if (downlink >= 2) {
          return {
            parallelLoads: 3,
            retryLimit: 2,
            retryDelay: 2000,
            bufferSize: 5,
            timeout: 20000,
            connectionType: "medium",
          };
        }
        return defaultSettings;
    }
  }

  setupNetworkListener() {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    if (!connection) return;

    connection.addEventListener("change", () => {
      const previousType = this.networkInfo.connectionType;
      this.networkInfo = this.detectNetworkCondition();

      this.maxParallelPreloads = this.networkInfo.parallelLoads;
      this.preloadRetryLimit = this.networkInfo.retryLimit;
      this.preloadRetryDelay = this.networkInfo.retryDelay;
      this.preloadBufferSize = this.networkInfo.bufferSize;
      this.preloadTimeout = this.networkInfo.timeout;

      console.log(
        `🔄 Network changed: ${previousType} → ${this.networkInfo.connectionType}`,
      );

      if (
        this.isWorseConnection(previousType, this.networkInfo.connectionType)
      ) {
        console.log("📉 Connection degraded, reducing preload activity");
        this.updatePreloadPriorities(this.currentSongIndex);
      }
    });
  }

  isWorseConnection(oldType, newType) {
    const quality = {
      fast: 6,
      "4g": 5,
      medium: 4,
      "3g": 3,
      "2g": 2,
      "slow-2g": 1,
      "data-saver": 0,
      unknown: 3,
    };
    return (quality[newType] || 3) < (quality[oldType] || 3);
  }

  updatePreloadPriorities(currentIndex) {
    const newPriorities = [];

    for (let i = 1; i <= this.preloadBufferSize; i++) {
      const nextIndex = (currentIndex + i) % this.songs.length;
      if (!this.preloadedAudios[nextIndex]) {
        newPriorities.push(nextIndex);
      }
    }

    for (let i = 1; i <= this.preloadBufferSize; i++) {
      const prevIndex =
        (currentIndex - i + this.songs.length) % this.songs.length;
      if (
        !this.preloadedAudios[prevIndex] &&
        !newPriorities.includes(prevIndex)
      ) {
        newPriorities.push(prevIndex);
      }
    }

    for (let i = 0; i < this.songs.length; i++) {
      if (!this.preloadedAudios[i] && !newPriorities.includes(i)) {
        newPriorities.push(i);
      }
    }

    this.preloadPriorities = newPriorities;
    this.processPreloadQueue();
  }

  setupVisualizer() {
    if (!this.visualizer) return;

    this.visualizer.innerHTML = "";
    const barCount = 32;
    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement("div");
      bar.className = "visualizer-bar";
      bar.style.height = `${Math.random() * 20 + 2}px`;
      this.visualizer.appendChild(bar);
    }

    this.visualizerBars = Array.from(
      this.visualizer.querySelectorAll(".visualizer-bar"),
    );
  }

  startBackgroundRotation() {
    if (this.backgroundMode !== "rotation") return;

    if (this.backgroundChangeInterval) {
      clearInterval(this.backgroundChangeInterval);
    }

    this.backgroundChangeInterval = setInterval(() => {
      if (this.backgroundMode === "rotation") {
        this.updateBackground(true);
      }
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

  updateAlbumBackground(albumArtUrl) {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = 50;
        canvas.height = 50;

        ctx.drawImage(img, 0, 0, 50, 50);
        const imageData = ctx.getImageData(0, 0, 50, 50).data;

        const colorCounts = {};

        for (let i = 0; i < imageData.length; i += 4) {
          const r = Math.round(imageData[i] / 24) * 24;
          const g = Math.round(imageData[i + 1] / 24) * 24;
          const b = Math.round(imageData[i + 2] / 24) * 24;

          const brightness = (r + g + b) / 3;
          if (brightness < 20 || brightness > 235) continue;

          const key = `${r},${g},${b}`;
          colorCounts[key] = (colorCounts[key] || 0) + 1;
        }

        const sortedColors = Object.entries(colorCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .map(([color]) => color.split(",").map(Number));

        const boostColor = (color, amount = 40) => {
          return color.map((c) => Math.min(255, c + amount));
        };

        const isGreyish = (color) => {
          const max = Math.max(...color);
          const min = Math.min(...color);
          return max - min < 30;
        };

        const addTint = (color, tint) => {
          return color.map((c, i) => Math.min(255, c + tint[i]));
        };

        let c1, c2, c3;
        if (sortedColors.length >= 3) {
          c1 = boostColor(sortedColors[0], 50);
          c2 = boostColor(sortedColors[1], 40);
          c3 = boostColor(sortedColors[2], 30);
        } else if (sortedColors.length === 2) {
          c1 = boostColor(sortedColors[0], 50);
          c2 = boostColor(sortedColors[1], 40);
          c3 = boostColor(sortedColors[0], 20);
        } else {
          c1 = boostColor(sortedColors[0] || [100, 50, 80], 50);
          c2 = c1.map((c) => Math.min(255, c + 30));
          c3 = c1.map((c) => Math.max(0, c - 20));
        }

        if (isGreyish(c1) && isGreyish(c2)) {
          c1 = addTint(c1, [40, 20, -10]);
          c2 = addTint(c2, [30, 15, 0]);
          c3 = addTint(c3, [20, 10, 5]);
        }

        this.backgroundBlur.style.transition =
          "background-image 1.5s ease-in-out, filter 1s ease-in-out";
        this.backgroundBlur.style.backgroundImage = `url('${albumArtUrl}')`;
        this.backgroundBlur.style.backgroundSize = "cover";
        this.backgroundBlur.style.backgroundPosition = "center";
        this.backgroundBlur.style.filter =
          "blur(40px) saturate(1.8) brightness(0.6)";
        this.backgroundBlur.style.animation =
          "albumBgMove 20s ease-in-out infinite";

        let overlay = document.getElementById("albumGradientOverlay");
        if (!overlay) {
          overlay = document.createElement("div");
          overlay.id = "albumGradientOverlay";
          overlay.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            z-index: -1;
            pointer-events: none;
            transition: opacity 1.5s ease-in-out, background 2s ease-in-out;
            animation: waveFlow 20s ease-in-out infinite;
            transform-origin: center center;
          `;

          if (!document.getElementById("waveFlowKeyframes")) {
            const style = document.createElement("style");
            style.id = "waveFlowKeyframes";
            style.textContent = `
              @keyframes waveFlow {
                0%, 100% {
                  transform: scale(1.2) translate(0%, 0%);
                }
                25% {
                  transform: scale(1.25) translate(2%, 3%);
                }
                50% {
                  transform: scale(1.3) translate(-2%, 2%);
                }
                75% {
                  transform: scale(1.22) translate(3%, -2%);
                }
              }
              
              html, body {
                overflow-x: hidden;
              }
            `;
            document.head.appendChild(style);
          }

          document.body.appendChild(overlay);
        }

        overlay.style.background = `
          radial-gradient(ellipse 100% 80% at 30% 20%, rgba(${c1[0]}, ${c1[1]}, ${c1[2]}, 0.6) 0%, transparent 50%),
          radial-gradient(ellipse 80% 100% at 70% 30%, rgba(${c2[0]}, ${c2[1]}, ${c2[2]}, 0.5) 0%, transparent 45%),
          radial-gradient(ellipse 90% 70% at 60% 80%, rgba(${c3[0]}, ${c3[1]}, ${c3[2]}, 0.5) 0%, transparent 50%),
          radial-gradient(ellipse 70% 90% at 20% 70%, rgba(${c2[0]}, ${c2[1]}, ${c2[2]}, 0.4) 0%, transparent 45%),
          radial-gradient(ellipse 60% 60% at 80% 90%, rgba(${c1[0]}, ${c1[1]}, ${c1[2]}, 0.35) 0%, transparent 40%)
        `;
        overlay.style.opacity = "1";
      } catch (e) {
        console.warn("Color extraction failed:", e);
        this.backgroundBlur.style.backgroundImage = `url('${albumArtUrl}')`;
        this.backgroundBlur.style.filter = "blur(80px) brightness(0.5)";
      }
    };

    img.onerror = () => {
      this.backgroundBlur.style.backgroundImage = `url('${albumArtUrl}')`;
      this.backgroundBlur.style.filter = "blur(80px)";
    };

    img.src = albumArtUrl;
  }

  setupAudioAnalysis() {
    if (!this.audioContext) {
      this.audioContext = new (
        window.AudioContext || window.webkitAudioContext
      )();
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;
      this.source = this.audioContext.createMediaElementSource(
        this.audioPlayer,
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
    if (!this.analyser || !this.visualizerBars) return;

    this.analyser.getByteFrequencyData(this.dataArray);

    const binSkip = Math.floor(
      this.dataArray.length / this.visualizerBars.length,
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

    const currentPos = this.shuffledIndices.indexOf(this.currentSongIndex);
    if (currentPos > 0) {
      this.shuffledIndices.splice(currentPos, 1);
      this.shuffledIndices.unshift(this.currentSongIndex);
    }

    this.currentShuffleIndex = 0;
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

    this.renderPlaylist();

    this.showToast(
      "fas fa-random",
      this.isShuffled ? "Shuffle: On" : "Shuffle: Off",
    );
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
        this.showToast("fas fa-repeat", "Repeat: Off");
        break;
      case 1:
        icon.className = "fas fa-repeat";
        this.repeatBtn.classList.add("active");
        this.repeatBtn.title = "Repeat One";
        this.showToast("fas fa-repeat", "Repeat: One");
        break;
      case 2:
        icon.className = "fas fa-forward-step";
        this.repeatBtn.classList.add("active");
        this.repeatBtn.title = "Play Once";
        this.showToast("fas fa-forward-step", "Play Once");
        break;
    }
  }

  renderPlaylist() {
    const displayOrder = this.isShuffled
      ? this.shuffledIndices
      : [...Array(this.songs.length).keys()];

    const playlistHTML = displayOrder
      .map((songIndex) => {
        const song = this.songs[songIndex];
        return `
                      <div class="playlist-item ${
                        songIndex === this.currentSongIndex ? "active" : ""
                      }" data-index="${songIndex}">
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

    if (this.backgroundMode === "album") {
      this.updateAlbumBackground(song.albumArt);
    }

    this.durationEl.textContent = "--:--";

    this.playlistContainer
      .querySelectorAll(".playlist-item")
      .forEach((item) => {
        const songIndex = parseInt(item.dataset.index);
        item.classList.toggle("active", songIndex === this.currentSongIndex);
      });

    this.updateLyricsDisplay();
  }

  async updateLyricsDisplay() {
    this.lyricsContent.style.opacity = "0";
    this.lyricsContent.innerHTML = "";
    const song = this.songs[this.currentSongIndex];

    const loadingEl = document.createElement("div");
    loadingEl.className = "no-lyrics-message";
    loadingEl.textContent = "Loading lyrics...";
    this.lyricsContent.appendChild(loadingEl);

    let lyrics = null;
    if (song.lyricsKey && typeof lrcLoader !== "undefined") {
      lyrics = await lrcLoader.getLyrics(song.lyricsKey);
    } else if (song.lyricsKey && typeof lyricsData !== "undefined") {
      lyrics = lyricsData[song.lyricsKey]?.lines;
    }

    this.currentLyrics = lyrics;

    this.lyricsContent.innerHTML = "";

    if (lyrics && lyrics.length > 0) {
      lyrics.forEach((line, index) => {
        const lyricLine = document.createElement("div");
        lyricLine.className = "lyrics-line hidden-lyric";

        if (line.text === "•••") {
          lyricLine.classList.add("dots-placeholder");
          lyricLine.innerHTML =
            '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
        } else {
          lyricLine.textContent = line.text;
        }

        lyricLine.dataset.time = line.time;
        lyricLine.dataset.index = index;

        lyricLine.addEventListener("click", () => {
          const seekTime = parseFloat(lyricLine.dataset.time);
          if (!isNaN(seekTime)) {
            this.isClickingLyric = true;
            this.isAutoScrolling = true;
            this.lyricsBox.classList.remove("user-scrolling");

            this.audioPlayer.currentTime = seekTime;
            this.currentLyricIndex = -1;
            this.updateActiveLyric();

            setTimeout(() => {
              this.isClickingLyric = false;
              this.isAutoScrolling = false;
            }, 1000);
          }
        });

        this.lyricsContent.appendChild(lyricLine);
      });
    } else {
      const noLyrics = document.createElement("div");
      noLyrics.className = "no-lyrics-message";
      noLyrics.textContent = "No lyrics available for this song";
      this.lyricsContent.appendChild(noLyrics);
    }

    this.currentLyricIndex = -1;

    this.isChangingSong = true;
    this.isAutoScrolling = true;

    if (this.lyricsBox) {
      this.lyricsBox.classList.remove("user-scrolling");
      this.lyricsBox.scrollTop = 0;
    }

    if (this.isPlaying) {
      document.body.classList.add("is-playing");
    }

    if (this.lyricsActive) {
      requestAnimationFrame(() => {
        this.currentLyricIndex = -1;

        const currentTime = this.audioPlayer.currentTime || 0;
        if (lyrics && lyrics.length > 0) {
          let activeIndex = -1;
          for (let i = 0; i < lyrics.length; i++) {
            if (lyrics[i].time <= currentTime) {
              activeIndex = i;
            } else {
              break;
            }
          }

          if (currentTime < 0.5 && activeIndex === -1) {
            activeIndex = 0;
          }

          if (activeIndex >= 0) {
            const allLyrics =
              this.lyricsContent.querySelectorAll(".lyrics-line");
            const targetLyric = allLyrics[activeIndex];
            if (targetLyric && this.lyricsBox) {
              const lyricTop = targetLyric.offsetTop;
              const lyricHeight = targetLyric.offsetHeight;
              const boxHeight = this.lyricsBox.clientHeight;
              const scrollTo = lyricTop - boxHeight / 2 + lyricHeight / 2;

              this.lyricsBox.scrollTop = Math.max(0, scrollTo);
            }
          }
        }

        this.updateActiveLyric();

        this.lyricsContent.style.opacity = "1";

        setTimeout(() => {
          this.isChangingSong = false;
          this.isAutoScrolling = false;
        }, 300);
      });
    } else {
      this.lyricsContent.style.opacity = "1";
      setTimeout(() => {
        this.isChangingSong = false;
        this.isAutoScrolling = false;
      }, 300);
    }

    if (!this.lyricsScrollSetup) {
      this.lyricsScrollSetup = true;
      let scrollTimeout;
      this.isAutoScrolling = false;

      const setRecentlyVisible = () => {
        this.recentlyBecameVisible = true;
        setTimeout(() => {
          this.recentlyBecameVisible = false;
        }, 1000);
      };

      document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
          setRecentlyVisible();
        }
      });

      window.addEventListener("focus", () => {
        setRecentlyVisible();
      });

      this.lyricsBox.addEventListener(
        "scroll",
        () => {
          if (
            this.isAutoScrolling ||
            this.recentlyBecameVisible ||
            this.isChangingSong ||
            this.isClickingLyric
          )
            return;

          this.lyricsBox.classList.add("user-scrolling");

          clearTimeout(scrollTimeout);

          scrollTimeout = setTimeout(() => {
            this.lyricsBox.classList.remove("user-scrolling");
            this.scrollToActiveLyric();
          }, 3000);
        },
        { passive: true },
      );
    }
  }

  scrollToActiveLyric() {
    if (!this.lyricsBox || !this.lyricsActive) return;

    const activeLyric = this.lyricsContent.querySelector(".lyrics-line.active");
    if (activeLyric) {
      this.isAutoScrolling = true;
      const lyricsBox = this.lyricsBox;
      const boxHeight = lyricsBox.clientHeight;
      const lyricTop = activeLyric.offsetTop;
      const lyricHeight = activeLyric.offsetHeight;
      const scrollTo = lyricTop - boxHeight / 2 + lyricHeight / 2;

      lyricsBox.scrollTo({
        top: Math.max(0, scrollTo),
        behavior: "smooth",
      });

      setTimeout(() => {
        this.isAutoScrolling = false;
      }, 500);
    }
  }

  updateActiveLyric() {
    if (!this.lyricsActive) return;

    const currentTime = this.audioPlayer.currentTime;

    const lyrics = this.currentLyrics;

    if (!lyrics || lyrics.length === 0) return;

    const allLyrics = this.lyricsContent.querySelectorAll(".lyrics-line");

    let activeIndex = -1;
    for (let i = 0; i < lyrics.length; i++) {
      if (lyrics[i].time <= currentTime) {
        activeIndex = i;
      } else {
        break;
      }
    }

    if (activeIndex === this.currentLyricIndex) return;

    let maxWords = 0;
    this.currentLyrics.forEach((line) => {
      if (line.text && line.text !== "•••") {
        const wordCount = line.text.split(/\s+/).length;
        if (wordCount > maxWords) maxWords = wordCount;
      }
    });
    const visibleRange = maxWords > 10 ? 2 : 3;

    allLyrics.forEach((lyric) => {
      lyric.classList.remove(
        "active",
        "active-prev",
        "active-next",
        "far-prev",
        "far-next",
        "very-far-prev",
        "very-far-next",
      );
      lyric.classList.add("hidden-lyric");
    });

    if (activeIndex >= 0) {
      const currentLyric = allLyrics[activeIndex];
      if (currentLyric) {
        currentLyric.classList.remove("hidden-lyric");
        currentLyric.classList.add("active");

        if (currentLyric.classList.contains("dots-placeholder")) {
          const dots = currentLyric.querySelectorAll(".dot");
          dots.forEach((dot) => {
            dot.style.animation = "none";
            dot.offsetHeight;
            dot.style.animation = "";
          });
        }

        allLyrics.forEach((lyric, index) => {
          const distance = index - activeIndex;

          if (distance === 0) {
          } else if (distance === -1) {
            lyric.classList.remove("hidden-lyric");
            lyric.classList.add("active-prev");
          } else if (distance === 1) {
            lyric.classList.remove("hidden-lyric");
            lyric.classList.add("active-next");
          } else if (distance === -2 && visibleRange >= 2) {
            lyric.classList.remove("hidden-lyric");
            lyric.classList.add("far-prev");
          } else if (distance === 2 && visibleRange >= 2) {
            lyric.classList.remove("hidden-lyric");
            lyric.classList.add("far-next");
          } else if (distance === -3 && visibleRange >= 3) {
            lyric.classList.remove("hidden-lyric");
            lyric.classList.add("very-far-prev");
          } else if (distance === 3 && visibleRange >= 3) {
            lyric.classList.remove("hidden-lyric");
            lyric.classList.add("very-far-next");
          }
        });

        const lyricsBox = this.lyricsBox;
        const lyricTop = currentLyric.offsetTop;
        const lyricHeight = currentLyric.offsetHeight;
        const boxHeight = lyricsBox.clientHeight;
        const scrollTo = lyricTop - boxHeight / 2 + lyricHeight / 2;

        this.isAutoScrolling = true;
        lyricsBox.scrollTo({
          top: Math.max(0, scrollTo),
          behavior: "smooth",
        });
        setTimeout(() => {
          this.isAutoScrolling = false;
        }, 500);
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

      setTimeout(() => {
        this.updateActiveLyric();
      }, 400);
    } else {
      lyricsContainer.classList.remove("active");
      this.musicPlayer.classList.remove("lyrics-active");
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
    const previousIndex = this.currentSongIndex;

    if (
      wasPlaying &&
      this.crossfadeEnabled &&
      !this.isCrossfading &&
      previousIndex !== index
    ) {
      this.currentSongIndex = index;
      if (this.isShuffled) {
        this.currentShuffleIndex = this.shuffledIndices.indexOf(index);
      }
      this.updateSongDisplay();
      this.updateBackground(true);

      const crossfadeSuccess = await this.performCrossfade(index);

      if (crossfadeSuccess) {
        this.updatePreloadPriorities(index);
        if (this.audioContext && this.audioContext.state === "suspended") {
          this.audioContext.resume();
        }
        this.setupAudioAnalysis();
        this.animateVisualizer();
        return;
      }
    }

    if (this.isPlaying) {
      this.audioPlayer.pause();
      this.isPlaying = false;
      this.stopVisualizer();
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
    this.updatePreloadPriorities(index);

    if (this.audioContext && this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }
    this.setupAudioAnalysis();

    if (wasPlaying) {
      this.audioPlayer
        .play()
        .then(() => {
          this.isPlaying = true;
          this.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
          this.animateVisualizer();
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    }
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

  async play(retryCount = 0) {
    const maxRetries = 3;
    const retryDelay = this.networkInfo?.retryDelay || 3000;

    try {
      if (!this.audioPlayer.src) {
        this.audioPlayer.src = this.songs[this.currentSongIndex].src;
      }

      if (this.audioPlayer.readyState < 2) {
        await this.waitForAudioReady();
      }

      await this.audioPlayer.play();
      this.isPlaying = true;
      this.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
      document.body.classList.add("is-playing");

      if (!this.audioContext) {
        this.setupAudioAnalysis();
      }
      this.animateVisualizer();
    } catch (error) {
      console.warn(`Play attempt ${retryCount + 1} failed:`, error.name);

      const isNetworkError =
        error.name === "NotSupportedError" ||
        error.name === "AbortError" ||
        error.name === "NetworkError" ||
        (error.message && error.message.includes("network"));

      if (isNetworkError && retryCount < maxRetries) {
        console.log(
          `🔄 Retrying playback in ${retryDelay}ms... (${
            retryCount + 1
          }/${maxRetries})`,
        );

        this.playBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

        await new Promise((resolve) => setTimeout(resolve, retryDelay));

        if (this.audioPlayer.error) {
          this.audioPlayer.src = this.songs[this.currentSongIndex].src;
          this.audioPlayer.load();
        }

        return this.play(retryCount + 1);
      } else if (error.name === "NotAllowedError") {
        console.log("Playback requires user interaction first");
      } else {
        console.error("Playback failed after retries:", error);
        this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
    }
  }

  waitForAudioReady() {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error("Audio load timeout"));
      }, this.networkInfo?.timeout || 30000);

      const onCanPlay = () => {
        clearTimeout(timeout);
        this.audioPlayer.removeEventListener("canplay", onCanPlay);
        this.audioPlayer.removeEventListener("error", onError);
        resolve();
      };

      const onError = () => {
        clearTimeout(timeout);
        this.audioPlayer.removeEventListener("canplay", onCanPlay);
        this.audioPlayer.removeEventListener("error", onError);
        reject(new Error("Audio load error"));
      };

      this.audioPlayer.addEventListener("canplay", onCanPlay);
      this.audioPlayer.addEventListener("error", onError);
    });
  }

  pause() {
    this.audioPlayer.pause();
    this.isPlaying = false;
    this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
    document.body.classList.remove("is-playing");
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
        this.audioPlayer.currentTime,
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

    this.playBtn.addEventListener("click", () => {
      this.addClickFeedback(this.playBtn);
      this.togglePlay();
    });
    this.prevBtn.addEventListener("click", () => {
      this.addClickFeedback(this.prevBtn);
      this.prevSong();
    });

    this.nextBtn.addEventListener("click", () => {
      this.addClickFeedback(this.nextBtn);
      this.isNextButtonPressed = true;
      this.nextSong();
    });

    this.shuffleBtn.addEventListener("click", () => {
      this.addClickFeedback(this.shuffleBtn);
      this.toggleShuffle();
    });
    this.repeatBtn.addEventListener("click", () => {
      this.addClickFeedback(this.repeatBtn);
      this.toggleRepeat();
    });

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
        ".playlist-item.active",
      );
      if (activeItem) {
        const durationElement = activeItem.querySelector(
          ".playlist-item-duration",
        );
        if (durationElement) {
          durationElement.textContent = this.formatTime(
            this.audioPlayer.duration,
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
          this.isChangingSong = true;
          this.isAutoScrolling = true;
          if (this.lyricsBox) {
            this.lyricsBox.classList.remove("user-scrolling");
          }
          this.nextSong();
        }
      } else {
        this.isChangingSong = true;
        this.isAutoScrolling = true;
        if (this.lyricsBox) {
          this.lyricsBox.classList.remove("user-scrolling");
        }
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
    if (!this.searchInput || !this.clearSearch) return;

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
          (s) => s.title === song.title && s.artist === song.artist,
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

  addClickFeedback(button) {
    if (!button) return;
    button.classList.remove("clicked");
    void button.offsetWidth;
    button.classList.add("clicked");

    setTimeout(() => {
      button.classList.remove("clicked");
    }, 300);
  }

  showToast(icon, message, duration = 1500) {
    if (!this.toastContainer) return;

    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }

    this.toastIcon.innerHTML = `<i class="${icon}"></i>`;
    this.toastMessage.textContent = message;

    this.toastContainer.classList.add("show");

    this.toastTimeout = setTimeout(() => {
      this.toastContainer.classList.remove("show");
    }, duration);
  }

  destroy() {
    if (this.backgroundChangeInterval) {
      clearInterval(this.backgroundChangeInterval);
    }
    this.stopVisualizer();
    if (this.audioContext) {
      this.audioContext.close();
    }
    this.clearSleepTimer();
  }

  loadFromStorage(key, defaultValue) {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (e) {
      console.error(`Error loading ${key} from storage:`, e);
      return defaultValue;
    }
  }

  saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error saving ${key} to storage:`, e);
    }
  }

  setupSleepTimer() {
    if (!this.sleepTimerBtn || !this.sleepTimerMenu) return;

    this.sleepTimerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.sleepTimerMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (
        !this.sleepTimerMenu.contains(e.target) &&
        e.target !== this.sleepTimerBtn
      ) {
        this.sleepTimerMenu.classList.remove("active");
      }
    });

    this.sleepTimerMenu
      .querySelectorAll(".sleep-timer-option")
      .forEach((option) => {
        option.addEventListener("click", () => {
          const minutes = parseInt(option.dataset.minutes);
          this.setSleepTimer(minutes);
          this.sleepTimerMenu.classList.remove("active");
        });
      });
  }

  setSleepTimer(minutes) {
    this.clearSleepTimer();

    if (minutes === 0) {
      return;
    }

    this.sleepTimerEndTime = Date.now() + minutes * 60 * 1000;

    this.sleepTimerInterval = setInterval(() => {
      this.updateSleepTimerDisplay();
    }, 1000);

    this.sleepTimerTimeout = setTimeout(
      () => {
        this.pause();
        this.clearSleepTimer();
      },
      minutes * 60 * 1000,
    );

    this.sleepTimerBtn.classList.add("active");
    this.sleepTimerDisplay.classList.add("active");
    this.updateSleepTimerDisplay();
  }

  clearSleepTimer() {
    if (this.sleepTimerTimeout) {
      clearTimeout(this.sleepTimerTimeout);
      this.sleepTimerTimeout = null;
    }
    if (this.sleepTimerInterval) {
      clearInterval(this.sleepTimerInterval);
      this.sleepTimerInterval = null;
    }
    this.sleepTimerEndTime = null;

    if (this.sleepTimerBtn) {
      this.sleepTimerBtn.classList.remove("active");
    }
    if (this.sleepTimerDisplay) {
      this.sleepTimerDisplay.classList.remove("active");
      this.sleepTimerDisplay.textContent = "";
    }
  }

  updateSleepTimerDisplay() {
    if (!this.sleepTimerEndTime || !this.sleepTimerDisplay) return;

    const remaining = Math.max(0, this.sleepTimerEndTime - Date.now());
    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    this.sleepTimerDisplay.textContent = `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  setupBackgroundSwitcher() {
    if (!this.bgSwitcherBtn || !this.bgSwitcherMenu) return;

    this.bgSwitcherBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.bgSwitcherMenu.classList.toggle("active");
      if (this.sleepTimerMenu) {
        this.sleepTimerMenu.classList.remove("active");
      }
    });

    document.addEventListener("click", (e) => {
      if (
        !this.bgSwitcherMenu.contains(e.target) &&
        e.target !== this.bgSwitcherBtn
      ) {
        this.bgSwitcherMenu.classList.remove("active");
      }
    });

    this.bgSwitcherMenu
      .querySelectorAll(".bg-switcher-option")
      .forEach((option) => {
        option.addEventListener("click", () => {
          const mode = option.dataset.mode;
          this.setBackgroundMode(mode);
          this.bgSwitcherMenu.classList.remove("active");
        });
      });

    if (this.backgroundMode === "album") {
      this.bgSwitcherBtn.innerHTML = '<i class="fas fa-compact-disc"></i>';
      this.bgSwitcherBtn.classList.add("active");
      this.bgSwitcherMenu
        .querySelectorAll(".bg-switcher-option")
        .forEach((opt) => {
          opt.classList.toggle("active", opt.dataset.mode === "album");
        });
      if (this.backgroundChangeInterval) {
        clearInterval(this.backgroundChangeInterval);
        this.backgroundChangeInterval = null;
      }
    }
  }

  setBackgroundMode(mode) {
    this.backgroundMode = mode;
    localStorage.setItem("harmony_bg_mode", mode);

    this.bgSwitcherMenu
      .querySelectorAll(".bg-switcher-option")
      .forEach((opt) => {
        opt.classList.toggle("active", opt.dataset.mode === mode);
      });

    if (mode === "album") {
      this.bgSwitcherBtn.innerHTML = '<i class="fas fa-compact-disc"></i>';
      this.bgSwitcherBtn.classList.add("active");
      if (this.backgroundChangeInterval) {
        clearInterval(this.backgroundChangeInterval);
        this.backgroundChangeInterval = null;
      }
      const song = this.songs[this.currentSongIndex];
      if (song) {
        this.updateAlbumBackground(song.albumArt);
      }
    } else {
      this.bgSwitcherBtn.innerHTML = '<i class="fas fa-image"></i>';
      this.bgSwitcherBtn.classList.remove("active");

      const overlay = document.getElementById("albumGradientOverlay");
      if (overlay) {
        overlay.remove();
      }

      this.backgroundBlur.style.filter = "blur(20px)";
      this.backgroundBlur.style.transform = "scale(1)";
      this.backgroundBlur.style.transition = "all 0.5s ease-in-out";

      this.updateBackground(true);
      this.startBackgroundRotation();
    }
  }

  async performCrossfade(nextIndex) {
    if (!this.crossfadeEnabled || this.isCrossfading) {
      return false;
    }

    const currentSong = this.songs[this.currentSongIndex];
    const nextSong = this.songs[nextIndex];

    if (!currentSong || !nextSong) return false;

    this.isCrossfading = true;

    this.crossfadeAudio = new Audio();
    this.crossfadeAudio.src = nextSong.src;
    this.crossfadeAudio.crossOrigin = "anonymous";
    this.crossfadeAudio.volume = 0;

    try {
      await new Promise((resolve, reject) => {
        this.crossfadeAudio.addEventListener("canplay", resolve, {
          once: true,
        });
        this.crossfadeAudio.addEventListener("error", reject, { once: true });
        this.crossfadeAudio.load();
      });

      await this.crossfadeAudio.play();

      const startVolume = this.audioPlayer.volume;
      const steps = 30;
      const stepDuration = this.crossfadeDuration / steps;

      for (let i = 0; i <= steps; i++) {
        const progress = i / steps;
        this.audioPlayer.volume = startVolume * (1 - progress);
        this.crossfadeAudio.volume = startVolume * progress;
        await new Promise((r) => setTimeout(r, stepDuration));
      }

      this.audioPlayer.pause();
      this.audioPlayer.src = nextSong.src;
      this.audioPlayer.currentTime = this.crossfadeAudio.currentTime;
      this.audioPlayer.volume = startVolume;
      await this.audioPlayer.play();

      this.crossfadeAudio.pause();
      this.crossfadeAudio.src = "";
      this.crossfadeAudio = null;

      this.isCrossfading = false;
      return true;
    } catch (error) {
      console.error("Crossfade error:", error);
      this.isCrossfading = false;

      if (this.crossfadeAudio) {
        this.crossfadeAudio.pause();
        this.crossfadeAudio.src = "";
        this.crossfadeAudio = null;
      }
      this.audioPlayer.volume = 1;
      return false;
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

  if (window.innerWidth > 768) {
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
  } else {
    welcome.remove();
  }
});
