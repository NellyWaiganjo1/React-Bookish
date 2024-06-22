import React from 'react';

const Contact = () => {
    return (
        <section className="contact">
            <div className="container ">
                <div className="row">
                    <div className="col-12 col-md-6 mt-4 mx-auto">
                        <h1>Suggestions</h1>
                        <form action="#" method="post">
                            <div className="form-group mb-2">
                                <input type="text" className="form-control" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group mb-2">
                                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group mb-2">
                                <textarea className="form-control" name="message" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-success rounded-pill mb-2">Submit</button>
                        </form>
                    </div>
                    {/* <div className="col-12 col-md-6 mt-4">
                        <h1>Location</h1>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1994.828071356305!2d35.2728935!3d0.5166043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101a3b6edd9cd%3A0xeaa7bc020ab7d65b!2sImpact%20Bookstore!5e0!3m2!1sen!2ske!4v1716229336346!5m2!1sen!2ske"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Contact;
