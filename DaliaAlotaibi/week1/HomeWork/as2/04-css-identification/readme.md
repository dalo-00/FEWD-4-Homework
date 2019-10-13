##Selector identification

Identify the selectors in each style and what HTML element(s) they target.
Also, which of these examples have errors? What are they?

###1
```
p {
  color: white;
}
```
selector : p , HTML element is  p

###2
```
span {
  padding: 15px;
}
```
selector : span , HTML element is span

###3
```
table td {
  color: #222;
}
```
selector : table and td
HTML elements are table and td
it does not consider as error it works , but It will be better to group the selectors with comma.

###4
```
.lede-section #left-side {
  position: absolute;
}
```
selector : .lede-section and #left-side
HTML elements are all HTML elements with class="center" , also element with id="left-side"
the error doesn't put comma between .lede-section and  #left-side , but must to put comma between classes and between classes and id .

###5
```
#section-9 {
  display: block
  text-decoration: underline;
  font-weight: bold;
}
```
selector : section-9
HTML element with id="section-9"
the error have to put semicolon at the end of each sentence , 


##What's different about the following three selectors?

###6
```
.fewd25-page-section .another-class {
  text-align: center;
}
```


###7
```
.fewd25-page-section, .another-class {
  text-align: center;
}
```


###8
```
.fewd25-page-section.another-class {
  text-align: center;
}
```
it is the same three selectors but not work , the true declariation which work is the second one , so must to put comma between two classes .
