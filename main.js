let subjectNumber_int = Number(prompt('How many subjects?'));
let totalScore = 0;

function calculateCredit(totalScore, subjectNumber_int) {
  for (i = 0; i < subjectNumber_int; i++) {
    let score = prompt('Your credit of subject: ' + (i + 1));
    let score_int = parseInt(score);
    totalScore += score_int;
  }
  let averageScore = totalScore / subjectNumber_int;
  alert(
    'Your total credit: ' +
      totalScore +
      ' & your average credit: ' +
      averageScore
  );
}

calculateCredit(totalScore, subjectNumber_int);
