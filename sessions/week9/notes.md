#Session 8 Laying out Forms

We've already looked at how to create forms and sub form elements. This week we'll focus on how to style and lay out form controls.  

##Laying out forms 

Forms are probably one of the more complex structures that you'll encounter in HTML. Therefore, making them layout correctly can prove somewhat tricky. 

It's important that we design usable and accessible forms:

*  More people will be able to fill out your forms
*  You'll get more customers and make more money
*  Accessible forms lead to a better overall user experience
*  Well coded forms can easily utilise analytics packages such as [Google Analytics](https://www.google.co.uk/analytics/)

Consider the below form ([source code here](https://raw.githubusercontent.com/sirus21/Internet_technology/master/session8/practicals/session_8_raw_form.html). As you can see by default it's completely unusable. 


![Form Screen Shot](assets/form_screen_shot.png)

In the next few pages we're going to go through a typical design process that would be used to layout a form.  




#1) The `<fieldset>` and `<legend>` elements

   
* The `<fieldset> .. </fieldset>` tag is used to group common form elements together

			<fieldset>  
				<label> First Name </label> <input type = "text" name="firstName">   
				<label> Last Name </label> <input type  = "text" name="lastName">   
 			</fieldset> 
* By default, `<fieldset> .. </fieldset>` is a block level element and has a border, you should know how to change this using CSS

<fieldset>  
		<label> First Name </label> <input type = "text" name="firstName">   
		<label> Last Name </label> <input type  = "text" name="lastName">   
</fieldset> 

* We can use the `<legend> .. </legend>` element to add a title to our `<fieldset>`   

```html		
<fieldset>  
	<legend> Name </legend>
		<label> First Name: </label> <input type = "text" name="firstName">   
		<label> Last Name: </label> <input type  = "text" name="lastName">   
</fieldset>
	
<fieldset>  
<legend> Name </legend>
	<label> First Name: </label> <input type = "text" name="firstName">   
	<label> Last Name: </label> <input type  = "text" name="lastName">   
</fieldset>
```



#2) `<p>` tags can be used to create separate lines

Input elements and labels are inline, therefore we need to wrap them in a block level elements so they sit on their own line. The W3C recommend to wrap form elements in `<p>` tags in order create new lines. 
```html
<fieldset> 
	<legend> Name </legend>
   <p> <label> First Name: </label> <input type = "text" name="firstName"> </p>
   <p><label> Last Name: </label> <input type  = "text" name="lastName"> </p>
</fieldset>  
	

 <fieldset> 
 		<legend> Name </legend>
       <p> <label> First Name: </label> <input type = "text" name="firstName"> </p>
       <p><label> Last Name: </label> <input type  = "text" name="lastName"> </p>
</fieldset>  

```



#Basic CSS For Forms 

- Consider the following un-styled form  

```html
<form id="payment">
    <!-- personal details -->  
    <fieldset>
        <legend>First Name</legend>
        <p><label for="firstName"> First Name </label> <input type = "text" name="firstName"> </p>
        <p><label for="credit_card_information"> Credit Card Information </label> <input type  = "text" name="credit_card_information"> </p>
    </fieldset>        
    <input type="submit">
</form>    

```

![](assets/unstyled_form.png)

 
- Just like with HTML, we can take pragmatic steps to lay the form out 

#1) Give the form an ID

 -  In order to style this form we need to give the form and id `<form id="payment">`
* We can now style this specific form using decent selectors e.g. `#payment legend {text-align: centre;} `

#2) Constrain the width of the form 

* Currently the form is too wide, let's give it a `width:500px`. Remember the `<form>` has an id attribute. We can use this to add styles


#3) Align the inputs


* To solve this problem we need to `float` the text inputs to the right. The problem is we can't just say `#payment input {float:right}` because our button is also a input and we don't want to style this yet. We need to just target `<input type="text">` in order to do this we can use the following CSS declaration:

		#payment input[type="text"] {
 			float: right;
		}
		
* You can change the `input[type="<insert type>"]` to whatever type of input you want to target

* Our text inputs are now aligned 


![assets](assets/laid_out_form.png)


#Further Styling Of Inputs

* You can change the can border colour and width of text inputs by implementing the border property 

```html			
#payment input[type="text"] {
		border: 1px solid green;    
}
``
	
* We can style our input button just like any other HTML element. Remember, we can change the text on the button from submit to anything we like by implementing the attribute `value`  e.g.  `<input type="submit" value="GO!">`. 

```html	 			
#payment input[type="submit"]  {
		border-radius: 4px; 
		border: solid 1px black; 
		font-size:20px;
		
	    
}
```
	
* <input type="submit" value="Press Me!" style=" border-radius: 4px; font-size:20px;border: solid 10px black 1px;">  



#Laying OutStyling Check And Radio Boxes

* We can use `<fieldset>` and  optional  `<legend>` to group together our related `<input>`'s 
* Just like with any other input we can use `<p>` tags to create a new line

<fieldset>
<legend> Transport </legend>
<p><input type="checkbox" name="vehicle" value="Bike">I have a bike<p>
<p><input type="checkbox" name="vehicle" value="Car">I have a car </p>
</fieldset>


```html
<fieldset>
	<legend> Transport </legend>
	<p><input type="checkbox" name="vehicle" value="Bike">I have a bike<p>
	<p><input type="checkbox" name="vehicle" value="Car">I have a car </p>
	</fieldset>
</form>
```



#Styling Valid Invalid Inputs

Remember in the last session, we looked at just how easy it is to validate forms using html5:

 	<input type="text" name="first_name" required>

You can specifically target valid and invalid form fields using the pseudo selector `:valid` and `:invalid` :

```html
input:invalid {
	border: solid red;
}

input:valid {
	border:solid green;
}

```
	
If you only want to display validation formatting when the form field is in focus 	(someone has clicked on it), we can use the `focus:` selector along with `:invalid` or `:valid` :

```html

input:focus:valid { 
          border:solid green;
 }

```
	
