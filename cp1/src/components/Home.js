import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Home.css';

function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "https://www.deltaware.in/images/blog/fence/steel-fence-post-left_hud6ca1be5b67bf579231c4a3c33f46d4a_80192_900x450_resize_q100_h2_box.webp",
        "https://www.alamodecksandfence.com/wp-content/uploads/2022/03/chain-link-fence-texas-soccer-fields.png",
        "https://5.imimg.com/data5/VX/SB/LP/SELLER-18848967/pvc-coated-chainlink-fencing-500x500.jpg"
    ];

    const captions = [
        "Steel Fence Post",
        "Chain Link Fence at Texas Soccer Fields",
        "PVC Coated Chainlink Fencing"
    ];

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000); // Change image every 3 seconds (adjust as needed)

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            <Navbar />
            <div className='home'>
                <div className="slideshow-container">
                    <img src={images[currentImageIndex]} alt="" />
                    <div className="caption">{captions[currentImageIndex]}</div>
                    <div className="dot-container">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;