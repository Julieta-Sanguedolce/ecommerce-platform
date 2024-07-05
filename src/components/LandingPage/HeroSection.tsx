import React from "react"
import { faker } from "@faker-js/faker"

export const HeroSection = () => {
    const heroData = React.useMemo(
        () => ({
            heroImageWide: faker.image.url({ width: 1920, height: 1080 }),
        }),
        []
    )

    return (
        <section className="w-full pt-20 bg-gradient-to-br from-Very_dark_blue via-neutral-900 to-Very_dark_blue/95">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                    <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-Orange to-Light_grayish_blue uppercase mb-6">
                        Featured Product
                    </h2>
                </div>
                <div className="lg:w-1/2">
                    <img
                        src={heroData.heroImageWide}
                        alt="hero"
                        className="rounded-lg shadow-xl w-auto h-auto max-h-96 object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
