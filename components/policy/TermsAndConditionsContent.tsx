import type { ReactNode } from "react";

type Clause = {
  id: string;
  text: ReactNode;
  uppercase?: boolean;
};

type SectionBlock = {
  title: string;
  clauses: Clause[];
};

const introduction: Clause[] = [
  {
    id: "1",
    text: (
      <>
        The Niurix website, platform and mobile applications are owned and operated by Niurix, LLC, an Illinois Limited
        Liability company and other affiliated companies located at 2130 Foster Avenue, Wheeling, IL <strong>("Niurix", "Us", "We", "Our")</strong>.
      </>
    ),
  },
  {
    id: "2",
    text: (
      <>
        Niurix is in the business of providing Software and Services through websites, software applications, hardware
        and cloud platforms, mobile applications<strong>("Services")</strong>.
      </>
    ),
  },
  {
    id: "3",
    text: (
      <>
        The company that You work for or that You provide Services to has subscribed to the Services <strong>("Subscribing Entity")</strong>.
      </>
    ),
  },
  {
    id: "4",
    text: (
      <>
        You are an employee, partner, representative, subcontractor or vendor of the Subscribing Entity <strong>("You", "Your")</strong> and shall be considered a representative of the Subscribing Entity.
      </>
    ),
  },
  {
    id: "5",
    text: (
      <>
        Subject to the Terms and Conditions of this agreement <strong>("Terms")</strong>, You have been authorized by the Subscribing
        Entity to access and use the Services <strong>("Authorized User")</strong>. Together the Subscribing Entity and Authorized User
        are Licensed Entities <strong>("Licensed Entities")</strong> with rights to access and use the Services in accordance with the
        Terms.
      </>
    ),
  },
];

const serviceConsentBullets = [
  "YOU HAVE READ AND AGREED TO ALL THE TERMS OF THIS AGREEMENT.",
  "YOU ARE A PARTY TO AND CONSENT TO BE BOUND BY THIS AGREEMENT.",
  "YOU AGREE TO ALL THE TERMS AND CONDITIONS CONTAINED IN THIS AGREEMENT WITHOUT MODIFICATION.",
] as const;

