const skills = ["JavaScript", "HTML"];
const skill = document.getElementsByClassName("skill");

function animate(element) {

    const skill = document.getclassById("skill");
    for(let i = 0; i < skills.length;i++){
        let elementWidth = skill.offsetWidth;
        let parentWidth = skill.parentElement.offsetWidth;
        let flag = 0;

        setInterval(() => {
            element[i].style.marginLeft = --flag + "px";
    
            if (elementWidth == -flag) {
                flag = parentWidth;
            }
        }, 10);
    }
}

console.log(skill[1])