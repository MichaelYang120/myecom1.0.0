import Carousel from "react-bootstrap/Carousel";

const Item = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
    alt: "First slide",
    captionTitle: "In Lux Fashion",
    caption: "Find Out Whats Special",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1577909698488-3c3705c9c265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
    alt: "First slide",
    captionTitle: "Vision To A New Fashion",
    caption: "Explore Great Clothing",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1598962884139-f84fedded2d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
    alt: "First slide",
    captionTitle: "Relax As The Sunsets",
    caption: "Feel Comfortable Everywhere You Go",
  },
];

function FeatureContent() {
  return (
    <Carousel
      controls={false}
      indicators={false}
      style={{
        maxWidth: "100vw",
      }}
    >
      {Item.map((Item, index) => (
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={Item.src}
            alt={Item.alt}
          />
          <Carousel.Caption>
            <h3>{Item.captionTitle}</h3>
            <p>{Item.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default FeatureContent;