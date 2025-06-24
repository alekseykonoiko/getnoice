# Noice App Landing Page

## Project Overview
This is a simple static landing page for the Noice App, hosted on GitHub Pages at getnoice.com. The Noice App is described as a mobile application that transforms conversations into actionable insights using AI-powered transcription technology.

## Current Structure
```
/Users/akonoiko/getnoice/
├── CNAME              # Domain configuration for getnoice.com
├── index.html         # Main landing page with footer
├── privacy.html       # Privacy Policy page
├── terms.html         # Terms of Service page
├── lang.js            # Language detection and switching logic
├── privacy-content.js # Privacy Policy translations (EN/ES/RU)
├── terms-content.js   # Terms of Service translations (EN/ES/RU)
├── nice-good.gif      # Animated GIF asset
├── .gitignore         # Git exclusions
└── README.md          # Deployment instructions
```

## Landing Page Features
- **Design**: Dark theme (#121212 background) with white text
- **Typography**: Roboto font from Google Fonts
- **Responsive**: Mobile-friendly with media queries for screens under 600px
- **Content**: "Coming Soon" page showcasing the app's planned features
- **Footer**: Links to Privacy Policy, Terms of Service, and support email
- **Legal Pages**: Styled Privacy Policy and Terms of Service pages matching site theme
- **Multi-language Support**: English, Spanish, and Russian translations
- **Language Detection**: Automatic detection based on browser settings and timezone
- **Language Switcher**: Globe icon UI for manual language selection
- **Persistence**: Language preference saved in localStorage

## Advertised App Features
The landing page lists the following planned features for the Noice App:
- 🎙️ Audio Recording: Crystal-clear audio recording for meetings and lectures
- ✍️ Real-time Transcription: Instant speech-to-text conversion
- 🤖 AI Summaries: Get smart summaries with key points and action items
- 📱 Background Processing: Continue transcribing even when screen is off
- 🔔 Push Notifications: Get notified when transcriptions are ready
- 🔒 Secure Storage: Safe and accessible storage across all devices
- 🌙 Dark Mode: Comfortable viewing in any lighting condition
- 🔐 Authentication: Secure sign-in with email, Google, and Apple accounts

## Technical Details
- **Hosting**: GitHub Pages
- **Domain**: getnoice.com (configured via CNAME)
- **Styling**: Inline CSS in index.html
- **Assets**: Single GIF image (nice-good.gif)
- **Dependencies**: Google Fonts (Roboto)

## Development Notes
- Static site with client-side JavaScript for language management
- No build process or package management required
- Language content stored in separate JS files for easy maintenance
- Automatic language detection for Russia/Belarus (Russian), Spanish-speaking countries (Spanish), others (English)
- All translations are complete for main content, Privacy Policy, and Terms of Service