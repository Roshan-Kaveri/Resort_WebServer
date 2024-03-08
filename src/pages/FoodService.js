import { Link } from "react-router-dom";
import '../App.css';
import NavBar from '../components/login_page/NavBar';
import Introduction from '../components/login_page/Introduction';
import Background from '../components/login_page/Background';
import Cabservice from '../components/cabservice/cabservice';
import Cab_img from "../components/cabservice/cab_img";
import FoodImgBg from "../components/FoodService/foodimagebg";
import FoodItems from "../components/FoodService/fooditem";
import Foodbelowpage from "../components/FoodService/foodpagebelow";
import North from '../components/FoodService/asssets/cus_north.png';
import South from '../components/FoodService/asssets/cus_south.png';
import Chinese from '../components/FoodService/asssets/cus_chinese.png';

const FoodService = () => {
    return (
        <>
        <NavBar></NavBar>
        <FoodImgBg></FoodImgBg>
        <h1 className="cusines">Order Cuisines</h1>
        <div className="fooditems">
        <FoodItems  img={North} title = 'North India Cuisine' 
        desc = "North Indian cuisine is characterized by its rich and aromatic dishes, featuring a diverse array of flavors and spices. Staples include butter chicken, biryani, and naan bread, often prepared using tandoori cooking techniques and creamy gravies. " 
        price = '100$'></FoodItems>
        
        <FoodItems  img={South} title = 'South India Cuisine' 
        desc = "South Indian cuisine is known for its vibrant flavors and extensive use of rice, lentils, and coconut. Signature dishes such as dosa, idli, and sambar highlight the region's unique culinary traditions, with a focus on fermented batters and savory accompaniments."
         price = '120$'></FoodItems>
        
        <FoodItems  img={Chinese} title = 'Chinese Cuisine' 
        desc = "Chinese cuisine offers a diverse and bold culinary experience, encompassing a wide range of flavors and cooking techniques. From sweet and sour dishes to savory stir-fries, Chinese cuisine showcases a variety of regional specialties, including dim sum, noodles, and dumplings, often prepared using techniques such as steaming, stir-frying, and deep-frying. " 
        price = '75$'></FoodItems>
        
        
        </div>
        <Foodbelowpage></Foodbelowpage>
        
        </>
    )
};

export default FoodService;