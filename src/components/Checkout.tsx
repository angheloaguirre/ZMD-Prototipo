import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, CheckCircle } from 'lucide-react';
import { CartItem } from '../App';

interface CheckoutProps {
  cart: CartItem[];
  clearCart: () => void;
}

type PaymentMethod = 'niubiz' | 'yape' | 'plin';

export function Checkout({ cart, clearCart }: CheckoutProps) {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('niubiz');
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (cart.length === 0 && !orderComplete) {
    navigate('/cart');
    return null;
  }

  if (orderComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
          <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h2 className="mb-4">¡Orden Confirmada!</h2>
          <p className="text-gray-600 mb-8">
            Gracias por su compra. Recibirá un correo de confirmación en breve.
          </p>
          <p className="text-gray-500">Redirigiendóte a la página de inicio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="mb-8">Pagar</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Formulario de Pago */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Información de Contacto */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="mb-6">Información de Contacto</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Nombres</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Apellidos</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Teléfono Móvil</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Dirección de Envío */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="mb-6">Dirección de Envío</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Dirección</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Distrito</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Código Postal</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Método de Pago */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="mb-6">Método de Pago</h3>
              <div className="space-y-4">
                <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="niubiz"
                    checked={paymentMethod === 'niubiz'}
                    onChange={() => setPaymentMethod('niubiz')}
                    className="w-5 h-5 text-blue-600"
                  />
                  <div className="ml-4 flex items-center space-x-3">
                    <CreditCard className="w-6 h-6 text-gray-600" />
                    <img
                        src="https://img1.wsimg.com/isteam/ip/f329c98d-c299-46a0-86e9-8ccd8a41ec71/nibuiz%20circular.png/:/cr=t:0%25,l:0.09%25,w:99.82%25,h:100%25/rs=w:365,h:365,cg:true"
                        alt="Logo Plin"
                        className="w-6 h-6"
                      />
                    <div>
                      <p>Tarjeta de Crédito / Débito (Niubiz)</p>
                      <p className="text-gray-500">Pague de forma segura con su tarjeta</p>
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="yape"
                    checked={paymentMethod === 'yape'}
                    onChange={() => setPaymentMethod('yape')}
                    className="w-5 h-5 text-blue-600"
                  />
                  <div className="ml-4 flex items-center space-x-3">
                    <Smartphone className="w-6 h-6 text-purple-600" />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Icono_de_la_aplicaci%C3%B3n_Yape.png/250px-Icono_de_la_aplicaci%C3%B3n_Yape.png"
                        alt="Logo Plin"
                        className="w-6 h-6"
                      />
                    <div>
                      <p>Yape</p>
                      <p className="text-gray-500">Pague con Yape</p>
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="plin"
                    checked={paymentMethod === 'plin'}
                    onChange={() => setPaymentMethod('plin')}
                    className="w-5 h-5 text-blue-600"
                  />
                  <div className="ml-4 flex items-center space-x-3">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                     <img
                        src="https://www.bbva.pe/content/dam/public-web/peru/images/promo-sliders/promo-plin.png"
                        alt="Logo Plin"
                        className="w-6 h-6"
                      />
                    <div>
                      <p>Plin</p>
                      <p className="text-gray-500">Pague con Plin</p>
                    </div>
                  </div>
                </label>
              </div>

              { /* Detalles de pago según el método*/ }
              <div className="mt-6">
                {paymentMethod === 'niubiz' && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">Será redirigido a la pasarela de pago segura de Niubiz.</p>
                  </div>
                )}
                {paymentMethod === 'yape' && (
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">Número del Yape: <span>955 326 857</span></p>
                    <p className="text-gray-600">Por favor envíe el pago e incluya su número de pedido en la descripción.</p>
                  </div>
                )}
                {paymentMethod === 'plin' && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">Plin Number: <span>955 326 857</span></p>
                    <p className="text-gray-600">Por favor envíe el pago e incluya su número de pedido en la descripción.</p>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Completar Orden - S/. {total.toFixed(2)}
            </button>
          </form>
        </div>

        {/* Resumen de la Orden */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
            <h3 className="mb-6">Resumen de la Orden</h3>

            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-gray-600">
                  <span>{item.name} x{item.quantity}</span>
                  <span>S/. {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>S/. {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>IGV (18%)</span>
                <span>S/. {tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="text-blue-600">s/. {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
