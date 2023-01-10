const scales = {
  major: [1, 5, 8],
  minor: [1, 4, 8],
  major7: [1, 5, 8, 11],
  minor7: [1, 4, 8, 11],
};

// Remove highlited background red and makes it white
function resetHighlight(notes) {
  notes.forEach((note) => (note.style.backgroundColor = "white"));
}

// Gets the correct indexes to highlight for any given key
function getIndexes(key, scale, notes) {
  // Makes an array of strings representing a note ["C", "C#"...] and then gets the index of the key passed in.
  // This represents how many steps there are between the default C and the current note.
  // This way the numbers in the scale passed in can be adjusted to the current key
  const steps = notes.map((note) => note.textContent).indexOf(key);

  // Takes the numbers inside the scale, then reduce that number by one to adjust to a 0 index array.
  // Then it adds the number of steps to give the correct indexes
  const indexes = scales[scale].map((idx) => idx - 1 + steps);

  // Adjusts indexes that go beyond the number of indexes in the notes array to rotate and
  // go back to the beginning of the array
  const rotatedIndexes = indexes.map((idx) => {
    if (idx > 11) {
      return idx - notes.length;
    }

    return idx;
  });
  return rotatedIndexes;
}

function highlightNotes(key, scale, notes) {
  // Remove highlight from all notes
  resetHighlight(notes);

  const indexes = getIndexes(key, scale, notes);

  console.log(indexes);

  notes.forEach((note, idx) => {
    if (indexes.includes(idx)) {
      note.style.backgroundColor = "red";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Capture sumbit button in a variable
  const submit = document.querySelector('input[type="submit"]');

  // Capture the notes on the DOM
  const notes = [...document.querySelectorAll(".note")];

  // Handle submit
  submit.addEventListener("click", (event) => {
    const key = document.querySelector("#enterKey").value.toUpperCase();
    const scale = document.querySelector("#enterScale").value;
    highlightNotes(key, scale, notes);
  });
});
