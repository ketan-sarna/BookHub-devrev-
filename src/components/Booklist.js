import React,{useState,useEffect} from 'react'
import '../App'
import { API_URL } from '../API'
import axios from 'axios'
import { useAppContext } from './context/AppContext'
import { useNavigate } from 'react-router'

const Booklist = () => {


    const {cart,addtocart,removecart} = useAppContext();


    const [books,setbooks] = useState([]);

    const navigate = useNavigate();

    const cartchek = (id) => {

        const boolean = cart.some((book) => book.id === id);
        return boolean;

    }

    useEffect(() => {
        axios.get(API_URL).then(res =>{
            console.log(res.data);
            setbooks(res.data);

        })
        .catch((err) => console.log(err));
    },[])


    return (
    <div className='book-list'>
        {books.map((book)=>(
            <div key={book.id} className='book'>
                <div><h4>{book.title}</h4></div>
                <div><img src={book.image_url} alt='#' onClick={() => navigate(`/books/${book.id}`)}></img></div>
                <div>
                    {cartchek(book.id) ? 
                   ( <button onClick={() => removecart(book.id)}>Remove From Cart</button> ):( <button onClick={() => addtocart(book)}>Add To Cart</button>)
                }
                    
                </div>
            </div>
        ))}
    </div>
  );
};

export default Booklist