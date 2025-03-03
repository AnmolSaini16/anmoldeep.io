export default function Footer() {
  return (
    <footer className="py-6">
      <div className="container text-center">
        <small className="block text-xs tracking-wide text-gray-500">
          &copy; {new Date().getFullYear()} Anmoldeep Singh. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
}
