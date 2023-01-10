const major = [1, 5, 8];
const minor = [1, 4, 8];

function resetHighlight(notes) {
  notes.forEach((note) => (note.style.backgroundColor = "white"));
}

function highlightNotes(key, notes) {
  resetHighlight(notes);
  notes.forEach((note) => {
    if (note.textContent === key.toUpperCase()) {
      note.style.backgroundColor = "red";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Capture sumbit button in a variable
  const submit = document.querySelector('input[type="submit"]');

  // Capture the notes on the DOM
  const notes = document.querySelectorAll(".note");

  // Handle submit
  submit.addEventListener("click", (event) => {
    const key = document.querySelector("#enterKey").value;
    highlightNotes(key, notes);
  });
});
