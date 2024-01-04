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
        3: {"type": "EI", "question": "새로운 환경에서도 빠르게 적응하나요?", "A": "예", "B": "아니오"},
        4: {"type": "SN", "question": "구체적인 사실과 세부 사항에 집중하는 편인가요?", "A": "예", "B": "아니오"},
        5: {"type": "SN", "question": "새로운 아이디어와 가능성을 상상하는 것을 좋아하나요?", "A": "아니오", "B": "예"},
        6: {"type": "SN", "question": "실제 경험을 바탕으로 결정하는 것을 선호하나요?", "A": "예", "B": "아니오"},
        7: {"type": "TF", "question": "결정을 내릴 때 논리와 분석을 중시하나요?", "A": "예", "B": "아니오"},
        8: {"type": "TF", "question": "타인의 감정을 고려하여 결정을 내리는 편인가요?", "A": "아니오", "B": "예"},
        9: {"type": "TF", "question": "문제 해결 시 객관적인 정보를 우선시하나요?", "A": "예", "B": "아니오"},
        10: {"type": "JP", "question": "계획보다는 즉흥적인 행동을 선호하나요?", "A": "예", "B": "아니오"},
        11: {"type": "JP", "question": "목표를 달성하기 위해 체계적인 계획을 세우는 것을 좋아하나요?", "A": "아니오", "B": "예"},
        12: {"type": "JP", "question": "일정과 계획을 미리 세우는 것이 안정감을 준다고 느끼나요?", "A": "예", "B": "아니오"}
        };
    var scores = {"EI": 0, "SN": 0, "TF": 0, "JP": 0};

    function displayQuestion() {
        var currentQ = q[num];
        $("#title").text(currentQ.question);
        $("#A").text(currentQ.A).data("type", currentQ.type);
        $("#B").text(currentQ.B).data("type", currentQ.type);
    }

    // 이벤트 위임을 사용하여 동적으로 생성된 요소에도 이벤트 핸들러 적용
    $(".question").on("click", "#A, #B", function () {
        var type = $(this).data("type");
        scores[type] += (this.id === "A" ? 1 : 0);
        num++;
        if (num > Object.keys(q).length) {
            calculateMBTI();
        } else {
            displayQuestion();
        }
        // 히든 요소에 점수 업데이트
        $("#" + type).val(scores[type]);
    });

    function calculateMBTI() {
        var mbtiType = "";
        mbtiType += (scores["EI"] >= 2) ? "E" : "I";
        mbtiType += (scores["SN"] >= 2) ? "S" : "N";
        mbtiType += (scores["TF"] >= 2) ? "T" : "F";
        mbtiType += (scores["JP"] >= 2) ? "J" : "P";
        window.location.href = "result/" + mbtiType + ".html";
    }
});
