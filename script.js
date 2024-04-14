let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

/**
 * Init select component by available voices.
 */
window.speechSynthesis.onvoiceschanged = () => {
  // get available voices
  voices = window.speechSynthesis.getVoices();
  // set voice by deafult
  speech.voice = voices[0];
  // add options with available voices to the select by index
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

/**
 * Listener for changing of select's option.
 */
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

/**
 * Listener for "listen" button click event.
 */
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
