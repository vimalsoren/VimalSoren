import React, { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const HISTORY_STORAGE_KEY = 'tars-history-vimal';

const SAMPLE_QUESTIONS = [
    "What's Vimal's biggest professional achievement?",
    "What industries or domains has Vimal gained experience in?",
    "How does Vimal approach problem-solving in his projects?",
    "What programming languages and technologies is Vimal most passionate about?",
    "What is Vimal's education background and NCVT ITI qualification?",
    "Can you list some projects and frameworks Vimal has worked on?",
    "What unique skills or expertise does Vimal bring to a team?",
    "How does Vimal stay updated with the latest technology trends?",
    "Can you describe Vimal's work philosophy and values?",
    "How can I contact or view Vimal Soren's resume?",
];

// Vertical side constellation patterns matching vivek9patel.com/tars
const SIDE_CONSTELLATIONS = [
    {
        lines: [
            { x1: 60, y1: 30, x2: 35, y2: 110 },
            { x1: 35, y1: 110, x2: 82, y2: 190 },
            { x1: 82, y1: 190, x2: 42, y2: 280 },
            { x1: 42, y1: 280, x2: 78, y2: 370 },
            { x1: 78, y1: 370, x2: 38, y2: 470 },
            { x1: 38, y1: 470, x2: 72, y2: 560 },
            { x1: 72, y1: 560, x2: 48, y2: 660 },
            { x1: 48, y1: 660, x2: 85, y2: 750 },
            { x1: 85, y1: 750, x2: 55, y2: 860 },
        ],
        nodes: [
            { x: 60, y: 30, r: 3 },
            { x: 35, y: 110, r: 2.5 },
            { x: 82, y: 190, r: 2.5 },
            { x: 42, y: 280, r: 2 },
            { x: 78, y: 370, r: 2.5 },
            { x: 38, y: 470, r: 2 },
            { x: 72, y: 560, r: 2.5 },
            { x: 48, y: 660, r: 2 },
            { x: 85, y: 750, r: 2.5 },
            { x: 55, y: 860, r: 3 },
            { x: 20, y: 420, r: 1.5 },
            { x: 98, y: 620, r: 1.5 },
        ],
    },
    {
        lines: [
            { x1: 60, y1: 20, x2: 60, y2: 880 },
            { x1: 60, y1: 100, x2: 28, y2: 130 },
            { x1: 60, y1: 100, x2: 92, y2: 125 },
            { x1: 60, y1: 240, x2: 25, y2: 265 },
            { x1: 60, y1: 240, x2: 95, y2: 255 },
            { x1: 60, y1: 400, x2: 30, y2: 430 },
            { x1: 60, y1: 400, x2: 90, y2: 415 },
            { x1: 60, y1: 560, x2: 22, y2: 590 },
            { x1: 60, y1: 560, x2: 98, y2: 580 },
            { x1: 60, y1: 720, x2: 32, y2: 750 },
            { x1: 60, y1: 720, x2: 88, y2: 735 },
        ],
        nodes: [
            { x: 60, y: 20, r: 3 },
            { x: 60, y: 100, r: 2.5 },
            { x: 28, y: 130, r: 2 },
            { x: 92, y: 125, r: 2 },
            { x: 60, y: 240, r: 2.5 },
            { x: 25, y: 265, r: 2 },
            { x: 95, y: 255, r: 2 },
            { x: 60, y: 400, r: 3 },
            { x: 30, y: 430, r: 2 },
            { x: 90, y: 415, r: 2 },
            { x: 60, y: 560, r: 2.5 },
            { x: 22, y: 590, r: 2 },
            { x: 98, y: 580, r: 2 },
            { x: 60, y: 720, r: 2.5 },
            { x: 32, y: 750, r: 2 },
            { x: 88, y: 735, r: 2 },
            { x: 60, y: 880, r: 3 },
        ],
    },
    {
        lines: [
            { x1: 25, y1: 40, x2: 55, y2: 140 },
            { x1: 55, y1: 140, x2: 30, y2: 240 },
            { x1: 30, y1: 240, x2: 70, y2: 340 },
            { x1: 70, y1: 340, x2: 40, y2: 450 },
            { x1: 40, y1: 450, x2: 80, y2: 550 },
            { x1: 80, y1: 550, x2: 35, y2: 660 },
            { x1: 35, y1: 660, x2: 75, y2: 760 },
            { x1: 75, y1: 760, x2: 50, y2: 870 },
            { x1: 55, y1: 140, x2: 90, y2: 200 },
            { x1: 70, y1: 340, x2: 100, y2: 400 },
            { x1: 40, y1: 450, x2: 15, y2: 510 },
        ],
        nodes: [
            { x: 25, y: 40, r: 2.5 },
            { x: 55, y: 140, r: 2.5 },
            { x: 30, y: 240, r: 2 },
            { x: 70, y: 340, r: 2.5 },
            { x: 40, y: 450, r: 2 },
            { x: 80, y: 550, r: 2.5 },
            { x: 35, y: 660, r: 2 },
            { x: 75, y: 760, r: 2.5 },
            { x: 50, y: 870, r: 3 },
            { x: 90, y: 200, r: 1.5 },
            { x: 100, y: 400, r: 1.5 },
            { x: 15, y: 510, r: 1.5 },
        ],
    },
    {
        lines: [
            { x1: 60, y1: 50, x2: 40, y2: 150 },
            { x1: 40, y1: 150, x2: 80, y2: 150 },
            { x1: 80, y1: 150, x2: 60, y2: 250 },
            { x1: 60, y1: 250, x2: 35, y2: 380 },
            { x1: 35, y1: 380, x2: 85, y2: 380 },
            { x1: 85, y1: 380, x2: 60, y2: 500 },
            { x1: 60, y1: 500, x2: 30, y2: 630 },
            { x1: 30, y1: 630, x2: 90, y2: 630 },
            { x1: 90, y1: 630, x2: 60, y2: 760 },
            { x1: 60, y1: 760, x2: 60, y2: 870 },
        ],
        nodes: [
            { x: 60, y: 50, r: 3 },
            { x: 40, y: 150, r: 2 },
            { x: 80, y: 150, r: 2 },
            { x: 60, y: 250, r: 2.5 },
            { x: 35, y: 380, r: 2 },
            { x: 85, y: 380, r: 2 },
            { x: 60, y: 500, r: 3 },
            { x: 30, y: 630, r: 2 },
            { x: 90, y: 630, r: 2 },
            { x: 60, y: 760, r: 2.5 },
            { x: 60, y: 870, r: 3 },
        ],
    },
    {
        lines: [
            { x1: 45, y1: 60, x2: 70, y2: 180 },
            { x1: 70, y1: 180, x2: 30, y2: 310 },
            { x1: 30, y1: 310, x2: 85, y2: 420 },
            { x1: 85, y1: 420, x2: 40, y2: 540 },
            { x1: 40, y1: 540, x2: 75, y2: 680 },
            { x1: 75, y1: 680, x2: 35, y2: 800 },
            { x1: 45, y1: 60, x2: 20, y2: 140 },
            { x1: 85, y1: 420, x2: 105, y2: 500 },
        ],
        nodes: [
            { x: 45, y: 60, r: 2.5 },
            { x: 70, y: 180, r: 2 },
            { x: 30, y: 310, r: 2.5 },
            { x: 85, y: 420, r: 2.5 },
            { x: 40, y: 540, r: 2 },
            { x: 75, y: 680, r: 2.5 },
            { x: 35, y: 800, r: 3 },
            { x: 20, y: 140, r: 1.5 },
            { x: 105, y: 500, r: 1.5 },
            { x: 55, y: 900, r: 1.5 },
        ],
    },
];

function SideConstellation({ layout, side }) {
    if (!layout) return null;
    const mirror = side === 'right';
    return (
        <div
            className={`fixed top-0 z-0 hidden md:block h-screen w-14 lg:w-20 pointer-events-none select-none ${
                side === 'left' ? 'left-0' : 'right-0'
            }`}
            aria-hidden="true"
        >
            <svg viewBox="0 0 120 900" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <g transform={mirror ? 'scale(-1, 1) translate(-120, 0)' : undefined}>
                    <g className="text-[#ff0059] opacity-25" stroke="currentColor" strokeWidth="0.75" fill="none">
                        {layout.lines.map((line, idx) => (
                            <line key={idx} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />
                        ))}
                    </g>
                    <g className="text-[#ff0059]" fill="currentColor">
                        {layout.nodes.map((node, idx) => (
                            <circle key={idx} cx={node.x} cy={node.y} r={node.r ?? 2.5} />
                        ))}
                    </g>
                </g>
            </svg>
        </div>
    );
}

function pickRandomQuestions(pool, count = 3, exclude = []) {
    const filtered = pool.filter((q) => !exclude.includes(q));
    const source = filtered.length >= count ? filtered : pool;
    return [...source].sort(() => 0.5 - Math.random()).slice(0, count);
}

function generateTarsResponse(rawQuery) {
    const q = rawQuery.toLowerCase();

    if (q.includes('achievement') || q.includes('industry') || q.includes('industries') || q.includes('domain') || q.includes('experience')) {
        return (
            "**Vimal Soren's Background & Domains:**\n\n" +
            "• **Software & Web Engineering:** Built an interactive Vimal OS web portfolio using **Next.js, React, and Tailwind CSS**, along with photography gallery web apps.\n" +
            "• **Mechanical & Industrial Trade:** **NCVT ITI Fitter** graduate (84.15%, First Division) skilled in precision benchwork, assembly, measurement, and workshop maintenance.\n" +
            "• **Computer Applications:** **ADCA Certified** across operating systems, spreadsheets, document workflows, and internet systems."
        );
    }

    if (q.includes('approach') || q.includes('problem') || q.includes('philosophy') || q.includes('value') || q.includes('trend') || q.includes('updated')) {
        return (
            "**How Vimal Approaches Work & Problem-Solving:**\n\n" +
            "• Combines mechanical precision from his **ITI Fitter** training with structured debugging and component architecture in **React & Next.js**.\n" +
            "• Focuses on building practical tools with clean UI, fast performance, and hands-on experimentation across web apps, Python, Flutter, and Linux."
        );
    }

    if (q.includes('who') || q.includes('about') || q.includes('introduce') || q.includes('hobby') || q.includes('hobbies')) {
        return (
            "**Vimal Soren** is a **Frontend Engineer**, **NCVT ITI Fitter**, and **ADCA Certified** professional based in **Dumka, Jharkhand, India**.\n\n" +
            "He enjoys building practical web software with **Next.js, React, and Tailwind CSS**, and brings hands-on mechanical discipline alongside modern software engineering."
        );
    }

    if (q.includes('education') || q.includes('certif') || q.includes('iti') || q.includes('adca') || q.includes('school') || q.includes('qualification')) {
        return (
            "**Education & Certifications:**\n\n" +
            "• **ITI Fitter (2019)** — NCVT, Gandhiyan ITI, Babupur, Dumka, Jharkhand (*First Division · 84.15%*)\n" +
            "• **ADCA (12 Months)** — Advanced Diploma in Computer Applications\n" +
            "• **Intermediate (2017)** — JAC Board, +2 National High School, Dumka (*Second Division · 53%*)\n" +
            "• **High School (2015)** — JAC Board, St. Mary's High School, Bakshi Bandh, Dumka (*First Division · 71%*)"
        );
    }

    if (q.includes('skill') || q.includes('tech') || q.includes('language') || q.includes('stack') || q.includes('framework') || q.includes('unique')) {
        return (
            "**Technical Skills & Tools:**\n\n" +
            "• **Languages:** JavaScript, C++, Python, Dart, HTML5, Sass\n" +
            "• **Frameworks & Libraries:** Next.js, React, Flutter, Tailwind CSS, Node.js, Redux, jQuery\n" +
            "• **Tools & Platforms:** Git, Firebase, Vimal Linux, VS Code\n" +
            "• **Mechanical Trade:** NCVT ITI Fitter — precision benchwork, assembly & measurement"
        );
    }

    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('github') || q.includes('repo')) {
        return (
            "**Featured Projects:**\n\n" +
            "1. **Vimal Portfolio (Vimal OS Web Simulation)**\n" +
            "Interactive Vimal desktop portfolio built with Next.js & Tailwind CSS.\n" +
            "https://github.com/vimaljuniorofficial/VimalSoren\n\n" +
            "2. **Vimal Photos**\n" +
            "Photography portfolio and image gallery showcase built with React & Tailwind CSS.\n" +
            "https://github.com/vimaljuniorofficial/VimalPhotos"
        );
    }

    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('hire') || q.includes('linkedin') || q.includes('resume') || q.includes('cv')) {
        return (
            "**Contact Vimal Soren & Resume:**\n\n" +
            "• **Email:** vimalsorenofficial@gmail.com\n" +
            "• **GitHub:** https://github.com/vimaljuniorofficial\n" +
            "• **LinkedIn:** https://linkedin.com/in/vimaljunior\n" +
            "• **Resume PDF:** /files/Vimal-Soren-Resume.pdf\n" +
            "• **Location:** Dumka, Jharkhand, India"
        );
    }

    return (
        `I received your question: **"${rawQuery}"**.\n\n` +
        "Try asking about Vimal's **education (ITI Fitter & ADCA)**, **technical skills**, **GitHub projects**, **resume**, or **contact details**."
    );
}

