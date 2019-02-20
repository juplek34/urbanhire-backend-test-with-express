const data = require('../data.json');

const first = (req,res) => {
  if(!req.query.search){
    req.query.search = ''
  }
  const searchData = data.filter((item) => {
    return item.toLowerCase().includes(req.query.search.toLowerCase())
  })
  res.json(searchData)
};

const second = async (req,res) => {
  res.json('No 2')
};

const third = async (req,res) => {
  res.json('No 3')
};

const fourth = async (req,res) => {
  res.json('No 4')
};

const fifth = async (req,res) => {
  res.json('No 5')
};

module.exports = {
  first,
  second,
  third,
  fourth,
  fifth
};