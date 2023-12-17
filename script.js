// 전역 스코프에서 start 함수 정의
function start() {
    $(".start").hide();
    $(".question").show();
    displayQuestion();
}

$(document).ready(function() {
    var num = 1;
    var q = {
        1: {"type": "EI", "question": "파티에서 새로운 사람들과 쉽게 어울리나요?", "A": "예", "B": "아니오"},
        2: {"type": "EI", "question": "혼자 있는 시간이 많을수록 에너지가 충전되나요?", "A": "아니오", "B": "예"},
        3: {"type": "SN", "question": "구체적인 사실과 세부 사항에 집중하는 편인가요?", "A": "예", "B": "아니오"},
        4: {"type": "SN", "question": "새로운 아이디어와 가능성을 상상하는 것을 좋아하나요?", "A": "아니오", "B": "예"},
        5: {"type": "TF", "question": "결정을 내릴 때 논리와 분석을 중시하나요?", "A": "예", "B": "아니오"},
        6: {"type": "TF", "question": "타인의 감정을 고려하여 결정을 내리는 편인가요?", "A": "아니오", "B": "예"},
        7: {"type": "JP", "question": "계획보다는 즉흥적인 행동을 선호하나요?", "A": "예", "B": "아니오"},
        8: {"type": "JP", "question": "목표를 달성하기 위해 체계적인 계획을 세우는 것을 좋아하나요?", "A": "아니오", "B": "예"}
    };
    var scores = {"EI": 0, "SN": 0, "TF": 0, "JP": 0};

    function displayQuestion() {
        var currentQ = q[num];
        $("#title").text(currentQ.question);
        $("#A").text(currentQ.A);
        $("#B").text(currentQ.B);
        $("#type").val(currentQ.type);
    }

    $("#A, #B").click(function () {
        var type = $("#type").val();
        scores[type] += (this.id === "A" ? 1 : -1);
        num++;
        if (num > Object.keys(q).length) {
            calculateMBTI();
        } else {
            displayQuestion();
        }
    });

    function calculateMBTI() {
        var mbtiType = "";
        mbtiType += (scores["EI"] > 0) ? "E" : "I";
        mbtiType += (scores["SN"] > 0) ? "S" : "N";
        mbtiType += (scores["TF"] > 0) ? "T" : "F";
        mbtiType += (scores["JP"] > 0) ? "J" : "P";
        window.location.href = "result/" + mbtiType + ".html";
    }
});
