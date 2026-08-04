export interface ChatOption {
  id: string;
  label: string;
  response: string | React.ReactNode;
  followUpIds?: string[];
  type?: 'text' | 'link' | 'mailto';
}

export interface ChatKeyword {
  keywords: string[];
  responseId: string;
  weight?: number;
}

export const CHATBOT_WELCOME_MESSAGE = "Welcome to **ES-CR**! I am your virtual assistant.\n\nI can help you explore our full range of **CRO services**, learn about our team and mission, navigate the website, or connect you directly with our experts.\n\nFeel free to select a topic below or type your question — I'm here to guide you.";

export const CHATBOT_FALLBACK_MESSAGE = "Thank you for your message. I may not have a specific answer for that, but I can still help you navigate the site.\n\nHere are a few things I can assist you with:\n\n- Explore our **7 specialized CRO services**\n\n- Learn about **who we are** and our mission\n\n- Send you to the **Contact page** to schedule a meeting\n\n- Answer **frequently asked questions** about ES-CR\n\nWhat would you like to do?";

// ───────── Full Response Database ─────────
export const CHATBOT_DATABASE: Record<string, ChatOption> = {

  // ══════════════════ MAIN MENU ══════════════════
  "main_menu": {
    id: "main_menu",
    label: "Main Menu",
    response: "Here are the main topics I can help you with.\n\nPick one, or type your own question:",
    followUpIds: ["services", "about", "contact", "training", "blog", "careers", "faq"]
  },

  // ══════════════════ SERVICES OVERVIEW ══════════════════
  "services": {
    id: "services",
    label: "Our Services",
    response: "**ES-CR** is a Contract Research Organization offering **7 specialized services** to support pharmaceutical and biotechnology companies throughout the drug development lifecycle:\n\n• **Clinical Studies** — Phase I to III trial management\n\n• **Pharmacoeconomic Studies** — Value assessment & cost-effectiveness\n\n• **Patient Support Program** — Treatment adherence & patient guidance\n\n• **Real-World Evidence** — Phase IV, observational & epidemiological studies\n\n• **Medical Writing** — Scientific publications & editorial quality\n\n• **Expert Support** — Advisory boards & KOL engagement\n\n• **Training** — INEAS-accredited professional development\n\nEach service has its own dedicated page with full details.\n\nWhich one would you like to explore?",
    followUpIds: ["clinical_studies", "pharmacoeconomic", "patient_support", "rwe", "medical_writing", "expert_support", "training", "link_services"]
  },

  // ══════════════════ CLINICAL STUDIES ══════════════════
  "clinical_studies": {
    id: "clinical_studies",
    label: "Clinical Studies",
    response: "**Clinical Studies** is one of our core services.\n\nESCR supports **Phase I, II and III studies** through structured planning, operational coordination and regulatory alignment.\n\nOur activities include:\n\n• Protocol development and site identification\n\n• Study start-up support and monitoring\n\n• Data quality oversight throughout study conduct\n\n• Regulatory management and compliance review\n\n• Clinical operations and site management\n\n• Data management and biostatistics\n\n• Final report and pharmacovigilance\n\nWorking with investigators and sponsors, we contribute to study continuity, timeline follow-up, and generation of clinical evidence supporting development decisions.\n\nWant to discuss your project with our clinical operations team? Visit the **Clinical Studies page** for full details, or schedule a meeting.",
    followUpIds: ["link_clinical_studies", "contact", "services", "main_menu"]
  },

  // ══════════════════ PHARMACOECONOMIC ══════════════════
  "pharmacoeconomic": {
    id: "pharmacoeconomic",
    label: "Pharmacoeconomic Studies",
    response: "**Pharmacoeconomic Studies** help turn data into healthcare decisions.\n\nES-CR translates clinical and economic data into evidence supporting market access and planning activities.\n\nOur key capabilities include:\n\n• **Value Dossiers** — Synthesizing clinical evidence and economics for market access\n\n• **Descriptive Cost Studies** — Quantifying the economic burden of diseases\n\n• **Cost-Effectiveness Modeling** — Supporting health technology assessment\n\n• **Budget Impact Analysis** — Forecasting resource allocation consequences\n\n• **Local Adaptation of Global Models** — Adjusting international models for regional relevance\n\nVisit the **Pharmacoeconomic Studies page** for complete details, or contact our team directly.",
    followUpIds: ["link_pharmacoeconomic", "contact", "services", "main_menu"]
  },

  // ══════════════════ PATIENT SUPPORT ══════════════════
  "patient_support": {
    id: "patient_support",
    label: "Patient Support Program",
    response: "**Patient Support Program (PSP)** is designed to improve engagement, adherence, and treatment continuity.\n\nOur approach combines education, follow-up, logistical assistance, and clear communication pathways.\n\nThe program includes:\n\n• **Patient Education & Training** — Helping patients understand their treatment\n\n• **Adherence Support** — Follow-up plans to strengthen treatment continuity\n\n• **Logistical Assistance (Call Center)** — Accessible support for questions and scheduling\n\n• **Public Information** — Awareness materials for the broader public\n\n• **Program Coordination** — Managing workflows, documentation and communication\n\nVisit the **Patient Support page** for more, or schedule a meeting with our team.",
    followUpIds: ["link_patient_support", "contact", "services", "main_menu"]
  },

  // ══════════════════ REAL-WORLD EVIDENCE ══════════════════
  "rwe": {
    id: "rwe",
    label: "Real-World Evidence",
    response: "**Real-World Evidence (RWE)** captures the full patient journey outside of controlled clinical trials.\n\nThrough Phase IV studies, observational research, patient registries, surveys, and pharmaco-epidemiological analyses, we generate data based on real-world conditions.\n\nOur RWE services include:\n\n• **Phase IV Studies** — Treatment effectiveness and safety in real-world settings\n\n• **Observational Studies** — Capturing patient pathways and treatment patterns\n\n• **Patient Registries** — Long-term outcome evaluation and trend monitoring\n\n• **Patient Surveys & Questionnaires** — Capturing patient perceptions and behaviours\n\n• **Pharmaco-epidemiology & RMP** — Epidemiological analyses and risk mitigation\n\nOur approach supports patient safety monitoring and informs public health policies.\n\nVisit the **RWE page** for full details, or reach out to discuss your needs.",
    followUpIds: ["link_rwe", "contact", "services", "main_menu"]
  },

  // ══════════════════ MEDICAL WRITING ══════════════════
  "medical_writing": {
    id: "medical_writing",
    label: "Medical Writing",
    response: "**Medical Writing** turns complex data into clear, accurate, and impactful scientific content.\n\nOur team supports publications, communications, white papers, and conference materials with rigorous methodology and precise editorial standards.\n\nOur services include:\n\n• **Scientific Communication Management** — Publications aligned with international guidelines\n\n• **Publication Strategy** — Journal selection and timeline coordination\n\n• **Scientific & White Paper Writing** — Rigorous methodology and scientific credibility\n\n• **Presentation & Conference Materials** — Posters, slides, and key insight communication\n\n• **Editorial Review & Quality Control** — Accuracy, coherence, and language quality\n\nVisit the **Medical Writing page** for full details, or contact us for your project.",
    followUpIds: ["link_medical_writing", "contact", "services", "main_menu"]
  },

  // ══════════════════ EXPERT SUPPORT ══════════════════
  "expert_support": {
    id: "expert_support",
    label: "Expert Support",
    response: "**Expert Support** enhances your scientific strategy through structured expert engagement.\n\nWe provide scientific expertise and support the organization of advisory boards through coordinated communication processes.\n\nOur capabilities include:\n\n• **Advisory Board Management** — Structured discussions and efficient communication\n\n• **Expert Identification & Engagement** — Selecting the most qualified participants\n\n• **Recommendation Synthesis** — Compiling expert opinions into actionable summaries\n\n• **Health Care Professional Support** — Practical organization and documentation\n\n• **Scientific Content Preparation** — Briefing materials that support productive sessions\n\n• **Scientific Publications** — Abstract and manuscript writing with full submission management\n\nVisit the **Expert Support page** for more, or schedule a consultation.",
    followUpIds: ["link_expert_support", "contact", "services", "main_menu"]
  },

  // ══════════════════ TRAINING ══════════════════
  "training": {
    id: "training",
    label: "Training",
    response: "**Training** programs at ES-CR build professional competencies in clinical research.\n\nOur modules combine theoretical foundations with practical applications, tailored to professionals and future experts.\n\nOur training catalog includes:\n\n• **Clinical Trials & GCP** — Fundamentals, regulatory requirements, study design, patient safety\n\n• **Specialized Professional Courses** — For CRAs, coordinators, investigators, and medical teams\n\n• **Pharmacovigilance in Clinical Trials** — Safety reporting and regulatory expectations\n\n• **Data Management & Biostatistics** — Data handling, validation, and statistical interpretation\n\n• **Scientific Writing & Communication** — Critical reading, writing, and scientific exchange\n\n• **Accredited Training Sessions (INEAS)** — Validated pathways with certified instructors\n\n• **Distance & In-Person Learning** — Flexible formats maintaining consistent quality\n\nVisit the **Training page** for the full catalog, or contact us to schedule a session for your team.",
    followUpIds: ["link_training", "contact", "services", "main_menu"]
  },

  // ══════════════════ CONTACT ══════════════════
  "contact": {
    id: "contact",
    label: "Contact Us",
    response: "Here is how you can reach the **ES-CR** team:\n\n**Email**: contact@esclinical.com\n\n**Phone**: +213 20 33 91 20\n\n**Address**: 76, Coop Mina Benhaddadi Dar Diaf, Cheraga, Algiers, Algeria\n\n**Hours**: Sunday to Thursday, 9 AM to 5 PM\n\nOur team typically responds within 24 business hours.\n\nYou can also visit our **Contact page** to fill out an inquiry form, or send us an email directly.\n\nWe handle inquiries related to: *General Inquiry, Request a Quote, Project Consultation, Partnership Opportunity, and Career Applications*.",
    followUpIds: ["link_contact", "direct_email", "main_menu"]
  },

  // ══════════════════ ABOUT ══════════════════
  "about": {
    id: "about",
    label: "About ES-CR",
    response: "**ES-CR** is a leading Algerian Contract Research Organization (CRO).\n\n**Our Mission**: We act as an operational partner and a link between all stakeholders, supporting the management of clinical studies in line with protocols, regulatory requirements, and timelines.\n\n**Our Story**: Our story began with the meeting of a founding team from clinical research and the healthcare sector, who shared a common vision — built around one idea: *improving patient care*.\n\n**Our DNA** — The values that drive everything we do:\n\n• Ethical Integrity & Transparency\n\n• Expert Sharing & Communication\n\n• Reliability & Proactivity\n\n• Secure Confidentiality & Trust\n\n**Our Impact**: 2+ years of experience, 12+ clinical studies, 15+ trusted partners, 500+ patients managed, and 37+ scientific publications.\n\nWant to learn more? Visit the **About page**, explore our **Services**, or meet our team.",
    followUpIds: ["link_about", "services", "team", "contact", "main_menu"]
  },

  // ══════════════════ TEAM ══════════════════
  "team": {
    id: "team",
    label: "Our Team",
    response: "The ES-CR team is led by experienced professionals in clinical research and healthcare:\n\n• **Fayçal CHALAL** — Founder & CEO\n\n• **Dr. Meriem HEDIBEL** — Co-Founder & Clinical Operation Director\n\n• **Dr. Tarik MEBARKI** — Medical Director\n\n• **Mr. Samy BEKRAR** — Project Lead & CRA\n\nYou can view their full profiles and LinkedIn pages on our **About page**.\n\nWant to join our team? Check the **Careers** section or send us your application.",
    followUpIds: ["link_about", "careers", "contact", "main_menu"]
  },

  // ══════════════════ CAREERS ══════════════════
  "careers": {
    id: "careers",
    label: "Careers",
    response: "We are always looking for passionate professionals to join the ES-CR team!\n\nTo apply for an opening or submit a spontaneous application, send your **CV** and cover letter to **contact@esclinical.com** with the subject line *\"Career Application\"*.\n\nYou can also use our **Contact page** and select *\"Career / Job Application\"* as the subject.\n\nWe offer opportunities across clinical operations, medical writing, pharmacovigilance, data management, and more.",
    followUpIds: ["link_contact", "direct_email", "about", "main_menu"]
  },

  // ══════════════════ BLOG ══════════════════
  "blog": {
    id: "blog",
    label: "Blog & Insights",
    response: "Our **Blog** section features scientific articles and industry insights published by the ES-CR team.\n\nYou'll find content on topics like clinical research developments, industry best practices, and scientific publications.\n\nVisit the **Blog page** to read our latest articles.",
    followUpIds: ["link_blog", "services", "main_menu"]
  },

  // ══════════════════ FAQ ══════════════════
  "faq": {
    id: "faq",
    label: "FAQ",
    response: "Here are some frequently asked questions:\n\n**What is a CRO?**\nA Contract Research Organization provides outsourced research services to the pharmaceutical and biotech industry — from study design to final reporting.\n\n**Where is ES-CR located?**\n76, Coop Mina Benhaddadi Dar Diaf, Cheraga, Algiers, Algeria.\n\n**What services do you offer?**\nWe offer 7 services: Clinical Studies, Pharmacoeconomic Studies, Patient Support, Real-World Evidence, Medical Writing, Expert Support, and Training.\n\n**Do you work with international sponsors?**\nYes. We act as a link between all stakeholders and follow international standards (ICH-GCP).\n\n**Are your training programs accredited?**\nYes. Our programs are accredited by **INEAS** and delivered by certified instructors.\n\n**How can I contact you?**\nEmail: contact@esclinical.com | Phone: +213 20 33 91 20\n\nHave another question? Just type it or visit our Contact page.",
    followUpIds: ["contact", "services", "about", "main_menu"]
  },

  // ══════════════════ NAVIGATION LINKS ══════════════════
  "link_services": {
    id: "link_services",
    label: "Visit Services Page",
    response: "nav:/services"
  },
  "link_clinical_studies": {
    id: "link_clinical_studies",
    label: "Visit Clinical Studies Page",
    response: "nav:/services/clinical-studies"
  },
  "link_pharmacoeconomic": {
    id: "link_pharmacoeconomic",
    label: "Visit Pharmacoeconomic Page",
    response: "nav:/services/pharmacoeconomic-studies"
  },
  "link_patient_support": {
    id: "link_patient_support",
    label: "Visit Patient Support Page",
    response: "nav:/services/patient-support-program"
  },
  "link_rwe": {
    id: "link_rwe",
    label: "Visit RWE Page",
    response: "nav:/services/real-world-evidence"
  },
  "link_medical_writing": {
    id: "link_medical_writing",
    label: "Visit Medical Writing Page",
    response: "nav:/services/medical-writing"
  },
  "link_expert_support": {
    id: "link_expert_support",
    label: "Visit Expert Support Page",
    response: "nav:/services/expert-support"
  },
  "link_training": {
    id: "link_training",
    label: "Visit Training Page",
    response: "nav:/services/training"
  },
  "link_contact": {
    id: "link_contact",
    label: "Go to Contact Page",
    response: "nav:/contact"
  },
  "link_about": {
    id: "link_about",
    label: "Go to About Page",
    response: "nav:/about"
  },
  "link_blog": {
    id: "link_blog",
    label: "Go to Blog Page",
    response: "nav:/blog"
  },
  "direct_email": {
    id: "direct_email",
    label: "Send Email Directly",
    response: "mailto:contact@esclinical.com?subject=[ES-CR Chatbot] Information Request",
    type: 'mailto'
  },

  // ══════════════════ GREETINGS ══════════════════
  "greeting": {
    id: "greeting",
    label: "Hello",
    response: "Hello! Welcome to **ES-CR**.\n\nI'm your virtual assistant, here to help you navigate the website and learn about our services.\n\nWhether you need information about a specific service, want to reach our team, or just need a quick answer — I'm here for you.\n\nHow can I help you today?",
    followUpIds: ["services", "about", "contact", "faq"]
  },

  // ══════════════════ CATCH-ALL CATEGORIES ══════════════════
  "pricing": {
    id: "pricing",
    label: "Pricing",
    response: "Pricing for our services is tailored to each project based on scope, complexity, and requirements.\n\nFor a personalized quote, I recommend visiting our **Contact page** and selecting *\"Request a Quote\"* as the subject.\n\nOur team will get back to you within 24 hours with all the details.\n\nYou can also send a direct email to **contact@esclinical.com**.",
    followUpIds: ["link_contact", "direct_email", "services", "main_menu"]
  },
  "location": {
    id: "location",
    label: "Location",
    response: "**ES-CR** is located at:\n\n**76, Coop Mina Benhaddadi Dar Diaf, Cheraga, Algiers, Algeria**\n\nOur offices are open **Sunday to Thursday, 9 AM to 5 PM**.\n\nYou can find the exact location on the interactive map on our **Contact page**.\n\nWant me to take you there?",
    followUpIds: ["link_contact", "contact", "main_menu"]
  },
  "hours": {
    id: "hours",
    label: "Working Hours",
    response: "Our offices are open:\n\n**Sunday to Thursday, 9 AM to 5 PM**\n\nIf you reach out outside of these hours, our team will respond within 24 business hours.\n\nNeed to get in touch? Visit our **Contact page** or send us an email.",
    followUpIds: ["link_contact", "direct_email", "main_menu"]
  },
  "partnership": {
    id: "partnership",
    label: "Partnership",
    response: "We are open to strategic partnerships with pharmaceutical laboratories, biotech companies, academic institutions, and other CROs.\n\nIf you're interested in collaboration, you can reach us through our **Contact page** and select *\"Partnership Opportunity\"* as the subject.\n\nOur team will be happy to discuss co-development, joint research, or regional expertise sharing.",
    followUpIds: ["link_contact", "about", "main_menu"]
  },
  "linkedin": {
    id: "linkedin",
    label: "LinkedIn",
    response: "You can follow **ES-CR** on LinkedIn to stay updated on our latest news, job openings, and scientific publications:\n\n**linkedin.com/company/es-clinical-research**\n\nYou'll also find individual team member profiles on our **About page**.",
    followUpIds: ["link_about", "main_menu"]
  },
  "legal": {
    id: "legal",
    label: "Legal & Privacy",
    response: "You can access our legal documentation at any time:\n\n• **Terms of Use** — Rules and conditions for using our website\n\n• **Privacy Policy** — How we collect and protect your data\n\n• **Legal Notice** — Company registration and legal information\n\nAll three are accessible from the footer of every page on our website.",
    followUpIds: ["services", "contact", "main_menu"]
  },
  "random_thanks": {
    id: "random_thanks",
    label: "Thanks",
    response: "You're welcome! I'm glad I could help.\n\nIf you have any other questions or need assistance navigating the website, feel free to ask anytime.\n\nI'm always here.\n\nHere are some quick shortcuts if you need them:",
    followUpIds: ["services", "contact", "about", "main_menu"]
  },
  "random_bye": {
    id: "random_bye",
    label: "Goodbye",
    response: "Thank you for chatting with me! It was a pleasure helping you.\n\nIf you ever need assistance in the future, just click the assistant button — I'll be right here.\n\nHave a great day!",
    followUpIds: ["services", "contact", "main_menu"]
  },

  // ══════════════════ ADVANCED CATCH-ALL — SMART RESPONSES ══════════════════

  // Language / Multilingual
  "language": {
    id: "language",
    label: "Languages",
    response: "The ES-CR website is currently available in **English**.\n\nA **French version** is coming soon — our language selector is already available in the navigation bar and will be activated shortly.\n\nIn the meantime, feel free to type your questions in French or English — I can understand both!",
    followUpIds: ["services", "contact", "main_menu"]
  },

  // Who are you / AI question
  "who_are_you": {
    id: "who_are_you",
    label: "Who are you?",
    response: "I am the **ES-CR Assistant**, the official virtual assistant of ES-CR.\n\nI'm here to help you:\n\n• Navigate the website and find information quickly\n\n• Learn about our **7 CRO services** in detail\n\n• Connect you with our team via the **Contact page**\n\n• Answer frequently asked questions\n\nI'm not a general-purpose AI — I'm specifically designed to assist visitors of this website.\n\nHow can I help you today?",
    followUpIds: ["services", "about", "contact", "faq"]
  },

  // Pharmaceutical / Drug questions
  "pharma_general": {
    id: "pharma_general",
    label: "Pharma",
    response: "**ES-CR** works with pharmaceutical and biotechnology companies across the entire drug development lifecycle.\n\nOur services cover:\n\n• **Pre-market** — Clinical trials (Phase I–III), value dossiers, expert engagement\n\n• **Post-market** — Real-world evidence, pharmacovigilance, patient registries\n\n• **Support** — Medical writing, patient programs, training\n\nWould you like to explore a specific service, or discuss your project with our team?",
    followUpIds: ["services", "contact", "main_menu"]
  },

  // Algeria / Region specific
  "algeria_specific": {
    id: "algeria_specific",
    label: "Algeria",
    response: "**ES-CR** is headquartered in **Algiers, Algeria** and serves as a strategic CRO partner for the local and regional market.\n\nWe operate from:\n\n**76, Coop Mina Benhaddadi Dar Diaf, Cheraga, Algiers, Algeria**\n\nOur team combines in-depth knowledge of local regulatory frameworks with international standards (ICH-GCP) to support clinical research across the region.\n\nWant to learn more about how we work in this market?",
    followUpIds: ["about", "contact", "services", "main_menu"]
  },

  // GCP / Regulatory questions
  "regulatory": {
    id: "regulatory",
    label: "Regulatory & GCP",
    response: "**ES-CR** operates in full compliance with international regulatory standards.\n\nOur work follows:\n\n• **ICH-GCP** (Good Clinical Practice) — the international ethical and scientific quality standard for clinical trials\n\n• **Local regulatory requirements** — Algerian and regional compliance frameworks\n\n• **Pharmacovigilance regulations** — Safety reporting and risk management\n\nNeed more details? Our **Clinical Studies** and **Training** pages cover regulatory topics in depth.\n\nYou can also contact our team for specific regulatory questions.",
    followUpIds: ["clinical_studies", "training", "contact", "main_menu"]
  },

  // Compliments / Positive feedback
  "compliment": {
    id: "compliment",
    label: "Compliment",
    response: "Thank you so much for the kind words! That truly means a lot.\n\nOur team works hard to deliver the highest quality in everything we do — from clinical research to this very website.\n\nIf there's anything else I can help you with, don't hesitate to ask!",
    followUpIds: ["services", "about", "main_menu"]
  },

  // Frustration / Negative feedback
  "frustration": {
    id: "frustration",
    label: "Help",
    response: "I'm sorry you're having trouble — let me try to help.\n\nHere are the most common things I can do for you:\n\n• **Explore our services** — Learn what ES-CR offers in clinical research\n\n• **Find our contact info** — Email, phone, and address\n\n• **Navigate the site** — I can send you directly to any page\n\n• **Answer common questions** — FAQ section with key information\n\nTry typing what you're looking for in simple terms, and I'll do my best to find it.\n\nOr you can always reach a human at **contact@esclinical.com**.",
    followUpIds: ["services", "contact", "faq", "main_menu"]
  },

  // Gibberish / Random input
  "gibberish": {
    id: "gibberish",
    label: "Help",
    response: "Hmm, I didn't quite catch that.\n\nYou can try asking me things like:\n\n• *\"What services do you offer?\"*\n\n• *\"Where are you located?\"*\n\n• *\"How can I contact ES-CR?\"*\n\n• *\"Tell me about clinical studies\"*\n\n• *\"I want a quote\"*\n\nOr simply click one of the buttons below to get started!",
    followUpIds: ["services", "contact", "about", "faq"]
  },

  // Website help / Navigation
  "website_help": {
    id: "website_help",
    label: "Website Help",
    response: "Sure! Here's a quick navigation guide to the ES-CR website:\n\n• **Home** — Overview of ES-CR, our DNA, and key achievements\n\n• **Services** — All 7 CRO services with individual detail pages\n\n• **About** — Our mission, story, values, and leadership team\n\n• **Blog** — Scientific articles and industry insights\n\n• **Contact** — Inquiry form, email, phone, and location map\n\nJust tell me which page you'd like to visit, and I'll take you there!",
    followUpIds: ["link_services", "link_about", "link_blog", "link_contact"]
  },

  // ICH / Standards related
  "standards": {
    id: "standards",
    label: "Standards",
    response: "**ES-CR** adheres to rigorous international standards:\n\n• **ICH-GCP** — International Conference on Harmonisation, Good Clinical Practice\n\n• **Local Regulatory Compliance** — Full alignment with Algerian health authority requirements\n\n• **Quality Management** — Data integrity, protocol compliance, and audit readiness\n\nOur **Training** programs also offer GCP certification courses accredited by **INEAS**.\n\nWould you like to explore our Clinical Studies or Training services?",
    followUpIds: ["clinical_studies", "training", "contact", "main_menu"]
  },

  // How does it work
  "how_it_works": {
    id: "how_it_works",
    label: "How it works",
    response: "Getting started with **ES-CR** is simple:\n\n**1.** Visit our **Contact page** or send an email to **contact@esclinical.com**\n\n**2.** Select the type of inquiry (Quote, Consultation, Partnership, etc.)\n\n**3.** Our team will review your request and respond within **24 business hours**\n\n**4.** We'll set up a meeting to discuss your project in detail\n\n**5.** From there, we tailor our services to your specific needs\n\nReady to take the first step?",
    followUpIds: ["link_contact", "direct_email", "services", "main_menu"]
  },

  // Difference between services
  "compare_services": {
    id: "compare_services",
    label: "Compare Services",
    response: "Great question! Here's a quick overview of what makes each service unique:\n\n• **Clinical Studies** → Running clinical trials (Phase I-III)\n\n• **Pharmacoeconomic** → Cost-effectiveness and market access modeling\n\n• **Patient Support** → Adherence programs and patient education\n\n• **Real-World Evidence** → Post-market studies and observational research\n\n• **Medical Writing** → Scientific publications and editorial services\n\n• **Expert Support** → Advisory boards and KOL management\n\n• **Training** → Professional development and GCP certification\n\nEach serves a different stage of the drug lifecycle.\n\nWhich one interests you the most?",
    followUpIds: ["clinical_studies", "pharmacoeconomic", "patient_support", "rwe", "medical_writing", "expert_support", "training"]
  },

  // Safety / Pharmacovigilance
  "safety": {
    id: "safety",
    label: "Safety & PV",
    response: "**Patient safety** is at the center of everything we do at ES-CR.\n\nWe integrate **pharmacovigilance** into every clinical study, ensuring:\n\n• Timely adverse event reporting\n\n• Risk management planning (RMP)\n\n• Regulatory safety compliance\n\n• Post-marketing surveillance through Real-World Evidence\n\nOur **Clinical Studies** and **RWE** teams work together to maintain the highest safety standards.\n\nWant to learn more about our approach?",
    followUpIds: ["clinical_studies", "rwe", "contact", "main_menu"]
  },

  // Data / Biostatistics
  "data_biostats": {
    id: "data_biostats",
    label: "Data & Biostats",
    response: "**Data management and biostatistics** are integral to our clinical operations.\n\nOur capabilities include:\n\n• Electronic data capture (EDC) system setup\n\n• Data validation and cleaning\n\n• Statistical analysis plans (SAP)\n\n• Interim and final statistical analyses\n\n• Clinical study reports (CSR)\n\nThese skills support both our **Clinical Studies** and **Training** services (where we offer dedicated biostatistics courses).\n\nWould you like to dive deeper into either area?",
    followUpIds: ["clinical_studies", "training", "contact", "main_menu"]
  }
};

