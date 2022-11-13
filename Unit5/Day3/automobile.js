function Automobile(type, engine, fuelType) {
    this.type = type;
    this.engine = engine;
    this.fuelType = fuelType;
  }
  var carA = new Automobile("fourwheeler", "BS7", "Diesel");
  var carB = Object.create(carA);
  console.log(carA, carB);