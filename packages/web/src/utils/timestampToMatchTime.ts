export const timestampToMatchTime = (millis: number) => {
  var date = new Date(millis * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();

  var formattedTime = minutes.substr(-2) + ':' + seconds.substr(-2);
  return formattedTime
}