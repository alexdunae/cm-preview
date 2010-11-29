# Preview for Campaign Monitor Template Tags

This little bit of JavaScript makes designing with Campaign Monitor's template tags much easier.

It replaces all Campaign Monitor's template tags with their fallback defaults.  You can preview the final output instead of all those angle brackets and broken images.

On the left of the screenshot you can see the usual markup madness.  On the right you see the results of the script.

![Screenshot](/alexdunae/cm-preview/raw/master/screenshot.jpg)

Specifically, this script:

* replaces `title` and `description` tags with their default text
* replaces `img` tags with their default images
* replaces the personalization (mail merge) tags with their fallback text
* duplicates each `repeater` so you can see how multiples will look
  
## Using the script

Link the script at the end of your HTML email file and view the file in your browser.

    <script src="cm-preview.js"></script>
  
You can also create a bookmarklet with the following address:

    javascript:var cmp=document.createElement('script');cmp.type='text/javascript';cmp.src='https://github.com/alexdunae/cm-preview/raw/master/cm-preview.js';var s=document.getElementsByTagName('body')[0];s.parentNode.insertBefore(cmp,s);" style="border: 1px solid #CCC; background-color: #EEE; padding: 5px;

## TODO

* test, test, test
* wrap elements in `a` tags if `link=true`
* add support for `tableofcontents`
* handle the rest of [Campaign Monitor's template tags](http://help.campaignmonitor.com/topic.aspx?t=129)

This is a rough-and-ready little script, lightly tested in Safari, Chrome and Firefox.  It's released under the MIT license.  Patches and improvements are most welcome.


Created by Alex Dunae at [Dialect](http://dialect.ca/).