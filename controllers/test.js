const data = require('../data.json');

const first = (req,res) => {
  if(!req.query.search){
    req.query.search = ''
  }
  const searchData = data.filter((item) => {
    return item.toLowerCase().includes(req.query.search.toLowerCase())
  })

  if(searchData.length===0){
    res.json('empty')
  } else {
    res.json(searchData)
  }
};

const second = (req,res) => {
  if(!req.query.search){
    res.json(data)
  } else{
    const searchData = data.filter((item) => {
      const splitString = item.split(' ')
      let itemFromSplit
      splitString.map(i => {
        if(i.toLowerCase()===req.query.search.toLowerCase()){
          itemFromSplit = item
        }
      })
      return item===itemFromSplit
    })
  
    if(searchData.length===0){
      res.json('empty')
    } else {
      res.json(searchData)
    }
  }
};

const third = (req,res) => {
  if(Object.keys(req.query).length === 0){
    res.json(data)
  } else if(Object.keys(req.query).length > 1){
    res.json('Params only 1 is search')
  } else {
    if(Object.keys(req.query)[0]!=='search'){
      res.json('Not found')
    } else {
      if(req.query.search.length < 3 || req.query.search.length > 50){
        res.json('3 - 50 characters')
      } else {
        const searchData = data.filter((item) => {
          return item.toLowerCase().includes(req.query.search.toLowerCase())
        })
        if(searchData.length===0){
          res.json('empty')
        } else {
          res.json(searchData)
        }
      }
    }
  }
};

const fourth = (req,res) => {
  res.json('No 4')
};

const fifth = (req,res) => {
  res.json('No 5')
};

module.exports = {
  first,
  second,
  third,
  fourth,
  fifth
};