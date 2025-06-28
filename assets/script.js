class MusicPlayer {
  constructor() {
    this.songs = [
      {
        title: "I Wanna Be Yours (Instrumental)",
        artist: "Arctic Monkeys",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Arctic Monkeys - I Wanna Be Yours (Instrumental).mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/am.png",
      },
      {
        title: "Apocalypse",
        artist: "CAS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/CAS - Apocalypse.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cas.jpeg",
      },
      {
        title: "Cry",
        artist: "CAS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/CAS - Cry.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cas.jpeg",
      },
      {
        title: "K.",
        artist: "CAS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/CAS - K..mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cas.jpeg",
      },
      {
        title: "Sunsetz",
        artist: "CAS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/CAS - Sunsetz.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cas.jpeg",
      },
      {
        title: "Chezile",
        artist: "Beanie",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Chezile - Beanie.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/chezile.jpeg",
      },
      {
        title: "Trouble",
        artist: "Coldplay",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Coldplay - Trouble.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/cold.jpeg",
      },
      {
        title: "Welcome And Goodbye",
        artist: "Dream, Ivory",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Dream, ivory - Welcome and Goodbye.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/dream.jpeg",
      },
      {
        title: "Walking Back Home",
        artist: "FUR",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/FUR - Walking Back Home.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/fur.jpeg",
      },
      {
        title: "Nina",
        artist: "Feast",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Feast - Nina.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/feast.jpeg",
      },
      {
        title: "o,Tuan",
        artist: "Feast",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Feast - o,Tuan.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/feast.jpeg",
      },
      {
        title: "Iris",
        artist: "Goo Goo Dolls",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Goo Goo Dolls - Iris.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/goo.jpg",
      },
      {
        title: "Tip Toe",
        artist: "HYBS",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/HYBS - Tip Toe.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/hybs.jpeg",
      },
      {
        title: "Drunk text",
        artist: "Henry Moodie",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Henry Moodie - Drunk text.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/henry.jpeg",
      },
      {
        title: "Car's Outside",
        artist: "James Arthur",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/James Arthur - Car's Outside.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/james.jpeg",
      },
      {
        title: "Chamber Of Reflection",
        artist: "Mac DeMarco",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Mac DeMarco - Chamber Of Reflection.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/mac.jpg",
      },
      {
        title: "Moonlight On The River",
        artist: "Mac DeMarco",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Mac DeMarco - Moonlight On The River.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/mac.jpg",
      },
      {
        title: "Teruntuk Mia",
        artist: "Nuh..",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Nuh.. - Teruntuk Mia.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/nuh.png",
      },
      {
        title: "Let Down",
        artist: "RadioHead",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/RadioHead - Let Down.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/radio.jpeg",
      },
      {
        title: "Sebuah Kisah Klasik",
        artist: "Sheila On 7",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Sheila On 7 - Sebuah Kisah Klasik.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/sheila.jpg",
      },
      {
        title: "Dan",
        artist: "Sheila On 7",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Sheila on 7 - Dan.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/sheila.jpg",
      },
      {
        title: "Film Favorit",
        artist: "Sheila On 7",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Sheila on 7 - Film Favorit.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/sheila.jpg",
      },
      {
        title: "Back to friends",
        artist: "Sombr",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Sombr - Back to friends.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/sombr.jpeg",
      },
      {
        title: "Bad Habit",
        artist: "Steve Lacy",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Steve Lacy - Bad Habit.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/steve.jpg",
      },
      {
        title: "Vacations",
        artist: "Telephones",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Telephones - Vacations.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/tele.png",
      },
      {
        title: "Bunga Maaf",
        artist: "The Lantis",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/The Lantis - Bunga Maaf.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/lantis.webp",
      },
      {
        title: "Perayaan Mati Rasa",
        artist: "Umay, Natania",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Umay, Natania - Perayaan mati rasa.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/umay.png",
      },
      {
        title: "Seasons",
        artist: "Wave To Earth",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Wave to earth - Seasons.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/wave.jpeg",
      },
      {
        title: "Favorite Lesson",
        artist: "Yaeow",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Yaeow - Favorite lesson.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/yaeow.jpeg",
      },
      {
        title: "Missin Something",
        artist: "Zach Templar",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/Zach Templar - Missin something.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/zach.jpeg",
      },
      {
        title: "Here With Me",
        artist: "d4vd",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/d4vd - Here With Me.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/d4vd.jpeg",
      },
      {
        title: "Romantic Homicide",
        artist: "d4vd",
        src: "https://raw.githubusercontent.com/RiazRep/music-import/main/Music/d4vd - Romantic Homicide.mp3",
        albumArt:
          "https://raw.githubusercontent.com/RiazRep/music-import/main/Album/d4vd.jpeg",
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
    this.body = document.body;

    this.backgroundChangeInterval = null;
    this.backgroundImages = [
      "./image/background.jpg",
      "./image/background2.jpg",
      "./image/background3.jpg",
      "./image/background4.jpg",
      "./image/background5.jpg",
    ];
    this.currentBackgroundIndex = 0;
    this.backgroundPreloader = new Image();

    this.playlistVisible = false;
    this.playlistHovered = false;
    this.triggerHovered = false;

    this.init();
  }

  async init() {
    this.setupVisualizer();
    this.setupEventListeners();
    this.setupAudioEvents();
    this.renderPlaylist();
    this.updateSongDisplay();
    this.generateShuffledIndices();
    this.initializeBackground();
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

  async initializeBackground() {
    if (this.backgroundImages.length > 0) {
      this.backgroundPreloader.src = this.backgroundImages[0];
      this.backgroundPreloader.onload = () => {
        this.backgroundBlur.style.backgroundImage = `url(${this.backgroundImages[0]})`;
        this.startBackgroundRotation();
      };
    }
  }

  startBackgroundRotation() {
    this.updateBackground();
    this.backgroundChangeInterval = setInterval(() => {
      this.updateBackground();
    }, 20000);
  }

  updateBackground() {
    if (this.backgroundImages.length === 0) return;

    const nextIndex =
      (this.currentBackgroundIndex + 1) % this.backgroundImages.length;
    const nextImage = new Image();
    nextImage.src = this.backgroundImages[nextIndex];

    nextImage.onload = () => {
      this.backgroundBlur.style.backgroundImage = `url(${
        this.backgroundImages[this.currentBackgroundIndex]
      })`;
      this.currentBackgroundIndex = nextIndex;
    };
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
    this.audioPlayer.src = song.src;
    this.updateSongDisplay();

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
      this.playlistVisible = true;
      this.playlistHovered = true;
    });

    this.playlistTrigger.addEventListener("mouseleave", () => {
      this.playlistHovered = false;
      setTimeout(() => {
        if (!this.playlistHovered) {
          this.playlistVisible = false;
        }
      }, 300);
    });

    this.playlist.addEventListener("mouseenter", () => {
      this.playlistHovered = true;
    });

    this.playlist.addEventListener("mouseleave", () => {
      this.playlistHovered = false;
      this.playlistVisible = false;
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

    document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "Space":
          e.preventDefault();
          this.togglePlay();
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
    });

    this.audioPlayer.addEventListener("loadedmetadata", () => {
      this.durationEl.textContent = this.formatTime(this.audioPlayer.duration);

      // Update duration in playlist for current song
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
