export type Locale = "bg" | "en";

export const locales: Locale[] = ["bg", "en"];
export const defaultLocale: Locale = "bg";
export const LOCALE_COOKIE = "pb-locale";

/** Replace when she shares a specific event-type link if needed */
export const BOOKING_URL = "https://calendly.com/hello-polinabilokonna/meet-with-me";
export const BOOKING_URL_PLACEHOLDER = "https://calendly.com/";

export type Dictionary = {
  site: {
    name: string;
    nameDisplay: string;
    nameShort: string;
    shortRole: string;
    role: string;
    tagline: string;
    description: string;
    url: string;
    email: string;
    phone: string;
    phoneHref: string;
    address: string;
    location: string;
  };
  nav: { href: string; label: string; external?: boolean }[];
  footer: {
    navHeading: string;
    inviteHeading: string;
    inviteCta: string;
    socialHeading: string;
    nav: { href: string; label: string }[];
  };
  ui: {
    openMenu: string;
    closeMenu: string;
    langAria: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    notFoundTitle: string;
    notFoundLead: string;
    notFoundCta: string;
  };
  socials: {
    name: string;
    href: string;
    handle: string;
  }[];
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroTitleAccent: string;
    heroLead: string;
    ctaPrimary: { href: string; label: string };
    ctaSecondary: { href: string; label: string };
    heroImage: string;
    heroAlt: string;
    approachEyebrow: string;
    approachTitle: string;
    approachBody: string;
    approachNote: string;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesCta: string;
    beliefEyebrow: string;
    beliefQuote: string;
    yalomQuote: string;
    yalomCite: string;
  };
  services: {
    id: string;
    number: string;
    title: string;
    description: string;
    details: string[];
    forWhom: string;
    focus: string[];
  }[];
  servicesPage: {
    title: string;
    lead: string;
    expand: string;
    collapse: string;
    forWhomLabel: string;
    focusLabel: string;
    bookCta: string;
  };
  about: {
    title: string;
    lead: string;
    body: string[];
    experienceTitle: string;
    experienceIntro: string;
    experienceItems: string[];
    experienceClosing: string;
    motherhoodTitle: string;
    motherhoodBody: string;
    image: string;
    imageAlt: string;
  };
  bookingPage: {
    title: string;
    lead: string;
    body: string;
    cta: string;
    href: string;
    note: string;
  };
  selfHelpPage: {
    title: string;
    lead: string;
    empty: string;
    items: {
      id: string;
      title: string;
      excerpt: string;
    }[];
  };
  contactPage: {
    title: string;
    lead: string;
    introNote: string;
    introDuration: string;
    introCta: string;
    socialHeading: string;
    form: {
      name: string;
      email: string;
      company: string;
      companyOptional: string;
      inquiryType: string;
      message: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
      errors: {
        name: string;
        email: string;
        message: string;
      };
      inquiryOptions: {
        value: "consultation" | "mentorship" | "coaching" | "other";
        label: string;
      }[];
    };
  };
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/polinabilokonna.psychology/",
    handle: "@polinabilokonna.psychology",
  },
] as const;

const siteMeta = {
  name: "Polina Bilokonna Abbas",
  url: "https://polinabilokonna.com",
  email: "hello@polinabilokonna.com",
  phone: "0884 408 890",
  phoneHref: "tel:+359884408890",
} as const;

