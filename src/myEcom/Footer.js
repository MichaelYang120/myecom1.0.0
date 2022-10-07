export default function Footer() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          backgroundColor: "#1111",
          width: "100%"
        }}
      >
        <footer style={{
            display: "flex",
            justifyContent: "space-between",
            height: "70px",
            alignItems: "center"
        }}>
          <div className="footer-logo">LOGO</div>
          <nav className="footer-nav">
            <a href="#">Learn More</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </nav>
        </footer>
      </div>
    </>
  );
}