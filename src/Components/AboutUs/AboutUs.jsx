import React from 'react'

const AboutUs = () => {
  return (
    <div>
          <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4 text-center">About Us</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <img
              src="https://templatekit.tokopress.com/eventkit/wp-content/uploads/sites/3/2020/02/smiling-audience-applauding-at-a-business-seminar-PLQAUXK-1536x1024.jpg" // Replace with your image URL
              alt="Company Office"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae ex libero. Proin ac diam orci. Integer imperdiet, urna in
              pulvinar feugiat, libero odio efficitur augue.
            </p>
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-700">
              Our team consists of passionate individuals dedicated to making a
              difference. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nulla vitae ex libero. Proin ac diam orci.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default AboutUs