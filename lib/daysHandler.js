

export function daysCreateArray(days){
  const newDate = [];

  newDate.push(days.getFullYear());
  newDate.push(days.getMonth() + 1);
  newDate.push(days.getDate());
  
  return newDate;
}