export const CHATBOT_INITIAL_OPTIONS = ["services", "about", "contact", "faq"];

// ───────────── STOP WORDS (EN + FR) ─────────────
const STOP_WORDS = new Set([
  'i', 'want', 'to', 'the', 'a', 'an', 'is', 'are', 'was', 'were', 'can', 'you', 'me', 'it', 'tell', 'show',
  'je', 'veux', 'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'et', 'est', 'en', 'que', 'qui',
  'ce', 'cette', 'pour', 'avec', 'sur', 'par', 'pas', 'plus', 'nous', 'vous', 'ils', 'elles',
  'do', 'does', 'what', 'how', 'where', 'when', 'which', 'could', 'would', 'should',
  'please', 'ok', 'okay', 'your', 'my', 'our', 'their', 'its',
  'have', 'has', 'had', 'will', 'would', 'be', 'been', 'being', 'some', 'any', 'all', 'each',
  'more', 'most', 'just', 'very', 'also', 'too', 'so', 'if', 'but', 'or', 'and', 'not', 'no',
  'this', 'that', 'these', 'those', 'there', 'here', 'then', 'than', 'from', 'into', 'out',
  'up', 'down', 'at', 'by', 'above', 'below', 'between', 'through', 'during',
  'before', 'after', 'again', 'further', 'once', 'only', 'own', 'same', 'few', 'other',
  'sil', 'te', 'plait', 'svp', 'stp', 'pls', 'plz'
]);

