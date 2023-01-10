document.addEventListener("DOMContentLoaded", () => {
  // capture sumbit button in a variable
  const submit = document.querySelector('input[type="submit"]');

  const notes = document.querySelectorAll(".note");
  notes.forEach((note, index) => {
    if (index === 0 || index === 4 || index === 7) {
      note.style.backgroundColor = "red";
    }
  });

  submit.addEventListener("click", (event) => {
    const key = document.querySelector("#enterKey");
    console.log(key.value);
  });
});
