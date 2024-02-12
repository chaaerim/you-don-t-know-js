// 빨강
const students = [
  {id: 11, song: 'ditto', name: '해린'},
  {id: 12, song: 'super shy', name: '민지'},
  {id: 13, song: 'ditto', name: '다니엘'},
  {id: 14, song: 'hype boy', name: '팜하니'},
  {id: 15, song: 'omg', name: '혜인'},
];

const studentsName = ['해린', '민지', '다니엘', '팜하니', '혜인'];

function getStudentNameById(/*매개변수 스코프*/ studentId = 12) {
  //주황
  const student = students.filter(
    (student) =>
      //노랑
      student.id === studentId,
  );
  return student[0].name;
}

function getStudentIdByName(studentName) {
  //초록
  const student = students.filter(
    (student) =>
      //파랑
      student.name === studentName,
  );
  return student[0].id;
}

function getNameBySong(song) {
  //남색
  // 변수 섀도잉
  const studentsName = students.filter(
    (student) =>
      //보라
      student.song === song,
  );

  return studentsName.map((el) => el.name);
}

const studentName1 = getStudentNameById();
const studentName2 = getStudentNameById(11);
const studentId = getStudentIdByName('팜하니');
const song = getNameBySong('ditto');

console.log(studentName1, studentName2, studentId, song);
