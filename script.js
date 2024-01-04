function start() {
    $(".start").hide();
    $(".question").show();
    displayQuestion();
}

$(document).ready(function() {
    var num = 1;
    var q = {
        // ... (질문 객체는 동일하게 유지)
    };
    var scores = {"EI": 0, "SN": 0, "TF": 0, "JP": 0};

    function displayQuestion() {
        var currentQ = q[num];
        $("#title").text(currentQ.question);
        $("#A").text(currentQ.A).data("type", currentQ.type);
        $("#B").text(currentQ.B).data("type", currentQ.type);
    }

    $("#A, #B").click(function () {
        var type = $(this).data("type");
        scores[type] += (this.id === "A" ? 1 : 0);
        num++;
        if (num > Object.keys(q).length) {
            calculateMBTI();
        } else {
            displayQuestion();
        }
    });

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
