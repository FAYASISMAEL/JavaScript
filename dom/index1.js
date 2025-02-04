function isAnswer(btn) {
    let answer = btn.previousElementSibling;
    if(answer.style.display == 'none') {
        answer.style.display = 'block'
    }
    else{
        answer.style.display = 'none'
    }
}