function renderFormattedText(text) {
    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
        const parts = line.split(/(\*\*[^*]+\*\*|\*[^*]+\*|https?:\/\/[^\s]+|\/files\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g);
        return (
            <React.Fragment key={lineIdx}>
                {parts.map((part, partIdx) => {
                    if (!part) return null;
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={partIdx} className="font-semibold">{part.slice(2, -2)}</strong>;
                    }
                    if (part.startsWith('*') && part.endsWith('*')) {
                        return <em key={partIdx} className="italic">{part.slice(1, -1)}</em>;
                    }
                    if (part.startsWith('http://') || part.startsWith('https://')) {
                        return (
                            <a
                                key={partIdx}
                                href={part}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-2 break-all text-[#ff0059]"
                            >
                                {part}
                            </a>
                        );
                    }
                    if (part.startsWith('/files/')) {
                        return (
                            <a
                                key={partIdx}
                                href={part}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-2 text-[#ff0059]"
                            >
                                {part}
                            </a>
                        );
                    }
                    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
                        return (
                            <a
                                key={partIdx}
                                href={`mailto:${part}`}
                                className="underline underline-offset-2 text-[#ff0059]"
                            >
                                {part}
                            </a>
                        );
                    }
                    return <React.Fragment key={partIdx}>{part}</React.Fragment>;
                })}
                {lineIdx < lines.length - 1 && <br />}
            </React.Fragment>
        );
    });
}

