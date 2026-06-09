const reports = [
  {
    id: "grl-53-11-solid-earth",
    date: "2026-06-09",
    issue: "Volume 53, Issue 11",
    issueDate: "2026-06-16",
    title: "GRL Solid Earth Article Brief",
    source: "https://agupubs.onlinelibrary.wiley.com/toc/19448007/current",
    recommendation: {
      label: "Most Recommended",
      title: "Integrated Geophysical Imaging Reveals the Origin and Pathways of Mantle-Derived CO2 Beneath the Tangra Yumco Rift, Central Tibet",
      text: "This is the most novel paper in the set because it connects receiver functions, S-wave velocity inversion, tomoDD imaging, and CO2/3He observations into a single crust-mantle degassing system, linking deep lithospheric structure to surface degassing and ecological anomalies."
    },
    articles: [
      {
        title: "Shallow Modeling and Site-Amplification From Telecommunications Fibers in Istanbul",
        topic: "Urban Seismic Hazard",
        region: "Istanbul, Turkiye",
        method: "DAS ambient noise; shallow Vs inversion; site-amplification estimates",
        interestTags: ["Seismology"],
        authors: "Daniel Bowden, Ali Shaikhsulaiman, Simon Grieder, Ebru Bozdağ, Ali Özgün Konca, Semih Ergintav, Esra Ertan, Evrim Yavuz, Muhammed Ünlü, Andreas Fichtner",
        keyPoints: [
          "Existing telecommunications fibers in Istanbul are used to image the shallow subsurface down to 100 m depth from urban ambient noise.",
          "Rayleigh wave dispersion and trans-dimensional Monte Carlo inversion produce shear-wave velocity models consistent with local geology.",
          "1D velocity estimates, 2D simulations, and earthquake recordings give broadly consistent site-amplification patterns."
        ],
        onlineDate: "2026-05-30",
        issueDate: "2026-06-16",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025GL121011"
      },
      {
        title: "Interseismic Creep Along the Enriquillo-Plantain Garden Fault, Haiti, Estimated From InSAR",
        topic: "Active Faults and Geodesy",
        region: "Haiti",
        method: "Sentinel-1 InSAR time series; interseismic deformation inversion",
        interestTags: ["Crustal Deformation"],
        authors: "Rishabh Dutta, Jeremy L. Maurer, Yi-Chieh Lee",
        keyPoints: [
          "Sentinel-1 PS+DS InSAR time series resolve 2017-2021 deformation in highly vegetated southern Haiti.",
          "Interseismic creep occurs along the EPGF and adjacent Grand'Anse-Sud border faults, with pure strike slip and rates up to 9 mm/yr.",
          "Left-lateral plate motion may be accommodated aseismically on the EPGF, while thrust earthquakes dominate regional convergence on secondary faults."
        ],
        onlineDate: "2026-05-30",
        issueDate: "2026-06-16",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2025GL119670"
      },
      {
        title: "Integrated Geophysical Imaging Reveals the Origin and Pathways of Mantle-Derived CO2 Beneath the Tangra Yumco Rift, Central Tibet",
        topic: "Crust-Mantle Fluids and Rifting",
        region: "Central Tibet",
        method: "Receiver functions; S-wave velocity inversion; tomoDD earthquake relocation and imaging",
        interestTags: ["Seismology", "Crustal Deformation"],
        authors: "Zongxu Li, Rizheng He, Hanhan Tang, Qiang Xu, Lei Gao, Yulan Li, Lihui Tan, Xiao Niu, Ruo Jia",
        keyPoints: [
          "Receiver functions, nonlinear S-wave inversion, and tomoDD tomography reveal a vertical crust-mantle degassing system bounded by the Zhala and Wozang faults.",
          "Two mantle low-velocity zones near 70 km depth are interpreted as Neo-Tethys and Shiquanhe-Jiali Tethys oceanic remnants.",
          "Crustal low-velocity and high-conductivity zones provide upward fluid pathways linking lithospheric dynamics to surface degassing and ecological anomalies."
        ],
        onlineDate: "2026-05-30",
        issueDate: "2026-06-16",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026GL121927"
      },
      {
        title: "Fluid-Induced Magnetic Enhancement in Sandstone Friction Experiments: Implications for Coseismic Fault Temperature Estimates",
        topic: "Fault Rock Physics",
        region: "Laboratory experiment",
        method: "Fluid-saturated sandstone friction experiments; rock magnetic analysis",
        interestTags: ["Fault Damage Zone"],
        authors: "Qiang Fu, Mark J. Dekkers, Simo Spassov, Derya Gürer, Chien-Cheng Hung, Job P. B. Arts, André R. Niemeijer",
        keyPoints: [
          "Dry shearing produces negligible magnetic changes, whereas fluid-saturated shearing strongly enhances magnetic signatures in sandstone gouge.",
          "Fluid-saturated conditions promote magnetic mineral grain growth and metallic iron formation without requiring strong frictional heating.",
          "Coseismic temperature estimates from fault-rock magnetism need to account for fluid-mediated magnetic alteration."
        ],
        onlineDate: "2026-05-28",
        issueDate: "2026-06-16",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026GL121692"
      },
      {
        title: "The 2025 Mw 7.6 Aomori-Oki Megathrust Sequence and a Slip-Parallel Seismic Belt to the Trench",
        topic: "Subduction Zone Earthquakes",
        region: "Aomori-Oki, Japan",
        method: "Waveform inversion; aftershock relocation; trench-side structural interpretation",
        interestTags: ["Seismology", "Crustal Deformation"],
        authors: "Keisuke Yoshida, Masaoki Uno, Dan Bassett",
        keyPoints: [
          "Waveform inversion resolves more than 1 m of slip extending about 40 km northward from the hypocenter and overlapping the inferred 1968 northern asperity.",
          "Relocated aftershocks form plate-convergence-aligned streaks, including a dense Mw 6.7 cluster associated with a local bathymetric high.",
          "The 2025 sequence and historical M >= 5 events define a trenchward slip-parallel seismic belt shaped by subducting roughness and inherited upper-plate structures."
        ],
        onlineDate: "2026-06-06",
        issueDate: "2026-06-16",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026GL122361"
      },
      {
        title: "The Role of Mafic Intrusion in Seismotectonics: Insights From the 1668 M 8.5 Tancheng Earthquake Rupture Zone Along the Tan-Lu Fault Zone, Eastern China",
        topic: "Intraplate Faulting and Crustal Structure",
        region: "Tan-Lu Fault Zone, China",
        method: "Dense-array receiver functions; Vp/Vs and Moho conversion analysis",
        interestTags: ["Seismology", "Fault Damage Zone", "Crustal Deformation"],
        authors: "Yuchen Huang, Huajian Yao, Mengxuan Yan, Shengzhe Zhao, Yichen Pan, Guili Zhou, Bohan Zhang",
        keyPoints: [
          "Dense-array receiver functions resolve crustal thickness, Vp/Vs ratio, and seismic discontinuities across the 1668 Tancheng earthquake rupture zone.",
          "High Vp/Vs ratio and weak Moho Ps conversion correlate with the eastern branch, the main late-Quaternary active and seismogenic fault.",
          "The TLFZ may channel asthenospheric upwelling and mafic intrusion, enhancing tectonic stress accumulation and large intraplate earthquake potential."
        ],
        onlineDate: "2026-06-06",
        issueDate: "2026-06-16",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026GL121685"
      }
    ]
  },
  {
    id: "grl-53-10-solid-earth",
    date: "2026-06-09",
    issue: "Volume 53, Issue 10",
    issueDate: "2026-05-28",
    title: "GRL Solid Earth Article Brief",
    source: "https://agupubs.onlinelibrary.wiley.com/toc/19448007/2026/53/10",
    recommendation: {
      label: "Most Recommended",
      title: "Dynamic Coupling Between Faulting, Rifting and Magmatism During 2021-2025 Unrest on Reykjanes Peninsula, Iceland",
      text: "This is the strongest recommendation from Issue 10 because it directly couples seismicity, focal mechanisms, satellite geodesy, surface deformation, rifting, and eruptions into one active plate-boundary system, making it especially relevant to seismology, faulting, and crustal deformation."
    },
    articles: [
      {
        title: "The Fate of Iron Formations in the Deep Mantle: Constraints From Iron Oxide Reduction Kinetics Experiments",
        topic: "Deep Mantle Mineral Physics",
        region: "Deep mantle / core-mantle boundary",
        method: "High-pressure reduction kinetics experiments",
        interestTags: ["Seismology"],
        authors: "Jemila A. Edmond, Scott J. Maurer, James A. Van Orman",
        keyPoints: [
          "Subducted iron formations may reach the lowermost mantle and influence density and seismic velocities near the core-mantle boundary.",
          "High-pressure experiments constrain hematite and magnetite reduction to wustite under deep mantle-relevant conditions.",
          "Iron diffusion kinetics help test whether iron formations can retain enough ferric iron to explain ultra-low velocity zone properties."
        ],
        onlineDate: "2026-05-12",
        issueDate: "2026-05-28",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025GL119426"
      },
      {
        title: "Discovery of Repeating Shallow Moonquakes in the Apollo Lunar Seismic Data",
        topic: "Planetary Seismology",
        region: "Moon",
        method: "Apollo lunar seismic data analysis; repeating-event identification",
        interestTags: ["Seismology"],
        authors: "Keisuke Onodera",
        keyPoints: [
          "Repeating shallow moonquakes were identified for the first time in renewed Apollo lunar seismic data.",
          "The repeating events have equal polarity even though they occurred in opposite tidal phases.",
          "The result implies that tidal stress is not the dominant driver of fault slip for the repeating shallow moonquakes."
        ],
        onlineDate: "2026-05-20",
        issueDate: "2026-05-28",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026GL122541"
      },
      {
        title: "Spin Transition of Fe3+ in δ-(Al,Fe)OOH and Implication for Mid-Lower Mantle Seismic Heterogeneities",
        topic: "Deep Mantle Seismic Heterogeneity",
        region: "Mid-lower mantle",
        method: "Synchrotron single-crystal X-ray diffraction at high pressure and temperature",
        interestTags: ["Seismology"],
        authors: "Chaoshuai Zhao, Zhu Mao, Xinyue Zhang, Yingxin Yu, Ningyu Sun, Jianbo Zhang, Yuzhu Wang, Takayuki Ishii",
        keyPoints: [
          "Lattice parameters of δ-(Al,Fe)OOH were measured at high pressure and temperature by synchrotron single-crystal X-ray diffraction.",
          "The bulk modulus and sound velocity of δ-(Al,Fe)OOH show significant elastic softening across the spin crossover.",
          "Velocity softening in δ-(Al,Fe)OOH may contribute to local seismic heterogeneities in the mid-lower mantle."
        ],
        onlineDate: "2026-05-12",
        issueDate: "2026-05-28",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025GL121007"
      },
      {
        title: "Temporal Variations in Seismic Ambient Noise Identify Seasonal Changes in Basal Conditions at Sermeq Kujalleq in Kangia, Greenland",
        topic: "Cryoseismology and Glacier Dynamics",
        region: "Sermeq Kujalleq in Kangia, Greenland",
        method: "Seismic HVSR; GNSS; Rayleigh-wave resonance modeling",
        interestTags: ["Seismology", "Crustal Deformation"],
        authors: "Janneke van Ginkel, Adrien Wehrlé, Ana Nap, Fabian Walter, Andrea Kneib-Walter, Hugo Rousseau, Martin P. Lüthi",
        keyPoints: [
          "Seismic ambient noise recorded by on-ice sensors tracks seasonal changes in basal conditions in West Greenland.",
          "A low-frequency, high-amplitude resonance peak appears in the seismic data at the start of the melt season.",
          "Resonance and basal-water-pressure modeling support till rigidity reduction by water saturation as the driving process."
        ],
        onlineDate: "2026-05-15",
        issueDate: "2026-05-28",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026GL122613"
      },
      {
        title: "Deformation of δ-AlOOH and Its Solid Solution With Phase H as a Potential Source of Intra-Slab Seismic Anisotropy in the Mid-Mantle",
        topic: "Slab Mineral Physics and Seismic Anisotropy",
        region: "Mid-mantle subduction zones",
        method: "High-pressure deformation experiments; crystallographic preferred orientation analysis",
        interestTags: ["Seismology", "Crustal Deformation"],
        authors: "Wentian Wu, Yu Nishihara, Noriyoshi Tsujino, Sho Kakizawa, Yuji Higo",
        keyPoints: [
          "High-pressure and high-temperature deformation experiments were conducted on δ-AlOOH and δ-H under lower-mantle transition-zone conditions.",
          "Simple shear experiments suggest (010)[001] as the likely dominant slip system, producing fabrics with strong elastic anisotropy.",
          "δ-phase fabrics under horizontal flow may partly contribute to negative radial anisotropy near flattened slab tops in the mid-mantle."
        ],
        onlineDate: "2026-05-12",
        issueDate: "2026-05-28",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026GL122235"
      },
      {
        title: "Seismic Precursors to the Blatten, Switzerland Landslide Revealed by Unsupervised Machine Learning",
        topic: "Landslide Seismology",
        region: "Blatten, Switzerland",
        method: "Unsupervised machine learning on continuous seismic data",
        interestTags: ["Seismology", "Fault Damage Zone", "Crustal Deformation"],
        authors: "Reza Esfahani, Michel Campillo, Léonard Seydoux, Kiwamu Nishida, Guillaume Favre-Bulle",
        keyPoints: [
          "Unsupervised machine learning separates seismic signatures of rockfall, sliding-related events, and cultural noise.",
          "The analysis suggests an approximately exponential increase in the number and amplitude of seismic precursors before collapse.",
          "The seismic precursors are interpreted as consistent with slip weakening and progressive growth of slip."
        ],
        onlineDate: "2026-05-15",
        issueDate: "2026-05-28",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025GL121175"
      },
      {
        title: "Does Geocentric Sea-Level Rise in the Maritime Continent Reveal a Tectonic Fingerprint?",
        topic: "Tectonic Deformation and Sea Level",
        region: "Maritime Continent / Sumatra-Andaman subduction zone",
        method: "Satellite sea-level decomposition; GRACE geoid comparison",
        interestTags: ["Crustal Deformation"],
        authors: "Nidheesh Gangadharan, Sophie Coulson, Brent G. Delbridge, Grace Ertel, Aurel Moise, Matthew D. Palmer",
        keyPoints: [
          "A process decomposition of observed geocentric sea-level trends is presented for the Maritime Continent.",
          "A residual signal coincides with GRACE-derived long-term geoid change along the 2004 Indian Ocean earthquake rupture zone.",
          "The correspondence suggests a tectonic contribution to regional geocentric sea-level trends through gravity-field perturbations."
        ],
        onlineDate: "2026-05-15",
        issueDate: "2026-05-28",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026GL122469"
      },
      {
        title: "Deep-Seated Landslide Stability on Curved Basal Surfaces With and Without Glacier Buttressing",
        topic: "Landslide Mechanics",
        region: "Deglaciating mountain slopes",
        method: "Two-dimensional mechanical modeling with Mohr-Coulomb friction and ice buttressing",
        interestTags: ["Fault Damage Zone", "Crustal Deformation"],
        authors: "Rishav Mallick, Noah Finnegan, Eric J. Fielding",
        keyPoints: [
          "A two-dimensional mechanical model links landslide geometry to friction, basal curvature, and ice buttressing.",
          "Basal curvature produces a self-stabilizing effect that promotes equilibrium after ice loss.",
          "Transient accelerations during deglaciation reflect adjustment between stable equilibrium states."
        ],
        onlineDate: "2026-05-12",
        issueDate: "2026-05-28",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025GL120090"
      },
      {
        title: "Radon-222 as an Effective Tracer to Distinguish Groundwater Circulation Patterns in the Deep Fault-Controlled Geothermal System",
        topic: "Fault-Controlled Hydrothermal Systems",
        region: "Tibetan Plateau",
        method: "Radon-222 tracing; hydrochemistry; stable isotopes",
        interestTags: ["Fault Damage Zone"],
        authors: "Xiaoyan Shi, Xingxing Kuang, Meizhuang Zhu, Linfeng Fan, Xinkang Wang, Gexi Zheng, Yinlei Hao, Chunmiao Zheng",
        keyPoints: [
          "222Rn distinguishes deep-, mixing-, and shallow-dominated circulation patterns in a fault-controlled hydrogeothermal system.",
          "Elevated 222Rn occurs in deep-sourced or meteoric-recharged groundwater, while low activities indicate mixing-induced degassing.",
          "Integrating 222Rn with hydrogeochemical data provides a practical tool for assessing geothermal resources in tectonic settings."
        ],
        onlineDate: "2026-05-14",
        issueDate: "2026-05-28",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026GL122566"
      },
      {
        title: "Poromechanical and Crack Evolution of Olivine-Rich Rock During Serpentinization",
        topic: "Fault Rock and Serpentinization Mechanics",
        region: "Laboratory experiment",
        method: "Serpentinization experiments; poromechanical tests; micro-CT; mercury intrusion porosimetry",
        interestTags: ["Seismology", "Fault Damage Zone"],
        authors: "Ummu-kulthum Lawal, Kiseok Kim",
        keyPoints: [
          "Serpentinization decreases drained and unjacketed bulk moduli through mineral transformation and microcrack generation.",
          "Micro-CT and mercury intrusion porosimetry suggest a coupled mechanism of crack initiation and hydration-related filling.",
          "The mineral and microstructural changes explain reduced seismic velocities and weakened mantle strength."
        ],
        onlineDate: "2026-05-21",
        issueDate: "2026-05-28",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025GL120883"
      },
      {
        title: "Subducting Slab Thermo-Petrologic Structure and Intermediate-Depth Supra-Slab Earthquakes Beneath Southern Colombia",
        topic: "Subduction Zone Seismology",
        region: "Southern Colombia",
        method: "2D thermo-petrologic modeling; comparison with seismological observations",
        interestTags: ["Seismology", "Crustal Deformation"],
        authors: "Benjamin M. Knott-Byars, Ikuko Wada, Brandon T. Bishop, Linda M. Warren, Sungwon Cho",
        keyPoints: [
          "The maximum depth of decoupling is anomalously deep in southern Colombia because of a partially subducted accreted oceanic terrane.",
          "The anomalously deep decoupling produces relatively cold slab conditions despite the young age of the subducting plate.",
          "Relatively deep peaks in slab-derived H2O flux correlate with the distribution of intermediate-depth supra-slab earthquakes."
        ],
        onlineDate: "2026-05-24",
        issueDate: "2026-05-28",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025GL118610"
      },
      {
        title: "Dynamic Coupling Between Faulting, Rifting and Magmatism During 2021-2025 Unrest on Reykjanes Peninsula, Iceland",
        topic: "Faulting, Rifting, and Magmatism",
        region: "Reykjanes Peninsula, Iceland",
        method: "Seismicity; focal mechanisms; satellite geodesy; surface deformation; eruption data",
        interestTags: ["Seismology", "Fault Damage Zone", "Crustal Deformation"],
        authors: "Tomáš J. Fischer, Pavla Hrubcová, Josef Vlček, Gregory P. De Pascale, Thorvaldur Thordarson, Halldór Geirsson, Anthony Lomax, Robert Skoumal",
        keyPoints: [
          "Geodetic and seismic observations track consistent surface deformation and seismic faulting at depth.",
          "Extensional fracture reactivation starts with strike-slip earthquakes and progresses to graben opening accompanied by normal events.",
          "As extension progressed, seismicity in both moment and event number was no longer a reliable predictor of eruptions."
        ],
        onlineDate: "2026-05-15",
        issueDate: "2026-05-28",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026GL122058"
      },
      {
        title: "High-Pressure Elasticity of CAS Phase and Its Implications for the Fate of Subducted Anorthosite Crust",
        topic: "Subducted Crust Mineral Physics",
        region: "Mantle transition zone",
        method: "First-principles elasticity calculations",
        interestTags: ["Seismology"],
        authors: "Baoyun Wang, Meisu Xiang",
        keyPoints: [
          "First-principles calculations constrain the high-pressure elastic properties of CAS phase up to 30 GPa.",
          "Modeled anorthosite crust has higher density and seismic velocities than pyrolite within the mantle transition zone.",
          "Buoyancy effects suggest subducted anorthosite crust may accumulate at the base of the transition zone and contribute to high-velocity anomalies."
        ],
        onlineDate: "2026-05-24",
        issueDate: "2026-05-28",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025GL121287"
      }
    ]
  }
];

