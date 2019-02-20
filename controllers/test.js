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
  res.json('No 3')
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