let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((sum, area) => sum + area);
}

console.log(totalArea(rectangles));    // 141

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rect => rect[0] === rect[1]);
  return totalArea(squares);
}

console.log(totalSquareArea(rectangles));    // 121