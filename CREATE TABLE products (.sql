CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL NOT NULL,
  picture VARCHAR NOT NULL
);

INSERT INTO products (
  name , description , price , picture
)VALUES(
'brown bed comforter', 'black and white pillows on brown bed comforter', 20, '/ Black-and-white Pillows on Brown Bed Comforter.jpg'
);