const interestKeywords = [
  {
    label: "Seismology",
    relatedTerms: [
      "seismic",
      "seismology",
      "earthquake",
      "receiver function",
      "waveform inversion",
      "aftershock",
      "ambient noise",
      "DAS",
      "tomoDD",
      "Vp/Vs",
      "Moho"
    ]
  },
  {
    label: "Fault Damage Zone",
    relatedTerms: [
      "fault zone",
      "fault gouge",
      "fault rock",
      "friction",
      "shearing",
      "rupture zone",
      "damage zone",
      "mafic intrusion",
      "permeability"
    ]
  },
  {
    label: "Crustal Deformation",
    relatedTerms: [
      "crustal deformation",
      "deformation",
      "InSAR",
      "creep",
      "slip",
      "rift",
      "extension",
      "strain",
      "uplift",
      "subsidence"
    ]
  }
];

const state = {
  query: "",
  interest: ""
};

const latest = reports[0];
const allArticles = reports.flatMap((report) =>
  report.articles.map((article) => ({
    ...article,
    reportTitle: report.title,
    reportIssue: report.issue
  }))
);
const el = {
  latestTitle: document.querySelector("#latest-title"),
  latestMeta: document.querySelector("#latest-meta"),
  latestCount: document.querySelector("#latest-count"),
  latestSummary: document.querySelector("#latest-summary"),
  latestList: document.querySelector("#latest-list"),
  searchResults: document.querySelector("#search-results"),
  searchCount: document.querySelector("#search-count"),
  archiveList: document.querySelector("#archive-list"),
  archiveCount: document.querySelector("#archive-count"),
  detail: document.querySelector("#report-detail"),
  detailTitle: document.querySelector("#detail-title"),
  detailMeta: document.querySelector("#detail-meta"),
  detailSource: document.querySelector("#detail-source"),
  detailSummary: document.querySelector("#detail-summary"),
  detailList: document.querySelector("#detail-list"),
  filters: document.querySelector("#interest-filters"),
  search: document.querySelector("#search-input")
};

