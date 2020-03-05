import Link from 'next/link';
export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>
              {' '}
              Home
              <img src="/homepage.svg" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>
              {' '}
              About Us
              <img src="/about.svg" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>
              {' '}
              Contact Us
              <img src="/contact.svg" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>
              {' '}
              Products
              <img src="/bed.svg" />
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          ul {
            margin: auto;
            margin-top: 30px;
            position: relative;
            width: 900px;
            height: 70px;
            background: #ffffff;
            display: flex;
          }
          ul li {
            list-style: none;
            width: 200px;
            height: 75px;
            left: 221px;
            text-align: center;
            margin-top: 20px;
          }
          ul li a {
            font-family: Tenor Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 28px;
            text-align: center;
            color: #606568;
          }
          ul li a img {
            position: absolute;
            width: 30px;
            height: 30px;
          }
        `}
      </style>
    </div>
  );
}
