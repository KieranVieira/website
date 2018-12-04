var captionLength = 0;
var caption = '';


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
        typingEffect();
});

function typingEffect() {
    caption = '<p>Full Stack Web Developer/Graphic Designer</p> <br/> <p>Email: Kieranvieira@live.com</p> <br/> <p>Role: Student</p> <br/> <p>Bio: I am a passionate Graphic Designer currently working on improving my front end development skills using languages such as HTML, CSS, JavaScript, and other frameworks. I have been doing freelance web development jobs using Wordpress CMS, HTML, and CSS for 2 years and Graphic Design for almost 6 years.</p> <br/> <p class="continue"><a href="#portfolio">Click here or press space to continue <span class="blink">_</span></a></p>';
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 40);
    } else {
        captionLength = 0;
        caption = '';
    }
}