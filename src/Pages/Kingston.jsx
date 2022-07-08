import "../Styles/ProductPage.css";
import KingstonImage from "../Images/Kingston-Digital-8GB-DataTraveler-3.0-USB-Flash-Drive-Yellow.jpg";
const Kingston= () => {

    const AddToCart=()=>{
        window.alert("Your Item Has Been Added To Cart");
    }

    return(
        <div>
 
             <section id="product-info">

<div className="item-image-main">
    <img src={KingstonImage} alt="default" />
</div>

<div classNameName="item-info-parent">

<div className="main-info">
    <h4>Kingston 8GB USB Flash Drive</h4>

    <div className="star-rating">
        <span>★★★★</span>★            
    </div>
    <p>Price: <span id="price">$65.00 TT</span></p>
</div>



    <div className="description">
        
            <h4>Description</h4>
            <p>Protect mobile data with advanced security. Available in Standard and Managed models All Models CKingston; s IronKey & trade; D300 USB Flash drive features an advanced level of security that builds on the features that made IronKey well-respected, to safeguard sensitive information. It; s FIPS 140-2 Level 3 certified, with 256-bit AES hardware-based encryption in XTS mode. An essential pillar to setting security standards, corporate policies and data loss protection (DLP) best practices. An important element in the quest for compliance with industry standards and global regulations such as the GDPR. For added peace of mind, the drive uses digitally signed firmware, making it immune to Bad USB, and enforces complex password protection with minimum characteristics to prevent unauthorized access. Encryption and decryption is done on the drive, with no trace left on the host system, and the drive locks down and reformats after 10 invalid attempts to protect against brute force attacks. Rugged and secure, IronKey D300 has a zinc casing and tamper-evident epoxy seal for physical security, so you can rest assured the drive will hold up, even in the most demanding situations. Customizable, easy to use and waterproof up to 4 feet, conforming to IEC60529 IXP8. SuperSpeed (USB 3. 0) technology means you don; t have to compromise on speed over security. Serialized (S) models The IronKey D300S / D300SM brings two additional features on top of its industry-leading data protection. Unique serial-number and barcode printed on drive Allows network administrators simply to read or scan the code instead of plugging in a drive to learn its unique serial number. Time saver both when the drive is deployed and when it is returned, as well as during any physical auditing of hardware done by a company. If a lost drive is found, the owner can quickly be tracked by the serial number.</p>
        
    </div>
</div>
</section>
        <div classNameName="product-purchase-button">
        <button type="submit" onClick={AddToCart}>Add To Cart</button>
        </div>
           
        </div>
    )
}

export default Kingston;