import React, { useState, useRef, useLayoutEffect, useCallback } from 'react'
import styles from "./Experience.module.css"

import ShgLogo from "../../assets/experience/shg.png"
import RbcLogo from "../../assets/experience/rbc.png"
import UofaLogo from "../../assets/experience/uofa.png"

const experiences = [
    {
        role: "Tech Design Intern",
        company: "Sledgehammer Games (Activision)",
        date: "May 2025 - Aug 2025",
        description: "Design and program features for a future Call of Duty release with proprietary tools",
        logo: ShgLogo,
        logoBg: "#283337",
        monogram: "SG",
    },
    {
        role: "AI Engineer",
        company: "RBC Capital Markets",
        date: "May 2025 - Aug 2025",
        description: "Applied machine learning for predictive modeling in stock market applications",
        logo: RbcLogo,
        monogram: "RBC",
    },
    {
        role: "Quantitative Trading Analyst",
        company: "RBC Capital Markets",
        date: "Aug 2024 - Apr 2025",
        description: "Research, develop, and implement quantitative trading strategies",
        logo: RbcLogo,
        monogram: "RBC",
    },
    {
        role: "Undergraduate Research Assistant",
        company: "University of Alberta",
        date: "May 2024 - Aug 2024",
        description: "Explored how deep reinforcement learning agents can learn to optimize compute, paper submission to ICLR 2026",
        logo: UofaLogo,
        monogram: "UA",
    },
    {
        role: "Undergraduate Research Assistant",
        company: "University of Alberta",
        date: "May 2023 - Aug 2023",
        description: "Contributed to DreamerV3 by implementing deterministic seeding across components",
        logo: UofaLogo,
        monogram: "UA",
    },
]

const Logo = ({ src, alt, monogram }) => {
    const [failed, setFailed] = useState(false)

    if (failed || !src) {
        return <span className={styles.monogram}>{monogram}</span>
    }

    return (
        <img
            className={styles.logo}
            src={src}
            alt={`${alt} logo`}
            loading="lazy"
            onError={() => setFailed(true)}
        />
    )
}

