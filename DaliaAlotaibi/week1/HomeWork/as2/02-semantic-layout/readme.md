##Think About Structure and Semantics

Markup this page (Don't worry about 'Next in Top Stories'):
[https://www.technologyreview.com/s/601756/if-the-world-gives-up-meat-we-can-still-have-burgers/?set=601752](https://www.technologyreview.com/s/601756/if-the-world-gives-up-meat-we-can-still-have-burgers/?set=601752)





Markup the content and then go back and think beyond the just the content itself. How would you structure the page semantically - use the HTML guide and Google as needed. How would you group certain elements together?



There are elements in HTML that are semantic and elements that are non-semantic. Examples of non-semantic elements are div and span. These tags don't tell the computer anything about the meaning of the contents of the element.Many semantic tags come from the analysis of web page markup completed by companies like Google and Opera. What these companies have found is that many websites use id and class attributes to hint at the meaning of the contents of non-semantic elements.

For example, they found lots of divs that looked like this: <div id="nav">, <div id="header">, and <div id="footer">. Findings like these helped the W3C identify and target new semantic tags to include in HTML5 such as: nav, header, footer, article, and aside.


I guess the markup in this page 
<header><nav>
<main><section><article>
<footer><nav>
