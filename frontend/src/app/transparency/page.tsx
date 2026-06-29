"use client";

import React from 'react';
import Image from 'next/image';

// --- Icon components for visual cues ---
const LivingWageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>;
const DiversityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const TrainingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg>;
const WorkLifeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const HealthSafetyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const EngagementIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h4.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V8z" /></svg>;
const ReportingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;

const commitments = [
    { title: 'Paying the Living Wage', icon: <LivingWageIcon />, color: 'text-blue-500' },
    { title: 'Equality, Diversity & Inclusion', icon: <DiversityIcon />, color: 'text-purple-500' },
    { title: 'Training & Development', icon: <TrainingIcon />, color: 'text-green-500' },
    { title: 'Work-Life Balance', icon: <WorkLifeIcon />, color: 'text-yellow-500' },
    { title: 'Health, Safety & Wellbeing', icon: <HealthSafetyIcon />, color: 'text-red-500' },
    { title: 'Worker Engagement', icon: <EngagementIcon />, color: 'text-indigo-500' },
    { title: 'Monitoring & Reporting', icon: <ReportingIcon />, color: 'text-pink-500' },
];

export default function FairWorkPracticesPage() {
    return (
        <div className="bg-white">
            {/* --- Header Section --- */}
            <header className="bg-slate-50 border-b border-slate-200 pt-8">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-base font-semibold text-blue-600 uppercase tracking-wider">Our Commitment</p>
                    <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
                        Fair Working Practices & Transparency
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600">
                        At Poddar Group Ltd, we are fully committed to ensuring all workers are treated with fairness, respect, and dignity.
                    </p>
                </div>
            </header>

            {/* --- Main Content with Sidebar --- */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                    
                    {/* Main Content Area */}
                    <main className="lg:col-span-2">
                        <div className="prose prose-lg max-w-none text-slate-600">
                            <h2>Commitment to Fair Work Practices and Transparency</h2>
                            <p>
                                We recognise that promoting fair working practices not only benefits our workforce but also helps reduce inequality, foster diversity, and improve the quality of service we provide to our clients. Our approach to fair work is guided by the following key principles, all of which are embedded in our operations and will be actively applied throughout the duration of this contract.
                            </p>
                            
                            <Section title="Commitment to Paying the Living Wage">
                                <p>We are committed to paying all employees, agency staff, and subcontracted workers at least the <strong>Real Living Wage</strong>, as set by the Living Wage Foundation. This ensures that everyone contributing to the delivery of this contract is fairly compensated.</p>
                                <ul>
                                    <li><strong>Application:</strong> All full-time, part-time, temporary, and agency workers will receive at least the Real Living Wage.</li>
                                    <li><strong>Subcontractor Compliance:</strong> We require all subcontractors to pay their workers the Real Living Wage and will carry out regular audits to ensure compliance.</li>
                                </ul>
                            </Section>

                             <Section title="Commitment to Equality, Diversity, and Inclusion">
                                <p>We believe that diversity and inclusion are essential to building a strong and innovative workforce. Poddar Group Ltd actively promotes equality of opportunity and maintains a zero-tolerance approach to discrimination.</p>
                                <ul>
                                    <li><strong>Hiring Practices:</strong> Recruitment processes are free from bias, with all decisions made on merit.</li>
                                    <li><strong>Workforce Diversity:</strong> We strive to reflect the diversity of the communities we serve by actively recruiting from underrepresented groups.</li>
                                </ul>
                            </Section>

                            <Section title="Training, Development, and Upskilling">
                                <p>We recognise the importance of investing in our workforce and believe that continuous skills development is key to both personal growth and business success.</p>
                                <ul>
                                    <li><strong>Onboarding and Training:</strong> All workers receive a thorough induction and training programme.</li>
                                    <li><strong>Career Development:</strong> We offer ongoing learning opportunities, including certified training, workshops, and mentorship schemes.</li>
                                    <li><strong>Upskilling and Progression:</strong> We are committed to providing internal opportunities for advancement.</li>
                                </ul>
                            </Section>

                             <Section title="Work-Life Balance and Flexible Working">
                                <p>At Poddar Group Ltd, we are dedicated to supporting a healthy work-life balance through a range of flexible working arrangements.</p>
                                <ul>
                                    <li><strong>Flexible Hours:</strong> Where feasible, flexible hours are provided to help staff balance professional and personal responsibilities.</li>
                                    <li><strong>Remote Working:</strong> We supply the necessary tools and support for staff to work effectively from home where suitable.</li>
                                    <li><strong>Family-Friendly Policies:</strong> We provide enhanced parental leave, childcare support, and compassionate leave.</li>
                                </ul>
                            </Section>

                             <Section title="Health, Safety, and Wellbeing">
                                <p>The health, safety, and wellbeing of our workforce is a top priority. All workers will be provided with a safe environment that complies with all regulations.</p>
                                <ul>
                                    <li><strong>Workplace Safety:</strong> We implement strict health and safety policies, including risk assessments and regular training.</li>
                                    <li><strong>Mental Health Support:</strong> We promote mental health and wellbeing through access to employee assistance programmes (EAPs) and support services.</li>
                                </ul>
                            </Section>

                            <Section title="Worker Engagement and Representation">
                                <p>We value open communication and collaboration, ensuring that all workers have a voice in decision-making.</p>
                                <ul>
                                    <li><strong>Feedback Mechanisms:</strong> Regular surveys, open forums, and confidential reporting channels are in place.</li>
                                    <li><strong>Trade Union Representation:</strong> We respect the right of all staff to join a trade union and engage in collective bargaining.</li>
                                </ul>
                            </Section>
                            
                            <Section title="Monitoring and Reporting Progress">
                                <p>Accountability is central to our approach. Poddar Group Ltd will monitor and report on fair work initiatives throughout the framework period.</p>
                                 <ul>
                                    <li><strong>Quarterly Reporting:</strong> We provide quarterly updates on wage levels, diversity metrics, training initiatives, and subcontractor compliance.</li>
                                    <li><strong>Subcontractor Audits:</strong> Regular audits ensure compliance with wage, working conditions, and safety standards.</li>
                                    <li><strong>Continuous Improvement:</strong> Feedback and performance reviews inform ongoing improvements to our fair work practices.</li>
                                </ul>
                            </Section>

                            <div className="mt-12 p-6 bg-slate-100 rounded-lg border border-slate-200">
                                <h3>Conclusion</h3>
                                <p className="!mt-2">Poddar Group Ltd is committed to implementing and maintaining strong fair work practices for all workers. By prioritising the Real Living Wage, promoting diversity, investing in training, and ensuring a safe environment, we aim to build a positive workplace culture and ensure full transparency and continuous improvement.</p>
                            </div>
                        </div>
                    </main>

                    {/* Sidebar with Key Commitments */}
                    <aside className="lg:col-span-1 mt-12 lg:mt-0">
                        <div className="lg:sticky lg:top-24 bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Key Commitments</h3>
                            <ul className="space-y-4">
                                {commitments.map((item) => (
                                    <li key={item.title} className="flex items-center gap-4">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${item.color.replace('text-', 'bg-').replace('-500', '-100')}`}>
                                            {React.cloneElement(item.icon, { className: `h-6 w-6 ${item.color}` })}
                                        </div>
                                        <span className="font-semibold text-slate-700">{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

// A simple component to structure each section
function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-200 pb-2 mb-4">
                {title}
            </h3>
            {children}
        </div>
    );
}
