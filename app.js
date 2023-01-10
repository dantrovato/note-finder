const major = [1, 5, 8];
const minor = [1, 4, 8];

function highlightNotes(key) {
  const notes = document.querySelectorAll(".note");
  notes.forEach((note) => {
    if (note.textContent === key.toUpperCase()) {
      note.style.backgroundColor = "red";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // capture sumbit button in a variable
  const submit = document.querySelector('input[type="submit"]');

  // Handle submit
  submit.addEventListener("click", (event) => {
    const key = document.querySelector("#enterKey").value;
    highlightNotes(key);
  });
});
