// // Script.js

// const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
// const baseUrl = 'https://www.dictionaryapi.com/api/v3/references/learners/json/';

// const searchBar = document.querySelector('.input');
// const phoneticsDiv = document.querySelector('.phonetics');
// const definitionDiv = document.querySelector('.definition');
// const pronunciationButton = document.querySelector('.pronunciation');
// const audioElement = new Audio();

// searchBar.addEventListener('keypress', event => {
//     if (event.key === 'Enter') {
//         event.preventDefault(); // Prevent form submission
//         const word = searchBar.value;
//         fetch(`${baseUrl}${word}?key=${apiKey}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (Array.isArray(data) && data.length > 0) {
//                     const firstEntry = data[0];
//                     if (firstEntry.hwi && firstEntry.hwi.prs) {
//                         const phoneticText = firstEntry.hwi.prs[0].mw;
//                         phoneticsDiv.textContent = `Phonetics: ${phoneticText}`;
//                     }

//                     if (firstEntry.shortdef) {
//                         const definitionText = firstEntry.shortdef[0];
//                         definitionDiv.textContent = `Definition: ${definitionText}`;
//                     }

//                     if (firstEntry.hwi && firstEntry.hwi.prs[0].sound) {
//                         const soundFile = firstEntry.hwi.prs[0].sound.audio;
//                         pronunciationButton.addEventListener('click', () => {
//                             audioElement.src = `https://media.merriam-webster.com/soundc11/${soundFile[0]}/${soundFile}.wav`;
//                             audioElement.play();
//                         });
//                     }
//                 } else {
//                     console.log('No data found for the word:', word);
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }
// });

// // ... Other event listeners ...


const searchBar = document.querySelector('.input');
const wordDiv = document.querySelector('.word');
const phoneticsDiv = document.querySelector('.phonetics');
const definitionDiv = document.querySelector('.definition');

searchBar.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const word = searchBar.value;
        wordDiv.textContent = `${word}`;
        phoneticsDiv.textContent = `Pho - Ne - Tics`;
        definitionDiv.textContent = `Definition of ${word}`;
    }
});