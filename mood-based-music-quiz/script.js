let selectedFeeling = "";
let selectedMood = "";

const pages = document.querySelectorAll(".page");

const startPage = document.getElementById("startPage");
const questionOne = document.getElementById("questionOne");
const questionTwo = document.getElementById("questionTwo");
const loadingPage = document.getElementById("loadingPage");
const resultsPage = document.getElementById("resultsPage");

const startBtn = document.getElementById("startBtn");
const backToQ1 = document.getElementById("backToQ1");
const againBtn = document.getElementById("againBtn");
const restartBtn = document.getElementById("restartBtn");

const feelingButtons = document.querySelectorAll(".feeling-btn");
const moodButtons = document.querySelectorAll(".mood-btn");

const resultTitle = document.getElementById("resultTitle");
const results = document.getElementById("results");

const moodSearches = {
  "happy-strong": [
    "Bad Bunny party",
    "Karol G reggaeton",
    "Rauw Alejandro dance",
    "J Balvin reggaeton",
    "Feid party",
    "Shakira dance",
    "Calvin Harris electronic",
    "Dua Lipa dance",
    "Beyonce dance",
    "Bruno Mars funk",
    "Doja Cat pop",
    "Rosalia pop",
    "Tiësto EDM",
    "Skrillex electronic",
    "Afrobeats party",
    "Latin pop dance"
  ],

  "happy-calm": [
    "Natalia Lafourcade",
    "Carlos Vives acoustic",
    "Monsieur Periné",
    "Bomba Estéreo chill",
    "Morat acoustic",
    "Camilo acoustic",
    "Rex Orange County",
    "Mac Ayres",
    "Daniel Caesar",
    "HONNE",
    "Surfaces",
    "Khai Dreams",
    "Still Woozy",
    "Tom Misch",
    "Kali Uchis",
    "soft latin pop"
  ],

  "happy-meditation": [
    "Bomba Estéreo instrumental",
    "Chancha Via Circuito",
    "Nicola Cruz",
    "Latin chill instrumental",
    "Tycho ambient",
    "Bonobo chill",
    "Odesza instrumental",
    "Emancipator",
    "Nujabes instrumental",
    "Khruangbin",
    "FKJ instrumental",
    "lofi instrumental",
    "ambient guitar",
    "soft piano"
  ],

  "happy-melancholic": [
    "Kali Uchis",
    "Rosalia",
    "Mon Laferte",
    "Natalia Lafourcade",
    "Zoé",
    "Kevin Kaarl",
    "Lorde",
    "Frank Ocean",
    "Clairo",
    "The 1975",
    "beabadoobee",
    "girl in red",
    "Wallows",
    "Dayglow",
    "indie latino"
  ],

  "sad-melancholic": [
    "Kevin Kaarl",
    "Mon Laferte",
    "Natalia Lafourcade",
    "Zoé unplugged",
    "Carla Morrison",
    "Ed Maverick",
    "Julieta Venegas acoustic",
    "Lana Del Rey",
    "Phoebe Bridgers",
    "Billie Eilish",
    "Mitski",
    "Joji",
    "Sufjan Stevens",
    "Beach House",
    "Mazzy Star",
    "Cigarettes After Sex",
    "The xx",
    "Radiohead"
  ],

  "sad-calm": [
    "Carla Morrison",
    "Kevin Kaarl acoustic",
    "Ed Maverick",
    "Natalia Lafourcade acoustic",
    "Mon Laferte acoustic",
    "Silvana Estrada",
    "Jesse Baez",
    "Novo Amor",
    "Bon Iver",
    "Daughter",
    "Sleeping At Last",
    "Cigarettes After Sex",
    "Sufjan Stevens",
    "Iron and Wine",
    "Angus and Julia Stone",
    "Keaton Henson"
  ],

  "sad-meditation": [
    "Ludovico Einaudi",
    "Max Richter",
    "Olafur Arnalds",
    "Nils Frahm",
    "ambient piano",
    "Hania Rani",
    "Dustin O'Halloran",
    "peaceful cello",
    "soft guitar instrumental",
    "latin piano instrumental",
    "Andean instrumental",
    "relaxing guitar"
  ],

  "sad-strong": [
    "Zoé rock",
    "Soda Stereo",
    "Caifanes",
    "Maná rock",
    "PXNDX",
    "Allison rock",
    "Linkin Park",
    "Paramore",
    "Evanescence",
    "Bring Me The Horizon",
    "My Chemical Romance",
    "Pierce The Veil",
    "Deftones",
    "emotional rock",
    "latin rock"
  ],

  "neutral-meditation": [
    "Brian Eno",
    "Tycho",
    "peaceful piano",
    "ambient music",
    "lofi meditation",
    "nature ambient",
    "soft instrumental",
    "sleep music",
    "guitar meditation",
    "latin chill instrumental",
    "bossa nova instrumental",
    "relaxing piano"
  ],

  "neutral-strong": [
    "Bad Bunny",
    "Rauw Alejandro",
    "Feid",
    "Karol G",
    "J Balvin",
    "Rosalia",
    "Daft Punk",
    "Skrillex",
    "Swedish House Mafia",
    "The Chemical Brothers",
    "Disclosure electronic",
    "Justice electronic",
    "Flume",
    "Fred again",
    "Latin dance",
    "Afrobeats"
  ],

  "neutral-calm": [
    "Kali Uchis",
    "Natalia Lafourcade",
    "Monsieur Periné",
    "Bossa nova",
    "Jesse Baez",
    "Girl Ultra",
    "lofi beats",
    "Tom Misch",
    "FKJ",
    "chillhop",
    "Jinsang",
    "Jazzhop",
    "Bossa nova chill",
    "soft r&b",
    "latin chill"
  ],

  "neutral-melancholic": [
    "Zoé",
    "Siddhartha",
    "Carla Morrison",
    "Kevin Kaarl",
    "Mon Laferte",
    "Ed Maverick",
    "Beach House",
    "Mazzy Star",
    "Radiohead",
    "The xx",
    "dream pop",
    "Slowdive",
    "Cocteau Twins",
    "Men I Trust",
    "indie latino"
  ]
};


