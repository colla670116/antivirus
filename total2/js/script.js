document.addEventListener("DOMContentLoaded", function() {
    const junkCounter = document.getElementById("junk-counter");
    let currentJunk = 0.0;
    const targetJunk = 5.4; // 目标垃圾大小 GB

    // 快速数字滚动动画，增加焦虑感
    const counterInterval = setInterval(() => {
        currentJunk += 0.3;
        if (currentJunk >= targetJunk) {
            currentJunk = targetJunk;
            clearInterval(counterInterval);
        }
        junkCounter.innerText = currentJunk.toFixed(1);
    }, 50);
});