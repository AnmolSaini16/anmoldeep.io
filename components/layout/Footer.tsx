export default function Footer() {
  return (
    <footer>
      <div className="text-center mx-auto py-6 container max-w-[700px] relative">
        <small className="block text-xs tracking-wide text-gray-500">
          &copy; {new Date().getFullYear()} Anmoldeep Singh. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
}
