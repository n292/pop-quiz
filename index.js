let score = 0;

let answer1 = prompt(
  "Which planet is the largest?\n" +
    "A. Earth\n" +
    "B. Jupiter\n" +
    "C. Mars"
);

while (
  answer1 === null ||
  (answer1.toLowerCase() !== "a" &&
    answer1.toLowerCase() !== "b" &&
    answer1.toLowerCase() !== "c")
) {
  answer1 = prompt(
    "Please enter A, B, or C.\n\n" +
      "Which planet is the largest?\n" +
      "A. Earth\n" +
      "B. Jupiter\n" +
      "C. Mars"
  );
}

if (answer1.toLowerCase() === "b") {
  score++;
}

let answer2 = prompt(
  "What is the name of Earth's moon?\n" +
    "A. The Moon\n" +
    "B. Titan\n" +
    "C. Europa"
);

while (
  answer2 === null ||
  (answer2.toLowerCase() !== "a" &&
    answer2.toLowerCase() !== "b" &&
    answer2.toLowerCase() !== "c")
) {
  answer2 = prompt(
    "Please enter A, B, or C.\n\n" +
      "What is the name of Earth's moon?\n" +
      "A. The Moon\n" +
      "B. Titan\n" +
      "C. Europa"
  );
}

if (answer2.toLowerCase() === "a") {
  score++;
}

let answer3 = prompt(
  "Which planet is closest to the Sun?\n" +
    "A. Venus\n" +
    "B. Earth\n" +
    "C. Mercury"
);

while (
  answer3 === null ||
  (answer3.toLowerCase() !== "a" &&
    answer3.toLowerCase() !== "b" &&
    answer3.toLowerCase() !== "c")
) {
  answer3 = prompt(
    "Please enter A, B, or C.\n\n" +
      "Which planet is closest to the Sun?\n" +
      "A. Venus\n" +
      "B. Earth\n" +
      "C. Mercury"
  );
}

if (answer3.toLowerCase() === "c") {
  score++;
}

if (score === 0) {
  alert("You got 0 out of 3 questions correct.");
} else if (score === 3) {
  alert("You got all 3 questions correct!");
} else {
  alert("You got " + score + " out of 3 questions correct.");
}