document.addEventListener("DOMContentLoaded", function() {
    let percent = 0;
    const percentageText = document.getElementById("percentage");
    const scanText = document.getElementById("scan-text");
    const scanningPhase = document.getElementById("scanning-phase");
    const resultPhase = document.getElementById("result-phase");

    // 控制扫描速度：每 50 毫秒跳动一次，整体扫描过程大约耗时 1.5 - 2 秒
    const scanInterval = setInterval(() => {
        // 每次增加 2% 到 5% 的随机进度，让进度条跑得有快有慢，更像真实扫描
        percent += Math.floor(Math.random() * 4) + 2; 
        
        if (percent >= 100) percent = 100;
        percentageText.innerText = percent + "%";

        // 阶段性切换文案，确保用户能看清每一句话，拉满紧张感
        if (percent > 25 && percent <= 60) {
            scanText.innerText = "Checking Vulnerabilities...";
        } else if (percent > 60 && percent <= 90) {
            scanText.innerText = "Analyzing Network Security...";
        } else if (percent > 90) {
            scanText.innerText = "Finalizing Report...";
        }

        // 当进度达到 100% 时执行动作
        if (percent === 100) {
            clearInterval(scanInterval);
            
            // 重点细节：进度条满后，刻意停顿 400 毫秒再弹红框。
            // 这能模拟真实系统运算完毕后的“卡顿感”，大幅提升可信度。
            setTimeout(() => {
                scanningPhase.style.display = "none";
                resultPhase.style.display = "block";
            }, 400);
        }
    }, 50); 
});