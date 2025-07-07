import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number | number[];
    rootMargin?: string;
    triggerOnce?: boolean;
}

export const useIntersectionObserver = <T extends HTMLElement = HTMLDivElement>(options: UseIntersectionObserverOptions = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const elementRef = useRef<T>(null);
    
    const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // If triggerOnce is true and already triggered, don't observe
        if (triggerOnce && hasTriggered) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isElementIntersecting = entry.isIntersecting;
                setIsIntersecting(isElementIntersecting);
                
                if (isElementIntersecting && triggerOnce) {
                    setHasTriggered(true);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, triggerOnce, hasTriggered]);

    return { ref: elementRef, isIntersecting: triggerOnce ? (hasTriggered || isIntersecting) : isIntersecting };
};