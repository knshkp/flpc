const Product=require("../Models/productModels")
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your API credentials
cloudinary.config({
  cloud_name: "dyukjqemj",
  api_key: "975334944781146",
  api_secret: "USmTRR4C6ly_RDh-82Y8rhMIMzc",
});
const addProduct=async(req,res)=>{
    const uploadPromises = req.files.map(file =>
        cloudinary.uploader.upload(file.path)
      );
  
      const cloudinaryUploads = await Promise.all(uploadPromises);
  
      // Map the cloudinary secure URLs to productImage field
      const productImages = cloudinaryUploads.map(upload => upload.secure_url);
  
    try {
        var product=new Product({
            name:req.body.name,
            price:req.body.price,
            productImage: productImages,
            discount:req.body.discount,
            description:req.body.description
        })
        const productData=await product.save();
        res.status(200).send({success:true,msg:"Product Details",data:productData})

    } catch (error) {
        res.status(400).send({success:false,msg:error.message})
    }
}
const getProduct = async (req, res) => {
    try {
        const send_data=await Product.find()
        res.status(200).send({ success: true, msg: "Product Details", data: send_data });
    } catch (error) {
      res.status(500).send({ success: false, msg: "Internal server error", data: send_data });
    }
  };
  const getSingleProduct = async (req, res) => {
    try {
        const send_data=await Product.find({_id:req.query.productId} )
        res.status(200).send({ success: true, msg: "Product Details", data: send_data });
    } catch (error) {
      res.status(500).send({ success: false, msg: "Internal server error", data: send_data });
    }
  };
  const searchProduct=async(req,res)=>{
    try {
        var search=req.body.search;
        var productData=await Product.find({
            "name":{"$regex":".*"+search+".*"}
        })
        if(productData.length>0){
            res.status(200).send({ success: true, msg: "Data found", data: productData });

        }
        else{
            res.status(200).send({ success: true, msg: "Data not found" });
        }
    } catch (error) {
        res.status(500).send({ success: false, msg: "Internal server error", data: send_data });
    }
    }
module.exports={
    addProduct,
    getProduct,
    searchProduct
}