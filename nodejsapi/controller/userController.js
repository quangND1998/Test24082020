
const sql = require('../model/dbconnect');
const bcrypt = require('bcrypt')
const saltRounds = 10;
exports.register = async function(req,res){
  const password = req.body.password;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
    
  var users={
    name: req.body.name,
    email :req.body.email,
    password:encryptedPassword,
    
   };

    if(users){
        sql.query('INSERT INTO user SET ?',users,  (error, results, fields)=> {
            if (error) {
              res.send({
                "code":400,
                "failed":"error ocurred"
              }
              )
              console.log(results)
            } else {
                    res.send({
                        
                        "code":200,
                        "success":"user registered sucessfully"
                          });
                  
                    }
          });
    }else {
        res.send({
            "code":204,
            "success": "Nhập lại mật khẩu sai"
        })
    }

}

exports.login = async function(req,res){

    var name= req.body.name;
    var email =req.body.email;
    var password = req.body.password;
    sql.query('SELECT * FROM user WHERE email = ?',[email], async function (error, results, fields) {
      if (error) {
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      }else{
        if(results.length >0){
          const comparision = await bcrypt.compare(password, results[0].password)
          
          if(comparision && name== results[0].name){
              res.send({
                results,
                "code":200,
                "success":"login sucessfull"
              })
              
          }
          else{
            res.send({
                 "code":204,
                 "success":"Tên Đăng Nhập or password or Tên Đăng Nhập does not match"
            })
          }
        }
        else{
          res.send({
            "code":206,
            "success":"Tên Đăng Nhập  does not exits"
              });
        }
      }
      });
  }

exports.changepassword = async function(req,res){
    var name = req.body.name;
    var email =req.body.email;
    var newpassword = req.body.newpassword;
    const encryptedPassword = await bcrypt.hash(newpassword, saltRounds);
    
  sql.query('SELECT name, email,password  FROM user WHERE email = ?',[email], async function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
     
      if(results.length >0){

        
        sql.query("UPDATE user SET name=?, password=?  WHERE email = ? ",[name,encryptedPassword,email], async function (error, results1,data ,fields) {
          if (error) {
        
            res.send({
              "code":400,
              "failed":"error ocurred"
            })
          }else{
            
            if(results1.changedRows >=1){
                 
                  res.send({
                    results1,
                    results,
                    "code":200,
                    "success":"changed password  sucessfull"
                  })
                }
    
              else{
                res.send({
                     "code":204,
                     "success":"Tên Đăng NHập or oldpassword  k does not match  oldpassword "
                })
              }
           
          }
          });
          } 
        else{
          res.send({
               "code":204,
               "success":"Tên Đăng Nhập or password or Tên Đăng Nhập does not match"
          })
        }
      }
    
    });
  
 
    }
  