function normalize(value) {
  return String(value || "").toLowerCase().trim();
}

function getArticleSearchText(article) {
  const haystack = normalize([
    article.title,
    article.authors,
    article.topic,
    article.region,
    article.method,
    article.reportIssue,
    (article.interestTags || []).join(" "),
    (article.keyPoints || []).join(" ")
  ].join(" "));

  return haystack;
}

function matchesInterest(article, interestLabel) {
  if (!interestLabel) return true;
  const articleInterestTags = article.interestTags || [];
  if (articleInterestTags.includes(interestLabel)) return true;
  if (articleInterestTags.length) return false;

  const interest = interestKeywords.find((item) => item.label === interestLabel);
  if (!interest) return false;

  const haystack = getArticleSearchText(article);
  return interest.relatedTerms.some((term) => haystack.includes(normalize(term)));
}

function articleMatches(article) {
  const query = normalize(state.query);
  const interestMatch = matchesInterest(article, state.interest);
  if (!query) return interestMatch;

  return interestMatch && getArticleSearchText(article).includes(query);
}

function hasActiveSearch() {
  return Boolean(normalize(state.query) || state.interest);
}

function getPdfLink(article) {
  if (article.pdfLink) return article.pdfLink;
  if (!article.link.includes("/doi/")) return article.link;
  if (article.link.includes("/doi/full/")) return article.link.replace("/doi/full/", "/doi/pdf/");

  return article.link.replace("/doi/", "/doi/pdf/");
}

