const  countdown = () => {

    const countDate = new Date("June 21, 2022 10:00:00 GMT+0530").getTime();
    const now = new Date().getTime();
    const timeLeft = countDate - now;
    
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24
    
    const Dayleft = Math.floor(timeLeft / day);
    const Hourleft = Math.floor((timeLeft % day) / hour);
    const Minleft = Math.floor((timeLeft % hour) / min);
    const Secleft = Math.floor((timeLeft % min) / sec);
    
    document.querySelector(".days").innerText = Dayleft;
    document.querySelector(".hours").innerText = Hourleft;
    document.querySelector(".minutes").innerText = Minleft;
    document.querySelector(".seconds").innerText = Secleft;
    
    }
    
    setInterval(countdown, 1000);
