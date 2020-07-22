import { Carousel } from 'react-bootstrap';
const ImagesSlide = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./slideImages/IMG_3553.JPG"
            alt="Fisrt slide"
            height="400"
          />
          {/* <Carousel.Caption>
            <h3>Al-Mutahida Furniture</h3>
            <p>
              Full home furniture (ready and tailored), bedrooms, kids rooms,
              sofa sets, tables, mattresses, carpets, electrical household
              appliances (wholesale and retail)
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./slideImages/IMG_3554.JPG"
            alt="Second slide"
            height="400"
          />
          {/* <Carousel.Caption>
            <h3>Our Second Branch</h3>
            <p>
              Visit our branch in Sehnaya - Al-Tanzeem square <br /> Qusai
              Haddad: 0950 004 940
              <br /> Shuaib Haddad: 0937 555 149
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./slideImages/IMG_3564.JPG"
            alt="Third slide"
            height="400"
          />
          {/* <Carousel.Caption>
            <h3>House of the strongest offers in Damascus</h3>
            <p>
              We cordially invite you to visit our showrooms to take advantage
              of offers and discounts
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./slideImages/IMG_3565.JPG"
            alt="Fourth slide"
            height="400"
          />
          {/* <Carousel.Caption>
            <h3>Al-Mutahida Furniture</h3>
            <p>The most luxurious home furniture and the latest models</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <style jsx>
        {`
          .container {
            margin-top: 5px;
          }

          .d-block w-100 {
            height: 100px !important;
          }
        `}
      </style>
    </div>
  );
};
export default ImagesSlide;
