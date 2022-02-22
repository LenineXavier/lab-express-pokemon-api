const express = require ("express");
const req = require("express/lib/request");
const { process_params } = require("express/lib/router");

const data = require ("../data");

//criando o roteador
const router = express.Router();

//endpoint post
router.post("/creat", (req,res => {
    const newDocument = {
        ...req.body
    }
    data.push(newDocument);
    return res.statusCode(201).json(data[data.indexOf(newDocument)]);
}))

//criando get
router.get("/",(req,res)=>{
    return res.status(200).json(data);
});

//get por id do pokemon
router.get("/:id", (req, res)=>{
    req.params.idres.sent("User get id")
})

module.exports = router;

