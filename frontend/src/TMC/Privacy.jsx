import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className='bg-white overflow-scroll h-[89vh]'>
        <div className=" px-6 py-10 bg-white max-w-4xl mx-auto  h-[89vh] w-[100vw]  ">
      <h2 className="text-3xl font-bold mb-6">🔐 Privacy Policy</h2>

      <div className="space-y-6 text-gray-700 text-base leading-relaxed">
        <p>
          At LearnerCart, we value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
        </p>

        <h3 className="text-xl font-semibold">1. Information We Collect</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Your name, email, and profile details</li>
          <li>Course preferences and enrollments</li>
          <li>Device and browser data for optimization</li>
        </ul>

        <h3 className="text-xl font-semibold">2. How We Use Your Information</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>To personalize your learning experience</li>
          <li>To send updates and course recommendations</li>
          <li>To improve platform performance and user support</li>
        </ul>

        <h3 className="text-xl font-semibold">3. Data Sharing and Protection</h3>
        <p>
          We do not sell or rent your data. Information may be shared with trusted partners for hosting and analytics. Security measures are in place to prevent unauthorized access.
        </p>

        <h3 className="text-xl font-semibold">4. Your Choices</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>You can update your profile or delete your account anytime</li>
          <li>Manage email preferences from your dashboard</li>
        </ul>

        <p>
          If you have any questions, feel free to contact us at <a href="mailto:internclubmern@gmail.com" className="text-blue-600 underline">privacy@internclub.com</a>.
        </p>
      </div>
    </div>
    </section>
  );
};

export default PrivacyPolicy;
