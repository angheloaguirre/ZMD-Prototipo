import { Link } from 'react-router-dom';
import { Smartphone, Headphones, Wrench, Clock, Shield, Award, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './visuals/ImageWithFallback';
import { products } from '../data/products';

export function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Sección Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>ASADsTu Solución Integral para Dispositivos Electrónicos</h1>
              <p className="mb-8 text-blue-100">
                Servicios profesionales de reparación y accesorios premium para todos tus dispositivos electrónicos.
                Productos de calidad, servicio experto y precios competitivos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/catalog" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Comprar Ahora</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="#services" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Servicios de Reparación
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

      {/* Sección de Servicios */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>Nuestros Servicios de Reparación</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Técnicos expertos listos para reparar sus dispositivos de forma rápida y asequible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3">Reparación de Telefónos Móviles & Tabletas</h3>
              <p className="text-gray-600 mb-4">
                Reemplazo de pantalla, servicio de batería, reparación del puerto de carga y más. Entrega rápida garantizada.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Reemplazo de pantallas</li>
                <li>• Reemplazo de baterías</li>
                <li>• Reparación por daños causados por agua</li>
                <li>• Solución de problemas de software</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3">Reparación de Dispositivos de Audio</h3>
              <p className="text-gray-600 mb-4">
                Servicio de reparación de auriculares, altavoces y audífonos. Solucionamos problemas de conectividad y sonido.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Reemplazo de cables</li>
                <li>• Reparación de controladores (drivers)</li>
                <li>• Conectividad bluetooth</li>
                <li>• Problemas de carga</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-3">Reparación de Laptops & Computadoras</h3>
              <p className="text-gray-600 mb-4">
                Actualizaciones de hardware, eliminación de virus, recuperación de datos y optimización del rendimiento.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Actualizaciones de hardware</li>
                <li>• Eliminación de virus y malware</li>
                <li>• Recuperación de datos</li>
                <li>• Optimización del rendimiento</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>¿Por qué elegir ZMD?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos comprometidos a brindar el mejor servicio y productos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Servicios Rápidos</h3>
              <p className="text-gray-600">
                La mayoría de las reparaciones se completan en 24-48 horas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Garantía Incluida</h3>
              <p className="text-gray-600">
                Todas las reparaciones vienen con una garantía de 90 días.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Técnicos expertos</h3>
              <p className="text-gray-600">
                Profesionales certificados con años de experiencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="mb-2" style={{ fontSize: '1.5rem' }}>Productos Destacados</h2>
              <p className="text-gray-600">Echa un vistazo a nuestros accesorios más populares</p>
            </div>
            <Link 
              to="/catalog" 
              className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
            >
              <span>Ver Todos</span>
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
                    <span className="text-blue-600">S/. {product.price}</span>
                    <span className="text-gray-500">★ {product.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de "Sobre Nosotros" */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6" style={{ fontSize: '1.5rem' }}>Sobre ZMD</h2>
              <p className="text-gray-700 mb-4">
                Fundada con pasión por la tecnología y el servicio al cliente, 
                ZMD lleva años sirviendo a la comunidad con servicios profesionales 
                de reparación electrónica y accesorios de calidad.
              </p>
              <p className="text-gray-700 mb-4">
                Nuestro equipo de técnicos certificados aporta experiencia y dedicación a cada reparación, 
                garantizando que sus dispositivos se reparen correctamente a la primera. 
                Solo disponemos de accesorios premium de marcas de confianza.
              </p>
              <p className="text-gray-700">
                Ya sea que necesite una reparación rápida o esté buscando el accesorio perfecto, 
                ZMD es su socio de confianza para todo lo relacionado con la electrónica.
              </p>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="mb-6" style={{ fontSize: '1.25rem' }}>Contáctanos</h3>
              <div className="space-y-4">
                <div>
                  <p className="opacity-80 mb-1">Teléfono Móvil</p>
                  <p>+51 955 326 857</p>
                </div>
                <div>
                  <p className="opacity-80 mb-1">Correo Electrónico</p>
                  <p>soportetecnico@zmd.com</p>
                </div>
                <div>
                  <p className="opacity-80 mb-1">Horario de Atención</p>
                  <p>Lunes: Cerrado</p>
                  <p>Martes a Sábados: 10:00 AM - 8:00 PM</p>
                  <p>Domingos: 10:00 AM - 3:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