startBtn.addEventListener("click", function () {
  showPage(questionOne);
});

backToQ1.addEventListener("click", function () {
  showPage(questionOne);
});

againBtn.addEventListener("click", function () {
  getRecommendations();
});

restartBtn.addEventListener("click", function () {
  selectedFeeling = "";
  selectedMood = "";
  results.innerHTML = "";
  document.body.className = "";

  feelingButtons.forEach(btn => btn.classList.remove("selected"));
  moodButtons.forEach(btn => btn.classList.remove("selected"));

  showPage(startPage);
});

feelingButtons.forEach(button => {
  button.addEventListener("click", function () {
    selectedFeeling = this.dataset.feeling;

    feelingButtons.forEach(btn => btn.classList.remove("selected"));
    this.classList.add("selected");

    document.body.className = selectedFeeling;

    setTimeout(function () {
      showPage(questionTwo);
    }, 300);
  });
});

moodButtons.forEach(button => {
  button.addEventListener("click", function () {
    selectedMood = this.dataset.mood;

    moodButtons.forEach(btn => btn.classList.remove("selected"));
    this.classList.add("selected");

    setTimeout(function () {
      getRecommendations();
    }, 300);
  });
});

function showPage(pageToShow) {
  pages.forEach(page => page.classList.remove("active"));
  pageToShow.classList.add("active");
}

function getRandomItems(array, amount) {
  let copy = [...array];
  let randomItems = [];

  while (randomItems.length < amount && copy.length > 0) {
    let randomIndex = Math.floor(Math.random() * copy.length);
    randomItems.push(copy[randomIndex]);
    copy.splice(randomIndex, 1);
  }

  return randomItems;
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

async function getRecommendations() {
  results.innerHTML = "";
  showPage(loadingPage);

  const moodKey = selectedFeeling + "-" + selectedMood;
  const searchList = moodSearches[moodKey];

  const randomSearchTerms = getRandomItems(searchList, 4);

  let allSongs = [];

  try {
    for (let term of randomSearchTerms) {
      const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=music&entity=song&limit=25&country=US&explicit=No`;

      const response = await fetch(url);
      const data = await response.json();

      allSongs = allSongs.concat(data.results);
    }

    let cleanSongs = allSongs.filter(song => {
      return song.previewUrl &&
             song.trackName &&
             song.artistName &&
             song.artworkUrl100 &&
             song.trackViewUrl;
    });

    cleanSongs = shuffleArray(cleanSongs);

    let usedArtists = [];
    let finalSongs = [];

    cleanSongs.forEach(song => {
      const artist = song.artistName.toLowerCase();

      if (!usedArtists.includes(artist) && finalSongs.length < 8) {
        usedArtists.push(artist);
        finalSongs.push(song);
      }
    });

    resultTitle.textContent = `${selectedFeeling} + ${selectedMood}`;

    if (finalSongs.length === 0) {
      results.innerHTML = "<p>No songs found. Try again.</p>";
      showPage(resultsPage);
      return;
    }

    finalSongs.forEach(song => {
      const card = document.createElement("div");
      card.classList.add("song-card");

      card.innerHTML = `
        <div class="song-top">
          <img src="${song.artworkUrl100.replace("100x100", "300x300")}" alt="Album cover">

          <div>
            <h3>${song.trackName}</h3>
            <p><strong>Artist:</strong> ${song.artistName}</p>
            <p><strong>Album:</strong> ${song.collectionName || "Unknown Album"}</p>
          </div>
        </div>

        <audio controls>
          <source src="${song.previewUrl}" type="audio/mpeg">
        </audio>

        <a class="itunes-link" href="${song.trackViewUrl}" target="_blank">
          View on iTunes
        </a>
      `;

      results.appendChild(card);
    });

    showPage(resultsPage);

  } catch (error) {
    console.log(error);
    results.innerHTML = "<p>Something went wrong. Please try again.</p>";
    showPage(resultsPage);
  }
}