function renderArticleCard(article, options = {}) {
  const issueTag = options.showIssue ? `<span class="tag">${article.reportIssue}</span>` : "";

  return `
    <article class="article-card">
      <div>
        <div class="article-topline">
          <span class="tag topic">${article.topic}</span>
          <span class="tag">${article.region}</span>
          ${issueTag}
        </div>
        <h3>
          <a class="article-title-link" href="${article.link}" target="_blank" rel="noreferrer">
            ${article.title}
          </a>
        </h3>
        <p class="article-authors">${article.authors}</p>
        <ul class="key-points">
          ${article.keyPoints.map((point) => `<li>${point}</li>`).join("")}
        </ul>
        <div class="article-meta">${article.method}</div>
      </div>
      <a class="article-link" href="${getPdfLink(article)}" target="_blank" rel="noreferrer">PDF</a>
    </article>
  `;
}

function validateReports() {
  reports.forEach((report) => {
    if (!report.issueDate) return;

    report.articles.forEach((article) => {
      if (!article.issueDate) return;
      if (article.issueDate !== report.issueDate) {
        console.warn(
          `Issue date mismatch: "${article.title}" is ${article.issueDate}, expected ${report.issueDate}.`
        );
      }
    });
  });
}

function renderHeader() {
  el.latestTitle.textContent = `${latest.title} | ${latest.issue}`;
  el.latestMeta.textContent = "Source: AGU/Wiley current issue; DOI metadata verified against the issue record.";
  el.latestCount.innerHTML = `<strong>${latest.articles.length}</strong><span>Solid Earth articles</span>`;
}

