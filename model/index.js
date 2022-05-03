const Sequelize=require('sequelize');
// const sequelize=new Sequelize('databaseName','UserName','Password',{
//     localhost:'localhost',
//     dialect:'mysql' 
// });

const sequelize=new Sequelize('may2','root','',{
    localhost:'localhost',
    dialect:'mysql'
});

sequelize.authenticate().then(()=>{
    console.log('Connection establised')
}).catch(err=>{
    console.log('Connection failed',err.message);
})

const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.users=require('./mayfirst.model')(sequelize,Sequelize);


module.exports=db;
