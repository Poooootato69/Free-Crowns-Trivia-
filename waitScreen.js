var time = 60;
setInterval(() => {
    time -= 1;
    document.getElementById('timeLeft').textContent = time + ' Seconds Remaining';
    document.getElementById('progressBar').value = 60 - time;
    if (time == 0)
        window.close();
}, 1000);

document.getElementById('nextQuizButton').addEventListener('click', nextQuiz);
function nextQuiz() {
    chrome.runtime.sendMessage({ wait: 'over' });
    window.close();
}