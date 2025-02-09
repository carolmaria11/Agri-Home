import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="outer">
      <br />
      <h1 className="text-center text-3xl md:text-5xl font-bold m-14">
        Kind Words from
        <span style={{ color: "#007f3a" }}> Our Satisfied Customers </span>
      </h1>
      <div class="grid-container_t">
        <div class="A_t">
          <div class="box_t J_t">
            <div class="t6-card_t">
              <div class="t6-content_t">
                <h3>Excellent Service!</h3>
                <p>
                  "I had a wonderful experience using this service. The team was
                  professional, responsive, and went above and beyond to ensure
                  my satisfaction."
                </p>
              </div>
              <div class="t6-image-container_t">
                <img src="t2.jpg" alt="User Image" />
              </div>
            </div>
            <div class="t7-card_t">
              <img src="t1.jpg" alt="User Image" />
              <div class="t7-content_t">
                <p>
                  "I had a wonderful experience using this service. The team was
                  professional, responsive, and went above and beyond to ensure
                  my satisfaction."
                </p>
                <div class="author_t">- John Doe</div>
              </div>
            </div>
          </div>
          <div class="box_t">
            <div class="t5-card_t">
              <img src="t3.jpg" alt="User Image" />
              <div class="t5-content_t">
                <p>
                  "The service was top-notch, and the team was incredibly
                  helpful. I will definitely recommend it to others!"
                </p>
                <div class="author_t">- Jane Doe</div>
              </div>
            </div>
          </div>
          <div class="box_t F-S_t">
            <div class="t3-card_t">
              <div class="t3-content_t">
                <h3>Great Experience!</h3>
                <p>
                  "The service was top-notch, and the team was incredibly
                  helpful. I will definitely recommend it to others!"
                </p>
                <div class="author_t">- Jane Doe</div>
              </div>
              <img src="t4.jpg" alt="User Image" />
            </div>
          </div>
        </div>

        <div class="B_t">
          <div class="box_t">
            <div class="testimonial-card_t">
              <img src="t5.jpg" alt="User" />
              <div class="testimonial-content_t">
                <p>
                  "This service is amazing! It exceeded my expectations, and I
                  highly recommend it."
                </p>
                <div class="name_t">John Doe</div>
              </div>
            </div>
            <div class="t4-card_t">
              <img src="t9.jpg" alt="User Image" />
              <div class="t4-content_t">
                <p>
                  "The service was top-notch, and the team was incredibly
                  helpful. I will definitely recommend it to others!"
                </p>
                <div class="author_t">- Jane Doe</div>
              </div>
            </div>
          </div>
          <div class="box_t">
            <div class="t2-card_t">
              <img src="t7.jpg" alt="User Image" />
              <div class="t2-content_t">
                <h3>Great Experience!</h3>
                <p>
                  "The service was top-notch, and the team was incredibly
                  helpful. I will definitely recommend it to others!"
                </p>
                <div class="author_t">- Jane Doe</div>
              </div>
            </div>
            <div class="t-card_t">
              <img src="t8.jpg" alt="User Image" />
              <div class="t-content_t">
                <h3>Excellent Service!</h3>
                <p>
                  "I had a wonderful experience using this service. The team was
                  professional, responsive, and went above and beyond to ensure
                  my satisfaction."
                </p>
                <div class="author_t">- John Doe</div>
              </div>
            </div>
            <div class="t1-card_t">
              <div class="t1-content_t">
                <h3>Excellent Service!</h3>
                <p>
                  "I had a wonderful experience using this service. The team was
                  professional, responsive, and went above and beyond to ensure
                  my satisfaction."
                </p>
              </div>
              <div class="t1-image-container_t">
                <img src="t6.jpg" alt="User Image" />
                <div class="t1-name_t">John Doe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
