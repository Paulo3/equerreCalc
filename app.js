/*
 * This file is provided for custom JavaScript logic that your HTML files might need.
 * Maqetta includes this JavaScript file by default within HTML pages authored in Maqetta.
 */
require(["dojo/ready"], function(ready){
     ready(function(){
         // logic that requires that Dojo is fully initialized should go here

     });
});
function calcular(){
	var cat1, cat2, hip;
	cat1 = parseFloat(document.getElementById("num1").value);
	cat2 = parseFloat(document.getElementById("num2").value);
	hip = Math.sqrt((cat1 * cat1) + (cat2 * cat2));
	document.getElementById("res").value = parseFloat(hip).toFixed(2);
	document.getElementById("b").innerHTML = cat1;
	document.getElementById("c").innerHTML = cat2;
	document.getElementById("a").innerHTML =parseFloat(hip).toFixed(2);
}
