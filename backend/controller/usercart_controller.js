const CartSchema = require("../models/CartSchema");

const addcart = async (req, res) => {
    console.log(req.body,"jkjk");
    const { title, price, category,id,imageProfile,quantity } = req.body;
    
    // console.log(menuDetail);
  
    // MenuSchema.create(menuDetail)
    //   .then((data) => {
    //     res.status(201).send(data);
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     res.status(500).send(error.message);
    //     console.log(error);
    //   });
    
    let newItem = await new CartSchema({
      title: title,
      price: price,
      category: category,
      menuid:id,
      quantity:quantity,
       imageProfile: imageProfile,
    });
  
    let savedItem = await newItem.save();
    res.json({
      newItem: savedItem,
    });
  };


  const getcart = async (req, res) => {
    let cartData = await CartSchema.find();
    console.log("Items fetched from database");
    res.json({ message: "All Items fetched from database", cart: cartData });
  };


  const deletecartitem=async (req, res) => {
    let cartitem = await CartSchema.findById(req.params.id);
   
    await CartSchema.findByIdAndDelete(req.params.id);
    console.log("user information deletd successfully");
    res.json({
      error: "user information deleted successfully",
      deletedcartitem: cartitem,
    })
  
}

  module.exports = { addcart,getcart,deletecartitem}