export const dictionaries: Record<Locale, Dictionary> = {
  bg: {
    site: {
      ...siteMeta,
      nameDisplay: "Полина Билоконна-Аббас",
      nameShort: "Полина Билоконна",
      shortRole: "Психолог",
      role: "Психолог и психотерапевт в обучение по когнитивно-поведенческа психотерапия",
      tagline: "Терапията не е техника. Тя е среща.",
      description:
        "Полина Билоконна-Аббас - психолог и психотерапевт в обучение. Психологическа консултация, менторство и коучинг.",
      address: "ул. Царибродска 119, София",
      location: "София",
    },
    nav: [
      { href: "/", label: "Начало" },
      { href: "/about", label: "За мен" },
      { href: "/services", label: "Услуги" },
      { href: "/self-help", label: "Статии" },
      { href: "/book", label: "Запазване" },
      { href: "/contact", label: "Контакт" },
    ],
    footer: {
      navHeading: "Навигация",
      inviteHeading: "Покана",
      inviteCta: "Запазете консултация",
      socialHeading: "Социални мрежи",
      nav: [
        { href: "/about", label: "За мен" },
        { href: "/services", label: "Услуги" },
        { href: "/book", label: "Запази час" },
        { href: "/contact", label: "Контакт" },
      ],
    },
    ui: {
      openMenu: "Отвори менюто",
      closeMenu: "Затвори менюто",
      langAria: "Избери език",
      emailLabel: "Имейл",
      phoneLabel: "Телефон",
      addressLabel: "Кабинет",
      notFoundTitle: "Страницата не е намерена",
      notFoundLead: "Линкът може да е остарял или страницата да е премахната.",
      notFoundCta: "Към началото",
    },
    socials: [...socialLinks],
    home: {
      heroEyebrow: "Среща със себе си",
      heroTitle: "Терапията не е техника.",
      heroTitleAccent: "Тя е среща.",
      heroLead:
        "Аз съм Полина Билоконна-Аббас - психолог и психотерапевт в обучение по когнитивно-поведенческа психотерапия. Когато влизате в сесия с мен, не срещате „роля“, а човек.",
      ctaPrimary: { href: "/book", label: "Запази консултация" },
      ctaSecondary: { href: "/about", label: "Прочети повече за мен" },
      heroImage: "/images/portrait-carafe.jpg",
      heroAlt: "Полина Билоконна-Аббас с кана вода",
      approachEyebrow: "Подходът",
      approachTitle: "Няма универсален подход.",
      approachBody:
        "Всяка среща е различна. Няма готови формули. В процеса заедно подбирам онези техники и подходи, които най-точно отговарят на вас, на вашата личност и на вашата заявка.",
      approachNote:
        "Понякога това е психологическа консултация. Понякога - менторство. Понякога - коучинг. Винаги - среща между двама души.",
      servicesEyebrow: "Какво предлагам",
      servicesTitle: "Три формата, една среща.",
      servicesCta: "Виж всички услуги",
      beliefEyebrow: "Вярвам",
      beliefQuote:
        "Провалът и успехът имат еднаква стойност - и в двата случая печелим най-ценното: опит.",
      yalomQuote:
        "Терапевтът работи със себе си като най-важния инструмент.",
      yalomCite: "Ирвин Ялом",
    },
    services: [
      {
        id: "consultation",
        number: "01",
        title: "Психологическа консултация",
        description:
          "Безопасно пространство за изследване на това, което носите. Заедно търсим яснота и нови гледни точки.",
        details: [
          "В консултацията работим с това, което е живо за вас в момента - тревожност, прегаряне, отношения, самооценка, преход или усещане, че „нещо не е наред“.",
          "Не следвам готов сценарий. Внимавам към вашата история, темпо и заявка, и подбирам подходи, които имат смисъл именно за вас.",
          "Целта не е „да ви оправя“, а да създадем пространство, в което да се чуете по-ясно - и оттам да направите следващата стъпка.",
        ],
        forWhom:
          "За хора, които искат подкрепа в труден период или по-дълбоко разбиране на себе си.",
        focus: [
          "Емоционална яснота",
          "Тревожност и напрежение",
          "Отношения и граници",
          "Самооценка и смисъл",
        ],
      },
      {
        id: "mentorship",
        number: "02",
        title: "Менторство",
        description:
          "За хора в предприемачески или творчески път, които искат да съчетаят вътрешна среда с външни цели.",
        details: [
          "Менторството е за моменти, в които външният път расте по-бързо от вътрешния капацитет - или обратното.",
          "Нося и психологическа перспектива, и опит от близо 15 години предприемачество. Заедно гледаме решенията, ритъма и цената, която плащате за успеха.",
          "Работим за устойчивост: как да вървите напред, без да губите себе си по пътя.",
        ],
        forWhom:
          "За предприемачи, творци и професионалисти в преход, растеж или претоварване.",
        focus: [
          "Вътрешна опора при растеж",
          "Решения под напрежение",
          "Баланс между амбиция и грижа",
          "Яснота за следващата стъпка",
        ],
      },
      {
        id: "coaching",
        number: "03",
        title: "Коучинг",
        description:
          "Целенасочена работа към конкретни промени - в навиците, общуването, отношенията.",
        details: [
          "Коучингът е по-структуриран и насочен към промяна, която можете да усетите в ежедневието.",
          "Заедно уточняваме цел, пречките пред нея и малки, реалистични стъпки. Следим какво работи - и какво не - без шум и самокритика.",
          "Подходящ е, когато знаете посоката, но ви трябва опора, ритъм и отчетност, за да я следвате.",
        ],
        forWhom:
          "За хора с конкретна заявка за промяна и готовност да работят между срещите.",
        focus: [
          "Навици и ритъм",
          "Общуване",
          "Отношения",
          "Лични и професионални цели",
        ],
      },
    ],
    servicesPage: {
      title: "Услуги",
      lead: "Три формата на работа - една среща между двама души. Изберете картата, за да прочетете повече.",
      expand: "Повече",
      collapse: "По-малко",
      forWhomLabel: "За кого е",
      focusLabel: "Върху какво работим",
      bookCta: "Запази консултация",
    },
    about: {
      title: "За мен",
      lead: "Коя съм аз - и опитът, който нося със себе си.",
      body: [
        "Аз съм Полина Билоконна-Аббас - психолог и психотерапевт в обучение по когнитивно-поведенческа психотерапия.",
        "Когато влизате в сесия с мен, не срещате „роля“, а човек.",
      ],
      experienceTitle: "Опитът, който нося със себе си",
      experienceIntro:
        "Освен психологическото си образование, нося със себе си и близо 15 години предприемачески опит:",
      experienceItems: [
        "създаване и развитие на собствен бранд козметика за коса",
        "издаване на дневник за саморефлексия",
        "управление на онлайн магазин за аксесоари и декор",
        "работа като маркетинг мениджър и фрийланс специалист",
      ],
      experienceClosing:
        "Този път ме е научил на нещо много важно: провалът и успехът имат еднаква стойност - и в двата случая печелим най-ценното: опит.",
      motherhoodTitle: "Още една важна част от мен",
      motherhoodBody:
        "Аз съм и майка. Знам колко е важно да пазим нервната си система здрава, защото именно тя създава средата, в която растат нашите деца. Нашето вътрешно състояние се превръща в техен фундамент.",
      image: "/images/portrait-laptop.jpg",
      imageAlt: "Полина Билоконна-Аббас",
    },
    bookingPage: {
      title: "Запази час",
      lead: "Първата стъпка е срещата.",
      body: "Изберете удобен час през календара за записване. Ако предпочитате, можете и да ми пишете директно.",
      cta: "Отвори календара",
      href: BOOKING_URL,
      note: "Линкът за записване ще бъде активен скоро. До тогава пишете на имейла по-долу.",
    },
    selfHelpPage: {
      title: "Статии",
      lead: "Кратки материали и опори за между сесиите - с внимание и без шум.",
      empty: "Скоро тук ще се появят първите материали.",
      items: [
        {
          id: "nervous-system",
          title: "Нервната система като фундамент",
          excerpt:
            "Защо вътрешното състояние има значение - за нас и за хората, които обичаме.",
        },
        {
          id: "experience",
          title: "Опитът от провала и успеха",
          excerpt:
            "Как да гледаме на двата полюса като на една и съща учебна пътека.",
        },
      ],
    },
    contactPage: {
      title: "Контакт",
      lead: "За запитвания около консултация, менторство или коучинг. Пишете свободно - отговарям лично.",
      introNote:
        "Встъпителният разговор (15 мин) е безплатен, неформален и напълно без ангажимент.",
      introDuration: "15 мин",
      introCta: "Първи разговор",
      socialHeading: "Социални мрежи",
      form: {
        name: "Име",
        email: "Имейл",
        company: "Организация",
        companyOptional: "по желание",
        inquiryType: "Тип запитване",
        message: "Съобщение",
        submit: "Изпрати",
        submitting: "Изпращане…",
        success: "Благодаря! Съобщението е изпратено.",
        error: "Нещо се обърка. Опитайте отново или пишете директно по имейл:",
        errors: {
          name: "Моля, въведете име",
          email: "Невалиден имейл",
          message: "Съобщението е твърде кратко",
        },
        inquiryOptions: [
          { value: "consultation", label: "Консултация" },
          { value: "mentorship", label: "Менторство" },
          { value: "coaching", label: "Коучинг" },
          { value: "other", label: "Друго" },
        ],
      },
    },
  },
  en: {
    site: {
      ...siteMeta,
      nameDisplay: "Polina Bilokonna-Abbas",
      nameShort: "Polina Bilokonna",
      shortRole: "Psychologist",
      role: "Psychologist and psychotherapist in training in cognitive behavioural therapy",
      tagline: "Therapy is not a technique. It is an encounter.",
      description:
        "Polina Bilokonna-Abbas - psychologist and psychotherapist in training. Psychological counselling, mentorship and coaching.",
      address: "119 Tsaribrodska St, Sofia",
      location: "Sofia",
    },
    nav: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/self-help", label: "Articles" },
      { href: "/book", label: "Booking" },
      { href: "/contact", label: "Contact" },
    ],
    footer: {
      navHeading: "Navigation",
      inviteHeading: "Invitation",
      inviteCta: "Book a consultation",
      socialHeading: "Social",
      nav: [
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/book", label: "Book a session" },
        { href: "/contact", label: "Contact" },
      ],
    },
    ui: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      langAria: "Choose language",
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressLabel: "Office",
      notFoundTitle: "Page not found",
      notFoundLead: "The link may be outdated, or the page was removed.",
      notFoundCta: "Back home",
    },
    socials: [...socialLinks],
    home: {
      heroEyebrow: "Issue 01 · A meeting with yourself",
      heroTitle: "Therapy is not a technique.",
      heroTitleAccent: "It is an encounter.",
      heroLead:
        "I’m Polina Bilokonna-Abbas - a psychologist and psychotherapist in training in cognitive behavioural therapy. When you enter a session with me, you don’t meet a “role” - you meet a person.",
      ctaPrimary: { href: "/book", label: "Book a consultation" },
      ctaSecondary: { href: "/about", label: "Read more about me" },
      heroImage: "/images/portrait-carafe.jpg",
      heroAlt: "Polina Bilokonna-Abbas with a water carafe",
      approachEyebrow: "The approach",
      approachTitle: "There is no universal method.",
      approachBody:
        "Every encounter is different. There are no ready-made formulas. Together we choose the techniques and approaches that most precisely meet you, your personality and your request.",
      approachNote:
        "Sometimes that is psychological counselling. Sometimes - mentorship. Sometimes - coaching. Always - a meeting between two people.",
      servicesEyebrow: "What I offer",
      servicesTitle: "Three formats, one encounter.",
      servicesCta: "See all services",
      beliefEyebrow: "I believe",
      beliefQuote:
        "Failure and success have equal value - in both cases we gain the most precious thing: experience.",
      yalomQuote:
        "The therapist works with the self as the most important instrument.",
      yalomCite: "Irvin Yalom",
    },
    services: [
      {
        id: "consultation",
        number: "01",
        title: "Psychological counselling",
        description:
          "A safe space to explore what you carry. Together we look for clarity and new perspectives.",
        details: [
          "In counselling we work with what is alive for you right now - anxiety, burnout, relationships, self-worth, transition, or the sense that something is off.",
          "I don’t follow a fixed script. I pay attention to your story, pace and request, and choose approaches that make sense for you.",
          "The aim is not to “fix” you, but to create a space where you can hear yourself more clearly - and from there take the next step.",
        ],
        forWhom:
          "For people seeking support in a hard season, or a deeper understanding of themselves.",
        focus: [
          "Emotional clarity",
          "Anxiety and tension",
          "Relationships and boundaries",
          "Self-worth and meaning",
        ],
      },
      {
        id: "mentorship",
        number: "02",
        title: "Mentorship",
        description:
          "For people on an entrepreneurial or creative path who want to align their inner world with outer goals.",
        details: [
          "Mentorship is for moments when the outer path grows faster than your inner capacity - or the other way around.",
          "I bring both a psychological lens and nearly 15 years of entrepreneurial experience. Together we look at decisions, rhythm, and the cost you pay for success.",
          "We work toward sustainability: how to move forward without losing yourself along the way.",
        ],
        forWhom:
          "For founders, creatives and professionals in transition, growth or overload.",
        focus: [
          "Inner support during growth",
          "Decisions under pressure",
          "Balancing ambition and care",
          "Clarity for the next step",
        ],
      },
      {
        id: "coaching",
        number: "03",
        title: "Coaching",
        description:
          "Focused work toward concrete change - in habits, communication and relationships.",
        details: [
          "Coaching is more structured and oriented toward change you can feel in daily life.",
          "Together we clarify a goal, the obstacles in front of it, and small realistic steps. We notice what works - and what doesn’t - without noise or self-criticism.",
          "It suits you when you know the direction, but need support, rhythm and accountability to follow it.",
        ],
        forWhom:
          "For people with a concrete request for change and readiness to work between sessions.",
        focus: [
          "Habits and rhythm",
          "Communication",
          "Relationships",
          "Personal and professional goals",
        ],
      },
    ],
    servicesPage: {
      title: "Services",
      lead: "Three formats of work - one encounter between two people. Open a card to read more.",
      expand: "More",
      collapse: "Less",
      forWhomLabel: "Who it’s for",
      focusLabel: "What we work on",
      bookCta: "Book a consultation",
    },
    about: {
      title: "About",
      lead: "Who I am - and the experience I bring with me.",
      body: [
        "I’m Polina Bilokonna-Abbas - a psychologist and psychotherapist in training in cognitive behavioural therapy.",
        "When you enter a session with me, you don’t meet a “role” - you meet a person.",
      ],
      experienceTitle: "The experience I carry",
      experienceIntro:
        "Alongside my psychological education, I bring nearly 15 years of entrepreneurial experience:",
      experienceItems: [
        "building and growing my own haircare brand",
        "publishing a journal for self-reflection",
        "running an online shop for accessories and décor",
        "working as a marketing manager and freelance specialist",
      ],
      experienceClosing:
        "That path taught me something essential: failure and success have equal value - in both cases we gain the most precious thing: experience.",
      motherhoodTitle: "Another important part of me",
      motherhoodBody:
        "I am also a mother. I know how important it is to keep our nervous system well, because it creates the environment in which our children grow. Our inner state becomes their foundation.",
      image: "/images/portrait-laptop.jpg",
      imageAlt: "Polina Bilokonna-Abbas",
    },
    bookingPage: {
      title: "Book a session",
      lead: "The first step is the encounter.",
      body: "Choose a time that works for you through the booking calendar. Or write to me directly if you prefer.",
      cta: "Open the calendar",
      href: BOOKING_URL,
      note: "The booking link will be active soon. Until then, please email me below.",
    },
    selfHelpPage: {
      title: "Articles",
      lead: "Short notes and supports between sessions - with care, without noise.",
      empty: "The first materials will appear here soon.",
      items: [
        {
          id: "nervous-system",
          title: "The nervous system as foundation",
          excerpt:
            "Why inner state matters - for us and for the people we love.",
        },
        {
          id: "experience",
          title: "The experience of failure and success",
          excerpt:
            "How to see both poles as one continuous path of learning.",
        },
      ],
    },
    contactPage: {
      title: "Contact",
      lead: "For questions about counselling, mentorship or coaching. Write freely - I reply personally.",
      introNote:
        "The introductory conversation (15 min) is free, informal and completely without obligation.",
      introDuration: "15 min",
      introCta: "First conversation",
      socialHeading: "Social",
      form: {
        name: "Name",
        email: "Email",
        company: "Organization",
        companyOptional: "optional",
        inquiryType: "Inquiry type",
        message: "Message",
        submit: "Send",
        submitting: "Sending…",
        success: "Thank you! Your message has been sent.",
        error: "Something went wrong. Try again or email me directly:",
        errors: {
          name: "Please enter your name",
          email: "Invalid email",
          message: "Message is too short",
        },
        inquiryOptions: [
          { value: "consultation", label: "Consultation" },
          { value: "mentorship", label: "Mentorship" },
          { value: "coaching", label: "Coaching" },
          { value: "other", label: "Other" },
        ],
      },
    },
  },
};

export const site = dictionaries.bg.site;
export const nav = dictionaries.bg.nav;
export const socials = dictionaries.bg.socials;
export const home = dictionaries.bg.home;
export const about = dictionaries.bg.about;
export const contactPage = dictionaries.bg.contactPage;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.bg;
}
