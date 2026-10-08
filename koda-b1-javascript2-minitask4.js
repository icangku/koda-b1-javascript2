const PI = 3.14;

function circle(radius, callback) {
  callback(radius);
}

function calculateAreaAndCircumference(radius) {
  const area = PI * radius * radius;
  const circumference = 2 * PI * radius;

  console.log(`The area of the circle is: ${area}`);
  console.log(`The circumference of the circle is ${circumference} `);
}

circle(4, calculateAreaAndCircumference);
