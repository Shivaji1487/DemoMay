const connection=require('./connection.mysql');

module.exports ={
    getAll:(req,res)=>{
        connection.query('select * from mayfirst',(err,result)=>{
            if(err){
                res.send({error: true,message:err.message})
            }else{
                res.send({error: false,data:result})
            }
        })
    },
    updateUser:(req,res)=>{ 
        let id=req.body.id;
        let name=req.body.name;
       let query= `UPDATE mayfirst SET Name='${name}' WHERE StudId=${id}`;
    
       connection.query(query,(err,result)=>{
        if(err){
            res.send({error: true,message:err.message})
        }else{
            if(result.affectedRows>0){
                res.send({error: false,message:"record updated"})
            }else{
                res.send({error: false,message:"record not found"})  
            }
            
        }
    })
    
    }, 
    findUser:(req,res)=>{
        let id=req.params.id;
        connection.query(`select  ID, Name, contact, Email, Age from student where StudId=${id}`,(err,result)=>{
            if(err){
                res.send({error: true,message:err.message})
            }else{
                res.send({error: false,data:result})
            }
        }) 
    },
    deleteUser:(req,res)=>{
        let id=req.body.id;
        connection.query(`delete from mayfirst where StudId=${id}`,(err,result)=>{
            if(err){
                res.send({error: true,message:err.message})
            }else{
                if(result.affectedRows>0){
                    res.send({error: false,message:"record deleted"})
                }else{
                    res.send({error: false,message:"record not found"})  
                }
                
            }
        })
    }
}\