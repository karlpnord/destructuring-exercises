// Destructure the properties from the 'car'
// object below and then log all of them

const car = {
   manufacturer: "Nissan",
   model: "Skyline GT-R",
   country: "Japan",
   coupe: true,
   test: {
      hallo: "1",
      goodbye: "2",
   },
};

const {
   manufacturer,
   model,
   country,
   coupe,
   test: { hallo, goodbye },
} = car;

console.log("Car:", manufacturer, model, country, coupe, hallo, goodbye);
