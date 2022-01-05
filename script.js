var botController = (function () {
})();

var uiController = (function () {
})();


var controller = (function (botCntr, uiCntr) {
    var $chatCircle,
        $chatBox,
        $chatBoxClose,
        $chatBoxWelcome;


    function hideCircle(evt) {
        evt.preventDefault();
        $chatCircle.hide('scale');
        $chatBox.show('scale');
        $chatBoxWelcome.show('scale');
    }

    function chatBoxCl(evt) {
        evt.preventDefault();
        $chatCircle.show('scale');
        $chatBox.hide('scale');
        $chatBoxWelcome.hide('scale');
        $chatWraper.hide('scale');
    }


    function chatSbmBtn(evt) {
        if (evt.keyCode === 13 || evt.which === 13) {
            console.log("btn pushed");
        }
    }
    
    function init() {
        $chatCircle = $("#chat-circle");
        $chatBox = $(".chat-box");
        $chatBoxClose = $(".chat-box-toggle");
        $chatBoxWelcome = $(".chat-box-welcome__header");
        $chatCircle.on("click", hideCircle);
        $chatBoxClose.on("click", chatBoxCl);
        $chatInput.on("click", chatOpenMessage);
        $submitBtn.on("click", chatSbmBtn);
        $chatInput.on("keypress", chatSbmBtn);
    }

    return {
        init: init
    };

})(botController, uiController);
$(document).ready(controller.init);