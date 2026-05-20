export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white text-center p-6 mt-auto">
        <p>Ronney da Rocha Vieira</p>
        <p>ronneyrv@gmail.com</p>
      <div className="max-w-6xl mx-auto text-center">
        &copy; {new Date().getFullYear()} Ronney Rocha. All rights reserved.
      </div>
    </footer>
  );
}