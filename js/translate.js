// Master JavaScript Engine Setup
const langData = {};

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("preferredLanguage", lang);

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");

    // Safety fallback wrapper prevents text strings from blocking execution
    if (langData[lang] && langData[lang][key]) {
      const translatedValue = langData[lang][key];

      if (element.tagName === "TITLE") {
        document.title = translatedValue;
      } else if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.setAttribute("placeholder", translatedValue);
      } else {
        // Safe context string mapping updates text fields securely
        element.textContent = translatedValue;
      }
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLanguage") || "en";
  const desktopSelect = document.getElementById("language-select");
  const mobileSelect = document.getElementById("language-select-mobile");

  if (desktopSelect) {
    desktopSelect.value = savedLang;
    desktopSelect.addEventListener("change", (e) => {
      const val = e.target.value;
      if (mobileSelect) mobileSelect.value = val;
      applyTranslations(val);
    });
  }
  if (mobileSelect) {
    mobileSelect.value = savedLang;
    mobileSelect.addEventListener("change", (e) => {
      const val = e.target.value;
      if (desktopSelect) desktopSelect.value = val;
      applyTranslations(val);
    });
  }
  applyTranslations(savedLang);
});


// ==========================================
// DATA BLOCK 1: ENGLISH & HUNGARIAN
// ==========================================
langData.en = {
  meta_title: "Mind2Model3D — Custom 3D Printing",
  nav_home: "Home", nav_services: "Services", nav_shop: "Shop", nav_portfolio: "Portfolio", nav_contact: "Contact", btn_quote: "Get a Quote",
  hero_tag: "✦ Custom 3D Printing Studio", hero_title: "From Your Mind To A Real Model", hero_sub: "We turn your boldest ideas into physical reality. Prototypes, collectibles, jewelry, functional parts — if you can imagine it, we can print it.",
  btn_start: "Start Your Project", btn_view: "View Our Work", stat_projects: "Projects Delivered", stat_turnaround: "Avg. Turnaround", stat_custom: "Custom Made",
  latest_print_lbl: "Latest Print", latest_print_name: "Custom Prototype #47", m_fdm: "FDM Printing", m_resin: "Resin Printing", m_proto: "Custom Prototypes",
  m_mini: "Miniatures", m_jewel: "Jewelry", m_parts: "Functional Parts", m_art: "Art & Decor", m_design: "Product Design",
  srv_tag: "What We Do", srv_title: "Every Kind of Custom Print", srv_sub: "From concept to physical object — we handle it all with precision and care.",
  srv1_title: "Prototypes & Parts", srv1_desc: "Functional prototypes, mechanical parts, and engineering models with tight tolerances.", learn_more: "Learn more →",
  srv2_title: "Miniatures & Collectibles", srv2_desc: "Highly detailed figurines, tabletop miniatures, and collectible models in resin.",
  srv3_title: "Jewelry & Accessories", srv3_desc: "Custom rings, pendants, bracelets and wearable art printed with precision.",
  srv4_title: "Art & Decor", srv4_desc: "Decorative pieces, sculptures, and artistic prints for home and commercial spaces.", btn_all_srv: "See All Services",
  step_tag: "The Process", step_title: "How It Works", step1_h: "Share Your Idea", step1_p: "Send us your design file, sketch, or just a description. We'll figure out the rest.",
  step2_h: "We Prepare & Quote", step2_p: "We review your project, suggest the best material and method, and send you a quote.",
  c_hero_tag: "Let's Talk",
  c_hero_title_p1: "Get In ",
  c_hero_title_p2: "Touch",
  c_hero_sub: "Have a project in mind? We'd love to hear about it. We respond within 24 hours.",
  c_info_title_p1: "We're Here to",
  c_info_title_p2: "Help",
  c_info_sub: "Whether you have a ready-made design or just an idea in your head — we're the right people to talk to. No project too big or too small.",
  step3_h: "We Print It", step3_p: "Once approved, we print your model with care and quality-check every detail.",
  step4_h: "You Receive It", step4_p: "We ship it to your door or arrange local pickup. Fast, secure, and beautifully packaged.",
  port_tag: "Our Work", port_title: "Fresh From The Printer", port_sub: "A glimpse of what we've built for our clients.",
  p1_title: "Custom Lord Ganesha Sculpture", p1_desc: "High-definition detailed artistic design",
  p2_title: "Functional Engineering Prototype", p2_desc: "Gun Silencer Mount", p3_title: "Custom Napkin Holder", p3_desc: "Custom Napkin Holder",
  btn_full_port: "View Full Portfolio Gallery", c_btn_submit: "Send Message & Get a Free Quote", c_success_h: "Message Sent!",
  c_success_p: "Thanks for reaching out! We'll review your project and get back to you within 24 hours with a quote.",
  faq_tag: "Questions", faq_title: "Frequently Asked",
  faq1_q: "What file formats do you accept? +", faq1_a: "We accept STL, OBJ, STEP, IGES, and 3MF for 3D printing. If you only have a sketch or photo, we can help you create the 3D file — just mention it in your message.",
  faq2_q: "How long does it take? +", faq2_a: "Most orders are completed within 48–72 hours. Larger or more complex projects may take longer. We'll always give you a clear timeline when we send your quote.",
  faq3_q: "Do you ship internationally? +", faq3_a: "Yes! We ship worldwide. EU orders typically arrive in 3–5 business days. International orders take 7–14 days. Local pickup is also available in Budapest.",
  faq4_q: "What if I don't have a 3D file? +", faq4_a: "No problem! We offer 3D modeling as an add-on service. Share your sketch, reference image, or description and we'll create the model for you. Modeling fees start at €25.",
  faq5_q: "What's your minimum order? +", faq5_a: "There's no minimum — we happily take single-piece orders. For bulk orders (10+ units), we offer volume discounts. Contact us for bulk pricing.",
  foot_brand_sub: "Turning imagination into physical reality, one layer at a time.", foot_h1: "Navigation", foot_h2: "Services", foot_h3: "Get In Touch", foot_copy: "© 2025 Mind2Model3D. All rights reserved.",
  srv_meta_title: "Services — Mind2Model3D", s_hero_tag: "What We Offer", s_hero_title: "Our Services", s_hero_sub: "Whatever you need printed — we have the technology, materials, and expertise to make it happen.",
  tech_tag: "Technologies", tech_title: "Printing Methods", tech1_h: "Fused Deposition Modeling", tech1_p: "The most versatile method. Great for functional parts, prototypes, and large objects. Available in PLA, PETG, ABS, TPU, and more.",
  tech1_l1: "✓ Large build volume", tech1_l2: "✓ Wide material range", tech1_l3: "✓ Cost-effective", tech1_l4: "✓ Fast turnaround",
  tech2_h: "Resin (MSLA/DLP)", tech2_p: "Ultra-high detail printing for miniatures, jewelry, and anything requiring fine features. Smooth surface finish straight off the printer.",
  tech2_l1: "✓ Ultra-fine detail", tech2_l2: "✓ Smooth surfaces", tech2_l3: "✓ Perfect for miniatures", tech2_l4: "✓ Jewelry-grade precision",
  tech3_h: "Stereolithography", tech3_p: "Professional-grade prints for engineering applications, dental models, and high-accuracy prototypes requiring the best surface quality.",
  tech3_l1: "✓ Highest accuracy", tech3_l2: "✓ Engineering-grade", tech3_l3: "✓ Premium finish", tech3_l4: "✓ Wide resin library",
  cat_tag: "Categories", cat_title: "What We Print", srv1_page_p: "Bring your engineering ideas to life. We print mechanical prototypes, replacement parts, jigs, fixtures, and product mockups with dimensional accuracy. Compatible with STL, OBJ, STEP, and IGES files.",
  lbl_from: "From", srv2_page_p: "Tabletop RPG figures, scale models, character miniatures, and collectible statues. We print at 28mm–100mm scale with incredible detail using premium resins.",
  srv3_page_p: "Custom rings, pendants, earrings, cufflinks, and wearable accessories. We print in castable resin for lost-wax casting, or directly in rigid/flexible materials.",
  srv4_page_p: "Sculptures, wall art, decorative vases, architectural models, and custom home decor. Available in large format for statement pieces.",
  srv5_title: "Custom Gifts & Personalization", srv5_page_p: "One-of-a-kind gifts: name plaques, phone stands, desk organizers, keychains, and personalized keepsakes. Perfect for birthdays, weddings, and corporate gifting.",
  mat_tag: "Materials", mat_title: "Our Material Library", mat_sub: "We stock over 40 materials and colors. Here are the most popular ones.",
  mat_p1: "PLA Standard", mat_p2: "Silk PLA Gold", mat_p3: "Silk PLA Silver", mat_p4: "ABS Black", mat_p5: "PETG Green", mat_p6: "PETG Blue", mat_p7: "TPU Orange", mat_p8: "Wood Fill", mat_p9: "Metal Fill", mat_p10: "Marble Fill", mat_p11: "Standard Resin", mat_p12: "ABS-Like Resin", mat_p13: "Castable Resin", mat_p14: "Glow in Dark", mat_p15: "+ 30 more",
  s_cta_title: "Not Sure What You Need?", s_cta_sub: "Just send us your idea — we'll recommend the best material and method for your project, for free.", s_cta_btn: "Talk to Us",
  port_meta_title: "Portfolio — Mind2Model3D", p_page_tag: "Our Work", p_page_title: "The Portfolio", p_page_sub: "500+ projects completed. Here's a selection of our favorites.",
  flt_all: "All", flt_proto: "Prototypes", flt_mini: "Miniatures", flt_jewel: "Jewelry", flt_art: "Art & Decor", flt_gift: "Gifts",
  lbl_proto: "Prototype", lbl_mini: "Miniature", lbl_art: "Art", lbl_jewel: "Jewelry", lbl_gift: "Gift",
  pf1_h: "Drone Frame V2", pf1_p: "Custom FPV drone frame in carbon-reinforced PETG", pf2_h: "Fantasy Knight", pf2_p: "32mm resin miniature with incredible surface detail",
  pf3_h: "City Skyline Sculpture", pf3_p: "1m wide architectural wall art piece in 12 interlocking sections", pf4_h: "Wedding Rings", pf4_p: "Matching pair of geometric wedding bands",
  pf5_h: "Custom Chess Set", pf5_p: "Personalized chess set with family crest pieces", pf6_h: "Medical Bracket", pf6_p: "ABS prototype for medical device housing",
  pf7_h: "D&D Dungeon Set", pf7_p: "Complete dungeon tile set — 40+ pieces for tabletop gaming", pf8_h: "Geometric Vases", pf8_p: "Set of 3 parametric vases in marble PLA",
  pf9_h: "Floral Earrings", pf9_p: "Delicate floral pattern earrings in clear resin", p_cta_title: "Like What You See?", p_cta_sub: "Let's create something amazing together. Send us your idea today.",
  shop_meta_title: "Shop — Mind2Model3D", sh_hero_tag: "Ready to Ship", sh_hero_title: "The Shop", sh_hero_sub: "Browse our ready-made prints. Order now and we'll ship within 48 hours.",
  sh_flt_all: "All Products", sh_flt_func: "Functional", sh_bdg_new: "New", sh_p1_h: "Geometric Vase", sh_p1_p: "Low-poly vase in marble fill PLA. Perfect for dried flowers.",
  sh_btn_cart: "Add to Cart", sh_p2_h: "Dragon Miniature", sh_p2_p: "28mm scale, resin printed with ultra-fine detail. Pre-primed.", sh_bdg_pop: "Popular",
  sh_p3_h: "Geometric Ring", sh_p3_p: "Custom-sized geometric ring in rigid white resin. Unique design.", sh_p4_h: "Cable Management Clips", sh_p4_p: "Set of 10 desk cable organizer clips. Adhesive-ready backing.",
  sh_p5_h: "Custom Name Keychain", sh_p5_p: "Personalized name keychain in your choice of color. Ships in 24h.", sh_p6_h: "Hexagon Wall Tiles", sh_p6_p: "Set of 6 geometric wall tiles. Mix & match patterns and colors.",
  sh_p7_h: "Chess Set", sh_p7_p: "Full 32-piece chess set in resin. Elegant modern design.", sh_bdg_best: "Best Seller", sh_p8_h: "Phone Stand", sh_p8_p: "Adjustable angle desk phone stand. Fits all phone sizes.",
  sh_cart_title: "Your Cart", sh_cart_empty: "Your cart is empty. Add some products!", sh_cart_total: "Total:", sh_cart_btn: "Proceed to Order",
  sh_cta_title: "Don't See What You Need?", sh_cta_sub: "We do fully custom orders too. Send us your design and we'll make it happen.", sh_cta_btn: "Request Custom Print"
};
langData.hu = {
  meta_title: "Mind2Model3D — Egyedi 3D Nyomtatás",
  nav_home: "Kezdőlap", nav_services: "Szolgáltatások", nav_shop: "Webshop", nav_portfolio: "Portfólió", nav_contact: "Kapcsolat", btn_quote: "Kérjen ajánlatot",
  hero_tag: "✦ Egyedi 3D Nyomtatási Stúdió", hero_title: "A gondolataitól a valóságos modellig", hero_sub: "A legmerészebb ötleteit is fizikai valósággá alakítjuk. Prototípusok, gyűjtői darabok, ékszerek, funkcionális alkatrészek — ha el tudja képzelni, mi ki tudjuk nyomtatni.",
  btn_start: "Projekt indítása", btn_view: "Munkáink megtekintése", stat_projects: "Átadott projekt", stat_turnaround: "Átl. elkészülési idő", stat_custom: "Teljesen egyedi",
  latest_print_lbl: "Legutóbbi nyomtatás", latest_print_name: "Egyedi prototípus #47", m_fdm: "FDM nyomtatás", m_resin: "Műgyanta nyomtatás", m_proto: "Egyedi prototípusok",
  m_mini: "Miniatűrök", m_jewel: "Ékszerek", m_parts: "Funkcionális alkatrészek", m_art: "Művészet és dekoráció", m_design: "Terméktervezés",
  srv_tag: "Mit csinálunk", srv_title: "Mindenféle egyedi nyomtatás", srv_sub: "A koncepciótól a fizikai tárgyig — mindent precizitással és gondossággal kezelünk.",
  srv1_title: "Prototípusok és alkatrészek", srv1_desc: "Funkcionális prototípusok, mechanikus alkatrészek és mérnöki modellek szűk tűréshatárral.", learn_more: "Tudjon meg többet →",
  srv2_title: "Miniatűrök és gyűjtői darabok", srv2_desc: "Rendkívül részletes figurák, társasjáték miniatűrök és gyűjtői modellek műgyantából.",
  c_hero_tag: "Beszéljünk",
  c_hero_title_p1: "Lépjen ",
  c_hero_title_p2: "Kapcsolatba",
  c_info_title_p1: "Azért vagyunk itt, hogy",
  c_info_title_p2: "Segítsünk",
  c_info_sub: "Akár kész terved van, akár csak egy ötlet a fejedben — mi vagyunk a megfelelő emberek, akikkel érdemes beszélni. Nincs túl nagy vagy túl kicsi projekt.",
  c_hero_sub: "Van egy ötlete vagy egy 3D modell fájlja? Írjon nekünk, és életre keltjük.",
  srv3_title: "Ékszerek és kiegészítők", srv3_desc: "Egyedi gyűrűk, medálok, karkötők és viselhető művészeti alkotások precíziós nyomtatással.",
  srv4_title: "Művészet és dekoráció", srv4_desc: "Dekorációs elemek, szobrok és művészi nyomatok otthoni és üzleti terekbe.", btn_all_srv: "Összes szolgáltatás",
  step_tag: "A folyamat", step_title: "Hogyan működik", step1_h: "Ossza meg ötletét", step1_p: "Küldje el tervfájlját, vázlatát vagy csak a leírást. A többit mi elintézzük.",
  step2_h: "Előkészítés és ajánlat", step2_p: "Áttekintjük a projektet, javasoljuk a legjobb anyagot és módszert, majd árajánlatot küldünk.",
  step3_h: "Kinyomtatjuk", step3_p: "A jóváhagyás után gondosan kinyomtatjuk a modellt, és ellenőrizzük minden részletét.",
  step4_h: "Kézhezvétel", step4_p: "Házhoz szállítjuk vagy helyi átvételt biztosítunk. Gyors, biztonságos és igényes csomagolás.",
  port_tag: "Munkáink", port_title: "Frissen a nyomtatóból", port_sub: "Egy kis ízelítő abból, amit ügyfeleinknek készítettünk.",
  p1_title: "Egyedi Úr Ganesha szobor", p1_desc: "Nagy felbontású, részletgazdag művészi tervezés",
  p2_title: "Funkcionális mérnöki prototípus", p2_desc: "Fegyver hangtompító rögzítő", p3_title: "Egyedi szalvétatartó", p3_desc: "Egyedi szalvétatartó",
  btn_full_port: "Teljes portfólió megtekintése", c_btn_submit: "Üzenet küldése és ingyenes ajánlat", c_success_h: "Üzenet elküldve!",
  c_success_p: "Köszönjük a megkeresést! Áttekintjük a projektet, és 24 órán belül árajánlattal válaszolunk.",
  faq_tag: "Kérdések", faq_title: "Gyakran Ismételt",
  faq1_q: "Milyen fájlformátumokat fogadnak el? +", faq1_a: "A 3D nyomtatáshoz STL, OBJ, STEP, IGES és 3MF formátumokat fogadunk el. Ha csak vázlata vagy fotója van, segítünk a 3D fájl elkészítésében — csak említse meg az üzenetében.",
  faq2_q: "Mennyi ideig tart? +", faq2_a: "A legtöbb megrendelés 48–72 órán belül elkészül. A nagyobb vagy összetettebb projektek hosszabb időt vehetnek igénybe. Az árajánlat elküldésekor mindig pontos ütemtervet adunk.",
  faq3_q: "Szállítanak külföldre is? +", faq3_a: "Igen! Világszerte szállítunk. Az EU-s rendelések általában 3–5 munkanap alatt megérkeznek. A nemzetközi szállítás 7–14 napot vesz igénybe. Budapesten személyes átvétel is lehetséges.",
  faq4_q: "Mi van, ha nincs 3D fájlom? +", faq4_a: "Semmi probléma! Kiegészítő szolgáltatásként 3D modellezést is kínálunk. Ossza meg vázlatát, referencia képét vagy leírását, és mi elkészítjük a modellt. A modellezési díjak 25 eurótól kezdődnek.",
  faq5_q: "Mennyi a minimális rendelési mennyiség? +", faq5_a: "Nincs minimum — örömmel fogadunk egyedi darabos rendeléseket is. Nagyobb megrendelések esetén (10+ darab) mennyiségi kedvezményt biztosítunk. Vegye fel velünk a kapcsolatot a nagykereskedelmi árakért.",
  foot_brand_sub: "A képzelet fizikai valósággá formálása, rétegről rétegre.", foot_h1: "Navigáció", foot_h2: "Szolgáltatások", foot_h3: "Kapcsolat", foot_copy: "© 2025 Mind2Model3D. Minden jog fenntartva.",
  srv_meta_title: "Szolgáltatások — Mind2Model3D", s_hero_tag: "Amit kínálunk", s_hero_title: "Szolgáltatásaink", s_hero_sub: "Bármire is van szüksége kinyomtatva — megvan a technológiánk, alapanyagunk és szakértelmünk ahhoz, hogy megvalósítsuk.",
  tech_tag: "Technológiák", tech_title: "Nyomtatási módszerek", tech1_h: "Fused Deposition Modeling (FDM)", tech1_p: "A legsokoldalúbb módszer. Kiváló funkcionális alkatrészekhez, prototípusokhoz és nagy tárgyakhoz. Elérhető PLA, PETG, ABS, TPU és egyéb anyagokban.",
  tech1_l1: "✓ Nagy nyomtatási térfogat", tech1_l2: "✓ Széles anyagválaszték", tech1_l3: "✓ Költséghatékony", tech1_l4: "✓ Gyors átfutási idő",
  tech2_h: "Műgyanta (MSLA/DLP)", tech2_p: "Rendkívül részletgazdag nyomtatás miniatűrökhöz, ékszerekhez és mindenhez, ami finom kidolgozást igényel. Sima felület közvetlenül a nyomtatóból.",
  tech2_l1: "✓ Ultra-finom részletek", tech2_l2: "✓ Sima felületek", tech2_l3: "✓ Tökéletes miniatűrököz", tech2_l4: "✓ Ékszer-szintű precizitás",
  tech3_h: "Sztereolitográfia (SLA)", tech3_p: "Professzionális szintű nyomatok mérnöki alkalmazásokhoz, fogászati modellekhez és nagy pontosságú prototípusokhoz, amelyek a legjobb felületi minőséget igénylik.",
  tech3_l1: "✓ Legmagasabb pontosság", tech3_l2: "✓ Mérnöki minőség", tech3_l3: "✓ Prémium kidolgozás", tech3_l4: "✓ Széles műgyanta könyvtár",
  cat_tag: "Kategóriák", cat_title: "Mit nyomtatunk", srv1_page_p: "Keltse életre mérnöki ötleteit. Mechanikai prototípusokat, cserealkatrészeket, sablonokat, rögzítőket és termékmaketteket nyomtatunk méretpontosan. STL, OBJ, STEP és IGES fájlokkal kompatibilis.",
  lbl_from: "Már", srv2_page_p: "Asztali RPG figurák, méretarányos modellek, karakter miniatűrök és gyűjthető szobrok. 28 mm és 100 mm közötti méretarányban nyomtatunk hihetetlen részletességgel, prémium műgyantákból.",
  srv3_page_p: "Egyedi gyűrűk, medálok, fülbevalók, mandzsettagombok és viselhető kiegészítők. Kiégethető műgyantából nyomtatunk viaszveszteséges öntéshez, vagy közvetlenül merev/flexibilis anyagokból.",
  srv4_page_p: "Szobrok, faliképek, dekoratív vázák, építészeti modellek és egyedi lakberendezési tárgyak. Nagy formátumban is elérhető hangsúlyos darabokhoz.",
  srv5_title: "Egyedi ajándékok és személyre szabás", srv5_page_p: "Különleges ajándékok: névtáblák, telefontartók, asztali rendszerezők, kulcstartók és személyre szabott emlékek. Tökéletes születésnapokra, esküvőkre és vállalati ajándékozásra.",
  mat_tag: "Alapanyagok", mat_title: "Anyagkönyvtárunk", mat_sub: "Több mint 40 anyagot és színt tartunk raktáron. Íme a legnépszerűbbek.",
  mat_p1: "Standard PLA", mat_p2: "Selyem PLA Arany", mat_p3: "Selyem PLA Ezüst", mat_p4: "Fekete ABS", mat_p5: "Zöld PETG", mat_p6: "Kék PETG", mat_p7: "Narancssárga TPU", mat_p8: "Fa tartalmú", mat_p9: "Fém tartalmú", mat_p10: "Márvány tartalmú", mat_p11: "Standard Műgyanta", mat_p12: "ABS-szerű Műgyanta", mat_p13: "Kiégethető Műgyanta", mat_p14: "Sötétben világító", mat_p15: "+ 30 további",
  s_cta_title: "Nem biztos benne, mire van szüksége?", s_cta_sub: "Csak küldje el az ötletét — ingyenesen javasoljuk a legjobb anyagot és módszert a projektjéhez.", s_cta_btn: "Beszéljünk",
  port_meta_title: "Portfólió — Mind2Model3D", p_page_tag: "Munkáink", p_page_title: "A Portfólió", p_page_sub: "Több mint 500 befejezett projekt. Íme egy válogatás a kedvenceinkből.",
  flt_all: "Mind", flt_proto: "Prototípusok", flt_mini: "Miniatűrök", flt_jewel: "Ékszerek", flt_art: "Dekoráció", flt_gift: "Ajándékok",
  lbl_proto: "Prototípus", lbl_mini: "Miniatűr", lbl_art: "Művészet", lbl_jewel: "Ékszer", lbl_gift: "Ajándék",
  pf1_h: "Drón váz V2", pf1_p: "Egyedi FPV drón váz szénszállal erősített PETG anyagból", pf2_h: "Fantázia Lovag", pf2_p: "32 mm-es műgyanta miniatűr hihetetlen felületi részletekkel",
  pf3_h: "Város látkép szobor", pf3_p: "1 m széles építészeti fali dekoráció 12 egymásba kapcsolódó részben", pf4_h: "Esküvői gyűrűk", pf4_p: "Geometrikus esküvői gyűrűpár",
  pf5_h: "Egyedi sakkkészlet", pf5_p: "Személyre szabott sakkkészlet családi címeres darabokkal", pf6_h: "Orvosi konzol", pf6_p: "ABS prototípus orvosi eszköz házához",
  pf7_h: "D&D Dungeon készlet", pf7_p: "Teljes dungeon elem készlet — 40+ darab asztali szerepjátékokhoz", pf8_h: "Geometrikus vázák", pf8_p: "3 db parametrikus váza készlet márvány PLA-ból",
  pf9_h: "Virágos fülbevaló", pf9_p: "Finom virágmintás fülbevaló átlátszó műgyantából", p_cta_title: "Tetszik, amit lát?", p_cta_sub: "Hozzunk létre valami lenyűgözőt együtt. Küldje el ötletét még ma.",
  shop_meta_title: "Webshop — Mind2Model3D", sh_hero_tag: "Szállításra kész", sh_hero_title: "A Webshop", sh_hero_sub: "Böngésszen késztermékeink között. Rendeljen most, és 48 órán belül postázzuk.",
  sh_flt_all: "Összes termék", sh_flt_func: "Funkcionális", sh_bdg_new: "Új", sh_p1_h: "Geometrikus váza", sh_p1_p: "Low-poly váza márvány tartalmú PLA-ból. Tökéletes száraz virágokhoz.",
  sh_btn_cart: "Kosárhoz ad", sh_p2_h: "Sárkány miniatűr", sh_p2_p: "28 mm-es méretarány, ultra-finom részletességű műgyanta nyomat. Alapozott.", sh_bdg_pop: "Népszerű",
  sh_p3_h: "Geometrikus gyűrű", sh_p3_p: "Egyedi méretű geometrikus gyűrű merev fehér műgyantából. Különleges dizájn.", sh_p4_h: "Kábelrendező klipszek", sh_p4_p: "10 db-os asztali kábelrendező készlet. Öntapadós hátoldallal.",
  sh_p5_h: "Egyedi neves kulcstartó", sh_p5_p: "Személyre szabott neves kulcstartó választható színben. 24 órán belüli postázás.", sh_p6_h: "Hexagon fali panelek", sh_p6_p: "6 db geometrikus fali panel készlet. Kombinálható minták és színek.",sh_p7_h: "Sakkkészlet", sh_p7_p: "Teljes 32 darabos sakkkészlet műgyantából. Elegáns modern dizájn.", sh_bdg_best: "Sikertermék", sh_p8_h: "Telefontartó", sh_p8_p: "Állítható szögű asztali telefontartó. Minden telefonmérethez passzol.",sh_cart_title: "Kosara", sh_cart_empty: "A kosara üres. Adjon hozzá termékeket!", sh_cart_total: "Összesen:", sh_cart_btn: "Tovább a megrendeléshez",sh_cta_title: "Nem találja, amire szüksége van?", sh_cta_sub: "Teljesen egyedi megrendeléseket is vállalunk. Küldje el a tervét, és megvalósítjuk.", sh_cta_btn: "Egyedi nyomtatás igénylése"};

