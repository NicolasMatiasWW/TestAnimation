function AS_Button_1ab0937998ea4dac8ea447ceec2b5e33(eventobject) {
    function TRANSFORM_ACTION____dde7d92f93bd4c7ba93c89c179b5c7fd_Callback() {}
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
        "animationEnd": TRANSFORM_ACTION____dde7d92f93bd4c7ba93c89c179b5c7fd_Callback
    });
}