import { Link } from 'react-router-dom';
import { Smartphone, Headphones, Wrench, Clock, Shield, Award, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './visuals/ImageWithFallback';
import { products } from '../data/products';

export function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">Your One-Stop Shop for Electronics</h1>
              <p className="mb-8 text-blue-100">
                Professional repair services and premium accessories for all your electronic devices. 
                Quality products, expert service, competitive prices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/catalog" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="#services" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Repair Services
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1563770660941-20978e870e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHJlcGFpcnxlbnwxfHx8fDE3NjM1NjEzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Electronics and Repair"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Repair Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert technicians ready to fix your devices quickly and affordably
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3">Phone & Tablet Repair</h3>
              <p className="text-gray-600 mb-4">
                Screen replacement, battery service, charging port repair, and more. Fast turnaround guaranteed.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Screen replacement</li>
                <li>• Battery replacement</li>
                <li>• Water damage repair</li>
                <li>• Software troubleshooting</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3">Audio Device Repair</h3>
              <p className="text-gray-600 mb-4">
                Headphones, speakers, and earbuds repair services. We fix connectivity and sound issues.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Cable replacement</li>
                <li>• Driver repair</li>
                <li>• Bluetooth connectivity</li>
                <li>• Charging issues</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3">Computer & Laptop Repair</h3>
              <p className="text-gray-600 mb-4">
                Hardware upgrades, virus removal, data recovery, and performance optimization.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Hardware upgrades</li>
                <li>• Virus & malware removal</li>
                <li>• Data recovery</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose ZMD?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best service and products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Fast Service</h3>
              <p className="text-gray-600">
                Most repairs completed within 24-48 hours
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Warranty Included</h3>
              <p className="text-gray-600">
                All repairs come with a 90-day warranty
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Expert Technicians</h3>
              <p className="text-gray-600">
                Certified professionals with years of experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="mb-2">Featured Products</h2>
              <p className="text-gray-600">Check out our most popular accessories</p>
            </div>
            <Link 
              to="/catalog" 
              className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <ImageWithFallback 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-500 mb-1">{product.category}</p>
                  <h3 className="mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600">${product.price}</span>
                    <span className="text-gray-500">★ {product.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">About ZMD</h2>
              <p className="text-gray-700 mb-4">
                Founded with a passion for technology and customer service, ZMD has been serving the community 
                for years with professional electronic repair services and quality accessories.
              </p>
              <p className="text-gray-700 mb-4">
                Our team of certified technicians brings expertise and dedication to every repair, ensuring your 
                devices are fixed right the first time. We stock only premium accessories from trusted brands.
              </p>
              <p className="text-gray-700">
                Whether you need a quick repair or are looking for the perfect accessory, ZMD is your trusted 
                partner for all things electronics.
              </p>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div>
                  <p className="opacity-80 mb-1">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="opacity-80 mb-1">Email</p>
                  <p>support@zmd.com</p>
                </div>
                <div>
                  <p className="opacity-80 mb-1">Hours</p>
                  <p>Mon-Fri: 9AM - 7PM</p>
                  <p>Sat: 10AM - 5PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
