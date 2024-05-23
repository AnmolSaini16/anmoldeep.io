export default function Footer() {
  return (
    <footer className="text-gray-500 h-8 text-center">
      <small className="block text-xs">
        &copy; {new Date().getFullYear()} Anmol. All rights reserved.
      </small>
    </footer>
  );
}
