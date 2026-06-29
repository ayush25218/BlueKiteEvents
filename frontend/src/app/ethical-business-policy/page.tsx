"use client";

import React, { ReactNode } from "react";

// Icon components (unchanged)
const AuditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);
const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m0 10V7m0 10L9 17" />
  </svg>
);
const ContractIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);
const DueDiligenceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
const WhistleblowerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.516l.153-.357a.5.5 0 01.93.397V8.5c0 .278-.224.5-.5.5h-1.5a.5.5 0 01-.5-.5v-1.364c-.54.966-1.27 1.767-2.098 2.392-1.037.803-2.377 1.25-3.804 1.25H7M6 13h2v6H6v-6z" />
  </svg>
);
const TrainingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

// Typed reusable components
type SectionProps = {
  title: string,
  children: ReactNode
}
function Section({ title, children }: SectionProps) {
  return (
    <div className="py-8 border-t border-slate-200 first:border-t-0 first:pt-0 last:pb-0">
      <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{title}</h2>
      <div className="mt-6 text-lg text-slate-700 space-y-8">{children}</div>
    </div>
  );
}

type SubSectionProps = {
  title: string,
  children: ReactNode
}
function SubSection({ title, children }: SubSectionProps) {
  return (
    <div>
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      <div className="mt-2 text-lg text-slate-700">{children}</div>
    </div>
  );
}

type ComplianceItemProps = {
  icon: ReactNode,
  title: string,
  description: string
}
function ComplianceItem({ icon, title, description }: ComplianceItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-slate-800">{title}</h4>
        <p className="mt-1 text-slate-600">{description}</p>
      </div>
    </div>
  );
}

export default function EthicalBusinessPage() {
  return (
    <div className="bg-white">
      {/* --- Header --- */}
      <header className="bg-slate-100 border-b border-slate-200">
        <div className="mx-auto py-20 px-4 sm:px-6 lg:px-18">
          <div className="text-center">
            <p className="text-base font-semibold text-[#176299] uppercase tracking-wider">Poddar Group Ltd.</p>
            <h1 className="text-2xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
              Ethical Business Practices
            </h1>
            <p className="mt-6 mx-auto text-xl text-slate-600">
              We are committed to maintaining the highest standards of ethical business across all aspects of our supply chain and operations. Our Ethical Business Policy is based on internationally recognised principles and guidelines, including those established by the International Labour Organisation (ILO), and voluntary codes of practice such as the Ethical Business Initiative (EBI), the Global Reporting Initiative (GRI), and the Social Accountability International (SA8000) standard. This policy ensures that all employees, suppliers, and business partners operate ethically, with a focus on human rights, fair labour practices, environmental sustainability, and transparency.
            </p>
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-18">
          <div className="mx-auto">

            <Section title="Compliance with Ethical Standards">
              <SubSection title="1. Alignment with ILO Standards">
                <p>We strictly adhere to the core principles of the International Labour Organisation, ensuring that our business and supply chain partners:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Prohibit child labour and forced labour in all operations.</li>
                  <li>Uphold freedom of association and the right to collective bargaining.</li>
                  <li>Maintain fair wages, reasonable working hours, and safe working conditions.</li>
                  <li>Prevent discrimination based on race, gender, religion, or other personal characteristics.</li>
                </ul>
              </SubSection>
              <SubSection title="2. Adherence to Voluntary Codes of Practice">
                <p>We voluntarily comply with internationally recognised codes of practice, including:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>EBI Base Code:</strong> We ensure our suppliers follow EBI guidelines on workers’ rights, workplace safety, and ethical treatment.</li>
                  <li><strong>GRI Standards:</strong> We adopt the GRI framework for reporting on social, environmental, and economic sustainability, ensuring full transparency in our reporting practices.</li>
                  <li><strong>SA8000:</strong> We align our workplace policies with the SA8000 certification standards, mandating compliance in relation to human rights and labour welfare.</li>
                </ul>
              </SubSection>
            </Section>

            <Section title="Ensuring Transparency and Compliance">
              <p>Our commitment to ethical business is reinforced by robust monitoring and auditing processes, ensuring transparency and compliance throughout the framework period and any extensions. This includes:</p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <ComplianceItem icon={<AuditIcon />} title="Regular Audits" description="We carry out internal and third-party audits to assess adherence to ethical business standards across our supply chain. This guarantees compliance by all suppliers and business partners." />
                <ComplianceItem icon={<MapIcon />} title="Supply Chain Mapping" description="We maintain a comprehensive map of our supply chain, from production through to distribution, providing full visibility of sourcing, labour practices, and manufacturing processes." />
                <ComplianceItem icon={<ContractIcon />} title="Contractual Obligations" description="All suppliers and partners are contractually bound to our Ethical Business Policy. Any breach of these commitments leads to immediate corrective action, including termination of contracts where required." />
                <ComplianceItem icon={<DueDiligenceIcon />} title="Supplier Due Diligence" description="New suppliers undergo thorough due diligence, including site visits, document reviews, and worker interviews, to verify compliance with ethical standards." />
                <ComplianceItem icon={<WhistleblowerIcon />} title="Reporting and Whistleblowing Mechanism" description="A dedicated whistleblowing system is in place to allow employees, suppliers, and stakeholders to report unethical practices anonymously. All reports are investigated by our Compliance Team." />
              </div>
            </Section>

            <Section title="Continuous Improvement">
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Training Programmes:</strong> Regular training for employees and suppliers on ethical business standards and human rights, ensuring understanding and commitment at every level.</li>
                <li><strong>Performance Reviews:</strong> Our Ethical Business Policy is reviewed annually to ensure alignment with international guidelines and best practice. Updates are communicated across the organisation and supply chain.</li>
              </ul>
            </Section>

            <Section title="Conclusion">
              <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <p className="text-lg font-medium text-blue-900">
                  At Poddar Group Ltd, we recognise that ethical business is fundamental to building trust, ensuring fair treatment, and promoting sustainability within the healthcare sector. Our adherence to ILO standards, voluntary codes of practice, and rigorous compliance measures demonstrates our commitment to transparency and social responsibility. Through ongoing oversight and engagement, we aim to positively impact our workforce, the communities we serve, and the wider healthcare supply chain.
                </p>
              </div>
            </Section>

          </div>
        </div>
      </main>
    </div>
  );
}
