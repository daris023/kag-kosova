import { createContext, useContext, useState } from "react";

export const dict = {
  sq: {
    navAbout: "Rreth Nesh",
    navProducts: "Produktet",
    navLocation: "Lokacioni",
    navContact: "Kontakt",
    heroEyebrow: "KAG · Kosova Arsenal Group",
    heroTitle: "Industri municioni, ndërtuar sipas standardeve NATO.",
    heroSubtitle:
      "KAG po ndërton një platformë industriale të disiplinuar në Pejë, Kosovë, për prodhim municioni sipas standardeve MIL-SPEC — në partneritet me ekspertizë amerikane.",
    heroCta1: "Na kontaktoni",
    heroCta2: "Rreth Projektit",
    statusBadge: "Status aktual",
    statusTitle: "Ende s'kemi filluar prodhimin",
    statusBody:
      "KAG ndodhet në fazën e ndërtimit dhe përgatitjes së linjës së parë të prodhimit. Kalibri i parë i planifikuar për prodhim është 9mm, me synim zgjerimin në kalibra shtesë në të ardhmen.",
    aboutEyebrow: "Rreth Nesh",
    aboutTitle: "Një platformë industriale e disiplinuar.",
    aboutBody:
      "Kosova Arsenal Group (KAG) është themeluar për të ndërtuar kapacitet të qëndrueshëm prodhimi municioni në Kosovë, në përputhje me standardet ndërkombëtare industriale dhe me partneritet strategjik amerikan për pajisje dhe linja prodhimi.",
    productsEyebrow: "Produktet Kryesore",
    productsTitle: "Kalibrat që synojmë të prodhojmë.",
    productsIntro:
      "Linjat tona të planifikuara të prodhimit janë ndërtuar përreth dy kalibrave kryesorë me kërkesë të lartë ndërkombëtare.",
    product1Name: "7.62×51 mm",
    product1Desc: "Kalibri standard NATO për armë automatike dhe snajper — një nga më të kërkuarit globalisht.",
    product2Name: "12.7×99 mm (.50 BMG)",
    product2Desc: "Kalibër i rëndë, i përdorur gjerësisht në sisteme mbështetëse dhe mitraloza të rënda.",
    locationEyebrow: "Lokacioni",
    locationTitle: "Fabrika — Pejë, Kosovë",
    locationAddr: "Rr. Mbretëresha Teutë, Pejë, Kosovë",
    contactEyebrow: "Na Kontaktoni",
    contactTitle: "Interesuar për partneritet apo informacion?",
    contactBody: "Na shkruani — do t'ju përgjigjemi sa më shpejt.",
    contactBtn: "Na Shkruani",
    footerRights: "Të gjitha të drejtat e rezervuara.",
    adminLogin: "Hyrje Admin",
  },
  en: {
    navAbout: "About",
    navProducts: "Products",
    navLocation: "Location",
    navContact: "Contact",
    heroEyebrow: "KAG · Kosova Arsenal Group",
    heroTitle: "Ammunition industry, built to NATO standards.",
    heroSubtitle:
      "KAG is building a disciplined industrial platform in Peja, Kosovo, for MIL-SPEC-standard ammunition production — in partnership with American manufacturing expertise.",
    heroCta1: "Contact Us",
    heroCta2: "About The Project",
    statusBadge: "Current Status",
    statusTitle: "Production has not started yet",
    statusBody:
      "KAG is currently in the construction and setup phase for its first production line. The first planned caliber is 9mm, with additional calibers planned for the future.",
    aboutEyebrow: "About Us",
    aboutTitle: "A disciplined industrial platform.",
    aboutBody:
      "Kosova Arsenal Group (KAG) was founded to build sustainable ammunition manufacturing capacity in Kosovo, aligned with international industrial standards and a strategic American partnership for equipment and production lines.",
    productsEyebrow: "Primary Products",
    productsTitle: "The calibers we aim to produce.",
    productsIntro:
      "Our planned production lines are built around two calibers with high international demand.",
    product1Name: "7.62×51 mm",
    product1Desc: "The NATO-standard caliber for automatic rifles and sniper systems — one of the most sought-after globally.",
    product2Name: "12.7×99 mm (.50 BMG)",
    product2Desc: "A heavy caliber widely used in support weapon systems and heavy machine guns.",
    locationEyebrow: "Location",
    locationTitle: "The Facility — Peja, Kosovo",
    locationAddr: "Mbretëresha Teutë St, Peja, Kosovo",
    contactEyebrow: "Get In Touch",
    contactTitle: "Interested in partnership or information?",
    contactBody: "Write to us — we'll get back to you as soon as possible.",
    contactBtn: "Contact Us",
    footerRights: "All rights reserved.",
    adminLogin: "Admin Login",
  },
};

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("sq");
  const t = dict[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
