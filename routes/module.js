

var express = require('express');
var router = express.Router();
var db=require('../models')

router.post('/add',(req,res)=>{
  db.Module.create(req.body).then((response)=>{
    res.status(200).send(response)}).catch((err)=>{
res.status(400).send(err)
    })
  });

router.put('/update/:id',(req,res)=>{
    db.Module.update(req.body,{where:{id:req.params.id}}).then((response)=>{
      res.status(200).send(response)}).catch((err)=>{
        res.status(400).send(err)
      })
    });

  
    router.delete('/remove/:id',(req,res)=>{
        db.Module.destroy({where:{id:req.params.id}}).then((response)=>{
          res.status(200).send(response)}).catch((err)=>{
            res.status(400).send(err)
        })
      });


      router.get('/Module/:id',(req,res)=>{
        db.Module.findOne({where:{id: req.params.id}}).then((response)=>{
          res.status(200).send(response)}).catch((err)=>{
            res.status(400).send(err)
          })
        
        });


        router.get('/all',(req,res)=>{
            db.Module.findAll().then((response)=>{
              res.status(200).send(response)}).catch((err)=>{
                res.status(400).send(err)
              })
            });

  module.exports = router;
