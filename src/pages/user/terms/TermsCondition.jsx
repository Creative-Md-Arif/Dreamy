/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";

const TermsCondition = () => {
  return (
    <section className="bg-slate-200 w-screen h-full">
      <div className="container">
        <div className="pt-5">
          <h1 className="text-black text-4xl font-headingFontTwo">
            Terms and Conditions
          </h1>
          <h3 className=" font-titleFont text-2xl pt-6 text-black">
            <span>1.</span> Introduction
          </h3>
          <ol className="font-sens text-xl text-black flex flex-col gap-5 pt-6">
            <li>
              Welcome to [Your Website Name]! These Terms and Conditions
              ("Terms") govern your use of our website located at [Your Website
              URL] (together or individually "Service") operated by [Your
              Company Name].
            </li>
            <li>
              Our Privacy Policy also governs your use of our Service and
              explains how we collect, safeguard, and disclose information that
              results from your use of our web pages. Please read it here:
              [Privacy Policy URL].
            </li>
            <li>
              Your agreement with us includes these Terms and our Privacy Policy
              ("Agreements"). You acknowledge that you have read and understood
              Agreements, and agree to be bound by them.
            </li>
            <li>
              If you do not agree with (or cannot comply with) Agreements, then
              you may not use the Service, but please let us know by emailing at
              [Your Support Email] so we can try to find a solution. These Terms
              apply to all visitors, users, and others who wish to access or use
              Service.
            </li>
          </ol>
        </div>
        <div className="pt-5">
          <h3 className=" font-titleFont text-2xl pt-6 text-black">
            <span>2.</span> Communications
          </h3>
          <ol className="font-sens text-xl text-black flex flex-col gap-5 pt-6">
            <li>
              By using our Service, you agree to subscribe to newsletters,
              marketing or promotional materials, and other information we may
              send. However, you may opt out of receiving any, or all, of these
              communications from us by following the unsubscribe link or by
              emailing at [Your Support Email].
            </li>
          </ol>
        </div>
        <div className="pt-5">
          <h3 className=" font-titleFont text-2xl pt-6 text-black">
            <span>3.</span> Purchases
          </h3>
          <ol className="font-sens text-xl text-black flex flex-col gap-5 pt-6">
            <li>
              If you wish to purchase any product or service made available
              through Service ("Purchase"), you may be asked to supply certain
              information relevant to your Purchase including, without
              limitation, your credit card number, the expiration date of your
              credit card, your billing address, and your shipping information.
            </li>
            <li>
              You represent and warrant that: (a) you have the legal right to
              use any credit card(s) or other payment method(s) in connection
              with any Purchase; and that (b) the information you supply to us
              is true, correct, and complete.
            </li>
            <li>
            We may employ the use of third-party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.
            </li>
            <li>
            We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order, or other reasons.  
            </li>
            <li>
            We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected. 
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TermsCondition;
