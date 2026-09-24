import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <div className="flex items-center">
        <Image
          src="/assets/logo.png"
          alt="FitLog Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h2 className="text-2xl font-bold">
          FIT<span className="text-lime-400">LOG</span>
        </h2>
      </div>

      <nav>
        <p className="text-sm">© 2026 FitLog — Workout Library.</p>
      </nav>
    </footer>
  );
};

export default Footer;
