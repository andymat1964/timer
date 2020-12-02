
const beep = function () {
  process.stdout.write('.');
}
const alarm = function (delay) {
   delay = Number(delay);
  if (!isNaN(delay) && delay > 0) {
    setTimeout(beep, delay * 1000)
  }
}
let args = process.argv.slice(2);

for (const sec of args) {
  alarm(sec);
}



