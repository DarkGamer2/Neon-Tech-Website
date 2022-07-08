import "../Styles/ProductPage.css";
import AcerMontior from "../Images/Acer Nitro Monitor.jpg";
const AcerNitroMontior = () => {

    const AddToCart=()=>{
        window.alert("Your Item Has Been Added To Cart");
    }


    return ( 
        <div>
            <section id="product-info">

<div className="item-image-main">
    <img src={AcerMontior} alt="default" />
</div>

<div classNameName="item-info-parent">

<div className="main-info">
    <h4>Acer Nitro Monitor</h4>

    <div className="star-rating">
        <span>★★★★</span>★            
    </div>
    <p>Price: <span id="price">$1800.00 TT</span></p>
</div>



    <div className="description">
        
            <h4>Description</h4>
            <p>This monitor features a stunning 1080P display with a crisp clear 144hz refresh rate rate. It also comes with FreeSync support.</p>
        
    </div>
</div>
</section>
        <div classNameName="product-purchase-button">
        <button type="submit" onClick={AddToCart}>Add To Cart</button>
        </div>
        </div>
     );
}
 
export default AcerNitroMontior;