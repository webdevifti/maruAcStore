import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import Signin from "./pages/Signin"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import Products from "./pages/Products"
import Blog from "./pages/Blog"
import SingleBlog from "./pages/SingleBlog"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Favourites from "./pages/Favourites"
import Account from "./pages/Account"
import AcRent from "./pages/AcRent"

function App() {

  return (
    <>
      <section className="app-wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/maruacstore" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/ac-rent" element={<AcRent />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<SingleBlog />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/my-account" element={<Account />} />
            <Route path="/my-favourites" element={<Favourites/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
