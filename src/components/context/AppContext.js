import { createContext , useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext)

    if(context === undefined){
        throw new Error('Appcontext must be within app context provider');
    }
    return context;
}

const AppContextProvider = ({children}) => {


    const [cart , setcart] = useState([]);

    const addtocart = (book) => {

        const oldcart = [...cart];
        const newcart = oldcart.concat(book);
        setcart(newcart);
    };

    const removecart = (id) => {
        const oldcart = [...cart];
        const newcart = oldcart.filter((book) => book.id !== id);
        setcart(newcart);
    };

    return (
        <AppContext.Provider value ={{cart,addtocart,removecart}}
        >
        {children}
        </AppContext.Provider>
       
    )
};

export default AppContextProvider;