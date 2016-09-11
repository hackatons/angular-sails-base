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
        res.json(cars);
      })
      .catch(function (err){
        res.json(err);
      });
    res.json('');
  }
};

