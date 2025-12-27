import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | FocusFruit';
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center px-6">
        <span className="text-6xl mb-6 block">🍊</span>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-slate-600 mb-8 max-w-md">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
