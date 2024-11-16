const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}
getClock();
setInterval(getClock, 1000);



// const clockTitle = document.querySelector('#clock');

// function getClock() {
//     const today = new Date();
//     const christmas = new Date(today.getFullYear(), 11, 15);
//     const dday = christmas - today;
//     ddayDays = Math.floor(dday / (1000 * 60 * 60 * 24));
//     ddayHours = Math.floor((dday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     ddayMinutes = Math.floor((dday % (1000 * 60 * 60)) / (1000 * 60));
//     ddaySeconds = Math.floor((dday % (1000 * 60)) / 1000);
//     clockTitle.innerText = `${ddayDays}d ${ddayHours}h ${ddayMinutes}m ${ddaySeconds}s`;
// }
// getClock();
// setInterval(getClock, 1000);
