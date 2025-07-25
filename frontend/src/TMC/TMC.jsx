import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-white overflow-scroll h-[89vh]">
      <div className="px-6 py-10 bg-white max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">📘 Terms & Conditions</h2>

        <div className="space-y-6 text-gray-700 text-base leading-relaxed">
          <p>
            By using LearnerCart, you agree to the following Terms & Conditions.
            Please read them carefully before continuing to use our platform.
          </p>

          <h3 className="text-xl font-semibold">1. Acceptance of Terms</h3>
          <p>
            Accessing or using our services constitutes acceptance of these
            terms. If you do not agree, you should discontinue use of the site
            immediately.
          </p>

          <h3 className="text-xl font-semibold">2. Use of Services</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>You must be at least 13 years old to use LearnerCart.</li>
            <li>You agree not to misuse or attempt to disrupt the platform.</li>
            <li>
              All course content is for educational purposes and should not be
              redistributed.
            </li>
          </ul>

          <h3 className="text-xl font-semibold">3. Payment & Refunds</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Prices are listed per course and subject to change.</li>
            <li>
              Refunds may be issued within 7 days of purchase, depending on
              course access level.
            </li>
            <li>Promotional discounts apply only within stated timeframes.</li>
          </ul>

          <h3 className="text-xl font-semibold">4. Intellectual Property</h3>
          <p>
            All materials on LearnerCart—including videos, illustrations, code,
            and design—remain the intellectual property of their respective
            creators and partners.
          </p>

          <h3 className="text-xl font-semibold">5. Account Management</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              You’re responsible for maintaining the confidentiality of your
              account.
            </li>
            <li>
              We reserve the right to suspend accounts that violate these terms.
            </li>
          </ul>

          <p>
            For any questions, reach out to us at{" "}
            <a
              href="mailto:internclubmern@gmail.com"
              className="text-blue-600 underline"
            >
              support@internclub.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
