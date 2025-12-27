import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service | FocusFruit';
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
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-slate-500 mb-8">Last updated: December 27, 2025</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 mb-4">
              By installing and using FocusFruit ("the Extension"), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use the Extension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Description of Service</h2>
            <p className="text-slate-600 mb-4">
              FocusFruit is a Chrome browser extension that provides:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>A Pomodoro timer for productivity management</li>
              <li>Optional website blocking during focus sessions</li>
              <li>Session tracking and statistics</li>
              <li>Customizable timer durations and notifications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">3. License</h2>
            <p className="text-slate-600 mb-4">
              FocusFruit is provided under the MIT License. You are free to use the Extension for personal
              and commercial purposes. The source code is available on GitHub.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">4. User Responsibilities</h2>
            <p className="text-slate-600 mb-4">
              When using FocusFruit, you agree to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Use the Extension in compliance with all applicable laws</li>
              <li>Not attempt to reverse engineer, modify, or exploit the Extension for malicious purposes</li>
              <li>Accept responsibility for any websites you choose to block</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Website Blocking Feature</h2>
            <p className="text-slate-600 mb-4">
              The website blocking feature is optional and user-controlled. You are solely responsible for:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Choosing which websites to block</li>
              <li>Understanding that blocked websites will be inaccessible during focus sessions</li>
              <li>Any consequences of blocking specific websites</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-slate-600 mb-4">
              FocusFruit is provided "as is" without warranty of any kind, express or implied. We do not guarantee:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>The Extension will be error-free or uninterrupted</li>
              <li>The Extension will meet your specific requirements</li>
              <li>Any particular level of productivity improvement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-600 mb-4">
              To the maximum extent permitted by law, FocusFruit and its developers shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your use of the Extension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Changes to Terms</h2>
            <p className="text-slate-600 mb-4">
              We reserve the right to modify these terms at any time. Changes will be posted on this page with
              an updated revision date. Continued use of the Extension after changes constitutes acceptance of
              the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">9. Contact</h2>
            <p className="text-slate-600 mb-4">
              For questions about these terms, please contact us at:
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

export default TermsOfService;