function TarsAvatar({ sizeClass = 'w-8 h-8' }) {
    return (
        <div className={`${sizeClass} rounded-full overflow-hidden border border-black bg-[#f0f0f0]/20 flex items-center justify-center flex-shrink-0`}>
            <div
                className="w-full h-full"
                style={{
                    WebkitMaskImage: 'url(/themes/Yaru/apps/tars.svg)',
                    maskImage: 'url(/themes/Yaru/apps/tars.svg)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskSize: '74%',
                    maskSize: '74%',
                    backgroundColor: '#000000',
                }}
            />
        </div>
    );
}

function UserAvatar() {
    return (
        <div className="w-8 h-8 rounded-full overflow-hidden border border-black bg-white flex items-center justify-center flex-shrink-0">
            <img
                src="/images/logos/logo.jpg"
                alt="User"
                className="w-full h-full object-cover"
            />
        </div>
    );
}

function TarsChatPanel({
    messages,
    input,
    setInput,
    isTyping,
    sampleQuestions,
    cooldownMs,
    cooldownNotice,
    scrollContainerRef,
    inputRef,
    onSend,
    onRefreshQuestions,
    className = '',
}) {
    return (
        <div className={`flex flex-col h-full min-h-0 ${className}`}>
            {/* Clean Header */}
            <div className="border-b border-black p-4 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                    <TarsAvatar sizeClass="w-8 h-8" />
                    <div>
                        <p className="font-semibold text-black">TARS</p>
                        <p className="text-sm font-medium text-[#333]">Online</p>
                    </div>
                </div>
            </div>

            {/* Body (stacked at top inside min-h-screen card matching screenshot) */}
            <div className="flex-1 overflow-hidden flex flex-col min-h-0">
                <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.length > 0 ? (
                        <>
                            {messages.map((item, idx) =>
                                item.from === 'user' ? (
                                    <div key={idx} className="flex justify-end">
                                        <div className="flex items-start gap-3 max-w-full sm:max-w-xs md:max-w-sm">
                                            <div className="bg-[#ff0059] text-white px-4 py-2">
                                                <p className="text-sm">{item.message}</p>
                                            </div>
                                            <UserAvatar />
                                        </div>
                                    </div>
                                ) : (
                                    <div key={idx} className="flex justify-start">
                                        <div className="flex items-start gap-3 max-w-full sm:max-w-md md:max-w-lg">
                                            <TarsAvatar sizeClass="w-8 h-8" />
                                            <div className="bg-[#f0f0f0] px-4 py-2">
                                                <div className="text-sm leading-relaxed text-black">
                                                    {renderFormattedText(item.message)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="flex items-start gap-3 max-w-full sm:max-w-xs md:max-w-sm">
                                        <TarsAvatar sizeClass="w-8 h-8" />
                                        <div className="bg-[#f0f0f0] px-4 py-2">
                                            <p className="text-sm text-[#333]">Thinking...</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="h-full flex items-center justify-center">
                            <div className="text-center space-y-4 max-w-md">
                                <p className="text-lg font-semibold text-black">Hey I&apos;m TARS!</p>
                                <p className="text-[#333]">
                                    I&apos;m here to help you get to know Vimal better. Ask me anything about his work, projects, or experience!
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Sample Questions Row with Light Border + Scrollbar + Refresh */}
                {sampleQuestions.length > 0 && (
                    <div className="flex justify-between items-start gap-2 mb-1 px-4">
                        <div className="flex flex-nowrap gap-2 overflow-x-auto pb-1">
                            {sampleQuestions.map((question, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => onSend(question)}
                                    className="inline-flex items-center border border-gray-300 text-xs font-semibold py-1 px-2 whitespace-nowrap bg-white text-black hover:bg-[#f0f0f0] transition-colors cursor-pointer"
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={onRefreshQuestions}
                            aria-label="Refresh sample questions"
                            title="Refresh sample questions"
                            className="inline-flex items-center justify-center h-6 w-6 p-0 flex-shrink-0 hover:bg-[#f0f0f0] transition-colors cursor-pointer mt-0.5"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-3.5 w-3.5"
                            >
                                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                                <path d="M21 3v5h-5" />
                                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                                <path d="M8 16H3v5" />
                            </svg>
                        </button>
                    </div>
                )}

                {cooldownNotice && (
                    <p className="px-4 text-xs pb-1 text-[#ff0059]">
                        {cooldownNotice}
                    </p>
                )}

                {/* Input Row */}
                <div className="py-2 px-4 flex-shrink-0">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            onSend();
                        }}
                        className="flex gap-2"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me anything about Vimal..."
                            disabled={isTyping}
                            className="flex h-9 w-full border border-black bg-transparent px-3 py-1 text-base md:text-sm shadow-sm transition-colors placeholder:text-[#333]/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isTyping || cooldownMs > 0}
                            aria-label="Send message"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors shadow h-9 w-9 flex-shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-[#ff0059] text-white hover:bg-[#ff0059]/90"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                                aria-hidden="true"
                            >
                                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                                <path d="m21.854 2.147-10.94 10.939" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default function TarsPage() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [sampleQuestions, setSampleQuestions] = useState([]);
    const [sideLayout, setSideLayout] = useState(SIDE_CONSTELLATIONS[4]);
    const [cooldownMs, setCooldownMs] = useState(0);
    const [cooldownNotice, setCooldownNotice] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const scrollContainerRef = useRef(null);
    const drawerScrollRef = useRef(null);
    const inputRef = useRef(null);
    const drawerInputRef = useRef(null);
    const lastSentAtRef = useRef(0);

    // Custom circular cursor ring + pink dot
    const ringRef = useRef(null);
    const dotRef = useRef(null);
    const mousePosRef = useRef({ x: -100, y: -100 });
    const rafRef = useRef(null);

    useEffect(() => {
        try {
            const savedHistory = localStorage.getItem(HISTORY_STORAGE_KEY);
            if (savedHistory) {
                const parsed = JSON.parse(savedHistory);
                if (Array.isArray(parsed)) {
                    setMessages(parsed);
                }
            }
        } catch {
            // Ignore localStorage parse errors
        }
        setSampleQuestions(pickRandomQuestions(SAMPLE_QUESTIONS, 3));
        setSideLayout(SIDE_CONSTELLATIONS[Math.floor(Math.random() * SIDE_CONSTELLATIONS.length)]);
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(messages));
        } catch {
            // Ignore storage errors
        }
    }, [messages]);

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
        if (drawerScrollRef.current) {
            drawerScrollRef.current.scrollTop = drawerScrollRef.current.scrollHeight;
        }
    }, [messages, isTyping, drawerOpen]);

    useEffect(() => {
        if (cooldownMs <= 0) return;
        const timer = setTimeout(() => {
            const remaining = Math.max(0, 1200 - (Date.now() - lastSentAtRef.current));
            setCooldownMs(remaining);
            if (remaining === 0) setCooldownNotice('');
        }, 100);
        return () => clearTimeout(timer);
    }, [cooldownMs]);

    useEffect(() => {
        const updateCursor = () => {
            const { x, y } = mousePosRef.current;
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${x - 2}px, ${y - 2}px, 0)`;
                dotRef.current.style.opacity = x >= 0 ? '1' : '0';
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`;
                ringRef.current.style.opacity = x >= 0 ? '1' : '0';
            }
            rafRef.current = null;
        };

        const handleMouseMove = (e) => {
            mousePosRef.current = { x: e.clientX, y: e.clientY };
            if (rafRef.current === null) {
                rafRef.current = requestAnimationFrame(updateCursor);
            }
        };

        const handleMouseLeave = () => {
            mousePosRef.current = { x: -100, y: -100 };
            if (ringRef.current) ringRef.current.style.opacity = '0';
            if (dotRef.current) dotRef.current.style.opacity = '0';
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const refreshSampleQuestions = useCallback(() => {
        setSampleQuestions((prev) => pickRandomQuestions(SAMPLE_QUESTIONS, 3, prev));
    }, []);

    const handleSend = (textToSend) => {
        const query = (textToSend ?? input).trim();
        if (!query || isTyping) return;

        const now = Date.now();
        if (now - lastSentAtRef.current < 1200) {
            setCooldownNotice('Please wait a moment before sending another message.');
            return;
        }

        lastSentAtRef.current = now;
        setCooldownMs(1200);
        setCooldownNotice('');

        if (!textToSend) {
            setInput('');
        }

        setMessages((prev) => [
            ...prev,
            { from: 'user', message: query, timestamp: now },
        ]);
        setIsTyping(true);

        setTimeout(() => {
            const answer = generateTarsResponse(query);
            setMessages((prev) => [
                ...prev,
                { from: 'tars', message: answer, timestamp: Date.now() },
            ]);
            setIsTyping(false);
            setSampleQuestions((prev) => pickRandomQuestions(SAMPLE_QUESTIONS, 3, prev));
        }, 480);
    };

    return (
        <div
            className="bg-white text-black min-h-screen transition-colors duration-300 selection:bg-[#ff0059] selection:text-white relative overflow-x-hidden"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif' }}
        >
            <Head>
                <title>TARS — Vimal Soren</title>
                <meta name="description" content="Ask TARS anything about Vimal Soren" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/jpeg" href="/images/logos/logo.jpg" />
                <link rel="shortcut icon" type="image/jpeg" href="/images/logos/logo.jpg" />
                <link rel="apple-touch-icon" href="/images/logos/logo.jpg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            {/* Circular Cursor Ring & Pink Dot */}
            <div
                ref={ringRef}
                className="top-0 left-0 fixed will-change-transform z-[999] pointer-events-none border-2 border-black hidden md:flex rounded-full duration-150"
                style={{
                    width: '32px',
                    height: '32px',
                    opacity: 0,
                    transitionProperty: 'width, height, border-radius, border-color, transform, opacity',
                    transitionTimingFunction: 'ease-out',
                }}
            />
            <div
                ref={dotRef}
                className="top-0 left-0 fixed w-1.5 h-1.5 rounded-full bg-[#ff0059] z-[999] pointer-events-none hidden md:flex will-change-transform"
                style={{ opacity: 0 }}
            />

            {/* Both Side Constellation Decorations (Left & Mirrored Right) */}
            <SideConstellation layout={sideLayout} side="left" />
            <SideConstellation layout={sideLayout} side="right" />

            {/* Whole Body Stacked at Top Inside min-h-screen Card */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-16 lg:px-20 xl:px-6 py-12 min-h-screen">
                <div className="border border-black bg-white h-full min-h-screen">
                    <TarsChatPanel
                        messages={messages}
                        input={input}
                        setInput={setInput}
                        isTyping={isTyping}
                        sampleQuestions={sampleQuestions}
                        cooldownMs={cooldownMs}
                        cooldownNotice={cooldownNotice}
                        scrollContainerRef={scrollContainerRef}
                        inputRef={inputRef}
                        onSend={handleSend}
                        onRefreshQuestions={refreshSampleQuestions}
                    />
                </div>
            </div>

            {/* Slide-Over TARS Drawer when clicking the floating TARS button */}
            {drawerOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <div
                        className="fixed inset-0 bg-black/50"
                        onClick={() => setDrawerOpen(false)}
                        aria-hidden="true"
                    />
                    <div className="relative z-10 w-full sm:max-w-md bg-white border-l border-black flex flex-col h-full">
                        <button
                            type="button"
                            onClick={() => setDrawerOpen(false)}
                            aria-label="Close Tars chat"
                            className="absolute right-4 top-4 z-20 inline-flex items-center justify-center h-7 w-7 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                        <TarsChatPanel
                            className="flex-1"
                            messages={messages}
                            input={input}
                            setInput={setInput}
                            isTyping={isTyping}
                            sampleQuestions={sampleQuestions}
                            cooldownMs={cooldownMs}
                            cooldownNotice={cooldownNotice}
                            scrollContainerRef={drawerScrollRef}
                            inputRef={drawerInputRef}
                            onSend={handleSend}
                            onRefreshQuestions={refreshSampleQuestions}
                        />
                    </div>
                </div>
            )}

            {/* Floating Dock Action Buttons */}
            <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
                <div className="relative group flex items-center">
                    <span className="pointer-events-none absolute right-full mr-2 bg-[#ff0059] text-white text-xs font-medium px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                        Boot Vimal
                    </span>
                    <Link
                        href="/"
                        aria-label="Boot Vimal"
                        className="inline-flex items-center justify-center text-sm font-medium transition-colors shadow-sm h-9 w-9 border border-black bg-white hover:bg-[#f0f0f0] active:scale-95"
                    >
                        <img src="/images/logos/logo.jpg" alt="" aria-hidden="true" className="h-6 w-6 rounded-full object-cover grayscale contrast-125" />
                    </Link>
                </div>
                <div className="relative group flex items-center">
                    <span className="pointer-events-none absolute right-full mr-2 bg-[#ff0059] text-white text-xs font-medium px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                        Ask Tars about Vimal
                    </span>
                    <button
                        type="button"
                        onClick={() => setDrawerOpen(true)}
                        aria-label="Open Tars chat"
                        className="inline-flex items-center justify-center text-sm font-medium transition-colors shadow-sm h-9 w-9 border border-black bg-white hover:bg-[#f0f0f0] active:scale-95 cursor-pointer"
                    >
                        <div
                            className="h-6 w-6"
                            style={{
                                WebkitMaskImage: 'url(/themes/Yaru/apps/tars.svg)',
                                maskImage: 'url(/themes/Yaru/apps/tars.svg)',
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                maskPosition: 'center',
                                WebkitMaskSize: 'contain',
                                maskSize: 'contain',
                                backgroundColor: '#000000',
                            }}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
