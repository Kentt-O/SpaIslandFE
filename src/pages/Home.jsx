import { HeroCarousel } from "../components/HeroCarousel";
import { Intro } from "../components/Intro";
import { Treatments } from "../components/Treatments";
import { Gallery } from "../components/Gallery";
import { Testimonials } from "../components/Testimonials";
import { Membership } from "../components/Membership";

export function Home() {
    return (
        <>
            <HeroCarousel />
            <Intro />
            <Treatments />
            <Gallery />
            <Testimonials />
            <Membership />
        </>
    );
}
