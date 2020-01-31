$(document).ready(function () {

    let lowKey = $('#keyboard-lower-container');
    let upKey = $('#keyboard-upper-container');
    let l = 0;
    let s = 0;
    let sentenceHolder = $('#sentence');
    let sentences = [
        'ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
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
    let wordCount = 0;
    let timeStarter = Date.now();

    $(document).keypress(function (e) {
        let keyCharacters = $('#' + e.keyCode);
        keyCharacters.css('background-color', "darkorange");

        if (currentSent.charCodeAt(l) === e.keyCode) {
            yellowBox.css('left', '+=17.25');
            l++;
            letterHolder.empty();
            letterHolder.append(currentSent[l]);
            feedBack.append(`<span class= 'glyphicon glyphicon-ok'></span>`);
        
            console.log(e.keyCode);
            console.log(finishTime);
            

        } else {
            let l = 0;
            feedBack.append(`<span class= 'glyphicon glyphicon-remove'></span>`);
            console.log(e.keyCode);
        };
        
        if (l === currentSent.length) {
            l = 0;
            s++;
            currentSent = sentences[s];
            sentenceHolder.text(currentSent);
            currentLett = currentSent.substring(l, l + 1); //this serves as a tracker for the place of what letter you're on and in what sentence.
            sentenceHolder.append(currentSent[s]);
            letterHolder.text(currentLett);
            yellowBox.css('left', '17.25px'); //resets the yellowBox back to its original position then to which it will reset the movement of the yellowBox again.
            feedBack.text('');
            // .TEXT ACTUALLY ALLOWS YOUR DIV TO BE CLEARED OUT AND LETS NEW INFO BE OUT INTO THE CONTAINING DIV.
        };

    

        for (i = 0; i < sentences.length; i++) {
            if (currentSent[l].charAt(i) == " ") {
                wordCount++;
                console.log('You Got It!');
            }; 
        };
        // THIS WORKS FOR SEEING HOW MANY WORDS YOU HAVE SUCCESSFULLY TYPED


        $(document).keyup(function (e) {
        keyCharacters.css('background-color', 'whitesmoke');
    });
});

let finishTime = Date.now() - timeStarter;
// INSERT THE GAME OVER ALERT HERE SO THAT THE CONSOLE LOG FUNCTION IS ONLY FIRED ONCE AFTER THE GAME HAS ENDED.

console.log('Time completed was: ' + finishTime + 'ms');

});