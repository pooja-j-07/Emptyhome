const express = require("express");
const router = express.Router();
const template = require("./Modules");
router.post("/products", (request, response) => {
  const User = new template({
    productname: request.body.productname,
    productbrand: request.body.productbrand,
    productdescription: request.body.productdescription,
    hsncode: request.body.hsncode,
    skuid: request.body.skuid,
    modelnumber: request.body.modelnumber,
    price: request.body.price,
    usageinstructions: request.body.usageinstructions,
    newtype: request.body.newtype,
    updatetype: request.body.updatetype,

  });
  User.save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});
module.exports = router;
