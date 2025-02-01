let currentStage = 1;

function nextStage(stage) {
    if (validateStage(stage)) {
        document.getElementById(`stage${stage}`).classList.remove("active");
        document.getElementById(`stage${stage + 1}`).classList.add("active");
    }
}

function prevStage(stage) {
    document.getElementById(`stage${stage}`).classList.remove("active");
    document.getElementById(`stage${stage - 1}`).classList.add("active");
}

function validateStage(stage) {
    let inputs = document.querySelectorAll(`#stage${stage} input, #stage${stage} select`);
    for (let input of inputs) {
        if (!input.checkValidity()) {
            alert("⚠️ Please fill out all required fields correctly!");
            return false;
        }
    }
    return true;
}

document.getElementById("marsForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateStage(3)) {
        document.getElementById("marsForm").style.display = "none";
        document.getElementById("successMessage").classList.remove("hidden");
    }
});