function renderRecommendation() {
  el.latestSummary.innerHTML = `
    <article class="recommendation-card">
      <b>${latest.recommendation.label}</b>
      <h3>${latest.recommendation.title}</h3>
      <p>${latest.recommendation.text}</p>
    </article>
  `;
}

function renderFilters() {
  el.filters.innerHTML = interestKeywords
    .map((interest) => `
      <button class="filter-button" type="button" data-interest="${interest.label}" aria-pressed="${interest.label === state.interest}">
        ${interest.label}
      </button>
    `)
    .join("");
}

function renderLatestArticles() {
  el.latestList.innerHTML = latest.articles.map((article) => renderArticleCard(article)).join("");
}

function renderSearchResults() {
  if (!hasActiveSearch()) {
    el.searchCount.textContent = "";
    el.searchResults.innerHTML = "";
    return;
  }

  const visible = allArticles.filter(articleMatches);
  el.searchCount.textContent = `${visible.length} result${visible.length === 1 ? "" : "s"}`;

  if (!visible.length) {
    el.searchResults.innerHTML = `<div class="empty-state">No matching articles. Try another keyword or interest keyword.</div>`;
    return;
  }

  el.searchResults.innerHTML = visible.map((article) => renderArticleCard(article, { showIssue: true })).join("");
}

