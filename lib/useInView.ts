import { useActiveSectionContext } from "@/containers/ActiveSection";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold: number) {
    const {ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick} = useActiveSectionContext();

    useEffect(()=> {
        if(inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref
    };
}
