"use client";

import React, { useState, useEffect } from 'react';

// Data for the sections and their content
const sectionsData = [
    { id: 'scope', title: '1. Scope' },
    { id: 'data-we-collect', title: '2. Personal Data We Collect' },
    { id: 'how-data-collected', title: '3. How Your Personal Data is Collected' },
    { id: 'how-we-use-data', title: '4. How We Use and Share Your Personal Data' },
    { id: 'privacy-rights', title: '5. Your Privacy Rights and Choices' },
    { id: 'other-links', title: '6. Links to Other Services' },
    { id: 'security', title: '7. Security of Our Services' },
    { id: 'retention', title: '8. Retention of Personal Data' },
    { id: 'childrens-privacy', title: '9. Children’s Privacy' },
    { id: 'us-consumers', title: '10. Additional Information for US Consumers' },
    { id: 'non-uk-visitors', title: '11. Additional Information for Visitors from Outside the UK' },
    { id: 'changes-contact', title: '12. Changes to this Privacy Notice and Contacting Us' },
];

export default function GlobalPrivacyNoticePage() {
    const [activeSection, setActiveSection] = useState('scope');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -75% 0px' }
        );

        sectionsData.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-white font-sans">
            {/* --- Header --- */}
            <header className="bg-slate-50 border-b border-slate-200 pt-5">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-base font-semibold text-[#176299] uppercase tracking-wider">Poddar Group Ltd.</p>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
                        Global Privacy Notice
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600">
                        At Poddar Group, we value the trust you place in us with your Personal Data. This notice explains our privacy practices.
                    </p>
                </div>
            </header>

            {/* --- Main Content with Sidebar --- */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-4 lg:gap-12">
                    
                    {/* Sticky Navigation Sidebar */}
                    <aside className="lg:col-span-1 lg:sticky lg:top-24 h-fit">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Contents</h3>
                        <nav className="space-y-1">
                            {sectionsData.map(section => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className={`block p-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                                        activeSection === section.id
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <main className="lg:col-span-3 mt-12 lg:mt-0">
                        <div className="prose prose-lg max-w-none text-slate-700 prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-800">
                            
                            <Section id="scope" title="1. Scope">
                                <p>This Privacy Notice applies when you use our websites, mobile apps, and other services, tools, and online applications or when you interact with us in other ways. Some of our affiliates have their own privacy notices; this notice only covers them when they link to it.</p>
                                <p>We use “Poddar Group,” “we,” “us,” or “our” to refer to the business responsible for your data. “Personal Data” refers to any information that directly or indirectly identifies you. If you have questions, please email <a href="mailto:inquiry@thepoddargroup.com">inquiry@thepoddargroup.com</a>.</p>
                                <p>By using our Services, you agree to our processing of your Personal Data as described here. If you do not agree, please do not use our Services.</p>
                            </Section>

                            <Section id="data-we-collect" title="2. Personal Data We Collect">
                               <p>Depending on your use of our Services, we may collect:</p>
                               <ul>
                                   <li><strong>Identifiers and Non-Public Personal Information:</strong> Name, contact details, account number, username/password, government ID, and payment details.</li>
                                   <li><strong>Internet Activity Information:</strong> How you interact with our Services, social media, or ads, referring websites, pages visited, browser/device type, and IP address.</li>
                                   <li><strong>Commercial Information:</strong> Purchase history and payment information.</li>
                                   <li><strong>Audio, Electronic, Visual, or Similar Information:</strong> Call/video recordings, pictures from events, emails, texts, and chat logs.</li>
                                   <li>Any other information you voluntarily provide.</li>
                               </ul>
                            </Section>

                            <Section id="how-data-collected" title="3. How Your Personal Data is Collected">
                                <h4>Personal Data Collected from You</h4>
                                <p>We may collect Personal Data when you register, purchase products, subscribe to newsletters, respond to surveys, contact customer service, or attend events.</p>
                                <h4>Personal Data Collected through Automated Means</h4>
                                <p>We automatically collect certain information from your device or browser. We use cookies and other tracking technologies to recognize you, understand your preferences, improve our Services, and provide a personalized experience.</p>
                                <h4>Personal Data Collected from Other Sources</h4>
                                <p>We may receive your Personal Data from affiliates, advertising networks, business partners, and social media networks.</p>
                            </Section>

                            <Section id="how-we-use-data" title="4. How We Use and Share Your Personal Data">
                                <p>We use Personal Data for Customer Service, Communications, Fulfillment, Customer Experience, Personalization, Direct Marketing, Promotions, and Security. We may disclose any Personal Data to our Affiliates, Business Partners, and Service Providers as necessary to provide our services, comply with legal requirements, or in the event of a business sale or merger.</p>
                            </Section>

                            <Section id="privacy-rights" title="5. Your Privacy Rights and Choices">
                                <p>You have rights regarding your Personal Data, which may include the right to opt out of direct marketing, disable cookies, or, in some locations (like the EEA, UK, and California), the right to access, correct, delete, or obtain a copy of your data. To exercise your rights, please contact us at <a href="mailto:inquiry@thepoddargroup.com">inquiry@thepoddargroup.com</a> or call +44 7944 746095.</p>
                            </Section>

                            <Section id="other-links" title="6. Links to Other Services">
                                <p>Our Services may link to other websites. We are not responsible for their privacy practices. Please review their privacy policies before use.</p>
                            </Section>

                            <Section id="security" title="7. Security of Our Services">
                                <p>We take appropriate steps to manage the privacy and security of your Personal Data, but it is impossible to guarantee 100% security in all circumstances.</p>
                            </Section>

                             <Section id="retention" title="8. Retention of Personal Data">
                                <p>We retain Personal Data as long as necessary to fulfill the purposes for which it was collected, or as required by law. For example, account data is kept while the account is active, and communications data is kept as long as you permit.</p>
                            </Section>

                            <Section id="childrens-privacy" title="9. Children’s Privacy">
                                <p>Our Services are not intended for persons under the age of 16, and we do not knowingly collect Personal Data from anyone under 16.</p>
                            </Section>

                            <Section id="us-consumers" title="10. Additional Information for US Consumers">
                                <p>This information supplements other parts of this notice. Poddar Group does not engage in the sale of Personal Data or targeted advertising as defined by applicable state privacy laws.</p>
                            </Section>

                            <Section id="non-uk-visitors" title="11. Additional Information for Visitors from Outside the UK">
                                <p>If you use our Services from outside the UK, you may have rights under your country&apos;s data protection laws. We may process your data in the UK or other locations. We rely on legal bases such as Contractual Obligations, Our Legitimate Interests, Our Legal Obligations, and Your Consent for processing data.</p>
                            </Section>
                            
                            <Section id="changes-contact" title="12. Changes to this Privacy Notice and Contacting Us">
                                <p>We may modify this notice at any time. If you have questions, please contact us:</p>
                                <ul>
                                    <li><strong>Email:</strong> <a href="mailto:inquiry@thepoddargroup.com">inquiry@thepoddargroup.com</a></li>
                                    <li><strong>Telephone:</strong> +44 141 673 4887</li>
                                    <li><strong>Mail:</strong> Poddar Group Ltd., 1 Merrylee Road, Glasgow, G43 2SH, United Kingdom</li>
                                </ul>
                            </Section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

// A reusable component to structure each section
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
    return (
        <section id={id} className="scroll-mt-24 py-8 border-t border-slate-200 first:border-t-0 first:pt-0">
            <h2 className="text-2xl font-bold !mb-4">{title}</h2>
            {children}
        </section>
    );
}
