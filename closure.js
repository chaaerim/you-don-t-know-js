function range(start, end) {
  //practice closure

  //  if (!end) 로 처리하게 되면 if 연산자 같은 경우 Boolean(end)값으로 처리하기 때문에 0이 들어가게 되면 true값을 리턴함.
  if (end == null) {
    return function getEnd(end) {
      getRange(start, end);
    };
  }

  getRange(start, end);

  function getRange(start, end) {
    // 상위에 선언한 array를 사용하면 클로저를 통해 참조가 계속 가능하기 때문에 값이 쌓이게 됨.

    // 함수 밖으로 분리 하는게 좋을 듯.. 함수 명에 맞게 동작하기 위해선
    let closureArr = [];
    if (end < start) {
      console.log(closureArr);
      return;
    }

    for (let i = start; i <= end; i++) {
      closureArr.push(i);
    }
    console.log(closureArr);
    return;
  }
}

range(3, 3);
range(3, 8);
range(3, 0);

var start3 = range(3);
var start4 = range(4);

start3(3);
start3(8);
start3(0);

start4(6);
