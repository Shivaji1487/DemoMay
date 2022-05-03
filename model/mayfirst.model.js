module.exports =(sequelize,Sequelize)=>{
    const model=sequelize.define('mayfirst',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        Name:{
            type:Sequelize.STRING(150),
            allowNull:false
        },
        contact:{
            type:Sequelize.INTEGER(50),
            unique:true
        },
        email:{
            type:Sequelize.STRING(150),
            allowNull:false

        },
        isActive:{
            type:Sequelize.BOOLEAN,
            defaultValue: true
        }
       },
       {
        freezeTableName: true,
        timestamps: false 
       });
    return model;
}