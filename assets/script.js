class MusicPlayer {
  constructor() {
    this.songs = [
      {
        title: "I Wanna Be Yours (Instrumental)",
        artist: "Arctic Monkeys",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Arctic Monkeys - I Wanna Be Yours (Instrumental).mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/am.png",
        lyricsKey: "i_wanna_be_yours_instrumental",
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
        lyricsKey: "suneet",
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
        title: "Nina",
        artist: "Feast",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Feast - Nina.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/feast.jpeg",
        lyricsKey: "nina",
      },
      {
        title: "o,Tuan",
        artist: "Feast",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Feast - o,Tuan.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/feast.jpeg",
        lyricsKey: "otuan",
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
        title: "Teruntuk Mia",
        artist: "Nuh..",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Nuh.. - Teruntuk Mia.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/nuh.png",
        lyricsKey: "teruntuk_mia",
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
        title: "Sebuah Kisah Klasik",
        artist: "Sheila On 7",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Sheila On 7 - Sebuah Kisah Klasik.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/sheila.jpg",
        lyricsKey: "sebuah_kisah_klasik",
      },
      {
        title: "Dan",
        artist: "Sheila On 7",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Sheila on 7 - Dan.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/sheila.jpg",
        lyricsKey: "dan",
      },
      {
        title: "Film Favorit",
        artist: "Sheila On 7",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Sheila on 7 - Film Favorit.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/sheila.jpg",
        lyricsKey: "film_favorit",
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
        title: "Bunga Maaf",
        artist: "The Lantis",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/The Lantis - Bunga Maaf.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/lantis.webp",
        lyricsKey: "bunga_maaf",
      },
      {
        title: "Perayaan Mati Rasa",
        artist: "Umay, Natania",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Umay, Natania - Perayaan mati rasa.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/umay.png",
        lyricsKey: "perayaan_mati_rasa",
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
    this.lyricsActive = false;
    this.currentLyricIndex = -1;

    this.maxParallelPreloads = 3;
    this.preloadRetryLimit = 2;
    this.preloadRetryDelay = 2000;
    this.preloadBufferSize = 5;
    this.preloadQueue = [];
    this.preloadedAudios = {};
    this.currentlyPreloading = 0;
    this.preloadAttempts = {};
    this.preloadPriorities = [];

    this.audioPlayer = document.getElementById("audioPlayer");
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
    this.currentTimeEl = document.getElementById("currentTime");
    this.durationEl = document.getElementById("duration");
    this.playlistContainer = document.getElementById("playlistContainer");
    this.playlist = document.getElementById("playlist");
    this.playlistTrigger = document.getElementById("playlistTrigger");
    this.visualizer = document.getElementById("visualizer");
    this.audioPreloadContainer = document.getElementById(
      "audioPreloadContainer"
    );
    this.lyricsContainer = document.getElementById("lyricsContainer");
    this.lyricsContent = document.getElementById("lyricsContent");
    this.searchInput = document.getElementById("searchInput");
    this.clearSearch = document.getElementById("clearSearch");

    this.audioContext = null;
    this.analyser = null;
    this.dataArray = null;
    this.source = null;
    this.animationId = null;

    this.backgroundImages = [
      "./image/background.jpg",
      "./image/background2.jpg",
      "./image/background3.jpg",
      "./image/background4.jpg",
      "./image/background5.jpg",
    ];
    this.preloadedImages = [];
    this.previousBackgroundIndex = -1;
    this.backgroundChangeInterval = null;
    this.backgroundTransitionDuration = 1000;

    this.playlistVisible = false;
    this.playlistHovered = false;
    this.triggerHovered = false;
    this.playlistTransitioning = false;
    this.isSearching = false;
    this.searchResults = [];
    this.searchActive = false;
    this.isTypingInSearch = false;

    this.init();
  }

  init() {
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
    }, 15000);

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

    const lyrics = song.lyricsKey ? lyricsData[song.lyricsKey]?.lines : null;

    if (lyrics && lyrics.length > 0) {
      lyrics.forEach((line, index) => {
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

    const lyrics = song.lyricsKey ? lyricsData[song.lyricsKey]?.lines : null;

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
        if (activeIndex < lyrics.length - 1) {
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

  selectSong(index) {
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
    this.clearPreloads();
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
