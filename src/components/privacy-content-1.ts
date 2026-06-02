import React from "react";

export default function PrivacyContent() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 space-y-12">

      {/* Intro */}
      <p className="text-gray-400">
        This Privacy Policy describes how Altered Combat LLC, and all associated
        brands, services, and websites (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) collect, use, and protect your information. By using our
        websites, booking systems, or services, you agree to the practices
        described in this Policy.
      </p>

      {/* 1. Information We Collect */}
      <div className="space-y-6">
        <h2 className="font-teko text-3xl font-bold text-white">
          1. Information We Collect
        </h2>
        <p className="text-gray-400">
          We collect the following types of information:
        </p>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            1.1 Personal Information
          </h3>
          <p className="text-gray-400">
            Provided voluntarily through forms, SMS, booking systems, email, or
            event interactions:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing address or event address</li>
            <li>
              Event details such as date, location, and type of service requested
            </li>
            <li>Messages or inquiries submitted to us</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            1.2 Payment Information
          </h3>
          <p className="text-gray-400">
            Payments may be processed through third-party platforms (e.g.,
            Stripe, Square, Wix Payments, PayPal).
          </p>
          <p className="text-gray-400">
            We do not store or have access to full credit card numbers, security
            codes, or banking details.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            1.3 Usage Data &amp; Analytics
          </h3>
          <p className="text-gray-400">
            Through tools such as Google Analytics and Meta (Facebook/Instagram)
            Pixel, this may include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>Pages viewed</li>
            <li>Device and browser type</li>
            <li>IP address</li>
            <li>Time on site</li>
            <li>Referring websites</li>
            <li>General geographic location</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            1.4 Cookies &amp; Tracking Technologies
          </h3>
          <p className="text-gray-400">We use:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>Essential cookies</li>
            <li>Functional cookies</li>
            <li>Analytics cookies</li>
            <li>Advertising/retargeting cookies (Meta &amp; Google)</li>
          </ul>
          <p className="text-gray-400">
            You may control cookie permissions through your browser.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            1.5 SMS &amp; Email Communications
          </h3>
          <p className="text-gray-400">If you opt in:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>
              We may send booking updates, promotions, reminders, and
              service-related messages.
            </li>
            <li>Message frequency may vary.</li>
            <li>Message and data rates may apply.</li>
          </ul>
        </div>
      </div>

      {/* 2. How We Use Your Information */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-400">We use collected information to:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>Provide and deliver event services</li>
          <li>Process bookings and payments</li>
          <li>Respond to inquiries</li>
          <li>
            Send service updates, reminders, and event instructions (including
            waivers)
          </li>
          <li>Improve website performance and user experience</li>
          <li>Run advertising campaigns and measure traffic</li>
          <li>Provide customer support</li>
          <li>
            Ensure safety, security, and compliance with legal requirements
          </li>
        </ul>
      </div>

      {/* 3. How We Share Your Information */}
      <div className="space-y-6">
        <h2 className="font-teko text-3xl font-bold text-white">
          3. How We Share Your Information
        </h2>
        <p className="text-gray-400">
          We do not sell or share your personal data to third parties for the
          purpose of marketing. We only share information with:
        </p>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            3.1 Trusted Service Providers
          </h3>
          <p className="text-gray-400">Such as:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>
              <span className="text-white font-medium">
                Payment Processors:
              </span>{" "}
              Stripe, Square, Wix Payments, PayPal
            </li>
            <li>
              <span className="text-white font-medium">
                Booking &amp; Scheduling Platforms:
              </span>{" "}
              Wix / POS system
            </li>
            <li>
              <span className="text-white font-medium">
                Email or SMS Providers:
              </span>{" "}
              Nextiva, RingCentral, Mailchimp, Wix Email
            </li>
            <li>
              <span className="text-white font-medium">
                Analytics &amp; Advertising Providers:
              </span>{" "}
              Google, Meta
            </li>
          </ul>
          <p className="text-gray-400">
            These partners may collect or process data as part of providing
            their services.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            3.2 Legal Compliance
          </h3>
          <p className="text-gray-400">
            We may disclose data when required to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>Comply with law</li>
            <li>Respond to subpoenas or legal requests</li>
            <li>
              Protect the rights, safety, and property of our customers and
              business
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
