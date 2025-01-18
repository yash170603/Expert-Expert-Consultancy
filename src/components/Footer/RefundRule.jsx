import React from "react";

const RefundRules = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          Expert Educational Consultancy
        </h1>
        <h2 className="text-xl font-semibold mb-6">Refund Policies</h2>

        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            1. Refund Request Process:
          </h3>
          <p className="text-gray-700 mb-2">
            <p>
              <ol type="A">
                <li>
                  To request a refund, students must fill out the Refund Request
                  Form available on our website or contact our Customer Support
                  team.
                </li>
                <br />
                <li>
                  Provide proof of enrollment and reasons for requesting a
                  refund (e.g., dissatisfaction with course content, technical
                  issues).
                </li>
              </ol>
            </p>
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">2. Refund Timeframe:</h3>
          <p className="text-gray-700 mb-2">
            <p>
              <ol type="A">
                <li>
                  Refunds are processed within 14 business days from the date of
                  receiving a valid refund request.
                </li>
                <br />
                <li>
                  Allowance for processing delays during peak enrollment
                  periods.
                </li>
              </ol>
            </p>
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">3. Refund Amounts:</h3>
          <p className="text-gray-700 mb-2">
            <p>
              <ol type="A">
                <li>
                  Full refunds will be issued if the withdrawal is within the
                  eligible timeframe and no course materials have been accessed.
                </li>
                <br />
                <li>
                  Partial refunds may be calculated based on the percentage of
                  the course completed before the refund request.
                </li>
              </ol>
            </p>
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            4. Exceptions and Limitations:
          </h3>
          <p className="text-gray-700 mb-2">
            <p>
              <ol type="A">
                <li>
                  Non-refundable deposits or registration fees are not eligible
                  for refunds.
                </li>
                <br />
                <li>
                  Refunds do not apply to specialized workshops, seminars, or
                  personalized consulting services unless explicitly stated
                  otherwise.
                </li>
                <br />
                <li>
                  Promotional offers or discounts may have their own refund
                  terms and conditions.
                </li>
              </ol>
            </p>
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            5. Cancellation Policy:
          </h3>
          <p className="text-gray-700 mb-2">
            <p>
              <ol type="A">
                <li>
                  Students may cancel their enrollment by providing written
                  notice at least 48 hours before the course start date to avoid
                  penalties.
                </li>
                <br />
                <li>
                  Cancellations made within 48 hours of the course start date
                  may be subject to a cancellation fee.
                </li>
              </ol>
            </p>
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            6. Contact Information:
          </h3>
          <p>
            For refund inquiries or assistance, contact our Customer Support
            team at
            <a href="mailto:expertec104@gmail.com" class="text-blue-500">
              &nbsp;expertec104@gmail.com
            </a>{" "}
            or call
            <a href="tel:+919313555010" class="text-blue-500">
              +91-9313555010
            </a>
            .
          </p>
        </section>

        <footer className="text-center text-gray-500 mt-6">
          <br /> &copy; 1995 Expert Educational Consultancy. All Rights
          Reserved.
        </footer>
      </div>
    </div>
  );
};

export default RefundRules;
