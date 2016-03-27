d3.csv("data.csv", type, function (myArrayOfObjects) {
  myArrayOfObjects.forEach(function (d) {
    console.log(d.x + ", " + d.y);
  });
});

function type(d) {
  d.x = +(d.x);
  d.y = +(d.y);

  // d.x = parseFloat(d.x);
  // d.y = parseFloat(d.y);
  return d;
}
