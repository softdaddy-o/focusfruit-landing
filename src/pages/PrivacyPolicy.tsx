import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | FocusFruit';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-slate-50">
      <Header />

      {/* Content */}
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          {/* Page header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full text-sm font-medium text-orange-700 mb-4">
              <span>Legal</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500">Last updated: December 27, 2025</p>
          </div>

          {/* Content card */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 sm:p-12">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">1</span>
                  Overview
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  FocusFruit is designed with privacy as a core principle. We believe your productivity data
                  should stay on your device, under your control. This privacy policy explains how FocusFruit
                  handles your information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">2</span>
                  Data Collection and Storage
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  By default, all your data including timer settings, session history, and statistics is stored locally
                  on your device using Chrome's built-in storage API.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong className="text-slate-900">Optional Data Sync:</strong> If you choose to enable data syncing in the future (when available),
                  your data may be transmitted to and stored on our secure servers to enable cross-device synchronization.
                  This feature is entirely optional and requires your explicit consent before activation.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">3</span>
                  Chrome Extension Permissions
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  FocusFruit requires certain browser permissions to function. Here's what each permission is used for:
                </p>
                <ul className="space-y-3">
                  {[
                    { name: 'Storage', desc: 'To save your timer settings, session history, and statistics locally on your device.' },
                    { name: 'Alarms', desc: 'To run the timer accurately in the background, even when the popup is closed.' },
                    { name: 'Notifications', desc: 'To alert you when a focus session or break ends.' },
                    { name: 'Idle', desc: 'To detect inactivity and optionally pause or reset the timer.' },
                  ].map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                      <span className="text-slate-600">
                        <strong className="text-slate-900">{item.name}:</strong> {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">4</span>
                  Third-Party Services
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  FocusFruit does not use any third-party analytics, tracking, or advertising services.
                  We do not share your data with anyone.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">5</span>
                  Your Rights
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  You have full control over your data. Since FocusFruit stores data locally on your device, you can:
                </p>
                <ul className="space-y-3 mb-4">
                  {[
                    { name: 'Access', desc: 'View all your data directly within the extension\'s statistics and settings' },
                    { name: 'Delete', desc: 'Remove all data using the "Clear Data" option in settings, or by uninstalling the extension' },
                    { name: 'Export', desc: 'Your data remains on your device and is not transmitted externally' },
                  ].map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                      <span className="text-slate-600">
                        <strong className="text-slate-900">{item.name}:</strong> {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  If you enable optional cloud sync features in the future, you may request access to, correction of,
                  or deletion of your synced data by contacting us at the email below.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">6</span>
                  Data Retention
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Local data is retained on your device until you choose to delete it. We do not have access to
                  your locally stored data. If cloud sync is enabled in the future, synced data will be retained
                  only as long as your account is active, and will be deleted within 30 days of account deletion.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">7</span>
                  Children's Privacy
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  FocusFruit is not directed at children under 13 years of age. We do not knowingly collect
                  personal information from children under 13. If you believe a child has provided us with
                  personal information, please contact us so we can take appropriate action.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">8</span>
                  International Users
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  FocusFruit is operated from South Korea. If you are accessing the extension from outside
                  South Korea and enable optional cloud sync features, your data may be transferred to and
                  processed in South Korea or other countries where our servers are located.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">9</span>
                  Changes to This Policy
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We may update this privacy policy from time to time. Any changes will be posted on this page
                  with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">10</span>
                  Contact Us
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you have any questions about this privacy policy or FocusFruit's privacy practices,
                  please contact us at:
                </p>
                <a
                  href="mailto:softdaddy.official@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-lg text-orange-600 hover:bg-orange-100 transition-colors font-medium"
                >
                  softdaddy.official@gmail.com
                </a>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
