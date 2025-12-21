/**
 * LRC Parser Module
 * Parses .lrc files and returns lyrics in the format used by the player
 */

class LRCLoader {
  constructor(basePath = "./assets/lyrics/") {
    this.basePath = basePath;
    this.cache = {};
  }

  /**
   * Parse LRC content string into lyrics array
   * @param {string} lrcContent - Raw LRC file content
   * @returns {Array} Array of {time, text} objects
   */
  parseLRC(lrcContent) {
    const lines = lrcContent.split("\n");
    const lyrics = [];

    // Regex to match LRC timestamp format [mm:ss.xx] or [mm:ss]
    const timeRegex = /\[(\d{2}):(\d{2})(?:[.:](\d{2,3}))?\]/g;

    for (const line of lines) {
      // Skip metadata lines like [ar:Artist], [ti:Title], etc.
      if (/^\[(ar|ti|al|au|length|by|offset|re|ve|id|la):/i.test(line))
        continue;

      // Skip empty lines
      const trimmedLine = line.trim();
      if (!trimmedLine) continue;

      // Find all timestamps in the line
      let match;
      const timestamps = [];

      while ((match = timeRegex.exec(line)) !== null) {
        const minutes = parseInt(match[1], 10);
        const seconds = parseInt(match[2], 10);
        const milliseconds = match[3]
          ? parseInt(match[3].padEnd(3, "0").slice(0, 3), 10)
          : 0;

        // Convert to total seconds (keep decimals for precision)
        const totalSeconds = minutes * 60 + seconds + milliseconds / 1000;
        timestamps.push(Math.round(totalSeconds)); // Round to nearest second
      }

      // Get the text part (everything after the last timestamp)
      let textPart = line.replace(timeRegex, "").trim();

      // If empty text, use animated dots placeholder
      if (!textPart) {
        textPart = "•••";
      }

      // Add entry for each timestamp (handles multiple timestamps per line)
      for (const time of timestamps) {
        lyrics.push({ time, text: textPart });
      }
    }

    // Sort by time
    lyrics.sort((a, b) => a.time - b.time);

    // Add initial music note if first lyric doesn't start at 0
    if (lyrics.length > 0 && lyrics[0].time > 2) {
      lyrics.unshift({ time: 0, text: "♪" });
    }

    return lyrics;
  }

  /**
   * Load LRC file for a song
   * @param {string} lyricsKey - The key to identify the lyrics file
   * @returns {Promise<Array|null>} Lyrics array or null if not found
   */
  async loadLRC(lyricsKey) {
    // Check cache first
    if (this.cache[lyricsKey]) {
      return this.cache[lyricsKey];
    }

    try {
      const response = await fetch(`${this.basePath}${lyricsKey}.lrc`);

      if (!response.ok) {
        console.log(`No LRC file found for: ${lyricsKey}`);
        return null;
      }

      const lrcContent = await response.text();
      const lyrics = this.parseLRC(lrcContent);

      if (lyrics.length > 0) {
        // Cache the result
        this.cache[lyricsKey] = lyrics;
        console.log(`Loaded LRC for: ${lyricsKey} (${lyrics.length} lines)`);
        return lyrics;
      }

      return null;
    } catch (error) {
      console.log(`Error loading LRC for ${lyricsKey}:`, error.message);
      return null;
    }
  }

  /**
   * Get lyrics for a song - tries LRC first, then falls back to lyricsData
   * @param {string} lyricsKey - The key to identify the lyrics
   * @returns {Promise<Array|null>} Lyrics array or null if not found
   */
  async getLyrics(lyricsKey) {
    if (!lyricsKey) return null;

    // Try to load from LRC file first
    const lrcLyrics = await this.loadLRC(lyricsKey);
    if (lrcLyrics && lrcLyrics.length > 0) {
      return lrcLyrics;
    }

    // Fall back to lyricsData (from lyrics.js)
    if (typeof lyricsData !== "undefined" && lyricsData[lyricsKey]?.lines) {
      return lyricsData[lyricsKey].lines;
    }

    return null;
  }
}

// Create global instance
const lrcLoader = new LRCLoader();
