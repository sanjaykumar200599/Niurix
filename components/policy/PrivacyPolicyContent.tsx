import type { ReactNode } from "react";

function InlineHeading({ title, children }: { title: string; children: ReactNode }) {
  return (
    <p className="text-justify text-[16px] leading-[1.9rem] text-[#1D1D1D] tablet:text-[16px] laptop:text-[20px] laptop:font-body-light">
      <span className="font-sans text-brand-orange text-[22px] tablet:text-[24px] laptop:text-[24px]">{title}</span>
      <span className="mx-2 text-brand-orange">-</span>
      <span className="font-sans text-[#1D1D1D] text-[16px] tablet:text-[16px] laptop:text-[20px] laptop:font-body-light">{children}</span>
    </p>
  );
}

export default function PrivacyPolicyContent() {
  return (
    <section className="bg-[#ececec]">
      <div className="mx-auto w-full px-4 py-20 text-[#1D1D1D] tablet:px-8 tablet:py-[88px] laptop:px-[140px] laptop:pb-10 laptop:pt-[180px] laptop:font-body-light [@media(min-width:1025px)_and_(max-width:1367px)]:px-[80px] [@media(min-width:1367px)_and_(max-width:1600px)]:px-[100px]">
        <p className="text-right font-sans text-[16px] text-[#3f4654] tablet:text-[18px] laptop:text-[20px]">
          Effective Date : February 09, 2026
        </p>

        <h1 className="mt-5 text-center font-display font-semibold text-[30px] leading-tight text-brand-orange tablet:text-[32px] laptop:text-[28px] laptop:font-body-medium">
          Privacy Policy
        </h1>

        <div className="mt-8 space-y-5 text-[16px] leading-[1.9rem] tablet:text-[16px] laptop:text-[20px] laptop:font-body-light">
          <h2 className="mb-3 font-sans text-[22px] leading-tight text-brand-orange tablet:text-[24px] laptop:text-[28px] laptop:font-body-medium">1. Overview</h2>

          <p className="text-justify">
            Your privacy is important to Niurix. This privacy statement applies to data collected through websites owned and operated by Niurix.
            This statement describes the information practices for Niurix websites including but not limited to{" "}
            <a href="mailto:support@niurix.com" className="text-[#2a39ff] underline hover:text-[#1f2eff]">support@niurix.com</a>. This privacy statement describes the
            information practices for Niurix websites, including what types of information are collected, how Niurix uses this information and for what purposes;
            with whom information is shared; and how Niurix protects information. It also describes your choices regarding use, access, correction and deletion of
            your information, among other topics. In addition, this statement addresses personal information collection and use by Niurix in certain offline contexts,
            such as marketing and customer service and support.
          </p>

          <h2 className="mb-2 pt-1 font-sans text-[22px] leading-tight text-brand-orange tablet:text-[24px] laptop:text-[28px] laptop:font-body-medium">2. What Information Do We Collect?</h2>

          <p className="text-justify">
            Niurix collects data to enable us to make our products available to you, and to provide you with the best experience on our website and with our
            products. You provide some of this data to us directly, such as when you register to create an account on our website, subscribe to a newsletter,
            respond to a survey, contact us for support, or contact us as a prospective customer, vendor, supplier, or consultant. We also obtain and process data
            in the context of making the products available to you.
          </p>

          <p className="text-justify">
            You have choices about the data we collect. When you are asked to provide personal data, you may decline. But if you choose not to provide data that
            is necessary to enable us to make the Niurix products available to you, you may not be able to use all or part of those products.
          </p>

          <p className="text-justify">
            The data we collect depends on the context of your interactions with Niurix, the choices you make (including your privacy settings), and the products
            you use. The data we collect can include the following:
          </p>

          <InlineHeading title="2.1 Name and contact information">
            We may collect your first and last name, email address, password, postal address, phone number, company information, and other similar contact data.
          </InlineHeading>

          <InlineHeading title="2.2 Device and usage information">
            We may collect data about your device and how you and your device interact with our product.
          </InlineHeading>

          <InlineHeading title="2.3 Use data">
            We may collect data about the features you use, the products you purchase, and the web pages you visit. This also includes your interactions on our
            website, and your interactions with us via email.
          </InlineHeading>

          <InlineHeading title="2.4 Device, connectivity and configuration data">
            We may collect data about your device and the network you use to connect to our website or with which you use our products. This may include data about
            the operating system and other software installed on your device, including product keys. It may also include IP address, browser type, operating
            system, and referring URLs.
          </InlineHeading>

          <InlineHeading title="2.5 Data Quality Assurance">
            To ensure personal information is accurate, complete, up-to-date, and relevant for its intended purposes, Niurix may implement procedures such as
            validation checks during collection (e.g., required fields, format verification), periodic reviews of stored data, and automated updates where
            feasible, wherever needed. We also encourage users to review and update their information via the user dashboard. If inaccuracies are identified,
            we correct them promptly in accordance with documented internal processes.
          </InlineHeading>

          <h2 className="mb-2 pt-1 font-sans text-[22px] leading-tight text-brand-orange tablet:text-[24px] laptop:text-[28px] laptop:font-body-medium">3. What Do We Use Your Information For?</h2>

          <p className="text-justify">
            We use the data we collect to operate our business, and to make products available to you. This includes using the data to improve our Niurix product,
            and to personalize your experiences. We may also use the data to communicate with you, and among other things, inform you about your account, provide
            security updates, and give you information about the products. We may also use the data to manage your email subscriptions, improve the relevance and
            security of our website, respond to user enquiries, send you periodic marketing communications about our products, and improve the relevance of our
            advertising.
          </p>

          <InlineHeading title="3.1 Providing and improving our products">
            We use data to provide and improve the products we offer, and to perform essential business operations. This includes making the products available to
            you, maintaining and improving the performance of the products, developing new features, conducting research, and providing customer support. Examples
            of such uses include the following:
          </InlineHeading>

          <InlineHeading title="3.1.1 Providing the products">
            We use data to carry out your transactions with us and to make products available to you. In certain cases, we may use data to automatically tailor your
            experience based on the data we have about you.
          </InlineHeading>

          <InlineHeading title="3.1.2 Technical support">
            We use data to diagnose product problems, and to provide customer care and support services.
          </InlineHeading>

          <InlineHeading title="3.1.3 Improving the products">
            We use data to improve our website continually and our products, including system administration, system security, and adding new features or
            capabilities.
          </InlineHeading>

          <InlineHeading title="3.1.4 Business operations">
            We may use your data to help us develop aggregate analysis and business intelligence that enables us to operate, protect, make informed decisions, and
            report on the performance of our business.
          </InlineHeading>

          <InlineHeading title="3.1.5 Improving advertising campaigns">
            We may use your data to improve our advertising campaigns, primarily to prevent targeting of advertisements which are not relevant to you.
          </InlineHeading>

          <InlineHeading title="3.1.6 Sending periodic emails">
            We may use your data to send you periodic emails. Depending on the marketing preferences you select on your user dashboard, we may send you occasional
            marketing emails about our products and services, which you can unsubscribe from at any point of time using the link provided in the message.
          </InlineHeading>

          <InlineHeading title="3.1.7 Communications">
            We use data collected to communicate with you, and to personalize our communications with you. For example, we may contact you to inform you when a
            license is ending, to discuss your account, to let you know when updates are available, to remind you about features of the products that are available
            for your use, to update you about a support request, or to invite you to participate in a survey. Additionally, you can sign up for email subscriptions
            and choose whether you want to receive marketing communications from us.
          </InlineHeading>

          <h2 className="mb-2 pt-1 font-sans text-[22px] leading-tight text-brand-orange tablet:text-[24px] laptop:text-[28px] laptop:font-body-medium">4. How Do We Protect Your Information?</h2>

          <p className="text-justify">
            We implement a variety of security measures to help maintain the safety of your information when you enter, submit, or access your information. We
            offer the use of a secure server. Sensitive information can only be accessed by those authorized with special access rights to such systems, and who are
            required to keep the information confidential.
          </p>

          <h2 className="mb-2 pt-1 font-sans text-[22px] leading-tight text-brand-orange tablet:text-[24px] laptop:text-[28px] laptop:font-body-medium">
            5. How Do We Ensure That Our Processing Systems Remain Confidential, Resilient, and Available?
          </h2>

          <p className="text-justify">
            We implement a variety of measures to ensure that our processing systems remain confidential, resilient, and available. Specifically, we have implemented
            processes to help ensure high availability, business continuity, and prompt disaster recovery. We are committed to maintaining strong physical and
            logical access controls.
          </p>

          <InlineHeading title="5.1. High availability">
            We utilize properly-provisioned, redundant servers in case of failure. We take servers out of operation as part of regular maintenance, without
            impacting availability.
          </InlineHeading>

          <InlineHeading title="5.2. Business continuity">
            We keep periodic encrypted backups of data. While never expected, in the case of production data loss (i.e., primary data stores loss), we will restore
            organizational data from these backups.
          </InlineHeading>

          <InlineHeading title="5.3. Disaster recovery">
            In the event of a region-wide outage, we will bring up a duplicate environment in a different region. Our operations team has extensive experience
            performing full region migrations.
          </InlineHeading>

          <InlineHeading title="5.4. Physical access controls">
            Niurix is hosted by one or more secure hosting providers. Our hosting providers' data centres feature layered security models, which may include
            extensive safeguards such as custom-designed electronic access cards, alarms, vehicle access barriers and biometrics. Unauthorized visitors are not
            permitted to access the data centres.
          </InlineHeading>

          <h2 className="mb-2 pt-1 font-sans text-[22px] leading-tight text-brand-orange tablet:text-[24px] laptop:text-[28px] laptop:font-body-medium">6. Do We Disclose any Information to Outside Parties?</h2>

          <p className="text-justify">
            We share your data with your consent, or as necessary to make our product available to you. We also share your data with vendors working on our behalf;
            when required by law, or to respond to legal process; to protect our customers; to protect lives; to maintain the security and integrity of our products;
            and to protect our rights or our property. We may disclose your data as part of a corporate transaction such as a corporate sale, merger,
            reorganization, dissolution, or similar event.
          </p>

          <p className="text-justify">
            Finally, we will access, transfer, disclose, and/or preserve personal data, when we have a good faith belief that doing so is necessary to:
          </p>

          <InlineHeading title="6.1">Comply with applicable law or respond to valid legal process and judicial orders.</InlineHeading>
          <InlineHeading title="6.2">Respond to requests from public or governmental authorities, including for national security or law enforcement purposes.</InlineHeading>
          <InlineHeading title="6.3">Protect the vital interests of our users, customers, or other third parties.</InlineHeading>
          <InlineHeading title="6.4">Operate and/or maintain the security or integrity of our products, including to prevent or stop an attack on our computer systems or networks.</InlineHeading>
          <InlineHeading title="6.5">Protect the rights, interests or property of Niurix or third parties.</InlineHeading>
          <InlineHeading title="6.6">Prevent or investigate possible wrongdoing in connection with the products.</InlineHeading>

          <p className="text-justify">
            We may use and share aggregated non-personal information with third parties for marketing, advertising, and analytics purposes. We do not sell or trade
            your information to third parties.
          </p>

          <h2 className="mb-2 pt-1 font-sans text-[22px] leading-tight text-brand-orange tablet:text-[24px] laptop:text-[28px] laptop:font-body-medium">7. How to Access and Control Your personal data?</h2>

          <p className="text-justify">
            You can view, access, edit, or request a copy of your data. You can also delete certain elements of your data or move certain elements of your data to
            “inactive” status where the data will no longer be processed. You can also make choices about Niurix collection and use of your data.
          </p>

          <InlineHeading title="7.1 Data Access">You can access your personal data on your accounts user dashboard.</InlineHeading>

          <InlineHeading title="7.1.1 Discovery of Personal Information">
            Data subjects may request confirmation of whether Niurix maintains their personal information by submitting a written request via email to{" "}
            <a href="mailto:privacy@niurix.com" className="text-[#2a39ff] underline hover:text-[#1f2eff]">privacy@niurix.com</a>. The request should include sufficient
            identification. Upon receipt, Niurix will verify the data subject's identity and respond within thirty (30) days, providing access or confirmation as
            applicable, in accordance with documented procedures for handling such requests.
          </InlineHeading>

          <InlineHeading title="7.1.2 Denial of Access">
            If access is denied (e.g., due to legal, security, or operational reasons), data subjects will be informed in writing of the denial, the specific
            reason(s), and any available rights to challenge the denial, as permitted or required by applicable law or regulation.
          </InlineHeading>

          <InlineHeading title="7.2 Data Portability">You can request a copy of your data by sending an email to us.</InlineHeading>
          <InlineHeading title="7.3 Data Correction">You can modify your personal data on your accounts user dashboard.</InlineHeading>

          <InlineHeading title="7.3.1 Review and Correction Procedure">
            Data subjects may review, update, or correct their personal information by accessing their user dashboard or submitting a written request via email to{" "}
            <a href="mailto:privacy@niurix.com" className="text-[#2a39ff] underline hover:text-[#1f2eff]">privacy@niurix.com</a>. Upon verification of identity, Niurix will process
            corrections within thirty (30) days and communicate any amendments to relevant third parties where committed or required (e.g., service providers or legal
            obligations), in accordance with documented procedures.
          </InlineHeading>

          <InlineHeading title="7.3.2 Denial of Correction">
            If a request for correction is denied, data subjects will be informed in writing of the denial, the specific reason(s), and any available rights to
            challenge the denial, as permitted or required by applicable law or regulation.
          </InlineHeading>

          <InlineHeading title="7.4 Accounting of Personal Information and Disclosures">
            Upon request, data subjects may obtain an accounting of the personal information held about them, including types of personal and sensitive personal
            information (e.g., contact details, device data), related processes and systems for handling such information, and disclosures to third parties
            (e.g., vendors as described in Section 6). Requests should be submitted via email to{" "}
            <a href="mailto:privacy@niurix.com" className="text-[#2a39ff] underline hover:text-[#1f2eff]">privacy@niurix.com</a>, with sufficient identification. Niurix will verify
            identity and provide the accounting within 30 days, including details on relevant third-party systems and processes where applicable, in accordance with
            documented procedures. If a request is denied, data subjects will be informed of the reason(s) and any rights to challenge, consistent with Section 7.1.2.
          </InlineHeading>

          <h2 className="mb-2 pt-1 font-sans text-[22px] leading-tight text-brand-orange tablet:text-[24px] laptop:text-[28px] laptop:font-body-medium">
            8. Where Do We Store and Process Personal Data and Conduct International Transfers?
          </h2>

          <p className="text-justify">
            Personal data collected by Niurix can be stored and processed in the United States where Niurix or its affiliates, subsidiaries or service providers
            maintain facilities. The storage location is chosen to allow us to operate more efficiently, to improve performance, and to create redundancies to
            protect the data in the event of an outage or other problem. We take steps to ensure that the data we collect is processed according to the provisions
            of this Policy, and that we comply with the requirements of applicable law wherever the data is located.
          </p>

          <InlineHeading title="8.1 Data Retention">
            We may retain your information for as long as you continue to use our product, have an account with us, or as necessary to fulfil the purposes outlined
            in this Policy. You can ask to close your account by contacting us, and we will either delete your information, or move it to “inactive” status where it
            will no longer be processed. We may, however, retain personal information for an additional period as is permitted or required under applicable laws, for
            legal, tax, or regulatory reasons, or for any other legitimate and lawful business purpose.
          </InlineHeading>

          <InlineHeading title="8.2 Customer data deletion request">
            Customers may request the deletion of their data by submitting a written request to Niurix via email at{" "}
            <a href="mailto:privacy@niurix.com" className="text-[#2a39ff] underline hover:text-[#1f2eff]">privacy@niurix.com</a>. The request should include sufficient
            identification and a clear reason for deletion. Upon receipt of the request, Niurix will verify the customer's identity and confirm the deletion request
            within five (5) business days.
          </InlineHeading>

          <p className="text-justify">
            Niurix will then proceed with the deletion of the customer’s data within thirty (30) days of confirmation, unless retention is required by law,
            regulation, or contract. A confirmation of the data deletion will be provided to the customer once the process is complete.
          </p>

          <InlineHeading title="8.3 Changes to our Privacy Policy">
            We will update this Policy when necessary to reflect customer feedback, as well as to reflect periodic changes in the Niurix website or our product. When
            we post changes to this Policy, we will revise the “last updated” date at the top of the Policy. If there are material changes to the Policy or in how
            Niurix uses your data, we will notify you either by prominently posting a notice of such changes before they take effect or by directly sending you a
            notification. We encourage you to review this Policy periodically to learn how Niurix is protecting your information.
          </InlineHeading>

          <h2 className="mb-2 pt-1 font-sans text-[22px] leading-tight text-brand-orange tablet:text-[24px] laptop:text-[28px] laptop:font-body-medium">9. How to Contact Us?</h2>

          <p className="text-justify">
            If you have a technical or support question, please send us an email at{" "}
            <a href="mailto:support@niurix.com" className="text-[#2a39ff] underline hover:text-[#1f2eff]">support@niurix.com</a>.
          </p>

          <p className="text-justify">
            If you have any complaints or grievances, please send us an email at{" "}
            <a href="mailto:grievance@niurix.com" className="text-[#2a39ff] underline hover:text-[#1f2eff]">grievance@niurix.com</a>.
          </p>

          <p className="text-justify">
            For any privacy concern, complaint, or a question for the Data Protection Team of Niurix, please contact us by sending us an email at{" "}
            <a href="mailto:security@niurix.com" className="text-[#2a39ff] underline hover:text-[#1f2eff]">security@niurix.com</a>. We will respond to any queries or concerns within seven (7) days.
          </p>
        </div>

        <p className="mt-12 text-right font-sans text-[16px] text-[#3f4654] tablet:text-[18px] laptop:text-[20px]">
          Last Updated Date : March 05, 2026
        </p>
      </div>
    </section>
  );
}
