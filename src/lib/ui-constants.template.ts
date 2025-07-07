/**
 * UI Constants Template
 * 
 * This file contains all the text content and UI labels for your portfolio.
 * Customize these values to match your personal brand and style.
 * 
 * All text is organized by sections to make it easy to find and modify.
 */

export const UI_TEXT = {
    // Button Labels
    // Customize these button texts to match your preferred tone
    buttons: {
        getInTouch: 'Get In Touch',
        letsTalk: "Let's Talk",
        viewWork: 'View My Work',
        viewProjects: 'View Projects',
        contact: 'Contact',
        demo: 'Demo',
        code: 'Code',
        sendMessage: 'Send Message',
        download: 'Download',
        learnMore: 'Learn More'
    },

    // Navigation Labels
    // These appear in your main navigation menu
    navigation: {
        home: 'Home',
        about: 'About',
        work: 'Work',
        projects: 'Projects',
        contact: 'Contact',
        examples: 'Examples'
    },

    // Page Headings
    // Main headlines for each page section
    headings: {
        home: {
            hero: 'Building Digital Experiences', // Main hero heading
            heroAccent: ' Experiences', // Highlighted part of hero heading
            technologies: 'Technologies I Work With',
            cta: 'Ready to Start Your Project?' // Call-to-action heading
        },
        about: {
            hero: 'Your Name', // Replace with your name
            myStory: 'My Story',
            journey: 'Journey',
            letsConnect: "Let's Connect",
            skillsAndTechnologies: 'Skills & Technologies',
            interests: 'Interests'
        },
        contact: {
            hero: "Let's Connect",
            contactInfo: 'Contact Information',
            socialMedia: 'Social Media',
            sendMessage: 'Send a Message'
        },
        projects: {
            hero: 'My Projects',
            featuredWork: 'Featured Work',
            workTogether: "Let's Work Together"
        }
    },

    // Descriptions
    // Longer text content for various sections
    descriptions: {
        home: {
            hero: 'Your professional tagline or brief description of what you do.',
            technologies: 'Always learning and adapting to the latest technologies',
            cta: 'Your call-to-action message encouraging visitors to work with you'
        },
        about: {
            subtitle: 'Your Professional Title', // e.g., 'Full Stack Developer & UI/UX Enthusiast'
            bio: 'A brief bio describing your passion and expertise. This appears in multiple places.',
            
            // Story sections for your About page
            story1: "Write your introduction here. Talk about your background, how you got into development, and what drives your passion for technology.",
            
            story2: "Describe your technical expertise and specializations. Mention key technologies you work with and what makes you unique as a developer.",
            
            story3: "Share your philosophy about development, design, and working with clients. What do you believe makes great software?"
        },
        contact: {
            hero: "Your contact page introduction. Encourage visitors to reach out.",
            form: "Message encouraging visitors to use your contact form."
        },
        projects: {
            hero: 'Brief description of your project portfolio and what visitors can expect to see.',
            cta: 'Closing message for your projects page, encouraging collaboration.'
        },
        footer: 'Short tagline that appears in your website footer.'
    },

    // Form Labels
    // Contact form field labels and messages
    forms: {
        labels: {
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            message: 'Message',
            phone: 'Phone',
            company: 'Company'
        },
        placeholders: {
            name: 'Your name',
            email: 'your@email.com',
            subject: "What's this about?",
            message: 'Tell me about your project...',
            phone: 'Your phone number',
            company: 'Your company'
        },
        validation: {
            required: 'This field is required',
            email: 'Please enter a valid email address',
            minLength: 'Must be at least {min} characters',
            maxLength: 'Must be no more than {max} characters'
        },
        success: "Thank you for your message! I'll get back to you soon.",
        error: 'Something went wrong. Please try again.'
    },

    // Status Messages
    // Loading states and system messages
    status: {
        loading: 'Loading...',
        submitting: 'Sending...',
        success: 'Success!',
        error: 'Error',
        notFound: 'Page not found',
        comingSoon: 'Coming soon'
    },

    // Copyright and Legal
    // Footer legal text
    legal: {
        copyright: 'All rights reserved.',
        madeWith: 'Made with',
        poweredBy: 'Powered by'
    },

    // Accessibility Labels
    // Screen reader labels for better accessibility
    accessibility: {
        skipToContent: 'Skip to content',
        openNavigation: 'Open navigation',
        closeNavigation: 'Close navigation',
        toggleTheme: 'Toggle theme',
        socialMediaLinks: 'Social media links',
        contactInformation: 'Contact information'
    }
} as const;

// Export specific sections for easier imports
export const BUTTONS = UI_TEXT.buttons;
export const HEADINGS = UI_TEXT.headings;
export const DESCRIPTIONS = UI_TEXT.descriptions;
export const FORMS = UI_TEXT.forms;
export const NAVIGATION = UI_TEXT.navigation;
export const STATUS = UI_TEXT.status;

// Common CTA phrases
// You can customize these call-to-action phrases
export const CTA_PHRASES = [
    "Let's work together",
    'Get in touch',
    'Start your project',
    "Let's connect",
    'Reach out',
    'Contact me'
] as const;

// Quick Links for Navigation
export const QUICK_LINKS = [
    { href: '/about', label: NAVIGATION.about },
    { href: '/work', label: NAVIGATION.work },
    { href: '/projects', label: NAVIGATION.projects },
    { href: '/contact', label: NAVIGATION.contact }
] as const;

// Theme-related constants
export const THEME_TEXT = {
    light: 'Light mode',
    dark: 'Dark mode',
    system: 'System preference'
} as const;

// =============================================================================
// CUSTOMIZATION GUIDE
// =============================================================================

/**
 * HOW TO CUSTOMIZE:
 * 
 * 1. HEADINGS: Update the hero headings for each page to match your style
 * 2. DESCRIPTIONS: Replace placeholder text with your own content
 * 3. STORY SECTIONS: Write your unique story in the about.story1-3 sections
 * 4. BUTTONS: Customize button text to match your preferred tone
 * 5. CTA_PHRASES: Add your own call-to-action phrases
 * 
 * TIPS:
 * - Keep headings concise and impactful
 * - Use active voice in descriptions
 * - Maintain consistency in tone throughout
 * - Test your content at different screen sizes
 * - Consider your target audience when writing copy
 */