// ───────────── GREETING / THANKS / BYE / FRUSTRATION PATTERNS ─────────────
const GREETING_PATTERNS = [
  'hello', 'hi', 'hey', 'bonjour', 'salut', 'bonsoir', 'good morning', 'good afternoon',
  'good evening', 'salam', 'yo', 'howdy', 'greetings', 'hola', 'ola', 'coucou',
  'wesh', 'bsr', 'bjr', 'sup', 'whats up', "what's up", 'allo', 'salaam',
  'assalamu', 'salam alaykom', 'alsalam', 'marhaba', 'ahlan'
];
const THANKS_PATTERNS = [
  'thanks', 'thank you', 'thx', 'merci', 'appreciate', 'ty', 'thank u', 'grateful',
  'shukran', 'choukran', 'merci beaucoup', 'thanks a lot', 'awesome thanks',
  'cool thanks', 'great thanks', 'perfect thanks', 'nice thank', 'thnx', 'tysm',
  'much appreciated', 'bien reçu', 'reçu', 'received'
];
const BYE_PATTERNS = [
  'bye', 'goodbye', 'see you', 'au revoir', 'ciao', 'bonne journée', 'later',
  'take care', 'bonne soirée', 'a plus', 'à plus', 'a bientot', 'à bientôt',
  'good night', 'bonne nuit', 'adieu', 'peace', 'bravo ciao', 'bye bye',
  'bsslama', 'beslama', 'tchao'
];
const COMPLIMENT_PATTERNS = [
  'great', 'awesome', 'amazing', 'excellent', 'fantastic', 'wonderful', 'perfect',
  'superbe', 'génial', 'genial', 'magnifique', 'bravo', 'bien joué', 'super',
  'cool', 'nice work', 'good job', 'well done', 'impressive', 'love it',
  'love this', 'beautiful', 'nice site', 'nice website', 'beau site'
];
const FRUSTRATION_PATTERNS = [
  'help me', 'i need help', 'aide moi', 'aidez moi', 'lost', 'confused', 'stuck',
  "don't understand", 'je comprends pas', 'pas compris', "doesn't work",
  'not working', 'broken', 'bug', 'error', 'problem', 'issue', 'problème',
  'ca marche pas', 'ça marche pas', 'cest nul', "c'est nul", 'nul',
  'useless', 'waste', 'horrible', 'terrible', 'bad', 'worst', 'stupid',
  'idk', "i don't know", 'je sais pas', 'no idea', 'aucune idée'
];
const WHO_ARE_YOU_PATTERNS = [
  'who are you', 'what are you', 'are you a robot', 'are you ai', 'are you human',
  'are you real', 'tu es qui', 'qui es tu', "c'est quoi", 'cest quoi',
  'what is this', "what's this", 'who is this', 'es tu un robot', 'robot',
  'artificial intelligence', 'intelligence artificielle', 'ia', 'chatbot',
  'tu fais quoi', 'what do you do', 'your name', 'ton nom', 'comment tu t appelles'
];
const HOW_IT_WORKS_PATTERNS = [
  'how does it work', 'how to start', 'comment ça marche', 'comment ca marche',
  'comment commencer', 'how to begin', 'how can i start', 'get started',
  'first step', 'premiere etape', 'onboarding', 'process',
  'how do i work with you', 'how to collaborate', 'steps'
];
const WEBSITE_HELP_PATTERNS = [
  'navigate', 'navigation', 'find', 'look for', 'looking for', 'search',
  'where can i find', 'site map', 'sitemap', 'menu',
  'pages', 'sections', 'guide', 'show me around', 'tour',
  'chercher', 'trouver', 'je cherche', 'ou est', 'où est',
  'je trouve pas', 'je ne trouve pas', 'help me find'
];
const COMPARE_PATTERNS = [
  'difference', 'compare', 'comparison', 'versus', 'vs',
  'which service', 'quel service', 'différence', 'lequel',
  'which one', 'what is the difference', 'quelle différence'
];

