
const express = require("express");
const itemRoutes = express.Router();
const Item = require('./../Models/item.model');


itemRoutes.route('/').get(function(req,res){
    console.log(req)
    Item.find(function(err,items){
       if(err){
           console.log(err)
       }else {
           res.json(items)
       }
    })
})

itemRoutes.route('/:id').get(function(req,res){
    let id = req.params.id;
    Item.findById(id, function (err, item) {
        res.json(item)
    })
})

itemRoutes.route('/add').post(function(req,res){
    let item = new Item(req.body)
    item.save()
    .then(todo => {
        res.status(200).json({'item' : 'item added sucessfully'})
    }).catch(err=>{
        res.status(400).send('adding new item failed')
    })
   
})
itemRoutes.route('/update/:id').post(function(req,res){
    Item.findById(req.params.id, function (err, item) {
        if(!item)
            res.status(404).send('data is nt found')
        else
        item.item_name = req.body.item_name
        item.item_type =  req.body.item_type
        item.item_rate = req.body.item_rate
        item.item_minimum = req.body.item_minimum
        item.item_qunatity = req.body.item_qunatity

        item.save()
        .then(item_add => {
            res.json('item updated')
        }).catch(err=>{
            res.status(400).send('Update item is not possible')
        })    
    })
   
})

itemRoutes.route('/delete/:id').delete(function(req,res){
    Item.deleteOne(req.params.id, function (err, item) {
        res.json({ success: req.params.id })       
    })
   
})


module.exports = itemRoutes;
