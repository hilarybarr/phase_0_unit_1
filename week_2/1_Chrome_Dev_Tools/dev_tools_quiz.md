#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ

* Screenshot of my Codeschool Points: http://i1371.photobucket.com/albums/ag309/hilaryrose/CodeschoolPoints_zps8844cea3.png


* Explain which tabs support the following actions and how.

  * Realtime editing of HTML and CSS: 
  
  Elements: The Elements tab lets you see and edit the DOM and CSS of a webpage in realtime. To view the code of a specific element on a webpage, you right click on it and select Inspect Element to go to its corresponding part of the code in the Elements tab. To edit an element in the DOM as HTML, you can right click on it and select "Edit as HTML." You can add a new CSS style element by clicking the plus sign in the top right of the styles view. 

  Source: The Source tab lets you modify the source code of the original source file. You can also see local modifications and decide whether to apply a revision or revert to the origninal content.



  * Javascript Debugging:


  Source: In the Source tab, you can get insight into errors by clicking Pause on Exceptions, which pauses code as it's executing so you can examine the state of variables. You can also set a debugger break point in the code, which will make execution pause at that point to determine if there's a bug. 

  Resources: When you are reading data from local storage and a value is undefined, you look at events in the local storage in Resources to determine what is wrong. 

  Console: The Console shows the log output, which helps with debugging. 

  Network: To debug, you need to disable the cache (already downloaded components of a webpage) in the Network tab so you see what happens when a person first visits the page. If a file is not found, it would indicate that it's worth removng.





  * Performance Optimization: 

  Timeline: In the TImeline tab, you can see how long frames took to render and can identify memory leaks, which can slow the page down.

  Profiles: The Profiles tab shows which parts of Javascript are slowing a page down. Cicking the Collect javascript CPU button shows how much CPU time functions took. You can also see a heap snapshot to determine where a memory leak is occurring. 

  Source: In the Source tab, you can optimize stylesheet order by making CSS load before Javascript. 

  Network: The Network tab indicates the status, type, and size of a file and how fast a page loads. The network panel helps optimize performance by pointing out bottlenecks in network requests. For example, you may see in the timeline and size columns that an image is taking a long time to load because it is a large jpg, which would suggest the need to upload a smaller png instead. If you click on the name of a file, you can get more information about that request.

  Pagespeed: The Pagespeed tab provides suggestions for how to increase the speed of a webpage. For example, you may be advised to combine Javascript files to reduce the amount of network requests that are made.You may also be advised to remove unneeded requests.








* What's the quick key for your OS to spawn the Dev Tools inspector?
Command-Option-I




* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!) The background color is a shade of black that is represented as #0b0f11.
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
My image link: http://i1371.photobucket.com/albums/ag309/hilaryrose/ScreenShot2014-04-29at70342PM_zpse5c2b6eb.png




* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
You can't tweak the color of the text "the most important things are not tihngs" because they are not a text element but rather are embedded within the home_bg.gif image.




* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? The largest image is the picture of Times Square.
  * Explain how you would find out this information, and list the URL of offending image here and how big it is. You find out what the largest image is by sorting paths by size and seeing which picture is the largest. The largest image on ticketswizard.com, at 316 KB, is located at this URL: 92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png 




* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
The lowest hanging fruit to optimize the website is to optimize images by properly formatting and compressing images to save bytes of data. Doing this for the images on this webpage would reduce their size by 885.9KiB (a 39% reduction).