// ───────────── KEYWORDS (EN + FR) ─────────────
export const CHATBOT_KEYWORDS: ChatKeyword[] = [
  // Services
  { keywords: ["service", "services", "offer", "offers", "expertise", "specialty", "prestation", "offre", "offres", "what do you do", "capabilities", "solutions", "solution", "activities", "activités", "activites", "domaine"], responseId: "services", weight: 2 },
  
  // Clinical Studies
  { keywords: ["clinical", "trial", "trials", "phase", "monitoring", "site", "regulatory", "protocol", "investigator", "essai", "clinique", "cliniques", "étude clinique", "etude clinique", "phase 1", "phase 2", "phase 3", "phase i", "phase ii", "phase iii", "cra", "crc", "sponsor"], responseId: "clinical_studies", weight: 3 },
  
  // Pharmacoeconomic
  { keywords: ["pharmacoeconomic", "pharmacoeconomie", "economic", "economics", "cost-effectiveness", "value dossier", "cost effectiveness", "hta", "reimbursement", "market access", "remboursement", "health economics", "économie de la santé", "medico-economic", "medico economic", "budget impact"], responseId: "pharmacoeconomic", weight: 3 },
  
  // Patient Support
  { keywords: ["patient support", "psp", "adherence", "treatment adherence", "patient program", "programme patient", "accompagnement patient", "call center", "patient education", "patient engagement"], responseId: "patient_support", weight: 3 },
  
  // RWE
  { keywords: ["rwe", "real-world", "real world", "observational", "observationnelle", "phase 4", "phase iv", "post-marketing", "post marketing", "registry", "registries", "registre", "epidemiology", "epidemiological", "epidémiologie", "pharmaco-epidemiology", "pharmacoepidemiologie", "post autorisation", "post-autorisation", "vraie vie", "vie réelle", "vie reelle"], responseId: "rwe", weight: 3 },
  
  // Medical Writing
  { keywords: ["writing", "medical writing", "publication", "publications", "white paper", "manuscript", "journal", "editorial", "scientific communication", "rédaction", "redaction", "rédaction médicale", "redaction medicale", "article scientifique", "poster", "abstract"], responseId: "medical_writing", weight: 3 },
  
  // Expert Support
  { keywords: ["advisory", "advisory board", "kol", "expert", "experts", "board", "recommendation", "hcp", "healthcare professional", "comité", "comite", "avis expert", "opinion leader"], responseId: "expert_support", weight: 3 },
  
  // Training
  { keywords: ["training", "learn", "learning", "course", "courses", "gcp", "ineas", "certification", "formation", "formations", "workshop", "accredited", "biostatistics", "distance learning", "e-learning", "elearning", "séminaire", "seminaire", "cours", "diplôme", "diplome", "certificate"], responseId: "training", weight: 2 },
  
  // Contact
  { keywords: ["contact", "email", "phone", "call", "reach", "speak", "talk", "meeting", "schedule", "appointment", "contacter", "joindre", "appeler", "téléphone", "telephone", "message", "write", "inquiry", "rendez-vous", "rendez vous", "rdv", "rencontre", "discuter"], responseId: "contact", weight: 3 },
  
  // About
  { keywords: ["mission", "vision", "company", "dna", "values", "history", "story", "founded", "escr", "organisation", "organization", "cro", "about", "qui êtes vous", "qui etes vous", "à propos", "a propos", "presentation", "présentation", "entreprise", "société", "societe"], responseId: "about", weight: 2 },
  
  // Team
  { keywords: ["team", "members", "founder", "ceo", "director", "chalal", "hedibel", "mebarki", "bekrar", "people", "leadership", "staff", "équipe", "equipe", "dirigeant", "fondateur", "cofondateur", "co-fondateur"], responseId: "team", weight: 3 },
  
  // Careers
  { keywords: ["career", "careers", "job", "jobs", "work", "hiring", "recruitment", "cv", "resume", "apply", "application", "vacancy", "vacancies", "recrute", "candidature", "emploi", "recrutement", "poste", "stage", "intern", "internship", "stagiaire", "offre emploi", "travailler", "embauche", "rejoindre"], responseId: "careers", weight: 2 },
  
  // Blog
  { keywords: ["blog", "article", "articles", "insights", "news", "read", "content", "actualités", "actualites", "nouvelles", "lire", "lecture"], responseId: "blog", weight: 2 },
  
  // Location / Address
  { keywords: ["address", "location", "office", "headquarters", "map", "directions", "algiers", "cheraga", "adresse", "siège", "siege", "bureau", "locaux", "local", "emplacement", "gps", "coordonnées", "coordonnees", "itinéraire", "itineraire"], responseId: "location", weight: 3 },
  
  // Working Hours
  { keywords: ["hours", "opening", "open", "close", "closed", "schedule", "horaire", "horaires", "ouverture", "fermeture", "sunday", "thursday", "dimanche", "jeudi", "heure", "heures", "disponibilité", "disponibilite", "quand", "dispo", "timing"], responseId: "hours", weight: 3 },
  
  // Pricing
  { keywords: ["price", "pricing", "cost", "quote", "tarif", "tarifs", "prix", "devis", "how much", "rate", "rates", "fee", "fees", "expensive", "cheap", "combien", "coût", "cout", "coute", "gratuit", "free", "payant", "facturation", "invoice"], responseId: "pricing", weight: 3 },
  
  // Partnership
  { keywords: ["partner", "partnership", "collaborate", "collaboration", "partenaire", "partenariat", "coopération", "cooperation", "joint", "co-development", "consortium", "alliance", "affiliation"], responseId: "partnership", weight: 2 },
  
  // LinkedIn
  { keywords: ["linkedin", "social media", "follow", "network", "réseaux", "reseaux", "les réseaux", "page linkedin", "profil linkedin"], responseId: "linkedin", weight: 2 },
  
  // Legal
  { keywords: ["legal", "privacy", "terms", "policy", "gdpr", "data protection", "cookies", "notice", "juridique", "confidentialité", "confidentialite", "conditions", "mentions légales", "mentions legales", "rgpd", "cgu", "politique"], responseId: "legal", weight: 2 },
  
  // FAQ
  { keywords: ["faq", "question", "questions", "help", "aide", "info", "information", "frequently", "asked"], responseId: "faq", weight: 1 },

  // Language / multilingual
  { keywords: ["language", "french", "english", "français", "francais", "anglais", "arabe", "arabic", "langue", "langues", "traduction", "translation", "multilingual", "multilingue", "bilingue"], responseId: "language", weight: 3 },

  // Pharmaceutical / Drug general
  { keywords: ["pharma", "pharmaceutical", "drug", "drugs", "medicine", "medicines", "medication", "médicament", "medicament", "biotech", "biotechnology", "biotechnologie", "industrie", "industry", "laboratoire", "laboratory", "lab", "molecule", "molécule"], responseId: "pharma_general", weight: 2 },

  // Algeria / Region
  { keywords: ["algeria", "algérie", "algerie", "alger", "afrique", "africa", "maghreb", "mena", "region", "pays", "country"], responseId: "algeria_specific", weight: 2 },

  // Regulatory / GCP
  { keywords: ["ich", "gcp", "bonnes pratiques", "good clinical practice", "regulation", "réglementation", "reglementation", "compliance", "conformité", "conformite", "audit", "inspection", "autorité", "autorite", "ansm", "ema"], responseId: "regulatory", weight: 3 },

  // Safety / Pharmacovigilance (dedicated)
  { keywords: ["safety", "pharmacovigilance", "adverse event", "événement indésirable", "securité", "securite", "sécurité", "pv", "signal", "risk management", "rmp", "effet indésirable", "effet secondaire", "side effect"], responseId: "safety", weight: 3 },

  // Data / Biostatistics
  { keywords: ["data", "données", "donnees", "database", "biostatistics", "biostatistiques", "statistics", "statistiques", "stat", "stats", "edc", "data management", "gestion des données", "analyse", "analysis", "sas", "r", "spss"], responseId: "data_biostats", weight: 2 },

  // Standards
  { keywords: ["standard", "standards", "quality", "qualité", "qualite", "iso", "norme", "normes", "assurance qualité", "quality assurance", "qa", "qc", "quality control"], responseId: "standards", weight: 2 },

  // Compare services
  { keywords: ["difference", "compare", "comparison", "versus", "vs", "which service", "quel service", "différence", "lequel", "which one"], responseId: "compare_services", weight: 2 }
];

