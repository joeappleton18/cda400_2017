#Introduction 

Responsive design web design is an approach that allows the 
website to naturally adapt based on the device you are viewing it on.  <small>[http://alistapart.com/article/responsive-web-design](http://alistapart.com/article/responsive-web-design)</small>
 
 >> Rather than tailoring disconnected designs to each of an ever-increasing number of web devices, we can treat them as facets of the same experience. We can design for an optimal viewing experience, but embed standards-based technologies into our designs to make them not only more flexible, but more adaptive to the media that renders them. In short, we need to practice responsive web design.   
 
 <sub>**- Ethan Marcotte, A List Apart** </sub> 
![](assets/adaptive_site_2.png)
![](assets/adaptive_site.png)

##The importance of device compatability

- The number of smartphone users worldwide is set to be more than 2 billion in 2016 ([emarketer](http://www.emarketer.com/Article/2-Billion-Consumers-Worldwide-Smartphones-by-2016/1011694))
- More searches are now on mobile devices than desktops ([google](https://adwords.googleblog.com/2015/05/building-for-next-moment.html))


#The Viewport
**One of the most important concepts in responsive design**

- Viewport is **the display** through which we **view a website**
- You may recall form internet tech we would assumed that we were building our sites for a display with a width of 980px. Historically this was the typical minimum monitor/viewport size. 



##Viewport is simple when it comes to desktop browsers
![](assets/device_on_a_browser.png)

The viewport is the same size of the browser. When we make the browser small the viewport becomes smaller. 


##When it comes to mobile devices things are't quite as simple

![](assets/small_device.png)
>> The same site as above on a mobile, we can still see all the content but it's very small!


Typically on a mobile the viewport is set larger than the device, then entire view is scaled down to fit the device. This ensures the entire page is shown, the problem with this is the content will become very small.


###Breakpoints 

![](assets/responsive_layout.png)
>> Notice on the smaller view of smashingmagazine.com on the left a breakpoint is triggered and the menu is removed

* Along with the viewport, breakpoint are also a fundamental of responsive design. 

* A breakpoint is the point at which a website changes layout based on the width of the viewport. 

* Common breakpoints:  - Extra small devices, for example, Phones (<768px)  - Small devices, for example, tablets (3768px and <992px)  -  Medium devices, for example, desktop computers (3992px and <1200px)


#Testing responsive websites

In order to test responsive websites we need to view the site trough a variety of different devices. Although using actual different physical device is a legitimate test strategy, taking  such an approach in our day to day development workflow is not feasible. 

Chrome developer tools offers a handy bit of functionality that allows us to simulate different devices. 


![device_emulation_tools_up.png](assets/device_emulation_tools_up.png)

- Simply right click on the website you want to test and select **inspect element**	
- Click the device emulator
- Elect which device you want to emulate from the drop down that will appear at the top of the screen



#Laying out responsive websites 

##Media queries 

Media queries form one of the foundations of responsive design. They allow us to create **breakpoints** that change the look and feel of our websites based on the device size that it's being viewed on. 

In order to effectively use media queries, we nee to make sure that the viewport is representative of the device width. We can achieve this by using the viewport meta tag:

`<meta name="viewport" content="width=device-width, initial-scale=1">`


```
@media (query) {
  /* we can then place rules in here */
}
```

Using media queries we can check for `min-width`, `min-height` and `max-height`



- As mentioned above we place our media queries in directly in the style sheet.   Consider the following example:

```html

body {
  
  background-color:green;
  
}

@media(max-width:500px) {
  body {
     background-color:yellow;
  }

}
```
>> [Code Pen Example](https://codepen.io/joeappleton18/pen/yaGqkK)


- The resulting outcome of the above media query is the background colour of our website will change to yellow when the viewport is smaller than or equal to 500px

- We can have multiple media queries in one CSS file to target different device sizes. Below are some common device sizes that we may want to target:

```html

    
    /* Custom, iPhone Retina */ 
    @media (max-width : 320px) {

    }

    /* Extra Small Devices, Phones */ 
    @media (max-width : 480px) {

    }

    /* Small Devices, Tablets */
    @media (max-width : 768px) {

    }

    /* Medium Devices, Desktops */
    @media (max-width : 992px) {

    }

    /* Large Devices, Wide Screens */
    @media (max-width : 1200px) {

    }
```

#Putting it all together

![](assets/resonsivevsdesktop.png)

**html**

```html

<div class="wrapper">
 
      <section class="left">
        <h2> This is a section </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia consectetur magni numquam sed, tempore doloremque molestias. Impedit, accusantium praesentium obcaecati quaerat eum earum totam similique saepe ut repellat amet.</p>
      </section>
      <section class="right">
        
        <h2>This is a section</h2>
        <p> ...</p>
        
      </section>
   
      <div class="bottom-section">
        
        <h3> This is a less important sections</h3>
        <p> ...</p>
      
      </div> 
      <!-- ./bottom-section -->   
</div>
<!-- /.wrapper -->

```

**css**

```css
* {
  margin: 0%;
  padding: 0%
}

.wrapper {
  overflow: auto;
}

.left, .right {
  float: left;
  width: 50%;
}

.bottom-section {
  margin-top: 20%;
  width: 100%;
}


@media (max-width : 400px) {
    .bottom-section {
        display: none;
    }
    
  .left, .right {
         margin-top: 10%;
         float: left;
         width: 100%;
   } 
  
  p {
    font-size: 12px;
  }

}

```
>> A responsive demo, [codepen example](https://codepen.io/joeappleton18/pen/RjdGBR)


- The above example demonstrates a very simple responsive website
- We can get much more advanced, but for the purpose of this course you will only be required to work with one breakpoint. 
- In this case, we have set a breakpoint of `@media (max-width : 400px)`. The rules within this section will only be applied for devices with a viewport smaller than 400px
- Notice how we can remove sections by using  `display: none;` this is a common approach 







