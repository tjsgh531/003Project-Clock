const clock = document.getElementById('clock');
console.log(clock);
setDate();

function setDate(){
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const htmlset = `${hour} : ${min} : ${sec}`;
    clock.innerHTML = htmlset;

    requestAnimationFrame(setDate);
}