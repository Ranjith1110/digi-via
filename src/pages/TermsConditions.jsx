import React from 'react';
import {
    BookOpen,
    BookText,
    ShieldAlert,
    UserCheck,
    CreditCard,
    Lock,
    Copyright,
    Link,
    AlertTriangle,
    Scale,
    RefreshCw,
    Mail
} from 'lucide-react';

const TermsConditions = () => {
    const lastUpdated = "February 2026";

    const sections = [
        {
            id: "introduction",
            icon: BookOpen,
            title: "Introduction",
            subtitle: "Welcome to Digi-Via",
            content: [
                "These Terms and Conditions govern your use of our website and services. By accessing or using Digi-Via, you agree to comply with these terms."
            ],
            alert: {
                title: "Important Notice",
                text: "If you do not agree with these terms, please refrain from using our services. Your continued use constitutes acceptance of all terms and conditions outlined here."
            }
        },
        {
            id: "definitions",
            icon: BookText,
            title: "Definitions",
            subtitle: "Key terms explained",
            content: [
                "• \"Company,\" \"we,\" \"our,\" or \"us\" refers to Digi-Via.",
                "• \"User,\" \"you,\" or \"your\" refers to any individual or entity using our services.",
                "• \"Services\" refer to the digital solutions provided by Digi-Via."
            ]
        },
        {
            id: "use-of-services",
            icon: ShieldAlert,
            title: "Use of Services",
            subtitle: "Guidelines for service usage",
            content: [
                "You must be at least 18 years old to use our services.",
                "You agree to use our services only for lawful purposes and not to engage in any activity that disrupts or harms our platform.",
                "Unauthorized access, data mining, or any attempt to compromise the security of our systems is strictly prohibited."
            ],
            alert: {
                title: "Security Notice",
                text: "Any violation of these usage terms may result in immediate suspension or termination of your account without prior notice."
            }
        },
        {
            id: "user-accounts",
            icon: UserCheck,
            title: "User Accounts",
            subtitle: "Account responsibilities",
            content: [
                "You are responsible for maintaining the confidentiality of your account credentials.",
                "Any activity under your account is your responsibility, and you must notify us immediately of any unauthorized access.",
                "We reserve the right to suspend or terminate accounts that violate our terms."
            ]
        },
        {
            id: "payment",
            icon: CreditCard,
            title: "Payment & Subscription",
            subtitle: "Billing information",
            content: [
                "Certain features of our services require payment. By subscribing, you agree to our pricing and payment terms.",
                "Payments are non-refundable except as required by applicable law.",
                "We reserve the right to modify pricing at any time, with prior notice to active subscribers."
            ]
        },
        {
            id: "data-privacy",
            icon: Lock,
            title: "Data Privacy",
            subtitle: "Your data protection",
            content: [
                "Our Privacy Policy governs the collection and use of your data. By using our services, you consent to our data practices."
            ],
            alert: {
                title: "Data Protection Commitment",
                text: "We are committed to protecting your personal information and maintaining transparency in how we collect, use, and store your data."
            }
        },
        {
            id: "intellectual-property",
            icon: Copyright,
            title: "Intellectual Property",
            subtitle: "Content ownership",
            content: [
                "All content, trademarks, and intellectual property on Digi-Via are owned by us or our licensors.",
                "Users may not copy, modify, distribute, or commercially exploit any content without permission."
            ]
        },
        {
            id: "third-party",
            icon: Link,
            title: "Third-Party Services",
            subtitle: "External links and services",
            content: [
                "Our platform may contain links to third-party websites. We are not responsible for the content or practices of these sites."
            ]
        },
        {
            id: "liability",
            icon: AlertTriangle,
            title: "Limitation of Liability",
            subtitle: "Service warranties",
            content: [
                "We provide services on an \"as is\" basis without warranties of any kind.",
                "We are not liable for any direct, indirect, or consequential damages arising from the use of our services."
            ]
        },
        {
            id: "indemnification",
            icon: ShieldAlert,
            title: "Indemnification",
            subtitle: "User obligations",
            content: [
                "You agree to indemnify and hold us harmless from any claims, damages, or expenses resulting from your use of our services."
            ]
        },
        {
            id: "modification",
            icon: RefreshCw,
            title: "Modification",
            subtitle: "Updates to these terms",
            content: [
                "We reserve the right to update these terms at any time. Continued use of our services after modifications constitutes acceptance of the updated terms."
            ]
        },
        {
            id: "governing-law",
            icon: Scale,
            title: "Governing Law",
            subtitle: "Jurisdiction and disputes",
            content: [
                "These terms are governed by the laws of India.",
                "Any disputes shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996."
            ]
        },
        {
            id: "contact",
            icon: Mail,
            title: "Contact",
            subtitle: "Get in touch",
            content: [
                "For any questions regarding these Terms and Conditions, please contact us at:",
                "Email: contact.digivia@gmail.com"
            ]
        }
    ];

    return (
        <section className="bg-white text-slate-900 py-24 px-6 relative overflow-hidden min-h-screen mt-14">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#005d30]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ff751f]/5 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <div data-aos="fade-down" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#ff751f]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Legal Framework</span>
                    </div>
                    <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
                        Terms & <br />
                        <span className="text-[#005d30] italic font-serif">Conditions.</span>
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-slate-500 font-medium uppercase tracking-widest text-xs">
                        Last Updated: {lastUpdated}
                    </p>
                </div>

                {/* Content Blocks */}
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <div
                            key={section.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 50 > 500 ? 0 : index * 50} // Caps delay so bottom items don't take forever
                            className="bg-[#fcfcfc] border border-slate-100 p-8 md:p-12 rounded-[40px] hover:border-[#ff751f]/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group"
                        >
                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#ff751f] transition-colors duration-500">
                                    <section.icon className="w-5 h-5 text-[#ff751f] group-hover:text-white transition-colors" />
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
                                {section.content.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-slate-600 font-medium leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Highlighted Alerts (Important Notice, Security Notice, etc.) */}
                            {section.alert && (
                                <div className="mt-8 ml-0 md:ml-18 p-6 border-l-4 border-[#ff751f] bg-slate-50 rounded-r-2xl">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">
                                        {section.alert.title}
                                    </h4>
                                    <p className="text-sm font-medium text-slate-600 leading-relaxed italic">
                                        "{section.alert.text}"
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Acknowledgment */}
                <div data-aos="zoom-in" className="mt-20 p-12 text-center rounded-[40px] bg-slate-900 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black mb-4">Have Legal Questions?</h2>
                        <p className="text-slate-400 font-medium mb-8">
                            Reach out to our compliance team for any clarifications regarding our terms.
                        </p>
                        <a
                            href="mailto:contact.digivia@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ff751f] text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform"
                        >
                            <Mail size={16} />
                            Contact Support
                        </a>
                    </div>
                    {/* Ghost Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none">
                        DIGI-VIA
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TermsConditions;