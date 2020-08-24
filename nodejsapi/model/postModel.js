const sql = require('./dbconnect')


const Post =function(post){
    this.id = post.id;
    this.titile = post.titile;
    this.description=post.description;
}

Post.create= async(newPost,result)=>{
    sql.query("INSERT INTO post SET ?",newPost,(err,res)=>{
        if(err){
            console.log("error: ",err);
            result(err,null);
            return
        }
        console.log("Tạo post thành công")
        result(null,{id_post: res.insertId,...newPost});
    })
}
Post.getAll =result =>{
    sql.query("SELECT * FROM post", (err,res)=>{
        if(err){
            console.log("error :", err);
            result(null,err);
            return;
        }
        console.log("post :",res);
        result(null,res);
    
    });
};

module.exports = Post;