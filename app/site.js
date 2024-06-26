export let site = {
  title: "KER PROTEC",
  description: "KER PROTEC - Olivier GUREME- 07 71 84 91 07",
  societe: "KER PROTEC",
  SIRET: "53478675100022",
  contact: "Olivier GUREME",
  telephone: "0771849107",
  adresse: "Place du général De Gaulle",
  codePostal: "56450",
  ville: "THEIX NOYALO",
  email: "kerprotec56@gmail.com",
  logo: { url: "images/logo-barre-du-haut.png", alt: "logo Ker PROTEC" },
  Logo: { url: "images/logo-banniere.png", alt: "logo Ker PROTEC" },
};

export const menuItems = [
  { label: "ACCUEIL", route: "/" },
  { label: "ravalement", route: "/ravalement" },
  { label: "Peinture & décoration", route: "/peinture-decoration" },
  { label: "Nuanciers & marque partenaire", route: "/peinture-nuancier" },
  { label: "Nettoyage", route: "/nettoyage" },
  { label: "Nos réalisations", route: "/realisations" },
  { label: "Contact", route: "/contact" },
];

export const cards = [
  {
    title: "RAVALEMENT",
    text: "",
    button: "Détail",
    buttonColor: "bg-gold-500",
    link: "/ravalement",
    url: "peinture-mur-exterieur.png",
    alt: "",
  },

  {
    title: "PEINTURE & DECORATION",
    text: "",
    button: "Détail",
    buttonColor: "bg-gold-500",
    link: "/peinture-decoration",
    url: "peinture-mur-interieur.png",
    alt: "",
  },
  {
    title: "NUANCIERS et MARQUE PARTENAIRE",
    text: "",
    button: "",
    buttonColor: "bg-gold-500",
    link: "/peinture-nuancier",
    url: "peinture-nuancier-4.png",
    alt: "",
  },
  {
    title: "NETTOYAGE",
    text: "",
    button: "",
    buttonColor: "bg-gold-500",
    link: "/nettoyage",
    url: "realisations-13.jpeg",
    alt: "",
  },
  {
    title: "NOS REALISATIONS",
    text: "",
    button: "",
    buttonColor: "bg-gold-500",
    link: "/realisations",
    url: "menu-peinture-exterieure.png",
    alt: "",
  },
];

export const cards2 = [
  {
    title: "NETTOYAGE",
    text: "",
    button: "",
    buttonColor: "bg-gold-500",
    link: "/nettoyage",
    url: "realisations-13.jpeg",
    alt: "",
  },
];

export const sections = [
  {
    title: "Qui sommes-nous?",
    body: "Fort de notre expérience de plus de 10 ans  nous vous accompagnerons  dans votre projet et mettrons tout en œuvre pour satisfaire vos exigences .\
    Que se soit pour un projet de peinture intérieure , décoration , ravalement, revêtement de sol, ou encore plus simplement le nettoyage de vos façades et toiture. Confier votre projet à Ker Protec vôtre peintre a Vannes et ces alentours .",
  },
  {
    title: " NOS SAVOIRS FAIRE",
    body: (
      <ul className="list-disc pl-4">
        <li>Peinture extérieure / ravalement</li>
        <li>Peinture intérieure / décoration</li>
        <li>Nettoyage et peinture de toiture</li>
      </ul>
    ),
  },
];

export const listesActions = [
  
  {
    title: "RAVALEMENT",
    subTitle: "",
    photo: { url: "", alt: "" },
    actions: ["", "", ""],
  },
  {
    title: "PEINTURE INTERIEURE",
    subTitle: "",
    photo: { url: "", alt: "" },
    actions: ["", "", ""],
  },

  {
    title: "NETTOYAGE",
    subTitle: "",
    photo: { url: "", alt: "" },
    actions: [""],
  },
  {
    title: "PRODUITS",
    subTitle: "",
    photo: { url: "", alt: "" },
    actions: [""],
  },
  {
    title: "NOS REALISATIONS",
    subTitle: "",
    photo: { url: "", alt: "" },
    actions: [""],
  },
];

