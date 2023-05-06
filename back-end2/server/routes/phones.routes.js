const express = require("express")
const router = express.Router()
const data = require("../data/phones.json")
const Phone = require("../models/Phone.model")

router.get("/phones", (req,res,next) => {
    console.log(data)
    res.send(data)

})

router.get("/phones/:id", (res,req,next) => {
  const { phoneId } = req.params;

  console.log(data.id)
  res.send(data)


})


module.exports = router;