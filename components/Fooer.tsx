export default function Footer() {
  return (
    <footer className="text-center text-gray-500 pb-8">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Anmol. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Resend, Framer Motion, Vercel hosting.
      </p>
    </footer>
  );
}
