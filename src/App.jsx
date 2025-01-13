import React from "react";
import {
  Building2,
  Home,
  MapPin,
  Phone,
  Mail,
  Users,
  Briefcase,
  CheckCircle2,
  Building,
  Map,
  Store,
  Warehouse,
  ArrowRight,
} from "lucide-react";
import logo from  "./assets/logo.png"
import propertySales from  "./assets/propertySales.png"
import GroupHousing from  "./assets/GroupHousing.png"
import leasing from  "./assets/leasing.png"
import Rent from  "./assets/Rent.png"
import buySell from  "./assets/buySell.png"
import landDeals from  "./assets/landDeals.png"
import CommercialOffice from  "./assets/CommercialOffice.png"
import ResidentialProperty from "./assets/ResidentialProperty.png";
 


const salesProducts = [
    {
      title: "Builder Floors",
      description: "Exclusive residential floors with modern amenities",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Group Housing",
      description: "Premium apartment complexes in prime locations",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Plots",
      description: "Prime residential and commercial plots",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Land",
      description: "Strategic land parcels for development",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Shops",
      description: "Retail spaces in high-footfall areas",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const commercialProducts = [
    {
      title: "Malls & High Streets",
      description: "Premium retail spaces in prime commercial districts",
      image: "/placeholder.svg?height=200&width=300",
      icon: Warehouse,
    },
    {
      title: "Warehouse & Godowns",
      description: "Strategically located storage solutions",
      image: "/placeholder.svg?height=200&width=300",
      icon: Warehouse,
    },
  ];

function App() {
  return (
    <div className="bg-white">
      {/* Hero Section */}

      <section
        className=" h-screen "
        style={{
          backgroundImage: `url("./src/assets/Banner.png")`,
          backgroundPosition: "-630%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <nav>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24">
            <div className="flex justify-between items-center py-6">
              <div>
                <img
                  src={logo}
                  alt=""
                  className="h-20 sm:h-12 md:h-14 xl:h-20 object-cover w-auto"
                />
              </div>
              <div className="hidden md:flex font-extrabold text-2xl space-x-8">
                <a
                  href="#services"
                  className="text-white hover:text-[#D54829] transition-colors"
                >
                  Services
                </a>
                <a
                  href="#products"
                  className="text-white hover:text-[#D54829] transition-colors"
                >
                  Products
                </a>
                <a
                  href="#why-us"
                  className="text-white hover:text-[#D54829] transition-colors"
                >
                  Why Us
                </a>
                <a
                  href="#careers"
                  className="text-white hover:text-[#D54829] transition-colors"
                >
                  Careers
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-[#D54829] transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="px-5 md:px-20 flex max-w-2xl  py-40 motion-translate-x-in-[2%] motion-translate-y-in-[102%] motion-ease-spring-smooth">
          <div>
            <p className="text-4xl md:text-6xl font-extrabold">Welcome to</p>
            <p className="text-6xl md:text-8xl font-extrabold pb-10">
              Found One
            </p>
            <div className="text-lg text-justify pb-10">
              <p className="text-2xl">
                "Simplifying property decisions for you"{" "}
              </p>
              <p>
                We make real estate easy and rewarding by helping you find your
                dream home, ideal commercial space, or a great investment
                opportunity.
              </p>
            </div>
            <button className="bg-[#F0B624] text-xl text-black font-semibold  py-4 px-8 rounded-full">
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="my-20 p-10  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                title: "Buying & Selling",
                desc: "Seamless transactions with expert guidance",
                img: buySell,
              },
              {
                icon: Building,
                title: "Leasing",
                desc: "Effortless lease agreements for all properties",
                img: leasing,
              },
              {
                icon: Building2,
                title: "Rentals",
                desc: "Find the perfect rental property",
                img: Rent,
              },
              {
                icon: Users,
                title: "Group Housing",
                desc: "Homes in secure communities",
                img: GroupHousing,
              },
              {
                icon: Map,
                title: "Land Deals",
                desc: "Guidance for buying or selling land",
                img: landDeals,
              },
              {
                icon: Store,
                title: "Commercial Spaces",
                desc: "Tailored solutions for businesses",
                img: CommercialOffice,
              },
              {
                icon: Building2,
                title: "Property Sales",
                desc: "Expert support for selling properties",
                img: propertySales,
              },
              {
                icon: Home,
                title: "Residential Properties",
                desc: "Options for every lifestyle",
                img: ResidentialProperty,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative p-6 h-52 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 overflow-hidden"
                style={{
                  backgroundImage: `url("${service.img}")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Text Content */}
                <div className="relative z-10 text-center text-white flex flex-col justify-center h-full">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-lg">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-center mb-16">
            Our Products
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-4xl font-bold mb-8  w-fit px-10 py-3 ">
                Sales
              </p>
              <div className="space-y-5">
                {[
                  "Builder Floors",
                  "Group Housing",
                  "Plots",
                  "Land",
                  "Shops",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center mx-auto md:mx-0 space-x-3 p-4 w-80 bg-black  rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
                  >
                    <CheckCircle2 className="h-6 w-6 text-[#F0B624]" />
                    <span className="text-lg text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-4xl font-bold mb-8  w-fit px-2 md:px-10 py-3  ">
                Commercial Leasing
              </p>
              <div className="space-y-4 ">
                {["Malls & High Streets", "Warehouse & Godowns"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex items-center w-80 space-x-3  mx-auto md:mx-0  p-4 bg-black rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
                    >
                      <Warehouse className="h-6 w-6 text-[#F0B624]" />
                      <span className="text-lg text-white">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 md:h-[80vh] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-4xl font-bold text-center ">Why Choose Us</p>
          <p className=" text-black  md:m-5 p-10 text-justify w-full">
            We focus on making your real estate journey easy and efficient with
            expert advice and personalized solutions. Whether you’re looking for
            your perfect home or a commercial property, we offer carefully
            selected options and a clear, straightforward process.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4  mx-5 md:mx-0 gap-10 md:gap-32">
            <div className="bg-[#ffc126] text-[#000000] p-6 h-44 text-justify tracking-tight w-80 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-center mb-3">
                Expert Guidance
              </h3>
              <p>
                Our team of seasoned professionals ensures you make informed
                decisions every step of the way.
              </p>
            </div>
            <div className="bg-[#ffc126] text-[#000000] p-6 h-44 text-justify w-80  rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3 text-center">
                Transparency
              </h3>
              <p>
                We believe in clear communication and building trust with our
                clients.
              </p>
            </div>
            <div className="bg-[#ffc126] text-[#000000] p-6 h-44 text-justify w-80  rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3 text-center">
                Wide Network
              </h3>
              <p>
                Access to an extensive portfolio of properties across various
                sectors.
              </p>
            </div>
            <div className="bg-[#ffc126] text-[#000000] p-6 h-44 text-justify w-80  rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-3 text-center">
                Customer-Centric
              </h3>
              <p>Your satisfaction is our priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" text-black rounded-lg p-12 text-center border-2  shadow-lg hover:shadow-xl transition-shadow">
            <Briefcase className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-md md:text-xl mb-8">
              We are always looking for dedicated professionals to join our
              team. Explore opportunities to grow your career with Found One.
            </p>
            <button className="bg-[#F0B624] text-xl text-black  px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20  ">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-[#F0B624]" />
                  <p>
                    43A, iKSANA Workspaces, Sahastradhara Road, Dehradun -
                    248001
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-[#F0B624]" />
                  <p>info@foundone.in</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-[#F0B624]" />
                  <p>+91 88277 78411</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#ebebeb] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="flex items-center">
              <img src={logo} alt="" className="object-cover h-20" />
            </div>
            <div className="text-md text-black">
              Copyright © {new Date().getFullYear()} Found One. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
