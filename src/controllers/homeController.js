
const getHomePage = (req, res) => {
  res.send(`<h1>Hello world</h1>`)
}

const getApiPage = (req, res) => {
  res.send(`<h1>API ${req.url}</h1>`)
}

module.exports = {
  getHomePage,
  getApiPage,
}
