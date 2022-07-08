import Toolkit from "../Images/177f2a18360bd13f.png";
import Tril from "../Images/21_11_11_6e460a5987a72d77e94855d2d3e0de7f_1216-1-320x207-c-default.webp";
import "../Styles/Deals.css";
import MountainDew from "../Images/Mtn-Dew-Typhoon-Dew-FT-BLOG0522.jpg";
const NewDeals = () => {
    return ( 
        <div>
            
          <div className="page-container">
        <div className="history">
            <h1>Our History</h1>
            <p>Started in 1988, Neon Tech has grown to be a trusted name in shipping and logistics. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, amet, nisi excepturi rem commodi expedita perspiciatis delectus omnis quaerat, corporis iste magni? Necessitatibus repellat facilis provident iste voluptate odit ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nostrum at repellat fugit nihil tempora deleniti aspernatur incidunt alias? Dolore ex non nulla, sed itaque sapiente asperiores aut veniam corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur architecto dignissimos quasi, nihil fugit cupiditate voluptatum soluta, aliquid consequuntur facere sint voluptatibus nulla commodi, magni quidem voluptates ex rem.</p>
        </div>
        <div className="new-deals-container">
            <h1>New Deals</h1>
            <div className="item-container">
            <div className="item-image">
                <img src={Toolkit} width="300" height="300"  alt="Item"/>
            </div>
        <div  className="item-title">
        <h4>Premium Toolkit</h4>
            </div>  

            <div className="item-price">
                <p>$105.00 TT</p>
            </div>
            <div className="purchase-button">
            </div>
        </div>

        <div className="item-container">
            <div className="item-image">
                <img src={MountainDew} width="300" height="300"  alt="Item"/>
            </div>
        <div  className="item-title">
        <h4>Mountain Dew</h4>
            </div>  

            
            <div className="item-price">
                <p>$60.00 TT</p>
            </div>
        </div>

        <div className="item-container">
            <div className="item-image">
                <img src={Tril} width="300" height="300"  alt="Item"/>
            </div>
        <div  className="item-title">
        <h4>Grand Theft Auto: The Trilogy: The Definitive Edition</h4>
            </div>  

            <div className="item-price">
                <p>$300.00 TT</p>
            </div>
            </div>
            
        </div>
                </div>
          </div>

           
     );
}
 
export default NewDeals;