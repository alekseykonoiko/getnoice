// Language configuration and translations
const translations = {
    en: {
        // Navigation
        home: "Home",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact",
        
        // Main page
        appName: "Noice App",
        tagline: "🚀 Coming Soon 🚀",
        description: "Noice is a powerful mobile application that transforms conversations into actionable insights using AI-powered transcription technology.",
        
        // Features
        feature1: "Audio Recording: Crystal-clear audio recording for meetings and lectures",
        feature2: "Real-time Transcription: Instant speech-to-text conversion",
        feature3: "AI Summaries: Get smart summaries with key points and action items",
        feature4: "Background Processing: Continue transcribing even when your screen is off",
        feature5: "Push Notifications: Get notified when your transcriptions are ready",
        feature6: "Secure Storage: Safe and accessible storage across all your devices",
        feature7: "Dark Mode: Comfortable viewing in any lighting condition",
        feature8: "Authentication: Secure sign-in with email, Google, and Apple accounts",
        
        // Footer
        copyright: "© 2024 Noice App. All rights reserved.",
        
        // Legal pages
        privacyTitle: "Privacy Policy for Noice",
        termsTitle: "Terms of Service for Noice",
        effectiveDate: "Effective Date: December 24, 2024",
        backToHome: "← Back to Home"
    },
    es: {
        // Navigation
        home: "Inicio",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        contact: "Contacto",
        
        // Main page
        appName: "Noice App",
        tagline: "🚀 Próximamente 🚀",
        description: "Noice es una poderosa aplicación móvil que transforma las conversaciones en información procesable utilizando tecnología de transcripción impulsada por IA.",
        
        // Features
        feature1: "Grabación de Audio: Grabación de audio cristalina para reuniones y conferencias",
        feature2: "Transcripción en Tiempo Real: Conversión instantánea de voz a texto",
        feature3: "Resúmenes con IA: Obtén resúmenes inteligentes con puntos clave y elementos de acción",
        feature4: "Procesamiento en Segundo Plano: Continúa transcribiendo incluso cuando tu pantalla está apagada",
        feature5: "Notificaciones Push: Recibe notificaciones cuando tus transcripciones estén listas",
        feature6: "Almacenamiento Seguro: Almacenamiento seguro y accesible en todos tus dispositivos",
        feature7: "Modo Oscuro: Visualización cómoda en cualquier condición de iluminación",
        feature8: "Autenticación: Inicio de sesión seguro con cuentas de correo, Google y Apple",
        
        // Footer
        copyright: "© 2024 Noice App. Todos los derechos reservados.",
        
        // Legal pages
        privacyTitle: "Política de Privacidad de Noice",
        termsTitle: "Términos de Servicio de Noice",
        effectiveDate: "Fecha de entrada en vigor: 24 de diciembre de 2024",
        backToHome: "← Volver al Inicio"
    },
    ru: {
        // Navigation
        home: "Главная",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
        contact: "Контакты",
        
        // Main page
        appName: "Noice App",
        tagline: "🚀 Скоро 🚀",
        description: "Noice — это мощное мобильное приложение, которое превращает разговоры в полезную информацию с помощью технологии транскрипции на основе ИИ.",
        
        // Features
        feature1: "Запись аудио: Кристально чистая запись звука для встреч и лекций",
        feature2: "Транскрипция в реальном времени: Мгновенное преобразование речи в текст",
        feature3: "ИИ-резюме: Получайте умные резюме с ключевыми моментами и задачами",
        feature4: "Фоновая обработка: Продолжайте транскрибировать даже при выключенном экране",
        feature5: "Push-уведомления: Получайте уведомления, когда транскрипции готовы",
        feature6: "Безопасное хранение: Надежное и доступное хранилище на всех устройствах",
        feature7: "Темный режим: Комфортный просмотр при любом освещении",
        feature8: "Аутентификация: Безопасный вход через email, Google и Apple",
        
        // Footer
        copyright: "© 2024 Noice App. Все права защищены.",
        
        // Legal pages
        privacyTitle: "Политика конфиденциальности Noice",
        termsTitle: "Условия использования Noice",
        effectiveDate: "Дата вступления в силу: 24 декабря 2024 г.",
        backToHome: "← Вернуться на главную"
    }
};

