// AboutUs.js
import React from 'react';
import aboutUsImage from '../assets/HouseShare logo.png'; 

const AboutUs = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#9AB87A',
      boxSizing: 'border-box', 
      minHeight: 'calc(100vh - 40px)', 
      color: '#333333', // Adjust the text color as needed for better readability
    }}>
      <img src={aboutUsImage} alt="About Us" style={{ width: '25%', margin: '0 auto', display: 'block' }} />
      <p>
        HouseShareSF is on a mission to revolutionize the rental market in San Francisco. Our platform is designed to bridge the gap between landlords and renters, offering a user-friendly, efficient, and transparent way to navigate the rental process. Whether you're looking to find your next home or to list your property, HouseShareSF is your go-to solution.
      </p>
      <p>
        Our focus on the San Francisco market allows us to cater specifically to the unique needs of this vibrant community. We understand the challenges faced by both renters and property owners in the city, and we strive to offer services that address these issues directly. From offering insights into market trends to providing tips on how to secure the perfect rental, HouseShareSF is committed to empowering users with the knowledge and tools they need.
      </p>
      <p>
        Join us on this journey as we work towards creating a more connected and accessible San Francisco rental market. At HouseShareSF, we believe that finding or listing a rental property should be straightforward, transparent, and enjoyable. Let's make housing in San Francisco better, together.
      </p>
    </div>
  );
}

export default AboutUs;