const serviceTerms: SectionBlock[] = [
  {
    title: "1. License",
    clauses: [
      {
        id: "1.1",
        text: "You do not own the Services. Niurix hereby grants to the Licensed Entities a limited, nonexclusive, non-transferable, revocable license, without the right to grant sublicenses, to use the Services.",
      },
      {
        id: "1.2",
        text: "You are responsible for Your use of the Services and will not allow the Services to be used in any manner that violates or infringes upon the intellectual property rights or the privacy or publicity rights of any person or entity, or in any manner that is likely to damage or impair the Services. You shall not during your use of the Services: (a) access, store, distribute or transmit any viruses or other harmful code; or (b) upload, transmit or store any material that is unlawful, illegal, discriminatory or may result in damage or injury to any person or property. You have full responsibility in the way You use the Services, including its legality, reliability and appropriateness. We reserve the right, to terminate your access to the Services if you breach this provision.",
      },
      {
        id: "1.3",
        text: "You shall not modify, make derivative works of, disassemble, reverse compile, or reverse engineer any part of the Services, or access the Services, in any way, to build a similar or competitive product or service. You acknowledge and agree that Niurix (or its applicable vendors or licensors) shall own all right, title and interest in and to all Intellectual Property in the Services, and any feedback or suggestions provided by You relating to the Services or improvements made thereto. Except as expressly authorized in writing by Niurix, you shall not resell or commercially exploit any part of the Services, or license, sell, rent, transfer, assign, or make available, the Services or any part thereof, to any third party. You do not acquire any rights in the services other than those expressly granted to you by Niurix.",
      },
      {
        id: "1.4",
        text: "The rights provided under these Terms are only granted to You and shall not be considered granted to any subsidiary or holding company that You may be affiliated to.",
      },
    ],
  },
  {
    title: "2. User Accounts",
    clauses: [
      {
        id: "2.1",
        text: "As an Authorized User, you will be required to register with Us and provide personal identifying information (\"PII\"). You are responsible for ensuring the accuracy, maintaining the safety and security of the PII. You are solely responsible for all activities that occur under your account or password. We reserve all rights to terminate accounts, edit or remove content and cancel orders at our sole discretion.",
      },
      {
        id: "2.2",
        text: "Authorized Users shall not to share identification and/or password codes with others; or (ii) permit the identification and/or password codes to be cached in proxy servers.",
      },
    ],
  },
  {
    title: "3. Intellectual Property",
    clauses: [
      {
        id: "3.1",
        text: (
          <>
            You are responsible for the information, opinions, messages, comments, photos, and other content or material
            that you submit, upload, post or otherwise make available on or through the Services (each a
             <strong>("Submission")</strong>). You may not upload, post or otherwise make available through the Services
            any material protected by copyright, trademark, or any other proprietary right without the express permission
            of the owner of such copyright, trademark or other proprietary right owned by a third party, and the burden
            of determining whether any material is protected by any such right is on You. You shall be solely liable for
            any damage resulting from any infringement of copyrights, trademarks, proprietary rights, violation of
            contract, privacy or publicity rights or any other harm resulting from any Submission that you make. You have
            full responsibility for each Submission you make, including its legality, reliability and appropriateness.
          </>
        ),
      },
      {
        id: "3.2",
        text: "You will not alter, remove, modify or suppress any confidentiality legends or proprietary notices placed on or contained within any part of the Services, including third party legends. You agree to comply with all copyright, trademark, trade secret, patent, contract and other laws necessary to protect all rights in the proprietary interests of Us or Our representative.",
      },
    ],
  },
  {
    title: "4. Limitations on Software Use",
    clauses: [
      {
        id: "4.1",
        text: "The Services are provided for general information only. We shall not be liable for any loss or damages resulting from the provision or use of Our Services.",
      },
      {
        id: "4.2",
        text: (
          <>
            The Services utilize Services and resources provided by third parties (<strong>"Third-Party Resources"</strong>
            ). We do not warrant the content, accuracy, or functionality of these Third-Party Resources. We shall not be
            liable for any loss or damages resulting from the provision or use of Third-Party Resources.
          </>
        ),
      },
      {
        id: "4.3",
        text: "We make no representations, warranties, or guarantees, whether express or implied, that the content on our Services is accurate, complete, or up to date.",
      },
    ],
  },
  {
    title: "5. Warranties and Indemnity",
    clauses: [
      {
        id: "5.1",
        uppercase: true,
        text: (
          <>
            THE SERVICES ARE PROVIDED ON AN <strong>"AS IS"</strong> BASIS. NIURIX DOES NOT WARRANT THAT YOUR USE OF THE SERVICES
            WILL BE SECURE, TIMELY, UNINTERRUPED OR ERROR FREE, OR THAT THE SERVICES WILL BE FREE OF VIRUSES OR OTHER HARMFUL
            COMPONENTS, OR OPERATE IN COMBINATION WITH SPECIFIC HARDWARE, SOFTWARE, SYSTEMS, DEVICES, NETWORK COMMUNICATION
            METHODS OR PROTOCOLS UNLESS EXPRESSLY PROVIDED HEREIN. NO WARRANTY IS MADE REGARDING THE RESULTS OF USE OF A SERVICE
            OR THAT ANY SERVICE WILL MEET YOUR REQUIREMENTS. NIURIX DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED OR STATUTORY,
            INCLUDING BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
            NONINFRINGEMENT. THIS SECTION SHALL SURVIVE THE TERMINATION OF THIS AGREEMENT.
          </>
        ),
      },
      {
        id: "5.2",
        text: "You are solely responsible for the results obtained from the use of the Services. We will have no liability for any damage caused by errors of omissions or any actions which is performed at Your direction.",
      },
      {
        id: "5.3",
        text: (
          <>
            You shall indemnify, defend, and hold Niurix, its officers, directors, employees and agents harmless against
            any claim, loss, cost, expense, demand, liability or damage, including reasonable attorneys' fees, for damages
            arising from <strong>(i)</strong> the negligence or breach of this Agreement, <strong>(ii)</strong> the negligence, gross negligence or wilful misconduct in
            the access and/or use of Services, and <strong>(iii)</strong> the unauthorized use of the Services.
          </>
        ),
      },
    ],
  },
  {
    title: "6. Limitation of Liability",
    clauses: [
      {
        id: "6.1",
        uppercase: true,
        text: "NEITHER PARTY SHALL BE LIABLE TO THE OTHER PARTY FOR SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES INCLUDING WITHOUT LIMITATION, INTERRUPTION OF BUSINESS, LOST PROFITS, LOST OR CORRUPTED DATA OR CONTENT, OR LOST REVENUE ARISING OUT OF THIS AGREEMENT. NIURIX SHALL NOT BE LIABLE FOR ANY DAMAGES RESULTING FROM THE LOSS OR CORRUPTION OF ANY DATA OR CONTENT WHETHER RESULTING FROM DELAYS, NONDELIVERIES, MISDELIVERIES, SERVICE INTERRUPTIONS OR OTHERWISE. THESE LIMITATIONS OF LIABILITY DO NOT APPLY WITH RESPECT TO: (i) BREACHES BY YOU OF LICENSE TERMS APPLICABLE TO THE SERVICES AND THIRD-PARTY PRODUCTS. (ii) YOUR UNAUTHORIZED USE OF NIURIX OR THIRDPARTY VENDORS INTELLECTUAL PROPERTY, MATERIALS OR ASSETS; OR (iii) DAMAGES RESULTING FROM THE BREACH OF CONFIDENTIALITY OBLIGATIONS. NIURIX'S LIABILITY TO CUSTOMER FOR ACTUAL DIRECT DAMAGES FOR ANY CAUSE WHATSOEVER SHALL BE LIMITED TO THE TOTAL OF ALL FEES PAID BY SUBSCRIBING ENTITY TO NIURIX IN THE 12 MONTHS PRIOR TO THE EVENTS GIVING RISE TO THE CLAIM HEREUNDER.",
      },
    ],
  },
  {
    title: "7. Indemnification",
    clauses: [
      {
        id: "7.1",
        text: (
          <>
            We will indemnify, defend and hold the Licensed Entities and their officers, directors, employees,
            successors and assigns(<strong>"Indemnified Parties"</strong>) harmless from and against, any losses,
            liabilities, damages, fines, penalties, settlements, judgments, costs and expenses, including reasonable
            attorneys' fees and expert fees, and interest (including taxes) arising out of a third-party claim that the
            Services violates the US patent, trademark, copyright, trade secret or other intellectual property rights of
            any third-party. Should any IP owned by, licensed to, or provided to the Licensed Entities by Niurix
            (<strong>"Niurix IP"</strong>) become or, in Niurix's opinion, be likely to become the subject of any
            infringement claim, Niurix shall have the right, at its sole discretion and at its expense, to either procure
            for the Licensed Entities the right to continue using or receiving the Niurix IP, replace or modify the
            Niurix IP so it becomes noninfringing, or remove the allegedly-infringing Niurix IP. THIS SECTION 7 STATES
            NIURIX'S ENTIRE LIABILITY, AND LICENSED ENTITIES SOLE AND EXCLUSIVE REMEDY FOR IP CLAIMS RELATING TO OR
            ARISING OUT OF ANY Niurix IP. Niurix shall have no obligation to Licensed Entities for indemnification with
            regard to any claim of infringement to the extent that the claim or allegation is based on: (1) a
            modification made by an entity other than Niurix or its designer; (2) a violation by Licensed Entities of
            this Agreement; (3) the inclusion by Licensed Entities of any customer data or third-party IP in any Niurix
            IP, if the claim would not have arisen but for such modification, violation or inclusion of customer data or
            third-party IP respectively.
          </>
        ),
      },
    ],
  },
  {
    title: "8. Confidentiality and Data Protection",
    clauses: [
      {
        id: "8.1",
        text: "You shall always keep confidential (and to ensure that Your employees, agents, vendors, and subcontractors shall keep confidential) any confidential information which they may acquire in relation to the business, products, Services of Niurix. You shall not use or disclose any such information except with our written consent or where such disclosure is required by law.",
      },
      {
        id: "8.2",
        text: "Any collection, use and disclosure of any personal data by us in connection with the Services will be governed by our Privacy Policy.",
      },
      {
        id: "8.3",
        text: "You will ensure that you always comply with any applicable data protection and privacy laws, including any notice or consent requirements, to the event you upload or provide any personal data to us.",
      },
    ],
  },
  {
    title: "9. Force Majeure",
    clauses: [
      {
        id: "9.1",
        text: "We shall have no liability to any Subscribing Entity under this agreement if our Services is not available due to acts, events, omissions or accidents beyond its reasonable control, including, without limitation, strikes, lock-outs or other industrial disputes, failure of a utility service or transport or telecommunications network, act of God, war, riot, civil commotion, malicious damage, compliance with any law or governmental order, rule, regulation or direction, accident, breakdown of plant or machinery, fire, flood, storm or default of suppliers or subcontractors.",
      },
    ],
  },
  {
    title: "10. Miscellaneous",
    clauses: [
      {
        id: "10.1",
        text: "No joint venture, partnership, or employment relationship is created between Niurix and the Licensed Parties.",
      },
      {
        id: "10.2",
        text: "You shall not, without our written consent, assign or transfer Your rights or obligations under the Terms of this Agreement. We may at any time assign or transfer our rights or obligations without notice.",
      },
      {
        id: "10.3",
        text: "Except for Our affiliated companies and subsidiaries, a person who is not a party to this agreement will not have the right to enforce any of the provisions of this Agreement.",
      },
      {
        id: "10.4",
        text: "We may modify the Terms of this agreement by providing the Licensed Entities ten (10) days written notice. All notices under the Terms, can be issued electronically via email or SMS text messaging.",
      },
      {
        id: "10.5",
        text: "If a provision of this agreement is found to be invalid, illegal or unenforceable in any relevant jurisdiction, the other provisions of this agreement will remain in force.",
      },
    ],
  },
  {
    title: "11. Governing Law and Jurisdiction",
    clauses: [
      {
        id: "11.1",
        text: "This agreement shall be governed and construed in accordance with the laws of the State of Illinois, United States. Each party irrevocable agreed that the courts of Illinois shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with this Terms or its subject matter.",
      },
    ],
  },
];

