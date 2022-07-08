import NavigationBar from "../Components/NavigationBar";
import "../Styles/ProductPage.css";

const PremiumToolkit = () => {

    const Toolkit=[{
        title:"Premium Toolkit",
        img:require("../Images/177f2a18360bd13f.png"),
        img2:require("../Images/toolkit1.jpg"),
        img3:require("../Images/toolkit2.jpg"),
        img4:require("../Images/toolkit3.png"),
        price:"$105.00 TT",
        description:"This toolkit is ready for all your home repair needs. It features over 20 pieces each with a excellently polished Premium Steel Finish.",
        id:1
    }]

    const AddToCart=()=>{
        window.alert("Your Item Has Been Added To Cart");
    }
    return ( 
        <div>
            <header>
                <NavigationBar/>
            </header>
             {Toolkit.map((item,id)=>(
        <>
      <section id="product-info">

    <div className="item-image-main">
        <img src={item.img} alt="default" />
    </div>

<div classNameName="item-info-parent">
    
    <div className="main-info">
        <h4>{item.title}</h4>

        <div className="star-rating">
            <span>★★★★</span>★            
        </div>
        <p>Price: <span id="price">{item.price}</span></p>
    </div>
   


        <div className="description">
            
                <h4>Description</h4>
                <p>{item.description}</p>
            
        </div>
    </div>
</section>
            <div classNameName="product-purchase-button">
            <button type="submit" onClick={AddToCart}>Add To Cart</button>
            </div>
        </>
    ))}
        </div>
     );
}
 
export default PremiumToolkit;