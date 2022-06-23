import './App.css';
import React from "react";
import ContactsPage from './pages/contactsPage/ContactsPage';
import ProductsPage from './pages/productsPage/ProductsPage';
import PortfolioPage from './pages/portfolioPage/PortfolioPage';
import GoodPage from './pages/goodPage/GoodPage';

import FormPage from './pages/formPage/FormPage';
import { ListProducts } from './components/listProducts/ListProducts';


function App() {
        return (
            <div>
               {/* <ContactsPage title="hello i am title"/> */}

               {/* <ProductsPage/>
               ------------------------------
               <ListProducts products={["Potato", "Tomato"]}/> */}

                {/* <PortfolioPage/> */}

                {/* <FormPage/> */}
                <GoodPage/>

            </div>
        )
}

export default App;
