const circle = {
  radius: 7,
  circumference() {
    const circumference = 2 * 3.14 * this.radius;
    return `The circumference of the circle is ${circumference}`;
  },
  area: function () {
    const area = 3.14 * this.radius * this.radius;
    return `The area of the circle is ${area}`;
  },
};

const ringkasan = () => {
  console.log(`
    ${circle.circumference()}
    ${circle.area()}
  `);
};

ringkasan();
