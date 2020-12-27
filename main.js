const clock = document.getElementById('clock');
console.log(clock);
setDate();

function setDate(){
    const date = new Date();
    const hour = date.getHours().toString().padStart(2,'0');
    const min = date.getMinutes().toString().padStart(2,'0');
    const sec = date.getSeconds().toString().padStart(2,'0');

    const htmlset = `${hour} : ${min} : ${sec}`;
    clock.innerHTML = htmlset;

    requestAnimationFrame(setDate);
}