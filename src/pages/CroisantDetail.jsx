import React from 'react';
import { useParams } from 'react-router-dom';

// gambar
import Croissant from "../assets/Croissant.jpg";
import Cromboloni from "../assets/Cromboloni.jpg";
import Sourdough from "../assets/Sourdough.jpg";

const CroisantDetail = () => {
  const { id } = useParams();

  // Data produk
  const products = {
    1: {
      name: "Croissant",
      harga: "Rp. 36,000",
      rating: "★★★★☆",
      description: "Cromboloni – A Sweet Cinnamon Delight Indulge in the irresistible taste of Cromboloni, a warm and comforting treat that combines the rich flavors of cinnamon with soft, pillowy dough.Inspired by traditional Italian pastries, Cromboloni is a perfect blend of sweet and savory, with a light, fluffy texture that melts in your mouth.Each bite is a burst of cinnamon goodness, making it the ideal snack for any time of day. Perfectly baked to golden perfection, Cromboloni is great on its own or paired with a cup of coffee or tea.Whether you're starting your day or enjoying an afternoon break, this sweet treat will surely satisfy your cravings and bring a little joy to your day. Experience the best of homemade baking with Cromboloni – a must-try for anyone who loves cinnamon- based pastries!",
      variations: ["Plain", "Chocolate", "Almond"], // Variasi rasa
      images: [Croissant, Croissant, Croissant]
    },
    2: {
      name: "Cromboloni",
      harga: "Rp. 42,000",
      rating: "★★★★★",
      description: "Cromboloni by Napastry is a signature snack known for its unique shape, crisp texture, and layered pastry. This innovative creation blends the flakiness of a croissant with imaginative fillings such as chocolate, cheese, fruits, or other premium ingredients, offering a delightful balance of sweet and savory flavors. The Napastry brand is celebrated for its use of high-quality ingredients, meticulous craftsmanship, and dedication to producing modern pastries with a touch of tradition. Cromboloni by Napastry is perfect as a snack for relaxing moments, a coffee companion, or a sophisticated dessert.",
      variations: ["Chocolate", "Matcha", "Red-Velvet", "Caramel", "Almond", "Pistachio"],
      images: [Cromboloni, Cromboloni, Cromboloni]
    },
    3: {
      name: "Sourdough",
      harga: "Rp. 45,000",
      rating: "★★★★★",
      description: "Sourdough by Napastry is a premium artisan bread crafted with precision and passion, embodying the perfect balance of flavor, texture, and nutrition. Made using a natural fermentation process with high-quality ingredients, Napastry's sourdough boasts a tangy, rich taste, a crisp golden crust, and a soft, airy interior.Napastry offers a variety of sourdough options, from the classic loaf to creative twists like seeded, multigrain, and fruit-infused variants, ensuring there's something for every palate. Each loaf is hand-shaped and slow-fermented, allowing the natural flavors to develop fully while maintaining a healthy, preservative-free approach. Perfect for breakfast, sandwiches, or as an accompaniment to soups and salads, Sourdough by Napastry elevates everyday meals into gourmet experiences.",
      variations: ["Classic", "Whole Wheat", "Rye", "Olive", "Garlic", "Cheese", "Salmon"],
      images: [Sourdough, Sourdough, Sourdough]
    }
  };

  // Mengambil data produk berdasarkan id
  const product = products[id];

  return (
    <div className="container m-5 pt-5">
      <div className="row">
        {/* Gambar Produk */}
        <div className="col-md-6">
          <img
            src={product.images[0]} // Gambar utama
            alt="Product"
            className="img-fluid rounded mb-3"
          />
          <div className="d-flex gap-2">
            {/* Menampilkan gambar varian */}
            {product.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Variation ${index + 1}`}
                className="img-thumbnail"
                style={{ width: "100px", height: "100px" }}
              />
            ))}
          </div>
        </div>

        {/* Info Produk */}
        <div className="col-md-6">
          <h1 className="fw-bold">{product.name}</h1>
          <p className="text-danger fs-4">{product.harga}</p>
          <p>{product.rating}</p>

          <div className="mb-3">
            <label htmlFor="variation" className="form-label">
              Variation:
            </label>
            <select id="variation" className="form-select w-auto">
              {product.variations.map((variation, index) => (
                <option key={index} value={variation}>{variation}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Count:
            </label>
            <input
              type="number"
              id="quantity"
              className="form-control w-auto"
              min="1"
              defaultValue="1"
            />
          </div>

          <div className="d-flex gap-3 mb-3">
            <button className="btn btn-success">Add to Cart</button>
            <button className="btn btn-warning">Buy</button>
          </div>

          <div>
            <h2>Product Description</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CroisantDetail;
