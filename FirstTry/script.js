var myData = [1,2,3,4];

var p = d3.select("body").selectAll("p")
	.data(myData)
	.enter()
	.append("p")
	.text(function(d){return "Whaddup! " + d;});