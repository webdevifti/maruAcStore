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
import ProductCategory from './pages/ProductCategory';
import ProductBrand from './pages/ProductBrand';
import ProductDetail from "./pages/ProductDetail"
import AllBrands from "./pages/AllBrands"
import AllCategories from "./pages/AllCategories"

function App() {

  return (
    <>
      <div className="app-wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/maruacstore" element={<Home />} />
            <Route path="/maruacstore/services" element={<Services />} />
            <Route path="/maruacstore/product/:slug/:slugTwo/:slugThree" element={<Products />} />
            <Route path="/maruacstore/product-detail/:slug" element={<ProductDetail />} />
            <Route path="/maruacstore/product/:slug" element={<ProductCategory />} />
            <Route path="/maruacstore/product/:slug/:slugTwo" element={<ProductBrand />} />
            <Route path="/maruacstore/all-categories" element={<AllCategories />} />
            <Route path="/maruacstore/all-brands" element={<AllBrands />} />
            <Route path="/maruacstore/ac-rent" element={<AcRent />} />
            <Route path="/maruacstore/blog" element={<Blog />} />
            <Route path="/maruacstore/blog/:slug" element={<SingleBlog />} />
            <Route path="/maruacstore/about-us" element={<AboutUs />} />
            <Route path="/maruacstore/contact-us" element={<Contact />} />
            <Route path="/maruacstore/my-account" element={<Account />} />
            <Route path="/maruacstore/my-favourites" element={<Favourites/>} />
            <Route path="/maruacstore/cart" element={<Cart />} />
            <Route path="/maruacstore/signup" element={<Signup />} />
            <Route path="/maruacstore/signin" element={<Signin />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
