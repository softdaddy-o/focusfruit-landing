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
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Data Collection and Storage</h2>
            <p className="text-slate-600 mb-4">
              By default, all your data including timer settings, session history, and statistics is stored locally
              on your device using Chrome's built-in storage API.
            </p>
            <p className="text-slate-600 mb-4">
              <strong>Optional Data Sync:</strong> If you choose to enable data syncing in the future (when available),
              your data may be transmitted to and stored on our secure servers to enable cross-device synchronization.
              This feature is entirely optional and requires your explicit consent before activation.
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
                <strong>Idle:</strong> To detect inactivity and optionally pause or reset the timer.
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
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Your Rights</h2>
            <p className="text-slate-600 mb-4">
              You have full control over your data. Since FocusFruit stores data locally on your device, you can:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Access:</strong> View all your data directly within the extension's statistics and settings</li>
              <li><strong>Delete:</strong> Remove all data using the "Clear Data" option in settings, or by uninstalling the extension</li>
              <li><strong>Export:</strong> Your data remains on your device and is not transmitted externally</li>
            </ul>
            <p className="text-slate-600 mt-4">
              If you enable optional cloud sync features in the future, you may request access to, correction of,
              or deletion of your synced data by contacting us at the email below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Data Retention</h2>
            <p className="text-slate-600 mb-4">
              Local data is retained on your device until you choose to delete it. We do not have access to
              your locally stored data. If cloud sync is enabled in the future, synced data will be retained
              only as long as your account is active, and will be deleted within 30 days of account deletion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Children's Privacy</h2>
            <p className="text-slate-600 mb-4">
              FocusFruit is not directed at children under 13 years of age. We do not knowingly collect
              personal information from children under 13. If you believe a child has provided us with
              personal information, please contact us so we can take appropriate action.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">International Users</h2>
            <p className="text-slate-600 mb-4">
              FocusFruit is operated from South Korea. If you are accessing the extension from outside
              South Korea and enable optional cloud sync features, your data may be transferred to and
              processed in South Korea or other countries where our servers are located.
            </p>
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
                href="mailto:softdaddy.official@gmail.com"
                className="text-orange-500 hover:text-orange-600 underline"
              >
                softdaddy.official@gmail.com
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
