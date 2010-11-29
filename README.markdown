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
  
This is a rough-and-ready little script, lightly tested in Safari, Chrome and Firefox.  It's released under the MIT license.  Patches and improvements are most welcome.

Created by Alex Dunae at [Dialect](http://dialect.ca/).