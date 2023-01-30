const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;
const urlMongoAtlas = "mongodb+srv://admin:admin123456@mariodb.z4sup8s.mongodb.net/mydb";

mongoose.connect(urlMongoAtlas, (err,res) => {
    try{
        if(err){
            throw err
        } else{
            console.log("La conexión a la DB es correcta");

            app.listen(port, () => {
                console.log("Servidor del API REST está funcionando en https://localhost:3000");
            })
        }
    }catch (error){
        console.error(error);
    }
});

