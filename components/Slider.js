import { Carousel } from 'react-bootstrap';
import Homebanner from '../Img/homeBanner3.jpg';
const Slider = () => {
  return (
    <div className="sliderHome">
      <Carousel>
        <Carousel.Item interval={10000000000}>
          <img
            className="d-block  imgWidth"
            src={Homebanner}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Baijoo</h3>
            <p>An extraordinary team of Trademark attorneys, Lawyers and Intellectual property consultants for Registration and protection of Trademarks, Brands, Copyright and other intellectual properties.</p>

            <p>Most reliable services on the globe in the field of Litigations, Corporate Legal matters, Taxation and compliances.</p>

            <p>A team of Researchers including industry’s best Lawyers, Chartered accountants, Company Secretaries and Finance professionals.
            </p>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block imgWidth"
            src={Homebanner}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Quality people & Premium Services</h3>
            <p>Our team comprise of best professional with hard-working and studious approach which delivers premium quality services of legal, compliances, registration  and licensing services.</p>
            <p>Our team puts hardest efforts for resolutions of any complicated issues of Business, Legal, Compliances, Registrations and taxation.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block imgWidth"
            src={Homebanner}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>1600+ Professionals for priority services</h3>
            <p>
              A team of 1800+ top Lawyers, Chartered Accountants and professionals across all the major cities and districts of India for Legal, Trademark, Business, compliances and Taxation Services to our clients.
            </p>
            <p>A dedicated team of highly experienced professionals assigned with dedicated time perform every assignment of our customer in a dedicated and customized manner delivering the best outcomes and quality services in every matter of our concern. We have performed well in many high profile matters and gathered admiration from our clients.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block imgWidth"
            src={Homebanner}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Most Reliable services from Reputed professionals</h3>
            <p>We differentiate ourselves in reliability and quality of services which is uncommon these days where everyone is looking for easy money.
              <br />We work hard and put customized efforts in each case with involvement of senior consultants and professionals and deliver best possible and desired solutions to our clients.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block imgWidth"
            src={Homebanner}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>One stop shop for Legal, Taxation and compliances</h3>
            <p>A professionally managed, integrated and coordinated team for  diverse services of Legal, Compliances, Taxation and Trademark.<br />
              Separate team of experienced professionals for Separate departments deliver their specialty in  their respective fields.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block imgWidth"
            src={Homebanner}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Services with value and ethics</h3>
            <p>We are a great team of professionals with Values and Ethics.
              We advise and guide our clients with Values and Ethics with an honest approach towards our client’s requirements and save our clients from unnecessary expenditures on un-desired practices and guide them with proper ways of resolution.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block imgWidth"
            src={Homebanner}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>We earn goodwill not just professional fee</h3>
            <p>We work for benefits of our clients and earning goodwill and reputation with primary significance and not to generate billing of professional fee. Professional fees are a part of our services and have secondary significance.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider;