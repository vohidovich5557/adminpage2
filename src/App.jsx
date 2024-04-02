import React from "react";
import { Route, Routes } from "react-router";
import { Login } from "./pages/login";
import { AppLayout } from "./layout/app-layout";
import { Category } from "./pages/category";
import { CategoryInput } from "./pages/category-details";
import { ProductDetail } from "./pages/product-detail";
import { CategoryEdit } from "./pages/category-edit";
import { ProductEdit } from "./pages/product-edit";
import { CategoryProduct } from "./pages/category-products";
import { Product } from "./pages/product";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="category/input" element={<CategoryInput />} />
          <Route path="category/edit/:id" element={<CategoryEdit />} />
          <Route
            path="category/product/:id/:title"
            element={<CategoryProduct />}
          />
          <Route path="product" element={<Product />} />
          <Route path="product/edit/:id" element={<ProductEdit />} />
          <Route path="product/input" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
