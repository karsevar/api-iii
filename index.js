// The different resourse:
// manage products 
// manage clients
// manage orders
// manage suppliers 

const server = require('./api/server.js')

const port = 5000;
server.listen(port, () => {
    console.log(`Listening to port ${port}`)
});