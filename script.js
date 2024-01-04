function start() {
    document.querySelector(".start").style.display = 'none';
    document.querySelector(".question").style.display = 'block';
    displayQuestion();
}

document.addEventListener("DOMContentLoaded", function() {
    var num = 1;
    var q = {
        // ... (질문 객체는 동일하게 유지)
    };
    var scores = {"EI": 0, "SN": 0, "TF": 0, "JP": 0};

    function displayQuestion() {
        var currentQ = q[num];
        document.getElementById("title").textContent = currentQ.question;
        var buttonA = document.getElementById("A");
        var buttonB = document.getElementById("B");
        buttonA.textContent = currentQ.A;
        buttonB.textContent = currentQ.B;

        buttonA.onclick = function() { answerQuestion(currentQ.type, 'A'); };
        buttonB.onclick = function() { answerQuestion(currentQ.type, 'B'); };
    }

    function answerQuestion(type, answer) {
        scores[type] += (answer === 'A' ? 1 : 0);
        num++;
        if (num > Object.keys(q).length) {
            calculateMBTI();
        } else {
            displayQuestion();
        }
    }

    function calculateMBTI() {
        var mbtiType = "";
        mbtiType += (scores["EI"] >= 2) ? "E" : "I";
        mbtiType += (scores["SN"] >= 2) ? "S" : "N";
        mbtiType += (scores["TF"] >= 2) ? "T" : "F";
        mbtiType += (scores["JP"] >= 2) ? "J" : "P";
        window.location.href = "result/" + mbtiType + ".html";
    }

    window.start = start;
});
