"use client";

import React from "react";
import Link from "next/link"; // Assuming Next.js for Link component

// --- Icon components for visual context ---
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const GroupIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const ShieldCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 22a12.02 12.02 0 009-1.056c.343-.242.67-.513.974-.81M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 006-6v-1a6 6 0 00-9-5.197" /></svg>;

export default function WhistleblowingPolicyPage() {
  return (
    <div className="bg-slate-50">
      {/* --- Header --- */}
      <header className="bg-white border-b border-slate-200 pt-8">
        <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Poddar Group Ltd.
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Whistleblowing Policy
          </h1>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="max-w-5xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <Section title="1. Policy Statement">
            <p>
              At Poddar Group Ltd, we are committed to upholding the highest
              standards of openness, integrity, and accountability. We actively
              encourage all employees, contractors, and service providers to
              report any concerns relating to malpractice, unlawful activity, or
              omissions that could compromise ethical, operational, or
              regulatory compliance.
            </p>
            <p>
              This policy aligns with relevant UK legislation, including
              recognised Whistleblowing Standards, and ensures that individuals
              can raise concerns in a safe, secure, and confidential manner.
            </p>
          </Section>

          {/* --- Updated Purpose Section --- */}
          <Section title="2. Purpose of the Policy">
            <div className="p-8 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                  <TargetIcon />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Our Objectives
                </h3>
              </div>
              <ul className="list-disc list-outside mt-6 pl-5 space-y-3 text-slate-700">
                <li>
                  Provide a clear and transparent process for raising and
                  addressing concerns.
                </li>
                <li>
                  Protect whistleblowers from retaliation, victimisation, or
                  any form of detriment.
                </li>
                <li>
                  Ensure compliance with Whistleblowing Standards for services
                  within Framework Agreements.
                </li>
              </ul>
            </div>
          </Section>
          
          {/* --- Updated Scope Section --- */}
          <Section title="3. Scope of Application">
            <div className="p-8 rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-green-100 text-green-600 rounded-lg">
                    <UsersIcon />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                    Who This Policy Applies To
                    </h3>
                </div>
                <p className="mt-6 text-slate-700 leading-relaxed">
                    This policy applies to all employees, contracted service
                    providers, and stakeholders engaged in delivering services on
                    behalf of Poddar Group Ltd, including those operating under
                    national frameworks within the United Kingdom.
                </p>
            </div>
          </Section>

          <Section title="4. Definitions">
            <ul className="list-disc list-outside pl-5 space-y-4">
              <li>
                <strong className="font-semibold text-slate-800">
                  Whistleblowing:
                </strong>{" "}
                The act of reporting concerns regarding malpractice, unlawful
                behaviour, or failures in compliance.
              </li>
              <li>
                <strong className="font-semibold text-slate-800">
                  Confidential Contact:
                </strong>{" "}
                The designated individual or organisation to whom concerns may
                be reported externally, should internal reporting not be
                appropriate.
              </li>
            </ul>
          </Section>

          <Section title="5. Reporting Concerns">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              How to Report a Concern
            </h3>
            <p className="mb-8">
              Concerns should be raised as soon as possible, through the
              following channels:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <ReportingChannel
                icon={<UserIcon />}
                title="Line Manager"
                description="Raise your concern with your line manager in the first instance."
              />
              <ReportingChannel
                icon={<GroupIcon />}
                title="Human Resources"
                description="Contact HR if speaking to your manager is not appropriate."
              />
              <ReportingChannel
                icon={<MailIcon />}
                title="Whistleblowing Officer"
                description="Email directly and confidentially via inquiry@thepoddargroup.com"
                isEmail
              />
            </div>
            <p className="mt-8 text-sm text-slate-600 text-center bg-slate-100 p-4 rounded-lg">
              <strong>Anonymous Reporting:</strong> Anonymous reports will be
              accepted; however, limited information may restrict the extent of
              any investigation.
            </p>
          </Section>

          <Section title="6. Reporting Requirements Under Framework Agreements">
            <p>
              For services within the scope of Framework Agreements, the
              following reporting is required:
            </p>
            <ul className="list-disc list-outside mt-4 pl-5 space-y-3">
              <li>
                <strong className="font-semibold text-slate-800">
                  Quarterly Reports:
                </strong>{" "}
                To be submitted to{" "}
                <a
                  href="mailto:inquiry@thepoddargroup.com"
                  className="text-blue-600 hover:underline"
                >
                  inquiry@thepoddargroup.com
                </a>{" "}
                by the end of March, June, September, and December, where a
                concern has been raised.
              </li>
              <li>
                <strong className="font-semibold text-slate-800">
                  Annual Reports:
                </strong>{" "}
                To be submitted annually by the end of March, including either a
                summary of cases or a nil return if no concerns have been
                raised.
              </li>
            </ul>
          </Section>

          <Section title="7. Protection for Whistleblowers">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg flex items-center gap-6">
              <div className="flex-shrink-0">
                <ShieldCheckIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900">
                  Your Protection is Guaranteed
                </h3>
                <p className="mt-1 text-blue-800">
                  Poddar Group Ltd strictly prohibits any form of retaliation or
                  detrimental treatment towards whistleblowers. Any instance of
                  reprisal will result in disciplinary action, which may include
                  dismissal.
                </p>
              </div>
            </div>
          </Section>

          <Section title="8. Responsibilities">
            <ul className="list-none space-y-4">
              <ResponsibilityItem
                title="Management"
                description="To ensure this policy is clearly communicated and effectively implemented."
              />
              <ResponsibilityItem
                title="Employees"
                description="To raise concerns responsibly and in good faith."
              />
              <ResponsibilityItem
                title="Whistleblowing Officer"
                description="To oversee investigations and maintain strict confidentiality."
              />
            </ul>
          </Section>

          <Section title="9. Policy Review and Compliance">
            <p>
              This policy will be reviewed on an annual basis to ensure ongoing
              alignment with regulatory standards, best practice, and company
              objectives.
            </p>
          </Section>

          <div className="text-center pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              <strong>Approved by:</strong> Poddar Group Ltd Management Team
            </p>
            <p className="text-sm text-slate-500 mt-1">
              <strong>Effective Date:</strong> 01/10/2025 |{" "}
              <strong>Review Date:</strong> 28/09/2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- Reusable Components for clean structure ---
function Section({ title, children }: { title: string; children: React.ReactNode; }) {
  return (
    <section>
      <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
        {title}
      </h2>
      <div className="mt-6 text-lg text-slate-700 space-y-6">{children}</div>
    </section>
  );
}

function ReportingChannel({ icon, title, description, isEmail = false, }: { icon: React.ReactNode; title: string; description: string; isEmail?: boolean; }) {
  const content = (
    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 h-full hover:shadow-xl hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h4 className="mt-5 text-lg font-bold text-slate-800">{title}</h4>
      <p className="mt-1 text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );

  return isEmail ? (
    <a
      href="mailto:inquiry@thepoddargroup.com"
      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-lg"
    >
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

function ResponsibilityItem({ title, description, }: { title: string; description: string; }) {
  return (
    <li className="p-4 bg-white border border-slate-200 rounded-lg sm:flex sm:items-center sm:justify-between">
      <strong className="font-semibold text-slate-800 w-1/4">{title}:</strong>
      <span className="text-slate-600 mt-1 sm:mt-0">{description}</span>
    </li>
  );
}
