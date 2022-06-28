import { useEffect, useState } from 'react';

export const useAnimate = (cb, element, classname) => {
    const [animatedElement, setAnimatedElement] = useState();

    let animate = (e, item) => {
        e?.stopPropagation()

        let currentElement = animatedElement || item

        currentElement.classList.add(classname)

        setTimeout(() => {
            currentElement.classList.remove(classname)
            cb()
        }, 200)
    };

    useEffect(() => {
        setAnimatedElement(element.current)
    }, [element]);

    return animate
}