function AS_Button_88e8e11b1d74467db9530dec08cc06e3(eventobject) {
    function TRANSFORM_ACTION_NEW____508e16ca451b4c89b659a61fc208b60a_Callback() {}
    var trans100 = kony.ui.makeAffineTransform();
    Form0798d8cd187534d.Button0917fc334bcb14d.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "width": "2dp",
            "transform": trans100
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
    }, {
        "animationEnd": TRANSFORM_ACTION_NEW____508e16ca451b4c89b659a61fc208b60a_Callback
    });
}