import React from 'react';
import { SocialIcon } from 'react-social-icons'

const ContactUs = () => {
    return (
    <div className="max-w-full mx-5 px-6 py-16">

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl font-bold underline decoration-blue-500 mb-2">Corporate Headquarters</h2>
          <p className="text-lg font-bold">106 W 32nd St, New York, NY 10001</p>

          <h2 className="text-4xl font-bold underline decoration-blue-500 mt-6 mb-2">For All Inquiries</h2>
          <p className="text-lg font-bold">admin@enyxtherapeutics.com</p>
          <p className="text-lg font-bold">+1 (917) 819-1296</p>

          <h2 className="text-4xl font-bold underline decoration-blue-500 mt-6 mb-2">Social Media</h2>
            <div className="footer-social flex space-x-4">
                <a href="#" className="text-blue-600"><SocialIcon url="https://facebook.com" /></a>
                <a href="#" className="text-blue-600"><SocialIcon url="https://twitter.com" /></a>
                <a href="#" className="text-blue-600"><SocialIcon url="https://linkedin.com" /></a>
            </div>
        </div>

        {/* Google Maps Embed */}
        <div>
          <h2 className="text-4xl font-bold underline decoration-blue-500 mb-2">Location</h2>
          <iframe
            title="Google Maps"
            className="w-full h-64 border rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9624456342147!2d-73.99352692359402!3d40.74847767143706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ae12a2e38f%3A0xd0c3a6fdfd3b177!2s106%20W%2032nd%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1679607458891!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
  
export default ContactUs;