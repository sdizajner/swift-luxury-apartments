import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
      <h1 className="font-serif-display text-6xl md:text-8xl font-bold text-gold-gradient mb-6">
        404
      </h1>
      <p className="font-serif-body text-xl text-muted-foreground mb-10">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-primary text-primary-foreground px-8 py-3 font-sans-elegant text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