export const Pages = {
  
  "peinture-decoration": {
    title: "Peinture intérieure",
    tags : "Peinture intérieure, Travaux de peinture, Rénovation intérieure, Revêtements muraux, Décoration intérieure, Peinture décorative",
    description: "À la recherche de professionnels de la peinture intérieure et de la rénovation ? Découvrez nos services de qualité à Vannes et ses environs. Experts en travaux de peinture, rénovation intérieure, revêtements muraux et décoration. Contactez-nous pour une peinture décorative sur mesure.",
    photos: [
      { url: "peinture-interieur-21-02-24-1.jpeg", alt: "" },
      { url: "peinture-interieur-21-02-24-2.jpeg", alt: "" },
      { url: "peinture-interieur-21-02-24-3.jpeg", alt: "" },
      { url: "peinture-interieur-21-02-24-4.jpeg", alt: "" },
      { url: "chantier-01-1.jpeg", alt: "" },
      { url: "chantier-01-2.jpeg", alt: "" },
      { url: "chantier-01-3.jpeg", alt: "" },
      { url: "chantier-01-4.jpeg", alt: "" },
      { url: "chantier-01-5.jpeg", alt: "" },
      { url: "chantier-01-6.jpeg", alt: "" },
      { url: "chantier-01-7.jpeg", alt: "" },
      { url: "chantier-01-8.jpeg", alt: "" },
      { url: "chantier-01-9.jpeg", alt: "" },
      { url: "chantier-01-10.jpeg", alt: "" },
      { url: "chantier-01-11.jpeg", alt: "" },
      { url: "chantier-01-12.jpeg", alt: "" },
    ],
    sections: [
      {
        title: "Donnez de la couleur à votre intérieur :",
        body: (
          <>
            <p>
              Ker Protec vous propose un très large choix de prestations et de
              finitions :
            </p>
            <ul>
              <li>
                <strong>Peintures mat :</strong> idéal pour vos plafonds et
                garage, disponible dans un large choix de couleurs.
              </li>
              <li>
                <strong>Couche d&apos;impression :</strong> pour les murs et plafonds
                qui n&apos;ont jamais été peints.
              </li>
              <li>
                <strong>Peintures velours :</strong> optimales pour les
                différentes pièces à vivre de votre maison, elles sont
                lessivables et résistent parfaitement dans le temps.
              </li>
              <li>
                <strong>Peintures satinées :</strong> destinées aux pièces plus
                exposées à l&apos;humidité comme les salles de bain et la cuisine.
              </li>
            </ul>
            <p>
              Un très large choix de couleurs pourra vous être proposé selon vos
              goûts.
            </p>
            <h2>Revêtements de sols</h2>
            <p>
              Nous vous proposons également la pose de revêtements de sol,
              parquet bois ou flottant.
            </p>
            <p>
              Nous proposons également des peintures sols résistantes pour
              garage, escalier extérieur, terrasse ou autre.
            </p>
          </>
        ),
      },
      {
        title: "NOS SAVOIR FAIRE :",
        body: (
          <ul className="list-disc pl-4">
            <li>Réparation d&apos;enduit</li>
            <li>Rénovation et décoration d&apos;intérieur</li>
            <li>Protection des sols et mobilier</li>
            <li>Revêtement de sols & pose de plinthes</li>
            <li>Pose de papier & toile de verre ou rénovation</li>
            <li>Pose de plaques de parement intérieur et extérieur</li>
            <li>
              Peinture sur boiseries / vernis & vitrification (escalier,
              parquet, porte, volets)
            </li>
          </ul>
        ),
      },
    ],
    cards: [],
  },

  "peinture-nuancier": {
    title: "Peintures & nuanciers",
    tags : '<meta name="keywords" content="Peinture intérieure, Travaux de peinture, Rénovation intérieure, Revêtements muraux, Décoration intérieure, Peinture décorative"></meta>',
    description: "",
    photos: [
      { url: "peinture-nuancier-1.png", alt: "peinture et nuancier" },
      { url: "peinture-nuancier-2.png", alt: "peinture et nuancier" },
      { url: "peinture-nuancier-3.png", alt: "peinture et nuancier" },
      { url: "peinture-nuancier-4.png", alt: "peinture et nuancier" },
    ],
    sections: [
      {
        title: "LA COULEUR:",
        body: (
          <ul className="list-disc pl-4">
            <p>Car votre satisfaction est notre exigence, nous vous proposons un très large choix de couleurs et de produits professionnels fabriqués par des experts pour satisfaire vos attentes.</p>
    <p>Nous saurons vous conseiller les couleurs qui embelliront votre intérieur ou les façades de votre maison. Avec nos fournisseurs, nous mettrons également tout en œuvre pour trouver les produits idéaux pour votre projet.</p>
    <p>Des peintures professionnelles, respectueuses de l&apos;environnement et adaptées à vos besoins, protégeront votre maison et lui donneront une plus-value.</p>
          </ul>
        ),
      },

      {
        title: "LES NUANCIERS:",
        body: (
          <ul className="list-disc pl-4">
            <li>
              Ces palettes de teintes sont l’aboutissement du travail d’experts
              de la couleur alliant style, modernisme et authenticité.
            </li>
            <li>
              Cette offre de teintes utilisables en intérieur et en extérieur
              est scindée en:32 teintes Lumières où douceur rime avec précision.
              1288 teintes Iconiques déclinées de la plus claire à la plus
              foncée permettant d’offrir une vision subtile de chaque couleur
              réalisable.
            </li>
            <li>
              Chaque teinte est identifiée via une référence unique favorisant
              ainsi la facilité de lecture de notre offre couleur
            </li>
          </ul>
        ),
      },
    ],
    cards: [],
  },
  nettoyage: {

    title: "Nettoyage de façade, toiture et extérieur - Traitement anti-mousse et hydrofuge",
    tags : "Nettoyage de façade, Nettoyage de toiture, Nettoyage extérieur, Traitement anti-mousse, Traitement hydrofuge",
    description: "Découvrez nos services de nettoyage de façade, toiture et extérieur, incluant le traitement anti-mousse et hydrofuge. Profitez d'une propreté impeccable et d'une protection durable. Contactez-nous dès maintenant pour en savoir plus.",
    photos: [
      { url: "nettoyage-toiture-1-1.jpeg", alt: "gallery" },
      { url: "nettoyage-toiture-1-2.jpeg", alt: "gallery" },
      { url: "nettoyage-toiture-1-3.jpeg", alt: "gallery" },
      { url: "nettoyage-toiture-1-4.jpeg", alt: "gallery" },
      { url: "nettoyage-toiture-1-5.jpeg", alt: "gallery" },
      { url: "nettoyage-toiture-1-6.jpeg", alt: "gallery" },
      { url: "nettoyage-toiture-1-7.jpeg", alt: "gallery" },
    ],
    sections: [
      {
        title: "Pourquoi procéder au nettoyage de votre toiture ?",
        body: (
          <>
            <p>
              {" "}
              Le toit est la partie d&apos;une maison la plus exposée aux
              intempéries. La pluie, le soleil, et le vent peuvent avoir un
              impact sur lui. L&apos;air ambiant transporte une quantité
              importante d&apos;organismes vivants. Au nombre de ceux-ci se
              trouvent la mousse et les lichens qui peuvent se poser sur
              n&apos;importe quel support. Sous l&apos;action de l&apos;eau
              pluviale, ces indésirables prennent d&apos;assaut les toitures et
              y prolifèrent. Ils réussissent à vite se répandre sur les
              couvertures parce qu&apos;elles sont faites avec des matériaux qui
              sont pour la plupart poreux. Les lichens et les mousses y trouvent
              donc de l&apos;humidité et se développent.
            </p>
          </>
        ),
      },
      {
        title:
          "Comment leur propagation affecte-t-elle la longévité d'un édifice ?",
        body: (
          <>
            <p>
              {" "}
              Les matériaux sont les premiers qu&apos;ils attaquent. Ils les
              rendent plus poreux et les fragilisent en y occasionnant des
              cassures, des fissures ou des éclatements. Cela crée des
              infiltrations dans le bâtiment. De plus, cette couche de
              végétation détruit l&apos;esthétique du toit, obstrue les chéneaux
              et surcharge la charpente. Ces deux premières actions des lichens
              et des mousses se soldent par la dégradation de l&apos;isolation
              thermique de la maison. Vos équipements de chauffage consommeront
              alors plus d&apos;énergie électrique que nécessaire. Pour toutes
              ces raisons, vous devez périodiquement nettoyer votre toit pour
              assurer sa longévité.
            </p>
          </>
        ),
      },
      {
        title: "IMPORTANCE DE LA PEINTURE TOITURE",
        body: (
          <>
            <p>
              {" "}
              La peinture pour toiture préserve les surfaces minérales inclinées
              des différentes sollicitations extérieures. Elle offre une
              excellente tenue au jaunissement, au blanchiment ou à la
              décoloration. Elle assure une excellente résistance face au milieu
              marin, urbain ou industriel. Elle empêche les salissures
              d&apos;encrasser les couvertures grâce à un très bon effet
              auto-nettoyant.
            </p>
            <p>
              Cette peinture toiture hydrofuge permet de résister efficacement
              face aux milieux difficiles comme les pluies, les orages, les
              ruissellements ou autres intempéries. Elle permet de renforcer un
              matériau qui devient trop poreux, trop perméable ou plus
              suffisamment étanche au fil du temps. Elle améliore également le
              rendu esthétique d&apos;un toit ou d&apos;une couverture.
            </p>
          </>
        ),
      },
    ],
    cards: [],
  },
  realisations: {
    title: "Nos réalisations",
    tags : '<meta name="keywords" content="Peinture intérieure, Travaux de peinture, Rénovation intérieure, Revêtements muraux, Décoration intérieure, Peinture décorative"></meta>',
    description: "",
    photos: [
      { url: "chantier-01-1.jpeg", alt: "" },
      { url: "chantier-01-2.jpeg", alt: "" },
      { url: "chantier-01-3.jpeg", alt: "" },
      { url: "chantier-01-4.jpeg", alt: "" },
      { url: "chantier-01-5.jpeg", alt: "" },
      { url: "chantier-01-6.jpeg", alt: "" },
      { url: "chantier-01-7.jpeg", alt: "" },
      { url: "chantier-01-8.jpeg", alt: "" },
      { url: "chantier-01-9.jpeg", alt: "" },
      { url: "chantier-01-10.jpeg", alt: "" },
      { url: "chantier-01-11.jpeg", alt: "" },
      { url: "chantier-01-12.jpeg", alt: "" },
      { url: "realisations-1.jpeg", alt: "" },
      { url: "realisations-2.jpeg", alt: "" },
      { url: "realisations-3.jpeg", alt: "" },
      { url: "realisations-4.jpeg", alt: "" },
      { url: "realisations-5.jpeg", alt: "" },
      { url: "realisations-6.jpeg", alt: "" },
      { url: "realisations-7.jpeg", alt: "" },
      { url: "realisations-8.jpeg", alt: "" },
      { url: "realisations-9.jpeg", alt: "" },
      { url: "realisations-10.jpeg", alt: "" },
      { url: "realisations-11.jpeg", alt: "" },
      { url: "realisations-12.jpeg", alt: "" },
      { url: "realisations-13.jpeg", alt: "" },
      { url: "realisations-14.jpeg", alt: "" },
      { url: "realisations-15.jpeg", alt: "" },
      { url: "realisations-16.jpeg", alt: "" },
    ],
    sections: [
      {
        title: "NOS SAVOIR FAIRE :",
        body: (
          <ul className="list-disc pl-4">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        ),
      },
    ],
    cards: [],
  },
  ravalement: {
    title: "Ravalements",
    tags : "Ravalement de façade, Peinture extérieure, Réparation de façade, Nettoyage de façade, Protection de façade",
    description: "Besoin de ravalement de façade ou de peinture extérieure ? Nos experts offrent des services complets de réparation, nettoyage et protection de façade à Vannes et ses environs. Contactez-nous dès maintenant pour une façade impeccable et durable.",
    photos: [
      { url: "ravalement-1-1.jpeg", alt: "gallery" },
      { url: "ravalement-1-2.jpeg", alt: "gallery" },
      { url: "ravalement-1-3.jpeg", alt: "gallery" },
      { url: "ravalement-1-4.jpeg", alt: "gallery" },
      { url: "ravalement-1-5.jpeg", alt: "gallery" },
      { url: "ravalement-1-6.jpeg", alt: "gallery" },
      { url: "ravalement-1-7.jpeg", alt: "gallery" },
    ],
    sections: [
      {
        title: "Envie ou besoin d'une nouvelle peinture pour vos façades ?",
        body: (
          <>
            <p>
              Ker Protec, votre peintre à Vannes, saura vous conseiller afin de
              mener à bien votre projet de ravalement peinture de votre maison.
            </p>
            <p>
              Un très grand choix de couleurs est disponible, ainsi qu&apos;une
              peinture adaptée à votre projet de ravalement.
            </p>
          </>
        ),
      },

      {
        title: "LES DIFFÉRENTES ÉTAPES D’UN RAVALEMENT DE FAÇADE :",
        body: (
          <>
            <h1>Les différentes étapes d&apos;un ravalement de façade</h1>
            <p>
              Afin de satisfaire vos demandes, il faut dans un premier temps
              préparer le chantier :
            </p>
            <ul>
              <li>Nettoyage de vos façades et pignons.</li>
              <li>
                Décapage, retrait de la peinture écaillée, réparation des
                fissures et rebouchage des zones abîmées ou différences de
                surface.
              </li>
              <li>
                Protection du mobilier extérieur et des zones non peintes, sols
                et terrasse, portes et volets.
              </li>
              <li>
                La mise en peinture : l&apos;application d&apos;un fixateur si nécessaire,
                ensuite deux couches de peinture seront appliquées.
              </li>
              <li>
                Un nettoyage du chantier sera systématiquement effectué pour
                vous rendre les lieux comme avant notre intervention.
              </li>
            </ul>
            <p>
              Nous mettons un point d&apos;honneur à la satisfaction de nos clients.
            </p>
            <br />
            <ul className="list-disc pl-4">
              <li>La préparation du chantier</li>
              <li>Le nettoyage ou le décapage de la façade</li>
              <li>La réparation et le traitement des murs</li>
              <li>La protection et/ou l’embellissement.</li>
            </ul>
          </>
        ),
      },
    ],
    cards: [],
  },
  accueil: {
    title: "Peinture intérieure, décoration, ravalement à Vannes, Theix et ses alentours,  Morbihan - Ker Protec",
    tags : "Peinture intérieure, Travaux de peinture, Rénovation intérieure, Revêtements muraux, Décoration intérieure, Peinture décorative, Ravalement de façade, Peinture extérieure, Réparation de façade, Nettoyage de façade, Protection de façade, Nettoyage de toiture, Nettoyage extérieur, Traitement anti-mousse, Traitement hydrofuge Vannes, Auray, Lorient, Pontivy, Quiberon, Morbihan",
    description: "Ker Protec propose une gamme complète de services pour la rénovation et la décoration de votre intérieur, ainsi que pour l'entretien et la protection de vos façades et toitures à Vannes et ses environs, y compris Auray, Lorient, Pontivy, Quiberon et d'autres villes du Morbihan. Nos experts réalisent des travaux de peinture intérieure, revêtements muraux, ravalement de façade, peinture extérieure, nettoyage de façade, nettoyage de toiture et traitement anti-mousse. Contactez-nous pour des solutions sur mesure et une qualité professionnelle."
    ,
    photos: [
      { url: "peinture-interieur-21-02-24-1.jpeg", alt: "" },
      { url: "peinture-interieur-21-02-24-2.jpeg", alt: "" },
      { url: "peinture-interieur-21-02-24-3.jpeg", alt: "" },
      { url: "peinture-interieur-21-02-24-4.jpeg", alt: "" },
    ],
    sections: [

    ],
    cards: [],
  },

};
