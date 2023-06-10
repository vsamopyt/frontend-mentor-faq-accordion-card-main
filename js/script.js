const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const icons = document.querySelectorAll(".faq-icon");

for (let i = 0; i<questions.length; i++) {
    questions[i].addEventListener("click", ()=>{
        questions.forEach(element =>{
            element.classList.remove("active");
        })

        answers.forEach(element =>{
            element.classList.remove("active");
        })

        icons.forEach(element =>{
            element.classList.remove("active");
        })

        questions[i].classList.add("active");
        answers[i].classList.add("active");
        icons[i].classList.add("active");
    })
}
