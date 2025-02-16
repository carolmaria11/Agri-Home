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
                <p>
                "AgriAlly has completely transformed the way I manage my farm. The disease prediction tool helped me detect early-stage infections in my crops, saving me from huge losses. The resources available here are invaluable!"
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
                "I took an online course on AgriAlly’s LMS about hydroponics, and it was extremely informative. The instructors are experts, and the content is practical and easy to understand."
                </p>
                <div class="author_t">- Rajesh Kumar</div>
              </div>
            </div>
          </div>
          <div class="box_t">
            <div class="t5-card_t">
              <img src="t3.jpg" alt="User Image" />
              <div class="t5-content_t">
                <p>
                "The platform is easy to use, and the support team is always helpful."
                </p>
                <div class="author_t">- Sunita Devi</div>
              </div>
            </div>
          </div>
          <div class="box_t F-S_t">
            <div class="t3-card_t">
              <div class="t3-content_t">
                <h3>Great Experience!</h3>
                <p>
                "AgriAlly’s AI-powered chatbot is incredibly helpful. Whenever I have questions about fertilizers, crop rotation, or pest control, I get instant, reliable answers."
                </p>
                <div class="author_t">- Savitri Bai</div>
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
                "The community forum connects me with farmers worldwide to share tips and solutions."
                </p>
                <div class="name_t">- Arjun Das</div>
              </div>
            </div>
            <div class="t4-card_t">
              <img src="t9.jpg" alt="User Image" />
              <div class="t4-content_t">
                <p>
                "Great prices on farming tools and instant chatbot support!"
                </p>
                <div class="author_t">- Mahesh Pawar</div>
              </div>
            </div>
          </div>
          <div class="box_t">
            <div class="t2-card_t">
              <img src="t7.jpg" alt="User Image" />
              <div class="t2-content_t">
                <h3>Great Experience!</h3>
                <p>
                "The AI disease detection tool is a true game-changer!"
                </p>
                <div class="author_t">- Meena Joshi</div>
              </div>
            </div>
            <div class="t-card_t">
              <img src="t8.jpg" alt="User Image" />
              <div class="t-content_t">
    
                <p>"As a small-scale farmer, finding the right resources used to be a challenge. AgriAlly has given me access to free and paid materials that are helping me adopt modern farming techniques."
                </p>
                <div class="author_t">- Gopal Sharma</div>
              </div>
            </div>
            <div class="t1-card_t">
              <div class="t1-content_t">
                <h3>Excellent Service!</h3>
                <p>
                "The AgriAlly community forum is one of the best things about this platform. I’ve learned so much from experienced farmers across the world, and the discussions are always insightful."
                </p>
              </div>
              <div class="t1-image-container_t">
                <img src="t6.jpg" alt="User Image" />
                <div class="t1-name_t">- Subhash Das</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
