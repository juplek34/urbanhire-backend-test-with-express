const first = async (req,res) => {
  res.json('No 1')
}

const second = async (req,res) => {
  res.json('No 2')
}

const third = async (req,res) => {
  res.json('No 3')
}

const fourth = async (req,res) => {
  res.json('No 4')
}

const fifth = async (req,res) => {
  res.json('No 5')
}

module.exports = {
  first,
  second,
  third,
  fourth,
  fifth
}