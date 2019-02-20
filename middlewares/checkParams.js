const data = require('../data.json');

const checkParams = (req,res,next) => {
  if(Object.keys(req.query).length === 0){
    res.json(data)
  } else if(Object.keys(req.query).length > 1){
    res.json('Params only 1 is search')
  } else {
    if(Object.keys(req.query)[0]!=='search'){
      res.json('Not found')
    } else {
      next()
    }
  }
};

module.exports = {
  checkParams
};