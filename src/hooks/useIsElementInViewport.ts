import { useRef, useState, useEffect } from 'react';

// ref https://velog.io/@syoung125/WIL-2021.11-1st

const useIsElementInViewport = (options?: IntersectionObserverInit) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callback = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
        console.log("새로운 이미지 뷰포트 등장")
    };

    useEffect(() => {
        if(isVisible){
            return;
        }
        const observer = new IntersectionObserver(callback, options);
        elementRef.current && observer.observe(elementRef.current);

        return () => observer.disconnect();
    }, [elementRef, options, isVisible]);

    return { elementRef, isVisible };
};

export default useIsElementInViewport;