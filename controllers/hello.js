function getHello(req, res){
    req.send("¡Hola Mundo desde controllers");
}

module.exports = {
    getHello,
};