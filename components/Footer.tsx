export default function Footer() {
  return (
    <footer className="text-gray-500 h-16 border-t-[0.5px] flex items-center justify-center">
      <small className="block text-xs">
        &copy; {new Date().getFullYear()} Anmol. All rights reserved.
      </small>
    </footer>
  );
}
