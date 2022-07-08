import NavigationBar from "../Components/NavigationBar";
import "../Styles/Products.css";
import {Link} from "react-router-dom";
import MountainDew from "../Images/Mtn-Dew-Typhoon-Dew-FT-BLOG0522.jpg";
import PremiumToolkit from "../Images/177f2a18360bd13f.png";
import GTATrilogy from "../Images/21_11_11_6e460a5987a72d77e94855d2d3e0de7f_1216-1-320x207-c-default.webp";
import Kingston from "../Images/Kingston-Digital-8GB-DataTraveler-3.0-USB-Flash-Drive-Yellow.jpg";
import Ryzen from "../Images/Ryzen.jpg";
import AcerMonitor from "../Images/Acer Nitro Monitor.jpg";
import Footer from "../Components/Footer";
const Products = () => {

const AddToCart=()=>{
    window.alert("Your Item Has Been Added To Cart");
}

// const [item,setItem]=useState("");
    return ( 
        <div>
            <NavigationBar/>

            <div className="new-deals-container">
            <h1>Products</h1>
      <div className="item-container">

        <div className="item-container">
            <div className="item-image">
                <img src={PremiumToolkit} width="300" height="300"  alt="Item"/>
            </div>
        <div  className="item-title">
        <h4>Premium Toolkit</h4>
            </div>  

            <div className="more-details-link">
               <Link to ="/toolkit">More Details</Link>
            </div>
            <div className="item-price">
                <p>$105.00 TT</p>
            </div>
            <div className="purchase-button">
            <button type="submit" onClick={AddToCart}>Add To Cart</button>
            </div>
        </div>

         <div className="item-container">
            <div className="item-image">
                <img src={MountainDew} width="300" height="300"  alt="Item"/>
            </div>
        <div  className="item-title">
        <h4>Mountain Dew</h4>
            </div>  

            <div className="more-details-link">
               <Link to="/mountaindew">More Details</Link>
            </div>
            <div className="item-price">
                <p>$60.00 TT</p>
            </div>
            <div className="purchase-button">
            <button type="submit" onClick={AddToCart}>Add To Cart</button>
            </div>
        </div>

        <div className="item-container">
            <div className="item-image">
                <img src={GTATrilogy} width="300" height="300"  alt="Item"/>
            </div>
        <div  className="item-title">
        <h4>Grand Theft Auto: The Trilogy: The Definitive Edition</h4>
            </div>  

            <div className="more-details-link">
               <Link to="/GTAtril">More Details</Link>
            </div>
            <div className="item-price">
                <p>$300.00 TT</p>
            </div>
            <div className="purchase-button">
            <button type="submit" onClick={AddToCart}>Add To Cart</button>
            </div>
        </div>

        <div className="item-container">
            <div className="item-image">
                <img src={Kingston} width="300" height="300"  alt="Item"/>
            </div>
        <div  className="item-title">
        <h4>Kingston 8GB USB Flashdrive</h4>
            </div>  

            <div className="more-details-link">
               <Link to="/kingston">More Details</Link>
            </div>
            <div className="item-price">
                <p>$65.00 TT</p>
            </div>
            <div className="purchase-button">
            <button type="submit" onClick={AddToCart}>Add To Cart</button>
            </div>
        </div>

        <div className="item-container">
            <div className="item-image">
                <img src={Ryzen} width="300" height="300"  alt="Item"/>
            </div>
        <div  className="item-title">
        <h4>AMD Ryzen 5 3400G Desktop Processor</h4>
            </div>  

            <div className="more-details-link">
               <Link to="/amdryzen">More Details</Link>
            </div>
            <div className="item-price">
                <p>$2100.00 TT</p>
            </div>
            <div className="purchase-button">
            <button type="submit" onClick={AddToCart}>Add To Cart</button>
            </div>
        </div>

        <div className="item-container">
            <div className="item-image">
                <img src={AcerMonitor} width="300" height="300"  alt="Item"/>
            </div>
        <div  className="item-title">
        <h4>Acer Nitro Monitor</h4>
            </div>  

            <div className="more-details-link">
               <Link to="/acermonitor">More Details</Link>
            </div>
            <div className="item-price">
                <p>$1800.00 TT</p>
            </div>
            <div className="purchase-button">
            <button type="submit" onClick={AddToCart}>Add To Cart</button>
            </div>
        </div>


      </div>


  </div>

  <Footer/>
    </div>
)
}
 
export default Products;