export type LegalInfo = {
  forme: string;
  rc?: string;
  ice?: string;
  capital?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

export type Project = {
  id: string;
  title: string;
  type: string;
  location: string;
  date: string;
  beforeImage?: string;
  afterImage: string;
  description?: string;
};

export const company = {
  name: "GRANDI SOLUTION",
  tagline: "Experts en plâtrerie et faux plafonds à Agadir.",
  description:
    "GRANDI SOLUTION est une entreprise marocaine spécialisée dans la plâtrerie et les faux plafonds. Basée à Agadir, nous intervenons pour des travaux soignés et durables, auprès des particuliers et des professionnels.",
  experienceYears: 2,
  address:
    "RUE JABER IBN HAYYAN. SECTEUR B. N E471. QUARTIER ALHOUDA., AGADIR - IDA OU TANANE, Maroc",
  phone: "+212 6 00 00 00 00",
  email: "contact@grandisolution.ma",
  activity:
    "TRAVAUX DIVERS OU CONSTRUCTIONS – ENTREPRENEUR DE TRAVAUX DE PLÂTRERIE ET FAUX PLAFONDS",
  legal: {
    forme: "SARL à associé unique",
    // If available, fill the following values. When empty, they will be hidden from the UI.
    rc: undefined,
    ice: undefined,
    capital: undefined,
  } as LegalInfo,
  services: [
    {
      id: "platrerie",
      title: "Plâtrerie (murs et plafonds)",
      description:
        "Enduits, lissage, création et rénovation de murs et plafonds pour des finitions impeccables.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "faux-plafonds",
      title: "Faux plafonds (design & installation)",
      description:
        "Conception et pose de faux plafonds décoratifs et techniques (BA13, dalles, LED).",
      image:
        "https://images.unsplash.com/photo-1571249480610-425eee4c7efc?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "renovations",
      title: "Travaux divers / petites rénovations",
      description:
        "Petits travaux d'aménagement, reprises, réparations et finitions pour vos espaces.",
      image:
        "https://images.unsplash.com/photo-1505797149-35ebc5a39f6f?q=80&w=1600&auto=format&fit=crop",
    },
  ] as Service[],
  projects: [
    {
      id: "proj-1",
      title: "Appartement – Faux plafond LED",
      type: "Faux plafonds",
      location: "Agadir",
      date: "2024-06-10",
      afterImage:
        "https://images.unsplash.com/photo-1614724690421-f9c01a5d5e1f?q=80&w=1600&auto=format&fit=crop",
      description:
        "Création d'un faux plafond avec éclairage LED intégré pour un salon moderne.",
    },
    {
      id: "proj-2",
      title: "Bureau – Cloisons en plâtre",
      type: "Plâtrerie",
      location: "Inezgane",
      date: "2024-03-22",
      afterImage:
        "https://images.unsplash.com/photo-1541976076758-347942db1974?q=80&w=1600&auto=format&fit=crop",
      description:
        "Réalisation de cloisons et finitions pour un plateau de bureaux professionnel.",
    },
    {
      id: "proj-3",
      title: "Maison – Rénovation murs",
      type: "Rénovation",
      location: "Aït Melloul",
      date: "2023-11-05",
      afterImage:
        "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop",
      description:
        "Reprise des murs, enduits et peinture pour un résultat propre et durable.",
    },
  ] as Project[],
};
