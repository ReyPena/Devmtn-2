#####
#SVG#
#####
SVG stands for Scalable Vector Graphics.
-------------------------------------------------------
Using the element svg on html we can help no keep the same ressolution on the pixels.
if you give a hight and a width to your svg elment it does not allow the element to keep their original size.
-------------------------RECTANGLES AND SQUERS-------------------------------
html have an element that set the shape of the element (rect):
ther is also x an y as an atributes
-y on it positives go down un like math.
-x the positive go to the right.
now fill is an atribute for the element to add a color.
rgb also have rgba (a stands for alfa) con controll the transparency of the element.
there is stroke that is the border of the shape, also stroke-width can make the border widther,
---------------------------CIRCLES-----------------------------------------------------
html have a element call circle.
with the circles you anc use r to set the radius and cx cy to set the position, and as rect circles also have a propety for the border.
-----------------------------LINES-----------------------------------------------------
lines on D3 can be created with the element line on html.
the lines have an atribute y1 x1 (its where the line beggins) that controll the left side and y2 x2 (its where the new line starts)that controll the right side.
-----------------------------PATHS-----------------------------------------------------
they have a "d" atribute that you give a string which is an expression for paths the sintax start:
-M ==> move to command and you give the X and Y divided by an space (exp: Mx y)
-L ==> line to command that make a point in whatever point that was before and the next one (exp: La b)
-Z ==> will close the path
-----------------------------MOVE THE ELEMENTS USING <g>-------------------------------
D3 also have a g element that have a atribute call transform, and use translate to move all the elements(exp: <g transform="translate(x,y)">
-------------------------------------TEXT---------------------------------------------
text have as well a element and comes with x and y
