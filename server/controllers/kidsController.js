const Kid = require('mongoose').model('Kid');

module.exports = {

  findAll: (req, res) => {
      Kid.find({}, (err, kids) => {
        res.json({
          message: kids
        })
      })
      
    }
}