function renderArchive() {
  const archive = reports.slice(1);
  el.archiveCount.textContent = archive.length ? `${archive.length} report${archive.length === 1 ? "" : "s"}` : "No archived reports yet";

  if (!archive.length) {
    el.archiveList.innerHTML = `
      <div class="empty-state">
        This report is the first archived entry. Older issues will appear here after they are added to the dataset.
      </div>
    `;
    return;
  }

  el.archiveList.innerHTML = archive
    .map((report) => `
      <a class="archive-item" href="#${report.id}" aria-label="Open ${report.title} ${report.issue}">
        <div>
          <h3>${report.title} | ${report.issue}</h3>
          <p class="meta-line">${report.articles.length} articles</p>
        </div>
        <span class="article-link">Details</span>
      </a>
    `)
    .join("");
}

function getSelectedReport() {
  const id = window.location.hash.replace("#", "");
  if (!id) return null;
  return reports.find((report) => report.id === id) || null;
}

function renderReportDetail() {
  const report = getSelectedReport();
  if (!report) {
    el.detail.hidden = true;
    el.detailTitle.textContent = "";
    el.detailMeta.textContent = "";
    el.detailSummary.innerHTML = "";
    el.detailList.innerHTML = "";
    return;
  }

  el.detail.hidden = false;
  el.detailTitle.textContent = `${report.title} | ${report.issue}`;
  el.detailMeta.textContent = `${report.articles.length} Solid Earth articles; DOI metadata verified against the issue record.`;
  el.detailSource.href = report.source;
  el.detailSummary.innerHTML = `
    <article class="recommendation-card">
      <b>${report.recommendation.label}</b>
      <h3>${report.recommendation.title}</h3>
      <p>${report.recommendation.text}</p>
    </article>
  `;
  el.detailList.innerHTML = report.articles.map((article) => renderArticleCard(article)).join("");
  el.detail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function render() {
  validateReports();
  renderHeader();
  renderRecommendation();
  renderFilters();
  renderLatestArticles();
  renderSearchResults();
  renderArchive();
  renderReportDetail();
}

el.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderSearchResults();
});

el.filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-interest]");
  if (!button) return;
  state.interest = state.interest === button.dataset.interest ? "" : button.dataset.interest;
  renderFilters();
  renderSearchResults();
});

window.addEventListener("hashchange", renderReportDetail);

render();
