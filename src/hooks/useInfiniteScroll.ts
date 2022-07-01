import { useEffect, useRef } from "react";

const useInfiniteScroll = <T extends HTMLDivElement>(
    callback: () => void,
    ) => {
    const displayElement = useRef<T>(null);
    useEffect(() => {
        if (displayElement && displayElement.current) {
        const intersectionobserver = new IntersectionObserver(
            (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                callback();
                }
            });
            }
        );
        intersectionobserver.observe(displayElement.current);
        return () => intersectionobserver.disconnect();
        }
    }, [callback, displayElement]);

    return displayElement;
};

export default useInfiniteScroll;