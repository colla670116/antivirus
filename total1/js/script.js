document.addEventListener("DOMContentLoaded", function() {
    let percent = 0;
    const percentageText = document.getElementById("percentage");
    const scanText = document.getElementById("scan-text");
    const scanningPhase = document.getElementById("scanning-phase");
    const resultPhase = document.getElementById("result-phase");

    // 假装扫描的逻辑，耗时约 3.5 秒
    const scanInterval = setInterval(() => {
        percent += Math.floor(Math.random() * 4) + 1; // 随机增加 1-4
        if (percent >= 100) percent = 100;
        
        percentageText.innerText = percent + "%";

        // 根据进度改变文本，制造真实感
        if (percent > 30 && percent < 70) {
            scanText.innerText = "Checking for Malware...";
        } else if (percent >= 70 && percent < 99) {
            scanText.innerText = "Analyzing Network Vulnerabilities...";
        }

        if (percent === 100) {
            clearInterval(scanInterval);
            setTimeout(() => {
                // 隐藏扫描界面，显示结果界面
                scanningPhase.style.display = "none";
                resultPhase.style.display = "block";
                // 可选：在这里播放一个短促的警告音效
            }, 300);
        }
    }, 120); // 数字跳动间隔
});