import { CHATBOT_DATABASE_FR } from './chatbotFaqFr';

export const getResponseById = (id: string, language: string = 'en'): ChatOption | undefined => {
  return language === 'fr' ? CHATBOT_DATABASE_FR[id] : CHATBOT_DATABASE[id];
};

/**
 * Advanced Intent Recognition Engine
 * Handles tokenization, stop-word filtering, pattern detection, fuzzy matching,
 * greeting/thanks/bye/compliment/frustration detection, and weighted scoring.
 */
export const matchKeyword = (input: string): string | null => {
  const normalized = input.toLowerCase().trim().replace(/[?!.,;:'"()]/g, '');

  // ─── Empty / Too short ───
  if (normalized.length < 2) return 'gibberish';

  // ─── Pattern matching (sentence-level intent detection) ───
  // These checks run on the FULL normalized input for maximum accuracy

  // Greetings
  if (GREETING_PATTERNS.some(g => normalized === g || normalized.startsWith(g + ' ') || normalized.endsWith(' ' + g))) {
    return 'greeting';
  }
  // Standalone greetings (exact matches for common 2-3 char inputs)
  if (['hi', 'hey', 'yo', 'bjr', 'bsr', 'sup'].includes(normalized)) {
    return 'greeting';
  }

  // Thanks
  if (THANKS_PATTERNS.some(g => normalized.includes(g))) {
    return 'random_thanks';
  }

  // Bye
  if (BYE_PATTERNS.some(g => normalized.includes(g))) {
    return 'random_bye';
  }

  // Compliments
  if (COMPLIMENT_PATTERNS.some(g => normalized.includes(g)) && normalized.length < 80) {
    return 'compliment';
  }

  // Who are you / AI questions
  if (WHO_ARE_YOU_PATTERNS.some(g => normalized.includes(g))) {
    return 'who_are_you';
  }

  // How does it work
  if (HOW_IT_WORKS_PATTERNS.some(g => normalized.includes(g))) {
    return 'how_it_works';
  }

  // Website navigation help
  if (WEBSITE_HELP_PATTERNS.some(g => normalized.includes(g))) {
    return 'website_help';
  }

  // Compare services
  if (COMPARE_PATTERNS.some(g => normalized.includes(g))) {
    return 'compare_services';
  }

  // Frustration / Need help (check after other patterns to avoid false positives)
  if (FRUSTRATION_PATTERNS.some(g => normalized.includes(g))) {
    return 'frustration';
  }

  // ─── Tokenization & keyword scoring ───
  const tokens = normalized.split(/\s+/).filter(word => !STOP_WORDS.has(word));

  // If after filtering we have no meaningful tokens, treat as gibberish
  if (tokens.length === 0) return 'gibberish';

  const scores: Record<string, number> = {};

  // Multi-word phrase matching first (higher precision)
  const fullInput = tokens.join(' ');
  for (const item of CHATBOT_KEYWORDS) {
    const weight = item.weight || 1;
    let matchCount = 0;

    // Check multi-word keywords against full normalized input (before stop-word removal)
    for (const kw of item.keywords) {
      if (kw.includes(' ') && normalized.includes(kw)) {
        matchCount += 3; // Multi-word matches are most precise
      }
    }

    // Then single-token matching
    for (const token of tokens) {
      if (item.keywords.includes(token)) {
        matchCount += 1;
      } else {
        // Partial match for root/stem words (min 4 chars to avoid false positives)
        for (const kw of item.keywords) {
          if (kw.length >= 4 && !kw.includes(' ')) {
            if (token.length >= 4 && (token.includes(kw) || kw.includes(token))) {
              matchCount += 0.5;
            }
          }
        }
      }
    }

    if (matchCount > 0) {
      scores[item.responseId] = (scores[item.responseId] || 0) + (matchCount * weight);
    }
  }

  // Find the highest scoring intent
  const bestIntent = Object.entries(scores).reduce((prev, curr) =>
    (curr[1] > prev[1] ? curr : prev), ["", 0]);

  // If best score is very low and input is long, it might be off-topic
  if (bestIntent[1] === 0) {
    // Check if input is mostly gibberish (random chars, keyboard smash)
    const alphaRatio = (normalized.replace(/[^a-zàâäéèêëïîôùûüÿçœæ]/g, '').length) / normalized.length;
    if (alphaRatio < 0.5 || normalized.length < 3) {
      return 'gibberish';
    }
    return null; // Will trigger CHATBOT_FALLBACK_MESSAGE
  }

  return bestIntent[0];
};
