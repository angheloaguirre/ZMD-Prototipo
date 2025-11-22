import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
            {/* Información del Negocio */}
          <div>
            <div className="bg-blue-600 text-white px-3 py-1 rounded inline-block mb-4">
              <span>ZMD</span>
            </div>
            <p className="text-gray-400 mb-4">
              Su socio de confianza para reparaciones electrónicas y accesorios premium.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ZMDCALLAO" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-400 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Servicios de Reparación
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Reparación de Teléfonos</li>
              <li>Reparación de Tabletas</li>
              <li>Reparación de Dispositivos de Audio</li>
              <li>Reparación de Computadoras</li>
              <li>Recuperación de Datos</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4">Contáctanos</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+51955326857">+51 955 326 857</a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>soportetecnico@zmd.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/1Q7h4T5v5F9nvkdw8" 
                  target="_blank">359 Av. José Santos Chocano Carmen de La Legua - Reynoso, Callao</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ZMD. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
