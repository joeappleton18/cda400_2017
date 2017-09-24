
>> - To let the text flow around an image, you need to float the image:
    ````
    img {
    float: left;
    }
    ````


>> - To centrally align the wrapper, give it a width and a auto margin

```
#wrapper {     
    width: 980px;
    margin: 0 auto;
}
```


>> - Laying out a menu and centre aligning it 

**html**

```
         <div id="header">   
            <ul>
                <li><a href="#"> Home </a></li>
                <li><a href="#"> Contact </a></li>
                <li><a href="#"> About </a></li>
            </ul>
        </div>
```

**css**

```
#header ul {    
   width: 300px;
   margin: O auto;
    
}
```



gul



- Be careful with your indentation. You should indent children relative to the parent tags e.g. 

```
<div id="header">
		<p> I'm a child</p>
</div> <!-- [END]#header -->

```
gul
```
<div id="header">


</div> <!-- [END]#header -->
```
