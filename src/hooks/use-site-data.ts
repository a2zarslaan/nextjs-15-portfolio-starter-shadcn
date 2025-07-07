import {
    getPersonalInfo,
    getContactInfo,
    getSocialLinks,
    getTechnologies,
    getStatistics,
    getFeatures,
    getProjects,
    getTechnologiesByCategory,
    getPublicSocialLinks,
    getContactSocialLinks,
    getEmailLink,
    getTechnologyNames,
    getAboutPageStats,
    getFeaturedProjects,
    getProjectsByCategory,
    getProjectsByStatus,
    getProjectById,
    getRecentProjects,
    type PersonalInfo,
    type ContactInfo,
    type SocialLink,
    type Technology,
    type Statistic,
    type Feature,
    type Project,
    type ProjectTechnology
} from '@/lib/site-data';

// Custom hooks for accessing site data
// These hooks provide a clean API for components to access centralized data

/**
 * Hook to get personal information
 * @returns PersonalInfo object containing name, title, bio, etc.
 */
export function usePersonalInfo(): PersonalInfo {
    return getPersonalInfo();
}

/**
 * Hook to get contact information
 * @returns ContactInfo object containing email, phone, location, etc.
 */
export function useContactInfo(): ContactInfo {
    return getContactInfo();
}

/**
 * Hook to get social media links
 * @param publicOnly - If true, returns only public social links
 * @returns Array of SocialLink objects
 */
export function useSocialLinks(publicOnly: boolean = false): SocialLink[] {
    return publicOnly ? getPublicSocialLinks() : getSocialLinks();
}

/**
 * Hook to get contact-specific social links (excludes email)
 * @returns Array of SocialLink objects without email
 */
export function useContactSocialLinks(): SocialLink[] {
    return getContactSocialLinks();
}

/**
 * Hook to get email link
 * @returns SocialLink object for email or undefined
 */
export function useEmailLink(): SocialLink | undefined {
    return getEmailLink();
}

/**
 * Hook to get technologies/skills
 * @param category - Optional category filter
 * @returns Array of Technology objects
 */
export function useTechnologies(category?: Technology['category']): Technology[] {
    return category ? getTechnologiesByCategory(category) : getTechnologies();
}

/**
 * Hook to get technology names as simple string array
 * @returns Array of technology names
 */
export function useTechnologyNames(): string[] {
    return getTechnologyNames();
}


/**
 * Hook to get statistics
 * @param page - Specify which page layout ('about' | 'all')
 * @returns Array of Statistic objects
 */
export function useStatistics(page: 'about' | 'all' = 'all'): Statistic[] {
    switch (page) {
        case 'about':
            return getAboutPageStats();
        default:
            return getStatistics();
    }
}


/**
 * Hook to get features (for homepage)
 * @returns Array of Feature objects
 */
export function useFeatures(): Feature[] {
    return getFeatures();
}

/**
 * Hook to get filtered technologies by proficiency level
 * @param proficiency - Proficiency level to filter by
 * @returns Array of Technology objects
 */
export function useTechnologiesByProficiency(proficiency: Technology['proficiency']): Technology[] {
    return getTechnologies().filter(tech => tech.proficiency === proficiency);
}

/**
 * Hook to get frontend technologies only
 * @returns Array of frontend Technology objects
 */
export function useFrontendTechnologies(): Technology[] {
    return getTechnologiesByCategory('frontend');
}

/**
 * Hook to get backend technologies only
 * @returns Array of backend Technology objects
 */
export function useBackendTechnologies(): Technology[] {
    return getTechnologiesByCategory('backend');
}

/**
 * Hook to get projects
 * @param featured - If true, returns only featured projects
 * @param category - Optional category filter
 * @param status - Optional status filter
 * @returns Array of Project objects
 */
export function useProjects(options?: {
    featured?: boolean;
    category?: Project['category'];
    status?: Project['status'];
}): Project[] {
    if (options?.featured) {
        return getFeaturedProjects();
    }
    if (options?.category) {
        return getProjectsByCategory(options.category);
    }
    if (options?.status) {
        return getProjectsByStatus(options.status);
    }

    return getProjects();
}

/**
 * Hook to get a specific project by ID
 * @param id - Project ID
 * @returns Project object or undefined
 */
export function useProject(id: number): Project | undefined {
    return getProjectById(id);
}

/**
 * Hook to get recent projects
 * @param limit - Number of projects to return (default: 3)
 * @returns Array of recent Project objects
 */
export function useRecentProjects(limit: number = 3): Project[] {
    return getRecentProjects(limit);
}

/**
 * Hook to get featured projects only
 * @returns Array of featured Project objects
 */
export function useFeaturedProjects(): Project[] {
    return getFeaturedProjects();
}

/**
 * Hook to get projects by category
 * @param category - Project category to filter by
 * @returns Array of Project objects in the specified category
 */
export function useProjectsByCategory(category: Project['category']): Project[] {
    return getProjectsByCategory(category);
}

/**
 * Hook to get projects by status
 * @param status - Project status to filter by
 * @returns Array of Project objects with the specified status
 */
export function useProjectsByStatus(status: Project['status']): Project[] {
    return getProjectsByStatus(status);
}

/**
 * Hook to get complete site data for development/debugging
 * @returns Object containing all site data
 */
export function useAllSiteData() {
    return {
        personal: getPersonalInfo(),
        contact: getContactInfo(),
        socialLinks: getSocialLinks(),
        technologies: getTechnologies(),
        statistics: getStatistics(),
        features: getFeatures(),
        projects: getProjects()
    };
}

/**
 * Hook to validate if all required data is present
 * @returns Object with validation status and missing fields
 */
export function useDataValidation() {
    const personal = getPersonalInfo();
    const contact = getContactInfo();
    const socialLinks = getSocialLinks();
    
    const missing: string[] = [];
    
    if (!personal.name) missing.push('personal.name');
    if (!personal.title) missing.push('personal.title');
    if (!contact.email) missing.push('contact.email');
    if (socialLinks.length === 0) missing.push('socialLinks');
    
    return {
        isValid: missing.length === 0,
        missing,
        hasRequiredData: missing.length === 0
    };
}