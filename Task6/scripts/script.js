var win;
function openWin() {
    typeLetter();
}
const message = "Welcome to task1";
let index = 0;


function typeLetter() {
    win = window.open('', 'TypeWriterWindow', 'width=400,height=200');
    if (index < message.length) {
        win.document.write(message.charAt(index));
        index++;
        setTimeout(typeLetter, 100); 
    } else {
        setTimeout(() => {
                win.close();
        },1000);
    }
}



