import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }
});

interface PageHeroProps {
    /** Small uppercase tag above the title (e.g. "#SERVICES") */
    tag?: string;
    /** Large bold H1 — first line */
    title: string;
    /** Lighter H2 — second line */
    subtitle?: string;
    /** If true, uses a much smaller font size for the subtitle (e.g. for dates) */
    smallSubtitle?: boolean;
    /** If true, adds a 30px margin bottom on mobile screens */
    hasMargin?: boolean;
}

/**
 * Generic page-level hero banner used at the top of inner pages.
 * Matches the exact style of the Services page hero.
 */
export default function PageHero({ tag, title, subtitle, smallSubtitle, hasMargin = false }: PageHeroProps) {
    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-[10px] pt-16 sm:pt-24">
            <section
                className={`relative overflow-hidden rounded-b-[1.5rem] sm:rounded-b-[2.5rem] pt-20 sm:pt-32 pb-24 sm:pb-40 ${hasMargin ? 'mb-[30px]' : ''}`}
                style={{
                    background: 'radial-gradient(circle at 0% 0%, #7f2191 0%, #4c005a 100%)'
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-[30px] relative z-10 text-center">
                    <div className="max-w-4xl mx-auto flex flex-col items-center">
                        {tag && (
                            <motion.p
                                {...fadeUp(0.1)}
                                className="text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-6"
                            >
                                {tag}
                            </motion.p>
                        )}
                        <motion.h1
                            {...fadeUp(0.2)}
                            className="text-[36px] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-white tracking-tight mb-2 leading-[1.1]"
                        >
                            {title}
                        </motion.h1>
                        {subtitle && (
                            <motion.p
                                {...fadeUp(0.3)}
                                className={`${
                                    smallSubtitle 
                                        ? "!text-[20px] font-medium text-white/70 mt-4" 
                                        : "text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-white/90 tracking-tight leading-[1.1]"
                                }`}
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
