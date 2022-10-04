import Carousel from "react-bootstrap/Carousel";

function FeatureContent() {
  return (
    <Carousel controls={false} indicators={false} style={{
        maxWidth: "100vw"
        }}>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>In Lux Fashion</h3>
          <p>Find Out Whats Special</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1577909698488-3c3705c9c265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Vision To A New Fashion</h3>
          <p>Explore Great Clothing</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1598962884139-f84fedded2d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Relax As The Sunsets</h3>
          <p>
            Feel Comfortable Everywhere You Go
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FeatureContent;