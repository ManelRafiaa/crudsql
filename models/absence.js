

const { DataTypes } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const Absence =sequelize.define('Absence',{
       
        nature:{
            type:DataTypes.STRING,
            allowNull:false
        },
    });
    return Absence;
}