// Language detection and management
class LanguageManager {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.init();
    }
    
    detectLanguage() {
        console.log('🌍 Detecting language...');
        
        // Check localStorage first
        const savedLang = localStorage.getItem('noice-lang');
        console.log('💾 Saved language from localStorage:', savedLang);
        if (savedLang && translations[savedLang]) {
            console.log('✅ Using saved language:', savedLang);
            return savedLang;
        }
        
        // Auto-detect based on browser language preferences
        const browserLangs = navigator.languages || [navigator.language || navigator.userLanguage];
        const primaryLang = browserLangs[0];
        console.log('🌐 Browser languages:', browserLangs);
        console.log('🌐 Primary language:', primaryLang);
        
        // Check all browser languages for matches
        for (const lang of browserLangs) {
            if (lang.startsWith('ru') || lang.includes('ru-')) {
                console.log('🇷🇺 Detected Russian from browser languages');
                return 'ru';
            }
            if (lang.startsWith('es') || lang.includes('es-')) {
                console.log('🇪🇸 Detected Spanish from browser languages');
                return 'es';
            }
        }
        
        // Default to English
        console.log('🇺🇸 Defaulting to English');
        return 'en';
    }
    
    setLanguage(lang) {
        console.log('🔄 Setting language to:', lang);
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('noice-lang', lang);
            console.log('💾 Language saved to localStorage:', lang);
            this.updatePageContent();
            this.updateLanguageLinks();
            console.log('✅ Language change complete');
        } else {
            console.error('❌ Invalid language:', lang);
        }
    }
    
    updatePageContent() {
        const t = translations[this.currentLang];
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                element.textContent = t[key];
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
        
        // Update links to maintain language
        this.updateLanguageLinks();
    }
    
    updateLanguageLinks() {
        console.log('🔗 Updating language links...');
        // Update navigation links to include language parameter
        // Select all links that point to local HTML files
        const links = document.querySelectorAll('a[href$=".html"], a[href*=".html?"], a[href*=".html#"]');
        console.log('🔍 Found potential links:', links.length);
        
        links.forEach((link, index) => {
            const href = link.getAttribute('href');
            console.log(`🔗 Link ${index + 1} original href:`, href);
            if (href && !href.startsWith('http') && !href.startsWith('mailto:')) {
                const [baseHref, hash] = href.split('#');
                const cleanHref = baseHref.split('?')[0];
                console.log(`🔗 Link ${index + 1} clean href:`, cleanHref);
                // Only update if it's one of our main pages
                if (cleanHref === 'index.html' || cleanHref === 'privacy.html' || cleanHref === 'terms.html') {
                    const newHref = `${cleanHref}?lang=${this.currentLang}${hash ? '#' + hash : ''}`;
                    link.href = newHref;
                    console.log(`🔗 Link ${index + 1} updated to:`, newHref);
                } else {
                    console.log(`🔗 Link ${index + 1} skipped (not a main page)`);
                }
            }
        });
    }
    
    init() {
        console.log('🚀 Initializing language manager...');
        console.log('📍 Current page:', window.location.pathname);
        console.log('🔍 URL search params:', window.location.search);
        
        // Check URL parameter for language override
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        console.log('🔗 Language from URL:', urlLang);
        
        if (urlLang && translations[urlLang]) {
            console.log('✅ Using URL language:', urlLang);
            this.currentLang = urlLang;
            localStorage.setItem('noice-lang', urlLang);
        }
        
        console.log('🌐 Final language choice:', this.currentLang);
        
        // Initialize language on page load
        if (document.readyState === 'loading') {
            console.log('⏳ DOM still loading, waiting...');
            document.addEventListener('DOMContentLoaded', () => {
                console.log('📄 DOM loaded, updating page content...');
                this.updatePageContent();
                this.createLanguageSwitcher();
            });
        } else {
            console.log('📄 DOM already loaded, updating immediately...');
            // DOM is already loaded
            this.updatePageContent();
            this.createLanguageSwitcher();
        }
    }
    
    createLanguageSwitcher() {
        // Create language switcher HTML
        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        switcher.innerHTML = `
            <button class="lang-toggle" aria-label="Change language">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            </button>
            <div class="lang-dropdown">
                <button data-lang="en" class="${this.currentLang === 'en' ? 'active' : ''}">English</button>
                <button data-lang="es" class="${this.currentLang === 'es' ? 'active' : ''}">Español</button>
                <button data-lang="ru" class="${this.currentLang === 'ru' ? 'active' : ''}">Русский</button>
            </div>
        `;
        
        // Add CSS for the switcher
        if (!document.querySelector('#lang-switcher-styles')) {
            const style = document.createElement('style');
            style.id = 'lang-switcher-styles';
            style.textContent = `
                .language-switcher {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 1000;
                }
                .lang-toggle {
                    background: #1e1e1e;
                    border: 1px solid #333;
                    color: #fff;
                    padding: 8px;
                    border-radius: 8px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    transition: all 0.3s;
                }
                .lang-toggle:hover {
                    background: #2a2a2a;
                    border-color: #bb86fc;
                }
                .lang-dropdown {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    margin-top: 8px;
                    background: #1e1e1e;
                    border: 1px solid #333;
                    border-radius: 8px;
                    overflow: hidden;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-10px);
                    transition: all 0.3s;
                }
                .language-switcher.active .lang-dropdown {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                .lang-dropdown button {
                    display: block;
                    width: 100%;
                    padding: 10px 20px;
                    background: none;
                    border: none;
                    color: #fff;
                    text-align: left;
                    cursor: pointer;
                    transition: background 0.3s;
                    font-family: 'Roboto', sans-serif;
                }
                .lang-dropdown button:hover {
                    background: #2a2a2a;
                }
                .lang-dropdown button.active {
                    background: #333;
                    color: #bb86fc;
                }
                @media(max-width:600px) {
                    .language-switcher {
                        top: 10px;
                        right: 10px;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(switcher);
        
        // Add event listeners
        const toggle = switcher.querySelector('.lang-toggle');
        toggle.addEventListener('click', () => {
            switcher.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!switcher.contains(e.target)) {
                switcher.classList.remove('active');
            }
        });
        
        // Language selection
        switcher.querySelectorAll('[data-lang]').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setLanguage(btn.getAttribute('data-lang'));
                switcher.classList.remove('active');
                
                // Update active state
                this.updateSwitcherActiveState(switcher);
            });
        });
        
        // Set initial active state
        this.updateSwitcherActiveState(switcher);
    }
    
    updateSwitcherActiveState(switcher) {
        // Update active state for language switcher buttons
        switcher.querySelectorAll('[data-lang]').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            }
        });
    }
}

// Initialize language manager
const langManager = new LanguageManager();