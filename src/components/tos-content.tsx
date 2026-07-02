import React from "react";

export default function TosContent() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 space-y-8">

      {/* Intro */}
      <p className="text-gray-400">
        These Terms of Service (&quot;Terms&quot;) govern all bookings, services,
        rentals, and interactions with Altered Combat LLC (&quot;Altered
        Combat,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
        booking an event, renting equipment, or participating in any activity,
        you agree to be bound by these Terms.
      </p>

      {/* 1. Booking & Payment Terms */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          1. Booking &amp; Payment Terms
        </h2>
        <p className="text-gray-400">
          All bookings require full payment at the time of reservation.
        </p>
        <p className="text-gray-400">
          An event is not considered booked or reserved until:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Full payment has been received, and</li>
          <li>An official Altered Combat confirmation email has been issued</li>
        </ul>
        <p className="text-gray-400">
          Quotes, inquiries, or conversations do not hold or reserve dates.
        </p>
        <p className="text-gray-400">
          Altered Combat reserves the right to cancel or decline any booking
          prior to confirmation.
        </p>
      </div>

      {/* 2. Cancellation, Weather & Rescheduling Policy */}
      <div className="space-y-6">
        <h2 className="font-teko text-3xl font-bold text-white">
          2. Cancellation, Weather &amp; Rescheduling Policy
        </h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">Cancellation</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>
              <span className="text-white font-medium">
                More Than 14 Days Before Your Event:
              </span>{" "}
              You will receive a 100% refund.
            </li>
            <li>
              <span className="text-white font-medium">
                7–13 Days Before Your Event:
              </span>{" "}
              Refunds are not available. You will receive a 100% credit valid
              for 90 days.
            </li>
            <li>
              <span className="text-white font-medium">
                2–6 Days Before Your Event:
              </span>{" "}
              Refunds are not available. Credits may be issued at Altered
              Combat's discretion.
            </li>
            <li>
              <span className="text-white font-medium">Inside 48 Hours:</span>{" "}
              No refund or credit will be issued.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            No-Shows &amp; Access Issues
          </h3>
          <p className="text-gray-400">
            If we are unable to reach you, cannot access the event location,
            or required parking/unloading access is not available upon
            arrival, the event is considered a no-show.
          </p>
          <p className="text-gray-400">No refund or credit will be issued.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            Weather &amp; Safety
          </h3>
          <p className="text-gray-400">
            If unsafe weather conditions occur before setup begins, a 100%
            credit will be issued.
          </p>
          <p className="text-gray-400">
            Once setup has begun, the event is considered delivered—even if
            weather, site conditions, or venue restrictions require gameplay
            to be paused, modified, or ended early.
          </p>
          <p className="text-gray-400">
            No refunds or credits will be issued after setup begins.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">Rescheduling</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>
              <span className="text-white font-medium">
                More Than 14 Days Before Your Event:
              </span>{" "}
              First reschedule is free. Additional changes are $100 each.
            </li>
            <li>
              <span className="text-white font-medium">
                7–13 Days Before Your Event:
              </span>{" "}
              A 20% rescheduling fee applies.
            </li>
            <li>
              <span className="text-white font-medium">Inside 7 Days:</span>{" "}
              Rescheduling is not available.
            </li>
          </ul>
          <p className="text-gray-400">
            All credits are valid for 90 days from the original event date,
            are non-transferable, and have no cash value.
          </p>
        </div>
      </div>

      {/* 3. Event Timing & Delays */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          3. Event Timing &amp; Delays
        </h2>
        <p className="text-gray-400">
          Events will end at the scheduled time regardless of delays caused by:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Late arrivals</li>
          <li>Incomplete waivers</li>
          <li>Site access issues</li>
          <li>Customer or venue-related delays</li>
        </ul>
        <p className="text-gray-400">
          We recommend all participants arrive at least 15 minutes prior to
          the scheduled start time.
        </p>
      </div>

      {/* 4. Venue & Site Requirements */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          4. Venue &amp; Site Requirements
        </h2>
        <p className="text-gray-400">
          The customer is responsible for providing a safe and suitable event
          space.
        </p>
        <p className="text-gray-400">Minimum requirements include:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Adequate space for the selected experience</li>
          <li>Clean, dry, and unobstructed play area</li>
          <li>No mud, sand, loose debris, or hazardous terrain</li>
          <li>Outdoor locations must allow staking (where applicable)</li>
        </ul>
        <p className="text-gray-400">
          Altered Combat reserves the right to modify, relocate, or cancel
          gameplay if the environment is deemed unsafe or unsuitable.
        </p>
      </div>

      {/* 5. Access, Parking, Permits & Site Preparation Requirements */}
      <div className="space-y-6">
        <h2 className="font-teko text-3xl font-bold text-white">
          5. Access, Parking, Permits &amp; Site Preparation Requirements
        </h2>
        <p className="text-gray-400">
          The customer is responsible for ensuring that the event location is
          fully approved, accessible, and ready for setup prior to Altered
          Combat's arrival.
        </p>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            Permits &amp; Permissions
          </h3>
          <p className="text-gray-400">
            The customer is solely responsible for obtaining all required:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>Permits</li>
            <li>Approvals</li>
            <li>Venue permissions</li>
            <li>HOA or city authorizations</li>
          </ul>
          <p className="text-gray-400">
            If a venue requires the venue, city, or property owner to be
            listed as an Additional Insured on Altered Combat's
            Certificate of Insurance (COI), the customer must:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>Notify Altered Combat at least 7 business days in advance</li>
            <li>
              Provide all required documentation, including the correct legal
              name and address of the Additional Insured
            </li>
          </ul>
          <p className="text-gray-400">
            Failure to provide adequate notice may result in the inability to
            fulfill venue requirements. In such cases, the event will proceed
            under standard cancellation terms.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            Access &amp; Parking Requirements
          </h3>
          <p className="text-gray-400">Customers must ensure:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>
              Parking is available within a reasonable proximity to the event
              area
            </li>
            <li>
              The event site is located no more than a 5-minute walk from the
              nearest available parking
            </li>
            <li>
              A clear, safe, and unobstructed path exists between parking and
              the setup area
            </li>
          </ul>
          <p className="text-gray-400">
            Drive-on access is strongly preferred for efficient unloading and
            loading.
          </p>
          <p className="text-gray-400">
            If drive-on access is not available, the location must still meet
            all proximity and accessibility requirements.
          </p>
          <p className="text-gray-400">
            Delays caused by distance, restricted access, or unloading
            limitations do not extend event duration.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">
            Site Preparation Requirements
          </h3>
          <p className="text-gray-400">
            The customer must ensure the event area is fully prepared prior to
            arrival, including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>
              Irrigation systems are turned off for the entire duration of the
              event, including setup and breakdown
            </li>
            <li>The area is clean, dry, and free of hazards</li>
            <li>The surface is suitable for equipment setup and gameplay</li>
          </ul>
          <p className="text-gray-400">
            Failure to meet these requirements may result in:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>Delayed setup</li>
            <li>Modified gameplay</li>
            <li>Or cancellation of the event without refund</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400">Enforcement</h3>
          <p className="text-gray-400">
            Altered Combat reserves the right to refuse setup, modify
            gameplay, or terminate the event if site access, preparation, or
            conditions do not meet these requirements.
          </p>
        </div>
      </div>

      {/* 6. Participant Requirements & Conduct */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          6. Participant Requirements &amp; Conduct
        </h2>
        <p className="text-gray-400">All participants must:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Have a completed waiver on file prior to participation</li>
          <li>Follow all instructions from staff</li>
          <li>Use equipment safely and as intended</li>
        </ul>
        <p className="text-gray-400">Prohibited behavior includes:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Physical contact (pushing, shoving, grappling)</li>
          <li>Climbing on obstacles</li>
          <li>Misuse of equipment</li>
        </ul>
        <p className="text-gray-400">
          Altered Combat reserves the right to remove any participant or
          terminate gameplay for unsafe or non-compliant behavior without
          refund.
        </p>
      </div>

      {/* 7. Equipment Responsibility & Damage */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          7. Equipment Responsibility &amp; Damage
        </h2>
        <p className="text-gray-400">
          Customers are financially responsible for all equipment provided
          during an event or rental.
        </p>
        <p className="text-gray-400">Charges may apply for:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Lost or unreturned equipment</li>
          <li>Damage beyond normal wear and tear</li>
          <li>Misuse or unauthorized modification</li>
        </ul>
        <p className="text-gray-400">
          Repair or replacement costs will be charged to the payment method on
          file.
        </p>
      </div>

      {/* 8. Rentals (Drop-Off Experiences) */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          8. Rentals (Drop-Off Experiences)
        </h2>
        <p className="text-gray-400">For equipment rentals without staff:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>
            The customer assumes full responsibility for supervision, safety,
            and use of equipment
          </li>
          <li>Altered Combat does not supervise or control gameplay during rentals</li>
          <li>
            The customer is responsible for all participants and any
            resulting damages or injuries
          </li>
        </ul>
      </div>

      {/* 9. Travel, Fees & Additional Charges */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          9. Travel, Fees &amp; Additional Charges
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Travel includes a base service area; additional distance may incur mileage fees</li>
          <li>After-hours or early setup requests may incur additional charges</li>
          <li>Additional staffing or extended service time will be billed accordingly</li>
        </ul>
        <p className="text-gray-400">
          All applicable fees will be communicated prior to confirmation
          whenever possible.
        </p>
      </div>

      {/* 10. Right to Refuse or Terminate Service */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          10. Right to Refuse or Terminate Service
        </h2>
        <p className="text-gray-400">
          Altered Combat reserves the right to refuse, modify, or terminate
          service at any time due to:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Unsafe conditions</li>
          <li>Non-compliance with rules</li>
          <li>Inadequate venue conditions</li>
          <li>Threatening or inappropriate behavior</li>
        </ul>
        <p className="text-gray-400">
          No refunds will be issued if service is terminated for these
          reasons.
        </p>
      </div>

      {/* 11. Waivers & Assumption of Risk */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          11. Waivers &amp; Assumption of Risk
        </h2>
        <p className="text-gray-400">
          Participation in Altered Combat activities requires acceptance of a
          valid waiver.
        </p>
        <p className="text-gray-400">
          All participants (or their legal guardians) must complete a waiver
          prior to participation.
        </p>
        <p className="text-gray-400">By booking, you acknowledge that:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Participation involves inherent risks</li>
          <li>
            You are responsible for ensuring all participants have completed
            required waivers
          </li>
        </ul>
      </div>

      {/* 12. Limitation of Liability */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          12. Limitation of Liability
        </h2>
        <p className="text-gray-400">
          To the fullest extent permitted by law, Altered Combat is not liable
          for:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Injuries arising from participation</li>
          <li>Damage to property not caused by gross negligence</li>
          <li>Delays or interruptions caused by factors outside our control</li>
        </ul>
      </div>

      {/* 13. Indemnification */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          13. Indemnification
        </h2>
        <p className="text-gray-400">
          You agree to defend, indemnify, and hold harmless Altered Combat
          from any claims, damages, or liabilities arising out of:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Your event</li>
          <li>Your participants</li>
          <li>Your venue or site conditions</li>
          <li>Your breach of these Terms</li>
        </ul>
      </div>

      {/* 14. Force Majeure */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          14. Force Majeure
        </h2>
        <p className="text-gray-400">
          Altered Combat is not liable for failure or delay in performance due
          to events beyond our control, including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Severe weather</li>
          <li>Natural disasters</li>
          <li>Government restrictions</li>
          <li>Venue closures</li>
        </ul>
      </div>

      {/* 15. Governing Law */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          15. Governing Law
        </h2>
        <p className="text-gray-400">
          These Terms are governed by the laws of the State of Arizona.
        </p>
        <p className="text-gray-400">
          Any disputes shall be resolved in accordance with Arizona law.
        </p>
      </div>

      {/* 16. Agreement */}
      <div className="space-y-4">
        <h2 className="font-teko text-3xl font-bold text-white">
          16. Agreement
        </h2>
        <p className="text-gray-400">
          By booking an event or renting equipment, you acknowledge that you
          have read, understood, and agree to these Terms of Service.
        </p>
      </div>
    </div>
  );
}
