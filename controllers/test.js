const data = require('../data.json');

const first = (req,res) => {
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
  const searchData = data.filter((item) => {
    const splitQuery = req.query.search.split(' ')
    const splitString = item.split(' ')
    let itemFromSplit
    splitQuery.map(i => {
      splitString.map(j => {
        if(j.toLowerCase()===i.toLowerCase()){
          itemFromSplit = item
        }
      })
    })
    return item===itemFromSplit
  })
  if(searchData.length===0){
    res.json('empty')
  } else {
    res.json(searchData)
  }
};

const third = (req,res) => {
  if(req.query.search.length < 3 || req.query.search.length > 50){
    res.status(400).json('3 - 50 characters')
  } else {
    const searchData = data.filter((item) => {
      const splitQuery = req.query.search.split(' ')
      const splitString = item.split(' ')
      let itemFromSplit
      splitQuery.map(i => {
        splitString.map(j => {
          if(j.toLowerCase()===i.toLowerCase()){
            itemFromSplit = item
          }
        })
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

const fourth = (req,res) => {
  const regex = /^[a-zA-Z0-9\-\.\,\ ]+$/
  if(!req.query.search.match(regex)){
    res.status(400).json('Keyword only allow alphabetical and numeric characters, dash, dot, comma')
  } else {
    const searchData = data.filter((item) => {
      const splitQuery = req.query.search.split(' ')
      const splitString = item.split(' ')
      let itemFromSplit
      splitQuery.map(i => {
        splitString.map(j => {
          if(j.toLowerCase()===i.toLowerCase()){
            itemFromSplit = item
          }
        })
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

const fifth = (req,res) => {
  const searchData = data.filter((item) => {
    const splitQuery = req.query.search.split(' ')
    const splitString = item.split(' ')
    let itemFromSplit
    splitQuery.map(i => {
      splitString.map(j => {
        if(j.toLowerCase()===i.toLowerCase()){
          itemFromSplit = item
        }
      })
    })
    return item===itemFromSplit
  })
  if(searchData.length===0){
    res.json('empty')
  } else {
    searchData.sort((a,b) => a.length - b.length)
    res.json(searchData)
  }
};

module.exports = {
  first,
  second,
  third,
  fourth,
  fifth
};