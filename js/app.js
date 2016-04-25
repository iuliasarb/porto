
function nextMsg() {
    if (messages.length == 0) {
        // once there is no more message, do whatever you want
        messages.length == true; //aici era alertul
    } else {
        // change content of message, fade in, wait, fade out and continue with next message
        $('#message').html(messages.shift()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
    }
};
// list of messages to display
var messages = [
    "I am",
    "I'm awesome!",
    "I'm an explorer",
    "I'm just cool",
    "Don't you think?"
];

// initially hide the message
$('#message').hide();

// start animation
nextMsg();

/*
var text = ["Welcome", "Hi", "Sup dude"];
var i = 0;
var elem = document.getElementById("message");
setInterval(change, 2000);
function change() {
 elem.innerHTML = text[i];
    i++;
    if(i >= text.length) { i = 0; }
}
*/