langData.de = {
  meta_title: "Mind2Model3D — Individueller 3D-Druck",
  nav_home: "Startseite", nav_services: "Dienste", nav_shop: "Shop", nav_portfolio: "Portfolio", nav_contact: "Kontakt", btn_quote: "Angebot anfordern",
  hero_tag: "✦ Studio für individuellen 3D-Druck", hero_title: "Von Ihren Gedanken zum echten Modell", hero_sub: "Wir verwandeln Ihre kühnsten Ideen in die physische Realität. Prototypen, Sammlerstücke, Schmuck, Funktionsteile — wenn Sie es sich vorstellen können, können wir es drucken.",
  btn_start: "Projekt starten", btn_view: "Unsere Arbeiten sehen", stat_projects: "Gelieferte Projekte", stat_turnaround: "Durchschn. Bearbeitung", stat_custom: "100% Maßgeschneidert",
  latest_print_lbl: "Neuester Druck", latest_print_name: "Individueller Prototyp #47", m_fdm: "FDM-Druck", m_resin: "Resindruck", m_proto: "Eigene Prototypen",
  m_mini: "Miniaturen", m_jewel: "Schmuck", m_parts: "Funktionsteile", m_art: "Kunst & Dekor", m_design: "Produktdesign",
  srv_tag: "Was wir tun", srv_title: "Jede Art von individuellem Druck", srv_sub: "Vom Konzept bis zum physischen Objekt — wir erledigen alles mit Präzision und Sorgfalt.",
  srv1_title: "Prototypen & Bauteile", srv1_desc: "Funktionale Prototypen, mechanische Teile und Engineering-Modelle mit engen Toleranzen.", learn_more: "Mehr erfahren →",
  srv2_title: "Miniaturen & Sammlerstücke", srv2_desc: "Hochdetaillierte Figuren, Tabletop-Miniaturen und Sammlermodelle aus Resin.",
  srv3_title: "Schmuck & Accessoires", srv3_desc: "Individuelle Ringe, Anhänger, Armbänder und tragbare Kunst, präzise gedruckt.",
  srv4_title: "Kunst & Dekor", srv4_desc: "Dekorative Stücke, Skulpturen und Kunstdrucke für Wohn- und Geschäftsräume.", btn_all_srv: "Alle Dienste sehen",
  step_tag: "Der Ablauf", step_title: "Wie es funktioniert", step1_h: "Idee teilen", step1_p: "Senden Sie uns Ihre Designdatei, Skizze oder Beschreibung. Wir kümmern uns um den Rest.",
  step2_h: "Vorbereitung & Angebot", step2_p: "Wir prüfen Ihr Projekt, empfehlen Material sowie Methode und senden Ihnen ein Angebot.",
  step3_h: "Wir drucken es", step3_p: "Nach der Freigabe drucken wir Ihr Modell sorgfältig und prüfen jedes Detail.",
  step4_h: "Erhalt", step4_p: "Wir liefern an Ihre Haustür oder vereinbaren Abholung. Schnell, sicher und schön verpackt.",
  c_hero_tag: "Lassen Sie uns reden",
  c_hero_title_p1: "Treten Sie in ",
  c_hero_title_p2: "Kontakt",
  c_hero_sub: "Haben Sie eine Idee oder eine 3D-Modelldatei? Schreiben Sie uns und erwecken wir sie zum Leben.",
  c_info_title_p1: "Wir sind hier um zu",
  c_info_title_p2: "Helfen",
  c_info_sub: "Egal, ob Sie ein fertiges Design oder nur eine Idee im Kopf haben – wir sind die richtigen Ansprechpartner. Kein Projekt ist zu groß oder zu klein.",
  port_tag: "Unsere Arbeit", port_title: "Frisch aus dem Drucker", port_sub: "Ein kleiner Einblick in das, was wir für unsere Kunden gebaut haben.",
  p1_title: "Individuelle Ganesha-Skulptur", p1_desc: "Hochauflösendes, detailliertes künstlerisches Design",
  p2_title: "Funktionaler technischer Prototyp", p2_desc: "Schalldämpferhalterung für Waffen", p3_title: "Individueller Serviettenhalter", p3_desc: "Individueller Serviettenhalter",
  btn_full_port: "Ganzes Portfolio ansehen", c_btn_submit: "Nachricht senden & kostenloses Angebot", c_success_h: "Nachricht gesendet!",
  c_success_p: "Vielen Dank für Ihre Kontaktaufnahme! Wir werden Ihr Projekt prüfen und uns innerhalb von 24 Stunden mit einem Angebot bei Ihnen melden.",
  faq_tag: "Fragen", faq_title: "Häufig Gestellte",
  faq1_q: "Welche Dateiformate akzeptieren Sie? +", faq1_a: "Wir akzeptieren STL, OBJ, STEP, IGES und 3MF für den 3D-Druck. Wenn Sie nur eine Skizze oder ein Foto haben, können wir Ihnen bei der Erstellung der 3D-Datei helfen – erwähnen Sie dies einfach in Ihrer Nachricht.",
  faq2_q: "Wie lange dauert es? +", faq2_a: "Die meisten Bestellungen werden innerhalb von 48–72 Stunden abgeschlossen. Größere oder komplexere Projekte können länger dauern. Wir geben Ihnen immer einen klaren Zeitrahmen an, wenn wir Ihr Angebot senden.",
  faq3_q: "Versenden Sie international? +", faq3_a: "Ja! Wir versenden weltweit. Bestellungen innerhalb der EU kommen in der Regel in 3–5 Werktagen an. Internationale Bestellungen dauern 7–14 Tage. Eine lokale Abholung ist in Budapest ebenfalls möglich.",
  faq4_q: "Was ist, wenn ich keine 3D-Datei habe? +", faq4_a: "Kein Problem! Wir bieten 3D-Modellierung als Zusatzleistung an. Teilen Sie uns Ihre Skizze, Ihr Referenzbild oder Ihre Beschreibung mit und wir erstellen das Modell für Sie. Die Modellierungsgebühren beginnen bei 25 €.",
  faq5_q: "Wie hoch ist Ihre Mindestbestellmenge? +", faq5_a: "Es gibt keine Mindestbestellmenge – wir nehmen gerne Einzelbestellungen an. Für Großbestellungen (ab 10 Einheiten) bieten wir Mengenrabatte an. Kontaktieren Sie uns für Großhandelspreise.",
  foot_brand_sub: "Phantasie in physische Realität verwandeln, Schicht für Schicht.", foot_h1: "Navigation", foot_h2: "Services", foot_h3: "Kontakt", foot_copy: "© 2025 Mind2Model3D. Alle Rechte vorbehalten.",
  srv_meta_title: "Dienste — Mind2Model3D", s_hero_tag: "Was wir anbieten", s_hero_title: "Unsere Dienste", s_hero_sub: "Was auch immer Sie gedruckt benötigen – wir haben die Technologie, die Materialien und das Fachwissen, um es zu realisieren.",
  tech_tag: "Technologien", tech_title: "Druckverfahren", tech1_h: "Fused Deposition Modeling (FDM)", tech1_p: "Die vielseitigste Methode. Ideal für Funktionsteile, Prototypen und große Objekte. Verfügbar in PLA, PETG, ABS, TPU und mehr.",
  tech1_l1: "✓ Großes Bauvolumen", tech1_l2: "✓ Breite Materialauswahl", tech1_l3: "✓ Kostengünstig", tech1_l4: "✓ Schnelle Bearbeitung",
  tech2_h: "Resin (MSLA/DLP)", tech2_p: "Ultrahochdetaillierter Druck für Miniaturen, Schmuck und alles, was feine Details erfordert. Glatte Oberfläche direkt aus dem Drucker.",
  tech2_l1: "✓ Ultrafeine Details", tech2_l2: "✓ Glatte Oberflächen", tech2_l3: "✓ Perfekt für Miniaturen", tech2_l4: "✓ Schmuckqualität",
  tech3_h: "Stereolithografie (SLA)", tech3_p: "Professionelle Drucke für technische Anwendungen, Dentalmodelle und hochpräzise Prototypen, die die beste Oberflächenqualität erfordern.",
  tech3_l1: "✓ Höchste Genauigkeit", tech3_l2: "✓ Engineering-Qualität", tech3_l3: "✓ Premium-Finish", tech3_l4: "✓ Große Harzbibliothek",
  cat_tag: "Kategorien", cat_title: "Was wir drucken", srv1_page_p: "Erwecken Sie Ihre technischen Ideen zum Leben. Wir drucken mechanische Prototypen, Ersatzteile, Vorrichtungen, Halterungen und Produktmodelle mit maßhaltiger Genauigkeit. Kompatibel mit STL-, OBJ-, STEP- und IGES-Dateien.",
  lbl_from: "Ab", srv2_page_p: "Tabletop-RPG-Figuren, Maßstabsmodelle, Charakterminiaturen und Sammlerstatuen. Wir drucken im 28mm-100mm Maßstab mit unglaublichen Details unter Verwendung von Premium-Harzen.",
  srv3_page_p: "Individuelle Ringe, Anhänger, Ohrringe, Manschettenknöpfe und tragbare Accessoires. Wir drucken in ausbrennbarem Harz für den Feinguss oder direkt in starren/flexiblen Materialien.",
  srv4_page_p: "Skulpturen, Wandkunst, dekorative Vasen, Architekturmodelle und individuelle Wohndekoration. Erhältlich im Großformat für Statement-Stücke.",
  srv5_title: "Individuelle Geschenke & Personalisierung", srv5_page_p: "Einzigartige Geschenke: Namensschilder, Telefonständer, Schreibtisch-Organizer, Schlüsselanhänger und personalisierte Erinnerungsstücke. Perfekt für Geburtstage, Hochzeiten und Firmengeschenke.",
  mat_tag: "Materialien", mat_title: "Unsere Materialbibliothek", mat_sub: "Wir führen über 40 Materialien und Farben. Hier sind die beliebtesten.",
  mat_p1: "PLA Standard", mat_p2: "Silk PLA Gold", mat_p3: "Silk PLA Silber", mat_p4: "ABS Schwarz", mat_p5: "PETG Grün", mat_p6: "PETG Blau", mat_p7: "TPU Orange", mat_p8: "Holz-Filament", mat_p9: "Metall-Filament", mat_p10: "Marmor-Filament", mat_p11: "Standard-Resin", mat_p12: "ABS-ähnliches Resin", mat_p13: "Ausbrennbares Resin", mat_p14: "Im Dunkeln leuchtend", mat_p15: "+ 30 weitere",
  s_cta_title: "Nicht sicher, was Sie brauchen?", s_cta_sub: "Senden Sie uns einfach Ihre Idee – wir empfehlen Ihnen kostenlos das beste Material und die beste Methode für Ihr Projekt.", s_cta_btn: "Mit uns sprechen",
  port_meta_title: "Portfolio — Mind2Model3D", p_page_tag: "Unsere Arbeit", p_page_title: "Das Portfolio", p_page_sub: "Über 500 abgeschlossene Projekte. Hier ist eine Auswahl unserer Favoriten.",
  flt_all: "Alle", flt_proto: "Prototypen", flt_mini: "Miniaturen", flt_jewel: "Schmuck", flt_art: "Kunst & Dekor", flt_gift: "Geschenke",
  lbl_proto: "Prototyp", lbl_mini: "Miniatur", lbl_art: "Kunst", lbl_jewel: "Schmuck", lbl_gift: "Geschenk",
  pf1_h: "Drohnenrahmen V2", pf1_p: "Maßgeschneiderter FPV-Drohnenrahmen aus kohlenstoffverstärktem PETG", pf2_h: "Fantasy-Ritter", pf2_p: "32-mm-Resinminiatur mit unglaublichen Oberflächendetails",
  pf3_h: "Stadt-Skyline-Skulptur", pf3_p: "1 m breites architektonisches Wandkunstwerk in 12 ineinandergreifenden Abschnitten", pf4_h: "Eheringe", pf4_p: "Passendes Paar geometrischer Eheringe",
  pf5_h: "Individuelles Schachset", pf5_p: "Personalisiertes Schachset mit Familienwappen-Figuren", pf6_h: "Medizinische Halterung", pf6_p: "ABS-Prototyp für das Gehäuse eines medizinischen Geräts",
  pf7_h: "D&D Dungeon-Set", pf7_p: "Komplettes Dungeon-Kachel-Set – über 40 Teile für Tabletop-Gaming", pf8_h: "Geometrische Vasen", pf8_p: "3er-Set parametrischer Vasen aus Marmor-PLA",
  pf9_h: "Florale Ohrringe", pf9_p: "Filigrane Ohrringe mit Blumenmuster aus klarem Harz", p_cta_title: "Gefällt Ihnen, was Sie sehen?", p_cta_sub: "Lassen Sie uns gemeinsam etwas Fantastisches erschaffen. Senden Sie uns noch heute Ihre Idee.",
  shop_meta_title: "Shop — Mind2Model3D", sh_hero_tag: "Versandbereit", sh_hero_title: "Der Shop", sh_hero_sub: "Stöbern Sie in unseren fertigen Drucken. Bestellen Sie jetzt und wir versenden innerhalb von 48 Stunden.",
  sh_flt_all: "Alle Produkte", sh_flt_func: "Funktional", sh_bdg_new: "Neu", sh_p1_h: "Geometrische Vase", sh_p1_p: "Low-Poly-Vase aus Marmor-PLA. Perfekt für Trockenblumen.",
  sh_btn_cart: "In den Warenkorb", sh_p2_h: "Drachen-Miniatur", sh_p2_p: "28-mm-Maßstab, ultrahochdetaillierter Resindruck. Grundiert.", sh_bdg_pop: "Beliebt",
  sh_p3_h: "Geometrischer Ring", sh_p3_p: "Geometrischer Ring nach Maß aus starrem weißem Harz. Einzigartiges Design.", sh_p4_h: "Kabelmanagement-Clips", sh_p4_p: "10er-Set Schreibtisch-Kabel-Organizer-Clips. Selbstklebende Rückseite.",sh_p5_h: "Individueller Namens-Schlüsselanhänger", sh_p5_p: "Personalisierter Schlüsselanhänger in Ihrer Wunschfarbe. Versand in 24 Std.", sh_p6_h: "Sechseck-Wandfliesen", sh_p6_p: "6er-Set geometrischer Wandfliesen. Muster und Farben frei kombinierbar.",sh_p7_h: "Schachspiel", sh_p7_p: "Komplettes 32-teiliges Schachspiel aus Harz. Elegantes modernes Design.", sh_bdg_best: "Bestseller", sh_p8_h: "Telefonständer", sh_p8_p: "Schreibtisch-Telefonständer mit verstellbarem Winkel. Passend für alle Smartphone-Größen.",sh_cart_title: "Ihr Warenkorb", sh_cart_empty: "Ihr Warenkorb ist leer. Fügen Sie Produkte hinzu!", sh_cart_total: "Gesamt:", sh_cart_btn: "Zur Bestellung",sh_cta_title: "Nicht das Richtige dabei?", sh_cta_sub: "Wir fertigen auch komplett individuelle Bestellungen an. Senden Sie uns Ihr Design und wir setzen es um.", sh_cta_btn: "Individuellen Druck anfordern"};

  langData.fr = {
  meta_title: "Mind2Model3D — Impression 3D Sur Mesure",
  nav_home: "Accueil", nav_services: "Services", nav_shop: "Boutique", nav_portfolio: "Portfolio", nav_contact: "Contact", btn_quote: "Obtenir un devis",
  hero_tag: "✦ Studio d'impression 3D personnalisé", hero_title: "De votre esprit à un modèle réel", hero_sub: "Nous transformons vos idées les plus audacieuses en réalité physique. Prototypes, objets de collection, bijoux, pièces fonctionnelles — si vous l'imaginez, nous l'imprimons.",
  btn_start: "Lancer votre projet", btn_view: "Voir nos réalisations", stat_projects: "Projets livrés", stat_turnaround: "Délai moyen", stat_custom: "100% Sur Mesure",
  latest_print_lbl: "Dernière impression", latest_print_name: "Prototype personnalisé #47", m_fdm: "Impression FDM", m_resin: "Impression Résine", m_proto: "Prototypes personnalisés",
  m_mini: "Miniatures", m_jewel: "Bijoux", m_parts: "Pièces fonctionnelles", m_art: "Art & Décoration", m_design: "Design de produit",
  srv_tag: "Ce que nous faisons", srv_title: "Tous types d'impressions sur mesure", srv_sub: "Du concept à l'objet physique — nous gérons tout avec précision et soin.",
  srv1_title: "Prototypes & Pièces", srv1_desc: "Prototypes fonctionnels, pièces mécaniques et modèles d'ingénierie aux tolérances strictes.", learn_more: "En savoir plus →",
  c_info_title_p1: "Nous sommes là pour vous",
  c_info_title_p2: "Aider",
  c_info_sub: "Que vous ayez un design prêt à l'emploi ou juste una idée en tête — nous sommes les bonnes personnes à qui parler. Aucun projet n'est trop grand ou too petit.",
  srv2_title: "Miniatures & Figurines", srv2_desc: "Figurines très détaillées, miniatures de table et modèles de collection en résine.",
  srv3_title: "Bijoux & Accessoires", srv3_desc: "Bagues, pendentifs, bracelets personnalisés et art de mode imprimés avec précision.",
  srv4_title: "Art & Décoration", srv4_desc: "Pièces décoratives, sculptures et impressions artistiques pour la maison et les commerces.", btn_all_srv: "Voir tous nos services",
  step_tag: "Le processus", step_title: "Comment ça marche", step1_h: "Partagez votre idée", step1_p: "Envoyez-nous votre fichier de conception, croquis ou description. Nous faisons le reste.",
  step2_h: "Préparation & Devis", step2_p: "Nous étudions le projet, suggérons le meilleur matériau/méthode, et envoyez votre devis.",
  step3_h: "Nous imprimons", step3_p: "Une fois approuvé, nous imprimons votre modèle et vérifions la qualité de chaque detail.",
  step4_h: "Vous recevez", step4_p: "Livraison à domicile ou retrait local. Rapide, sécurisé et soigneusement emballé.",
  port_tag: "Notre travail", port_title: "Tout juste sorti de l'imprimante", port_sub: "Un aperçu de ce que nous avons conçu pour nos clients.",
  p1_title: "Sculpture personnalisée de Lord Ganesha", p1_desc: "Design artistique détaillé en haute définition",
  p2_title: "Prototype d'ingénierie fonctionnel", p2_desc: "Support de silencieux pour arme", p3_title: "Porte-serviettes personnalisé", p3_desc: "Porte-serviettes personnalisé",
  c_hero_tag: "Discutons",
  c_hero_title_p1: "Contactez-",
  c_hero_title_p2: "nous",
  c_hero_sub: "Vous avez une idée ou un fichier de modèle 3D ? Écrivez-nous et donnons-lui vie.",
  btn_full_port: "Voir tout le portfolio", c_btn_submit: "Envoyer le message et obtenir un devis", c_success_h: "Message envoyé !",
  c_success_p: "Merci de nous avoir contactés ! Nous allons étudier votre projet et nous vous répondrons avec un devis sous 24 heures.",
  faq_tag: "Questions", faq_title: "Foire Aux Questions",
  faq1_q: "Quels formats de fichiers acceptez-vous ? +", faq1_a: "Nous acceptons les fichiers STL, OBJ, STEP, IGES et 3MF pour l'impression 3D. Si vous n'avez qu'un croquis ou une photo, nous pouvons vous aider à créer le fichier 3D — mentionnez-le simplement dans votre message.",
  faq2_q: "Combien de temps cela prend-il ? +", faq2_a: "La plupart des commandes sont prêtes en 48 à 72 heures. Les projets plus volumineux ou complexes peuvent prendre plus de temps. Nous vous donnerons toujours un délai clair avec notre devis.",
  faq3_q: "Livrez-vous à l'international ? +", faq3_a: "Oui ! Nous livrons dans le monde entier. Les commandes vers l'UE arrivent généralement en 3 à 5 jours ouvrés. À l'international, comptez 7 à 14 jours. Le retrait sur place est aussi possible à Budapest.",
  faq4_q: "Que faire si je n'ai pas de fichier 3D ? +", faq4_a: "Pas de problème ! Nous proposons la modélisation 3D en option. Partagez votre croquis, image de référence ou description et nous créerons le modèle. Les tarifs débutent à 25 €.",
  faq5_q: "Quel est le montant minimum de commande ? +", faq5_a: "Il n'y a pas de minimum — nous acceptons volontiers les pièces uniques. Pour les commandes groupées (10+ unités), nous offrons des remises sur volume. Contactez-nous pour les tarifs professionnels.",
  foot_brand_sub: "Transformer l'imagination en réalité physique, couche par couche.", foot_h1: "Navigation", foot_h2: "Services", foot_h3: "Contact", foot_copy: "© 2025 Mind2Model3D. Tous droits réservés.",
  srv_meta_title: "Services — Mind2Model3D", s_hero_tag: "Ce que nous offrons", s_hero_title: "Nos Services", s_hero_sub: "Quel que soit votre besoin d'impression — nous avons la technologie, les matériaux et l'expertise pour le réaliser.",
  tech_tag: "Technologies", tech_title: "Méthodes d'impression", tech1_h: "Fused Deposition Modeling (FDM)", tech1_p: "La méthode la plus polyvalente. Idéale pour les pièces fonctionnelles, les prototypes et les grands objets. Disponible en PLA, PETG, ABS, TPU et plus.",
  tech1_l1: "✓ Grand volume de fabrication", tech1_l2: "✓ Large choix de matériaux", tech1_l3: "✓ Économique", tech1_l4: "✓ Délai d'exécution rapide",
  tech2_h: "Résine (MSLA/DLP)", tech2_p: "Impression ultra-haute fidélité pour les miniatures, les bijoux et tout ce qui exige des détails fins. Finition de surface lisse dès la sortie de l'imprimante.",
  tech2_l1: "✓ Détails ultra-fins", tech2_l2: "✓ Surfaces lisses", tech2_l3: "✓ Parfait pour les miniatures", tech2_l4: "✓ Précision de qualité joaillerie",
  tech3_h: "Stéréolithographie (SLA)", tech3_p: "Impressions de qualité professionnelle pour les applications d'ingénierie, les modèles dentaires et les prototypes de haute précision exigeant une finition parfaite.",
  tech3_l1: "✓ Précision maximale", tech3_l2: "✓ Qualité industrielle", tech3_l3: "✓ Finition premium", tech3_l4: "✓ Large choix de résines",
  cat_tag: "Catégories", cat_title: "Ce que nous imprimons", srv1_page_p: "Donnez vie à vos idées d'ingénierie. Nous imprimons des prototypes mécaniques, des pièces de rechange, des gabarits, des fixations et des maquettes de produits avec une grande précision. Compatible avec les fichiers STL, OBJ, STEP et IGES.",
  lbl_from: "À partir de", srv2_page_p: "Figurines de jeux de rôle, modèles réduits, miniatures de personnages et statues de collection. Nous imprimons à l'échelle 28mm-100mm avec des détails incroyables en résine premium.",
  srv3_page_p: "Bagues, pendentifs, boucles d'oreilles, boutons de manchette et accessoires personnalisés. Nous imprimons en résine calcinable pour la fonte à cire perdue, ou directement en matériaux rigides/flexibles.",
  srv4_page_p: "Sculptures, décorations murales, vases décoratifs, maquettes d'architecture et décoration intérieure personnalisée. Disponible en grand format pour les pièces maîtresses.",
  srv5_title: "Cadeaux personnalisés", srv5_page_p: "Cadeaux uniques : plaques nominatives, supports de téléphone, organisateurs de bureau, porte-clés et souvenirs personnalisés. Parfait pour les anniversaires, mariages et cadeaux d'entreprise.",
  mat_tag: "Matériaux", mat_title: "Notre matériauthèque", mat_sub: "Nous stockons plus de 40 matériaux et couleurs. Voici les plus populaires.",
  mat_p1: "PLA Standard", mat_p2: "PLA Soie Or", mat_p3: "PLA Soie Argent", mat_p4: "ABS Noir", mat_p5: "PETG Vert", mat_p6: "PETG Bleu", mat_p7: "TPU Orange", mat_p8: "Chargé Bois", mat_p9: "Chargé Métal", mat_p10: "Rendu Marbre", mat_p11: "Résine Standard", mat_p12: "Résine Type ABS", mat_p13: "Résine Calcinable", mat_p14: "Phosphorescent", mat_p15: "+ 30 autres",
  s_cta_title: "Vous ne savez pas de quoi vous avez besoin ?", s_cta_sub: "Envoyez-nous simplement votre idée — nous vous recommanderons gratuitement le meilleur matériau et la meilleure méthode pour votre projet.", s_cta_btn: "Discutez avec nous",
  port_meta_title: "Portfolio — Mind2Model3D", p_page_tag: "Notre travail", p_page_title: "Le Portfolio", p_page_sub: "Plus de 500 projets réalisés. Voici une sélection de nos créations préférées.",
  flt_all: "Tout", flt_proto: "Prototypes", flt_mini: "Miniatures", flt_jewel: "Bijoux", flt_art: "Art & Déco", flt_gift: "Cadeaux",
  lbl_proto: "Prototype", lbl_mini: "Miniature", lbl_art: "Art", lbl_jewel: "Bijou", lbl_gift: "Cadeau",
  pf1_h: "Châssis de drone V2", pf1_p: "Châssis de drone FPV sur mesure en PETG renforcé de carbone", pf2_h: "Chevalier Fantastique", pf2_p: "Miniature en résine 32mm avec des détails de surface incroyables",
  pf3_h: "Sculpture Skyline urbaine", pf3_p: "Œuvre d'art murale architecturale de 1m de large en 12 sections emboîtables", pf4_h: "Alliances", pf4_p: "Paire d'alliances géométriques assorties",
  pf5_h: "Jeu d'échecs sur mesure", pf5_p: "Jeu d'échecs personnalisé avec des pièces aux armoiries familiales", pf6_h: "Support médical", pf6_p: "Prototype en ABS pour le boîtier d'un appareil médical",
  pf7_h: "Set de Donjon D&D", pf7_p: "Set complet de dalles de donjon — plus de 40 pièces pour le jeu sur table", pf8_h: "Vases géométriques", pf8_p: "Ensemble de 3 vases paramétriques en PLA marbre",
  pf9_h: "Boucles d'oreilles florales", pf9_p: "Boucles d'oreilles délicates à motif floral en résine transparente", p_cta_title: "Vous aimez ce que vous voyez ?", p_cta_sub: "Créons quelque chose d'incroyable ensemble. Envoyez-nous votre idée dès aujourd'hui.",
  shop_meta_title: "Boutique — Mind2Model3D", sh_hero_tag: "Prêt à envoyer", sh_hero_title: "La Boutique", sh_hero_sub: "Découvrez nos impressions prêtes à l'emploi. Commandez maintenant et nous expédions sous 48 heures.",
  sh_flt_all: "Tous les produits", sh_flt_func: "Fonctionnel", sh_bdg_new: "Nouveau", sh_p1_h: "Vase géométrique", sh_p1_p: "Vase low-poly en PLA rendu marbre. Parfait pour les fleurs séchées.",
  sh_btn_cart: "Ajouter au panier", sh_p2_h: "Miniature de Dragon", sh_p2_p: "Échelle 28mm, impression résine aux détails ultra-fins. Pré-apprêté.", sh_bdg_pop: "Populaire",sh_p3_h: "Bague géométrique", sh_p3_p: "Bague géométrique sur mesure en résine blanche rigide. Design unique.", sh_p4_h: "Clips de gestion des câbles", sh_p4_p: "Lot de 10 clips organisateurs de câbles de bureau. Envers adhésif.",sh_p5_h: "Porte-clés prénom personnalisé", sh_p5_p: "Porte-clés prénom personnalisé dans la couleur de votre choix. Expédié en 24h.", sh_p6_h: "Dalles murales hexagonales", sh_p6_p: "Lot de 6 dalles murales géométriques. Mélangez les motifs et les couleurs.",sh_p7_h: "Jeu d'échecs", sh_p7_p: "Jeu d'échecs complet de 32 pièces en résine. Design moderne et élégant.", sh_bdg_best: "Meilleure vente", sh_p8_h: "Support de téléphone", sh_p8_p: "Support de téléphone de bureau à angle réglable. Convient à toutes les tailles.",sh_cart_title: "Votre Panier", sh_cart_empty: "Votre panier est vide. Ajoutez des produits !", sh_cart_total: "Total :", sh_cart_btn: "Passer la commande",sh_cta_title: "Vous ne trouvez pas votre bonheur ?", sh_cta_sub: "Nous réalisons aussi des projets 100% sur mesure. Envoyez-nous votre design et nous lui donnerons vie.", sh_cta_btn: "Demander une impression sur mesure"};

  langData.es = {
  meta_title: "Mind2Model3D — Impresión 3D Personalizada",
  nav_home: "Inicio", nav_services: "Servicios", nav_shop: "Tienda", nav_portfolio: "Portafolio", nav_contact: "Contacto", btn_quote: "Obtener Presupuesto",
  hero_tag: "✦ Estudio de Impresión 3D Personalizado", hero_title: "De Tu Mente A Un Modelo Real", hero_sub: "Convertimos tus ideas más audaces en realidad física. Prototipos, coleccionables, joyería, piezas funcionales — si puedes imaginarlo, podemos imprimirlo.",
  btn_start: "Comienza Tu Proyecto", btn_view: "Ver Nuestro Trabajo", stat_projects: "Proyectos Entregados", stat_turnaround: "Plazo de Entrega Promedio", stat_custom: "Hecho a Medida",
  latest_print_lbl: "Última Impresión", latest_print_name: "Prototipo Personalizado #47", m_fdm: "Impresión FDM", m_resin: "Impresión de Resina", m_proto: "Prototipos Personalizados",
  m_mini: "Miniaturas", m_jewel: "Joyería", m_parts: "Piezas Funcionales", m_art: "Arte y Decoración", m_design: "Diseño de Productos",
  srv_tag: "Qué Hacemos", srv_title: "Todo Tipo de Impresión Personalizada", srv_sub: "Del concepto al objeto físico — lo manejamos todo con precisión y cuidado.",
  srv1_title: "Prototipos y Piezas", srv1_desc: "Prototipos funcionales, piezas mecánicas y modelos de ingeniería con tolerancias estrictas.", learn_more: "Saber más →",
  srv2_title: "Miniaturas y Coleccionables", srv2_desc: "Figuritas muy detalladas, miniaturas de mesa y modelos coleccionables en resina.",
  srv3_title: "Joyería y Accesorios", srv3_desc: "Anillos, colgantes, pulseras personalizadas y arte ponible impreso con precisión.",
  srv4_title: "Arte y Decoración", srv4_desc: "Piezas decorativas, esculturas e impresiones artísticas para el hogar y espacios comerciales.", btn_all_srv: "Ver Todos los Servicios",
  c_info_title_p1: "Estamos aquí para",
  c_info_title_p2: "Ayudar",
  c_info_sub: "Ya sea que tengas un diseño listo o solo una idea en tu cabeza, somos las personas adecuadas con quienes hablar. Ningún proyecto es demasiado grande o demasiado pequeño.",
  c_hero_tag: "Hablemos",
  c_hero_title_p1: "Ponte en ",
  c_hero_title_p2: "Contacto",
  c_hero_sub: "¿Tienes una idea o un archivo de modelo 3D? Escríbenos y le daremos vida.",
  step_tag: "El Proceso", step_title: "Cómo Funciona", step1_h: "Comparte Tu Idea", step1_p: "Envíanos tu archivo de diseño, boceto o solo una descripción. Nosotros resolveremos el resto.",
  step2_h: "Preparamos y Cotizamos", step2_p: "Revisamos tu proyecto, sugerimos el mejor material y método, y te enviamos una cotización.",
  step3_h: "Lo Imprimimos", step3_p: "Una vez aprobado, imprimimos tu modelo con cuidado y controlamos la calidad de cada detalle.",
  step4_h: "Lo Recibes", step4_p: "Lo enviamos a tu puerta o coordinamos la recogida local. Rápido, seguro y bellamente empaquetado.",
  port_tag: "Nuestro Trabajo", port_title: "Fresco de la Impresora", port_sub: "Un vistazo de lo que hemos construido para nuestros clientes.",
  p1_title: "Escultura Personalizada del Señor Ganesha", p1_desc: "Diseño artístico detallado de alta definición",
  p2_title: "Prototipo de Ingeniería Funcional", p2_desc: "Soporte para Silenciador de Pistola", p3_title: "Servilletero Personalizado", p3_desc: "Servilletero Personalizado",
  btn_full_port: "Ver Galería de Portafolio Completa", c_btn_submit: "Enviar mensaje y obtener cotización", c_success_h: "¡Mensaje enviado!",
  c_success_p: "¡Gracias por contactarnos! Revisaremos tu proyecto y te responderemos con una cotización en menos de 24 horas.",
  faq_tag: "Preguntas", faq_title: "Preguntas Frecuentes",
  faq1_q: "¿Qué formatos de archivo aceptan? +", faq1_a: "Aceptamos STL, OBJ, STEP, IGES y 3MF para impresión 3D. Si solo tienes un boceto o una foto, podemos ayudarte a crear el archivo 3D; solo menciónalo en tu mensaje.",
  faq2_q: "¿Cuánto tiempo toma? +", faq2_a: "La mayoría de los pedidos se completan en 48-72 horas. Los proyectos más grandes o complejos pueden tardar más. Siempre te daremos un plazo claro cuando te enviemos tu cotización.",
  faq3_q: "¿Realizan envíos internacionales? +", faq3_a: "¡Sí! Enviamos a todo el mundo. Los pedidos de la UE suelen llegar en 3-5 días hábiles. Los pedidos internacionales tardan de 7 a 14 días. La recogida local también está disponible en Budapest.",
  faq4_q: "¿Qué pasa si no tengo un archivo 3D? +", faq4_a: "¡No hay problema! Ofrecemos modelado 3D como un servicio adicional. Comparte tu boceto, imagen de referencia o descripción y crearemos el modelo por ti. Las tarifas de modelado comienzan en €25.",
  faq5_q: "¿Cuál es el pedido mínimo? +", faq5_a: "No hay mínimo, aceptamos con gusto pedidos de una sola pieza. Para pedidos al por mayor (más de 10 unidades), ofrecemos descuentos por volumen. Contáctanos para conocer los precios mayoristas.",
  foot_brand_sub: "Transformando la imaginación en realidad física, capa por capa.", foot_h1: "Navegación", foot_h2: "Servicios", foot_h3: "Contacto", foot_copy: "© 2025 Mind2Model3D. Todos los derechos reservados.",
  srv_meta_title: "Servicios — Mind2Model3D", s_hero_tag: "Lo que ofrecemos", s_hero_title: "Nuestros Servicios", s_hero_sub: "Sea lo que sea que necesites imprimir, tenemos la tecnología, los materiales y la experiencia para hacerlo realidad.",
  tech_tag: "Tecnologías", tech_title: "Métodos de impresión", tech1_h: "Fused Deposition Modeling (FDM)", tech1_p: "El método más versátil. Ideal para piezas funcionales, prototipos y objetos grandes. Disponible en PLA, PETG, ABS, TPU y más.",
  tech1_l1: "✓ Gran volumen de construcción", tech1_l2: "✓ Amplia gama de materiales", tech1_l3: "✓ Económico", tech1_l4: "✓ Entrega rápida",
  tech2_h: "Resina (MSLA/DLP)", tech2_p: "Impresión de ultra alta definición para miniaturas, joyería y cualquier cosa que requiera detalles finos. Acabado superficial liso directamente desde la impresora.",
  tech2_l1: "✓ Detalles ultra finos", tech2_l2: "✓ Superficies lisas", tech2_l3: "✓ Perfecto para miniaturas", tech2_l4: "✓ Precisión de calidad de joyería",
  tech3_h: "Estereolitografía (SLA)", tech3_p: "Impresiones de calidad profesional para aplicaciones de ingeniería, modelos dentales y prototipos de alta precisión que requieren la mejor calidad de superficie.",
  tech3_l1: "✓ Máxima precisión", tech3_l2: "✓ Calidad de ingeniería", tech3_l3: "✓ Acabado premium", tech3_l4: "✓ Amplia biblioteca de resinas",
  cat_tag: "Categorías", cat_title: "Qué imprimimos", srv1_page_p: "Dale vida a tus ideas de ingeniería. Imprimimos prototipos mecánicos, piezas de repuesto, plantillas, accesorios y maquetas de productos con precisión dimensional. Compatible con archivos STL, OBJ, STEP e IGES.",
  lbl_from: "Desde", srv2_page_p: "Figuras de RPG de mesa, modelos a escala, miniaturas de personajes y estatuas coleccionables. Imprimimos a escala de 28 mm a 100 mm con detalles increíbles utilizando resinas premium.",
  srv3_page_p: "Anillos, colgantes, aretes, gemelos y accesorios portátiles personalizados. Imprimimos en resina calcinable para fundición a la cire perdue, o directamente en materiales rígidos/flexibles.",
  srv4_page_p: "Esculturas, arte de pared, jarrones decorativos, modelos arquitectónicos y decoración del hogar personalizada. Disponible en formato grande para piezas llamativas.",
  srv5_title: "Regalos personalizados", srv5_page_p: "Regalos únicos: placas con nombres, soportes para teléfonos, organizadores de escritorio, llaveros y recuerdos personalizados. Perfecto para cumpleaños, bodas y regalos corporativos.",
  mat_tag: "Materiales", mat_title: "Nuestra biblioteca de materiales", mat_sub: "Disponemos de más de 40 materiales y colores. Aquí están los más populares.",
  mat_p1: "PLA Estándar", mat_p2: "PLA Seda Oro", mat_p3: "PLA Seda Plata", mat_p4: "ABS Negro", mat_p5: "PETG Verde", mat_p6: "PETG Azul", mat_p7: "TPU Naranja", mat_p8: "Filamento de Madera", mat_p9: "Filamento de Metal", mat_p10: "Filamento de Mármol", mat_p11: "Resina Estándar", mat_p12: "Resina tipo ABS", mat_p13: "Resina Calcinable", mat_p14: "Brilla en la oscuridad", mat_p15: "+ 30 más",
  s_cta_title: "¿No estás seguro de lo que necesitas?", s_cta_sub: "Solo envíanos tu idea: te recomendaremos el mejor material y método para tu proyecto, de forma gratuita.", s_cta_btn: "Habla con nosotros",
  port_meta_title: "Portfolio — Mind2Model3D", p_page_tag: "Nuestro trabajo", p_page_title: "El Portafolio", p_page_sub: "Más de 500 proyectos completados. Aquí hay una selección de nuestros favoritos.",
  flt_all: "Todo", flt_proto: "Prototipos", flt_mini: "Miniaturas", flt_jewel: "Joyería", flt_art: "Arte y Decoración", flt_gift: "Regalos",
  lbl_proto: "Prototipo", lbl_mini: "Miniatura", lbl_art: "Arte", lbl_jewel: "Joya", lbl_gift: "Regalo",
  pf1_h: "Chasis de dron V2", pf1_p: "Chasis de dron FPV personalizado en PETG reforzado con carbono", pf2_h: "Caballero de Fantasía", pf2_p: "Miniatura de resina de 32 mm con detalles de superficie increíbles",
  pf3_h: "Escultura del horizonte de la ciudad", pf3_p: "Obra de arte de pared arquitectónica de 1 m de ancho en 12 secciones entrelazadas", pf4_h: "Anillos de boda", pf4_p: "Pareja a juego de alianzas geométricas",
  pf5_h: "Ajedrez personalizado", pf5_p: "Juego de ajedrez personalizado con piezas con el escudo familiar", pf6_h: "Soporte médico", pf6_p: "Prototipo de ABS para la carcasa de un dispositivo médico",
  pf7_h: "Set de Mazmorras D&D", pf7_p: "Set completo de baldosas de mazmorra: más de 40 piezas para juegos de mesa", pf8_h: "Jarrones geométricos", pf8_p: "Juego de 3 jarrones paramétricos en PLA de mármol",
  pf9_h: "Aretes florales", pf9_p: "Delicados aretes con patrón floral en resina transparente", p_cta_title: "¿Te gusta lo que ves?", p_cta_sub: "Creemos algo increíble juntos. Envíanos tu idea hoy mismo.",
  shop_meta_title: "Tienda — Mind2Model3D", sh_hero_tag: "Listo para enviar", sh_hero_title: "La Tienda", sh_hero_sub: "Explora nuestras impresiones listas para usar. Ordena ahora y enviaremos en 48 horas.",
  sh_flt_all: "Todos los productos", sh_flt_func: "Funcional", sh_bdg_new: "Nuevo", sh_p1_h: "Jarrón geométrico", sh_p1_p: "Jarrón low-poly en PLA de mármol. Perfecto para flores secas.",
  sh_btn_cart: "Añadir al carrito", sh_p2_h: "Miniatura de Dragón", sh_p2_p: "Escala de 28 mm, impresión en resina con detalles ultra finos. Pre-imprimado.", sh_bdg_pop: "Popular",
  sh_p3_h: "Anillo geométrico", sh_p3_p: "Anillo geométrico a medida en resina blanca rígida. Diseño único.", sh_p4_h: "Clips de gestión de cables", sh_p4_p: "Juego de 10 clips organizadores de cables de escritorio. Respaldo listo para adhesivo.",sh_p5_h: "Llavero con nombre personalizado", sh_p5_p: "Llavero con nombre personalizado en el color que elijas. Se envía en 24 horas.", sh_p6_h: "Azulejos de pared hexagonales", sh_p6_p: "Juego de 6 azulejos de pared geométricos. Combina patrones y colores.",sh_p7_h: "Juego de ajedrez", sh_p7_p: "Juego de ajedrez completo de 32 piezas en resina. Diseño moderno y elegante.", sh_bdg_best: "Más vendido", sh_p8_h: "Soporte para teléfono", sh_p8_p: "Soporte para teléfono de escritorio con ángulo ajustable. Se adapta a todos los tamaños.",sh_cart_title: "Tu Carrito", sh_cart_empty: "Tu carrito está vacío. ¡Añade algunos productos!", sh_cart_total: "Total:", sh_cart_btn: "Proceder al pedido",sh_cta_title: "¿No ves lo que necesitas?", sh_cta_sub: "También hacemos pedidos totalmente personalizados. Envíanos tu diseño y lo haremos realidad.", sh_cta_btn: "Solicitar impresión personalizada"};







