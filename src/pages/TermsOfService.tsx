import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service | FocusFruit';
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
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
            <p className="text-slate-500">Last updated: December 27, 2025</p>
          </div>

          {/* Content card */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 sm:p-12">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">1</span>
                  Acceptance of Terms
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  By installing and using FocusFruit ("the Extension"), you agree to be bound by these Terms of Service.
                  If you do not agree to these terms, please do not use the Extension.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">2</span>
                  Description of Service
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  FocusFruit is a Chrome browser extension that provides:
                </p>
                <ul className="space-y-3">
                  {[
                    'A Pomodoro timer for productivity management',
                    'Session tracking and statistics',
                    'Customizable timer durations and notifications',
                    'Multiple fruit themes for personalization',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">3</span>
                  License and Pricing
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  FocusFruit is proprietary software. The Extension is free to use with basic features.
                  Premium features may require a paid subscription. All rights are reserved by FocusFruit.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  You may not copy, modify, distribute, sell, or lease any part of the Extension or its source code
                  without explicit written permission from FocusFruit.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">4</span>
                  User Responsibilities
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  When using FocusFruit, you agree to:
                </p>
                <ul className="space-y-3">
                  {[
                    'Use the Extension in compliance with all applicable laws',
                    'Not attempt to reverse engineer, modify, or exploit the Extension for malicious purposes',
                    'Maintain the security of your account credentials if using premium features',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">5</span>
                  Disclaimer of Warranties
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  FocusFruit is provided "as is" without warranty of any kind, express or implied. We do not guarantee:
                </p>
                <ul className="space-y-3">
                  {[
                    'The Extension will be error-free or uninterrupted',
                    'The Extension will meet your specific requirements',
                    'Any particular level of productivity improvement',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">6</span>
                  Limitation of Liability
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  To the maximum extent permitted by law, FocusFruit and its developers shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages arising from your use of the Extension.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">7</span>
                  Premium Subscriptions
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Premium features are available through paid subscriptions. By subscribing, you agree to:
                </p>
                <ul className="space-y-3 mb-4">
                  {[
                    'Pay the applicable subscription fees as displayed at the time of purchase',
                    'Automatic renewal unless cancelled before the renewal date',
                    'No refunds for partial subscription periods, except as required by law',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Subscriptions are processed through third-party payment providers (such as Polar).
                  Please review their terms and refund policies as applicable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">8</span>
                  Termination
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  You may stop using FocusFruit at any time by uninstalling the Extension. We reserve the right
                  to suspend or terminate access to premium features if you violate these terms or fail to pay
                  subscription fees. Upon termination, your locally stored data remains on your device.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">9</span>
                  Age Requirements
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  You must be at least 13 years old to use FocusFruit. If you are under 18, you represent that
                  you have your parent or guardian's permission to use the Extension.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">10</span>
                  Governing Law
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  These terms are governed by and construed in accordance with the laws of South Korea,
                  without regard to its conflict of law provisions. Any disputes arising from these terms
                  shall be resolved in the courts of South Korea.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">11</span>
                  Changes to Terms
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be posted on this page with
                  an updated revision date. Continued use of the Extension after changes constitutes acceptance of
                  the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">12</span>
                  Contact
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  For questions about these terms, please contact us at:
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

export default TermsOfService;
