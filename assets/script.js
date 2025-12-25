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

    // Adaptive preload settings based on network condition
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

    // Listen for network changes
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
    this.setupCursorHide();
    this.renderPlaylist();
    this.updateSongDisplay();
    this.generateShuffledIndices();
    this.currentShuffleIndex = this.shuffledIndices.indexOf(
      this.currentSongIndex
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
        `.playlist-item[data-index="${index}"]`
      );
      if (playlistItem) {
        playlistItem.classList.add("preloaded");
      }

      this.processPreloadQueue();
    };

    const onLoadError = () => {
      console.error(
        `Failed to preload song: ${song.title} (attempt ${this.preloadAttempts[index]})`
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

  // Detect network condition and return optimal preload settings
  detectNetworkCondition() {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    // Default settings for unknown/unsupported browsers
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

    const effectiveType = connection.effectiveType; // 4g, 3g, 2g, slow-2g
    const downlink = connection.downlink; // Mbps
    const saveData = connection.saveData; // true if data saver is on

    console.log(
      `🌐 Network detected: ${effectiveType}, ${downlink}Mbps, saveData: ${saveData}`
    );

    // If user has data saver enabled, use minimal preloading
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

    // Adaptive settings based on connection type
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
        // For wifi or ethernet, check downlink speed
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

  // Listen for network changes and update preload settings
  setupNetworkListener() {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    if (!connection) return;

    connection.addEventListener("change", () => {
      const previousType = this.networkInfo.connectionType;
      this.networkInfo = this.detectNetworkCondition();

      // Update settings
      this.maxParallelPreloads = this.networkInfo.parallelLoads;
      this.preloadRetryLimit = this.networkInfo.retryLimit;
      this.preloadRetryDelay = this.networkInfo.retryDelay;
      this.preloadBufferSize = this.networkInfo.bufferSize;
      this.preloadTimeout = this.networkInfo.timeout;

      console.log(
        `🔄 Network changed: ${previousType} → ${this.networkInfo.connectionType}`
      );

      // If connection got worse, pause non-essential preloads
      if (
        this.isWorseConnection(previousType, this.networkInfo.connectionType)
      ) {
        console.log("📉 Connection degraded, reducing preload activity");
        this.updatePreloadPriorities(this.currentSongIndex);
      }
    });
  }

  // Helper to compare connection quality
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

  // Update background with album art blur
  updateAlbumBackground(albumArtUrl) {
    this.backgroundBlur.style.transition =
      "background-image 1s ease-in-out, opacity 1s ease-in-out";
    this.backgroundBlur.style.backgroundImage = `url('${albumArtUrl}')`;
    this.backgroundBlur.style.backgroundSize = "cover";
    this.backgroundBlur.style.backgroundPosition = "center";
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
    if (!this.analyser || !this.visualizerBars) return;

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

    // Move current song to the first position
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

    // Re-render playlist to show shuffled/normal order
    this.renderPlaylist();
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
    // Use shuffled order if shuffle is active, otherwise use normal order
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

    // Update background with album art
    this.updateAlbumBackground(song.albumArt);

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
    // Hide lyrics content during loading to prevent flash
    this.lyricsContent.style.opacity = "0";
    this.lyricsContent.innerHTML = "";
    const song = this.songs[this.currentSongIndex];

    // Show loading indicator
    const loadingEl = document.createElement("div");
    loadingEl.className = "no-lyrics-message";
    loadingEl.textContent = "Loading lyrics...";
    this.lyricsContent.appendChild(loadingEl);

    // Try to get lyrics from LRC file first, then fall back to lyricsData
    let lyrics = null;
    if (song.lyricsKey && typeof lrcLoader !== "undefined") {
      lyrics = await lrcLoader.getLyrics(song.lyricsKey);
    } else if (song.lyricsKey && typeof lyricsData !== "undefined") {
      lyrics = lyricsData[song.lyricsKey]?.lines;
    }

    // Store current lyrics for updateActiveLyric to use
    this.currentLyrics = lyrics;

    // Clear loading indicator
    this.lyricsContent.innerHTML = "";

    if (lyrics && lyrics.length > 0) {
      lyrics.forEach((line, index) => {
        const lyricLine = document.createElement("div");
        // Add hidden-lyric class by default so lyrics are hidden on initial load
        lyricLine.className = "lyrics-line hidden-lyric";

        // Add special class for animated dots (instrumental parts)
        if (line.text === "•••") {
          lyricLine.classList.add("dots-placeholder");
          // Create individual dot elements for wave animation
          lyricLine.innerHTML =
            '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
        } else {
          lyricLine.textContent = line.text;
        }

        lyricLine.dataset.time = line.time;
        lyricLine.dataset.index = index;

        // Add click handler to seek to this lyric's time
        lyricLine.addEventListener("click", () => {
          const seekTime = parseFloat(lyricLine.dataset.time);
          if (!isNaN(seekTime)) {
            // Set flags to prevent scroll event from triggering
            this.isClickingLyric = true;
            this.isAutoScrolling = true;
            this.lyricsBox.classList.remove("user-scrolling");

            this.audioPlayer.currentTime = seekTime;
            // Force update active lyric
            this.currentLyricIndex = -1;
            this.updateActiveLyric();

            // Clear flags after animation
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

    // Set flag to indicate song is changing (to prevent scroll events)
    this.isChangingSong = true;
    this.isAutoScrolling = true;

    // Reset scroll position and remove user-scrolling class
    if (this.lyricsBox) {
      this.lyricsBox.classList.remove("user-scrolling");
      // Use instant scroll instead of smooth to prevent visual jump
      this.lyricsBox.scrollTop = 0;
    }

    // Ensure is-playing class is present if music is playing
    if (this.isPlaying) {
      document.body.classList.add("is-playing");
    }

    // Immediately update lyrics visibility if lyrics panel is active
    if (this.lyricsActive) {
      // Wait for DOM to update, then find correct lyric position based on current audio time
      requestAnimationFrame(() => {
        // Reset lyric index to force recalculation
        this.currentLyricIndex = -1;

        // Find the active lyric based on current playback time
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

          // If song just started (currentTime near 0), use first lyric
          if (currentTime < 0.5 && activeIndex === -1) {
            activeIndex = 0;
          }

          // Pre-position to the correct lyric before showing
          if (activeIndex >= 0) {
            const allLyrics =
              this.lyricsContent.querySelectorAll(".lyrics-line");
            const targetLyric = allLyrics[activeIndex];
            if (targetLyric && this.lyricsBox) {
              const lyricTop = targetLyric.offsetTop;
              const lyricHeight = targetLyric.offsetHeight;
              const boxHeight = this.lyricsBox.clientHeight;
              const scrollTo = lyricTop - boxHeight / 2 + lyricHeight / 2;

              // Instantly scroll to correct position (no animation yet)
              this.lyricsBox.scrollTop = Math.max(0, scrollTo);
            }
          }
        }

        // Now update the active lyric to show correct visibility
        this.updateActiveLyric();

        // Show lyrics content after positioning
        this.lyricsContent.style.opacity = "1";

        // Clear flags after lyrics are properly positioned
        setTimeout(() => {
          this.isChangingSong = false;
          this.isAutoScrolling = false;
        }, 300);
      });
    } else {
      // Show lyrics content even if panel not active
      this.lyricsContent.style.opacity = "1";
      setTimeout(() => {
        this.isChangingSong = false;
        this.isAutoScrolling = false;
      }, 300);
    }

    // Only setup scroll detection once (not every song change)
    if (!this.lyricsScrollSetup) {
      this.lyricsScrollSetup = true;
      let scrollTimeout;
      this.isAutoScrolling = false;

      // Detect when tab/window becomes visible again to ignore scroll events
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
          // Ignore if this is auto-scroll, tab just became visible, song is changing, or clicking lyric
          if (
            this.isAutoScrolling ||
            this.recentlyBecameVisible ||
            this.isChangingSong ||
            this.isClickingLyric
          )
            return;

          // Add class to indicate user is scrolling
          this.lyricsBox.classList.add("user-scrolling");

          // Clear previous timeout
          clearTimeout(scrollTimeout);

          // Remove class and scroll back to active lyric after user stops scrolling
          scrollTimeout = setTimeout(() => {
            this.lyricsBox.classList.remove("user-scrolling");
            // Auto-scroll back to active lyric after 3 seconds
            this.scrollToActiveLyric();
          }, 3000);
        },
        { passive: true }
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

    // Use cached lyrics from updateLyricsDisplay
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

    // Calculate max word count per line to determine visibility range
    let maxWords = 0;
    this.currentLyrics.forEach((line) => {
      if (line.text && line.text !== "•••") {
        const wordCount = line.text.split(/\s+/).length;
        if (wordCount > maxWords) maxWords = wordCount;
      }
    });
    // If any line has more than 10 words, use range of 2, otherwise 3
    const visibleRange = maxWords > 10 ? 2 : 3;

    // Remove all state classes from all lyrics first
    allLyrics.forEach((lyric) => {
      lyric.classList.remove(
        "active",
        "active-prev",
        "active-next",
        "far-prev",
        "far-next",
        "very-far-prev",
        "very-far-next"
      );
      // Add hidden-lyric by default, will be removed for visible lines
      lyric.classList.add("hidden-lyric");
    });

    if (activeIndex >= 0) {
      const currentLyric = allLyrics[activeIndex];
      if (currentLyric) {
        // Remove hidden and add active
        currentLyric.classList.remove("hidden-lyric");
        currentLyric.classList.add("active");

        // Force restart animation for dots-placeholder
        if (currentLyric.classList.contains("dots-placeholder")) {
          const dots = currentLyric.querySelectorAll(".dot");
          dots.forEach((dot) => {
            // Force reflow to restart animation
            dot.style.animation = "none";
            dot.offsetHeight; // Trigger reflow
            dot.style.animation = "";
          });
        }

        // Add classes based on distance from active line
        allLyrics.forEach((lyric, index) => {
          const distance = index - activeIndex;

          if (distance === 0) {
            // Already handled above
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
          // Lines beyond visibleRange keep hidden-lyric class
        });

        // Always scroll to center the active lyric
        const lyricsBox = this.lyricsBox;
        const lyricTop = currentLyric.offsetTop;
        const lyricHeight = currentLyric.offsetHeight;
        const boxHeight = lyricsBox.clientHeight;
        const scrollTo = lyricTop - boxHeight / 2 + lyricHeight / 2;

        // Set flag to ignore this scroll in scroll event listener
        this.isAutoScrolling = true;
        lyricsBox.scrollTo({
          top: Math.max(0, scrollTo),
          behavior: "smooth",
        });
        // Reset flag after scroll animation completes
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

    if (this.isPlaying) {
      // Pause audio but keep is-playing class for animation continuity
      this.audioPlayer.pause();
      this.isPlaying = false;
      this.stopVisualizer();
      // Don't remove is-playing class here - we'll handle it after song loads
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

      // Wait for enough data to play
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

      // Check if it's a network-related error that can be retried
      const isNetworkError =
        error.name === "NotSupportedError" ||
        error.name === "AbortError" ||
        error.name === "NetworkError" ||
        (error.message && error.message.includes("network"));

      if (isNetworkError && retryCount < maxRetries) {
        console.log(
          `🔄 Retrying playback in ${retryDelay}ms... (${
            retryCount + 1
          }/${maxRetries})`
        );

        // Show loading state on play button
        this.playBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

        // Wait and retry
        await new Promise((resolve) => setTimeout(resolve, retryDelay));

        // Reload the audio source if needed
        if (this.audioPlayer.error) {
          this.audioPlayer.src = this.songs[this.currentSongIndex].src;
          this.audioPlayer.load();
        }

        return this.play(retryCount + 1);
      } else if (error.name === "NotAllowedError") {
        // User hasn't interacted with the page yet - this is expected, don't show error
        console.log("Playback requires user interaction first");
      } else {
        // All retries failed, just log it without alert
        console.error("Playback failed after retries:", error);
        this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
    }
  }

  // Helper to wait for audio to be ready
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
          // Set flags before auto-next to prevent lyrics from appearing
          this.isChangingSong = true;
          this.isAutoScrolling = true;
          if (this.lyricsBox) {
            this.lyricsBox.classList.remove("user-scrolling");
          }
          this.nextSong();
        }
      } else {
        // Set flags before auto-next to prevent lyrics from appearing
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
    // Only setup search if elements exist
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
