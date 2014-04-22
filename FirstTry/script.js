function Circle(){
	this.x_axis = Math.random() * 100;
	this.y_axis = Math.random() * 100;
	this.radius = Math.random() * this.x_axis;
	this.get_color = function(){
		hex =  Math.floor(Math.random() * 16777215);
		return hex.toString(16);
	}
	this.color = "#" + this.get_color();
}

var data = [];
for (var i = 0; i < 2000; i++) {
	data.push(new Circle);
};

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
		return Math.random() * (window.innerWidth - d.radius);
	})
	.attr("cy",function(d){
		return Math.random() * (window.innerHeight - d.radius);
	})
	.duration(4000)
	.ease("bounce");