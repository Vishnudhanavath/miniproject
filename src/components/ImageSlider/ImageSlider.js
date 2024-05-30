import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

const ImageSlider = () => {
    return (
        <div class="scrollbar">
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1568667256549-094345857637?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>The Library: A Gateway to Knowledge and Inspiration</h3>
                        <p> It is a place where seekers of wisdom, regardless of age, background, or creed, converge to embark on intellectual journeys that transcend time and space.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src = "https://media.istockphoto.com/id/173226077/photo/library-interior-with-bookshelves-and-computers.jpg?s=612x612&w=0&k=20&c=a5Qdg7PUZ3lsrFtEVrEDZ67i86DNP-IQ1g8ga1OAB68="
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>"The only thing that you absolutely have to know is the location of the library." - Albert Einstein</h3>
                        <p>A library is the delivery room for the birth of ideas, a place where history comes to life</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src = "https://media.istockphoto.com/id/182886593/photo/ancient-books-on-an-old-bookshelf-in-a-library.jpg?s=612x612&w=0&k=20&c=NK4zmIqz1dmwVlVb399bc8sWT7WkztoqDHSxTJt3Sz0="
                        className="d-block w-100"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Libraries: The medicine chest of the soul</h3>
                        <p>Embark on a literary adventure like never before with VD Library.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className='welcome-box'>
            <p className='welcome-title'>WELCOME TO LIBRARY</p>
            <p className='welcome-message'>Feed Your Brain<br/>
            <span className='welcome-submessage'>Grab A Book To Read</span></p>
        </div>
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    Welcome to VD Library, your premier destination for discovering, exploring, and embracing the magic of literature.
                    At VD Library, we believe in the transformative power of books to inspire, educate, and enrich lives,
                     and we are committed to providing you with a curated selection of captivating reads that cater to diverse interests and tastes.<br/>
                        <br/>
                    VD Library boasts an extensive and diverse collection of books, spanning across genres, languages, and cultures. From timeless classics that have stood the test of time to contemporary bestsellers that capture the zeitgeist, our library offers something for every reader. Whether you're a passionate bibliophile, a voracious reader, or someone embarking on a journey of literary discovery,
                    you'll find a treasure trove of literary gems waiting to be explored within our virtual shelves..<br/>
                        <br/>
                    Embark on a literary adventure like never before with VD Library. Sign up for your free membership today and unlock a world of books, knowledge, and inspiration at your fingertips. Whether you're a seasoned bookworm or a casual reader, there's something for everyone at VD Library. We look forward to welcoming you to our community of readers and sharing many wonderful reading experiences together.
                        <br/>
                        Your suggestions for improvement are always welcome!<br/>
                        Embark on a literary adventure like never before by becoming a member of our online library community. Sign up for your free account today and gain instant access to a world of knowledge, inspiration, and discovery.
                        <br/>
                        Thank you for choosing us as your trusted literary companion. We look forward to sharing many wonderful reading experiences together.
                        <br/>
                        Happy reading!
                        <br/>
                        Warm regards,
                        <br/>
                        [VD library]
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ImageSlider