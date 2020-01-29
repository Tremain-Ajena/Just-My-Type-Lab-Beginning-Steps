$(document).ready(function () {
    var lowKey = $('#keyboard-lower-container');
    var upKey = $('#keyboard-upper-container');

    upKey.hide();

    $(document).keydown(function (shift) {
        if (shift.keyCode == 16) {
            lowKey.hide();
            upKey.show();
        };
    });

    $(document).keyup(function (shift) {
        if (shift.keyCode == 16) {
            upKey.hide();
            lowKey.show();
        };
    });

    $(document).keypress(function (e) {
        let keyCharacters = $('#' + e.keyCode);
        keyCharacters.css('background-color', "darkorange");
        $(document).keyup(function (e) {
            keyCharacters.css('background-color', 'whitesmoke');
        });
    });

});