export default function TermsAndConditionsContent() {
  return (
    <section>
      <div className="mx-auto w-full px-4 py-20 text-[#1D1D1D] tablet:px-8 tablet:py-[88px] laptop:px-[140px] laptop:pb-10 laptop:pt-[180px] laptop:font-body-light [@media(min-width:1025px)_and_(max-width:1367px)]:px-[80px] [@media(min-width:1367px)_and_(max-width:1600px)]:px-[100px]">
        <h1 className="mb-14 text-center font-display font-semibold text-[26px] leading-tight text-brand-orange tablet:text-[28px] laptop:text-[28px] laptop:font-body-medium">
          Terms And Conditions
        </h1>

        <h2 className="mb-6 font-sans text-[22px] leading-tight text-brand-orange tablet:text-[24px] laptop:text-[28px] laptop:font-body-medium">
          Introduction
        </h2>

        <div className="space-y-6 text-[16px] leading-[1.9rem] tablet:text-[16px] laptop:pl-6 laptop:text-[20px] laptop:font-body-light">
          {introduction.map((item) => (
            <div key={item.id} className="flex items-start gap-2.5 laptop:gap-3">
              <span className="min-w-[22px] font-sans text-brand-orange laptop:min-w-[24px] laptop:text-[28px] laptop:font-body-medium">{item.id}.</span>
              <p className="text-justify">{item.text}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 mb-5 font-sans text-[20px] leading-tight text-brand-orange tablet:text-[22px] laptop:mt-10 laptop:text-[28px]">
          BY USING OUR SERVICES, YOU AGREE THAT:
        </h2>

        <ul className="mb-9 list-disc space-y-3 pl-8 text-[16px] leading-[1.9rem] tablet:text-[16px] laptop:mb-10 laptop:pl-14 laptop:text-[20px] laptop:font-body-light">
          {serviceConsentBullets.map((item) => (
            <li key={item} className="text-justify">{item}</li>
          ))}
        </ul>

        <h2 className="mb-6 font-sans text-[22px] leading-tight text-brand-orange tablet:text-[24px] laptop:text-[28px] laptop:font-body-medium">
          SERVICES TERMS
        </h2>

        <div className="space-y-10 laptop:space-y-12">
          {serviceTerms.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 font-sans text-[20px] leading-tight text-brand-orange tablet:text-[22px] laptop:text-[28px] laptop:font-body-medium">
                {section.title}
              </h3>

              <div className="space-y-5 text-[16px] leading-[1.9rem] tablet:text-[16px] laptop:text-[20px] laptop:font-body-light">
                {section.clauses.map((clause) => (
                  <div key={clause.id} className="flex items-start gap-2.5 laptop:gap-3">
                    <span className="min-w-[36px] font-sans text-[#2f3744] laptop:min-w-[40px]">{clause.id}</span>
                    <p className={`${clause.uppercase ? "uppercase " : ""}text-justify`}>{clause.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-right font-sans text-[18px] text-[#3b4250] tablet:text-[20px] laptop:text-[22px]">
          Last Updated Date: March 05, 2026
        </div>
      </div>
    </section>
  );
}
