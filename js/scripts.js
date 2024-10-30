let selectedSet = "set1";

document.querySelectorAll('.question-set-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.question-set-btn').forEach(btn => btn.classList.remove('selected1'));
        this.classList.add('selected1');
        selectedSet = this.getAttribute('data-set');
        // document.getElementById('start-test').disabled = false;
    })
})


document.getElementById('start-test').addEventListener('click', function() {
    window.location.href = `questions.html?set=${selectedSet}`;
})
