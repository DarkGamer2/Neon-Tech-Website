import NavigationBar from "../Components/NavigationBar";
import "../Styles/ListingForm.css";
import {useState} from "react";
import Footer from "../Components/Footer";
const CreateListing = () => {

const [productName,setProductName]=useState("")
const [productDescription,setProductDescription]=useState("")
const [productPrice,setProductPrice]=useState("")

const handleSubmit=(e)=>{

e.preventDefault();

const Listing={productName,productDescription,productPrice};

fetch("http://localhost:3000/products",{
    method:"POST",
    headers:{"Content-Type": "application/json",
    body:JSON.stringify(Listing)
}
    
})
}

    return ( 
        <div>
        <header>
            <NavigationBar/>
        </header>
            <form onSubmit={handleSubmit}>
               <div className="create-listing-form">
               <h1>Create Listing</h1>
               <label>Product Name: </label>
                <input className="form-control" type="text" name="product_name" id="product_name" placeholder="John Doe" onChange={(e)=>setProductName(e.target.value)} required />
                <label>Product Description: </label>
                <input className="form-control" type="text" name="product_description" id="product_description" placeholder="lorem" onChange={(e)=>setProductDescription(e.target.value)} required />
                <label>Product Price: </label>
                <input className="form-control" type="text" name="product_price" id="product_price" placeholder="$99.00" onChange={(e)=>setProductPrice(e.target.value)} required />
                <label>Select Product Image: </label>
                <input type="file" name="product-image" id="product_image" accept="image/*" required />
                <button className="btn btn-primary" type="submit">Create Listing</button>
               </div>
            </form>
            <Footer/>
        </div>
     );
}
 
export default CreateListing;