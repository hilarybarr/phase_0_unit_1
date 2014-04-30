# U1.W2: Chrome Dev Tools Challenge Reflection

* Describe the Document Object Model? What about it makes sense to you? What doesn't? What seems good and bad about it?

When an HTML file is parsed by a browser, the Document Object Model provides a tree-like structural representation of the elements in the HTML file. As a result, different scripting languages (noteably Javascript) can act on the elements to change their style, structure, and content. This makes it possible for a website to have events and for elements to act as objects that have properties and methods. Thus, webpages are able to be interactive and dynamic. 

It makes sense that there is a need for a model that connects an HTML document with more interactive languages, and that defines the relationship between different elements within a document. It seems good that the DOM makes it possible to represent elements as objects and be able to create events, properties, and methods. It may be good that the DOM is language independent, but I can't articulate why. I don't fully understand why there is a need for the DOM to be separate from HTML, rather than for Javascript to just call upon an HTML document itself. I also don't fully understand what interfaces are.



* How did using Chrome Web Tools to look at your site and a wordpress.com site compare?

My page took 2.10 s to load, while the Wordpress page took 5.0 s to load. This is due in part to there being significantly more images and Javascript code on the Wordpress page (as indicated in the Network tab).
The CSS source code for my file was written in the minify style, with all the text appearning on one line. This made it more challenging to read than the CSS on the Wordpress page. Two interesting things stood out in the Wordpress HTML code: you can see the time it took to generate the webpage within the DOM model, and the CSS stylesheet wasn't referenced until further down in the DOM model.



* Did you find Chrome Web Tools fun, helpful, or a pain to work with?

I found it fun and helpful, and look forward to continuing to play around with Chrome Web Tools after learning more Javascript.



* Did you have an "aha" moments or were any concepts solidified?

At first, I wasn't able to see local modifications in the Source tab and some features in my Devtools looked different than in the Codeschool examples. After trying a bunch of things to no avail, I had a hunch that my browser may have been outdated. I updated the lastest version of Chrome, and voila, local modifications worked and my Devtools looked the same as in the videos!



* Did you find any resources on your own that helped you better understand a topic? If so, please list it.

This resource clarified the difference between HTML and source code and DOM: http://css-tricks.com/dom/. This video was helpful too, especially the graphical representation of the DOM: http://www.youtube.com/watch?v=kMgbGJuYMpU. 
