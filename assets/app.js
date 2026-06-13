const reports = [
  {
    id: "grl-53-11-solid-earth",
    date: "2026-06-09",
    journal: "Geophysical Research Letters",
    issue: "Volume 53, Issue 11",
    issueDate: "2026-06-16",
    title: "Solid Earth Article Brief",
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
        keyPoints: ["Existing telecommunications fibers in Istanbul are used to image the shallow subsurface down to 100 m depth from urban ambient noise.", "Rayleigh wave dispersion and trans-dimensional Monte Carlo inversion produce shear-wave velocity models consistent with local geology.", "1D velocity estimates, 2D simulations, and earthquake recordings give broadly consistent site-amplification patterns."],
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
        keyPoints: ["Sentinel-1 PS+DS InSAR time series resolve 2017-2021 deformation in highly vegetated southern Haiti.", "Interseismic creep occurs along the EPGF and adjacent Grand'Anse-Sud border faults, with pure strike slip and rates up to 9 mm/yr.", "Left-lateral plate motion may be accommodated aseismically on the EPGF, while thrust earthquakes dominate regional convergence on secondary faults."],
        onlineDate: "2026-05-30",
        issueDate: "2026-06-16",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025GL119670"
      },
      {
        title: "Integrated Geophysical Imaging Reveals the Origin and Pathways of Mantle-Derived CO2 Beneath the Tangra Yumco Rift, Central Tibet",
        topic: "Crust-Mantle Fluids and Rifting",
        region: "Central Tibet",
        method: "Receiver functions; S-wave velocity inversion; tomoDD earthquake relocation and imaging",
        interestTags: ["Seismology", "Crustal Deformation"],
        authors: "Zongxu Li, Rizheng He, Hanhan Tang, Qiang Xu, Lei Gao, Yulan Li, Lihui Tan, Xiao Niu, Ruo Jia",
        keyPoints: ["Receiver functions, nonlinear S-wave inversion, and tomoDD tomography reveal a vertical crust-mantle degassing system bounded by the Zhala and Wozang faults.", "Two mantle low-velocity zones near 70 km depth are interpreted as Neo-Tethys and Shiquanhe-Jiali Tethys oceanic remnants.", "Crustal low-velocity and high-conductivity zones provide upward fluid pathways linking lithospheric dynamics to surface degassing and ecological anomalies."],
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
        keyPoints: ["Dry shearing produces negligible magnetic changes, whereas fluid-saturated shearing strongly enhances magnetic signatures in sandstone gouge.", "Fluid-saturated conditions promote magnetic mineral grain growth and metallic iron formation without requiring strong frictional heating.", "Coseismic temperature estimates from fault-rock magnetism need to account for fluid-mediated magnetic alteration."],
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
        keyPoints: ["Waveform inversion resolves more than 1 m of slip extending about 40 km northward from the hypocenter and overlapping the inferred 1968 northern asperity.", "Relocated aftershocks form plate-convergence-aligned streaks, including a dense Mw 6.7 cluster associated with a local bathymetric high.", "The 2025 sequence and historical M >= 5 events define a trenchward slip-parallel seismic belt shaped by subducting roughness and inherited upper-plate structures."],
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
        keyPoints: ["Dense-array receiver functions resolve crustal thickness, Vp/Vs ratio, and seismic discontinuities across the 1668 Tancheng earthquake rupture zone.", "High Vp/Vs ratio and weak Moho Ps conversion correlate with the eastern branch, the main late-Quaternary active and seismogenic fault.", "The TLFZ may channel asthenospheric upwelling and mafic intrusion, enhancing tectonic stress accumulation and large intraplate earthquake potential."],
        onlineDate: "2026-06-06",
        issueDate: "2026-06-16",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026GL121685"
      }
    ]
  },
  {
    id: "cee-solid-earth-2026-06-10",
    date: "2026-06-10",
    journal: "Communications Earth & Environment",
    issue: "Recent Solid Earth Candidates (2025-2026)",
    issueDate: "2026-06-10",
    title: "Solid Earth Article Brief",
    source: "https://api.crossref.org/",
    recommendation: {
      label: "Most Recommended",
      title: "Magnetotelluric evidence for long-lived melt layer beneath oceanic lithosphere",
      text: "Magnetotelluric evidence for long-lived melt layer beneath oceanic lithosphere"
    },
    articles: [
      {
        title: "Magnetotelluric evidence for long-lived melt layer beneath oceanic lithosphere",
        topic: "Magnetotelluric Imaging",
        region: "Global / method-focused",
        method: "Magnetotelluric imaging and geophysical interpretation",
        interestTags: ["Crustal Deformation"],
        authors: "Fan Zhang, Bo Yang, Jian Lin, Tao Zhang, Samer Naif, Jiabiao Li, Makoto Uyeshima, Chuanzhou Liu, Weiwei Ding, Xubo Zhang, et al.",
        keyPoints: ["Magnetotelluric evidence for long-lived melt layer beneath oceanic lithosphere", "Electrical conductivity as an independent melt/fluid/lithosphere constraint"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-02",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s43247-026-03703-9",
        pdfLink: "https://www.nature.com/articles/s43247-026-03703-9.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Elevated in-situ Vp/Vs preceding hydraulic-fracturing-induced earthquakes",
        topic: "Earthquake Source Processes",
        region: "Global / method-focused",
        method: "Vp/Vs monitoring; induced-earthquake analysis",
        interestTags: ["Seismology"],
        authors: "Jian Xu, Yajing Liu, Junlun Li, Marco P. Roth, Rebecca M. Harrington, Yicheng He",
        keyPoints: ["Elevated in-situ Vp/Vs preceding hydraulic-fracturing-induced earthquakes"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-30",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s43247-026-03690-x",
        pdfLink: "https://www.nature.com/articles/s43247-026-03690-x.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Sanukitoid stable isotopes reveal complex crust-mantle dynamics in the early Earth",
        topic: "Mantle and Subduction Dynamics",
        region: "Global / method-focused",
        method: "Isotopic constraints and petrologic interpretation",
        interestTags: ["Crustal Deformation"],
        authors: "Ren-Zhi Zhu, Mike Fowler, Jiyuan Yin, Fang Huang, Robert H. Smithies, Laura M. Spencer, Marc-Alban Millet, Hugo Moreira, Craig Storey, Henrique Bruno, et al.",
        keyPoints: ["Sanukitoid stable isotopes -> complex crust-mantle dynamics in the early Earth", "Evidence: Sanukitoids are generated by mantle–crust interaction, and thus provide a record of early Earth"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-30",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s43247-026-03700-y",
        pdfLink: "https://www.nature.com/articles/s43247-026-03700-y.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Transient mantle–crust interaction restores porphyry copper–molybdenum fertility during continental collision",
        topic: "Mantle and Subduction Dynamics",
        region: "Global / method-focused",
        method: "Geodynamic, petrologic, and tectonic interpretation",
        interestTags: ["Crustal Deformation"],
        authors: "Hadi Shafaii Moghadam, Wenjiao Xiao, William L. Griffin, Massimo Chiaradia, Orhan Karsli, Alireza Almasi, Naeim Mousavi, Suzanne Y. O’Reilly",
        keyPoints: ["Porphyry Cu-Mo fertility restored by mantle-crust interaction: Transient mantle–crust interaction restores porphyry copper–molybdenum fertility", "Collision-zone fertility reframed as transient mantle-crust interaction"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-27",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s43247-026-03642-5",
        pdfLink: "https://www.nature.com/articles/s43247-026-03642-5.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Proposed identification criteria of the Martian lower crust and mantle excavated by the Isidis impact",
        topic: "Mantle and Subduction Dynamics",
        region: "Global / method-focused",
        method: "Geodynamic, petrologic, and tectonic interpretation",
        interestTags: ["Crustal Deformation"],
        authors: "Alexander J. Trowbridge, Briony Horgan, Benjamin P. Weiss, Michael Phillips",
        keyPoints: ["Martian lower crust/mantle criteria from Isidis excavation: Proposed identification criteria of the Martian lower crust and mantle excavated", "Planetary crust/mantle identification criteria tied to a specific impact basin"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-02",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s43247-026-03617-6",
        pdfLink: "https://www.nature.com/articles/s43247-026-03617-6.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Gold mobility in subduction zones, the slab perspective",
        topic: "Mantle and Subduction Dynamics",
        region: "Global / method-focused",
        method: "Geodynamic, petrologic, and tectonic interpretation",
        interestTags: ["Crustal Deformation"],
        authors: "Clifford G. C. Patten, Alexandre Peillod, Simon Hector, Barbara I. Kleine-Marshall, Aratz Beranoaguirre, Antonin Bilau, Kirsten Drüppel, Jesse B. Walters, Iain Pitcairn, Uwe Ring, et al.",
        keyPoints: ["Gold mobility in subduction zones, the slab perspective: Arc environments are locally gold-endowed and it has been long hypothesized that gold mobilization", "Evidence: Our data shows that gold is significantly mobilized by fluids at the blueschist-eclogite facies"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-19",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s43247-026-03653-2",
        pdfLink: "https://www.nature.com/articles/s43247-026-03653-2.pdf",
        pdfLinkSource: "publisher-pattern"
      }
    ]
  },
  {
    id: "epsl-solid-earth-2026-06-10",
    date: "2026-06-10",
    journal: "Earth and Planetary Science Letters",
    issue: "Recent Solid Earth Candidates (2025-2026)",
    issueDate: "2026-06-10",
    title: "Solid Earth Article Brief",
    source: "https://api.crossref.org/",
    recommendation: {
      label: "Most Recommended",
      title: "Tectonic transition in the northern Tibetan Plateau during the Neogene",
      text: "Tectonic transition in the northern Tibetan Plateau during the Neogene"
    },
    articles: [
      {
        title: "Tectonic transition in the northern Tibetan Plateau during the Neogene",
        topic: "Solid Earth Geoscience",
        region: "Tibetan Plateau",
        method: "Tectonic transition reconstruction; regional geologic interpretation",
        interestTags: ["Crustal Deformation"],
        authors: "Hao Xie, Caicai Liu, Zhuqi Zhang, Weitao Wang, Murat Tamer, Xudong Zhao, Kang Liu, Jiawei Zhang, Xuemei Li, Yanjiang Liu, et al.",
        keyPoints: ["Tectonic transition in the northern Tibetan Plateau during the Neogene"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1016/j.epsl.2026.119997",
        pdfLink: null,
        pdfLinkSource: "unresolved"
      },
      {
        title: "Influence of effective normal stress on frictional behavior of granitic faults under hydrothermal conditions",
        topic: "Fault Mechanics",
        region: "Global / method-focused",
        method: "Rock friction experiments and mechanical interpretation",
        interestTags: ["Fault Damage Zone"],
        authors: "Gang Song, Lu Yao, Tao Yang, Shengli Ma",
        keyPoints: ["effective normal stress affects frictional behavior of granitic faults under hydrothermal conditions"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1016/j.epsl.2026.120003",
        pdfLink: null,
        pdfLinkSource: "unresolved"
      },
      {
        title: "Detection of the mushy region at the surface of the Earth’s inner core by an antipodal seismic wave",
        topic: "Solid Earth Geoscience",
        region: "Global / method-focused",
        method: "Seismic data analysis and geophysical interpretation",
        interestTags: ["Seismology"],
        authors: "Seiji Tsuboi, Rhett Butler",
        keyPoints: ["antipodal seismic wave detects mushy region at the surface of the Earth’s inner core"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1016/j.epsl.2026.119963",
        pdfLink: null,
        pdfLinkSource: "unresolved"
      },
      {
        title: "Point defects as a control on the viscosity jump in the lower mantle",
        topic: "Mantle and Subduction Dynamics",
        region: "Global / method-focused",
        method: "Geodynamic, petrologic, and tectonic interpretation",
        interestTags: ["Seismology"],
        authors: "Peixue Dou, John Brodholt, Lidunka Vočadlo, Yunguo Li, Huaiwei Ni",
        keyPoints: ["Point defects controls viscosity jump in the lower mantle"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1016/j.epsl.2026.120008",
        pdfLink: null,
        pdfLinkSource: "unresolved"
      },
      {
        title: "Establishment of subduction at early Earth continent margins by migration: Implications for interpreting geochemical observations",
        topic: "Mantle and Subduction Dynamics",
        region: "Global / method-focused",
        method: "Geodynamic, petrologic, and tectonic interpretation",
        interestTags: ["Crustal Deformation"],
        authors: "Hee Choi, Bradford J. Foley",
        keyPoints: ["Establishment of subduction at early Earth continent margins by migration"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1016/j.epsl.2026.119959",
        pdfLink: null,
        pdfLinkSource: "unresolved"
      },
      {
        title: "Boron isotopes unravel cryptic fluid-rock interactions in sheared subduction zone serpentinites",
        topic: "Mantle and Subduction Dynamics",
        region: "Global / method-focused",
        method: "Isotopic constraints and petrologic interpretation",
        interestTags: ["Crustal Deformation"],
        authors: "Clothilde Minnaert, Samuel Angiboust, Jorge Sanhueza, Rolf L. Romer, Anfisa Skoblenko, Ivan Sobolev, Jesús Muñoz-Montecinos",
        keyPoints: ["Boron isotopes trace fluid-rock interaction: Boron isotopes unravel cryptic fluid-rock interactions in sheared subduction zone", "Isotope signal resolves cryptic subduction-zone fluid-rock exchange"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1016/j.epsl.2026.119993",
        pdfLink: null,
        pdfLinkSource: "unresolved"
      }
    ]
  },
  {
    id: "gji-solid-earth-2026-06-10",
    date: "2026-06-10",
    journal: "Geophysical Journal International",
    issue: "Recent Solid Earth Candidates (2025-2026)",
    issueDate: "2026-06-10",
    title: "Solid Earth Article Brief",
    source: "https://api.crossref.org/",
    recommendation: {
      label: "Most Recommended",
      title: "Full Waveform Inversion Reveals Trans-Tensional-Regime at the Romanche Oceanic Transform Fault in the Equatorial Atlantic Ocean",
      text: "Full Waveform Inversion -> Trans-Tensional-Regime at the Romanche Oceanic Transform Fault in the"
    },
    articles: [
      {
        title: "Full Waveform Inversion Reveals Trans-Tensional-Regime at the Romanche Oceanic Transform Fault in the Equatorial Atlantic Ocean",
        topic: "Fault Mechanics",
        region: "Romanche Transform Fault",
        method: "Seismic tomography and waveform inversion",
        interestTags: ["Fault Damage Zone"],
        authors: "Peng Guo, Satish C Singh",
        keyPoints: ["Full Waveform Inversion -> Trans-Tensional-Regime at the Romanche Oceanic Transform Fault in the", "Waveform-rich constraints for sharper transform-fault structure"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-05",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1093/gji/ggag208",
        pdfLink: "https://academic.oup.com/gji/advance-article-pdf/doi/10.1093/gji/ggag208/68480079/ggag208.pdf",
        pdfLinkSource: "crossref-link"
      },
      {
        title: "Hydro-Seismic Interplays on Perpendicular Faults in Mexico City Revealed by Distributed Acoustic Sensing",
        topic: "Fault Mechanics",
        region: "Mexico City",
        method: "Borehole strain and distributed acoustic sensing analysis",
        interestTags: ["Seismology", "Fault Damage Zone"],
        authors: "Mathieu Perton, Erick Ramos Pérez, Manuel J Aguilar-Velázquez, Yang Li, Zack J Spica, Javier Lermo Samaniego, Alfonso Ortiz-Avila, Valente Ramos Avila",
        keyPoints: ["Distributed Acoustic Sensing -> Hydro-Seismic Interplays on Perpendicular Faults in Mexico City", "Dense fiber-optic observations for Hydro-Seismic Interplays on Perpendicular Faults in Mexico"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-01",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1093/gji/ggag199",
        pdfLink: "https://academic.oup.com/gji/advance-article-pdf/doi/10.1093/gji/ggag199/68441866/ggag199.pdf",
        pdfLinkSource: "crossref-link"
      },
      {
        title: "High-resolution eikonal-based travel time tomography and uncertainty quantification of the Kilauea caldera",
        topic: "Seismic Imaging",
        region: "Kilauea, Hawaii",
        method: "Seismic tomography and waveform inversion",
        interestTags: ["Seismology"],
        authors: "Angela F Gao, John D Wilding, Ettore Biondi, Katherine L Bouman, Zachary E Ross",
        keyPoints: ["High-resolution eikonal-based travel time tomography and uncertainty: Images of the Earth’s interior can provide us with insight into the underlying properties of the Earth"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-25",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1093/gji/ggag179",
        pdfLink: "https://academic.oup.com/gji/advance-article-pdf/doi/10.1093/gji/ggag179/68386109/ggag179.pdf",
        pdfLinkSource: "crossref-link"
      },
      {
        title: "Distributed Acoustic Sensing Observations of the 23 April 2025 Mw 6.2 Marmara Earthquake in Northwestern Türkiye and Its Comparison with Borehole Seismometer Data",
        topic: "Earthquake Source Processes",
        region: "Marmara, Turkiye",
        method: "Borehole strain and distributed acoustic sensing analysis",
        interestTags: ["Seismology"],
        authors: "R F Kartal, F T Kadirioğlu, T Kılıç, V Rodríguez Tribaldos, P Martínez Garzón, M Bohnhoff, L Hillmann, C M Krawczyk",
        keyPoints: ["DAS / fiber sensing signal: Distributed Acoustic Sensing Observations of the 23 April 2025 Mw 6.2 Marmara", "Dense fiber-optic observations for Distributed Acoustic Sensing Observations of the 23 April"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-22",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1093/gji/ggag203",
        pdfLink: "https://academic.oup.com/gji/advance-article-pdf/doi/10.1093/gji/ggag203/68371678/ggag203.pdf",
        pdfLinkSource: "crossref-link"
      },
      {
        title: "On the Resolution of Magnetotelluric Horizontal Magnetic Inter-station Transfer Function",
        topic: "Magnetotelluric Imaging",
        region: "Global / method-focused",
        method: "Magnetotelluric imaging and geophysical interpretation",
        interestTags: ["Seismology"],
        authors: "Gang Wen, Bo Yang, Xiaolei Wu, Lian Liu, Yixian Xu",
        keyPoints: ["On the Resolution of Magnetotelluric Horizontal Magnetic Inter-station Transfer: The horizontal magnetic inter-station transfer function (M) offers distinct advantages in", "Electrical conductivity as an independent melt/fluid/lithosphere constraint"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-08",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1093/gji/ggag217",
        pdfLink: "https://academic.oup.com/gji/advance-article-pdf/doi/10.1093/gji/ggag217/68491771/ggag217.pdf",
        pdfLinkSource: "crossref-link"
      },
      {
        title: "Deep carbon cycling in subduction zones: 2. Moderate thermal parameter favors carbonate dissolution",
        topic: "Mantle and Subduction Dynamics",
        region: "Global / method-focused",
        method: "Geodynamic, petrologic, and tectonic interpretation",
        interestTags: ["Crustal Deformation"],
        authors: "Yang Wang, Zhong-Hai Li, Hengrui Zhang",
        keyPoints: ["Deep carbon cycling in subduction zones: 2. Moderate thermal parameter favors: Carbonate dissolution represents a key mechanism for slab carbon release in oceanic subduction zones", "Evidence: Systematic model results establish a quantitative relationship between the dissolved CO2 outflux and the"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-02",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1093/gji/ggag207",
        pdfLink: "https://academic.oup.com/gji/advance-article-pdf/doi/10.1093/gji/ggag207/68455731/ggag207.pdf",
        pdfLinkSource: "crossref-link"
      }
    ]
  },
  {
    id: "nature-communications-solid-earth-2026-06-10",
    date: "2026-06-10",
    journal: "Nature Communications",
    issue: "Recent Solid Earth Candidates (2025-2026)",
    issueDate: "2026-06-10",
    title: "Solid Earth Article Brief",
    source: "https://api.crossref.org/",
    recommendation: {
      label: "Most Recommended",
      title: "Slow slip modulates low-frequency seismicity on the Parkfield segment of the San Andreas Fault",
      text: "Slow slip + low-frequency seismicity: Slow slip modulates low-frequency seismicity on the Parkfield segment of the San"
    },
    articles: [
      {
        title: "Slow slip modulates low-frequency seismicity on the Parkfield segment of the San Andreas Fault",
        topic: "Slow Slip and Seismicity",
        region: "Parkfield, San Andreas Fault",
        method: "Geodetic and seismicity analysis",
        interestTags: ["Seismology", "Fault Damage Zone", "Crustal Deformation"],
        authors: "Zahra Zali, Patricia Martínez-Garzón, David Mencin, Gregory C. Beroza",
        keyPoints: ["Slow slip + low-frequency seismicity: Slow slip modulates low-frequency seismicity on the Parkfield segment of the San", "Aseismic slip treated as a modulator of fault seismicity, not background noise"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-09",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41467-026-74095-9",
        pdfLink: "https://www.nature.com/articles/s41467-026-74095-9.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Superheating in mafic magmas controls clinopyroxene nucleation delay and magma ascent dynamics",
        topic: "Magmatism and Volcanism",
        region: "Global / method-focused",
        method: "Petrologic and volcanic-system analysis",
        interestTags: ["Seismology"],
        authors: "Barbara Bonechi, Fabio Arzilli, Margherita Polacci, Alessandro Fabbrizio, Giuseppe La Spina, Eleni Michailidou, Elisa Biagioli, Richard A. Brooker, Jean-Louis Hazemann, Robert C. Atwood, et al.",
        keyPoints: ["Superheating in mafic magmas controls clinopyroxene nucleation delay and magma ascent dynamics", "Evidence: Our findings show that superheating delays nucleation by dissolving pre-existing nuclei, thereby"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-08",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41467-026-73352-1",
        pdfLink: "https://www.nature.com/articles/s41467-026-73352-1.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Craton-margin lithosphere drives rare earth element ore-forming carbonatite magmatism",
        topic: "Magmatism and Volcanism",
        region: "Global / method-focused",
        method: "Petrologic and volcanic-system analysis",
        interestTags: ["Crustal Deformation"],
        authors: "Chunfei Chen, Yu Wang, Svyatoslav S. Shcheka, Michael W. Förster, Weicheng Jiang, Yanjing Chen, Stephen F. Foley, Dorrit E. Jacob, Yongsheng Liu",
        keyPoints: ["Craton-margin lithosphere drives rare earth element ore-forming carbonatite magmatism", "Ore-forming carbonatites linked to craton-margin lithosphere"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-04",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41467-026-73918-z",
        pdfLink: "https://www.nature.com/articles/s41467-026-73918-z.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Slab tearing and its surface signals controlled by passive margin strength",
        topic: "Solid Earth Geoscience",
        region: "Global / method-focused",
        method: "Geodynamic modeling; slab-tearing surface-signal analysis",
        interestTags: ["Seismology"],
        authors: "Giridas Maiti, Nevena Andrić-Tomašević, Attila Balázs, Lucas H. J. Eskens, Taras Gerya",
        keyPoints: ["Slab tearing and its surface signals controlled by passive margin strength: Slab tearing, the lateral detachment of subducting oceanic slab from continental lithosphere, is widely"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-04",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41467-026-73963-8",
        pdfLink: "https://www.nature.com/articles/s41467-026-73963-8.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Rapid earthquake magnitude classification via P-wave strains from borehole strainmeters and Distributed Acoustic Sensing",
        topic: "Earthquake Source Processes",
        region: "Global / method-focused",
        method: "Borehole strain and distributed acoustic sensing analysis",
        interestTags: ["Seismology"],
        authors: "T. M. Sawi, J. J. McGuire, A. J. Barbour, C. E. Yoon, M. Karrenbach, C. Stewart",
        keyPoints: ["DAS / fiber sensing signal: Rapid earthquake magnitude classification via P-wave strains from borehole", "Early P-wave strain information for rapid magnitude classification"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-03",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41467-026-72223-z",
        pdfLink: "https://www.nature.com/articles/s41467-026-72223-z.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Convergent mantle flow and plate kinematics contribute to South China Sea rifting",
        topic: "Mantle and Subduction Dynamics",
        region: "South China Sea",
        method: "Geodynamic, petrologic, and tectonic interpretation",
        interestTags: ["Crustal Deformation"],
        authors: "Sanzhong Li, Yanhui Suo, Lijun Liu, Xianzhi Cao, Sabin Zahirovic, Dingshan Deng, Hao Dong, Pengcheng Wang, Cuimei Zhang, Liming Dai",
        keyPoints: ["Convergent mantle flow and plate kinematics contribute to South China Sea rifting"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-02",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41467-026-73808-4",
        pdfLink: "https://www.nature.com/articles/s41467-026-73808-4.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Tectonic and climatic implications of the Aleutian Arc initiation ≥56 million years ago",
        topic: "Solid Earth Geoscience",
        region: "Global / method-focused",
        method: "Geochronology and geochemistry; tectonic-climate interpretation",
        interestTags: ["Crustal Deformation"],
        authors: "K. Hoernle, B. Jicha, M. Portnyagin, S. Zahirovic, D. Müller, F. Hauff, C. Timm, T. W. Höfig, G. Yogodzinski, M. Guillong, et al.",
        keyPoints: ["Tectonic and climatic implications of the Aleutian Arc initiation ≥56 million: The timing and origin of Aleutian subduction initiation remain poorly constrained, yet they are central", "Evidence: Here, we use geochronologic and geochemical data obtained on western Aleutian arc samples from four"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-30",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41467-026-73363-y",
        pdfLink: "https://www.nature.com/articles/s41467-026-73363-y.pdf",
        pdfLinkSource: "publisher-pattern"
      }
    ]
  },
  {
    id: "nature-geoscience-solid-earth-2026-06-10",
    date: "2026-06-10",
    journal: "Nature Geoscience",
    issue: "Recent Solid Earth Candidates (2025-2026)",
    issueDate: "2026-06-10",
    title: "Solid Earth Article Brief",
    source: "https://api.crossref.org/",
    recommendation: {
      label: "Most Recommended",
      title: "The global distribution of CO2-rich magmas is determined by lithospheric thickness",
      text: "lithospheric thickness sets global distribution of CO2-rich magmas"
    },
    articles: [
      {
        title: "The global distribution of CO2-rich magmas is determined by lithospheric thickness",
        topic: "Magmatism and Volcanism",
        region: "Global / method-focused",
        method: "Petrologic and volcanic-system analysis",
        interestTags: ["Seismology"],
        authors: "Emilie E. Bowman, Sally A. Gibson, Siyuan Sui, Sergei Lebedev",
        keyPoints: ["lithospheric thickness sets global distribution of CO2-rich magmas"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-22",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41561-026-01990-7",
        pdfLink: "https://www.nature.com/articles/s41561-026-01990-7.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Deep crustal relamination drives post-collisional magmatism",
        topic: "Magmatism and Volcanism",
        region: "Global / method-focused",
        method: "Petrologic and volcanic-system analysis",
        interestTags: ["Crustal Deformation"],
        authors: "Author metadata unavailable",
        keyPoints: ["Deep crustal relamination drives post-collisional magmatism"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-07",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41561-026-01977-4",
        pdfLink: "https://www.nature.com/articles/s41561-026-01977-4.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Continental evolution influenced by relamination of deeply subducted continental crust",
        topic: "Solid Earth Geoscience",
        region: "Global / method-focused",
        method: "Geodynamic, petrologic, and tectonic interpretation",
        interestTags: ["Crustal Deformation"],
        authors: "Daniel Gómez-Frutos, Antonio Castro, Attila Balázs, Taras Gerya",
        keyPoints: ["Continental evolution influenced by relamination of deeply subducted continental: Post-collisional magmatism has played a critical role in modifying the continental crust since the", "Evidence: Here we use an integrated thermomechanical and magmatic experimental approach to constrain the"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-05",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41561-026-01963-w",
        pdfLink: "https://www.nature.com/articles/s41561-026-01963-w.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Modelling reveals redox budget transfer in Mariana-type subduction systems",
        topic: "Mantle and Subduction Dynamics",
        region: "Mariana subduction system",
        method: "Numerical modeling and source interpretation",
        interestTags: ["Crustal Deformation"],
        authors: "Author metadata unavailable",
        keyPoints: ["Modelling -> redox budget transfer in Mariana-type subduction systems"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-03-19",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41561-026-01937-y",
        pdfLink: "https://www.nature.com/articles/s41561-026-01937-y.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Mantle oxidation influenced by reduction-oxidation budget of Mariana-type subduction zones",
        topic: "Mantle and Subduction Dynamics",
        region: "Mariana subduction system",
        method: "Geodynamic, petrologic, and tectonic interpretation",
        interestTags: ["Crustal Deformation"],
        authors: "Wen-Yong Duan, James A. D. Connolly, Peter E. van Keken, Taras Gerya, Hans-Peter Schertl, Arne P. Willner, Xu-Ping Li, San-Zhong Li",
        keyPoints: ["Mantle oxidation influenced by reduction-oxidation budget of Mariana-type"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-03-04",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41561-026-01939-w",
        pdfLink: "https://www.nature.com/articles/s41561-026-01939-w.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "A fan-shaped subglacial basin province in East Antarctica formed by rotational extension",
        topic: "Solid Earth Geoscience",
        region: "East Antarctica",
        method: "Sub-ice topography and geophysical interpretation",
        interestTags: ["Seismology"],
        authors: "Egidio Armadillo, Daniele Rizzello, Pietro Balbi, Alessandro Ghirotto, Davide Scafidi, Guy J. G. Paxman, Andrea Zunino, Fausto Ferraccioli, Laura Crispini, Andreas Läufer, et al.",
        keyPoints: ["fan-shaped subglacial basin province in East Antarctica formed by rotational: Recent sub-ice topography investigations have imaged—with greatly improved detail—a set of low-elevation", "Evidence: Here we jointly interpret sub-ice topography and geophysical data and show that these basins form a"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-03",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41561-026-01991-6",
        pdfLink: "https://www.nature.com/articles/s41561-026-01991-6.pdf",
        pdfLinkSource: "publisher-pattern"
      }
    ]
  },
  {
    id: "nature-solid-earth-2026-06-10",
    date: "2026-06-10",
    journal: "Nature",
    issue: "Recent Solid Earth Candidates (2025-2026)",
    issueDate: "2026-06-10",
    title: "Solid Earth Article Brief",
    source: "https://api.crossref.org/",
    recommendation: {
      label: "Most Recommended",
      title: "Foreshock-induced slip transients set mainshock nucleation timing",
      text: "Foreshock slip transients tied to nucleation timing: Foreshock-induced slip transients set mainshock nucleation timing"
    },
    articles: [
      {
        title: "Foreshock-induced slip transients set mainshock nucleation timing",
        topic: "Earthquake Source Processes",
        region: "Global / method-focused",
        method: "Seismic transient and earthquake nucleation analysis",
        interestTags: ["Seismology", "Crustal Deformation"],
        authors: "Barnaby Fryer, Dmitry Garagash, Mathias Lebihain, François Passelègue",
        keyPoints: ["Foreshock slip transients tied to nucleation timing: Foreshock-induced slip transients set mainshock nucleation timing", "Preslip as a timing control on mainshock nucleation"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-06",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41586-026-10497-5",
        pdfLink: "https://www.nature.com/articles/s41586-026-10497-5.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Disequilibrium response to tapping crustal magma reveals storage conditions",
        topic: "Magmatism and Volcanism",
        region: "Global / method-focused",
        method: "Petrologic and volcanic-system analysis",
        interestTags: ["Crustal Deformation"],
        authors: "Janine Birnbaum, Fabian B. Wadsworth, Jackie E. Kendrick, Ben Kennedy, Paul A. Wallace, Marize Muniz da Silva, Kai-Uwe Hess, Yan Lavallée",
        keyPoints: ["Disequilibrium response to tapping crustal magma -> storage conditions"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-03-25",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41586-026-10317-w",
        pdfLink: "https://www.nature.com/articles/s41586-026-10317-w.pdf",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "CO2 subsurface mineral storage by its co-injection with recirculating water",
        topic: "Solid Earth Geoscience",
        region: "Global / method-focused",
        method: "Subsurface storage and geochemical interpretation",
        interestTags: ["Seismology"],
        authors: "Eric H. Oelkers, Serguey Arkadakskiy, Zeyad Ahmed, Noushad Kunnummal, Jakub Fedorik, Massimo Marchesi, Mouadh Addassi, Abdirizak Omar, Niccolo Menegoni, Sigurdur R. Gislason, et al.",
        keyPoints: ["CO2 subsurface mineral storage by its co-injection with recirculating water: Carbon capture and storage (CCS) has the potential to help nations meet their Paris Agreement CO 2"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-03-25",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1038/s41586-026-10130-5",
        pdfLink: "https://www.nature.com/articles/s41586-026-10130-5.pdf",
        pdfLinkSource: "publisher-pattern"
      }
    ]
  },
  {
    id: "science-solid-earth-2026-06-10",
    date: "2026-06-10",
    journal: "Science",
    issue: "Recent Solid Earth Candidates (2025-2026)",
    issueDate: "2026-06-10",
    title: "Solid Earth Article Brief",
    source: "https://api.crossref.org/",
    recommendation: {
      label: "Most Recommended",
      title: "Stopping phase reveals abrupt arrest of large strike-slip earthquakes",
      text: "Stopping phase -> abrupt arrest of large strike-slip earthquakes"
    },
    articles: [
      {
        title: "Stopping phase reveals abrupt arrest of large strike-slip earthquakes",
        topic: "Earthquake Source Processes",
        region: "Global / method-focused",
        method: "Earthquake rupture analysis; fault segmentation interpretation",
        interestTags: ["Seismology", "Crustal Deformation"],
        authors: "Jesse Kearse, Yoshihiro Kaneko",
        keyPoints: ["Stopping phase -> abrupt arrest of large strike-slip earthquakes", "Evidence: Analysis of 12 global events shows that transient overshoot in fault-parallel ground surface"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-28",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1126/science.aef3733",
        pdfLink: "https://www.science.org/doi/pdf/10.1126/science.aef3733",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Upper-mantle earthquakes beneath East Antarctica",
        topic: "Earthquake Source Processes",
        region: "East Antarctica",
        method: "Geodynamic, petrologic, and tectonic interpretation",
        interestTags: ["Seismology"],
        authors: "Long M. Ho, José L. Sánchez-Roldán, Samantha E. Hansen, Jacob I. Walter",
        keyPoints: ["Upper-mantle earthquakes beneath East Antarctica: Intraplate intermediate-depth earthquakes (IDEs) occur at depths >70 kilometers, which is well below the", "Evidence: Our results support geodynamic model predictions that intraplate seismicity strongly depends on"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-28",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1126/science.aea9895",
        pdfLink: "https://www.science.org/doi/pdf/10.1126/science.aea9895",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Role of tectonic rock damage in erosional processes: A global analysis",
        topic: "Solid Earth Geoscience",
        region: "Global / method-focused",
        method: "Global erosion-rate analysis; tectonic rock-damage interpretation",
        interestTags: ["Fault Damage Zone", "Crustal Deformation"],
        authors: "B. Kuhasubpasin, S. Moon, C. Lithgow-Bertelloni",
        keyPoints: ["tectonic rock damage shapes erosional processes: A global analysis", "Evidence: Using 1744 beryllium-10 ( 10 Be)–derived erosion rates, we show that erosional efficiency is elevated on"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-21",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1126/science.ady9857",
        pdfLink: "https://www.science.org/doi/pdf/10.1126/science.ady9857",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Predictable seismic cycles result from structural rupture barriers on oceanic transform faults",
        topic: "Earthquake Source Processes",
        region: "Global / method-focused",
        method: "Earthquake rupture analysis; fault segmentation interpretation",
        interestTags: ["Seismology", "Fault Damage Zone"],
        authors: "Jianhua Gong, Wenyuan Fan, Jeffrey J. McGuire, Mark D. Behn, Jessica M. Warren, Emily Roland, Margaret S. Boettcher, John A. Collins, Yajing Liu, Christopher R. German",
        keyPoints: ["Predictable seismic cycles result from structural rupture barriers on oceanic: Earthquakes of magnitude ( M ) >5.5 on oceanic transform faults (OTFs) repeatedly rupture the same", "Rupture barriers/segmentation as controls on Predictable seismic cycles result from structural rupture"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-14",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1126/science.ady6190",
        pdfLink: "https://www.science.org/doi/pdf/10.1126/science.ady6190",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Dynamic segmentation of the Sagaing fault",
        topic: "Fault Mechanics",
        region: "Sagaing Fault",
        method: "Earthquake rupture analysis; fault segmentation interpretation",
        interestTags: ["Fault Damage Zone"],
        authors: "Mingqi Liu, Binhao Wang, Sezim E. Guvercin, Zhen Li, Teng Wang, Chuanjin Liu, Lingyun Ji, Sylvain Barbot",
        keyPoints: ["Dynamic segmentation of the Sagaing fault: The structurally simple Sagaing fault, which ruptured during the 2025 moment magnitude 7.7 Mandalay", "Rupture barriers/segmentation as controls on Dynamic segmentation of the Sagaing fault"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-07",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1126/science.ady3237",
        pdfLink: "https://www.science.org/doi/pdf/10.1126/science.ady3237",
        pdfLinkSource: "publisher-pattern"
      },
      {
        title: "Forecasting volcanic eruptions across scales",
        topic: "Magmatism and Volcanism",
        region: "Global / method-focused",
        method: "Petrologic and volcanic-system analysis",
        interestTags: ["Seismology"],
        authors: "Magnús T. Gudmundsson, Christopher J. Bean",
        keyPoints: ["Forecasting volcanic eruptions across scales"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-05-07",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1126/science.adn6821",
        pdfLink: "https://www.science.org/doi/pdf/10.1126/science.adn6821",
        pdfLinkSource: "publisher-pattern"
      }
    ]
  },
  {
    id: "srl-solid-earth-2026-06-10",
    date: "2026-06-10",
    journal: "Seismological Research Letters",
    issue: "Recent Solid Earth Candidates (2025-2026)",
    issueDate: "2026-06-10",
    title: "Solid Earth Article Brief",
    source: "https://api.crossref.org/",
    recommendation: {
      label: "Most Recommended",
      title: "Coseismic Slip Model and Interseismic Strain Accumulation of the 2025 Mw 7.7 Mandalay, Myanmar, Earthquake Revealed by Geodetic Observations",
      text: "Geodetic Observations -> Coseismic Slip Model and Interseismic Strain Accumulation of the 2025 Mw 7.7"
    },
    articles: [
      {
        title: "Coseismic Slip Model and Interseismic Strain Accumulation of the 2025 Mw 7.7 Mandalay, Myanmar, Earthquake Revealed by Geodetic Observations",
        topic: "Earthquake Source Processes",
        region: "Myanmar",
        method: "Geodetic observations and deformation analysis",
        interestTags: ["Seismology", "Crustal Deformation"],
        authors: "Ke Lu, Shuiping Li, Xin Wang, Xinyu Zhao, Gang Chen, Tingye Tao, Xiaochuan Qu, Yongchao Zhu, Zhenxuan Li",
        keyPoints: ["Geodetic Observations -> Coseismic Slip Model and Interseismic Strain Accumulation of the 2025 Mw 7.7", "Evidence: The results show that the rupture of the Mandalay earthquake is dominated by right-lateral strike-slip"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-03",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1785/0220250370",
        pdfLink: "https://pubs.geoscienceworld.org/ssa/srl/article-pdf/doi/10.1785/0220250370/7903773/srl-2025370.1.pdf",
        pdfLinkSource: "crossref-link"
      },
      {
        title: "Enhancing the MALMI Algorithm to Construct an Earthquake Catalog and Investigate Fluid-Driven Triggering in the Luxian Region, Sichuan, China",
        topic: "Earthquake Source Processes",
        region: "Global / method-focused",
        method: "MALMI earthquake-catalog construction; fluid-triggering analysis",
        interestTags: ["Seismology"],
        authors: "Jinqing Sun, Chunyu Liu, Weitao Wang, Wei Yang, Lu Li, Xiaona Ma, Zemin Liu, Yunpeng Zhang",
        keyPoints: ["Enhancing the MALMI Algorithm to Construct an Earthquake Catalog and Investigate: Dense seismic arrays provide high spatial sampling of the seismic wavefield, substantially enhancing the", "Evidence: To address these challenges, we enhance the MALMI workflow by (1) generating continuous"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-04",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1785/0220260034",
        pdfLink: "https://pubs.geoscienceworld.org/ssa/srl/article-pdf/doi/10.1785/0220260034/7905690/srl-2026034.1.pdf",
        pdfLinkSource: "crossref-link"
      },
      {
        title: "Landslide Volume Estimation from Seismic Waveform Features Using a Global Catalog of Seismogenic Events",
        topic: "Surface Process Geophysics",
        region: "Global / method-focused",
        method: "Seismic data analysis and geophysical interpretation",
        interestTags: ["Seismology"],
        authors: "Elaine Collins, Kate Allstadt, Liam Toney",
        keyPoints: ["Landslide volume from seismic waveform features: Landslide Volume Estimation from Seismic Waveform Features Using a Global Catalog", "Seismic waveform features converted into landslide-volume estimates"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-03",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1785/0220260018",
        pdfLink: "https://pubs.geoscienceworld.org/ssa/srl/article-pdf/doi/10.1785/0220260018/7903734/srl-2026018.1.pdf",
        pdfLinkSource: "crossref-link"
      },
      {
        title: "Potentials and Challenges of Cryoseismology with Fiber-Optic Sensing in the High Arctic: A Pilot Experiment in Hornsund, Svalbard",
        topic: "Solid Earth Geoscience",
        region: "Global / method-focused",
        method: "Fiber-optic cryoseismology pilot experiment",
        interestTags: ["Seismology"],
        authors: "Wojciech Gajek, Max Benke, Andreas Wüstefeld, Andreas Köhler, Charlotte Bruland, Alfred Hanssen",
        keyPoints: ["Cryoseismology with fiber-optic sensing in Svalbard: Potentials and Challenges of Cryoseismology with Fiber-Optic Sensing in the High", "High-Arctic pilot test for fiber-optic cryoseismic monitoring"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-03",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1785/0220260026",
        pdfLink: "https://pubs.geoscienceworld.org/ssa/srl/article-pdf/doi/10.1785/0220260026/7903749/srl-2026026.1.pdf",
        pdfLinkSource: "crossref-link"
      },
      {
        title: "Unifying the Gutenberg–Richter Law with Probabilistic Catalog Completeness",
        topic: "Solid Earth Geoscience",
        region: "Global / method-focused",
        method: "Probabilistic catalog-completeness modeling",
        interestTags: ["Seismology"],
        authors: "Jiawei Li, Xinyi Wang, Didier Sornette",
        keyPoints: ["Gutenberg–Richter Law unified with Probabilistic Catalog Completeness", "Catalog completeness folded into Gutenberg-Richter statistics"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-08",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1785/0220250289",
        pdfLink: "https://pubs.geoscienceworld.org/ssa/srl/article-pdf/doi/10.1785/0220250289/7906320/srl-2025289.1.pdf",
        pdfLinkSource: "crossref-link"
      },
      {
        title: "Intrinsic Uncertainty of Noise Cross-Correlation Functions and Its Implications for Source Properties",
        topic: "Solid Earth Geoscience",
        region: "Global / method-focused",
        method: "Noise cross-correlation uncertainty analysis",
        interestTags: ["Seismology"],
        authors: "Ying-Nien Chen",
        keyPoints: ["Intrinsic Uncertainty of Noise Cross-Correlation Functions and Its Implications: This article presents a quantitative approach for evaluating the intrinsic uncertainty (IU) of a noise"],
        keyPointsSource: "ai-generated",
        onlineDate: "2026-06-08",
        issueDate: "2026-06-10",
        link: "https://doi.org/10.1785/0220250455",
        pdfLink: "https://pubs.geoscienceworld.org/ssa/srl/article-pdf/doi/10.1785/0220250455/7906315/srl-2025455.1.pdf",
        pdfLinkSource: "crossref-link"
      }
    ]
  },
  {
    id: "grl-53-10-solid-earth",
    date: "2026-06-09",
    journal: "Geophysical Research Letters",
    issue: "Volume 53, Issue 10",
    issueDate: "2026-05-28",
    title: "Solid Earth Article Brief",
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
        keyPoints: ["Subducted iron formations may reach the lowermost mantle and influence density and seismic velocities near the core-mantle boundary.", "High-pressure experiments constrain hematite and magnetite reduction to wustite under deep mantle-relevant conditions.", "Iron diffusion kinetics help test whether iron formations can retain enough ferric iron to explain ultra-low velocity zone properties."],
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
        keyPoints: ["Repeating shallow moonquakes were identified for the first time in renewed Apollo lunar seismic data.", "The repeating events have equal polarity even though they occurred in opposite tidal phases.", "The result implies that tidal stress is not the dominant driver of fault slip for the repeating shallow moonquakes."],
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
        keyPoints: ["Lattice parameters of δ-(Al,Fe)OOH were measured at high pressure and temperature by synchrotron single-crystal X-ray diffraction.", "The bulk modulus and sound velocity of δ-(Al,Fe)OOH show significant elastic softening across the spin crossover.", "Velocity softening in δ-(Al,Fe)OOH may contribute to local seismic heterogeneities in the mid-lower mantle."],
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
        keyPoints: ["Seismic ambient noise recorded by on-ice sensors tracks seasonal changes in basal conditions in West Greenland.", "A low-frequency, high-amplitude resonance peak appears in the seismic data at the start of the melt season.", "Resonance and basal-water-pressure modeling support till rigidity reduction by water saturation as the driving process."],
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
        keyPoints: ["High-pressure and high-temperature deformation experiments were conducted on δ-AlOOH and δ-H under lower-mantle transition-zone conditions.", "Simple shear experiments suggest (010)[001] as the likely dominant slip system, producing fabrics with strong elastic anisotropy.", "δ-phase fabrics under horizontal flow may partly contribute to negative radial anisotropy near flattened slab tops in the mid-mantle."],
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
        keyPoints: ["Unsupervised machine learning separates seismic signatures of rockfall, sliding-related events, and cultural noise.", "The analysis suggests an approximately exponential increase in the number and amplitude of seismic precursors before collapse.", "The seismic precursors are interpreted as consistent with slip weakening and progressive growth of slip."],
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
        keyPoints: ["A process decomposition of observed geocentric sea-level trends is presented for the Maritime Continent.", "A residual signal coincides with GRACE-derived long-term geoid change along the 2004 Indian Ocean earthquake rupture zone.", "The correspondence suggests a tectonic contribution to regional geocentric sea-level trends through gravity-field perturbations."],
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
        keyPoints: ["A two-dimensional mechanical model links landslide geometry to friction, basal curvature, and ice buttressing.", "Basal curvature produces a self-stabilizing effect that promotes equilibrium after ice loss.", "Transient accelerations during deglaciation reflect adjustment between stable equilibrium states."],
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
        keyPoints: ["222Rn distinguishes deep-, mixing-, and shallow-dominated circulation patterns in a fault-controlled hydrogeothermal system.", "Elevated 222Rn occurs in deep-sourced or meteoric-recharged groundwater, while low activities indicate mixing-induced degassing.", "Integrating 222Rn with hydrogeochemical data provides a practical tool for assessing geothermal resources in tectonic settings."],
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
        keyPoints: ["Serpentinization decreases drained and unjacketed bulk moduli through mineral transformation and microcrack generation.", "Micro-CT and mercury intrusion porosimetry suggest a coupled mechanism of crack initiation and hydration-related filling.", "The mineral and microstructural changes explain reduced seismic velocities and weakened mantle strength."],
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
        keyPoints: ["The maximum depth of decoupling is anomalously deep in southern Colombia because of a partially subducted accreted oceanic terrane.", "The anomalously deep decoupling produces relatively cold slab conditions despite the young age of the subducting plate.", "Relatively deep peaks in slab-derived H2O flux correlate with the distribution of intermediate-depth supra-slab earthquakes."],
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
        keyPoints: ["Geodetic and seismic observations track consistent surface deformation and seismic faulting at depth.", "Extensional fracture reactivation starts with strike-slip earthquakes and progresses to graben opening accompanied by normal events.", "As extension progressed, seismicity in both moment and event number was no longer a reliable predictor of eruptions."],
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
        keyPoints: ["First-principles calculations constrain the high-pressure elastic properties of CAS phase up to 30 GPa.", "Modeled anorthosite crust has higher density and seismic velocities than pyrolite within the mantle transition zone.", "Buoyancy effects suggest subducted anorthosite crust may accumulate at the base of the transition zone and contribute to high-velocity anomalies."],
        onlineDate: "2026-05-24",
        issueDate: "2026-05-28",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025GL121287"
      }
    ]
  },
  {
    id: "jgr-solid-earth-131-5",
    date: "2026-06-10",
    journal: "Journal of Geophysical Research: Solid Earth",
    issue: "Volume 131, Issue 5",
    issueDate: "2026-05",
    title: "Solid Earth Article Brief",
    source: "https://agupubs.onlinelibrary.wiley.com/toc/21699356/2026/131/5",
    recommendation: {
      label: "Most Recommended",
      title: "Geodetic Resolution of the Interplay Between Earthquakes and Slow Slip in the Hikurangi Margin",
      text: "This is the strongest recommendation from the issue because it directly links geodetic observations, earthquake occurrence, and slow slip on an active subduction margin, making it highly relevant to seismology and crustal deformation monitoring."
    },
    articles: [
      {
        title: "Denoising of InSAR Time Series Through Spatiotemporal Attentive Convolutional U-Net",
        topic: "InSAR Time-Series Analysis",
        region: "Method development",
        method: "Spatiotemporal attentive convolutional U-Net; InSAR time-series denoising",
        interestTags: ["Crustal Deformation"],
        authors: "Giuseppe Costantino, Romain Jolivet",
        keyPoints: ["A spatiotemporal attentive convolutional U-Net is developed to denoise InSAR time series.", "The approach targets coherent deformation signals while suppressing spatially and temporally structured noise.", "Cleaner InSAR products can improve detection of tectonic and volcanic surface deformation."],
        onlineDate: "2026-05-06",
        issueDate: "2026-05",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026JB033940"
      },
      {
        title: "The Influence of Fluvial Incision on the Lithospheric Stress Field: A Numerical Approach",
        topic: "Lithospheric Stress",
        region: "Numerical experiment",
        method: "Numerical lithospheric stress modeling; fluvial incision forcing",
        interestTags: ["Fault Damage Zone", "Crustal Deformation"],
        authors: "F. Baiadori, V. Sacek",
        keyPoints: ["Numerical models test how river incision modifies lithospheric stress over geological timescales.", "Topographic unloading and erosion can reorganize stress magnitudes and orientations in the upper lithosphere.", "The results connect surface processes with tectonic stress evolution and fault-loading conditions."],
        onlineDate: "2026-05-16",
        issueDate: "2026-05",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025JB032062"
      },
      {
        title: "Mapping Subsea Permafrost Distribution in the Canadian Beaufort Sea With Marine Seismic and Deep Learning",
        topic: "Marine Seismic Imaging",
        region: "Canadian Beaufort Sea",
        method: "Marine seismic interpretation; deep-learning permafrost mapping",
        interestTags: ["Seismology"],
        authors: "Jefferson Bustamante, Gabriel Fabien-Ouellet, Mathieu J. Duchesne",
        keyPoints: ["Marine seismic data and deep learning are combined to map subsea permafrost distribution.", "The workflow extracts shallow subsurface structure from offshore seismic records in the Canadian Beaufort Sea.", "The study shows how seismic attributes can support cryosphere and coastal geohazard monitoring."],
        onlineDate: "2026-05-15",
        issueDate: "2026-05",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025JB032532"
      },
      {
        title: "Geodetic Resolution of the Interplay Between Earthquakes and Slow Slip in the Hikurangi Margin",
        topic: "Slow Slip and Earthquake Interaction",
        region: "Hikurangi Margin, New Zealand",
        method: "Geodetic inversion; slow-slip and earthquake coupling analysis",
        interestTags: ["Seismology", "Crustal Deformation"],
        authors: "Louise Maubant, Laura M. Wallace, Charles A. Williams, Sylvain Michel, Emilie Klein, William B. Frank",
        keyPoints: ["Geodetic observations resolve interactions between slow slip and earthquakes along the Hikurangi Margin.", "The analysis links transient aseismic slip with seismic activity on a well-instrumented subduction interface.", "The paper provides a useful framework for monitoring coupled seismic and aseismic deformation."],
        onlineDate: "2026-05-19",
        issueDate: "2026-05",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025JB033143"
      },
      {
        title: "Dynamics of Rupture Barriers on Oceanic Transform Faults: Insights From the Westernmost Gofar Transform Fault",
        topic: "Oceanic Transform Faults",
        region: "Westernmost Gofar Transform Fault",
        method: "Seismicity analysis; rupture-barrier interpretation",
        interestTags: ["Seismology", "Fault Damage Zone"],
        authors: "Wenyuan Fan, Jeffrey J. McGuire, Yajing Liu, Mark D. Behn, Jessica M. Warren, John A. Collins, Margaret S. Boettcher",
        keyPoints: ["The study examines how rupture barriers structure earthquake behavior on an oceanic transform fault.", "Seismic observations from the Gofar system are used to infer along-strike segmentation and barrier dynamics.", "The results clarify why some transform-fault patches arrest rupture while adjacent segments fail seismically."],
        onlineDate: "2026-05-11",
        issueDate: "2026-05",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025JB033439"
      },
      {
        title: "FEM-Peridynamic Modelling of Supershear Earthquake Ruptures in Dry and Fluid-Saturated Media",
        topic: "Dynamic Rupture Modeling",
        region: "Numerical experiment",
        method: "Finite-element and peridynamic rupture modeling; dry and fluid-saturated media",
        interestTags: ["Seismology", "Fault Damage Zone"],
        authors: "Yongkang Shu, Zhenzhong Shen, Tao Ni, Manuele Faccenda, Ugo Galvanetto, Giulio Di Toro, Bernhard A. Schrefler",
        keyPoints: ["A coupled FEM-peridynamic framework is used to model supershear earthquake rupture.", "Dry and fluid-saturated media are compared to test how fluids affect rupture propagation.", "The modeling highlights mechanical controls on high-speed rupture and associated damage."],
        onlineDate: "2026-05-25",
        issueDate: "2026-05",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025JB032981"
      },
      {
        title: "Pre-Existing Structures and Stress Variations Jointly Control the Induced Seismicity in Enhanced Geothermal System of Gonghe Basin, China",
        topic: "Induced Seismicity",
        region: "Gonghe Basin, China",
        method: "Induced-seismicity analysis; stress and structural interpretation",
        interestTags: ["Seismology", "Fault Damage Zone", "Crustal Deformation"],
        authors: "Ping Feng, Ruijia Wang, Hao Zhang, Chongyuan Zhang, Ryan Schultz, Lichun Yang",
        keyPoints: ["Induced seismicity in the Gonghe enhanced geothermal system is tied to inherited structures and stress variations.", "The study links earthquake distribution with pre-existing faults and local stress perturbations.", "The results are relevant for geothermal hazard assessment and fault-reactivation monitoring."],
        onlineDate: "2026-05-12",
        issueDate: "2026-05",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025JB033158"
      },
      {
        title: "Nine-Year L-Band InSAR Time Series of Tectonic and Non-Tectonic Surface Deformation in Northern California",
        topic: "Regional Surface Deformation",
        region: "Northern California",
        method: "Nine-year L-band InSAR time-series analysis",
        interestTags: ["Crustal Deformation"],
        authors: "D. Lindsay, R. Burgmann, K. Materna, E. J. Fielding",
        keyPoints: ["A nine-year L-band InSAR time series resolves tectonic and non-tectonic deformation in Northern California.", "Long-wavelength and localized surface motions are separated across a complex plate-boundary region.", "The dataset provides constraints for crustal deformation monitoring and geodetic hazard studies."],
        onlineDate: "2026-05-10",
        issueDate: "2026-05",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025JB032718"
      },
      {
        title: "Stress Model of California: Fault-Stress Interactions Across a Complex Plate Boundary System From Focal Mechanisms of Small Earthquakes",
        topic: "Fault-Stress Interactions",
        region: "California",
        method: "Focal-mechanism stress inversion; regional fault-stress modeling",
        interestTags: ["Seismology", "Fault Damage Zone", "Crustal Deformation"],
        authors: "Yifang Cheng, Roland Burgmann, Taka'aki Taira, Zonghu Liao, Richard M. Allen",
        keyPoints: ["Small-earthquake focal mechanisms are used to build a stress model across California's plate boundary.", "The model resolves spatial changes in stress orientation and fault interaction across multiple fault systems.", "The results help connect background seismicity with regional fault loading and earthquake potential."],
        onlineDate: "2026-05-13",
        issueDate: "2026-05",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025JB032164"
      },
      {
        title: "Weakening Processes in Carbonate-Hosted Faults: Phyllosilicate Microlayers and Injections Along the Mattinata Fault (Southern Italy)",
        topic: "Fault Weakening",
        region: "Mattinata Fault, Southern Italy",
        method: "Fault-rock analysis; phyllosilicate microlayer and injection characterization",
        interestTags: ["Fault Damage Zone"],
        authors: "Rachele Calvanelli, Luca Aldega, Andrea Billi, Andrea Cavallo, Manuel Curzi, Marco Mercuri, Michele Morsilli, Alessio Pontesilli, Cecilia Viti, Eugenio Carminati",
        keyPoints: ["Carbonate-hosted fault rocks reveal weakening processes along the Mattinata Fault.", "Phyllosilicate microlayers and injections are identified as important controls on fault-zone mechanical behavior.", "The work links microscale fault-rock fabrics to broader rupture and slip-weakening processes."],
        onlineDate: "2026-05-14",
        issueDate: "2026-05",
        link: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026JB033855"
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
  interest: "",
  section: "latest"
};

const latest = reports[0];
const allArticles = reports.flatMap((report) =>
  report.articles.map((article) => ({
    ...article,
    reportId: report.id,
    reportTitle: report.title,
    reportJournal: report.journal,
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
  detailMissing: document.querySelector("#report-missing"),
  filters: document.querySelector("#interest-filters"),
  search: document.querySelector("#search-input"),
  sectionLinks: document.querySelectorAll("[data-section-link]"),
  sections: document.querySelectorAll(".content-section")
};

const availableSections = Array.from(el.sections).map((section) => section.id).filter(Boolean);

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
    article.reportJournal,
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
  if (article.link && article.link.includes("agupubs.onlinelibrary.wiley.com/doi/")) {
    return article.link.replace("/doi/", "/doi/pdf/");
  }
  return "";
}

function getIssuePage(report) {
  const source = report.source || "";
  if (source.includes("agupubs.onlinelibrary.wiley.com/toc/")) return source;
  return "";
}

function getRecommendedArticle(report) {
  return report.articles.find((article) => article.title === report.recommendation.title) || null;
}

function slugify(value) {
  return normalize(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function getArticleId(reportId, article) {
  return `article-${reportId}-${slugify(article.title)}`;
}

function renderRecommendationCard(report) {
  const recommendedArticle = getRecommendedArticle(report);
  const tag = recommendedArticle ? "a" : "article";
  const targetId = recommendedArticle ? getArticleId(report.id, recommendedArticle) : "";
  const linkAttrs = recommendedArticle
    ? ` href="#${targetId}" data-scroll-target="${targetId}" aria-label="Jump to recommended article: ${recommendedArticle.title}"`
    : "";

  return `
    <${tag} class="recommendation-card"${linkAttrs}>
      <b>${report.recommendation.label}</b>
      <h3>${report.recommendation.title}</h3>
      <p>${report.recommendation.text}</p>
    </${tag}>
  `;
}

function renderArticleCard(article, options = {}) {
  const reportId = options.reportId || article.reportId || latest.id;
  const articleId = getArticleId(reportId, article);
  const pdfLink = getPdfLink(article);
  const issueTag = options.showIssue
    ? `<span class="tag journal">${article.reportJournal}</span><span class="tag">${article.reportIssue}</span>`
    : "";
  const keyPointBadge = article.keyPointsSource && article.keyPointsSource !== "official-publisher"
    ? `<div class="ai-badge">AI generated</div>`
    : "";
  const methodLine = article.method ? `<div class="article-meta">Method: ${article.method}</div>` : "";
  const pdfControl = pdfLink
    ? `<a class="article-link" href="${pdfLink}" target="_blank" rel="noreferrer">Open PDF</a>`
    : `<span class="article-link article-link-muted" aria-disabled="true">PDF unavailable</span>`;

  return `
    <article class="article-card" id="${articleId}" tabindex="-1">
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
        ${keyPointBadge}
        <ul class="key-points">
          ${article.keyPoints.map((point) => `<li>${point}</li>`).join("")}
        </ul>
        ${methodLine}
      </div>
      ${pdfControl}
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
  if (!el.latestTitle || !el.latestMeta || !el.latestCount) return;
  el.latestTitle.innerHTML = `<span>${latest.title} | ${latest.issue}</span><span class="journal-badge">${latest.journal}</span>`;
  el.latestMeta.textContent = latest.issueDate ? `Issue date: ${latest.issueDate}` : "";
  el.latestCount.innerHTML = `<strong>${latest.articles.length}</strong><span>Solid Earth articles</span>`;
}

function renderRecommendation() {
  if (!el.latestSummary) return;
  el.latestSummary.innerHTML = renderRecommendationCard(latest);
}

function renderFilters() {
  if (!el.filters) return;
  el.filters.innerHTML = interestKeywords
    .map((interest) => `
      <button class="filter-button" type="button" data-interest="${interest.label}" aria-pressed="${interest.label === state.interest}">
        ${interest.label}
      </button>
    `)
    .join("");
}

function renderLatestArticles() {
  if (!el.latestList) return;
  el.latestList.innerHTML = latest.articles.map((article) => renderArticleCard(article, { reportId: latest.id })).join("");
}

function renderSearchResults() {
  if (!el.searchCount || !el.searchResults) return;
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
  if (!el.archiveCount || !el.archiveList) return;
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
      <a class="archive-item" href="report.html#${report.id}" aria-label="Open ${report.title} ${report.issue}">
        <div>
          <div class="archive-topline">
            <span class="journal-badge">${report.journal}</span>
          </div>
          <h3>${report.title} | ${report.issue}</h3>
          <p class="meta-line">${report.issueDate ? `Issue date: ${report.issueDate} · ` : ""}${report.articles.length} articles</p>
        </div>
        <span class="article-link">Details</span>
      </a>
    `)
    .join("");
}

function getSectionFromHash() {
  const hash = window.location.hash.replace("#", "");
  return availableSections.includes(hash) ? hash : null;
}

function setActiveSection(sectionId, options = {}) {
  if (!availableSections.length) return;

  const nextSection = availableSections.includes(sectionId) ? sectionId : "latest";
  state.section = nextSection;

  el.sections.forEach((section) => {
    section.classList.toggle("active", section.id === nextSection);
  });

  el.sectionLinks.forEach((link) => {
    const isActive = link.dataset.sectionLink === nextSection;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (options.focusSearch && nextSection === "search" && el.search) {
    el.search.focus({ preventScroll: true });
  }
}

function getSelectedReport() {
  if (!window.location.hash) return null;
  const id = window.location.hash.replace("#", "");
  if (!id) return null;
  return reports.find((report) => report.id === id) || null;
}

function renderReportDetail() {
  if (!el.detail) return;
  const report = getSelectedReport();
  if (!report) {
    el.detail.hidden = true;
    if (el.detailMissing) el.detailMissing.hidden = false;
    if (el.detailTitle) el.detailTitle.textContent = "";
    if (el.detailMeta) el.detailMeta.textContent = "";
    if (el.detailSummary) el.detailSummary.innerHTML = "";
    if (el.detailList) el.detailList.innerHTML = "";
    return;
  }

  el.detail.hidden = false;
  if (el.detailMissing) el.detailMissing.hidden = true;
  if (document.title) document.title = `${report.title} | ${report.issue}`;
  if (el.detailTitle) el.detailTitle.innerHTML = `<span>${report.title} | ${report.issue}</span><span class="journal-badge">${report.journal}</span>`;
  if (el.detailMeta) el.detailMeta.textContent = `${report.issueDate ? `Issue date: ${report.issueDate} · ` : ""}${report.articles.length} Solid Earth articles`;
  if (el.detailSource) {
    const issuePage = getIssuePage(report);
    el.detailSource.hidden = !issuePage;
    if (issuePage) {
      el.detailSource.style.display = "";
      el.detailSource.href = issuePage;
    } else {
      el.detailSource.style.display = "none";
      el.detailSource.removeAttribute("href");
    }
  }
  if (el.detailSummary) {
    el.detailSummary.innerHTML = renderRecommendationCard(report);
  }
  if (el.detailList) {
    el.detailList.innerHTML = report.articles
      .map((article) => renderArticleCard(article, { reportId: report.id }))
      .join("");
  }
  if (el.detail.scrollIntoView) el.detail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function render() {
  validateReports();
  setActiveSection(getSectionFromHash() || state.section);
  renderHeader();
  renderRecommendation();
  renderFilters();
  renderLatestArticles();
  renderSearchResults();
  renderArchive();
  renderReportDetail();
}

if (el.search) {
  el.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderSearchResults();
  });
}

if (el.filters) {
  el.filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-interest]");
    if (!button) return;
    state.interest = state.interest === button.dataset.interest ? "" : button.dataset.interest;
    renderFilters();
    renderSearchResults();
  });
}

if (el.sectionLinks.length && availableSections.length) {
  el.sectionLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const sectionId = link.dataset.sectionLink;
      if (!availableSections.includes(sectionId)) return;

      event.preventDefault();
      setActiveSection(sectionId, { focusSearch: sectionId === "search" });
      window.history.replaceState(null, "", `#${sectionId}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-scroll-target]");
  if (!trigger) return;

  const target = document.getElementById(trigger.dataset.scrollTarget);
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "center" });
  target.focus({ preventScroll: true });
  target.classList.remove("article-card-highlight");
  window.requestAnimationFrame(() => {
    target.classList.add("article-card-highlight");
    window.setTimeout(() => target.classList.remove("article-card-highlight"), 1800);
  });
});

window.addEventListener("hashchange", () => {
  const sectionId = getSectionFromHash();
  if (sectionId) {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  renderReportDetail();
});

render();
