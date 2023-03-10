const textInput = document.querySelector(".inputs input");
const checkButton = document.querySelector(".inputs button");
const infoText = document.querySelector(".info-text");
let filterInput;

checkButton.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoText.style.display = "block";
    if(filterInput != reverseInput){
        return infoText.innerHTML = `No, <span>'${textInput.value}'</span> isn't a Palindrome`
    }
    return infoText.innerHTML = `Yes, <span>'${textInput.value}'</span> is a Palindrome`
})

textInput.addEventListener("keyup", () => {
    filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (filterInput) {
        return checkButton.classList.add("active");
    }
    infoText.style.display = "none";
    checkButton.classList.remove('active');
});
