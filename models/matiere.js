

const { DataTypes } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const Matiere =sequelize.define('Matiere',{
        matierename:{
            type:DataTypes.STRING,
            allowNull:false
        },
        nbrheure:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        coef:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        enseignant:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Matiere;
}