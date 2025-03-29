import "bootstrap/dist/css/bootstrap.min.css";

export default function LandingPage() {
  return (
    <div className="position-relative vh-100 overflow-hidden">
      {/* Video Background */}
      <video
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/ghost.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      {/* Content */}
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className="display-4 fw-bold">Welcome to PlaYHamsteR</h1>
        <p className="lead">Track upcoming PC game releases & discounts.</p>
        <button className="btn btn-danger btn-lg">Get Started</button>
      </div>
    </div>
  );
}
