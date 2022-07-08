import "../Styles/ProductPage.css";
import Trilogy from "../Images/21_11_11_6e460a5987a72d77e94855d2d3e0de7f_1216-1-320x207-c-default.webp";
const GTATril=()=>{

    const AddToCart=()=>{
        window.alert("Your Item Has Been Added To Cart");
    }
    return(
        <div>
    
   <section id="product-info">

<div className="item-image-main">
    <img src={Trilogy} alt="default" />
</div>

<div classNameName="item-info-parent">

<div className="main-info">
    <h4>Grand Theft Auto: The Trilogy: The Definitve Edition</h4>

    <div className="star-rating">
        <span>★★★★</span>★            
    </div>
    <p>Price: <span id="price">$300.00 TT</span></p>
</div>



    <div className="description">
        
            <h4>Description</h4>
            <p>Three Games, three iconic cities, experience the iconic trilogy like never before with updated graphics and gameplay.</p>
        
    </div>
</div>
</section>
        <div classNameName="product-purchase-button">
        <button type="submit" onClick={AddToCart}>Add To Cart</button>
        </div>
        </div>
    )
}

export default GTATril;