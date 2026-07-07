/* ============================================================
   PRACTICAL AI ACADEMY - SITE CONTENT
   ------------------------------------------------------------
   This is YOUR editing file. The homepage reads all its lists
   from here. You never need to touch the design files.

   RULES (very important):
   1. Every text goes inside 'single quotes'.
   2. Every item ends with a comma.
   3. If your text itself has a single quote ('), write \' instead.
   4. Save the file, refresh the page, done.

   Open "How To Update.dc.html" for step-by-step examples.
   ============================================================ */

window.PA_CONTENT = {

  /* ----------------------------------------------------------
     REGISTRATION SETTINGS  (the most important switch!)
     registrationOpen: true  -> register buttons work everywhere
     registrationOpen: false -> buttons become "closed" + a red
                                "NEXT BATCH STARTS ON" stamp
                                appears across the site
     nextBatchDate: written exactly how visitors should read it.
     registrationOpensOn: the day/time YOU will open registration
                          (Sri Lanka time, format 'YYYY-MM-DD HH:MM').
                          While registration is closed, a live countdown
                          to this moment shows under the navigation bar.
     registrationClosesOn: the day/time registration ENDS.
                          While registration is open, the bar counts
                          down to this moment; after it passes, the bar
                          says registration has ended.
     The countdown bar appears only on the Home, What You Will
     Learn, and Application Guide pages.
     ---------------------------------------------------------- */
  settings: {
    registrationOpen: true,
    nextBatchDate: '2026 ජූලි 25',
    registrationOpensOn: '2026-07-07 09:00',
    registrationClosesOn: '2026-07-21 23:59',
    coursePrice: 9900,
    courseValue: 45000,
  },

  /* ----------------------------------------------------------
     WHAT IS INCLUDED (the checklist cards)
     To add a new card: copy any line, paste it below, change
     the text. To remove: delete the whole line.
     ---------------------------------------------------------- */
  included: [
    'ඕනෑම වෙලාවක නැවත බලන්න පුළුවන් Live Recordings',
    'හැම පන්තියකටම පස්සේ දෙන කෙටි, පැහැදිලි Notes',
    'කරුණු මතක හිටින ලස්සන Infographics',
    'ඔයාට ඇත්තටම ප්‍රයෝජනවත් වෙන Prompt Engineering Cheat Sheet එක',
    'පන්ති වෙලාවෙන් පිටත ප්‍රශ්න අහන්න Private WhatsApp Group එක',
    'LinkedIn එකට දාන්න පුළුවන් Certificate of Completion එක',
    'Tools අලුත් වෙද්දී ඒ ගැන දෙන Free Updates',
  ],

  /* ----------------------------------------------------------
     THE 10 WEEK CURRICULUM CARDS
     Each card = { n: 'number', title: 'heading', line: 'small text' },
     ---------------------------------------------------------- */
  weeks: [
    { n: '01', title: 'Perplexity AI සහ Smart Research', line: 'Find accurate answers fast and stop guessing where to start.' },
    { n: '02', title: 'Google Gemini මූලික කරුණු', line: 'Get comfortable with one of the most powerful everyday AI tools.' },
    { n: '03', title: 'ඇත්තටම වැඩ කරන්න අවශ්‍ය වෙන Prompt Engineering', line: 'Learn how to ask so the AI gives you exactly what you need.' },
    { n: '04', title: 'Gemini Gems වලින් ඔයාගේම Assistant ලා හදාගැනීම', line: 'Create little helpers that know your work and your style.' },
    { n: '05', title: 'ඉගෙනීමට සහ රැකියාවට NotebookLM', line: 'Turn messy documents into clear, searchable knowledge.' },
    { n: '06', title: 'Notes වලින් Slides සහ Audio හදාගැනීම', line: 'Go from rough notes to polished presentations in minutes.' },
    { n: '07', title: 'AI හරහා Images නිර්මාණය', line: 'Make original visuals for work, study and social media.' },
    { n: '08', title: 'AI හරහා Videos නිර්මාණය', line: 'Produce short, engaging videos without any special skills.' },
    { n: '09', title: 'ඔයාගේම Personal AI System එකක් සැකසීම', line: 'Connect the tools into one workflow that fits your life.' },
    { n: '10', title: 'Live ප්‍රායෝගික වැඩ වලට ඉගෙන ගත් දේ යොදා ගනීම.', line: 'Put it all together, then earn your Certificate of Completion.' },
  ],

  /* ----------------------------------------------------------
     PRICING CARD CHECKLIST (inside the Rs. 9,900 card)
     ---------------------------------------------------------- */
  pricingIncludes: [
    'All 10 live sessions on Zoom',
    'Every class recording, yours to keep',
    'Notes, infographics and the prompt cheat sheet',
    'Private WhatsApp community access',
    'Certificate of Completion',
    'Full two week refund guarantee',
  ],

  /* ----------------------------------------------------------
     TESTIMONIALS
     initial = the single letter shown in the circle.
     Add as many reviews as you like — the page shows the
     first 6 and a "Show all reviews" button reveals the rest,
     so put your best 6 at the top of this list.
     ---------------------------------------------------------- */
  testimonials: [
    { initial: 'N', name: 'Nadeesha Perera', role: 'School Teacher', city: 'Kandy', quote: 'I used to feel lost with technology. Now I plan a whole week of lessons in minutes and my students love the difference.' },
    { initial: 'K', name: 'Kasun Fernando', role: 'Marketing Executive', city: 'Colombo', quote: 'The classes are simple and practical. I use these tools at work every single day now, and my manager has noticed.' },
    { initial: 'D', name: 'Dilani Jayawardena', role: 'University Student', city: 'Galle', quote: 'Everything is explained in Sinhala, step by step. For the first time, AI actually makes sense to me.' },
    { initial: 'R', name: 'Roshan Silva', role: 'Small Business Owner', city: 'Negombo', quote: 'I save at least two hours a day on emails and content. This course paid for itself in the first week.' },
    { initial: 'I', name: 'Ishara Bandara', role: 'Government Officer', city: 'Kurunegala', quote: 'Friendly, patient teaching with real examples. I was nervous at first, but the community keeps me going.' },
    { initial: 'T', name: 'Tharindu Wickramasinghe', role: 'Freelancer', city: 'Matara', quote: 'Worth every rupee. The notes and recordings mean I never miss anything, even on my busiest days.' },
    { initial: 'S', name: 'Sanduni Rathnayake', role: 'Bank Officer', city: 'Anuradhapura', quote: 'I write reports and customer letters in half the time now. My colleagues keep asking me how I do it.' },
    { initial: 'C', name: 'Chamara Gunasekara', role: 'Shop Owner', city: 'Ratnapura', quote: 'I never thought AI was for someone like me. Now I make all my product posts and price lists with it.' },
  ],

  /* ----------------------------------------------------------
     FAQ (question + answer)
     ---------------------------------------------------------- */
  faqs: [
    { q: 'මට කලින් පළපුරුද්දක් තියෙන්න ඕනෙද?', a: 'කිසිම අවශ්‍යතාවයක් නෑ. මේ Course එක හදලා තියෙන්නේ මුල ඉඳන්ම ඉගෙන ගන්න අයටයි. අපි හැමදේම මූලිකම තැන ඉඳන්, පියවරෙන් පියවර ඉස්සරහට අරන් යනවා.' },
    { q: 'මට Live පන්තියක් මඟහැරුණොත් මොකද කරන්නේ?', a: 'කිසිම ප්‍රශ්නයක් නෑ. හැම Session එකකම Recording එකක් ඔයාට දෙනවා. ඒ නිසා ඔයාට පහසු වෙලාවක ඒක බලලා අතපසු වුණු දේවල් අල්ලගන්න පුළුවන්.' },
    { q: 'Course එක උගන්වන්නේ මොන භාෂාවෙන්ද?', a: 'සම්පූර්ණ Course එකම උගන්වන්නේ ඉතා පැහැදිලි, සරල සිංහල භාෂාවෙන්. ඒ නිසා ඔයාට කිසිම දෙයක් මඟහැරෙන්නේ නෑ.' },
    { q: 'එක පන්තියකට කොච්චර වෙලාවක් යනවද?', a: 'හැම Live Session එකක්ම පැය දෙකක් විතර තියෙනවා. ඒකෙදි ඔයාට ප්‍රශ්න අහන්න වගේම ප්‍රායෝගිකව වැඩ කරලා බලන්නත් ඕන තරම් වෙලාව තියෙනවා.' },
    { q: 'මේකට සම්බන්ධ වෙන්න මට මොනවද ඕනේ?', a: 'Internet පහසුකම තියෙන Smart Phone එකක් හරි Laptop එකක් හරි විතරයි. අනිත් හැමදේම පන්තිය ඇතුළෙදි ඔයාට කියලා දෙනවා.' },
    { q: 'මම ගෙවීම් කරන්නේ කොහොමද?', a: 'ඔයාට Card එකෙන් හරි Bank Transfer එකකින් හරි ලේසියෙන්ම ගෙවන්න පුළුවන්. ලියාපදිංචි වුණ ගමන් ඒ ගැන සම්පූර්ණ විස්තර ඔයාට එවනවා.' },
    { q: 'ඇත්තටම සල්ලි ආපසු දෙන වගකීමක් තියෙනවද?', a: 'ඔව්. මේ Course එක ඔයාට හරියන්නේ නෑ කියලා හිතුණොත්, මුල් සති දෙක ඇතුළත ඔයාට පුළුවන් සම්පූර්ණ මුදලම ආපසු ඉල්ලන්න. අපි කිසිම ප්‍රශ්නයක් අහන්නේ නෑ.' },
    { q: 'AI Tools පාවිච්චි කරන්න අමතරව සල්ලි ගෙවන්න වෙයිද?', a: 'අපි මේකට පාවිච්චි කරන්නේ නොමිලේ පාවිච්චි කරන්න පුළුවන් (Free versions) Tools. ඒ නිසා ඔයාට අමතර වියදමක් යන්නේ නෑ. සල්ලි ගෙවලා පාවිච්චි කරන Tools තිබුණත්, ඒවා ඔයාගේ කැමැත්ත මත විතරක් පාවිච්චි කරන්න පුළුවන් දේවල්.' },
  ],

};


