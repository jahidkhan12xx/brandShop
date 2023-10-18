import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Partners from "../../components/Partners/Partners";
import ContactUs from "../../components/Contact Us/ContactUs";



const Home = () => {

    const {age,user} = useContext(AuthContext);
    console.log(age,user);
    return (
        <div>
           <Banner></Banner>
           <Brands></Brands>
           <Partners></Partners>
           <ContactUs></ContactUs>
           
        </div>
    );
};

export default Home;