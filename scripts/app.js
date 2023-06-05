//Global Variables
let hello = document.querySelector('mark');


// Timeout Function to be called when a timeout is needed.
function timeOut(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, x);
    });
}

// Build string character by character.
async function charTyper(x){
    for(i = 0; i < x.length; i++){
        hello.textContent += x[i];
        await timeOut(500);
    }
}

charTyper('Hello');