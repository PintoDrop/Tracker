var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;
const d = new Date("2015-03");
document.getElementById("demo").innerHTML = d;

//  format('MMM DD, YYYY [at] hh:mm:ss a')

`use strict`;
function refreshTime() {
  let dateNTime = format('MMM DD, YYYY [at] hh:mm:ss a')
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);
// let dayjs = () => {
//   // grab the "elm", create "now date"
//   let elm = document.getElementById("date");
//   let d = new Date();
//   // set "now date" in "elm"
//   elm.innerHTML = d;
// };
