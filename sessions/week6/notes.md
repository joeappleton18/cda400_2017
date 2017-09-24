#Review 

This week you will get the opportunity to complete a mock TCA. This is nothing to worry about, you should look at it as a great opportunity to get some feedback from your tutor and identify any areas that may need some extra work. 

#Knowledge check list 

In order to succeed in the mock TCA you should ensure you understand the areas outlined below. **Remember**, it's an open book test so we're testing your ability to utilise the techniques below **not** your memory. 


## HTML Structure 

[Week 1 - Introduction to HTML](https://sirus21.gitbooks.io/cda400/content/sessions/week1/notes.html)

[Week 2 - Tables and Nested Tags](https://sirus21.gitbooks.io/cda400/content/sessions/week2/notes.html)

###Revision Points

- You should know how to layout the skeleton of an HTML page 
- You should know how to use the following tags 
	- `<div>`
	- `<p>`
	- `<ul>` you will need to use unordered lists in order to make [menus](https://sirus21.gitbooks.io/cda400/content/sessions/week5/notes.html#css3_gradient_and_radius) 
	- `<table>`
	- `<h1> - <h6>` make sure you only use 1 `h1` for the primary heading
	
	
- Ensure that you use the tab key to indent each tag relative to its parent tag

	- You will gain marks for correctly formatting you code, make sure you indent correctly 
    
    - This is incorrect 
     
    ```
    <div>
    <p> Some text in here</p>
    </div>
    ```
    
     - This is correct     
    
    ```
    <div id="content_section">
    	<p> Some text in here</p>   
    </div> <!-- /#content_section -->
    ```
	
- **Note**, as per the above example it's also important to use an HTML comment to mark closing DIV's

	
	
##CSS structure 

[Week 3 - Introduction to CSS](https://sirus21.gitbooks.io/cda400/content/sessions/week3/notes.html)

[Week 4 - CSS and Layouts](https://sirus21.gitbooks.io/cda400/content/sessions/week4/notes.html)

[Week 5 - Using CSS to Make Menus](https://sirus21.gitbooks.io/cda400/content/sessions/week5/notes.html)


###Revision Point

- `class` and `id` Attributes , know how to apply `classes` and `id`'s to tags. **Remember**, a `id` is alway unique to a given page
		
- Know how to style elements by targeting `class`, `id` and `html` selectors

	**HTML**
		
		<div id="section">    
			<h1> Internet Technology </h1> 
			<p class="green"> This is a paragraph</p>	
		</div> <! -- /#section  -->
		
		
   **CSS**
   
   		h1 {  
   			font-size: 20px;
   		}
   		
   		#section {
   			width: 200px; 
   			float: left; 
   		}
   		
   		.green {
   			color:green; 
   		}


- Understand the basics of the box model how to use:

 - width  -   `width: 100px`
 - height -  `height: 100px`
 - margin -  `margin: 10px 10px 10px 10px`
- padding -  `padding: 10px 10px 10px`
- border  -  `border 1px solid green`

	
- **Understand float layout and know how to use it to position `div`'s**

		#wrapper{
			width: 80%
		}
		#box1 {
		  width: 20%;
		  float: left;
		}
		#box2 {   
		   width: 20%; 
		   float: left;   
		}	

	
	