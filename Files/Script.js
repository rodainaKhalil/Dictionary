
// const searchBar = document.getElementById("input");
// const wordDiv = document.getElementById("word");
// const phoneticsDiv = document.getElementById("phonetics");
// const definitionDiv = document.getElementById("definition");
// const pronunciationButton = document.getElementById("pronunciation");

// async function fetchAPI(word) {
//     try {
//       infoTextEl.style.display = "block";
//       meaningContainerEl.style.display = "none";
//       infoTextEl.innerText = `Searching the meaning of "${word}"`;
//       const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
//       const result = await fetch(url).then((res) => res.json());
  
//       if (result.title) {
//         meaningContainerEl.style.display = "block";
//         infoTextEl.style.display = "none";
//         wordDiv.innerText = word;
//         definitionDiv.innerText = "N/A";
//         pronunciationButton.style.display = "none";
//       } else {
//         infoTextEl.style.display = "none";
//         meaningContainerEl.style.display = "block";
//         pronunciationButton.style.display = "inline-flex";
//         wordDiv.innerText = result[0].word;
//         definitionDiv.innerText = result[0].meanings[0].definitions[0].definition;
//         pronunciationButton.src = result[0].phonetics[0].audio;
//       }
//     } catch (error) {
//       console.log(error);
//       infoTextEl.innerText = `an error happened, try again later`;
//     }
//   }
  
//   searchBar.addEventListener("keyup", (e) => {
//     if (e.target.value && e.key === "Enter") {
//       fetchAPI(e.target.value);
//     }
//   });


// // searchBar.addEventListener('keypress', event => {
// //     if (event.key === 'Enter') {
// //         const word = searchBar.value;
// //         wordDiv.textContent = `${word}`;
// //         phoneticsDiv.textContent = `Pho - Ne - Tics`;
// //         definitionDiv.textContent = `Definition of ${word}`;
// //     }
// // });

const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

async function fetchAPI(word) {
  try {
    infoTextEl.style.display = "block";
    meaningContainerEl.style.display = "none";
    infoTextEl.innerText = `Searching the meaning of "${word}"`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());

    if (result.title) {
      meaningContainerEl.style.display = "block";
      infoTextEl.style.display = "none";
      titleEl.innerText = word;
      meaningEl.innerText = "N/A";
      audioEl.style.display = "none";
    } else {
      infoTextEl.style.display = "none";
      meaningContainerEl.style.display = "block";
      audioEl.style.display = "inline-flex";
      titleEl.innerText = result[0].word;
      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    console.log(error);
    infoTextEl.innerText = `an error happened, try again later`;
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});

// inputEl.addEventListener('keypress', event => {
//     if (event.key === 'Enter') {
//         fetchAPI(event.target.value);
//     }
// });