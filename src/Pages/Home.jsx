import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import NewDeals from "../Components/NewDeals";
import "../Styles/Home.css";

const Home = () => {
    return ( 
        <div>
            <NavigationBar/>
            <NewDeals/>
            <Footer/>
        </div>
     );
}
 
export default Home;
