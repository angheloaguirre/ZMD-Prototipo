import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, Check, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './visuals/ImageWithFallback';
import { products } from '../data/products';
import { CartItem } from '../App';

interface ProductDetailProps {
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

export function ProductDetail({ addToCart }: ProductDetailProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-gray-500">Producto no encontrado</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Bottón de Retroceso */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Regresar</span>
      </button>

      {/* Detalle de Productos */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Imagen del Producto */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Información del Producto */}
        <div>
          <p className="text-blue-600 mb-2">{product.category}</p>
          <h1 className="mb-4">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Precio */}
          <div className="mb-6">
            <span className="text-blue-600">S/. {product.price}</span>
          </div>

          {/* Estado del Stock */}
          <div className="mb-6">
            {product.inStock ? (
              <span className="text-green-600 flex items-center space-x-1">
                <Check className="w-5 h-5" />
                <span>En Stock</span>
              </span>
            ) : (
              <span className="text-red-600">Fuera de Stock</span>
            )}
          </div>

          {/* Descripción */}
          <div className="mb-8">
            <h3 className="mb-3">Descripción</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* Características */}
          <div className="mb-8">
            <h3 className="mb-3">Características</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botón Agregar al Carrito */}
          {product.inStock ? (
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Añadir al Carrito</span>
            </button>
          ) : (
            <button
              disabled
              className="w-full bg-gray-300 text-gray-500 py-4 rounded-lg cursor-not-allowed"
            >
              Fuera de Stock
            </button>
          )}
        </div>
      </div>

      {/* Productos Relacionados */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="mb-8">Productos Relacionados</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <div
                key={relatedProduct.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-500 mb-1">{relatedProduct.category}</p>
                  <h3 className="mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600">S/. {relatedProduct.price}</span>
                    <span className="text-gray-500">★ {relatedProduct.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
