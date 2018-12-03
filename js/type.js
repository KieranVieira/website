var captionLength = 0;
var caption = '';


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
        typingEffect();
});

function typingEffect() {
    caption = 'Full stack web developer/Graphic Designer <br/> Email: Kieranvieira@live.com <br/> Role: Student <br/> Bio: I am a passionate Graphic Designer currently working on improving my front end development skills using languages such as HTML, CSS, JavaScript, and other frameworks. I have been doing freelance web development jobs using Wordpress CMS, HTML, and CSS for 2 years and Graphic Design for almost 6 years. <br/> <p class="continue"><a href="#portfolio">Click here or press space to continue</a></p>';
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}