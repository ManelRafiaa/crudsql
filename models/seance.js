
const { DataTypes } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const Seance =sequelize.define('Seance',{
        seancename:{
            type:DataTypes.STRING,
            allowNull:false
        },
        dateSeance:{
            type:DataTypes.STRING,
            allowNull:false
        }
        
    });
    return Seance;
}