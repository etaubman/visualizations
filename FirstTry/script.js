var data = [
	{
		"x_axis" : 60,
		"y_axis" : 80,
		"radius" : 50,
		"color" : "rgb(0,189,242)"
	},
	{
		"x_axis" : 100,
		"y_axis" : 200,
		"radius" : 40,
		"color" : "rgb(0,14,114)"
	}
]

var container = d3.select("body").append("svg")
					.attr("width",window.innerWidth)
					.attr("height",window.innerHeight);

var circles = container.selectAll("circle")
					.data(data)
					.enter()
					.append("circle");

var circleAttributes = circles
					.attr("cx",function(d){return d.x_axis})
					.attr("cy",function(d){return d.y_axis})
					.attr("r",function(d){return d.radius})
					.style("fill",function(d){return d.color});

circles
	.transition()
	.attr("cx",function(d){
		return window.innerWidth - d.radius;
	})
	.attr("cy",function(d){
		return window.innerHeight - d.radius;
	})
	.duration(4000)
	.ease("bounce");