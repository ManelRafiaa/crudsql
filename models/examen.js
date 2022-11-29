
const { DataTypes } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const Examen =sequelize.define('Examen',{
        examenname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        dateExamen:{
            type:DataTypes.STRING,
            allowNull:false
        },
        typeExamen:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Examen;
}