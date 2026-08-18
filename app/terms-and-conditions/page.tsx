import Image from "next/image";
import Header from "../header";
import Footer from "../footer";

export default function Terms() {
  return (
    <div>
      <Header />
      <div className="pageContent">
        <h2 className="text-4xl font-semibold mt-6">Terms and Conditions</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          The Brow Edit Studio — Last updated: 16/08/2026
        </p>
        <p className="mt-4">
          These Terms and Conditions (&quot;Terms&quot;) govern all bookings,
          treatments, and services provided by The Brow Edit Studio (&quot;we&quot;,
          &quot;us&quot;, &quot;our&quot;). By booking an appointment, whether
          online, by phone, or in person, you (&quot;client&quot;,
          &quot;you&quot;) agree to be bound by these Terms.
        </p>

        <div className="mt-8">
          <h3 className="text-3xl">1. Bookings</h3>
          <p className="mt-2">
            1.1 All appointments can be booked online, by phone, or in
            person.
          </p>
          <p className="mt-2">
            1.2 A valid contact number and email address are required to
            secure a booking.
          </p>
          <p className="mt-2">
            1.3 We may require a deposit or card details to confirm certain
            bookings. This will be communicated to you at the time of
            booking.
          </p>
          <p className="mt-2">
            1.4 Please arrive on time. Late arrivals may result in a
            shortened treatment time to avoid delaying other clients, and
            full service price will still apply. Arrivals more than 15
            minutes late may be treated as a no-show at our discretion.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">2. Cancellations & No-Shows</h3>
          <p className="mt-2">
            2.1 We understand that plans change, and we ask for as much
            notice as possible if you need to cancel or reschedule.
          </p>
          <p className="mt-2">
            2.2 Cancellations made within 24 hours of your scheduled
            appointment will result in a 50% charge of the scheduled
            service.
          </p>
          <p className="mt-2">
            2.3 Missed appointments (no-shows) will be charged 100% of the
            scheduled service.
          </p>
          <p className="mt-2">
            2.4 By making an online booking, you agree to these cancellation
            terms.
          </p>
          <p className="mt-2">
            2.5 Cancellation charges may be deducted from a stored card,
            deposit, or invoiced separately, and must be settled before any
            future appointment is confirmed.
          </p>
          <p className="mt-2">
            2.6 Repeated late cancellations or no-shows may result in a
            requirement to pre-pay for future bookings, or refusal of future
            service.
          </p>
          <p className="mt-2">
            2.7 We reserve the right to cancel or reschedule an appointment
            due to staff illness, emergency, or circumstances beyond our
            control. In such cases, you will be offered the next available
            appointment or a full refund of any deposit paid.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">3. Patch Tests</h3>
          <p className="mt-2">
            3.1 A patch test is reccommended at least 24-48 hours prior to any
            tinting, lash lift, or lamination service for new clients, or
            for returning clients who have not had the service in the last
            6-12 months (per product manufacturer guidelines).
          </p>
          <p className="mt-2">
            3.2 We reserve the right to refuse treatment if a patch test has
            not been completed, or if any signs of sensitivity or reaction
            are present.
          </p>
          <p className="mt-2">
            3.3 It is the client&apos;s responsibility to disclose any known
            allergies, sensitivities, medical conditions, or medications
            that may affect the treatment.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">
            4. Health, Eligibility & Client Responsibility
          </h3>
          <p className="mt-2">
            4.1 Certain treatments may not be suitable for clients who are
            pregnant, breastfeeding, or have specific skin/eye conditions,
            allergies, or are using certain medications (e.g.
            Accutane/retinoids). It is the client&apos;s responsibility to
            disclose this information accurately prior to treatment.
          </p>
          <p className="mt-2">
            4.2 We reserve the right to decline or modify a treatment if we
            believe it is not safe or suitable to proceed.
          </p>
          <p className="mt-2">
            4.3 Clients must disclose any previous adverse reactions to
            lash, brow, or tinting products.
          </p>
          <p className="mt-2">
            4.4 Results vary from person to person depending on natural
            lash/brow condition, hair growth cycles, and aftercare. We
            cannot guarantee identical results between clients or between
            appointments.
          </p>
          <p className="mt-2">
            4.5 Clients are responsible for following provided aftercare
            instructions. We are not liable for reduced treatment longevity
            or reactions resulting from failure to follow aftercare advice.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">5. Minors</h3>
          <p className="mt-2">
            5.1 Clients under the age of 18 must have written parental or
            guardian consent prior to treatment, and a parent or guardian
            must be present for the consultation and, where applicable, the
            treatment itself.
          </p>
          <p className="mt-2">
            5.2 Certain services may not be available to clients under a
            minimum age at our discretion.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">6. Pricing & Payment</h3>
          <p className="mt-2">
            6.1 Prices are as listed at the time of booking and are subject
            to change without notice. The price applicable is the one
            confirmed at the time of your booking or displayed in-clinic on
            the day.
          </p>
          <p className="mt-2">
            6.2 Payment is due in full at the time of service unless
            otherwise agreed (e.g. package or course payments).
          </p>
          <p className="mt-2">
            6.3 We accept cards (Visa, Mastercard, AMEX), and cash.
            Additional surcharges may apply to certain payment types.
          </p>
          <p className="mt-2">
            6.4 Prices for add-ons or upgrades requested during the
            appointment will be charged in addition to the base service
            price.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">7. Gift Vouchers & Packages</h3>
          <p className="mt-2">
            7.1 Gift vouchers are valid for 12 months from the date of
            purchase unless otherwise stated, and cannot be redeemed for
            cash.
          </p>
          <p className="mt-2">
            7.2 Prepaid packages/courses are non-transferable between
            clients unless approved by management, and are non-refundable
            except as required by law.
          </p>
          <p className="mt-2">
            7.3 Unused sessions in a package do not roll over or extend
            beyond any stated expiry period.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">8. Refunds & Redos</h3>
          <p className="mt-2">
            8.1 Due to the personal nature of our services, we do not offer
            refunds for change of mind once a treatment has been performed.
          </p>
          <p className="mt-2">
            8.2 If you are unhappy with the result of your treatment, please
            contact us within 48-72 hours so we can assess and, where
            appropriate, offer a complimentary adjustment, redo, or partial
            refund at our discretion.
          </p>
          <p className="mt-2">
            8.3 Nothing in these Terms excludes, restricts, or modifies any
            consumer guarantee, right, or remedy you have under the
            Australian Consumer Law (ACL), including the guarantee that
            services will be provided with due care and skill and be fit
            for purpose. Where a service fails to meet a consumer guarantee,
            you are entitled to a remedy under the ACL regardless of clause
            8.1.
          </p>
          <p className="mt-2">
            8.4 Redos or remedies will not be offered where the outcome has
            been affected by the client&apos;s failure to follow aftercare
            instructions, an undisclosed allergy/condition, or normal
            variation in natural lash/brow growth — provided this does not
            conflict with your rights under the ACL.
          </p>
          <p className="mt-2">
            8.5 Product retail purchases may be returned unopened and unused
            within 14 days with proof of purchase, in addition to any
            rights you have under the ACL.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">9. Hygiene & Safety</h3>
          <p className="mt-2">
            9.1 We follow strict hygiene, sterilisation, and
            infection-control procedures in line with relevant health
            regulations.
          </p>
          <p className="mt-2">
            9.2 Please inform us prior to your appointment if you are unwell
            (e.g. cold sores, conjunctivitis, or any contagious condition)
            so we can reschedule to protect your health and the health of
            other clients and staff.
          </p>
          <p className="mt-2">
            9.3 We reserve the right to refuse or discontinue treatment
            where we believe a health or hygiene risk is present.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">10. Photography & Marketing</h3>
          <p className="mt-2">
            10.1 We may take before/after photos of treatments for
            training, insurance, and portfolio purposes.
          </p>
          <p className="mt-2">
            10.2 These images will only be used publicly (social media,
            website, advertising) with your explicit consent. You may
            decline or withdraw consent at any time by notifying us.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">11. Personal Information & Privacy</h3>
          <p className="mt-2">
            11.1 Personal information collected (name, contact details,
            health information relevant to treatment) is collected and
            handled in accordance with the Privacy Act 1988 (Cth) and the
            Australian Privacy Principles (APPs), and is used solely for
            the purpose of providing safe and effective services. It will
            not be shared with third parties except as required by law or
            as reasonably necessary to provide the service (e.g. booking
            software providers).
          </p>
          <p className="mt-2">
            11.2 By providing your details, you consent to us contacting you
            regarding appointment reminders, confirmations, and — where you
            have opted in — promotional communications in accordance with
            the Spam Act 2003 (Cth). You may opt out of marketing
            communications at any time.
          </p>
          <p className="mt-2">
            11.3 Health information (e.g. allergies, skin conditions,
            medications) is treated as sensitive information under the APPs
            and is only collected with your consent and only where relevant
            to providing the treatment safely.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">12. Liability</h3>
          <p className="mt-2">
            12.1 While every care is taken, to the maximum extent permitted
            by law we do not accept liability for any adverse reaction,
            injury, or damage arising from a treatment where the client has
            failed to disclose relevant health information, failed to
            follow aftercare, or where the reaction was not reasonably
            foreseeable.
          </p>
          <p className="mt-2">
            12.2 We recommend a patch test and full disclosure of health
            history to minimise risk of adverse reaction.
          </p>
          <p className="mt-2">
            12.3 Nothing in these Terms excludes, restricts, or modifies any
            guarantee, right, or remedy conferred on you by the Australian
            Consumer Law or any other applicable law that cannot lawfully
            be excluded. Any limitation of liability in these Terms applies
            only to the extent permitted by law.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">13. Conduct</h3>
          <p className="mt-2">
            13.1 We reserve the right to refuse service to any client
            displaying abusive, threatening, or inappropriate behaviour
            towards staff or other clients.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">14. Governing Law</h3>
          <p className="mt-2">
            14.1 These Terms are governed by the laws of New South Wales, Australia, and the laws of the
            Commonwealth of Australia. Any disputes will be subject to the
            non-exclusive jurisdiction of the courts of that
            state/territory.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">15. Changes to These Terms</h3>
          <p className="mt-2">
            15.1 We may update these Terms from time to time. The current
            version will always be available on our website / in clinic,
            and continued use of our services constitutes acceptance of the
            updated Terms.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl">16. Contact</h3>
          <p className="mt-2">
            For any questions regarding these Terms, please contact us by phone, email or in person.
          </p>
        </div>
        <br/>

      </div>
      <Footer></Footer>
    </div>
  );
}
