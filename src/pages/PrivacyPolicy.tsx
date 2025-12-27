import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | FocusFruit';
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl">🍊</span>
            <span className="font-bold text-lg text-slate-900">
              Focus<span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Fruit</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last updated: December 27, 2025</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Overview</h2>
            <p className="text-slate-600 mb-4">
              FocusFruit is designed with privacy as a core principle. We believe your productivity data
              should stay on your device, under your control. This privacy policy explains how FocusFruit
              handles your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Data Collection</h2>
            <p className="text-slate-600 mb-4">
              <strong>FocusFruit does not collect, transmit, or store any personal data on external servers.</strong>
            </p>
            <p className="text-slate-600 mb-4">
              All your data, including timer settings, session history, and statistics, is stored locally
              on your device using Chrome's built-in storage API. This data never leaves your browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Chrome Extension Permissions</h2>
            <p className="text-slate-600 mb-4">
              FocusFruit requires certain browser permissions to function. Here's what each permission is used for:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>
                <strong>Storage:</strong> To save your timer settings, session history, and statistics locally on your device.
              </li>
              <li>
                <strong>Alarms:</strong> To run the timer accurately in the background, even when the popup is closed.
              </li>
              <li>
                <strong>Notifications:</strong> To alert you when a focus session or break ends.
              </li>
              <li>
                <strong>Tabs:</strong> To implement the optional website blocking feature during focus sessions.
              </li>
              <li>
                <strong>Idle:</strong> To detect inactivity and optionally pause or reset the timer.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Optional Permissions</h2>
            <p className="text-slate-600 mb-4">
              Some features require additional permissions that you can choose to grant:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>
                <strong>DeclarativeNetRequest:</strong> Required only if you enable website blocking.
                This allows FocusFruit to block distracting websites during focus sessions.
              </li>
              <li>
                <strong>WebNavigation:</strong> Used alongside website blocking to redirect you away from blocked sites.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Third-Party Services</h2>
            <p className="text-slate-600 mb-4">
              FocusFruit does not use any third-party analytics, tracking, or advertising services.
              We do not share your data with anyone.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Data Deletion</h2>
            <p className="text-slate-600 mb-4">
              Since all data is stored locally on your device, you can delete it at any time by:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Using the "Clear Data" option in FocusFruit settings</li>
              <li>Uninstalling the extension (this removes all associated data)</li>
              <li>Clearing your browser's extension data through Chrome settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Changes to This Policy</h2>
            <p className="text-slate-600 mb-4">
              We may update this privacy policy from time to time. Any changes will be posted on this page
              with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about this privacy policy or FocusFruit's privacy practices,
              please contact us at:
            </p>
            <p className="text-slate-600">
              <a
                href="mailto:hello@focusfruit.softdaddy-o.com"
                className="text-orange-500 hover:text-orange-600 underline"
              >
                hello@focusfruit.softdaddy-o.com
              </a>
            </p>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link
            to="/"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            &larr; Back to FocusFruit
          </Link>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
