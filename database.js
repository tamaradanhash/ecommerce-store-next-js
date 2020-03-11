import postgres from 'postgres';
require('dotenv').config();
const sql = postgres(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_DATABASE}`,
);

const products = [
  {
    id: '1',
    name: 'Black and White Bed',
    picture: '/Black and White Bed Frame.jpg',
    price: 10,
    description: 'a double bed with a classic white and black sheets',
  },
  {
    id: '2',
    name: 'brown bed comforter',
    picture: '/ Black-and-white Pillows on Brown Bed Comforter.jpg',
    price: 20,
    description: 'black and white pillows on brown bed comforter',
  },
  {
    id: '3',
    name: 'living room',
    picture: '/ Black Flat Screen Tv Near Black Chair on Living Room.jpg',
    price: 30,
    description: 'Black flat Screen T.V near black chair on living room ',
  },
  {
    id: '4',
    name: 'outdoor black steel set',
    picture: '/Black Steel Table With Chairs.jpg',
    price: 40,
    description: 'black steel table with two chairs for outdoor decoration',
  },
  {
    id: '5',
    name: 'outdoor wooden set',
    picture: '/Brown Wooden Table and Chairs.jpg',
    price: 50,
    description: 'light brown wooden table and two chairs ',
  },
  {
    id: '6',
    name: 'living room comfort set',
    picture: '/Chair and Piano in the Living Room.jpg',
    price: 60,
    description: 'lether chair and piano and an eastern rug',
  },
  {
    id: '7',
    name: 'classic white and gray living room',
    picture:
      '/Gray Couch and Clear Glass-top Coffee Table With Black Steel Base.jpg',
    price: 70,
    description:
      'Gray couch and clear glass-top-coffee table with black steel base',
  },
  {
    id: '8',
    name: 'black and white dinning set',
    picture: '/Purple Petaled Flowers on Table.jpg',
    price: 80,
    description:
      'Purple pelated flowers on black dinning table with six white chairs',
  },
  {
    id: '9',
    name: 'garden set',
    picture: '/Wooden Bench.jpg',
    price: 90,
    description: 'wooden bench with with pillows with red and pink circles',
  },
];
export async function postProduct(){
  await sql`
  INSERT INTO product
   (name, description, price)
  VALUES
   (${product.name}, ${product.description}, ${product.price});
  `;
}

export async function getAllProducts() {
  const products = await sql`
  SELECT * FROM ecommerec;
  `;
  return products;
}
export function getProductById(id) {
const product= await sql `
SELECT * FROM product WHRE id=${id};
`;
  return product;
}
