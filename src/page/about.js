import Layout from "../component/layout/layout";
import React from 'react';
import '../css/about.css';

function About() {
  return (
    <>
    <Layout>
    <div className="maincontent-area">
        <div className="zigzag-bottom"></div>
        <div className="container contact-container">
          <div className="row">
            <div className="contact-info">
              <div className="about-container">
                <h1>About Us</h1>

                <h2>Our Mission</h2>
                <p>We are on a mission to provide high-quality products to our customers and make their lives better.</p>

                <h2>Our Team</h2>
                <div className="team-members">
                  <div className="team-member-card">
                    <img src="https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=800x" alt="Team Member 1" />
                    <h3>John Smith</h3>
                    <p>CEO</p>
                  </div>

                  <div className="team-member-card">
                    <img src="https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_.jpg" alt="Team Member 2" />
                    <h3>Jane Smith</h3>
                    <p>COO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </Layout>
      
   </>
  );
}

export default About;