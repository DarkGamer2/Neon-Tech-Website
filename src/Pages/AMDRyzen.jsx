import "../Styles/ProductPage.css";
import NavigationBar from "../Components/NavigationBar";
import Ryzen from "../Images/Ryzen.jpg";
const AMDRyzen = () => {

    const AddToCart=()=>{
        window.alert("Your Item Has Been Added To Cart");
    }
    return ( 
        <div>
            <header>
                <NavigationBar/>
            </header>
     <section id="product-info">

<div className="item-image-main">
    <img src={Ryzen} alt="default" />
</div>

<div classNameName="item-info-parent">

<div className="main-info">
    <h4>AMD Ryzen 5 3400G Desktop Processor</h4>

    <div className="star-rating">
        <span>★★★★</span>★            
    </div>
    <p>Price: <span id="price">$2100.00 TT</span></p>
</div>



    <div className="description">
        
            <h4>Description</h4>
            <p>AMD CPU YD3400C5FHBOX RYZEN 5 3400G 4C 8T 4200MHZ 6MB 65W AM4 RADEON RX VEGA11. This processor comes with 4 cores.</p>
        
    </div>
</div>
</section>
        <div classNameName="product-purchase-button">
        <button type="submit" onClick={AddToCart}>Add To Cart</button>
        </div>
        </div>
     );
}
 
export default AMDRyzen;