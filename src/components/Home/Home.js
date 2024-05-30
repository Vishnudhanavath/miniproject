
import { Component } from "react";
import "./Home.css"
// import { MdMenuBook } from "react-icons/md";
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { FaBookReader } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { IoMdBookmarks } from "react-icons/io";

const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  }

class Home extends Component{
    state = {totalBooks:2000,totalUser: 600,reserved:40}
    render(){
        const {totalBooks,totalUser,reserved} = this.state
        return(
            <div className="store-details">
                <ul className="store-list">
                    <li className="store-card">
                            <FaBook  className="logo"/>
                            <p className="store-heading">Total Books</p>
                            <p className="store-heading">{totalBooks}</p>
                    </li>
                    <li className="store-card">
                            <FaBookReader  className="logo"/>
                            <p className="store-heading">Total Memebers</p>
                            <p className="store-heading">{totalUser}</p>
                    </li>
                    <li className="store-card">
                            <IoMdBookmarks  className="logo"/>
                            <p className="store-heading">Reservations</p>
                            <p className="store-heading">{reserved}</p>
                    </li>
                </ul>
                <div className="recent-uploads-container">
                    <h1 className="uploaded-heading">Recently Uploads</h1>
                    <div className="slider-container">
                    <Slider {...settings}>
            <div>
            <img src = "https://books.google.com/books/content/images/frontcover/V5s14nks9I8C?fife=w512-h512" alt = "book1" className="image-book"/>
            </div>
            <div>
            <img src = "https://books.google.com/books/publisher/content/images/frontcover/Kky4EAAAQBAJ?fife=w512-h512" alt = "book2" className="image-book"/>
            </div>
            <div>
            <img src ="https://books.google.com/books/publisher/content/images/frontcover/TazgEAAAQBAJ?fife=w512-h512" alt = "book3" className="image-book"/>
            </div>
            <div>
            <img src ="https://books.google.com/books/publisher/content/images/frontcover/9tnpEAAAQBAJ?fife=w512-h512" alt = "book4" className="image-book"/>
            </div>
            <div>
            <img src ="https://books.google.com/books/publisher/content/images/frontcover/pLL-DAAAQBAJ?fife=w512-h512" alt = "book5" className="image-book"/>
            </div>
            <div>
            <img src ="https://books.google.com/books/publisher/content/images/frontcover/LuXUEAAAQBAJ?fife=w512-h512" alt = "book6" className="image-book"/>
            </div>
            <div>
            <img src ="https://books.google.com/books/publisher/content/images/frontcover/8VfJEAAAQBAJ?fife=w512-h512" alt = "book7" className="image-book"/>
            </div>
            <div>
            <img src ="https://books.google.com/books/publisher/content/images/frontcover/LuXUEAAAQBAJ?fife=w512-h512" alt = "book8" className="image-book"/>
            </div>
            <div>
            <img src ="https://books.google.com/books/publisher/content/images/frontcover/FSO7EAAAQBAJ?fife=w512-h512" alt = "book9" className="image-book"/>
            </div>
            <div>
            <img src ="https://books.google.com/books/publisher/content/images/frontcover/a6_NEAAAQBAJ?fife=w512-h512" alt = "book10" className="image-book"/>
            </div>
                  </Slider>
                </div>
                </div>
            </div>
        )
    }

}

export default Home


