import "../Styles/ProductPage.css";
import MD from "../Images/Mtn-Dew-Typhoon-Dew-FT-BLOG0522.jpg";
const MountainDew = () => {

    const AddToCart=()=>{
        window.alert("Your Item Has Been Added To Cart");
    }
    return ( 
    
    <div>
        <section id="product-info">

<div className="item-image-main">
    <img src={MD} alt="default" />
</div>

<div classNameName="item-info-parent">

<div className="main-info">
    <h4>Mountain Dew</h4>

    <div className="star-rating">
        <span>★★★★</span>★            
    </div>
    <p>Price: <span id="price">$60.00 TT</span></p>
</div>



    <div className="description">
        
            <h4>Description</h4>
            <p>Citrus flavored Soft Drink. Mountain Dew, the original instigator, refreshes with its one of a kind great taste.</p>
        
    </div>
</div>
</section>
        <div classNameName="product-purchase-button">
        <button type="submit" onClick={AddToCart}>Add To Cart</button>
        </div>

 
    </div> );
}
 
export default MountainDew;