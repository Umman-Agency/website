import { MotionConfig, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Tag } from "./ui/tag";

const AnimatedCounter = ({ to, suffix }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        // Handle decimal values for stats like ratings
        const isDecimal = to % 1 !== 0;
        const increment = isDecimal ? to / steps : Math.ceil(to / steps);

        let currentCount = 0;
        const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= to) {
                setCount(to);
                clearInterval(timer);
            } else {
                setCount(
                    isDecimal
                        ? parseFloat(currentCount.toFixed(1))
                        : Math.ceil(currentCount),
                );
            }
        }, interval);

        return () => clearInterval(timer);
    }, [isInView, to]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
};

const defaultStats = [
    {
        title: (
            <span>
                Proyectos que siguen <b><i>creciendo</i></b>
            </span>
        ),
        label: "Proyectos",
        description:
            "Resultados reales, proyectos bien cerrados, mejoras medibles y crecimiento constante.",
    },
    {
        title: (
            <span>
                <b><i>Eficiencia</i></b><br/>
                en el día a día
            </span>
        ),
        label: "Más eficiencia",
        description:
            "Procesos más ágiles para crear, publicar y optimizar sin complicarte",
    },
    {
        title: (
            <span>
                Piezas y campañas con <b><i>intención</i></b>
            </span>
        ),
        label: "Piezas y campañas",
        description:
            "Contenido pensado para verse bien, comunicar claro y mover resultados",
    },
    {
        title: (
            <span>
                Colaboraciones que dejan <b><i>huella</i></b>
            </span>
        ),
        label: "Colaboraciones y menciones",
        description:
            "Confianza construida con resultados y recomendaciones reales.",
    },
];

const Stats = ({ customStats }) => {
    const stats = customStats || defaultStats;
    const isProjectPage = !!customStats;

    return (
        <section id="achievements" className="py-12 md:py-24 bg-[#0C0D0D]">
            <div className="container mx-auto px-6">
                <Tag value="Logros"></Tag>
                {!isProjectPage && (
                    <div className="grid grid-cols-1 gap-8 mb-16">
                        <div>
                            <h2 className="text-3xl md:text-5xl lg:text-4xl font-bold text-white">
                                Trabajo que se{" "}
                                <i>
                                    <b>nota</b>
                                </i>
                                , se{" "}
                                <i>
                                    <b>mide</b>
                                </i>{" "}
                                y{" "}
                                <i>
                                    <b>te devuelve tiempo</b>
                                </i>
                            </h2>
                        </div>
                        <p className="text-lg text-white">
                            Objetivos cumplidos y números que lo respaldan:
                            proyectos entregados, crecimiento medible y clientes
                            felices.
                        </p>
                    </div>
                )}
                {isProjectPage && (
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase">
                            Project{" "}
                            <span className="text-accent-clearBlue">
                                Impact
                            </span>
                        </h2>
                    </div>
                )}
                <div className="grid justify-center grid-cols-[262px_262px] grid-flow-col lg:grid-cols-[repeat(4,284px)] gap-6 gap-8 overflow-x-auto py-8 scrollbar-beautiful snap-x snap-mandatory scroll-smooth">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`flex flex-col justify-around bg-${index} p-8 rounded-2xl h-full w-66 md:w-auto shrink-0`}
                        >
                            <div className="text-xl md:text-2xl font-bold text-white mt-2 mb-6">
                                <motion.p>{stat.title}</motion.p>
                            </div>
                            <div>
                                <p className="text-white m-0">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
