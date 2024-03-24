import React from 'react';
import './Testimonials.css';
import { Link } from 'react-scroll';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonials() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <>
            <div className='test'>
                <p>OUR MISSION</p>
                <h1>To offer superior quality products by</h1>
                <h1>following the best business practices</h1>
                <h1>resulting in employee and customer </h1>
                <h1>satisfaction.</h1>
                <Link to=""><button>What our customers say</button></Link>
            </div>

            <Slider {...settings}>
                <div>
                    <img src="https://www.repricerexpress.com/wp-content/uploads/2017/05/customer-reviews.png" alt="Review 1" />
                </div>
                <div>
                    <img src="https://www.effectivespend.com/wp-content/uploads/2019/07/Amazon-Customer-Review-min.jpg" alt="Review 2" />
                </div>
                {/* Add more review images as needed */}
            </Slider>
        </>
    );
}

export default Testimonials;
