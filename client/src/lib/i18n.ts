import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      nav: {
        home: "Ana Sayfa",
        services: "Hizmetler",
        whyUs: "Neden Biz",
        packages: "Paketler",
        adsSystem: "ADS Sistemi",
        contact: "İletişim",
        getStarted: "HEMEN BAŞLA"
      },
      hero: {
        subtitle: "Yeni Nesil Denizcilik Bağlantısı",
        titleStart: "KÜRESEL",
        titleHighlight: "BAĞLANTI",
        titleEnd: "GÜVENDE.",
        description: "Dünyanın her yerinde denizcilik operasyonları için premium Starlink entegrasyonu ve gelişmiş Firewall hizmetleri.",
        ourServices: "HİZMETLERİMİZ",
        contactUs: "İLETİŞİM"
      },
      maritime: {
        badge: "Premium Maritime Çözüm",
        title: "Starlink Maritime",
        subtitle: "& Firewall Hizmeti",
        description: "Gemileriniz için yüksek hızlı, düşük gecikmeli uydu interneti. Entegre Firewall hizmetimiz ile siber güvenlik endişesi yaşamadan, denizlerin ortasında ofis konforunda bağlantı sağlayın.",
        feature1Title: "Kesintisiz Bağlantı",
        feature1Desc: "350 Mbps'e varan indirme hızları ile okyanus aşırı iletişim.",
        feature2Title: "Entegre Güvenlik",
        feature2Desc: "Gelişmiş firewall koruması ile ağınız her zaman güvende.",
        mapButton: "Starlink Haritası",
        activeCoverage: "Aktif Kapsama",
        globalNetwork: "Global Okyanus Ağı"
      },
      services: {
        title: "Hizmetlerimiz",
        subtitle: "Neden Adegloba Space?",
        globalCoverage: "Küresel Kapsam",
        globalCoverageDesc: "Dünyanın her yerinde yüksek hızlı internet.",
        fastestConn: "En Hızlı Bağlantı",
        fastestConnDesc: "En hızlı uydu tabanlı denizcilik internet hizmeti.",
        reliability: "Güvenilirlik",
        reliabilityDesc: "Küresel kapsama alanıyla kesintisiz internet.",
        budgetControl: "Bütçe Kontrolü",
        budgetControlDesc: "Düşük maliyetli anten, 1 TB'ye kadar paket seçeneği.",
        easyInstall: "Kolay Kurulum & Sevkiyat",
        easyInstallDesc: "En yeni nesil anten teknolojisi, hafif kompakt anten.",
        paymentPlans: "Seçilebilir Ödeme Planları",
        paymentPlansDesc: "Her türlü ihtiyacı karşılayacak çeşitli planlar."
      },
      packages: {
        title: "Esnek Planlar",
        subtitle: "Veri Paketleri",
        description: "İhtiyacınıza uygun paketi seçin. Tüm paketlerde yüksek hız ve düşük gecikme garantisi.",
        downloadSpeed: "Download Hızı",
        uploadSpeed: "Upload Hızı",
        popular: "Popüler",
        maritimeInternet: "Starlink Maritime\nYüksek Hızlı İnternet",
        secureConn: "Güvenli Bağlantı",
        globalRoaming: "Global Roaming",
        applyNow: "Hemen Başvur",
        features: {
           basic: "Temel Kullanım",
           email: "E-posta & Mesajlaşma",
           standard: "Standart Kullanım",
           web: "Web Gezinme",
           voice: "Sesli Görüşme",
           active: "Aktif Kullanım",
           videoConf: "Video Konferans",
           hdVideo: "HD Video Akışı",
           heavy: "Yoğun Kullanım",
           k4Video: "4K Video Akışı",
           transfer: "Büyük Dosya Transferi",
           pro: "Profesyonel Kullanım",
           crew: "Tüm Mürettebat İçin",
           unlimited: "Sınırsız Olanaklar"
        }
      },
      app: {
        title: "ADS Otomasyon Sistemi",
        mainTitle: "Siz Uğraşmayın,\nSistem Yönetsin.",
        description: "Firma olarak operasyonel yükünüzü sıfıra indirin. Bizim geliştirdiğimiz %100 otomatik yazılım sayesinde, gemideki kullanıcılar herhangi bir onay sürecine takılmadan, kendi ihtiyaçlarına göre ek internet paketlerini anında satın alabilirler.",
        feature1Title: "Otomatik Satın Alma",
        feature1Desc: "Mürettebat, şirket onayına ihtiyaç duymadan uygulama üzerinden paket alabilir.",
        feature2Title: "Sıfır Operasyonel Yük",
        feature2Desc: "Firma yöneticilerinin araya girmesine gerek kalmadan sistem kendi kendine işler.",
        feature3Title: "Mobil & Masaüstü Erişim",
        feature3Desc: "Kullanıcı dostu arayüz ile gemideki herkes sisteme kolayca erişebilir.",
        desktop: "Masaüstü",
        mobile: "Mobil"
      },
      contact: {
        title: "Bize Ulaşın",
        subtitle: "İletişim Bilgileri",
        office: "Ofisimiz",
        email: "E-posta",
        phone: "Telefon",
        support: "Destek",
        supportDesc: "7/24 İzleme &\nTeknik Destek"
      },
      footer: {
        desc: "Denizcilik sektöründe kesintisiz iletişim ve siber güvenlik çözümleri. Dünyanın her noktasında yanınızdayız.",
        address: "Adres",
        email: "E-posta",
        phone: "Telefon",
        rights: "AdeGloba Tüm Hakları Saklıdır.",
        madeBy: "Bu Website TOOV tarafından hazırlanmıştır.",
        privacy: "Gizlilik Politikası",
        terms: "Kullanım Şartları"
      },
      modal: {
        title: "Teklif Alın",
        desc: "İhtiyaçlarınıza özel denizcilik çözümleri için formu doldurun.",
        company: "Firma İsmi",
        name: "Yetkili Kişi",
        email: "E-posta",
        phone: "Telefon",
        services: "İlgilendiğiniz Hizmetler",
        notes: "Ek Notlar",
        notesPlaceholder: "Varsa gemi sayısı, rota bilgisi veya özel talepleriniz...",
        submit: "Teklif İste",
        sending: "Gönderiliyor...",
        successTitle: "Teklif Talebiniz Alındı",
        successDesc: "En kısa sürede sizinle iletişime geçeceğiz.",
        serviceList: {
          data: "Starlink Veri Hizmeti",
          hardware: "Starlink Anten & Donanım",
          installation: "Uçtan Uca Kurulum Hizmeti",
          firewall: "Yönetilen Firewall & Güvenlik",
          support: "7/24 Teknik Destek & Bakım",
          network: "Gemi İçi Network Yönetimi"
        }
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        whyUs: "Why Us",
        packages: "Packages",
        adsSystem: "ADS System",
        contact: "Contact",
        getStarted: "GET STARTED"
      },
      hero: {
        subtitle: "Next Gen Maritime Connectivity",
        titleStart: "GLOBAL",
        titleHighlight: "CONNECTIVITY",
        titleEnd: "SECURED.",
        description: "Premium Starlink integration and advanced Firewall services for maritime operations worldwide.",
        ourServices: "OUR SERVICES",
        contactUs: "CONTACT US"
      },
      maritime: {
        badge: "Premium Maritime Solution",
        title: "Starlink Maritime",
        subtitle: "& Firewall Service",
        description: "High-speed, low-latency satellite internet for your vessels. With our integrated Firewall service, enjoy office-comfort connectivity in the middle of the ocean without cybersecurity concerns.",
        feature1Title: "Seamless Connectivity",
        feature1Desc: "Transoceanic communication with download speeds up to 350 Mbps.",
        feature2Title: "Integrated Security",
        feature2Desc: "Your network is always safe with advanced firewall protection.",
        mapButton: "Starlink Map",
        activeCoverage: "Active Coverage",
        globalNetwork: "Global Ocean Network"
      },
      services: {
        title: "Our Services",
        subtitle: "Why Adegloba Space?",
        globalCoverage: "Global Coverage",
        globalCoverageDesc: "High-speed internet anywhere in the world.",
        fastestConn: "Fastest Connection",
        fastestConnDesc: "Fastest satellite-based maritime internet service.",
        reliability: "Reliability",
        reliabilityDesc: "Uninterrupted internet with global coverage area.",
        budgetControl: "Budget Control",
        budgetControlDesc: "Low-cost antenna, package options up to 1 TB.",
        easyInstall: "Easy Installation & Shipping",
        easyInstallDesc: "Latest generation antenna technology, lightweight compact antenna.",
        paymentPlans: "Flexible Payment Plans",
        paymentPlansDesc: "Various plans to meet every need."
      },
      packages: {
        title: "Flexible Plans",
        subtitle: "Data Packages",
        description: "Choose the package that suits your needs. High speed and low latency guaranteed in all packages.",
        downloadSpeed: "Download Speed",
        uploadSpeed: "Upload Speed",
        popular: "Popular",
        maritimeInternet: "Starlink Maritime\nHigh Speed Internet",
        secureConn: "Secure Connection",
        globalRoaming: "Global Roaming",
        applyNow: "Apply Now",
        features: {
           basic: "Basic Usage",
           email: "Email & Messaging",
           standard: "Standard Usage",
           web: "Web Browsing",
           voice: "Voice Call",
           active: "Active Usage",
           videoConf: "Video Conference",
           hdVideo: "HD Video Streaming",
           heavy: "Heavy Usage",
           k4Video: "4K Video Streaming",
           transfer: "Large File Transfer",
           pro: "Professional Usage",
           crew: "For Entire Crew",
           unlimited: "Unlimited Possibilities"
        }
      },
      app: {
        title: "ADS Automation System",
        mainTitle: "Don't Worry,\nLet System Manage.",
        description: "Minimize your operational load as a company. Thanks to our 100% automated software, users on board can instantly purchase additional internet packages according to their needs without getting stuck in any approval process.",
        feature1Title: "Automated Purchase",
        feature1Desc: "Crew can buy packages via the app without company approval.",
        feature2Title: "Zero Operational Load",
        feature2Desc: "The system works by itself without the need for company managers to intervene.",
        feature3Title: "Mobile & Desktop Access",
        feature3Desc: "Everyone on board can easily access the system with a user-friendly interface.",
        desktop: "Desktop",
        mobile: "Mobile"
      },
      contact: {
        title: "Contact Us",
        subtitle: "Contact Information",
        office: "Our Office",
        email: "Email",
        phone: "Phone",
        support: "Support",
        supportDesc: "24/7 Monitoring &\nTechnical Support"
      },
      footer: {
        desc: "Uninterrupted communication and cybersecurity solutions in the maritime sector. We are with you all over the world.",
        address: "Address",
        email: "Email",
        phone: "Phone",
        rights: "AdeGloba All Rights Reserved.",
        madeBy: "This Website was prepared by TOOV.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      },
      modal: {
        title: "Get a Quote",
        desc: "Fill out the form for maritime solutions specific to your needs.",
        company: "Company Name",
        name: "Authorized Person",
        email: "Email",
        phone: "Phone",
        services: "Interested Services",
        notes: "Additional Notes",
        notesPlaceholder: "Number of vessels, route information or special requests...",
        submit: "Request Quote",
        sending: "Sending...",
        successTitle: "Quote Request Received",
        successDesc: "We will contact you as soon as possible.",
        serviceList: {
          data: "Starlink Data Service",
          hardware: "Starlink Antenna & Hardware",
          installation: "End-to-End Installation Service",
          firewall: "Managed Firewall & Security",
          support: "24/7 Technical Support & Maintenance",
          network: "Onboard Network Management"
        }
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        services: "Услуги",
        whyUs: "Почему Мы",
        packages: "Пакеты",
        adsSystem: "Система ADS",
        contact: "Контакты",
        getStarted: "НАЧАТЬ"
      },
      hero: {
        subtitle: "Связь Нового Поколения",
        titleStart: "ГЛОБАЛЬНАЯ",
        titleHighlight: "СВЯЗЬ",
        titleEnd: "ЗАЩИЩЕНА.",
        description: "Премиальная интеграция Starlink и передовые услуги Firewall для морских операций по всему миру.",
        ourServices: "НАШИ УСЛУГИ",
        contactUs: "СВЯЗАТЬСЯ"
      },
      maritime: {
        badge: "Премиум Морское Решение",
        title: "Starlink Maritime",
        subtitle: "& Услуги Firewall",
        description: "Высокоскоростной спутниковый интернет с низкой задержкой для ваших судов. С нашей интегрированной службой Firewall наслаждайтесь офисным комфортом связи посреди океана без забот о кибербезопасности.",
        feature1Title: "Бесперебойная Связь",
        feature1Desc: "Трансокеанская связь со скоростью загрузки до 350 Мбит/с.",
        feature2Title: "Интегрированная Безопасность",
        feature2Desc: "Ваша сеть всегда в безопасности благодаря передовой защите брандмауэра.",
        mapButton: "Карта Starlink",
        activeCoverage: "Активное Покрытие",
        globalNetwork: "Глобальная Океанская Сеть"
      },
      services: {
        title: "Наши Услуги",
        subtitle: "Почему Adegloba Space?",
        globalCoverage: "Глобальное Покрытие",
        globalCoverageDesc: "Высокоскоростной интернет в любой точке мира.",
        fastestConn: "Самое Быстрое Соединение",
        fastestConnDesc: "Самый быстрый спутниковый морской интернет-сервис.",
        reliability: "Надежность",
        reliabilityDesc: "Бесперебойный интернет с глобальной зоной покрытия.",
        budgetControl: "Контроль Бюджета",
        budgetControlDesc: "Недорогая антенна, варианты пакетов до 1 ТБ.",
        easyInstall: "Легкая Установка и Доставка",
        easyInstallDesc: "Антенная технология новейшего поколения, легкая компактная антенна.",
        paymentPlans: "Гибкие Планы Оплаты",
        paymentPlansDesc: "Различные планы для любых потребностей."
      },
      packages: {
        title: "Гибкие Планы",
        subtitle: "Пакеты Данных",
        description: "Выберите пакет, который подходит именно вам. Высокая скорость и низкая задержка гарантированы во всех пакетах.",
        downloadSpeed: "Скорость Скачивания",
        uploadSpeed: "Скорость Загрузки",
        popular: "Популярный",
        maritimeInternet: "Starlink Maritime\nВысокоскоростной Интернет",
        secureConn: "Безопасное Соединение",
        globalRoaming: "Глобальный Роуминг",
        applyNow: "Подать Заявку",
        features: {
           basic: "Базовое Использование",
           email: "Email и Сообщения",
           standard: "Стандартное Использование",
           web: "Веб-серфинг",
           voice: "Голосовые Вызовы",
           active: "Активное Использование",
           videoConf: "Видеоконференции",
           hdVideo: "HD Потоковое Видео",
           heavy: "Интенсивное Использование",
           k4Video: "4K Потоковое Видео",
           transfer: "Передача Больших Файлов",
           pro: "Профессиональное Использование",
           crew: "Для Всего Экипажа",
           unlimited: "Безграничные Возможности"
        }
      },
      app: {
        title: "Система Автоматизации ADS",
        mainTitle: "Не Беспокойтесь,\nСистема Управится.",
        description: "Сведите к минимуму операционную нагрузку компании. Благодаря нашему 100% автоматизированному ПО, пользователи на борту могут мгновенно приобретать дополнительные интернет-пакеты в соответствии со своими потребностями, не застревая в процессах утверждения.",
        feature1Title: "Автоматическая Покупка",
        feature1Desc: "Экипаж может покупать пакеты через приложение без одобрения компании.",
        feature2Title: "Нулевая Операционная Нагрузка",
        feature2Desc: "Система работает сама по себе без необходимости вмешательства менеджеров компании.",
        feature3Title: "Мобильный и Настольный Доступ",
        feature3Desc: "Каждый на борту может легко получить доступ к системе с удобным интерфейсом.",
        desktop: "Десктоп",
        mobile: "Мобильный"
      },
      contact: {
        title: "Свяжитесь с Нами",
        subtitle: "Контактная Информация",
        office: "Наш Офис",
        email: "Email",
        phone: "Телефон",
        support: "Поддержка",
        supportDesc: "24/7 Мониторинг и\nТехническая Поддержка"
      },
      footer: {
        desc: "Решения для бесперебойной связи и кибербезопасности в морском секторе. Мы с вами по всему миру.",
        address: "Адрес",
        email: "Email",
        phone: "Телефон",
        rights: "AdeGloba Все Права Защищены.",
        madeBy: "Этот сайт был подготовлен TOOV.",
        privacy: "Политика Конфиденциальности",
        terms: "Условия Обслуживания"
      },
      modal: {
        title: "Получить Предложение",
        desc: "Заполните форму для морских решений, соответствующих вашим потребностям.",
        company: "Название Компании",
        name: "Уполномоченное Лицо",
        email: "Email",
        phone: "Телефон",
        services: "Интересующие Услуги",
        notes: "Дополнительные Примечания",
        notesPlaceholder: "Количество судов, информация о маршруте или особые запросы...",
        submit: "Запросить Предложение",
        sending: "Отправка...",
        successTitle: "Запрос Получен",
        successDesc: "Мы свяжемся с вами в ближайшее время.",
        serviceList: {
          data: "Услуга Передачи Данных Starlink",
          hardware: "Антенна и Оборудование Starlink",
          installation: "Услуга Установки Под Ключ",
          firewall: "Управляемый Firewall и Безопасность",
          support: "24/7 Техническая Поддержка и Обслуживание",
          network: "Управление Бортовой Сетью"
        }
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: "Startseite",
        services: "Dienstleistungen",
        whyUs: "Warum Wir",
        packages: "Pakete",
        adsSystem: "ADS System",
        contact: "Kontakt",
        getStarted: "JETZT STARTEN"
      },
      hero: {
        subtitle: "Maritime Konnektivität der Nächsten Generation",
        titleStart: "GLOBALE",
        titleHighlight: "KONNEKTIVITÄT",
        titleEnd: "GESICHERT.",
        description: "Premium Starlink-Integration und fortschrittliche Firewall-Dienste für maritime Operationen weltweit.",
        ourServices: "UNSERE LEISTUNGEN",
        contactUs: "KONTAKT"
      },
      maritime: {
        badge: "Premium Maritime Lösung",
        title: "Starlink Maritime",
        subtitle: "& Firewall Service",
        description: "Hochgeschwindigkeits-Satelliteninternet mit geringer Latenz für Ihre Schiffe. Genießen Sie mit unserem integrierten Firewall-Service Bürokomfort-Konnektivität mitten im Ozean ohne Cybersicherheitsbedenken.",
        feature1Title: "Nahtlose Konnektivität",
        feature1Desc: "Transozeanische Kommunikation mit Download-Geschwindigkeiten von bis zu 350 Mbit/s.",
        feature2Title: "Integrierte Sicherheit",
        feature2Desc: "Ihr Netzwerk ist dank fortschrittlichem Firewall-Schutz immer sicher.",
        mapButton: "Starlink Karte",
        activeCoverage: "Aktive Abdeckung",
        globalNetwork: "Globales Ozeannetzwerk"
      },
      services: {
        title: "Unsere Dienstleistungen",
        subtitle: "Warum Adegloba Space?",
        globalCoverage: "Globale Abdeckung",
        globalCoverageDesc: "Hochgeschwindigkeitsinternet überall auf der Welt.",
        fastestConn: "Schnellste Verbindung",
        fastestConnDesc: "Schnellster satellitengestützter maritimer Internetdienst.",
        reliability: "Zuverlässigkeit",
        reliabilityDesc: "Ununterbrochenes Internet mit globalem Abdeckungsbereich.",
        budgetControl: "Budgetkontrolle",
        budgetControlDesc: "Kostengünstige Antenne, Paketoptionen bis zu 1 TB.",
        easyInstall: "Einfache Installation & Versand",
        easyInstallDesc: "Antennentechnologie der neuesten Generation, leichte kompakte Antenne.",
        paymentPlans: "Flexible Zahlungspläne",
        paymentPlansDesc: "Verschiedene Pläne für jeden Bedarf."
      },
      packages: {
        title: "Flexible Pläne",
        subtitle: "Datenpakete",
        description: "Wählen Sie das Paket, das zu Ihren Bedürfnissen passt. Hohe Geschwindigkeit und geringe Latenz in allen Paketen garantiert.",
        downloadSpeed: "Download-Geschwindigkeit",
        uploadSpeed: "Upload-Geschwindigkeit",
        popular: "Beliebt",
        maritimeInternet: "Starlink Maritime\nHochgeschwindigkeitsinternet",
        secureConn: "Sichere Verbindung",
        globalRoaming: "Globales Roaming",
        applyNow: "Jetzt Bewerben",
        features: {
           basic: "Basisnutzung",
           email: "E-Mail & Messaging",
           standard: "Standardnutzung",
           web: "Surfen im Web",
           voice: "Sprachanruf",
           active: "Aktive Nutzung",
           videoConf: "Videokonferenz",
           hdVideo: "HD-Video-Streaming",
           heavy: "Intensive Nutzung",
           k4Video: "4K-Video-Streaming",
           transfer: "Große Dateiübertragung",
           pro: "Professionelle Nutzung",
           crew: "Für die Gesamte Besatzung",
           unlimited: "Unbegrenzte Möglichkeiten"
        }
      },
      app: {
        title: "ADS Automatisierungssystem",
        mainTitle: "Keine Sorge,\nSystem Verwaltet.",
        description: "Minimieren Sie Ihre operative Belastung als Unternehmen. Dank unserer zu 100% automatisierten Software können Benutzer an Bord sofort zusätzliche Internetpakete nach ihren Bedürfnissen kaufen, ohne in Genehmigungsprozessen stecken zu bleiben.",
        feature1Title: "Automatischer Kauf",
        feature1Desc: "Die Besatzung kann Pakete über die App ohne Genehmigung des Unternehmens kaufen.",
        feature2Title: "Null Operative Belastung",
        feature2Desc: "Das System arbeitet von selbst, ohne dass Unternehmensmanager eingreifen müssen.",
        feature3Title: "Mobil- & Desktop-Zugriff",
        feature3Desc: "Jeder an Bord kann über eine benutzerfreundliche Oberfläche einfach auf das System zugreifen.",
        desktop: "Desktop",
        mobile: "Mobil"
      },
      contact: {
        title: "Kontaktieren Sie Uns",
        subtitle: "Kontaktinformationen",
        office: "Unser Büro",
        email: "E-Mail",
        phone: "Telefon",
        support: "Unterstützung",
        supportDesc: "24/7 Überwachung &\nTechnische Unterstützung"
      },
      footer: {
        desc: "Lösungen für ununterbrochene Kommunikation und Cybersicherheit im maritimen Sektor. Wir sind weltweit für Sie da.",
        address: "Adresse",
        email: "E-Mail",
        phone: "Telefon",
        rights: "AdeGloba Alle Rechte Vorbehalten.",
        madeBy: "Diese Website wurde von TOOV erstellt.",
        privacy: "Datenschutzrichtlinie",
        terms: "Nutzungsbedingungen"
      },
      modal: {
        title: "Angebot Einholen",
        desc: "Füllen Sie das Formular für maritime Lösungen aus, die Ihren Bedürfnissen entsprechen.",
        company: "Firmenname",
        name: "Bevollmächtigte Person",
        email: "E-Mail",
        phone: "Telefon",
        services: "Interessierte Dienstleistungen",
        notes: "Zusätzliche Anmerkungen",
        notesPlaceholder: "Anzahl der Schiffe, Routeninformationen oder Sonderwünsche...",
        submit: "Angebot Anfordern",
        sending: "Senden...",
        successTitle: "Angebotsanfrage Erhalten",
        successDesc: "Wir werden Sie so schnell wie möglich kontaktieren.",
        serviceList: {
          data: "Starlink Datendienst",
          hardware: "Starlink Antenne & Hardware",
          installation: "End-to-End Installationsservice",
          firewall: "Verwaltete Firewall & Sicherheit",
          support: "24/7 Technischer Support & Wartung",
          network: "Bordnetzwerkmanagement"
        }
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        whyUs: "Por Qué Nosotros",
        packages: "Paquetes",
        adsSystem: "Sistema ADS",
        contact: "Contacto",
        getStarted: "EMPEZAR"
      },
      hero: {
        subtitle: "Conectividad Marítima de Nueva Generación",
        titleStart: "CONECTIVIDAD",
        titleHighlight: "GLOBAL",
        titleEnd: "ASEGURADA.",
        description: "Integración premium de Starlink y servicios avanzados de Firewall para operaciones marítimas en todo el mundo.",
        ourServices: "NUESTROS SERVICIOS",
        contactUs: "CONTÁCTENOS"
      },
      maritime: {
        badge: "Solución Marítima Premium",
        title: "Starlink Maritime",
        subtitle: "& Servicio de Firewall",
        description: "Internet satelital de alta velocidad y baja latencia para sus embarcaciones. Con nuestro servicio de Firewall integrado, disfrute de conectividad con comodidad de oficina en medio del océano sin preocupaciones de ciberseguridad.",
        feature1Title: "Conectividad Sin Interrupciones",
        feature1Desc: "Comunicación transoceánica con velocidades de descarga de hasta 350 Mbps.",
        feature2Title: "Seguridad Integrada",
        feature2Desc: "Su red siempre está segura con protección avanzada de firewall.",
        mapButton: "Mapa de Starlink",
        activeCoverage: "Cobertura Activa",
        globalNetwork: "Red Oceánica Global"
      },
      services: {
        title: "Nuestros Servicios",
        subtitle: "¿Por qué Adegloba Space?",
        globalCoverage: "Cobertura Global",
        globalCoverageDesc: "Internet de alta velocidad en cualquier lugar del mundo.",
        fastestConn: "Conexión Más Rápida",
        fastestConnDesc: "El servicio de internet marítimo satelital más rápido.",
        reliability: "Fiabilidad",
        reliabilityDesc: "Internet ininterrumpido con área de cobertura global.",
        budgetControl: "Control de Presupuesto",
        budgetControlDesc: "Antena de bajo costo, opciones de paquete de hasta 1 TB.",
        easyInstall: "Fácil Instalación y Envío",
        easyInstallDesc: "Tecnología de antena de última generación, antena compacta y ligera.",
        paymentPlans: "Planes de Pago Flexibles",
        paymentPlansDesc: "Varios planes para satisfacer todas las necesidades."
      },
      packages: {
        title: "Planes Flexibles",
        subtitle: "Paquetes de Datos",
        description: "Elija el paquete que se adapte a sus necesidades. Alta velocidad y baja latencia garantizadas en todos los paquetes.",
        downloadSpeed: "Velocidad de Descarga",
        uploadSpeed: "Velocidad de Subida",
        popular: "Popular",
        maritimeInternet: "Starlink Maritime\nInternet de Alta Velocidad",
        secureConn: "Conexión Segura",
        globalRoaming: "Roaming Global",
        applyNow: "Aplicar Ahora",
        features: {
           basic: "Uso Básico",
           email: "Correo Electrónico y Mensajería",
           standard: "Uso Estándar",
           web: "Navegación Web",
           voice: "Llamada de Voz",
           active: "Uso Activo",
           videoConf: "Videoconferencia",
           hdVideo: "Transmisión de Video HD",
           heavy: "Uso Intenso",
           k4Video: "Transmisión de Video 4K",
           transfer: "Transferencia de Archivos Grandes",
           pro: "Uso Profesional",
           crew: "Para Toda la Tripulación",
           unlimited: "Posibilidades Ilimitadas"
        }
      },
      app: {
        title: "Sistema de Automatización ADS",
        mainTitle: "No Se Preocupe,\nEl Sistema Gestiona.",
        description: "Minimice su carga operativa como empresa. Gracias a nuestro software 100% automatizado, los usuarios a bordo pueden comprar instantáneamente paquetes de internet adicionales según sus necesidades sin atascarse en ningún proceso de aprobación.",
        feature1Title: "Compra Automática",
        feature1Desc: "La tripulación puede comprar paquetes a través de la aplicación sin aprobación de la empresa.",
        feature2Title: "Carga Operativa Cero",
        feature2Desc: "El sistema funciona por sí mismo sin necesidad de que intervengan los gerentes de la empresa.",
        feature3Title: "Acceso Móvil y de Escritorio",
        feature3Desc: "Todos a bordo pueden acceder fácilmente al sistema con una interfaz fácil de usar.",
        desktop: "Escritorio",
        mobile: "Móvil"
      },
      contact: {
        title: "Contáctenos",
        subtitle: "Información de Contacto",
        office: "Nuestra Oficina",
        email: "Correo Electrónico",
        phone: "Teléfono",
        support: "Soporte",
        supportDesc: "Monitoreo 24/7 y\nSoporte Técnico"
      },
      footer: {
        desc: "Soluciones de comunicación ininterrumpida y ciberseguridad en el sector marítimo. Estamos con usted en todo el mundo.",
        address: "Dirección",
        email: "Correo Electrónico",
        phone: "Teléfono",
        rights: "AdeGloba Todos los Derechos Reservados.",
        madeBy: "Este sitio web fue preparado por TOOV.",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio"
      },
      modal: {
        title: "Obtener Cotización",
        desc: "Complete el formulario para soluciones marítimas específicas a sus necesidades.",
        company: "Nombre de la Empresa",
        name: "Persona Autorizada",
        email: "Correo Electrónico",
        phone: "Teléfono",
        services: "Servicios Interesados",
        notes: "Notas Adicionales",
        notesPlaceholder: "Número de embarcaciones, información de ruta o solicitudes especiales...",
        submit: "Solicitar Cotización",
        sending: "Enviando...",
        successTitle: "Solicitud de Cotización Recibida",
        successDesc: "Nos pondremos en contacto con usted lo antes posible.",
        serviceList: {
          data: "Servicio de Datos Starlink",
          hardware: "Antena y Hardware Starlink",
          installation: "Servicio de Instalación Integral",
          firewall: "Firewall y Seguridad Gestionados",
          support: "Soporte Técnico y Mantenimiento 24/7",
          network: "Gestión de Red a Bordo"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "tr", 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;