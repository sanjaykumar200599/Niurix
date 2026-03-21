import React from "react";
import { Route } from "wouter";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/Hompage";
import Solutions from "./components/solutions/Solutions";
import Industries from "./components/industries/Industries";
import Products from "./components/products/Products";
import Software from "./components/software/Software";
import BlogsContainer from "./components/blogs/BlogsContainer";
import ConatctUs from "./components/contact-us/ContactUs";
import Footer from "./components/footer/Footer";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
    const helmetContext = {};

    return (
        <HelmetProvider context={helmetContext}>
            <main>
                <Header />
                <Route path="/" component={HomePage} />
                <Route path="/solutions/:page" component={Solutions} />
                <Route path="/products/:page" component={Products} />
                <Route path="/software" component={Software} />
                <Route path="/industries/:page" component={Industries} />
                <Route path="/blogs" component={BlogsContainer} />
                <Route path="/contact-us" component={ConatctUs} />
                <Footer />
            </main>
        </HelmetProvider>
    );
};

export default App;
