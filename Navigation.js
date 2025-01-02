import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Pricing from "./Pages/Pricing/PricingPlans";
import Class from './Pages/Classes/Class';
import MyBlog from "./Pages/Blog/MyBlog";
import Contact from "./Pages/Contact/ContactPage";
import Day1 from './Pages/Blog/Day1';
import Card from './Pages/Classes/Pages/Card';

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>}/>
          <Route path="pricing" element={<Pricing />} />
          <Route path="Classes" element={<Class/>}/>
          <Route path="myblog" element={<MyBlog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/blog/:id" element={<Day1/>} />
          <Route path="/class/:id" element={<Card/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
