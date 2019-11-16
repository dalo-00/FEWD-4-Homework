
$(document).ready(function()
{

var pets=["beagle.jpg","bunny.jpg","cat.jpg","iguana.jpg","pony.jpg"];

$("img").hide();
$("#showimage").click(function()
    {
        for(var i=0;i<pets.length;i++)
        { 
            $(".listpets").append("<li><img src=img/" + pets[i] + "></li>");
        }     
     }       
       
);
$("#hideimage").click(function()
    {
        $("img").hide();
    }
);
});
