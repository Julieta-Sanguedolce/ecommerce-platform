import { useState, useEffect } from "react"
import heroImage from "../../data/main.png"

export const HeroSection = () => {
    const [imageStyle, setImageStyle] = useState({
        width: "1400px",
        height: "auto",
    })

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth
            const newWidth = windowWidth > 1980 ? "auto" : "100%"
            const newHeight = windowWidth > 1080 ? "auto" : "100%"
            setImageStyle({ width: newWidth, height: newHeight })
        }

        window.addEventListener("resize", handleResize)
        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

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
                        src={heroImage}
                        alt="hero"
                        style={{
                            ...imageStyle,
                            maxHeight: "700px",
                            objectFit: "cover",
                            borderRadius: "0.5rem",
                            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
