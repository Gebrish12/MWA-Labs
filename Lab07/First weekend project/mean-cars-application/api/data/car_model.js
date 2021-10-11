const mongoose = require("mongoose");

const carModelSchema = new mongoose.Schema({
  name: String,
  date_production: Number,
  price: {
    type: Number,
    require: true,
  },
  mileage: Number,
});

const carCompanySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  country: String,
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 1,
  },
  carModels: [carModelSchema],
});

mongoose.model("Company", carCompanySchema, "companies");
