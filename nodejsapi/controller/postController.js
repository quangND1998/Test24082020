const Post = require("../model/postModel");
exports.create = async (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message: "Bạn chưa nhập"
        })
    }
    const post =new Post({
        id: req.body.id,
        titile: req.body.titile,
        description: req.body.description
    });
    Post.create(post,(err,data)=>{
        if(err){
            res.status(500).send({
                message:
                    err.message || "Có lỗi xảy ra khi tạo mới 1 post"
            })
        }
        res.send(data);
    })
}

exports.findAll = (req, res) => {
    Post.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving post."
        });
      else res.send(data);
    });
  };
  