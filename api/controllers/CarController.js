/**
 * CarController
 *
 * @description :: Server-side logic for managing cars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getBybrandOrModel: function (req, res) {
    var term = req.param('term');

    car.find({
        or: [
          { brand: {like:'%'+term+'%'}},
          { model: {like:'%'+term+'%'} }
        ]
      })
      .then(function(cars){
        console.log(cars);
        res.json('cars:', cars);
      })
      .catch(function (err){
        console.log('error', error);
        res.json(err);
      });
  }
};

