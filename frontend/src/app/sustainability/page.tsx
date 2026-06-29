"use client";

import React from 'react';
import Image from 'next/image';

// --- Icon components for each key area ---
const WaterDropIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16a5 5 0 01-4.898-6.096C3.36 5.885 7.29 2 12 2s8.64 3.885 9.898 7.904A5 5 0 0117 16" /></svg>;
const PackageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
const ShieldCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 22a12.02 12.02 0 009-1.056c.343-.242.67-.513.974-.81M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const TrendingUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;

export default function SustainabilityResponsePage() {
    return (
        <div className="bg-slate-50">
            {/* --- Hero Section --- */}
            <header className="relative bg-slate-800 text-white py-20 px-4 sm:px-6 lg:px-8">
                <Image
                    src="/images/2149853122.webp"
                    alt="Sustainable industry background"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="relative max-w-5xl mx-auto text-center">
                    <p className="text-base font-semibold text-blue-300 uppercase tracking-wider">Poddar Group Ltd.</p>
                    <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Response to Sustainability and Supply Chain Requirements
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-300">
                        Our commitment to pioneering sustainable practices and building a resilient, net-zero supply chain.
                    </p>
                </div>
            </header>

            {/* --- Key Metrics Highlight --- */}
            {/* <div className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <MetricHighlight label="Water Usage Reduction" value="25%" />
                        <MetricHighlight label="Carbon Emissions Reduction" value="35%" />
                        <MetricHighlight label="Recycled Fibres in Products" value="20%" />
                        <MetricHighlight label="Packaging Material Saved" value="18 Tonnes" />
                    </div>
                </div>
            </div> */}

            {/* --- Main Content --- */}
            <main className="mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-18">
                <div className="space-y-16">

                    <Section 
                        icon={<WaterDropIcon />}
                        title="1. Minimising Reliance on Water, Carbon, and Energy-Intensive Processes"
                        subtitle="Steps Taken in the Cleaning Mop Production Process:"
                    >
                        <ul className="list-disc list-outside space-y-3 pl-5 text-lg">
                            <li><strong>Water Conservation:</strong> Implementation of water-efficient cleaning technologies to reduce water usage by 25%. Recycling and reusing water within the production process using advanced filtration systems.</li>
                            <li><strong>Carbon and Energy Efficiency:</strong> Transitioned to energy-efficient machinery powered by renewable energy sources, reducing carbon emissions by 35%. Conducted regular energy audits to identify and eliminate inefficiencies.</li>
                            <li><strong>Waste Reduction:</strong> Established a closed-loop system to recycle production waste into reusable materials. Innovated materials sourcing to include 20% recycled fibres, improving product life while reducing resource consumption.</li>
                            <li><strong>Innovative Solutions:</strong> Adopted AI-based monitoring systems for production processes to minimise energy and resource overuse.</li>
                        </ul>
                    </Section>

                    <Section
                        icon={<PackageIcon />}
                        title="2. Sustainable Packaging Measures"
                    >
                        <ul className="list-disc list-outside space-y-3 pl-5 text-lg">
                            <li>Transitioned to 100% recyclable and biodegradable packaging materials, replacing plastics with sustainably sourced alternatives (e.g., kraft paper, plant-based wraps).</li>
                            <li>Reduced overall packaging volume by optimising design, saving 18 tonnes of material annually.</li>
                            <li>Engaged suppliers certified for sustainable forestry (FSC-certified).</li>
                        </ul>
                    </Section>

                    <Section
                        icon={<ShieldCheckIcon />}
                        title="3. Guaranteeing Supply Chain Security and Resilience"
                    >
                        <ul className="list-disc list-outside space-y-3 pl-5 text-lg">
                            <li><strong>Diversified Supply Sources:</strong> Established multiple, geographically distributed suppliers to reduce dependency and risk of disruption.</li>
                            <li><strong>Technology Adoption:</strong> Implemented digital supply chain platforms to monitor, forecast, and address potential vulnerabilities in real time.</li>
                            <li><strong>Local Partnerships:</strong> Increased local sourcing of key components, reducing reliance on long-haul logistics.</li>
                            <li><strong>Risk Management:</strong> Conducted regular risk assessments and established contingency plans for critical supply components.</li>
                        </ul>
                    </Section>

                    <Section
                        icon={<TrendingUpIcon />}
                        title="4. Pathway to Net Zero"
                    >
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg">
                            <h3 className="text-2xl font-bold text-blue-900">Our Commitment: Net-Zero by 2030</h3>
                            <p className="mt-2 text-lg text-blue-800">
                                Poddar Group Ltd. is committed to achieving net-zero across all business operations and the supply chain by 2030.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <NetZeroCard
                                title="Operational Emissions"
                                content="Targeting net-zero emissions by 2030. Key actions include transitioning to 100% renewable energy and implementing carbon capture technologies. Investing in energy-efficient infrastructure and equipment upgrades."
                            />
                            <NetZeroCard
                                title="Supply Chain Decarbonisation"
                                content="Collaborating with suppliers to align with science-based emissions reduction targets. Introducing supplier engagement programmes to incentivise sustainable practices."
                            />
                            <NetZeroCard
                                title="Offset Strategies"
                                content="Investing in certified carbon offset projects (e.g., reforestation and renewable energy developments) to neutralise unavoidable emissions."
                            />
                        </div>
                    </Section>
                </div>
            </main>
        </div>
    );
}


// --- Reusable Components for clean structure ---

// function MetricHighlight({ label, value }: { label: string; value: string }) {
//     return (
//         <div>
//             <p className="text-4xl sm:text-5xl font-extrabold text-blue-600">{value}</p>
//             <p className="mt-2 text-base font-medium text-slate-500">{label}</p>
//         </div>
//     );
// }

function Section({ icon, title, subtitle, children }: {
    icon: React.ReactNode;
    title: string;
    subtitle?: string; // Corrected: subtitle is now optional
    children: React.ReactNode;
}) {
    return (
        <section>
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
                    {subtitle && <p className="mt-1 text-lg text-slate-500">{subtitle}</p>}
                </div>
            </div>
            <div className="mt-8 pl-4 border-l-2 border-slate-200">
                {children}
            </div>
        </section>
    );
}

function NetZeroCard({ title, content }: { title: string; content: string }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h4 className="text-xl font-bold text-slate-800">{title}</h4>
            <p className="mt-2 text-slate-600">{content}</p>
        </div>
    );
}
