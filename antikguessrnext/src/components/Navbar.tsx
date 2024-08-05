import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-amber-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-amber-100 text-4xl font-bold font-serif">
          Antique Guessr
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/play" className="bg-amber-600 text-amber-100 px-4 py-2 rounded-lg hover:bg-amber-500 transition duration-300 font-medium">
            Play Now
          </Link>
          <Link href="/leaderboard" className="bg-amber-700 text-amber-100 px-4 py-2 rounded-lg hover:bg-amber-600 transition duration-300 font-medium">
            Leaderboard
          </Link>
          <Link href="/profile" className="bg-amber-700 text-amber-100 px-4 py-2 rounded-lg hover:bg-amber-600 transition duration-300 font-medium">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;