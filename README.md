- A products page
- A page for each single product (when you click on the product it goes to this page)
- A shopping cart page (containing a list where products appear when you click on the "Add to cart" button on the single product page), which also shows the total price of all products
- A checkout page / multi-page process which shows the total and asks for shipping and payment information (when you click on "Go to Checkout" on the shopping cart page it goes here)
- A thank you page after a checkout has been completed
- The header will show a shopping cart with the current number of items on all pages

Additionally, during this project we will use Next.js for:

- Switching between different URLs ("Routing")
- Server-Side Rendering (for performance / SEO)

## TODOs
- [x] Pick a product 
- [x]  Decide the name of your site
- [x]  Plan the structure (Wire Framing):
  - [x] Draft for the required pages
    - [x] Products page
    - [x] Single product page
    - [x] Shopping cart page
    - [x] Checkout page/ multi step checkout
    - [x] Thank you page  
  - [x]  Draft the layout of each page
    - [x] Add a nav bar 
    - [x] Choose a layout template for each page
    - [x] Consider the position of each object (element) 

### Technical TODOs - Data modelling
  - [ ] Create a product object 
    - [ ] id
    - [ ] name
    - [ ] price
    - [ ] description
    - [ ] image
  - [ ] Create the cart description object within the array
    - [ ] description
    - [ ] name
    - [ ] quantity
    - [ ] image
    - [ ] individual price

### Technical TODOs - create pages 
  - [ ] Create the home page
  - [ ] Create the products page
    - [ ] Create an Array of products
    - [ ] When you click on "Add to cart" a product should be added to the cart 
    - [ ] When you click on a product you are redirected to the product page  
  - [ ] Create the single product page
    - [ ] Create function method that adds to cart
  - [ ] Create Shopping cart page
    - [ ] Create an array full of objects
    - [ ] Map over the objects to extract details (name, description, price, image)
    - [ ] Add delete button
    - [ ] Add input element 
      - [ ] OnChange modify the quantity and update any **subtotals (with multiplication function) **total per product 
    - [ ] Create function method that gives the total price of the added products
    - [ ] Button that redirects you to the check-out page
  - [ ] Create check-out & payment pages
    - [ ] Create forms for address, contact and card details (add default values)
    - [ ] Add buttons that link to the next step in the check-out process
    - [ ] Last step of check-out redirects you to the thank you page
  - [ ] Create thank you page
 
### Technical TODOs - create components
  - [ ] Header
  - [ ] Footer
  - [ ] Layout
  - [ ] Cart
    - [ ] Show in the basket the number of products we have in the cart
    
  ...................................................................................
  
  
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
