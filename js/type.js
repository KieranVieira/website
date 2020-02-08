var captionLength = 0;
var caption = '';


$(document).ready(function() {
    captionEl = $('#caption');
        typingEffect();
});

function typingEffect() {
    caption = '<p>Full Stack Software Engineer/Graphic Designer</p> <br/> <p>Email: Kieranvieira@live.com</p> <br/> <p>Role: Software Engineer at Yaar.Ai</p> <br/> <p>Bio: I am a passionate Software Engineer currently focused on front end development skills using languages such as HTML, CSS, JavaScript, and other frameworks. I have been doing freelance web development jobs using Wordpress CMS, HTML, CSS, and JS for 2 years plus Graphic Design for almost 6 years. Email me for more info.</p> <br/> <p class="continue"><a href="#services">Click here to continue <span class="blink">_</span></a></p>';
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 25); //default 45
    } else {
        captionLength = 0;
        caption = '';
    }
}