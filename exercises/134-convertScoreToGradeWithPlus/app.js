function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    let grade = '';
    if (score > 100 || score < 0 || typeof score != 'number') return 'INVALID SCORE';
    if (score <= 100 && score >= 90) grade = 'A';
    if (score <= 89 && score >= 80) grade = 'B';
    if (score <= 79 && score >= 70) grade = 'C';
    if (score <= 69 && score >= 60) grade = 'D';
    if (score <= 59 && score >= 0) return 'F';

    if (score.toString().endsWith('0') || score.toString().endsWith('1') || score.toString().endsWith('2')) {
        grade = grade + '-';
    } else if (score.toString().endsWith('8') || score.toString().endsWith('9')) {
        grade = grade + '+';
    }
    return grade;
}

let output = convertScoreToGradeWithPlusAndMinus(68);
console.log(output); // --> 'A-'