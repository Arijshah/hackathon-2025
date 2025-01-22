import React from "react";
import HomePage from "@/components/HomePages/HomeHero";
import FoodCategory from "@/components/HomePages/FoodCatagery";
import OurChefs from "@/components/HomePages/OurChefs";
import ChooseFromMenu from "@/components/HomePages/HomeMenu";
import Aboutus from "@/components/HomePages/AboutUs";
import TestimonialsSection from "@/components/HomePages/Testimonial";
import BlogPost from "@/components/HomePages/BlogPosts";
import Shop from "./shop/page";
import ShopProducts from "./shop/shop";
import { Contact, LogIn, ShoppingCart } from "lucide-react";
import CartPage from "./cart/page";
import { FaQq } from "react-icons/fa";
import CheckOut from "./checkOut/page";
import CheckoutHero from "./checkOut/CheckoutHero";
import ShopDetails from "./shop-details/page";
import SignUpPage from "./signup/page";
import MainCours from "@/components/ManuPages/MainCourse";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div>


      <Navbar/>
      
      {/* Header component for the top section of the page */}
      <HomePage />

      {/* About component to display about us section */}
      <Aboutus />

      {/* Categories component to display various categories */}
      <FoodCategory />

      {/* Choose from menu component to display menu items */}
      <ChooseFromMenu />

      <MainCours/>

      {/* Our Chefs component to display the chefs */}
      <OurChefs />

      {/* Testimonial component to display testimonial section */}
      <TestimonialsSection />

      {/* Blog post component to display blog posts */}
      <BlogPost />

       < Shop/>
      

       <Contact/>

       <LogIn/>

       <CartPage/>

       <ShoppingCart/>

       <ShopDetails/>

       <FaQq/>


       <LogIn/>

       <SignUpPage/>
    

           </div>
  );
};

export default Home;
