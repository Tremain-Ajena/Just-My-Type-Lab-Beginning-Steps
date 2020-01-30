$(document).ready(function () {

    let lowKey = $('#keyboard-lower-container');
    let upKey = $('#keyboard-upper-container');
    let l = 0;
    let s = 0;
    let sentenceHolder = $('#sentence');
    let sentences = [
        'ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot <br/>',
        'oat itain oat tain nate eate tea anne inant nean <br/>',
        'itant eate anot eat nato inate eat anot tain eat <br/>',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let currentSent = sentences[s];
    let currentLett = currentSent[l];
    let letterHolder = $('#target-letter');


    sentenceHolder.append(currentSent);
    letterHolder.append(currentLett[l]);
    // THIS DISPLAYS MY SENTENCES IN THE DIV MEANT FOR THE SENTENCES TO APPEAR.


    upKey.hide();
    // THIS HIDES THE UPPERCASE KEYBOARD UNTIL THE SHIFT KEY IS PRESSED DOWN.


    $(document).keydown(function (shift) {
        if (shift.keyCode == 16) {
            lowKey.hide();
            upKey.show();
        };
        // THIS FUNCTION BRINGS UP THE UPPERCASE KEYBOARD WHEN THE SHIFT BUTTON IS PRESSED.
    });

    $(document).keyup(function (shift) {
        if (shift.keyCode == 16) {
            upKey.hide();
            lowKey.show();
        };
        // THIS FUNCTION BRINGS THE LOWERCASE KEYBOARD BACK UP WHEN THE SHIFT BUTTON IS RELEASED.
    });

    let feedBack = $('#feedback');
    let yellowBox = $('#yellow-block');

    $(document).keypress(function (e) {
        let keyCharacters = $('#' + e.keyCode);
        keyCharacters.css('background-color', "darkorange");

        if (currentSent.charCodeAt(l) === e.keyCode) {
            yellowBox.css('left', '+=19.25');
            l++;
            letterHolder.empty ();
            letterHolder.append(currentSent[l]);
            feedBack.append(`<span class= 'glyphicon glyphicon-ok'></span>`);
            console.log(e.keyCode);
            if (currentSent[l] >= currentSent[l].length) {
                sentenceHolder.append(currentLett[s]);
                s++;
            };
        } else {
            let l= 0;
            feedBack.append(`<span class= 'glyphicon glyphicon-remove'></span>`);
            console.log(e.keyCode);
        };
        $(document).keyup(function (e) {
            keyCharacters.css('background-color', 'whitesmoke');
        });
    });


    // showSentence();

    // function showSentence() {
    //     sentenceHolder.append(currentSent);
    //     letterHolder.append(currentLett);

    //     console.log(currentSent);
    //     console.log(currentLett[0]);

    //     s++;

    // };
});