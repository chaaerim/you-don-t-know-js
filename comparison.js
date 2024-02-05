const dayStart = '07:30';
const dayEnd = '17:45';

function scheduleMeeting(startTime, durationTime) {
  let flag = false;
  const [hour, min] = startTime.split(':').map((el) => Number(el));
  const [dayStartHour, dayStartMin] = dayStart.split(':').map((el) => Number(el));
  const [dayEndHour, dayEndMin] = dayEnd.split(':').map((el) => Number(el));

  const startTotalTime = hour * 60 + min;
  const dayStartTime = dayStartHour * 60 + dayStartMin;
  const endTotalTime = startTotalTime + durationTime;
  const dayEndTime = dayEndHour * 60 + dayEndMin;

  //   console.log(dayStartTime, startTotalTime, endTotalTime, dayEndTime);
  if (dayStartTime <= startTotalTime && endTotalTime <= dayEndTime) {
    flag = true;
    console.log(flag);
    return flag;
  }
  console.log(flag);
  return flag;
}

scheduleMeeting('7:00', 15); //false
scheduleMeeting('07:15', 30); //false
scheduleMeeting('7:30', 30); //true
scheduleMeeting('11:30', 60); // true
scheduleMeeting('17:00', 45); //true
scheduleMeeting('17:30', 30); //false
scheduleMeeting('18:00', 15); //false
