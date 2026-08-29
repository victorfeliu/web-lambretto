/* =====================================================================
   Cafè Lambretto — i18n (CA · EN · FR)
   ---------------------------------------------------------------------
   Catalan is the source language and lives directly in index.html for SEO.
   English and French are provided here as full translations; switching is
   client-side, remembered in localStorage, and updates <html lang>, the
   <title> and the meta description.

   ➕ To add / edit a language: add or edit its object in TRANSLATIONS below.
      Keys map 1:1 to the [data-i18n="..."] attributes in the HTML.
      Values may contain simple inline HTML (e.g. <strong>…</strong>).

   ➡️ To promote a language to its own static pages for maximum SEO
      (e.g. /en/ /fr/ with server-rendered text + hreflang), copy index.html,
      translate the markup, and enable the <link rel="alternate"> tags in
      <head>. This file keeps the on-page switcher working in the meantime.
   ===================================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "lambretto-lang";
  var SUPPORTED = ["ca", "en", "fr"];

  var TRANSLATIONS = {
    /* ------------------------------ CATALÀ ------------------------------ */
    ca: {
      "meta.title": "Cafè Lambretto · Cafeteria amb terrassa a Tremp (Pallars Jussà)",
      "meta.description": "Cafè Lambretto és una cafeteria amb terrassa al Passeig de Tremp (Pallars Jussà). Cafès d'especialitat (amb opció de beguda de civada), tes, gin-tònics, vermut Espinaler i entrepans calents. Assaboreix cada instant.",
      "brand.tag": "Tremp · Pallars Jussà",
      "nav.about": "Nosaltres",
      "nav.menu": "Carta",
      "nav.trail": "Sender Lambretto",
      "nav.hours": "Horaris",
      "nav.contact": "Contacte",
      "cta.directions": "Com arribar",
      "cta.menu": "Veure la carta",
      "a11y.skip": "Vés al contingut",
      "a11y.menu": "Obre el menú",
      "hero.eyebrow": "Cafeteria · Terrassa al Passeig",
      "hero.slogan": "Assaboreix cada instant",
      "hero.sub": "Un cafè autèntic per als amants del bon gust, al cor de Tremp.",
      "about.eyebrow": "Nosaltres",
      "about.title": "Un racó amb ànima al cor de Tremp",
      "about.p1": "El Cafè Lambretto és molt més que una cafeteria: és un lloc per aturar-se, respirar i assaborir cada instant. Prenem el nom de la mítica Lambretta, i d'aquell esperit vintage n'hem fet una manera d'entendre el temps: sense presses, amb caràcter i amb estil.",
      "about.p2": "A dins t'esperen les parets pintades a mà, amb dibuixos únics que fan de cada racó una petita història. Sona bona música, fa olor de cafè acabat de fer i sempre hi ha una taula a punt per a tu.",
      "about.p3": "I quan arriba el bon temps, la nostra terrassa al Passeig és el millor seient de Tremp per veure passar la vida amb una tassa a la mà.",
      "about.chip1": "Interior pintat a mà",
      "about.chip2": "Bona música",
      "about.chip3": "Terrassa al Passeig",
      "about.chip4": "Wi-Fi gratuït",
      "menu.eyebrow": "La carta",
      "menu.title": "Per beure amb calma",
      "menu.intro": "Del cafè d'especialitat al gin-tònic de tarda. Tria, seu i deixa que passi l'estona.",
      "menu.notice": "<strong>No som un restaurant.</strong> L'únic menjar que servim són <strong>entrepans calents</strong>. Tota la resta és per beure i gaudir.",
      "menu.coffee.t": "Cafès d'especialitat",
      "menu.coffee.d": "Torrat de proximitat, extret amb cura. Amb opció de <strong>beguda de civada</strong>.",
      "menu.coffee.tag": "Opció beguda de civada",
      "menu.tea.t": "Tes i infusions",
      "menu.tea.d": "Una selecció per a cada moment del dia, calenta o freda.",
      "menu.choco.t": "Xocolata calenta",
      "menu.choco.d": "Densa i reconfortant, la de sempre però millor.",
      "menu.beer.t": "Cerveses artesanes",
      "menu.beer.d": "Rotació d'etiquetes per descobrir sense sortir del Passeig.",
      "menu.gin.t": "Gin-tònics",
      "menu.gin.d": "Preparats amb calma i bona ginebra per a la tarda-vespre.",
      "menu.vermouth.t": "Vermut Espinaler",
      "menu.vermouth.d": "L'aperitiu com cal, amb el clàssic Espinaler.",
      "menu.vermouth.tag": "Diumenges i festius",
      "menu.mojito.t": "Mojitos",
      "menu.mojito.d": "Menta fresca i bon ritme per als dies de terrassa.",
      "menu.food.t": "Entrepans calents",
      "menu.food.d": "L'únic àpat de la casa. Senzill, calent i ben fet.",
      "menu.food.tag": "L'únic menjar",
      "menu.foot": "Carta orientativa. Demana'ns les novetats i el que tenim de temporada.",
      "trail.eyebrow": "A l'aire lliure",
      "trail.title": "El Sender Lambretto",
      "trail.p1": "El cafè té sender propi. Un recorregut per Tremp que porta el nostre nom i que forma part de la xarxa de camins del <strong>Territori Lo Podall</strong>, dins del projecte <strong>Moturisme Ara Lleida</strong>.",
      "trail.p2": "Camina'l o pedala'l, i acaba com toca: amb una parada al Lambretto per recuperar forces.",
      "trail.link.route": "Veure el sender",
      "trail.link.podall": "Territori Lo Podall",
      "trail.link.moturisme": "Moturisme Ara Lleida",
      "hours.eyebrow": "Horaris i ubicació",
      "hours.title": "On i quan trobar-nos",
      "hours.open": "Horari",
      "day.monfri": "Dilluns – Divendres",
      "day.sat": "Dissabte",
      "day.sun": "Diumenge i festius",
      "hours.vermouth": "Vermut Espinaler",
      "hours.confirm": "Horari orientatiu; confirma'ns festius i temporada.",
      "hours.wifi": "Wi-Fi gratuït",
      "hours.terrace": "Terrassa",
      "ph.interior": "Foto · interior pintat a mà",
      "ph.terrace": "Foto · terrassa al Passeig",
      "ph.trail": "Foto · Sender Lambretto",
      "contact.eyebrow": "Contacte",
      "contact.title": "Seguim en contacte",
      "contact.intro": "Fotos, novetats i el dia a dia del cafè els trobaràs a les nostres xarxes. Vine a saludar-nos.",
      "footer.made": "Fet amb ☕ a Tremp"
    },

    /* ------------------------------ ENGLISH ------------------------------ */
    en: {
      "meta.title": "Cafè Lambretto · Café with a terrace in Tremp (Pallars Jussà)",
      "meta.description": "Cafè Lambretto is a café with a terrace on the Passeig in Tremp (Pallars Jussà). Specialty coffees (oat-milk option), teas, gin & tonics, Espinaler vermouth and hot sandwiches. Savour every moment.",
      "brand.tag": "Tremp · Pallars Jussà",
      "nav.about": "About",
      "nav.menu": "Menu",
      "nav.trail": "Lambretto Trail",
      "nav.hours": "Hours",
      "nav.contact": "Contact",
      "cta.directions": "Get directions",
      "cta.menu": "See the menu",
      "a11y.skip": "Skip to content",
      "a11y.menu": "Open menu",
      "hero.eyebrow": "Café · Terrace on the Passeig",
      "hero.slogan": "Savour every moment",
      "hero.sub": "An authentic café for lovers of good taste, in the heart of Tremp.",
      "about.eyebrow": "About us",
      "about.title": "A corner with soul in the heart of Tremp",
      "about.p1": "Cafè Lambretto is far more than a café: it's a place to pause, breathe and savour every moment. We take our name from the legendary Lambretta, and from that vintage spirit we've made a way of understanding time — unhurried, with character and with style.",
      "about.p2": "Inside, hand-painted walls await you, with unique drawings that turn every corner into a little story. Good music plays, the smell of fresh coffee lingers, and there's always a table ready for you.",
      "about.p3": "And when the good weather arrives, our terrace on the Passeig is the best seat in Tremp to watch life go by with a cup in hand.",
      "about.chip1": "Hand-painted interior",
      "about.chip2": "Good music",
      "about.chip3": "Terrace on the Passeig",
      "about.chip4": "Free Wi-Fi",
      "menu.eyebrow": "The menu",
      "menu.title": "To sip and take your time",
      "menu.intro": "From specialty coffee to an afternoon gin & tonic. Choose, sit down and let time drift by.",
      "menu.notice": "<strong>We're not a restaurant.</strong> The only food we serve is <strong>hot sandwiches</strong>. Everything else is to drink and enjoy.",
      "menu.coffee.t": "Specialty coffees",
      "menu.coffee.d": "Locally roasted, carefully brewed. With an <strong>oat-milk</strong> option.",
      "menu.coffee.tag": "Oat-milk option",
      "menu.tea.t": "Teas & infusions",
      "menu.tea.d": "A selection for every moment of the day, hot or cold.",
      "menu.choco.t": "Hot chocolate",
      "menu.choco.d": "Thick and comforting — the classic, only better.",
      "menu.beer.t": "Craft beers",
      "menu.beer.d": "A rotating line-up to discover without leaving the Passeig.",
      "menu.gin.t": "Gin & tonics",
      "menu.gin.d": "Made with care and good gin for the late afternoon.",
      "menu.vermouth.t": "Espinaler vermouth",
      "menu.vermouth.d": "The aperitif done right, with the classic Espinaler.",
      "menu.vermouth.tag": "Sundays & holidays",
      "menu.mojito.t": "Mojitos",
      "menu.mojito.d": "Fresh mint and a good rhythm for terrace days.",
      "menu.food.t": "Hot sandwiches",
      "menu.food.d": "The only food of the house. Simple, hot and well made.",
      "menu.food.tag": "The only food",
      "menu.foot": "Menu is indicative. Ask us for the latest and what's in season.",
      "trail.eyebrow": "Outdoors",
      "trail.title": "The Lambretto Trail",
      "trail.p1": "The café has its own trail — a route through Tremp that bears our name and is part of the path network of <strong>Territori Lo Podall</strong>, within the <strong>Moturisme Ara Lleida</strong> project.",
      "trail.p2": "Walk it or ride it, and finish the way you should: with a stop at the Lambretto to recharge.",
      "trail.link.route": "See the trail",
      "trail.link.podall": "Territori Lo Podall",
      "trail.link.moturisme": "Moturisme Ara Lleida",
      "hours.eyebrow": "Hours & location",
      "hours.title": "Where and when to find us",
      "hours.open": "Opening hours",
      "day.monfri": "Monday – Friday",
      "day.sat": "Saturday",
      "day.sun": "Sunday & holidays",
      "hours.vermouth": "Espinaler vermouth",
      "hours.confirm": "Hours are indicative; check holidays and seasonal changes with us.",
      "hours.wifi": "Free Wi-Fi",
      "hours.terrace": "Terrace",
      "ph.interior": "Photo · hand-painted interior",
      "ph.terrace": "Photo · terrace on the Passeig",
      "ph.trail": "Photo · Lambretto Trail",
      "contact.eyebrow": "Contact",
      "contact.title": "Let's stay in touch",
      "contact.intro": "Photos, news and the café's day-to-day are all on our social media. Come and say hello.",
      "footer.made": "Made with ☕ in Tremp"
    },

    /* ------------------------------ FRANÇAIS ------------------------------ */
    fr: {
      "meta.title": "Cafè Lambretto · Café avec terrasse à Tremp (Pallars Jussà)",
      "meta.description": "Cafè Lambretto est un café avec terrasse sur le Passeig à Tremp (Pallars Jussà). Cafés de spécialité (option lait d'avoine), thés, gin tonics, vermouth Espinaler et sandwichs chauds. Savoure chaque instant.",
      "brand.tag": "Tremp · Pallars Jussà",
      "nav.about": "À propos",
      "nav.menu": "Carte",
      "nav.trail": "Sentier Lambretto",
      "nav.hours": "Horaires",
      "nav.contact": "Contact",
      "cta.directions": "Itinéraire",
      "cta.menu": "Voir la carte",
      "a11y.skip": "Aller au contenu",
      "a11y.menu": "Ouvrir le menu",
      "hero.eyebrow": "Café · Terrasse sur le Passeig",
      "hero.slogan": "Savoure chaque instant",
      "hero.sub": "Un café authentique pour les amateurs de bon goût, au cœur de Tremp.",
      "about.eyebrow": "À propos",
      "about.title": "Un coin plein d'âme au cœur de Tremp",
      "about.p1": "Le Cafè Lambretto est bien plus qu'un café : c'est un lieu où s'arrêter, respirer et savourer chaque instant. Nous tenons notre nom de la mythique Lambretta, et de cet esprit vintage nous avons fait une façon de vivre le temps — sans hâte, avec caractère et avec style.",
      "about.p2": "À l'intérieur, des murs peints à la main vous attendent, avec des dessins uniques qui font de chaque recoin une petite histoire. Une bonne musique joue, l'odeur du café frais flotte, et il y a toujours une table prête pour vous.",
      "about.p3": "Et quand revient le beau temps, notre terrasse sur le Passeig est la meilleure place de Tremp pour regarder la vie passer, une tasse à la main.",
      "about.chip1": "Intérieur peint à la main",
      "about.chip2": "Bonne musique",
      "about.chip3": "Terrasse sur le Passeig",
      "about.chip4": "Wi-Fi gratuit",
      "menu.eyebrow": "La carte",
      "menu.title": "À déguster sans se presser",
      "menu.intro": "Du café de spécialité au gin tonic de l'après-midi. Choisissez, asseyez-vous et laissez filer le temps.",
      "menu.notice": "<strong>Nous ne sommes pas un restaurant.</strong> Le seul plat que nous servons, ce sont des <strong>sandwichs chauds</strong>. Tout le reste est à boire et à savourer.",
      "menu.coffee.t": "Cafés de spécialité",
      "menu.coffee.d": "Torréfaction locale, extraction soignée. Avec option <strong>lait d'avoine</strong>.",
      "menu.coffee.tag": "Option lait d'avoine",
      "menu.tea.t": "Thés & infusions",
      "menu.tea.d": "Une sélection pour chaque moment de la journée, chaude ou froide.",
      "menu.choco.t": "Chocolat chaud",
      "menu.choco.d": "Épais et réconfortant — le classique, en mieux.",
      "menu.beer.t": "Bières artisanales",
      "menu.beer.d": "Une sélection tournante à découvrir sans quitter le Passeig.",
      "menu.gin.t": "Gin tonics",
      "menu.gin.d": "Préparés avec soin et un bon gin pour la fin d'après-midi.",
      "menu.vermouth.t": "Vermouth Espinaler",
      "menu.vermouth.d": "L'apéritif comme il se doit, avec le classique Espinaler.",
      "menu.vermouth.tag": "Dimanches & jours fériés",
      "menu.mojito.t": "Mojitos",
      "menu.mojito.d": "Menthe fraîche et bonne ambiance pour les jours de terrasse.",
      "menu.food.t": "Sandwichs chauds",
      "menu.food.d": "Le seul plat de la maison. Simple, chaud et bien fait.",
      "menu.food.tag": "Le seul plat",
      "menu.foot": "Carte indicative. Demandez-nous les nouveautés et les produits de saison.",
      "trail.eyebrow": "En plein air",
      "trail.title": "Le Sentier Lambretto",
      "trail.p1": "Le café a son propre sentier — un parcours à travers Tremp qui porte notre nom et fait partie du réseau de chemins du <strong>Territori Lo Podall</strong>, dans le cadre du projet <strong>Moturisme Ara Lleida</strong>.",
      "trail.p2": "Parcourez-le à pied ou à vélo, et terminez comme il se doit : avec une halte au Lambretto pour reprendre des forces.",
      "trail.link.route": "Voir le sentier",
      "trail.link.podall": "Territori Lo Podall",
      "trail.link.moturisme": "Moturisme Ara Lleida",
      "hours.eyebrow": "Horaires & adresse",
      "hours.title": "Où et quand nous trouver",
      "hours.open": "Horaires",
      "day.monfri": "Lundi – Vendredi",
      "day.sat": "Samedi",
      "day.sun": "Dimanche & jours fériés",
      "hours.vermouth": "Vermouth Espinaler",
      "hours.confirm": "Horaires indicatifs ; confirmez avec nous les jours fériés et la saison.",
      "hours.wifi": "Wi-Fi gratuit",
      "hours.terrace": "Terrasse",
      "ph.interior": "Photo · intérieur peint à la main",
      "ph.terrace": "Photo · terrasse sur le Passeig",
      "ph.trail": "Photo · Sentier Lambretto",
      "contact.eyebrow": "Contact",
      "contact.title": "Restons en contact",
      "contact.intro": "Photos, nouveautés et le quotidien du café sont sur nos réseaux. Venez nous dire bonjour.",
      "footer.made": "Fait avec ☕ à Tremp"
    }
  };

  var fallback = TRANSLATIONS.ca;

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "ca";
    var dict = TRANSLATIONS[lang] || fallback;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = dict[key];
      if (val == null) val = fallback[key];
      if (val == null) return; // leave existing markup if untranslated

      if (el.tagName === "META") {
        el.setAttribute("content", val);
      } else if (el.tagName === "TITLE") {
        el.textContent = val; // updates document.title
      } else {
        el.innerHTML = val;
      }
    });

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function initialLang() {
    // Catalan is the default so the rendered page matches the canonical/hreflang
    // and Open Graph signals (local SEO). We only switch away from Catalan when a
    // visitor has explicitly chosen EN/FR before (remembered here). Tourists can
    // switch anytime with the CA/EN/FR control.
    var saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    return "ca";
  }

  // Wire up the switcher
  document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  applyLang(initialLang());
})();