/* ============================================================
   LIVE CONTENT (managed from the AIYUBOVAN admin panel)
   ------------------------------------------------------------
   The values above are instant fallbacks. A moment after the
   page loads, fresh content is pulled from the database and the
   page updates itself. If the database is unreachable, the
   fallbacks above are shown, so the site never breaks.
   ============================================================ */
(function () {
  var URL = 'https://tueaxfwuvugekxvlbnuf.supabase.co';
  var KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1ZWF4Znd1dnVnZWt4dmxibnVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0MzA0ODgsImV4cCI6MjA5OTAwNjQ4OH0.e2x9IawWs5cMMhph2nkCOu5xliyC1jZYiS50FitK6R4';
  var H = { apikey: KEY, Authorization: 'Bearer ' + KEY };
  function get(path) {
    return fetch(URL + '/rest/v1/' + path, { headers: H }).then(function (r) {
      if (!r.ok) throw new Error('http ' + r.status);
      return r.json();
    });
  }
  Promise.all([
    get('site_settings?id=eq.1&limit=1'),
    get('weeks?select=n,title,line&order=sort.asc'),
    get('testimonials?select=initial,name,role,city,quote&order=sort.asc'),
    get('faqs?select=q,a&order=sort.asc')
  ]).then(function (res) {
    var st = res[0] && res[0][0];
    if (!st) return;
    var base = window.PA_CONTENT || {};
    window.PA_CONTENT = {
      settings: {
        registrationOpen: st.registration_open,
        nextBatchDate: st.next_batch_date,
        registrationOpensOn: st.registration_opens_on,
        registrationClosesOn: st.registration_closes_on,
        coursePrice: st.course_price,
        courseValue: st.course_value
      },
      weeks: (res[1] && res[1].length) ? res[1] : base.weeks,
      testimonials: (res[2] && res[2].length) ? res[2] : base.testimonials,
      faqs: (res[3] && res[3].length) ? res[3] : base.faqs,
      included: base.included,
      pricingIncludes: base.pricingIncludes
    };
  }).catch(function () { /* fallbacks above stay in place */ });
})();
