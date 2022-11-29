

var express = require('express');
var router = express.Router();
var db=require('../models')

router.post('/add',(req,res)=>{
  db.Matiere.create(req.body).then((response)=>{
    res.status(200).send(response)}).catch((err)=>{
res.status(400).send(err)
    })
  });

router.put('/update/:id',(req,res)=>{
    db.Matiere.update(req.body,{where:{id:req.params.id}}).then((response)=>{
      res.status(200).send(response)}).catch((err)=>{
        res.status(400).send(err)
      })
    });

  
    router.delete('/remove/:id',(req,res)=>{
        db.Matiere.destroy({where:{id:req.params.id}}).then((response)=>{
          res.status(200).send(response)}).catch((err)=>{
            res.status(400).send(err)
        })
      });


      router.get('/matiere/:id',(req,res)=>{
        db.Matiere.findOne({where:{id: req.params.id}}).then((response)=>{
          res.status(200).send(response)}).catch((err)=>{
            res.status(400).send(err)
          })
        
        });


        router.get('/all',(req,res)=>{
            db.Matiere.findAll().then((response)=>{
              res.status(200).send(response)}).catch((err)=>{
                res.status(400).send(err)
              })
            });

  module.exports = router;
