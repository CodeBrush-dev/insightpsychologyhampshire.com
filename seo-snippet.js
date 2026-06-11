// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.insightpsychologyhampshire.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.insightpsychologyhampshire.com/","title_tag":"Clinical Psychologist Hampshire | Insight Psychology","meta_description":"Clinical Psychologist in Hampshire offering therapy, ADHD and autism assessments, and mental health support for children, adolescents and adults."},{"page_url":"https://www.insightpsychologyhampshire.com/therapy","title_tag":"Therapy Services Hampshire | Insight Psychology","meta_description":"Therapy services in Hampshire including CBT, Acceptance and Commitment Therapy, trauma therapy and family-based therapy for children and adults."},{"page_url":"https://www.insightpsychologyhampshire.com/specialist-assessments","title_tag":"Neurodevelopmental Assessments Hampshire | Insight","meta_description":"NICE-compliant neurodevelopmental assessments Hampshire: specialist autism assessment and ADHD assessment for children, adolescents and adults."},{"page_url":"https://www.insightpsychologyhampshire.com/supervision","title_tag":"Clinical Supervision & Neurodevelopmental Assessments | Insight","meta_description":"Clinical supervision for psychologists and supervision of neurodevelopmental assessments in Hampshire with an experienced Chartered Clinical Psychologist."},{"page_url":"https://www.insightpsychologyhampshire.com/fees","title_tag":"Therapy & Assessment Fees | Insight Psychology Hampshire","meta_description":"Fees for therapy services and specialist neurodevelopmental assessments in Hampshire. Transparent pricing for clinical psychology sessions and assessments."},{"page_url":"https://www.insightpsychologyhampshire.com/contact-9","title_tag":"Mental Health Support Hampshire | Contact Insight","meta_description":"Contact Insight Psychology Hampshire for mental health support, therapy services and neurodevelopmental assessments in Winchester and across Hampshire."},{"page_url":"https://www.insightpsychologyhampshire.com/blog","title_tag":"Therapy & Neurodiversity Blog | Insight Psychology","meta_description":"Blog on therapy services, ADHD assessment, autism assessment and mental health support in Hampshire, written by a Chartered Clinical Psychologist."}],"keywords":["Clinical Psychologist Hampshire","ADHD Assessment","Autism Assessment","Therapy Services Hampshire","Mental Health Support Hampshire","Cognitive-Behavioural Therapy Hampshire","Acceptance and Commitment Therapy Hampshire","Trauma Therapy Hampshire","Family-based Therapy Hampshire","Neurodevelopmental Assessments Hampshire"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.insightpsychologyhampshire.com/#localbusiness",
  "name": "Insight Psychology Hampshire",
  "url": "https://www.insightpsychologyhampshire.com/",
  "image": [
    "https://static.wixstatic.com/media/0a8099_33127901cb4044d38c8c7f5fcb44ad76~mv2.jpg/v1/fill/w_423,h_518,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0713_edited.jpg",
    "https://static.wixstatic.com/media/0a8099_e5b4e444929a408a92f6d1b7f37a9094~mv2.jpg/v1/fill/w_493,h_565,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0551_edited.jpg",
    "https://static.wixstatic.com/media/0a8099_394e3a79763b4f3a97d9e467b0b02b8f%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/0a8099_394e3a79763b4f3a97d9e467b0b02b8f%7Emv2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/0a8099_394e3a79763b4f3a97d9e467b0b02b8f%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/0a8099_394e3a79763b4f3a97d9e467b0b02b8f%7Emv2.jpg",
  "description": "Insight Psychology Hampshire provides evidence-based psychological therapy and specialist neurodiversity assessments (Autism and ADHD) for children, adolescents and adults in Hampshire.",
  "email": "office@drroberts.net",
  "telephone": "+447890864488",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hockley Mill Stables, Church Lane",
    "addressLocality": "Twyford",
    "addressRegion": "Hampshire",
    "postalCode": "SO21 1NT",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.024,
    "longitude": -1.295
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Hampshire"
    },
    {
      "@type": "City",
      "name": "Winchester"
    }
  ],
  "sameAs": [],
  "founder": {
    "@type": "Person",
    "name": "Dr. Natalie Roberts",
    "jobTitle": "Chartered Clinical Psychologist",
    "description": "Dr. Natalie Roberts is a Chartered Clinical Psychologist with extensive NHS and independent practice experience, offering therapy and specialist neurodevelopmental assessments across the lifespan.",
    "image": "https://static.wixstatic.com/media/0a8099_33127901cb4044d38c8c7f5fcb44ad76~mv2.jpg/v1/fill/w_423,h_518,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0713_edited.jpg",
    "email": "office@drroberts.net"
  },
  "knowsAbout": [
    "ADHD",
    "Autism",
    "Anxiety",
    "Behavioural concerns for children",
    "Coping skills",
    "Depression",
    "Eating Disorders",
    "Emotional and nervous system regulation",
    "Family-based issues",
    "Obsessive-compulsive disorder",
    "Parenting",
    "Relationship issues",
    "Self-esteem and confidence issues",
    "Self harm",
    "Trauma",
    "Post-traumatic stress"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Psychological Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Psychological Therapy",
          "description": "Evidence-based psychological therapy for children, adolescents and adults drawing on ACT, CBT, compassion-focussed therapy, mindfulness, somatic psychotherapy and trauma-focused approaches including EMDR."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Autism Assessments",
          "description": "Gold standard, NICE-compliant multidisciplinary assessments for Autism across the lifespan, including structured observation, diagnostic interview and comprehensive recommendations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ADHD Assessments",
          "description": "Step-wise ADHD assessments for children, adolescents and adults, including developmental history, questionnaire screening, QBCheck and diagnostic interview, with access to psychiatric input for medication advice."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Clinical Supervision",
          "description": "Clinical supervision for psychologists in training through to highly experienced clinicians, including supervision of neurodevelopmental assessments."
        }
      }
    ]
  },
  "priceRange": "££",
  "hasPart": [
    {
      "@type": "WebPage",
      "@id": "https://www.insightpsychologyhampshire.com/therapy",
      "url": "https://www.insightpsychologyhampshire.com/therapy",
      "name": "Therapy",
      "description": "Information about therapeutic approaches including ACT, CBT, compassion-focused therapy, mindfulness, somatic psychotherapy and EMDR."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.insightpsychologyhampshire.com/specialist-assessments",
      "url": "https://www.insightpsychologyhampshire.com/specialist-assessments",
      "name": "Specialist Assessments",
      "description": "Details of specialist multidisciplinary Autism and ADHD assessments for children and adults."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.insightpsychologyhampshire.com/supervision",
      "url": "https://www.insightpsychologyhampshire.com/supervision",
      "name": "Supervision",
      "description": "Clinical supervision services for psychologists and clinicians, including supervision of neurodevelopmental assessments."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.insightpsychologyhampshire.com/fees",
      "url": "https://www.insightpsychologyhampshire.com/fees",
      "name": "Fees",
      "description": "Information about fees for initial assessments, therapy sessions and specialist assessments."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.insightpsychologyhampshire.com/contact-9",
      "url": "https://www.insightpsychologyhampshire.com/contact-9",
      "name": "Contact",
      "description": "Contact details and form to arrange a free 15 minute telephone call or book an appointment."
    },
    {
      "@type": "Blog",
      "@id": "https://www.insightpsychologyhampshire.com/blog",
      "url": "https://www.insightpsychologyhampshire.com/blog",
      "name": "Blog",
      "description": "Articles on therapy services and neurodiversity, including support for neurodiverse children in education."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
