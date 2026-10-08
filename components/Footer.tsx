export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-mute tracking-wide">
        <span>&copy; {new Date().getFullYear()} Jaideep Saindane</span>
        <span>Built with care, in India.</span>
      </div>
    </footer>
  );
}
