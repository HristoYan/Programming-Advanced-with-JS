function extractText() {
    let lita = document.querySelectorAll('#items li');
    let answerArea = document.querySelector('#result');
    for (const li of lita) {
        answerArea.value += li.textContent + '\n';
    }
}