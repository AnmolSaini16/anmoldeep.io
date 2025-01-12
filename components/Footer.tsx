export default function Footer() {
  return (
    <footer className="p-6">
      <div className="container max-w-[700px] flex items-center h-full justify-center">
        <small className="block text-xs tracking-wide text-gray-500">
          &copy; {new Date().getFullYear()} Anmoldeep Singh. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
}
