"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// --- SVG Icon Components for each section ---
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 22a12.02 12.02 0 009-1.056c.343-.242.67-.513.974-.81M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const LeafIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.121 15.536A9.004 9.004 0 0112 15c-1.857 0-3.593.536-5.064 1.464M12 9v6M10 7a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4zM3.293 17.293A10 10 0 0112 5.5c2.959 0 5.684 1.258 7.707 3.293m-1.414 7.414A10 10 0 0112 18.5c-2.959 0-5.684-1.258-7.707-3.293" /></svg>;
const CartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const ChartBarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

const sections = [
    { id: 'ethical-social', title: 'Ethical & Social Responsibility', icon: <ShieldIcon /> },
    { id: 'environmental', title: 'Environmental Responsibility', icon: <LeafIcon /> },
    { id: 'procurement', title: 'Sustainable Procurement', icon: <CartIcon /> },
    { id: 'monitoring', title: 'Monitoring & Reporting', icon: <ChartBarIcon /> },
    { id: 'collaboration', title: 'Partnerships & Collaboration', icon: <UsersIcon /> },
];

export default function SupplierCompliancePage() {
    const [activeSection, setActiveSection] = useState('ethical-social');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-slate-50 font-sans">
            {/* --- Hero Section --- */}
            <header className="relative h-[50vh] min-h-[300px] flex items-center justify-center text-center text-white">
                <Image
                    src="/images/2149853122.webp"
                    alt="Global supply chain collaboration"
                    fill
                    className="object-cover z-10"
                />
                <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
                <div className="relative z-10 max-w-4xl p-4">
                    <p className="text-base font-semibold text-blue-300 uppercase tracking-wider">Poddar Group Ltd.</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Supplier Compliance & Code of Conduct
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-slate-200">
                        A framework for building ethical, sustainable, and responsible supply chains in partnership with Poddar Group Ltd.
                    </p>
                </div>
            </header>

            {/* --- Main Content --- */}
            <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-12">
                
                {/* Sticky Navigation */}
                <aside className="lg:col-span-1 lg:sticky lg:top-24 h-fit">
                    <nav className="space-y-2">
                        {sections.map(section => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                                    activeSection === section.id
                                        ? 'bg-[#176299] text-white shadow-lg'
                                        : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-[#176299]'
                                }`}
                            >
                                {React.cloneElement(section.icon, {
                                    className: `h-6 w-6 transition-colors duration-200 ${
                                        activeSection === section.id ? 'text-white' : 'text-slate-500'
                                    }`,
                                })}
                                <span className="font-semibold">{section.title}</span>
                            </a>
                        ))}
                    </nav>
                </aside>
                
                {/* Content Sections */}
                <div className="lg:col-span-3 space-y-20">
                    <Section
                        id="ethical-social"
                        icon={<ShieldIcon />}
                        title="1. Ethical and Social Responsibility Standards"
                        items={[
                            "Prohibit Child Labour: Ensure no child labour is involved in any stage of the production process.",
                            "Fair Wages: Guarantee all employees are paid at least a living wage based on the local cost of living.",
                            "Safe Working Conditions: Provide safe and acceptable working environments for all employees, in line with international labour standards.",
                            "Work Hours Documentation: Maintain accurate and transparent records of employee working hours to ensure compliance with legal and ethical limits.",
                            "Non-Bonded Labour: Guarantee that all labour is voluntary, with no use of bonded or forced labour practices.",
                            "Supplier Relationships: Foster collaborative and fair relationships, including prompt payments, to encourage technological innovation and efficiency.",
                        ]}
                    />
                    <Section
                        id="environmental"
                        icon={<LeafIcon />}
                        title="2. Environmental Responsibility"
                        description="Suppliers must align with Scotland’s Circular Economy Strategy and commit to:"
                        items={[
                            "Reducing Deliveries: Consolidate shipments to Health Boards to minimise carbon footprint.",
                            "Adopting Sustainable Packaging: Minimise packaging waste, use biodegradable or recyclable materials, and enhance recycling infrastructure.",
                            "Promoting Energy and Resource Efficiency: Minimise energy and water usage and commit to reducing pollution and carbon emissions.",
                            "Embracing the Reduce, Reuse, Recycle Principles: Actively support Scotland’s transition to a circular economy.",
                        ]}
                    />
                    <Section
                        id="procurement"
                        icon={<CartIcon />}
                        title="3. Sustainable Procurement Practices"
                        items={[
                            "Consider Whole Life Costs: Prioritise long-term value over initial purchase price, taking into account environmental and social impacts.",
                            "Buy Smarter, Not Just Greener: Balance product quality with sustainability to achieve optimal outcomes.",
                            "Support Technological Innovation: Invest in and encourage solutions that improve sustainability and operational efficiency.",
                        ]}
                    />
                     <Section
                        id="monitoring"
                        icon={<ChartBarIcon />}
                        title="4. Monitoring and Reporting"
                        items={[
                            "Audits and Certification: Demonstrate compliance through regular audits and recognised certifications (e.g., SA8000, ISO 14001).",
                            "Performance Metrics: Track and report on sustainability indicators such as carbon emissions, recycling rates, and energy consumption.",
                            "Transparency: Provide clear and detailed reports on supply chain practices, including sourcing of materials, labour conditions, and environmental impact.",
                        ]}
                    />
                    <Section
                        id="collaboration"
                        icon={<UsersIcon />}
                        title="5. Partnerships and Collaboration"
                        description="Poddar Group will work with suppliers to:"
                        items={[
                            "Share best practices.",
                            "Develop innovative solutions for waste reduction and resource optimisation.",
                            "Align objectives with the Scottish Government’s sustainability goals.",
                        ]}
                    />
                </div>
            </main>
        </div>
    );
}

// --- Reusable Section Component with corrected prop types ---
function Section({ id, icon, title, description, items }: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description?: string; // This question mark makes the prop optional
    items: string[];
}) {
    return (
        <section id={id} className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
                {icon}
                <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
            </div>
            {description && <p className="mb-6 text-lg text-slate-600">{description}</p>}
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-slate-200 flex items-start gap-4">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <p className="text-slate-700">{item}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
