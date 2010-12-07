/*!
	Preview script for Campaign Monitor template tags.
	
	See https://github.com/alexdunae/cm-preview/ for usage and the latest source.
	
	Copyright (c) 2010 Alex Dunae. See LICENSE for details.
	
	By Alex Dunae at Dialect (http://dialect.ca/).  Enjoy!
*/

var body = document.getElementsByTagName('body');

// show default text, single and double quoted
repl = body[0].innerHTML.replace(/\&lt;\$(title|description)[\s]+([\w]+='[\w]+'[\s]*)?default='(.[^']+)'[\s]*([\w]+='[\w]+'[\s]*)?\$\&gt;/ig, "$3");
repl = repl.replace(/\&lt;\$(title|description)[\s]+([\w]+="[\w]+"[\s]*)?default="(.[^"]+)"[\s]*([\w]+="[\w]+"[\s]*)?\$\&gt;/ig, "$3");

repl = repl.replace(/\&lt;\$repeatertitle\$\&gt;/ig, '<a href="#">Table of contents</a>');

// and show personalization fallbacks
repl = repl.replace(/\[(\w+),fallback=(.[^\]]+)\]/ig, "$2");
repl = repl.replace(/\[email\]/ig, '<a href="mailto:example@example.com">example@example.com</a>');

// dates
var dt = new Date(), 
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

repl = repl.replace(/\&lt;\$currentday\$\&gt;/ig, dt.getDate());
repl = repl.replace(/\&lt;\$currentdayname\$\&gt;/ig, days[dt.getDay()]);
repl = repl.replace(/\&lt;\$currentmonth\$\&gt;/ig, dt.getMonth() + 1);
repl = repl.replace(/\&lt;\$currentmonthname\$\&gt;/ig, months[dt.getMonth()]);
repl = repl.replace(/\&lt;\$currentyear\$\&gt;/ig, dt.getFullYear());

body[0].innerHTML = repl;

// show default images
var imgs = document.getElementsByTagName('img');
for(var i = 0; i < imgs.length; i++) {
	var src = imgs[i].getAttribute('src', 2);
	if (/\$imagesrc/i.test(src)) {
		// unescape attributes for Firefox
		if (src.indexOf('%') !== false) {
			src = unescape(src);
		}

		src = src.match(/default=['"](.[^'"]+)/i);
		if (src && src[1]) {
			imgs[i].setAttribute('src', src[1]);
		}
	}
}

// show multiple repeaters
var repeaters = document.getElementsByTagName('repeater'), 
    clones = [];

for(var i = 0; i < repeaters.length; i++) {
	clones[i] = repeaters[i].cloneNode(true);
}

for(var i = 0; i < clones.length; i++) {
	repeaters[i].insertBefore(clones[i], null);
}

// show multiple tableofcontents entries
var tocs = document.getElementsByTagName('tableofcontents'), 
    clones = [];

for(var i = 0; i < tocs.length; i++) {
	clones[i] = tocs[i].cloneNode(true);
}

for(var i = 0; i < clones.length; i++) {
	tocs[i].insertBefore(clones[i], null);
}
