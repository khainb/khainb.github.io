// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-2-papers-distributional-sliced-wasserstein-and-applications-to-generative-modeling-spotlight-presentation-and-improving-relational-regularized-autoencoders-with-spherical-sliced-fused-gromov-wasserstein-are-accepted-at-iclr-2021",
          title: '2 papers Distributional Sliced-Wasserstein and Applications to Generative Modeling - Spotlight Presentation and...',
          description: "",
          section: "News",},{id: "news-2-papers-improving-mini-batch-optimal-transport-via-partial-transportation-and-on-transportation-of-mini-batches-a-hierarchical-approach-are-accepted-at-icml-2022",
          title: '2 papers Improving Mini-batch Optimal Transport via Partial Transportation and On Transportation of...',
          description: "",
          section: "News",},{id: "news-4-papers-revisiting-sliced-wasserstein-on-images-from-vectorization-to-convolution-amortized-projection-optimization-for-sliced-wasserstein-generative-models-improving-transformer-with-an-admixture-of-attention-heads-and-fourierformer-transformer-meets-generalized-fourier-integral-theorem-are-accepted-at-neurips-2022",
          title: '4 papers Revisiting Sliced Wasserstein on Images: From Vectorization to Convolution, Amortized Projection...',
          description: "",
          section: "News",},{id: "news-1-paper-hierarchical-sliced-wasserstein-distance-is-accepted-at-iclr-2023",
          title: '1 paper Hierarchical Sliced Wasserstein Distance is accepted at ICLR 2023.',
          description: "",
          section: "News",},{id: "news-1-paper-self-attention-amortized-distributional-projection-optimization-for-sliced-wasserstein-point-cloud-reconstruction-is-accepted-at-icml-2023",
          title: '1 paper Self-Attention Amortized Distributional Projection Optimization for Sliced Wasserstein Point-Cloud Reconstruction is...',
          description: "",
          section: "News",},{id: "news-4-papers-energy-based-sliced-wasserstein-distance-markovian-sliced-wasserstein-distances-beyond-independent-projections-designing-robust-transformers-using-robust-kernel-density-estimation-and-minimax-optimal-rate-for-parameter-estimation-in-multivariate-deviated-models-are-accepted-at-neurips-2023",
          title: '4 papers Energy-Based Sliced Wasserstein Distance, Markovian sliced Wasserstein distances: Beyond independent projections,...',
          description: "",
          section: "News",},{id: "news-4-papers-quasi-monte-carlo-for-3d-sliced-wasserstein-spotlight-presentation-sliced-wasserstein-estimation-with-control-variates-diffeomorphic-deformation-via-sliced-wasserstein-distance-optimization-for-cortical-surface-reconstruction-and-revisiting-deep-audio-text-retrieval-through-the-lens-of-transportation-are-accepted-at-iclr-2024",
          title: '4 papers Quasi-Monte Carlo for 3D Sliced Wasserstein - Spotlight Presentation, Sliced Wasserstein...',
          description: "",
          section: "News",},{id: "news-2-papers-towards-convergence-rates-for-parameter-estimation-in-gaussian-gated-mixture-of-experts-on-parameter-estimation-in-deviated-gaussian-mixture-of-experts-are-accepted-at-aistats-2024",
          title: '2 papers Towards Convergence Rates for Parameter Estimation in Gaussian-gated Mixture of Experts,...',
          description: "",
          section: "News",},{id: "news-1-paper-integrating-efficient-optimal-transport-and-functional-maps-for-unsupervised-shape-correspondence-learning-is-accepted-at-cvpr-2024",
          title: '1 paper Integrating Efficient Optimal Transport and Functional Maps For Unsupervised Shape Correspondence...',
          description: "",
          section: "News",},{id: "news-1-paper-sliced-wasserstein-with-random-path-projecting-directions-is-accepted-at-icml-2024",
          title: '1 paper Sliced Wasserstein with Random-Path Projecting Directions is accepted at ICML 2024....',
          description: "",
          section: "News",},{id: "news-1-paper-hierarchical-hybrid-sliced-wasserstein-a-scalable-metric-for-heterogeneous-joint-distributions-is-accepted-at-neurips-2024",
          title: '1 paper Hierarchical Hybrid Sliced Wasserstein: A Scalable Metric for Heterogeneous Joint Distributions...',
          description: "",
          section: "News",},{id: "news-1-paper-towards-marginal-fairness-sliced-wasserstein-barycenter-is-accepted-at-iclr-2025",
          title: '1 paper Towards Marginal Fairness Sliced Wasserstein Barycenter is accepted at ICLR 2025....',
          description: "",
          section: "News",},{id: "news-my-proposal-summarizing-bayesian-nonparametric-mixture-posterior-sliced-optimal-transport-metrics-for-gaussian-mixtures-is-accepted-at-14th-international-conference-on-bayesian-nonparametrics-as-a-contributed-talk",
          title: 'My proposal Summarizing Bayesian Nonparametric Mixture Posterior - Sliced Optimal Transport Metrics for...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%68%61%69%6E%62@%75%74%65%78%61%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/khainb", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/khai-nguyen-307895155", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Khai-Nguyen-37/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=im5fNaQAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/khainb_ml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
