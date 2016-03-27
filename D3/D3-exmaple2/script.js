var scale = d3.scale.linear();

scale.domain([0,1]); //Data space
scale.range([0, 100]); //Pixel space

console.log(scale(0)); // this will print 0
console.log(scale(0.5)); // this will print 50
console.log(scale(1)); // this will print 100
