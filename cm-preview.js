/*!
	Preview script for Campaign Monitor template tags.
	
	See https://github.com/alexdunae/cm-preview/ for usage and the latest source.
	
	Copyright (c) 2010 Alex Dunae. See LICENSE for details.
	
	By Alex Dunae at Dialect (http://dialect.ca/).  Enjoy!
*/

/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: false, newcap: true, immed: true */

var CMPreview = {
	run : function () {
		CMPreview.replaceMergeTags();
		CMPreview.replaceDates();
		CMPreview.showDefaultImages();
		CMPreview.cloneMultiples();
	},
	
	replaceMergeTags : function () {
		var body = document.getElementsByTagName('body'),
		    html = body[0].innerHTML;
		
		// run twice for both single and double quoted strings
		html = html.replace(/\&lt;\$(title|description)[\s]+([\w]+='[\w]+'[\s]*)?default='(.[^']+)'[\s]*([\w]+='[\w]+'[\s]*)?\$\&gt;/ig, "$3");
		html = html.replace(/\&lt;\$(title|description)[\s]+([\w]+="[\w]+"[\s]*)?default="(.[^"]+)"[\s]*([\w]+="[\w]+"[\s]*)?\$\&gt;/ig, "$3");

		html = html.replace(/\&lt;\$repeatertitle\$\&gt;/ig, '<a href="#">Table of contents</a>');
		html = html.replace(/\[(\w+),fallback=(.[^\]]+)\]/ig, "$2");
		html = html.replace(/\[email\]/ig, '<a href="mailto:example@example.com">example@example.com</a>');

		body[0].innerHTML = html;
	},
	
	replaceDates : function () {
		var body = document.getElementsByTagName('body'),
		    html = body[0].innerHTML,
		    dt = new Date(), 
		    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		
		html = html.replace(/\&lt;\$currentday\$\&gt;/ig, dt.getDate());
		html = html.replace(/\&lt;\$currentdayname\$\&gt;/ig, days[dt.getDay()]);
		html = html.replace(/\&lt;\$currentmonth\$\&gt;/ig, dt.getMonth() + 1);
		html = html.replace(/\&lt;\$currentmonthname\$\&gt;/ig, months[dt.getMonth()]);
		html = html.replace(/\&lt;\$currentyear\$\&gt;/ig, dt.getFullYear());
		
		body[0].innerHTML = html;
	},
	
	showDefaultImages : function () {
		var imgs = document.getElementsByTagName('img'), 
		    src = '',
		    i = null;

		for (i = 0; i < imgs.length; i += 1) {
			src = imgs[i].getAttribute('src', 2);
			if (/\$imagesrc/i.test(src)) {
				// unescape attributes for Firefox
				if (src.indexOf('%') !== false) {
					src = decodeURIComponent(src);
				}

				src = src.match(/default=['"](.[^'"]+)/i);
				if (src && src[1]) {
					imgs[i].setAttribute('src', src[1]);
				}
			}
		}
	},
	
	cloneMultiples : function () {
		// show multiple repeaters
		var nodes = document.getElementsByTagName('repeater'), 
		    clones = [],
		    i = 0;

		for (i = 0; i < nodes.length; i += 1) {
			clones[i] = nodes[i].cloneNode(true);
		}

		for (i = 0; i < clones.length; i += 1) {
			nodes[i].insertBefore(clones[i], null);
		}

		// show multiple tableofcontents entries
		nodes = document.getElementsByTagName('tableofcontents');
		clones = [];

		for (i = 0; i < nodes.length; i += 1) {
			clones[i] = nodes[i].cloneNode(true);
		}

		for (i = 0; i < clones.length; i += 1) {
			nodes[i].insertBefore(clones[i], null);
		}
	}
};

CMPreview.run();