export const Experience = () => {
    const timelineRef = useRef(null)
    const itemsRef = useRef(null)
    const [curve, setCurve] = useState({ d: "", w: 0, h: 0, dots: [] })

    // Build a dotted "thread" that flows through the cards like links on a
    // chain: it runs through every card (in one edge, out the other) at the
    // same tilt as the card, and loops down to the next card on alternating
    // sides. The whole line is one continuous smooth curve (every part is
    // curved, incl. the runs through the cards). The ends are the outer
    // poke-outs on the far side of the top and bottom cards. Measured from the
    // real layout (incl. rotation) so it adapts to tilt / height / count /
    // width.
    const computeCurve = useCallback(() => {
        const timeline = timelineRef.current
        const itemsEl = itemsRef.current
        if (!timeline || !itemsEl) return

        const tRect = timeline.getBoundingClientRect()
        const w = tRect.width
        const h = tRect.height
        if (w === 0 || h === 0) return

        const peek = 30     // how far the thread pokes past a card edge
        const smooth = 0.16 // curvature of the whole line (Catmull-Rom handles)

        // rotation of an element (radians) from its computed 2D transform
        const angleOf = (el) => {
            const t = getComputedStyle(el).transform
            const m = t && t !== "none" ? /matrix\(([^)]+)\)/.exec(t) : null
            if (!m) return 0
            const [a, b] = m[1].split(",").map(Number)
            return Math.atan2(b, a)
        }

        const items = Array.from(itemsEl.children)
        const n = items.length
        if (n === 0) {
            setCurve({ d: "", w, h, dots: [] })
            return
        }

        // per-card geometry: center, unit axis matching the card's tilt, and
        // the distance from center out to the poke-out point along that axis
        const cards = items.map((el) => {
            const card = el.firstElementChild || el
            const r = card.getBoundingClientRect()
            const th = angleOf(el)
            return {
                cx: (r.left + r.right) / 2 - tRect.left,
                cy: (r.top + r.bottom) / 2 - tRect.top,
                ax: Math.cos(th),
                ay: Math.sin(th),
                half: card.offsetWidth / 2 + peek,
            }
        })

        // side the connector leaving card i uses (alternating). true = +axis.
        const rightSide = (i) => i % 2 === 0
        const edge = (c, right) => {
            const s = right ? 1 : -1
            return { x: c.cx + s * c.half * c.ax, y: c.cy + s * c.half * c.ay }
        }

        // ordered edge points the line threads through, top to bottom
        const nodes = []
        const pushCard = (c, inRight, outRight) => {
            nodes.push(edge(c, inRight), edge(c, outRight))
        }

        const s0 = rightSide(0)
        pushCard(cards[0], !s0, s0) // top card: enter far side (terminus), exit toward next
        for (let i = 1; i < n; i++) {
            const sPrev = rightSide(i - 1)
            if (i === n - 1) {
                pushCard(cards[i], sPrev, !sPrev) // last card: exit far side (terminus)
            } else {
                pushCard(cards[i], sPrev, rightSide(i))
            }
        }

        // let the top end extend out further past the card, along its axis
        const topExtend = 48
        {
            const a = nodes[0]
            const b = nodes[1]
            const len = Math.hypot(a.x - b.x, a.y - b.y) || 1
            a.x += ((a.x - b.x) / len) * topExtend
            a.y += ((a.y - b.y) / len) * topExtend
        }

        // Smooth the whole polyline into one continuous curve (Catmull-Rom),
        // so every part is curved — both the runs through the cards and the
        // loops between them. Handles are capped so the loops stay clean.
        const at = (i) => nodes[Math.max(0, Math.min(nodes.length - 1, i))]
        let d = `M ${nodes[0].x} ${nodes[0].y}`
        for (let i = 0; i < nodes.length - 1; i++) {
            const p0 = at(i - 1)
            const p1 = at(i)
            const p2 = at(i + 1)
            const p3 = at(i + 2)
            const cap = (Math.hypot(p2.x - p1.x, p2.y - p1.y) || 1) * 0.5
            const t1x = p2.x - p0.x
            const t1y = p2.y - p0.y
            const t2x = p3.x - p1.x
            const t2y = p3.y - p1.y
            const l1 = Math.hypot(t1x, t1y) || 1
            const l2 = Math.hypot(t2x, t2y) || 1
            const h1 = Math.min(cap, l1 * smooth)
            const h2 = Math.min(cap, l2 * smooth)
            const c1x = p1.x + (t1x / l1) * h1
            const c1y = p1.y + (t1y / l1) * h1
            const c2x = p2.x - (t2x / l2) * h2
            const c2y = p2.y - (t2y / l2) * h2
            d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`
        }

        setCurve({ d, w, h, dots: [nodes[0], nodes[nodes.length - 1]] })
    }, [])

    useLayoutEffect(() => {
        computeCurve()
        const ro = new ResizeObserver(computeCurve)
        if (timelineRef.current) ro.observe(timelineRef.current)
        if (itemsRef.current) ro.observe(itemsRef.current)
        return () => ro.disconnect()
    }, [computeCurve])

    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.timeline} ref={timelineRef}>
                <span className={styles.rail} aria-hidden="true" />
                <svg
                    className={styles.curve}
                    width={curve.w}
                    height={curve.h}
                    viewBox={`0 0 ${curve.w} ${curve.h}`}
                    aria-hidden="true"
                >
                    <path className={styles.curvePath} d={curve.d} />
                    {curve.dots.map((dot, i) => (
                        <circle key={i} className={styles.curveDot} cx={dot.x} cy={dot.y} r={8} />
                    ))}
                </svg>
                <div className={styles.items} ref={itemsRef}>
                    {experiences.map((exp, id) => (
                        <div key={id} className={styles.item}>
                            <article className={styles.card}>
                                <div className={styles.header}>
                                    <div className={styles.logoWrap}>
                                        <Logo src={exp.logo} alt={exp.company} monogram={exp.monogram} />
                                    </div>
                                    <div className={styles.heading}>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <h4 className={styles.company}>{exp.company}</h4>
                                    </div>
                                </div>
                                <span className={styles.date}>{exp.date}</span>
                                <p className={styles.description}>{exp.description}</p>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
