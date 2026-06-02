import React from "react";

export default function PrivacyContent2() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 space-y-12">

      {/* 4. SMS Opt-In, Opt-Out, and Support */}
      <div className="space-y-6">
        <h2 className="font-teko text-3xl font-bold text-white">
          4. SMS Opt-In, Opt-Out, and Support
        </h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            4.1 Opt-In Message
          </h3>
          <p className="text-gray-400 italic">
            &quot;You have successfully subscribed to messages from Altered
            Combat. Message frequency may vary. Msg &amp; Data Rates may apply.
            Reply HELP for help. Reply STOP to unsubscribe.&quot;
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            4.2 Support Message
          </h3>
          <p className="text-gray-400 italic">
            &quot;For assistance, contact Altered Combat at{" "}
            <a
              href="tel:623-476-4906"
              className="text-cyan-400 hover:text-cyan-300 not-italic"
            >
              (623) 476-4906
            </a>{" "}
            or email us at{" "}
            <a
              href="mailto:info@alteredcombat.com"
              className="text-cyan-400 hover:text-cyan-300 not-italic"
            >
              info@alteredcombat.com
            </a>
            . Reply STOP to unsubscribe.&quot;
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            4.3 Opt-Out Confirmation
          </h3>
          <p className="text-gray-400 italic">
            &quot;You have been unsubscribed from Altered Combat messages. Reply
            START to re-subscribe.&quot;
          </p>
        </div>
      </div>

      {/* 5. Your Rights */}
      <div className="space-y-6">
        <h2 className="font-teko text-3xl font-bold text-white">
          5. Your Rights
        </h2>
        <p className="text-gray-400">
          Depending on your location (including GDPR and CCPA jurisdictions),
          you may have rights such as:
        </p>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            5.1 Access &amp; Portability
          </h3>
          <p className="text-gray-400">
            Request a copy of the personal data we hold about you.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            5.2 Correction
          </h3>
          <p className="text-gray-400">
            Request corrections to inaccurate or incomplete information.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            5.3 Deletion (Right to Be Forgotten)
          </h3>
          <p className="text-gray-400">
            Request deletion of your information, subject to legal and
            operational requirements.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            5.4 Opt-Out of Marketing
          </h3>
          <p className="text-gray-400">
            You may opt out of SMS or email marketing at any time.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            5.5 Cookies &amp; Tracking
          </h3>
          <p className="text-gray-400">
            You may disable cookies through your browser settings.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            5.6 CCPA Rights (California Residents)
          </h3>
          <p className="text-gray-400">You have the right to:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>Know what data we collect</li>
            <li>Understand how it is used</li>
            <li>Request deletion</li>
            <li>Opt out of data sharing for advertising purposes</li>
          </ul>
          <p className="text-gray-400">
            We do not sell personal information.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            5.7 GDPR Rights (EU/UK Users)
          </h3>
          <p className="text-gray-400">You have the right to:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>Access</li>
            <li>Rectify</li>
            <li>Erase</li>
            <li>Restrict processing</li>
            <li>Object to processing</li>
            <li>Data portability</li>
          </ul>
          <p className="text-gray-400">
            To exercise any rights, see Section 8.
          </p>
        </div>
      </div>

      {/* 6. Data Security */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          6. Data Security
        </h2>
        <p className="text-gray-400">
          We use reasonable and industry-standard security practices to protect
          your information, including encryption, access controls, and secure
          hosting.
        </p>
        <p className="text-gray-400">
          However, no method of transmission over the Internet is 100% secure.
        </p>
      </div>

      {/* 7. Children's Privacy */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          7. Children&apos;s Privacy
        </h2>
        <p className="text-gray-400">
          Our services are intended for families and children participating in
          events, but our website and booking system are not intended for
          children under 13 to use independently.
        </p>
        <p className="text-gray-400">
          A parent or legal guardian must complete any online forms.
        </p>
      </div>

      {/* 8. Contact Information */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          8. Contact Information
        </h2>
        <p className="text-gray-400">
          To exercise privacy rights, ask questions, or request changes, contact
          us:
        </p>
        <p className="text-gray-400">
          <span className="text-white font-medium">Altered Combat</span>
          <br />
          📞{" "}
          <a
            href="tel:623-476-4906"
            className="text-cyan-400 hover:text-cyan-300"
          >
            (623) 476-4906
          </a>
          <br />
          📧{" "}
          <a
            href="mailto:info@alteredcombat.com"
            className="text-cyan-400 hover:text-cyan-300"
          >
            info@alteredcombat.com
          </a>
          <br />
          📍 Buckeye, Arizona
        </p>
      </div>
    </div>
  );
}
