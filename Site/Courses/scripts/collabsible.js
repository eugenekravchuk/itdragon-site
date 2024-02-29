const programmContainers = document.querySelectorAll(
    ".course_programm_container"
);
const expandableLists = document.querySelectorAll(".expandable_list");

for (var i = 0; i < programmContainers.length; i++) {
    let count = i;
    programmContainers[i].addEventListener("click", function () {
        expandableLists[count].classList.toggle("active_toggle");
    });
}

const questionMains = document.querySelectorAll(".question_main");
const expandableQuestions = document.querySelectorAll(".expandable_question");

console.log(questionMains);
console.log(expandableQuestions);

for (var i = 0; i < questionMains.length; i++) {
    let count = i;
    console.log(expandableQuestions[i]);
    questionMains[i].addEventListener("click", function () {
        console.log(count);
        expandableQuestions[count].classList.toggle("active_toggle_questions");
    });
}
