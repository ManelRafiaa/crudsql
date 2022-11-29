
const { DataTypes } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const Module =sequelize.define('Module',{
        modulename:{
            type:DataTypes.STRING,
            allowNull:false
        },
        coef:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
        
    });
    return Module;
}