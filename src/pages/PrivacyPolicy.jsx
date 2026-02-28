import React from 'react';
import {
    Shield,
    Building,
    Database,
    HardDrive,
    Lock,
    Cookie,
    UserCog,
    RefreshCcw,
    Mail,
    CheckCircle2
} from 'lucide-react';

const PrivacyPolicy = () => {
    const lastUpdated = "01-02-2025";

    const sections = [
        {
            id: "general-info",
            icon: Building,
            title: "General Information",
            subtitle: "Company details",
            content: [
                "Company Name: Digi-Via Pvt. Ltd.",
                "Legal Representative: Sabari S - Founder & Director",
                "Contact Details: contact.digivia@gmail.com"
            ]
        },
        {
            id: "data-collection",
            icon: Database,
            title: "Data Collection & Usage",
            subtitle: "What we collect and why",
            lists: [
                {
                    header: "Types of Data Collected",
                    items: [
                        "Contact Information (Name, Email, Phone Number)",
                        "IP Address and System Details",
                        "Usage and Diagnostic Data",
                        "Login Credentials (only for authentication purposes)"
                    ]
                },
                {
                    header: "Purpose of Data Processing",
                    items: [
                        "Contract initiation and fulfillment (Legal Basis: Section 43A of the IT Act)",
                        "Providing digital solutions and services",
                        "Security, fraud prevention, and compliance",
                        "Communication and support"
                    ]
                },
                {
                    header: "Data Recipients",
                    items: [
                        "Government authorities as per legal requirements",
                        "Third-party service providers for operational needs",
                        "Other parties with explicit user consent"
                    ]
                }
            ]
        },
        {
            id: "transfer-retention",
            icon: HardDrive,
            title: "Transfer & Retention",
            subtitle: "Data storage policies",
            content: [
                "Transfer to Third Countries: Data may be transferred outside India in compliance with applicable regulations, including contractual safeguards.",
                "Duration of Retention: Personal data is retained for as long as required by statutory obligations, typically up to 10 years."
            ]
        },
        {
            id: "data-security",
            icon: Lock,
            title: "Data Security",
            subtitle: "How we protect you",
            content: [
                "Security Measures: We implement robust technical and organizational measures to safeguard personal data from unauthorized access, data breaches, and cyber threats. Security measures are regularly updated to comply with the latest standards."
            ]
        },
        {
            id: "service-info",
            icon: Cookie,
            title: "Service Info",
            subtitle: "Cookies & Third parties",
            content: [
                "Cookies: We use cookies to enhance user experience and track performance. You may manage preferences through browser settings.",
                "Marketing: By opting into our newsletter, you agree to receive communications. You can unsubscribe anytime via the link in each email.",
                "External Services: We integrate services like Calendly, HubSpot, and Google Analytics. Data shared with these platforms is processed per their privacy policies."
            ]
        },
        {
            id: "user-rights",
            icon: UserCog,
            title: "User Rights",
            subtitle: "Your legal rights",
            content: [
                "As per Indian data protection laws, you have the following rights:"
            ],
            lists: [
                {
                    header: "To exercise these rights, contact us at contact.digivia@gmail.com",
                    items: [
                        "Right to Access and Review Data",
                        "Right to Rectification",
                        "Right to Withdraw Consent",
                        "Right to Data Portability (where applicable)",
                        "Right to Lodge a Complaint with Relevant Authorities"
                    ]
                }
            ]
        },
        {
            id: "updates",
            icon: RefreshCcw,
            title: "Updates",
            subtitle: "Policy changes",
            content: [
                "We may update this policy periodically. Any changes will be posted on our website with an updated effective date."
            ]
        }
    ];

    return (
        <section className="bg-white text-slate-900 py-24 px-6 relative overflow-hidden min-h-screen mt-14">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#005d30]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#ff751f]/5 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <div data-aos="fade-down" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#005d30]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Data Protection</span>
                    </div>
                    <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
                        Privacy <br />
                        <span className="text-[#005d30] italic font-serif">Policy.</span>
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-slate-500 font-medium uppercase tracking-widest text-xs">
                        Last Updated: {lastUpdated}
                    </p>
                </div>

                {/* Introduction Callout */}
                <div data-aos="fade-up" data-aos-delay="150" className="mb-12 p-8 md:p-10 border-l-4 border-[#005d30] bg-slate-50 rounded-r-[30px] shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <Shield className="text-[#005d30] w-8 h-8" />
                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Your Data Protection Commitment</h2>
                    </div>
                    <p className="text-slate-600 font-medium leading-relaxed">
                        At <span className="font-bold text-slate-900">Digi-Via</span>, protecting your personal data is our top priority. We strictly adhere to Indian data protection laws, including the <span className="text-[#ff751f] font-bold">Information Technology Act, 2000</span>, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                    </p>
                    <p className="text-slate-500 text-sm mt-4 font-medium italic">
                        Below is an overview of our privacy policy governing our digital services and solutions.
                    </p>
                </div>

                {/* Content Blocks */}
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <div
                            key={section.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 50 > 500 ? 0 : index * 50}
                            className="bg-[#fcfcfc] border border-slate-100 p-8 md:p-12 rounded-[40px] hover:border-[#005d30]/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group"
                        >
                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#005d30] transition-colors duration-500">
                                    <section.icon className="w-5 h-5 text-[#005d30] group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
                                        {section.title}
                                    </h2>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        {section.subtitle}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 pl-0 md:pl-18">
                                {/* Render Paragraphs */}
                                {section.content && section.content.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-slate-600 font-medium leading-relaxed">
                                        {/* Auto-bolding strings before colons for better readability */}
                                        {paragraph.includes(':') ? (
                                            <>
                                                <strong className="text-slate-900">{paragraph.split(':')[0]}:</strong>
                                                {paragraph.substring(paragraph.indexOf(':') + 1)}
                                            </>
                                        ) : (
                                            paragraph
                                        )}
                                    </p>
                                ))}

                                {/* Render Nested Lists (Like Data Collection types) */}
                                {section.lists && section.lists.map((list, lIndex) => (
                                    <div key={lIndex} className="mt-6">
                                        <h4 className="text-sm font-black text-slate-900 mb-4">{list.header}</h4>
                                        <div className="space-y-3">
                                            {list.items.map((item, iIndex) => (
                                                <div key={iIndex} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-4 h-4 text-[#ff751f] shrink-0 mt-0.5" />
                                                    <span className="text-slate-600 font-medium text-sm leading-relaxed">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Acknowledgment / Contact */}
                <div data-aos="zoom-in" className="mt-20 p-12 text-center rounded-[40px] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black mb-4">Privacy Concerns?</h2>
                        <p className="text-slate-400 font-medium mb-8 max-w-lg mx-auto">
                            If you have queries regarding your data or wish to exercise your rights, our data protection team is ready to assist you.
                        </p>
                        <a
                            href="mailto:contact.digivia@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#005d30] text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[#ff751f] transition-colors"
                        >
                            <Mail size={16} />
                            contact.digivia@gmail.com
                        </a>
                    </div>
                    {/* Ghost Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none">
                        SECURE
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PrivacyPolicy;