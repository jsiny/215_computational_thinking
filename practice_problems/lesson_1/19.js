const studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function transpose(array) {
  return array[0].map((column, colIdx) => {
    return array.map((row) => row[colIdx]);
  });
}

function getAverage(examGrades) {
  return examGrades.reduce((sum, grade) => sum + grade) / examGrades.length;
}

function getMinimum(examGrades) {
  return Math.min(...examGrades);
}

function getMaximum(examGrades) {
  return Math.max(...examGrades);
}

function getExamSummary(data) {
  const dataPerExam = transpose(data);

  return dataPerExam.map((exam) => {
    return {
      average: getAverage(exam),
      minimum: getMinimum(exam),
      maximum: getMaximum(exam),
    };
  });
}

function getExercisesScore(exercises) {
  return exercises.reduce((sum, score) => sum + score);
}

function getAverageGrade(examScore, exercisesScore) {
  return Math.round(examScore * 0.65 + exercisesScore * 0.35);
}

function getStudentLetterGrade(grade) {
  let letterGrade;

  if (grade > 92) {
    letterGrade = 'A';
  } else if (grade > 84) {
    letterGrade = 'B';
  } else if (grade > 76) {
    letterGrade = 'C';
  } else if (grade > 68) {
    letterGrade = 'D';
  } else if (grade > 59) {
    letterGrade = 'E';
  } else {
    letterGrade = 'F';
  }

  return String(grade) + ' (' + letterGrade + ')';
}

function getStudentGrades(scoreData) {
  return scoreData.map((student) => {
    const examScore      = getAverage(student.exams);
    const exercisesScore = getExercisesScore(student.exercises);
    const averageGrade   = getAverageGrade(examScore, exercisesScore);

    return getStudentLetterGrade(averageGrade);
  });
}

function generateClassRecordSummary(scores) {
  const scoreData = Object.keys(scores).map(student => scores[student].scores);
  const examData = scoreData.map((student) => student.exams);

  return {
    studentGrades: getStudentGrades(scoreData),
    exams: getExamSummary(examData),
  };
}

console.log(generateClassRecordSummary(studentScores));
