const mongoose = require("mongoose");
const Company = mongoose.model("Company");

const getAll = function (req, res) {
  console.log("get all cars request has received");
  const companyID = req.params.companyID;

  if (!mongoose.Types.ObjectId.isValid(companyID)) {
    console.log("invalid id");
    res
      .status(400)
      .json({ message: "the id you provide does't satisfy database id" });
    return;
  }
  Company.findById(companyID)
    .select("carModels")
    .exec(function (err, cars) {
      if (err) {
        console.log("invalid request");
        res.status(500).json(err);
        return;
      } else {
        res.status(200).json(cars);
      }
    });
};

const getOne = function (req, res) {
  console.log("get one car request has recieved");
  const companyID = req.params.companyID;
  const carID = req.params.carID;
  if (!mongoose.Types.ObjectId.isValid(companyID)) {
    console.log("invalid course id");
    res.status(400).json(err);
    return;
  }
  if (!mongoose.Types.ObjectId.isValid(carID)) {
    console.log("invalid course id");
    res.status(400).json(err);
    return;
  }

  Company.findById(companyID)
    .select("carModels")
    .exec(function (err, company) {
      if (err) {
        console.log("the car can not be found");
        res.status(500).json(err);
        return;
      } else {
        if (company.carModels.id(carID)) {
          res.status(200).json(company.carModels.id(carID));
        } else {
          res.status(404).json("the car with the given id is not available");
        }
      }
    });
};
const addcar = function (req, res) {
  console.log("adding car request has recieved");
  const companyID = req.params.companyID;
  if (!mongoose.Types.ObjectId.isValid(companyID)) {
    res
      .status(400)
      .json("the id that you provide doesn't satisfy the student id");
    return;
  }

  Company.findById(companyID)
    .select("carModels")
    .exec(function (err, company) {
      if (err) {
        res.status(500).json(err);
        return;
      } else if (!company) {
        res.status(404).json("the company can not be found");
        return;
      } else {
        company.carModels.push(req.body);
        company.save(function (err, result) {
          if (err) {
            res.status(500).json(err);
            return;
          } else {
            res.status(200).json(result);
          }
        });
      }
    });
};

const deletecar = function (req, res) {
  console.log("deleting car request has recieved");
  const companyID = req.params.companyID;
  const carID = req.params.carID;
  if (!mongoose.Types.ObjectId.isValid(companyID)) {
    res
      .status(400)
      .json("the id that you provide doesn't satisfy the student id");
    return;
  }
  if (!mongoose.Types.ObjectId.isValid(carID)) {
    res
      .status(400)
      .json("the id that you provide doesn't satisfy the student id");
    return;
  }
  Company.findById(companyID)
    .select("carModels")
    .exec(function (err, company) {
      if (err) {
        res.status(500).json(err);
        return;
      } else if (!company) {
        res.status(404).json("the company can not be found");
        return;
      } else {
        console.log(company.carModels.id(carID));
        company.carModels.id(carID).remove();
        company.save(function (err) {
          if (err) {
            res.status(500).json(err);
            return;
          } else {
            res.status(200).json("car deleted successfully");
          }
        });
      }
    });
};

const updatecar = function (req, res) {
  console.log("updating a car has recieved");
  const companyID = req.params.companyID;
  const carID = req.params.carID;
  if (!mongoose.Types.ObjectId.isValid(companyID)) {
    res
      .status(400)
      .json("the id that you provide doesn't satisfy the company id");
    return;
  }
  if (!mongoose.Types.ObjectId.isValid(carID)) {
    res
      .status(400)
      .json("the id that you provide doesn't satisfy the company id");
    return;
  }
  Company.findById(companyID)
    .select("carModels")
    .exec(function (err, company) {
      if (err) {
        res.status(500).json(err);
        return;
      } else if (!company) {
        res.status(404).json("the company can not be found");
        return;
      } else {
        const car = company.carModels.id(carID);
        if (car) {
          car.name = req.body.name;
          car.price = req.body.price;
          car.date_production = req.body.date_production;
          car.mileage = req.body.mileage;

          company.save(function (err, result) {
            if (err) {
              res.status(500).json(err);
              return;
            } else {
              res.status(200).json(result);
            }
          });
        } else {
          res
            .status(404)
            .json("the company with the given id is not available");
        }
      }
    });
};

module.exports = {
  getAllcars: getAll,
  getOnecar: getOne,
  addcar: addcar,
  deletecar: deletecar,
  updatecar: updatecar,
};
