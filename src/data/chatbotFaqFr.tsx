import React from 'react';
import { ChatOption } from './chatbotFaq';

export const CHATBOT_WELCOME_MESSAGE_FR = "Bienvenue chez **ES-CR** ! Je suis votre assistant virtuel.\n\nJe peux vous aider à explorer notre gamme complète de **services CRO**, en apprendre davantage sur notre équipe et notre mission, naviguer sur le site, ou vous mettre directement en contact avec nos experts.\n\nN'hésitez pas à sélectionner un sujet ci-dessous ou à taper votre question — je suis là pour vous guider.";

export const CHATBOT_FALLBACK_MESSAGE_FR = "Merci pour votre message. Je n'ai peut-être pas de réponse précise à cela, mais je peux toujours vous aider à naviguer sur le site.\n\nVoici quelques éléments pour lesquels je peux vous assister :\n\n- Explorer nos **7 services CRO spécialisés**\n\n- En savoir plus sur **qui nous sommes** et notre mission\n\n- Vous diriger vers la **page Contact** pour planifier une réunion\n\n- Répondre aux **questions fréquemment posées** sur ES-CR\n\nQue souhaitez-vous faire ?";

export const CHATBOT_DATABASE_FR: Record<string, ChatOption> = {
  "main_menu": {
    id: "main_menu",
    label: "Menu Principal",
    response: "Voici les principaux sujets sur lesquels je peux vous aider.\n\nChoisissez-en un, ou tapez votre propre question :",
    followUpIds: ["services", "about", "contact", "training", "blog", "careers", "faq"]
  },
  "services": {
    id: "services",
    label: "Nos Services",
    response: "**ES-CR** est une Organisation de Recherche sous Contrat (CRO) offrant **7 services spécialisés** pour soutenir les entreprises pharmaceutiques et biotechnologiques tout au long du cycle de développement des médicaments :\n\n• **Études Cliniques** — Gestion des essais de Phase I à III\n\n• **Études Pharmacoéconomiques** — Évaluation de la valeur et coût-efficacité\n\n• **Programme de Soutien aux Patients** — Observance du traitement et accompagnement des patients\n\n• **Données de Vie Réelle (RWE)** — Études de Phase IV, observationnelles et épidémiologiques\n\n• **Rédaction Médicale** — Publications scientifiques et qualité éditoriale\n\n• **Soutien d'Experts** — Conseils consultatifs (Advisory boards) et engagement des KOL\n\n• **Formation** — Développement professionnel accrédité par l'INEAS\n\nChaque service dispose de sa propre page dédiée avec tous les détails.\n\nLequel souhaitez-vous explorer ?",
    followUpIds: ["clinical_studies", "pharmacoeconomic", "patient_support", "rwe", "medical_writing", "expert_support", "training", "link_services"]
  },
  "clinical_studies": {
    id: "clinical_studies",
    label: "Études Cliniques",
    response: "Les **Études Cliniques** constituent l'un de nos services de base.\n\nESCR soutient les **études de Phase I, II et III** grâce à une planification structurée, une coordination opérationnelle et un alignement réglementaire.\n\nNos activités incluent :\n\n• Développement du protocole et identification des sites\n\n• Soutien au démarrage et suivi de l'étude (monitoring)\n\n• Supervision de la qualité des données tout au long de la conduite de l'étude\n\n• Gestion réglementaire et revue de conformité\n\n• Opérations cliniques et gestion des sites\n\n• Gestion des données et biostatistiques\n\n• Rapport final et pharmacovigilance\n\nEn travaillant avec les investigateurs et les promoteurs, nous contribuons à la continuité de l'étude, au respect des délais et à la génération de preuves cliniques soutenant les décisions de développement.\n\nVous souhaitez discuter de votre projet avec notre équipe d'opérations cliniques ? Visitez la **page Études Cliniques** pour tous les détails, ou planifiez une réunion.",
    followUpIds: ["link_clinical_studies", "contact", "services", "main_menu"]
  },
  "pharmacoeconomic": {
    id: "pharmacoeconomic",
    label: "Études Pharmacoéconomiques",
    response: "Les **Études Pharmacoéconomiques** aident à transformer les données en décisions de santé.\n\nES-CR traduit les données cliniques et économiques en preuves soutenant l'accès au marché et les activités de planification.\n\nNos principales capacités incluent :\n\n• **Dossiers de Valeur** — Synthèse des preuves cliniques et économiques pour l'accès au marché\n\n• **Études de Coûts Descriptives** — Quantification du fardeau économique des maladies\n\n• **Modélisation Coût-Efficacité** — Soutien à l'évaluation des technologies de la santé\n\n• **Analyse d'Impact Budgétaire** — Prévision des conséquences de l'allocation des ressources\n\n• **Adaptation Locale des Modèles Globaux** — Ajustement des modèles internationaux pour la pertinence régionale\n\nVisitez la **page Études Pharmacoéconomiques** pour des détails complets, ou contactez notre équipe directement.",
    followUpIds: ["link_pharmacoeconomic", "contact", "services", "main_menu"]
  },
  "patient_support": {
    id: "patient_support",
    label: "Soutien aux Patients",
    response: "Le **Programme de Soutien aux Patients (PSP)** est conçu pour améliorer l'engagement, l'observance et la continuité du traitement.\n\nNotre approche combine éducation, suivi, assistance logistique et canaux de communication clairs.\n\nLe programme comprend :\n\n• **Éducation et Formation des Patients** — Aider les patients à comprendre leur traitement\n\n• **Soutien à l'Observance** — Plans de suivi pour renforcer la continuité du traitement\n\n• **Assistance Logistique (Centre d'Appels)** — Un soutien accessible pour les questions et la planification\n\n• **Information du Public** — Matériels de sensibilisation pour le grand public\n\n• **Coordination du Programme** — Gestion des flux de travail, de la documentation et de la communication\n\nVisitez la **page Soutien aux Patients** pour en savoir plus, ou planifiez une réunion avec notre équipe.",
    followUpIds: ["link_patient_support", "contact", "services", "main_menu"]
  },
  "rwe": {
    id: "rwe",
    label: "Données de Vie Réelle",
    response: "Les **Données de Vie Réelle (RWE)** capturent le parcours complet du patient en dehors des essais cliniques contrôlés.\n\nÀ travers des études de Phase IV, des recherches observationnelles, des registres de patients, des enquêtes et des analyses pharmaco-épidémiologiques, nous générons des données basées sur les conditions de la vie réelle.\n\nNos services RWE incluent :\n\n• **Études de Phase IV** — Efficacité et sécurité des traitements en conditions réelles\n\n• **Études Observationnelles** — Capture des parcours patients et des schémas de traitement\n\n• **Registres de Patients** — Évaluation des résultats à long terme et suivi des tendances\n\n• **Enquêtes et Questionnaires Patients** — Capture des perceptions et comportements des patients\n\n• **Pharmaco-épidémiologie & PGR** — Analyses épidémiologiques et atténuation des risques\n\nNotre approche soutient le suivi de la sécurité des patients et éclaire les politiques de santé publique.\n\nVisitez la **page RWE** pour tous les détails, ou contactez-nous pour discuter de vos besoins.",
    followUpIds: ["link_rwe", "contact", "services", "main_menu"]
  },
  "medical_writing": {
    id: "medical_writing",
    label: "Rédaction Médicale",
    response: "La **Rédaction Médicale** transforme des données complexes en un contenu scientifique clair, précis et percutant.\n\nNotre équipe soutient les publications, les communications, les livres blancs et les documents de conférence avec une méthodologie rigoureuse et des normes éditoriales précises.\n\nNos services incluent :\n\n• **Gestion de la Communication Scientifique** — Publications alignées sur les directives internationales\n\n• **Stratégie de Publication** — Sélection des revues et coordination des délais\n\n• **Rédaction Scientifique et de Livres Blancs** — Méthodologie rigoureuse et crédibilité scientifique\n\n• **Documents de Présentation et de Conférence** — Posters, diapositives et communication des informations clés\n\n• **Révision Éditoriale et Contrôle Qualité** — Précision, cohérence et qualité linguistique\n\nVisitez la **page Rédaction Médicale** pour tous les détails, ou contactez-nous pour votre projet.",
    followUpIds: ["link_medical_writing", "contact", "services", "main_menu"]
  },
  "expert_support": {
    id: "expert_support",
    label: "Soutien d'Experts",
    response: "Le **Soutien d'Experts** améliore votre stratégie scientifique grâce à un engagement structuré des experts.\n\nNous fournissons une expertise scientifique et soutenons l'organisation de conseils consultatifs (advisory boards) grâce à des processus de communication coordonnés.\n\nNos capacités incluent :\n\n• **Gestion des Conseils Consultatifs** — Discussions structurées et communication efficace\n\n• **Identification et Engagement des Experts** — Sélection des participants les plus qualifiés\n\n• **Synthèse des Recommandations** — Compilation des avis d'experts en résumés exploitables\n\n• **Soutien aux Professionnels de la Santé** — Organisation pratique et documentation\n\n• **Préparation du Contenu Scientifique** — Matériels de briefing qui soutiennent des sessions productives\n\n• **Publications Scientifiques** — Rédaction de résumés et de manuscrits avec gestion complète de la soumission\n\nVisitez la **page Soutien d'Experts** pour en savoir plus, ou planifiez une consultation.",
    followUpIds: ["link_expert_support", "contact", "services", "main_menu"]
  },
  "training": {
    id: "training",
    label: "Formation",
    response: "Les programmes de **Formation** chez ES-CR renforcent les compétences professionnelles en recherche clinique.\n\nNos modules combinent bases théoriques et applications pratiques, adaptés aux professionnels et futurs experts.\n\nNotre catalogue de formations comprend :\n\n• **Essais Cliniques & BPC (GCP)** — Fondamentaux, exigences réglementaires, conception d'étude, sécurité des patients\n\n• **Cours Professionnels Spécialisés** — Pour les ARC, coordinateurs, investigateurs et équipes médicales\n\n• **Pharmacovigilance dans les Essais Cliniques** — Déclaration de sécurité et attentes réglementaires\n\n• **Gestion des Données et Biostatistiques** — Traitement des données, validation et interprétation statistique\n\n• **Rédaction Scientifique et Communication** — Lecture critique, rédaction et échange scientifique\n\n• **Sessions de Formation Accréditées (INEAS)** — Parcours validés avec des instructeurs certifiés\n\n• **Apprentissage à Distance et en Présentiel** — Formats flexibles maintenant une qualité constante\n\nVisitez la **page Formation** pour le catalogue complet, ou contactez-nous pour planifier une session pour votre équipe.",
    followUpIds: ["link_training", "contact", "services", "main_menu"]
  },
  "contact": {
    id: "contact",
    label: "Contactez-nous",
    response: "Voici comment vous pouvez joindre l'équipe **ES-CR** :\n\n**Email** : contact@esclinical.com\n\n**Téléphone** : +213 20 33 91 20\n\n**Adresse** : 76, Coop Mina Benhaddadi Dar Diaf, Chéraga, Alger, Algérie\n\n**Horaires** : Du dimanche au jeudi, de 9h à 17h\n\nNotre équipe répond généralement dans les 24 heures ouvrables.\n\nVous pouvez également visiter notre **page Contact** pour remplir un formulaire de demande, ou nous envoyer un e-mail directement.\n\nNous traitons les demandes liées à : *Demande Générale, Demander un Devis, Consultation de Projet, Opportunité de Partenariat et Candidatures*.",
    followUpIds: ["link_contact", "direct_email", "main_menu"]
  },
  "about": {
    id: "about",
    label: "À Propos de ES-CR",
    response: "**ES-CR** est une Organisation de Recherche sous Contrat (CRO) algérienne de premier plan.\n\n**Notre Mission** : Nous agissons en tant que partenaire opérationnel et lien entre toutes les parties prenantes, soutenant la gestion des études cliniques dans le respect des protocoles, des exigences réglementaires et des délais.\n\n**Notre Histoire** : Notre histoire a commencé par la rencontre d'une équipe fondatrice issue de la recherche clinique et du secteur de la santé, qui partageait une vision commune — construite autour d'une idée : *améliorer les soins aux patients*.\n\n**Notre ADN** — Les valeurs qui animent tout ce que nous faisons :\n\n• Intégrité Éthique et Transparence\n\n• Partage d'Expertise et Communication\n\n• Fiabilité et Proactivité\n\n• Confidentialité Sécurisée et Confiance\n\n**Notre Impact** : Plus de 20 ans d'expérience, plus de 12 études cliniques, plus de 15 partenaires de confiance, plus de 500 patients pris en charge, et plus de 37 publications scientifiques.\n\nVous voulez en savoir plus ? Visitez la **page À Propos**, explorez nos **Services**, ou rencontrez notre équipe.",
    followUpIds: ["link_about", "services", "team", "contact", "main_menu"]
  },
  "team": {
    id: "team",
    label: "Notre Équipe",
    response: "L'équipe ES-CR est dirigée par des professionnels expérimentés en recherche clinique et en santé :\n\n• **Fayçal CHALAL** — Fondateur et PDG\n\n• **Dr. Meriem HEDIBEL** — Co-Fondatrice et Directrice des Opérations Cliniques\n\n• **Dr. Tarik MEBARKI** — Directeur Médical\n\n• **Mr. Samy BEKRAR** — Chef de Projet et ARC\n\nVous pouvez consulter leurs profils complets et leurs pages LinkedIn sur notre **page À Propos**.\n\nVous souhaitez rejoindre notre équipe ? Consultez la section **Carrières** ou envoyez-nous votre candidature.",
    followUpIds: ["link_about", "careers", "contact", "main_menu"]
  },
  "careers": {
    id: "careers",
    label: "Carrières",
    response: "Nous sommes toujours à la recherche de professionnels passionnés pour rejoindre l'équipe ES-CR !\n\nPour postuler à une offre ou soumettre une candidature spontanée, envoyez votre **CV** et lettre de motivation à **contact@esclinical.com** avec comme objet *\"Candidature\"*.\n\nVous pouvez également utiliser notre **page Contact** et sélectionner *\"Candidature / Offre d'emploi\"* comme sujet.\n\nNous offrons des opportunités dans les opérations cliniques, la rédaction médicale, la pharmacovigilance, la gestion des données, et bien plus encore.",
    followUpIds: ["link_contact", "direct_email", "about", "main_menu"]
  },
  "blog": {
    id: "blog",
    label: "Blog et Actualités",
    response: "Notre section **Blog** propose des articles scientifiques et des analyses de l'industrie publiés par l'équipe ES-CR.\n\nVous y trouverez du contenu sur des sujets tels que les développements de la recherche clinique, les meilleures pratiques de l'industrie et les publications scientifiques.\n\nVisitez la **page Blog** pour lire nos derniers articles.",
    followUpIds: ["link_blog", "services", "main_menu"]
  },
  "faq": {
    id: "faq",
    label: "FAQ",
    response: "Voici quelques questions fréquemment posées :\n\n**Qu'est-ce qu'une CRO ?**\nUne Organisation de Recherche sous Contrat (CRO) fournit des services de recherche externalisés à l'industrie pharmaceutique et biotechnologique — de la conception de l'étude au rapport final.\n\n**Où est situé ES-CR ?**\n76, Coop Mina Benhaddadi Dar Diaf, Chéraga, Alger, Algérie.\n\n**Quels services proposez-vous ?**\nNous proposons 7 services : Études Cliniques, Études Pharmacoéconomiques, Soutien aux Patients, Données de Vie Réelle (RWE), Rédaction Médicale, Soutien d'Experts et Formation.\n\n**Travaillez-vous avec des promoteurs internationaux ?**\nOui. Nous agissons comme un lien entre toutes les parties prenantes et respectons les normes internationales (ICH-GCP).\n\n**Vos programmes de formation sont-ils accrédités ?**\nOui. Nos programmes sont accrédités par l'**INEAS** et dispensés par des instructeurs certifiés.\n\n**Comment puis-je vous contacter ?**\nEmail : contact@esclinical.com | Téléphone : +213 20 33 91 20\n\nVous avez une autre question ? Tapez-la simplement ou visitez notre page Contact.",
    followUpIds: ["contact", "services", "about", "main_menu"]
  },
  "link_services": {
    id: "link_services",
    label: "Visiter la page Services",
    response: "nav:/services"
  },
  "link_clinical_studies": {
    id: "link_clinical_studies",
    label: "Visiter Études Cliniques",
    response: "nav:/services/clinical-studies"
  },
  "link_pharmacoeconomic": {
    id: "link_pharmacoeconomic",
    label: "Visiter Études Pharmacoéconomiques",
    response: "nav:/services/pharmacoeconomic-studies"
  },
  "link_patient_support": {
    id: "link_patient_support",
    label: "Visiter Soutien aux Patients",
    response: "nav:/services/patient-support-program"
  },
  "link_rwe": {
    id: "link_rwe",
    label: "Visiter la page RWE",
    response: "nav:/services/real-world-evidence"
  },
  "link_medical_writing": {
    id: "link_medical_writing",
    label: "Visiter Rédaction Médicale",
    response: "nav:/services/medical-writing"
  },
  "link_expert_support": {
    id: "link_expert_support",
    label: "Visiter Soutien d'Experts",
    response: "nav:/services/expert-support"
  },
  "link_training": {
    id: "link_training",
    label: "Visiter la page Formation",
    response: "nav:/services/training"
  },
  "link_contact": {
    id: "link_contact",
    label: "Aller à la page Contact",
    response: "nav:/contact"
  },
  "link_about": {
    id: "link_about",
    label: "Aller à la page À Propos",
    response: "nav:/about"
  },
  "link_blog": {
    id: "link_blog",
    label: "Aller à la page Blog",
    response: "nav:/blog"
  },
  "direct_email": {
    id: "direct_email",
    label: "Envoyer un e-mail directement",
    response: "mailto:contact@esclinical.com?subject=[ES-CR Chatbot] Information Request",
    type: 'mailto'
  },
  "greeting": {
    id: "greeting",
    label: "Bonjour",
    response: "Bonjour ! Bienvenue chez **ES-CR**.\n\nJe suis votre assistant virtuel, là pour vous aider à naviguer sur le site et découvrir nos services.\n\nQue vous ayez besoin d'informations sur un service spécifique, que vous souhaitiez joindre notre équipe, ou que vous ayez simplement besoin d'une réponse rapide — je suis là pour vous.\n\nComment puis-je vous aider aujourd'hui ?",
    followUpIds: ["services", "about", "contact", "faq"]
  },
  "pricing": {
    id: "pricing",
    label: "Tarification",
    response: "La tarification de nos services est adaptée à chaque projet en fonction de sa portée, de sa complexité et de ses exigences.\n\nPour un devis personnalisé, je vous recommande de visiter notre **page Contact** et de sélectionner *\"Demander un Devis\"* comme sujet.\n\nNotre équipe vous répondra dans les 24 heures avec tous les détails.\n\nVous pouvez également envoyer un e-mail direct à **contact@esclinical.com**.",
    followUpIds: ["link_contact", "direct_email", "services", "main_menu"]
  },
  "location": {
    id: "location",
    label: "Emplacement",
    response: "**ES-CR** est situé à :\n\n**76, Coop Mina Benhaddadi Dar Diaf, Chéraga, Alger, Algérie**\n\nNos bureaux sont ouverts **du dimanche au jeudi, de 9h à 17h**.\n\nVous pouvez trouver l'emplacement exact sur la carte interactive de notre **page Contact**.\n\nVoulez-vous que je vous y emmène ?",
    followUpIds: ["link_contact", "contact", "main_menu"]
  },
  "hours": {
    id: "hours",
    label: "Horaires de Travail",
    response: "Nos bureaux sont ouverts :\n\n**Du dimanche au jeudi, de 9h à 17h**\n\nSi vous nous contactez en dehors de ces heures, notre équipe vous répondra dans les 24 heures ouvrables.\n\nBesoin de nous joindre ? Visitez notre **page Contact** ou envoyez-nous un e-mail.",
    followUpIds: ["link_contact", "direct_email", "main_menu"]
  },
  "partnership": {
    id: "partnership",
    label: "Partenariat",
    response: "Nous sommes ouverts aux partenariats stratégiques avec des laboratoires pharmaceutiques, des sociétés de biotechnologie, des institutions académiques et d'autres CRO.\n\nSi une collaboration vous intéresse, vous pouvez nous joindre via notre **page Contact** et sélectionner *\"Opportunité de Partenariat\"* comme sujet.\n\nNotre équipe sera ravie de discuter de co-développement, de recherche conjointe ou de partage d'expertise régionale.",
    followUpIds: ["link_contact", "about", "main_menu"]
  },
  "linkedin": {
    id: "linkedin",
    label: "LinkedIn",
    response: "Vous pouvez suivre **ES-CR** sur LinkedIn pour rester informé de nos dernières actualités, offres d'emploi et publications scientifiques :\n\n**linkedin.com/company/es-cr**\n\nVous trouverez également les profils individuels des membres de l'équipe sur notre **page À Propos**.",
    followUpIds: ["link_about", "main_menu"]
  },
  "legal": {
    id: "legal",
    label: "Juridique et Confidentialité",
    response: "Vous pouvez consulter notre documentation juridique à tout moment :\n\n• **Conditions d'Utilisation** — Règles et conditions d'utilisation de notre site\n\n• **Politique de Confidentialité** — Comment nous collectons et protégeons vos données\n\n• **Mentions Légales** — Enregistrement de la société et informations légales\n\nToutes trois sont accessibles depuis le pied de page (footer) de chaque page de notre site web.",
    followUpIds: ["services", "contact", "main_menu"]
  },
  "random_thanks": {
    id: "random_thanks",
    label: "Merci",
    response: "Je vous en prie ! Je suis ravi d'avoir pu vous aider.\n\nSi vous avez d'autres questions ou avez besoin d'aide pour naviguer sur le site, n'hésitez pas à demander à tout moment.\n\nJe suis toujours là.\n\nVoici quelques raccourcis rapides si vous en avez besoin :",
    followUpIds: ["services", "contact", "about", "main_menu"]
  },
  "random_bye": {
    id: "random_bye",
    label: "Au revoir",
    response: "Merci d'avoir discuté avec moi ! Ce fut un plaisir de vous aider.\n\nSi vous avez besoin d'aide à l'avenir, cliquez simplement sur le bouton de l'assistant — je serai juste ici.\n\nPassez une excellente journée !",
    followUpIds: ["services", "contact", "main_menu"]
  },
  "language": {
    id: "language",
    label: "Langues",
    response: "Le site web d'ES-CR est actuellement disponible en **anglais** et en **français**.\n\nVous pouvez utiliser le sélecteur de langue dans la barre de navigation pour changer la langue.\n\nN'hésitez pas à poser vos questions en français ou en anglais — je comprends les deux !",
    followUpIds: ["services", "contact", "main_menu"]
  },
  "who_are_you": {
    id: "who_are_you",
    label: "Qui êtes-vous ?",
    response: "Je suis l'**Assistant ES-CR**, l'assistant virtuel officiel d'ES-CR.\n\nJe suis là pour vous aider à :\n\n• Naviguer sur le site web et trouver des informations rapidement\n\n• En savoir plus sur nos **7 services CRO** en détail\n\n• Vous mettre en relation avec notre équipe via la **page Contact**\n\n• Répondre aux questions fréquemment posées\n\nJe ne suis pas une IA à usage général — je suis spécifiquement conçu pour aider les visiteurs de ce site web.\n\nComment puis-je vous aider aujourd'hui ?",
    followUpIds: ["services", "about", "contact", "faq"]
  },
  "pharma_general": {
    id: "pharma_general",
    label: "Pharmaceutique",
    response: "**ES-CR** travaille avec les entreprises pharmaceutiques et biotechnologiques tout au long du cycle de développement des médicaments.\n\nNos services couvrent :\n\n• **Pré-commercialisation** — Essais cliniques (Phase I-III), dossiers de valeur, engagement d'experts\n\n• **Post-commercialisation** — Données de vie réelle, pharmacovigilance, registres de patients\n\n• **Soutien** — Rédaction médicale, programmes patients, formation\n\nSouhaitez-vous explorer un service spécifique ou discuter de votre projet avec notre équipe ?",
    followUpIds: ["services", "contact", "main_menu"]
  },
  "algeria_specific": {
    id: "algeria_specific",
    label: "Algérie",
    response: "**ES-CR** a son siège social à **Alger, Algérie** et agit comme un partenaire CRO stratégique pour le marché local et régional.\n\nNous opérons depuis :\n\n**76, Coop Mina Benhaddadi Dar Diaf, Chéraga, Alger, Algérie**\n\nNotre équipe combine une connaissance approfondie des cadres réglementaires locaux avec les normes internationales (ICH-GCP) pour soutenir la recherche clinique à travers la région.\n\nVous voulez en savoir plus sur notre façon de travailler sur ce marché ?",
    followUpIds: ["about", "contact", "services", "main_menu"]
  },
  "regulatory": {
    id: "regulatory",
    label: "Réglementaire et BPC",
    response: "**ES-CR** opère en totale conformité avec les normes réglementaires internationales.\n\nNotre travail suit :\n\n• **ICH-GCP** (Bonnes Pratiques Cliniques) — la norme internationale de qualité éthique et scientifique pour les essais cliniques\n\n• **Exigences réglementaires locales** — Cadres de conformité algériens et régionaux\n\n• **Réglementations de pharmacovigilance** — Déclaration de sécurité et gestion des risques\n\nBesoin de plus de détails ? Nos pages **Études Cliniques** et **Formation** couvrent les sujets réglementaires en profondeur.\n\nVous pouvez également contacter notre équipe pour des questions réglementaires spécifiques.",
    followUpIds: ["clinical_studies", "training", "contact", "main_menu"]
  },
  "compliment": {
    id: "compliment",
    label: "Compliment",
    response: "Merci beaucoup pour vos mots gentils ! Cela signifie vraiment beaucoup.\n\nNotre équipe travaille dur pour fournir la plus haute qualité dans tout ce que nous faisons — de la recherche clinique à ce site web lui-même.\n\nS'il y a autre chose pour lequel je peux vous aider, n'hésitez pas à demander !",
    followUpIds: ["services", "about", "main_menu"]
  },
  "frustration": {
    id: "frustration",
    label: "Aide",
    response: "Je suis désolé que vous rencontriez des difficultés — laissez-moi essayer de vous aider.\n\nVoici les choses les plus courantes que je peux faire pour vous :\n\n• **Explorer nos services** — Découvrez ce qu'offre ES-CR en recherche clinique\n\n• **Trouver nos coordonnées** — E-mail, téléphone et adresse\n\n• **Naviguer sur le site** — Je peux vous diriger directement vers n'importe quelle page\n\n• **Répondre aux questions courantes** — Section FAQ avec les informations clés\n\nEssayez de taper ce que vous cherchez en termes simples, et je ferai de mon mieux pour le trouver.\n\nOu vous pouvez toujours joindre un humain à l'adresse **contact@esclinical.com**.",
    followUpIds: ["services", "contact", "faq", "main_menu"]
  },
  "gibberish": {
    id: "gibberish",
    label: "Aide",
    response: "Hmm, je n'ai pas tout à fait compris.\n\nVous pouvez essayer de me demander des choses comme :\n\n• *\"Quels services proposez-vous ?\"*\n\n• *\"Où êtes-vous situés ?\"*\n\n• *\"Comment puis-je contacter ES-CR ?\"*\n\n• *\"Parlez-moi des études cliniques\"*\n\n• *\"Je veux un devis\"*\n\nOu cliquez simplement sur l'un des boutons ci-dessous pour commencer !",
    followUpIds: ["services", "contact", "about", "faq"]
  },
  "website_help": {
    id: "website_help",
    label: "Aide au Site Web",
    response: "Bien sûr ! Voici un guide de navigation rapide pour le site web d'ES-CR :\n\n• **Accueil** — Aperçu d'ES-CR, notre ADN et nos principales réalisations\n\n• **Services** — Les 7 services CRO avec leurs pages de détails individuelles\n\n• **À Propos** — Notre mission, histoire, valeurs et équipe dirigeante\n\n• **Blog** — Articles scientifiques et analyses de l'industrie\n\n• **Contact** — Formulaire de demande, e-mail, téléphone et carte de localisation\n\nDites-moi simplement quelle page vous souhaitez visiter, et je vous y emmènerai !",
    followUpIds: ["link_services", "link_about", "link_blog", "link_contact"]
  },
  "standards": {
    id: "standards",
    label: "Normes",
    response: "**ES-CR** adhère à des normes internationales rigoureuses :\n\n• **ICH-GCP** — Conférence Internationale sur l'Harmonisation, Bonnes Pratiques Cliniques\n\n• **Conformité Réglementaire Locale** — Alignement total avec les exigences des autorités de santé algériennes\n\n• **Gestion de la Qualité** — Intégrité des données, conformité aux protocoles et préparation aux audits\n\nNos programmes de **Formation** offrent également des cours de certification BPC accrédités par l'**INEAS**.\n\nSouhaitez-vous explorer nos services d'Études Cliniques ou de Formation ?",
    followUpIds: ["clinical_studies", "training", "contact", "main_menu"]
  },
  "how_it_works": {
    id: "how_it_works",
    label: "Comment ça marche",
    response: "Commencer avec **ES-CR** est simple :\n\n**1.** Visitez notre **page Contact** ou envoyez un e-mail à **contact@esclinical.com**\n\n**2.** Sélectionnez le type de demande (Devis, Consultation, Partenariat, etc.)\n\n**3.** Notre équipe examinera votre demande et vous répondra dans les **24 heures ouvrables**\n\n**4.** Nous organiserons une réunion pour discuter de votre projet en détail\n\n**5.** À partir de là, nous adapterons nos services à vos besoins spécifiques\n\nPrêt à faire le premier pas ?",
    followUpIds: ["link_contact", "direct_email", "services", "main_menu"]
  },
  "compare_services": {
    id: "compare_services",
    label: "Comparer les Services",
    response: "Excellente question ! Voici un aperçu rapide de ce qui rend chaque service unique :\n\n• **Études Cliniques** → Réalisation d'essais cliniques (Phase I-III)\n\n• **Pharmacoéconomie** → Modélisation du coût-efficacité et de l'accès au marché\n\n• **Soutien aux Patients** → Programmes d'observance et éducation des patients\n\n• **Données de Vie Réelle** → Études post-commercialisation et recherche observationnelle\n\n• **Rédaction Médicale** → Publications scientifiques et services éditoriaux\n\n• **Soutien d'Experts** → Conseils consultatifs et gestion des KOL\n\n• **Formation** → Développement professionnel et certification BPC\n\nChacun sert une étape différente du cycle de vie du médicament.\n\nLequel vous intéresse le plus ?",
    followUpIds: ["clinical_studies", "pharmacoeconomic", "patient_support", "rwe", "medical_writing", "expert_support", "training"]
  },
  "safety": {
    id: "safety",
    label: "Sécurité et Pharmacovigilance",
    response: "La **sécurité des patients** est au centre de tout ce que nous faisons chez ES-CR.\n\nNous intégrons la **pharmacovigilance** dans chaque étude clinique, en assurant :\n\n• La déclaration rapide des événements indésirables\n\n• La planification de la gestion des risques (PGR)\n\n• La conformité réglementaire en matière de sécurité\n\n• La surveillance post-commercialisation grâce aux Données de Vie Réelle\n\nNos équipes d'**Études Cliniques** et **RWE** travaillent ensemble pour maintenir les normes de sécurité les plus élevées.\n\nVous voulez en savoir plus sur notre approche ?",
    followUpIds: ["clinical_studies", "rwe", "contact", "main_menu"]
  },
  "data_biostats": {
    id: "data_biostats",
    label: "Données et Biostatistiques",
    response: "La **gestion des données et les biostatistiques** font partie intégrante de nos opérations cliniques.\n\nNos capacités incluent :\n\n• Configuration du système de capture électronique de données (EDC)\n\n• Validation et nettoyage des données\n\n• Plans d'analyse statistique (SAP)\n\n• Analyses statistiques intermédiaires et finales\n\n• Rapports d'études cliniques (CSR)\n\nCes compétences soutiennent à la fois nos services d'**Études Cliniques** et de **Formation** (où nous proposons des cours dédiés aux biostatistiques).\n\nSouhaitez-vous approfondir l'un ou l'autre de ces domaines ?",
    followUpIds: ["clinical_studies", "training", "contact", "main_menu"]
  }
};
