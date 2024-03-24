import React from 'react';
import './About.css';
import { Link } from 'react-scroll';
function About(){
    return(
        <>
        <div className='about'>
            <div className="about1">
                   <h1>SATHYAM TRADERS</h1>
                   <h2>Our Vision</h2>
                   <pre></pre>
                   <p>To continually expand and grow to fabricate the highest standards of wire and mesh through </p>
                   <p>quality and commitment..</p>
                   <Link to=''><button>Explore Our Products</button></Link>
            </div>
            <div className='about2'>
                    <div className='abo'>
                            <h1>25+ years of expertise presence across the TamilNadu</h1>
                            <br></br>
                            <p>
                            Instituted in the year of 1995, Sri Lakshmi Wirenetting is in the line of work of manufacturing and trading of first rate products emphasizing on high strength, durability and long lastingness with high resistance to impact. We are deep-rooted with providing top-notch quality for customer contentment.

Presently, we are one of the most prominent manufacturers of everything mesh and wire with a monthly sale of huge quantity in and around the south of India. Majorly tending to every nook and cranny of Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Andaman Nicobar Islands. Our vision is to build a clientele by persistent and steady work on adopting the advancements that enter the industry.
                            </p>
                    </div>
                    <div className='abo1'>
                           <h1>A march towards Safety</h1>
                           <p>Our success and growth is the reflection of unmatched quality that we provide in our range of products. We follow strict quality control measures for each step of production process, right from top quality raw material, advanced machinery, skilled and trained professionals to strict quality checks against several parameters.</p>
                           <Link to=''><button>Start Your Journey With Us</button></Link>
                    </div>
            </div>
        </div>
        </>

    );
}
export default About;