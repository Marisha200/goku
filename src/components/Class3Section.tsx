/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  Flower2,
  Heart,
  Sun,
  Sparkles,
  Activity,
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  Play,
  Pause,
  RotateCw,
  CheckCircle2,
  Download,
  Eye,
  ExternalLink,
  Flame
} from "lucide-react";

import {
  CLASS3_INICIO,
  CLASS3_SANACION_SATORI,
  CLASS3_ANSHIN_AFIRMACIONES,
  CLASS3_DAIKOMYO,
  CLASS3_PRACTICAS,
  CLASS3_OFFICIAL_PDF,
  CLASS3_MATCHING_ITEMS,
  CLASS3_TRIVIA_QUESTIONS,
  CLASS3_CIERRE
} from "../data/class3Content";
import {
  ClassVideosMaterial,
  ClassVideoItem,
  ClassMaterialItem
} from "./ClassVideosMaterial";

interface Class3SectionProps {
  activeTab: string;
  onNavigateTab: (tabId: string) => void;
}

function MindfulTimer({
  initialSeconds,
  label
}: {
  initialSeconds: number;
  label: string;
}) {
  const [secondsLeft, setSecondsLeft] = useState<number>(initialSeconds);
  const [running, setRunning] = useState<boolean>(false);

  useEffect(() => {
    setSecondsLeft(initialSeconds);
    setRunning(false);
  }, [initialSeconds, label]);

  useEffect(() => {
    if (!running) return;
    if (secondsLeft <= 0) {
      setRunning(false);
      return;
    }
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [running, secondsLeft]);

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  const progress =
    initialSeconds > 0 ? ((initialSeconds - secondsLeft) / initialSeconds) * 100 : 0;

  return (
    <div className="bg-white/90 border border-natural-border rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-3xs">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-natural-cream border border-natural-border flex items-center justify-center text-natural-primary font-mono text-xs font-bold">
          {formatted}
        </div>
        <div>
          <p className="text-xs font-serif font-bold text-natural-dark flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-natural-primary" />
            <span>{label}</span>
          </p>
          <p className="text-[11px] text-natural-text-muted">
            {secondsLeft === 0
              ? "Tiempo completado. Observá cómo se siente tu energía ahora."
              : running
              ? "Respirá con serenidad y dejá que la luz fluya."
              : "Temporizador suave opcional para acompañar tu práctica."}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <div className="hidden sm:block w-24 h-1.5 bg-natural-border/60 rounded-full overflow-hidden mr-1">
          <div
            className="h-full bg-natural-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            if (secondsLeft === 0) setSecondsLeft(initialSeconds);
            setRunning((r) => !r);
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-natural-primary text-white text-xs font-semibold hover:bg-natural-primary/95 transition-colors"
        >
          {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span>{running ? "Pausar" : secondsLeft === 0 ? "Reiniciar" : "Iniciar"}</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setRunning(false);
            setSecondsLeft(initialSeconds);
          }}
          aria-label="Reiniciar temporizador"
          className="p-2 rounded-xl bg-natural-cream hover:bg-natural-sand text-natural-dark transition-colors"
        >
          <RotateCw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

const DAIKOMYO_SVG_STROKES: {
  num: number;
  d: string;
  lx: number;
  ly: number;
  kanji: string;
}[] = [
  // 大 (1-3)
  { num: 1, d: "M 55 58 L 165 58", lx: 38, ly: 62, kanji: "大" },
  { num: 2, d: "M 110 22 Q 112 82 55 122", lx: 95, ly: 28, kanji: "大" },
  { num: 3, d: "M 110 62 Q 134 98 168 122", lx: 158, ly: 92, kanji: "大" },
  // 光 (4-9)
  { num: 4, d: "M 110 135 L 110 172", lx: 96, ly: 142, kanji: "光" },
  { num: 5, d: "M 74 148 Q 82 158 88 168", lx: 58, ly: 152, kanji: "光" },
  { num: 6, d: "M 146 146 Q 138 158 130 168", lx: 162, ly: 150, kanji: "光" },
  { num: 7, d: "M 52 178 L 168 178", lx: 36, ly: 184, kanji: "光" },
  { num: 8, d: "M 94 180 Q 90 225 54 248", lx: 68, ly: 220, kanji: "光" },
  { num: 9, d: "M 122 180 L 122 232 Q 122 246 144 246 L 160 246 Q 166 246 164 232", lx: 138, ly: 214, kanji: "光" },
  // 明 · 日 (10-13)
  { num: 10, d: "M 62 284 L 62 362", lx: 44, ly: 325, kanji: "明" },
  { num: 11, d: "M 62 284 L 98 284 L 98 358", lx: 80, ly: 271, kanji: "明" },
  { num: 12, d: "M 62 320 L 98 320", lx: 79, ly: 311, kanji: "明" },
  { num: 13, d: "M 62 356 L 98 356", lx: 79, ly: 347, kanji: "明" },
  // 明 · 月 (14-17)
  { num: 14, d: "M 122 276 L 122 346 Q 122 374 106 392", lx: 109, ly: 324, kanji: "明" },
  { num: 15, d: "M 122 276 L 160 276 L 160 382 Q 160 392 148 386", lx: 144, ly: 263, kanji: "明" },
  { num: 16, d: "M 122 310 L 160 310", lx: 141, ly: 301, kanji: "明" },
  { num: 17, d: "M 122 342 L 160 342", lx: 141, ly: 333, kanji: "明" }
];

function DaikomyoStrokeDiagram({
  strokeDescriptions
}: {
  strokeDescriptions: string[];
}) {
  const [activeStroke, setActiveStroke] = useState<number | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setActiveStroke((prev) => {
        if (prev === null || prev >= 17) {
          setPlaying(false);
          return 17;
        }
        return prev + 1;
      });
    }, 950);
    return () => clearInterval(timer);
  }, [playing]);

  return (
    <div className="bg-natural-eggshell/60 border border-natural-border rounded-2xl p-4 flex flex-col items-center space-y-3">
      <div className="flex items-center justify-between w-full gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-natural-primary">
          Diagrama Interactivo · 17 Trazos
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => {
              if (playing) {
                setPlaying(false);
              } else {
                setActiveStroke(1);
                setPlaying(true);
              }
            }}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-natural-primary text-white text-[10px] font-semibold hover:bg-natural-primary/95 transition-colors"
          >
            {playing ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            <span>{playing ? "Pausar" : "Animar"}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setPlaying(false);
              setActiveStroke(null);
            }}
            className="px-2.5 py-1 rounded-lg bg-white border border-natural-border text-[10px] font-semibold text-natural-dark hover:bg-natural-cream transition-colors"
          >
            Ver todos
          </button>
        </div>
      </div>

      <div className="w-full max-w-[230px] bg-white rounded-2xl border border-natural-border p-3 shadow-3xs">
        <svg
          viewBox="0 0 220 410"
          className="w-full h-auto"
          role="img"
          aria-label="Símbolo Daikomyo con sus 17 trazos numerados"
        >
          <line x1="110" y1="12" x2="110" y2="398" stroke="#ebe7dc" strokeDasharray="3 4" strokeWidth="1" />
          <line x1="25" y1="130" x2="195" y2="130" stroke="#ebe7dc" strokeDasharray="3 4" strokeWidth="1" />
          <line x1="25" y1="255" x2="195" y2="255" stroke="#ebe7dc" strokeDasharray="3 4" strokeWidth="1" />

          {DAIKOMYO_SVG_STROKES.map((st) => {
            const isCurrent = activeStroke === st.num;
            const isDone = activeStroke === null || st.num <= activeStroke;
            return (
              <g
                key={st.num}
                onClick={() => {
                  setPlaying(false);
                  setActiveStroke(st.num);
                }}
                className="cursor-pointer"
              >
                <path
                  d={st.d}
                  fill="none"
                  stroke={
                    isCurrent
                      ? "#b91c1c"
                      : isDone
                      ? "#1f241c"
                      : "#dedad0"
                  }
                  strokeWidth={isCurrent ? 9.5 : 8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-colors duration-200"
                />
                <circle
                  cx={st.lx}
                  cy={st.ly - 3}
                  r="8"
                  fill={isCurrent ? "#b91c1c" : "#ffffff"}
                  stroke={isCurrent ? "#b91c1c" : "#dc2626"}
                  strokeWidth="1.2"
                />
                <text
                  x={st.lx}
                  y={st.ly}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="700"
                  fontFamily="monospace"
                  fill={isCurrent ? "#ffffff" : "#b91c1c"}
                >
                  {st.num}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="w-full space-y-2">
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => {
              setPlaying(false);
              setActiveStroke((prev) => (prev === null || prev <= 1 ? 17 : prev - 1));
            }}
            className="px-2.5 py-1 rounded-lg bg-white border border-natural-border text-[11px] font-semibold text-natural-dark hover:bg-natural-cream"
          >
            ← Anterior
          </button>
          <span className="text-[11px] font-mono font-bold text-natural-primary">
            {activeStroke ? `Trazo ${activeStroke} / 17` : "Tocá un número o animá"}
          </span>
          <button
            type="button"
            onClick={() => {
              setPlaying(false);
              setActiveStroke((prev) => (prev === null || prev >= 17 ? 1 : prev + 1));
            }}
            className="px-2.5 py-1 rounded-lg bg-white border border-natural-border text-[11px] font-semibold text-natural-dark hover:bg-natural-cream"
          >
            Siguiente →
          </button>
        </div>

        <p className="text-[11px] text-natural-dark bg-white/90 border border-natural-border rounded-xl p-2.5 text-center leading-relaxed min-h-[42px] flex items-center justify-center">
          {activeStroke
            ? strokeDescriptions[activeStroke - 1]
            : "Hacé clic en cualquier número rojo (1 al 17) o presioná Animar para ver el orden del trazado."}
        </p>
      </div>
    </div>
  );
}

export const Class3Section: React.FC<Class3SectionProps> = ({
  activeTab,
  onNavigateTab
}) => {
  // Module 2: Anshin Ritsumei checklist + Affirmation selector
  const [completedAnshin, setCompletedAnshin] = useState<Record<string, boolean>>({});
  const [selectedAffirmationIdx, setSelectedAffirmationIdx] = useState<number>(0);
  const [personalAffirmation, setPersonalAffirmation] = useState<string>("");

  // Sheet PDF page selector (Page 1: 17 strokes / Page 2: 22 strokes)
  const [daikomyoSheetPage, setDaikomyoSheetPage] = useState<1 | 2>(1);

  // Module 4: Shinpiden practice selector + Entrenamiento Solar point helper
  const [selectedPracticeId, setSelectedPracticeId] = useState<string>(
    CLASS3_PRACTICAS[0].id
  );
  const [solarStage, setSolarStage] = useState<number>(0);

  // Evaluation Game 1: Concept matching
  const [matchingGuesses, setMatchingGuesses] = useState<Record<string, string>>({});
  const [matchingChecked, setMatchingChecked] = useState<boolean>(false);

  // Evaluation Game 2: Trivia & Final Reflection & Diploma
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [finalReflection, setFinalReflection] = useState<string>("");
  const [diplomaName, setDiplomaName] = useState<string>("");
  const [viewingDiploma, setViewingDiploma] = useState<boolean>(false);

  // Videos y Material seleccionados por la docente (YouTube + PDFs + Blog Links)
  const c3Videos: ClassVideoItem[] = [];
  const c3Materials: ClassMaterialItem[] = [
    {
      id: "manual-shinpiden-c3",
      kind: "pdf_upload",
      title: CLASS3_OFFICIAL_PDF.title,
      description: `${CLASS3_OFFICIAL_PDF.author} · ${CLASS3_OFFICIAL_PDF.pages}. ${CLASS3_OFFICIAL_PDF.description}`,
      url: CLASS3_OFFICIAL_PDF.url,
      fileName: "Manual-Reiki-Nivel-III-Shinpiden-RinconZen.pdf"
    },
    {
      id: "lamina-daikomyo-c3",
      kind: "pdf_upload",
      title: CLASS3_DAIKOMYO.symbolSheetPdf.title,
      description: CLASS3_DAIKOMYO.symbolSheetPdf.subtitle,
      url: CLASS3_DAIKOMYO.symbolSheetPdf.url,
      fileName: "Simbolo-Daikomyo-Trazos-RinconZen.pdf"
    }
  ];

  const solarPoints = [
    { label: "1. Manos al Cielo", count: "Conexión" },
    { label: "2. Sobre la Cabeza", count: "Contá hasta 10" },
    { label: "3. Lados de la Cabeza", count: "Contá hasta 10" },
    { label: "4. Garganta / Cuello", count: "Contá hasta 10" },
    { label: "5. Corazón", count: "Contá hasta 10" },
    { label: "6. Abdomen Superior", count: "Contá hasta 10" },
    { label: "7. Tanden y Sacro", count: "Contá hasta 20" }
  ];

  const activePractice =
    CLASS3_PRACTICAS.find((p) => p.id === selectedPracticeId) || CLASS3_PRACTICAS[0];

  const matchingScore = CLASS3_MATCHING_ITEMS.reduce(
    (acc, item) => (matchingGuesses[item.id] === item.id ? acc + 1 : acc),
    0
  );

  const quizScore = CLASS3_TRIVIA_QUESTIONS.reduce(
    (acc, q) => (quizAnswers[q.id] === q.correctIndex ? acc + 1 : acc),
    0
  );
  const quizPassed = quizScore >= 5;

  return (
    <>
      {/* === C3 INICIO: EL MAESTRO INTERIOR Y FUNDAMENTOS DE SHINPIDEN === */}
      {activeTab === "c3_inicio" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Flower2 className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS3_INICIO.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS3_INICIO.badge}
            </span>
          </div>

          {/* Carta de Marina: El Maestro Interior */}
          <div className="bg-[#f5f2e9] p-6 sm:p-7 rounded-3xl border border-[#e8e4d8] shadow-sm relative overflow-hidden space-y-3">
            <div className="absolute right-4 top-4 text-natural-primary pointer-events-none">
              <Flower2 className="w-24 h-24 stroke-1 opacity-10" />
            </div>
            <h4 className="font-serif text-lg font-bold text-natural-dark relative z-10">
              {CLASS3_INICIO.welcomeTitle}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-natural-dark/90 leading-relaxed relative z-10">
              {CLASS3_INICIO.welcomeParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            <div className="flex justify-end pt-1 relative z-10">
              <span className="font-serif italic font-bold text-sm text-natural-primary">
                {CLASS3_INICIO.welcomeAuthor} 🌸
              </span>
            </div>
          </div>

          {/* Shinpiden Kanji Breakdown */}
          <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-4">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              {CLASS3_INICIO.shinpidenKanji.title}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CLASS3_INICIO.shinpidenKanji.parts.map((part) => (
                <div
                  key={part.romaji}
                  className="p-4 rounded-2xl border border-natural-border bg-natural-eggshell/50 text-center space-y-1.5"
                >
                  <div className="text-3xl font-serif font-bold text-natural-primary">
                    {part.kanji}
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-natural-dark">
                    {part.romaji}
                  </div>
                  <p className="text-xs text-natural-text-muted leading-relaxed">
                    {part.meaning}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-natural-eggshell border-l-4 border-natural-primary p-4 rounded-r-2xl">
              <p className="text-xs sm:text-sm font-serif italic text-natural-dark">
                En conjunto, Shinpiden significa:{" "}
                <strong className="not-italic text-natural-primary">
                  &ldquo;{CLASS3_INICIO.shinpidenKanji.unifiedMeaning}&rdquo;
                </strong>
              </p>
            </div>
            <div className="space-y-2 text-xs text-natural-text-muted leading-relaxed">
              {CLASS3_INICIO.shinpidenKanji.notes.map((n, idx) => (
                <p key={idx}>{n}</p>
              ))}
            </div>
          </div>

          {/* Los 3 Fundamentos Profundos de Shinpiden */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              Tres Fundamentos Esenciales de Shinpiden para la Maestría
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CLASS3_INICIO.foundations.map((f) => (
                <div
                  key={f.pillar}
                  className="p-5 rounded-2xl border border-natural-border bg-natural-eggshell/50 space-y-2.5 shadow-3xs"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-natural-primary">
                      {f.pillar}
                    </span>
                    <h5 className="font-serif text-sm font-bold text-natural-dark">
                      {f.title}
                    </h5>
                    <p className="text-[11px] font-medium text-natural-primary/90">
                      {f.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-1.5 text-xs text-natural-text-muted list-disc pl-4">
                    {f.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c3_sanacion")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Sanación y Satori</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === C3 MÓDULO 1: SANACIÓN, ESPIRITUALIDAD Y SATORI === */}
      {activeTab === "c3_sanacion" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS3_SANACION_SATORI.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS3_SANACION_SATORI.badge}
            </span>
          </div>

          <div className="bg-natural-eggshell border-l-4 border-natural-primary p-5 rounded-r-2xl italic">
            <p className="text-sm font-serif text-natural-dark leading-relaxed">
              &ldquo;{CLASS3_SANACION_SATORI.quote}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {CLASS3_SANACION_SATORI.blocks.map((block, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-natural-border bg-white space-y-2.5 shadow-3xs"
              >
                <h4 className="font-serif text-base font-bold text-natural-dark">
                  {block.title}
                </h4>
                {block.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-xs text-natural-text-muted leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Guía para el Satori */}
          <div className="p-6 rounded-3xl border border-natural-border bg-gradient-to-br from-natural-eggshell to-natural-cream/60 space-y-4">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              {CLASS3_SANACION_SATORI.satoriGuide.title}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CLASS3_SANACION_SATORI.satoriGuide.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-natural-border bg-white/90 space-y-1.5"
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                    {pt.label}
                  </span>
                  <p className="text-xs text-natural-text-muted leading-relaxed">
                    {pt.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c3_inicio")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c3_anshin")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Anshin y Afirmaciones</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === C3 MÓDULO 2: ANSHIN RITSUMEI, AFIRMACIONES Y SUPERACIÓN === */}
      {activeTab === "c3_anshin" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Sun className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS3_ANSHIN_AFIRMACIONES.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS3_ANSHIN_AFIRMACIONES.badge}
            </span>
          </div>

          <div className="bg-natural-eggshell border-l-4 border-natural-primary p-5 rounded-r-2xl italic">
            <p className="text-sm font-serif text-natural-dark leading-relaxed">
              &ldquo;{CLASS3_ANSHIN_AFIRMACIONES.quote}&rdquo;
            </p>
          </div>

          {/* Anshin Ritsumei Pilares */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              Encuentro del Anshin Ritsumei
            </h4>
            <p className="text-xs text-natural-text-muted leading-relaxed">
              {CLASS3_ANSHIN_AFIRMACIONES.anshin.intro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CLASS3_ANSHIN_AFIRMACIONES.anshin.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-natural-border bg-white space-y-1 shadow-3xs"
                >
                  <p className="text-xs font-serif font-bold text-natural-primary">
                    {pillar.title}
                  </p>
                  <p className="text-xs text-natural-text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Ejercicios de Anshin Ritsumei (interactivos) */}
          <div className="p-6 rounded-3xl border border-natural-border bg-natural-eggshell/50 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-sm font-bold text-natural-dark uppercase tracking-wider">
                Ejercicios diarios para cultivar Anshin Ritsumei
              </h4>
              <span className="text-[11px] font-mono text-natural-primary font-semibold">
                {Object.values(completedAnshin).filter(Boolean).length} de{" "}
                {CLASS3_ANSHIN_AFIRMACIONES.anshin.exercises.length} marcados hoy
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {CLASS3_ANSHIN_AFIRMACIONES.anshin.exercises.map((ex) => {
                const done = Boolean(completedAnshin[ex.id]);
                return (
                  <button
                    type="button"
                    key={ex.id}
                    onClick={() =>
                      setCompletedAnshin((prev) => ({ ...prev, [ex.id]: !done }))
                    }
                    className={`text-left p-4 rounded-2xl border transition-all space-y-1.5 ${
                      done
                        ? "bg-white border-natural-primary shadow-xs"
                        : "bg-white/80 border-natural-border hover:border-natural-primary/40"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-serif font-bold text-natural-dark">
                        {ex.title}
                      </span>
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          done ? "text-natural-primary" : "text-natural-border"
                        }`}
                      />
                    </div>
                    <p className="text-xs text-natural-text-muted leading-relaxed">
                      {ex.instruction}
                    </p>
                    {ex.phrase && (
                      <p className="text-xs font-serif italic text-natural-primary pt-1">
                        {ex.phrase}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Afirmaciones */}
          <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-4">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              {CLASS3_ANSHIN_AFIRMACIONES.affirmations.title}
            </h4>
            <ul className="space-y-1.5 text-xs text-natural-text-muted list-disc pl-5">
              {CLASS3_ANSHIN_AFIRMACIONES.affirmations.rules.map((r, idx) => (
                <li key={idx} className="leading-relaxed">
                  {r}
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-natural-cream/70 to-natural-sand/40 border border-natural-border space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-natural-primary">
                  Afirmación sugerida ({selectedAffirmationIdx + 1} de{" "}
                  {CLASS3_ANSHIN_AFIRMACIONES.affirmations.suggestedList.length})
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedAffirmationIdx(
                      (prev) =>
                        (prev + 1) %
                        CLASS3_ANSHIN_AFIRMACIONES.affirmations.suggestedList.length
                    )
                  }
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border border-natural-border text-[11px] font-semibold text-natural-dark hover:bg-natural-cream transition-colors"
                >
                  <RotateCw className="w-3 h-3 text-natural-primary" />
                  <span>Siguiente afirmación</span>
                </button>
              </div>
              <p className="text-sm font-serif italic text-natural-dark leading-relaxed">
                &ldquo;
                {CLASS3_ANSHIN_AFIRMACIONES.affirmations.suggestedList[selectedAffirmationIdx]}
                &rdquo;
              </p>

              <div className="pt-2 border-t border-natural-border/60 space-y-1.5">
                <label className="text-[11px] font-semibold text-natural-dark block">
                  Escribí tu propia afirmación en presente («Soy...» / «Estoy siendo...»):
                </label>
                <input
                  type="text"
                  value={personalAffirmation}
                  onChange={(e) => setPersonalAffirmation(e.target.value)}
                  placeholder="Ej.: Aquí y ahora soy paz y claridad en todo lo que emprendo..."
                  className="w-full p-2.5 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                />
              </div>
            </div>
          </div>

          {/* Superación de los símbolos */}
          <div className="p-6 rounded-3xl border border-natural-border bg-natural-cream/30 space-y-4">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              {CLASS3_ANSHIN_AFIRMACIONES.symbolTranscendence.title}
            </h4>
            <p className="text-xs text-natural-text-muted leading-relaxed">
              {CLASS3_ANSHIN_AFIRMACIONES.symbolTranscendence.metaphor}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {CLASS3_ANSHIN_AFIRMACIONES.symbolTranscendence.steps.map((s) => (
                <div
                  key={s.step}
                  className="p-4 rounded-2xl border border-natural-border bg-white space-y-1.5"
                >
                  <span className="w-6 h-6 rounded-full bg-natural-primary text-white text-[11px] font-mono font-bold inline-flex items-center justify-center">
                    {s.step}
                  </span>
                  <p className="text-xs font-serif font-bold text-natural-dark">
                    {s.title}
                  </p>
                  <p className="text-[11px] text-natural-text-muted leading-relaxed">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c3_sanacion")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c3_daikomyo")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Daikomyo</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === C3 MÓDULO 3: DAIKOMYO - GRAN Y BRILLANTE LUZ === */}
      {activeTab === "c3_daikomyo" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS3_DAIKOMYO.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS3_DAIKOMYO.badge}
            </span>
          </div>

          <div className="bg-[#f5f2e9] p-6 rounded-3xl border border-[#e8e4d8] shadow-sm space-y-3">
            <p className="text-sm sm:text-base font-serif italic text-natural-dark text-center">
              &ldquo;{CLASS3_DAIKOMYO.usuiQuote}&rdquo;
              <span className="block text-[11px] not-italic font-mono text-natural-primary mt-1">
                — Mikao Usui
              </span>
            </p>
            <p className="text-xs text-natural-text-muted leading-relaxed">
              {CLASS3_DAIKOMYO.intro}
            </p>
          </div>

          {/* Desglose de los 3 Kanjis: 大 光 明 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CLASS3_DAIKOMYO.kanjis.map((k) => (
              <div
                key={k.romaji}
                className="bg-white p-5 rounded-2xl border border-natural-border shadow-3xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between border-b pb-2.5 border-natural-border/60">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-natural-primary">
                        {k.romaji}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-natural-dark">
                        {k.title}
                      </h4>
                    </div>
                    <span className="text-4xl font-serif font-bold text-natural-primary">
                      {k.kanji}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-natural-dark">
                    {k.literalMeaning}
                  </p>
                  <ul className="space-y-1.5 text-xs text-natural-text-muted list-disc pl-4">
                    {k.deepMeaning.map((m, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                {k.quote && (
                  <div className="p-3 rounded-xl bg-natural-eggshell/70 border border-natural-border/70 text-[11px] italic text-natural-dark leading-relaxed">
                    {k.quote}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Símbolo Daikomyo con sus trazos (Diagrama interactivo + Lámina adjunta PDF) */}
          <div className="p-6 rounded-3xl border border-natural-border bg-white shadow-3xs space-y-6">
            <div className="border-b pb-3 border-natural-border/70 flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-serif text-base font-bold text-natural-dark flex items-center gap-2">
                <Flame className="w-4 h-4 text-natural-primary" />
                <span>{CLASS3_DAIKOMYO.strokeSummary.title}</span>
              </h4>
              <span className="text-[10px] font-mono uppercase font-bold text-natural-primary bg-natural-cream px-2.5 py-0.5 rounded-md">
                Gran y Brillante Luz Eterna
              </span>
            </div>

            <p className="text-xs text-natural-text-muted leading-relaxed">
              {CLASS3_DAIKOMYO.strokeSummary.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Diagrama interactivo con los 17 trazos */}
              <DaikomyoStrokeDiagram
                strokeDescriptions={CLASS3_DAIKOMYO.strokeSummary.strokeDescriptions}
              />

              {/* Visor de la lámina PDF adjunta (pág. 1: 17 trazos / pág. 2: 22 trazos) */}
              <div className="bg-natural-eggshell/40 border border-natural-border rounded-2xl p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-natural-primary">
                    Lámina Original Adjunta
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setDaikomyoSheetPage(1)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold border transition-colors ${
                        daikomyoSheetPage === 1
                          ? "bg-natural-primary text-white border-natural-primary"
                          : "bg-white text-natural-dark border-natural-border hover:bg-natural-cream"
                      }`}
                    >
                      Pág. 1 (17 trazos)
                    </button>
                    <button
                      type="button"
                      onClick={() => setDaikomyoSheetPage(2)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold border transition-colors ${
                        daikomyoSheetPage === 2
                          ? "bg-natural-primary text-white border-natural-primary"
                          : "bg-white text-natural-dark border-natural-border hover:bg-natural-cream"
                      }`}
                    >
                      Pág. 2 (22 trazos)
                    </button>
                  </div>
                </div>

                <div className="w-full h-[420px] rounded-xl overflow-hidden border border-natural-border bg-white">
                  <iframe
                    key={daikomyoSheetPage}
                    src={`${CLASS3_DAIKOMYO.symbolSheetPdf.url}#page=${daikomyoSheetPage}&view=FitH`}
                    title={CLASS3_DAIKOMYO.symbolSheetPdf.title}
                    className="w-full h-full border-0"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <a
                    href={`${CLASS3_DAIKOMYO.symbolSheetPdf.url}#page=${daikomyoSheetPage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-natural-border text-natural-dark text-xs font-semibold hover:bg-natural-cream transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Abrir lámina</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={CLASS3_DAIKOMYO.symbolSheetPdf.url}
                    download="Simbolo-Daikomyo-Trazos-RinconZen.pdf"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-natural-primary text-white text-xs font-semibold hover:bg-natural-primary/95 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Descargar lámina PDF</span>
                  </a>
                </div>
              </div>
            </div>

            <ul className="space-y-1.5 text-xs text-natural-dark list-disc pl-5 pt-2 border-t border-natural-border/60">
              {CLASS3_DAIKOMYO.strokeSummary.groups.map((g, idx) => (
                <li key={idx} className="leading-relaxed">
                  {g}
                </li>
              ))}
            </ul>
          </div>

          {/* Cómo trabajar con Daikomyo */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              Trabajando con Daikomyo y su Kotodama
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {CLASS3_DAIKOMYO.practicalUses.map((use, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-natural-border bg-natural-cream/35 space-y-1.5"
                >
                  <p className="text-xs font-serif font-bold text-natural-primary">
                    {use.title}
                  </p>
                  <p className="text-xs text-natural-text-muted leading-relaxed">
                    {use.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c3_anshin")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c3_practicas")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Prácticas Shinpiden</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === C3 PRÁCTICAS Y TÉCNICAS AVANZADAS === */}
      {activeTab === "c3_practicas" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                Prácticas y Técnicas Avanzadas de Shinpiden
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              8 Técnicas Guiadas
            </span>
          </div>

          <p className="text-xs text-natural-text-muted leading-relaxed">
            Seleccioná cualquiera de las ocho prácticas de Shinpiden para explorar su fundamento, pasos completos, plegarias y temporizadores de apoyo:
          </p>

          {/* Selector en cuadrícula de prácticas (sin pills) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {CLASS3_PRACTICAS.map((pr) => {
              const isSelected = pr.id === activePractice.id;
              return (
                <button
                  type="button"
                  key={pr.id}
                  onClick={() => {
                    setSelectedPracticeId(pr.id);
                    setSolarStage(0);
                  }}
                  className={`text-left p-3.5 rounded-2xl border transition-all space-y-1 ${
                    isSelected
                      ? "bg-natural-primary text-white border-natural-primary shadow-sm"
                      : "bg-white border-natural-border text-natural-dark hover:bg-natural-eggshell"
                  }`}
                >
                  <p className="text-xs font-serif font-bold leading-snug">{pr.title}</p>
                  <p
                    className={`text-[10px] font-mono ${
                      isSelected ? "text-white/80" : "text-natural-primary"
                    }`}
                  >
                    {pr.durationLabel}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detalle de la práctica activa */}
          <div className="p-6 rounded-3xl border border-natural-border bg-gradient-to-br from-natural-eggshell to-natural-cream/50 space-y-5 shadow-3xs">
            <div className="border-b pb-3 border-natural-border/70 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h4 className="font-serif text-lg font-bold text-natural-dark">
                  {activePractice.title}
                </h4>
                <p className="text-xs text-natural-primary font-medium">
                  {activePractice.subtitle}
                </p>
              </div>
              <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-md bg-white border border-natural-border text-natural-primary">
                {activePractice.durationLabel}
              </span>
            </div>

            <p className="text-xs text-natural-text-muted leading-relaxed">
              {activePractice.intro}
            </p>

            {/* Asistente interactivo de puntos para Entrenamiento Solar */}
            {activePractice.id === "entrenamiento_solar" && (
              <div className="p-4 rounded-2xl bg-white border border-natural-border space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                    Guía paso a paso de los 7 centros
                  </span>
                  <span className="text-xs font-serif font-bold text-natural-dark">
                    {solarPoints[solarStage].label} ·{" "}
                    <span className="text-natural-primary">
                      {solarPoints[solarStage].count}
                    </span>
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-7 gap-1.5">
                  {solarPoints.map((pt, idx) => (
                    <button
                      type="button"
                      key={pt.label}
                      onClick={() => setSolarStage(idx)}
                      className={`p-2 rounded-xl border text-[10px] font-medium transition-colors text-center ${
                        solarStage === idx
                          ? "bg-natural-primary text-white border-natural-primary"
                          : "bg-natural-eggshell/60 border-natural-border text-natural-dark hover:bg-natural-cream"
                      }`}
                    >
                      {pt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <ol className="space-y-2 text-xs text-natural-dark list-decimal pl-5">
              {activePractice.steps.map((st, idx) => (
                <li key={idx} className="leading-relaxed">
                  {st}
                </li>
              ))}
            </ol>

            {activePractice.highlightTitle && activePractice.highlightText && (
              <div className="p-4 rounded-2xl bg-white/90 border-l-4 border-natural-primary space-y-1">
                <p className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                  {activePractice.highlightTitle}
                </p>
                <p className="text-xs sm:text-sm font-serif italic text-natural-dark leading-relaxed">
                  {activePractice.highlightText}
                </p>
              </div>
            )}

            {activePractice.secondaryBlocks && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {activePractice.secondaryBlocks.map((blk, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-4 rounded-2xl bg-white/90 border border-natural-border space-y-1"
                  >
                    <p className="text-xs font-serif font-bold text-natural-primary">
                      {blk.title}
                    </p>
                    <p className="text-xs text-natural-text-muted leading-relaxed">
                      {blk.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activePractice.timerSeconds && (
              <MindfulTimer
                initialSeconds={activePractice.timerSeconds}
                label={activePractice.title}
              />
            )}

            <div className="p-3 rounded-xl bg-white/75 border border-natural-border/70 text-[11px] text-natural-text-muted italic">
              ✦ {activePractice.closingNote}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c3_daikomyo")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c3_videos")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Videos y Material</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === C3 VIDEOS Y MATERIAL === */}
      {activeTab === "c3_videos" && (
        <ClassVideosMaterial
          classTitle="Clase III"
          badge="Sintonía Audiovisual"
          introText="Acompañá tu estudio de Shinpiden con los recursos audiovisuales, manuales en PDF y lecturas seleccionadas para la Clase III."
          defaultVideos={c3Videos}
          defaultMaterials={c3Materials}
          onBack={() => onNavigateTab("c3_practicas")}
          onNext={() => onNavigateTab("c3_evaluacion")}
          nextLabel="Evaluación y Juegos"
        />
      )}

      {/* === C3 EVALUACIÓN: JUEGOS INTERACTIVOS, DIPLOMA Y CIERRE === */}
      {activeTab === "c3_evaluacion" && (
        <div className="space-y-6 animate-fade-in print:p-0">
          {viewingDiploma ? (
            /* DIPLOMA CLASE III */
            <div className="bg-[#FAF8F5] border-8 border-double border-[#C29B38] p-8 md:p-16 rounded-3xl text-center shadow-lg relative max-w-2xl mx-auto my-4 animate-fade-in print:border-8 print:shadow-none print:my-0">
              <div className="absolute inset-4 border border-[#C29B38]/30 pointer-events-none" />

              <div className="absolute top-6 left-6 right-6 flex justify-between text-xs font-mono text-[#C29B38]/70 print:hidden">
                <span>REIKI TRADICIONAL JAPONÉS</span>
                <span>CLASE III · SHINPIDEN</span>
              </div>

              <div className="space-y-6 relative z-10">
                <Flower2 className="w-14 h-14 text-[#C29B38] mx-auto opacity-80" />

                <div className="space-y-2">
                  <span className="font-serif text-[11px] tracking-widest text-[#C29B38] font-bold block uppercase">
                    Diploma de Honor
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif text-natural-dark font-bold italic tracking-tight">
                    Shinpiden · Enseñanza Misteriosa
                  </h2>
                </div>

                <p className="font-serif text-xs italic text-natural-text-muted leading-relaxed max-w-md mx-auto">
                  Se certifica con profundo honor, alegría y gratitud sintonizada que:
                </p>

                <p className="text-2xl sm:text-3xl font-serif text-natural-dark font-extrabold border-b border-[#C29B38]/30 pb-2 inline-block px-8">
                  {diplomaName || "Estudiante de Rincón Zen"}
                </p>

                <p className="text-xs text-natural-text-muted leading-relaxed max-w-md mx-auto">
                  Ha completado con éxito las prácticas, meditaciones y juegos evaluativos de la{" "}
                  <strong className="text-natural-dark">
                    Clase III: Shinpiden - Enseñanza Misteriosa
                  </strong>
                  , integrando el Símbolo Maestro Daikomyo, Anshin Ritsumei, el camino hacia el Satori y las técnicas de autopurificación y respiración Hado.
                </p>

                {finalReflection.trim() && (
                  <div className="bg-white/80 border border-[#C29B38]/25 rounded-2xl p-4 max-w-md mx-auto text-left">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#C29B38] font-bold block mb-1">
                      Intención personal de maestría interior:
                    </span>
                    <p className="text-xs italic text-natural-dark leading-relaxed">
                      &ldquo;{finalReflection.trim()}&rdquo;
                    </p>
                  </div>
                )}

                <div className="pt-8 grid grid-cols-2 gap-8 border-t border-[#C29B38]/20 max-w-sm mx-auto">
                  <div className="text-center space-y-1">
                    <span className="text-[10px] font-mono text-natural-text-muted/65 uppercase tracking-wider block">
                      Maestra Transmisora
                    </span>
                    <span className="text-xs font-serif font-bold text-natural-dark block">
                      Marina
                    </span>
                    <span className="text-[9px] text-[#5ba27f] font-bold block">
                      Rincón Zen
                    </span>
                  </div>
                  <div className="text-center space-y-1">
                    <span className="text-[10px] font-mono text-natural-text-muted/65 uppercase tracking-wider block">
                      Ciclo de Estudio
                    </span>
                    <span className="text-xs font-serif font-bold text-natural-dark block">
                      2026
                    </span>
                    <span className="text-[9px] text-[#5ba27f] font-bold block">
                      Gokuikaiden · Shinpiden
                    </span>
                  </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row justify-center gap-3 print:hidden">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-natural-primary text-white hover:bg-natural-primary/95 font-semibold text-xs rounded-xl shadow transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Imprimir Diploma</span>
                  </button>
                  <button
                    onClick={() => setViewingDiploma(false)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-natural-cream text-natural-dark hover:bg-natural-sand font-semibold text-xs rounded-xl transition shadow-2xs"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Volver a Evaluación</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4 border-natural-border print:hidden">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-natural-primary" />
                  <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                    Evaluación: Juegos Interactivos de Shinpiden
                  </h3>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 bg-[#5ba27f]/10 text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
                  Validación Clase III
                </span>
              </div>

              {/* Juego 1: Emparejamiento de conceptos y kanjis */}
              <div className="bg-gradient-to-br from-natural-eggshell to-natural-cream/50 p-6 rounded-3xl border border-natural-border shadow-3xs space-y-5">
                <div className="border-b pb-3 border-natural-border/70 flex flex-wrap justify-between items-center gap-2">
                  <h4 className="font-serif text-sm font-bold text-natural-primary flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-natural-secondary" />
                    Juego 1: Emparejá cada concepto y kanji de Shinpiden con su significado
                  </h4>
                  {matchingChecked && (
                    <span className="text-xs font-mono font-bold bg-white text-natural-primary px-3 py-1 rounded-full border border-natural-primary/30">
                      Resultado: {matchingScore} / {CLASS3_MATCHING_ITEMS.length} aciertos
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {CLASS3_MATCHING_ITEMS.map((item) => {
                    const selected = matchingGuesses[item.id] || "";
                    const isCorrect = selected === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`p-4 rounded-2xl border bg-white space-y-2.5 shadow-3xs ${
                          matchingChecked
                            ? isCorrect
                              ? "border-green-300 bg-green-50/30"
                              : "border-red-300 bg-red-50/30"
                            : "border-natural-border"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs font-serif font-bold text-natural-dark">
                            {item.term}
                          </p>
                          <span className="text-[10px] font-mono text-natural-primary font-semibold">
                            {item.kanjiOrTag}
                          </span>
                        </div>
                        <select
                          disabled={matchingChecked}
                          value={selected}
                          onChange={(e) =>
                            setMatchingGuesses((prev) => ({
                              ...prev,
                              [item.id]: e.target.value
                            }))
                          }
                          className="w-full text-xs p-2 rounded-xl bg-natural-bg border border-natural-border text-natural-dark focus:outline-none focus:border-natural-primary/50"
                        >
                          <option value="">-- Elegir significado --</option>
                          {CLASS3_MATCHING_ITEMS.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                              {opt.correctMeaning}
                            </option>
                          ))}
                        </select>
                        {matchingChecked && (
                          <p className="text-[11px] text-natural-text-muted leading-relaxed">
                            <span className="mr-1">{isCorrect ? "✅" : "❌"}</span>
                            {item.correctMeaning}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-end gap-3 border-t border-natural-border/60 pt-4">
                  {matchingChecked ? (
                    <button
                      type="button"
                      onClick={() => {
                        setMatchingGuesses({});
                        setMatchingChecked(false);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Reintentar Emparejamiento</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={CLASS3_MATCHING_ITEMS.some((i) => !matchingGuesses[i.id])}
                      onClick={() => setMatchingChecked(true)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <span>Validar Emparejamiento</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Juego 2: Test Evaluativo Clase III */}
              <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-6">
                <div className="border-b pb-3 border-natural-border/70">
                  <h4 className="font-serif text-sm font-bold text-natural-dark flex items-center gap-2">
                    <Award className="w-4 h-4 text-natural-primary" />
                    Juego 2: Test Evaluativo — Shinpiden (Enseñanza Misteriosa)
                  </h4>
                </div>

                {quizSubmitted ? (
                  <div className="space-y-6 animate-fade-in">
                    <div className="p-6 rounded-3xl border text-center space-y-3 bg-natural-eggshell/60 border-natural-border">
                      <p className="text-xs uppercase tracking-widest font-mono font-bold text-natural-primary">
                        TU RESULTADO
                      </p>
                      <div className="text-4xl font-serif font-extrabold text-natural-dark">
                        {quizScore} de {CLASS3_TRIVIA_QUESTIONS.length} correctas
                      </div>
                      <p className="text-xs text-natural-text-muted leading-relaxed max-w-md mx-auto">
                        {quizPassed
                          ? "¡Excelente integración de Shinpiden! Completá tu nombre y reflexión abajo para emitir tu Diploma Honorífico de Clase III."
                          : "Necesitás al menos 5 respuestas correctas para habilitar el diploma. Revisá las explicaciones e intentá nuevamente."}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {CLASS3_TRIVIA_QUESTIONS.map((q) => {
                        const ansIdx = quizAnswers[q.id];
                        const isCorrect = ansIdx === q.correctIndex;
                        return (
                          <div
                            key={q.id}
                            className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-2 ${
                              isCorrect
                                ? "bg-green-50/40 border-green-200"
                                : "bg-red-50/40 border-red-200"
                            }`}
                          >
                            <div className="flex items-start gap-2">
                              <span className="text-base">{isCorrect ? "✅" : "❌"}</span>
                              <div>
                                <p className="font-bold text-natural-dark">{q.question}</p>
                                <p className="text-natural-text-muted mt-1">
                                  Tu respuesta:{" "}
                                  <strong className="text-natural-dark">
                                    {q.options[ansIdx] || "Ninguna"}
                                  </strong>
                                </p>
                                {!isCorrect && (
                                  <p className="text-natural-text-muted">
                                    Respuesta correcta:{" "}
                                    <strong className="text-green-700">
                                      {q.options[q.correctIndex]}
                                    </strong>
                                  </p>
                                )}
                                <p className="text-[11px] text-natural-primary italic mt-2">
                                  💡 Explicación: {q.explanation}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {quizPassed && (
                      <div className="bg-gradient-to-br from-natural-cream/70 to-natural-sand/50 p-6 rounded-3xl border border-natural-border space-y-4">
                        <div className="text-center space-y-1">
                          <h5 className="font-serif text-sm font-bold text-natural-dark">
                            Reflexión y Diploma de Clase III: Shinpiden
                          </h5>
                          <p className="text-xs text-natural-text-muted max-w-lg mx-auto">
                            Escribí una breve intención para tu camino interior y tu nombre completo para generar tu diploma.
                          </p>
                        </div>

                        <div className="max-w-lg mx-auto space-y-3">
                          <textarea
                            rows={2}
                            value={finalReflection}
                            onChange={(e) => setFinalReflection(e.target.value)}
                            placeholder="Intención personal (opcional, aparecerá en tu diploma)..."
                            className="w-full p-2.5 rounded-xl border border-natural-border text-xs bg-white text-natural-dark focus:outline-none focus:border-natural-primary"
                          />
                          <div className="flex flex-col sm:flex-row gap-2">
                            <input
                              type="text"
                              placeholder="Tu Nombre Completo"
                              value={diplomaName}
                              onChange={(e) => setDiplomaName(e.target.value)}
                              className="flex-1 p-2.5 rounded-xl border border-natural-border text-xs bg-white text-natural-dark focus:outline-none focus:border-natural-primary"
                            />
                            <button
                              type="button"
                              onClick={() => setViewingDiploma(true)}
                              className="px-4 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-bold hover:bg-natural-primary/95 transition-colors"
                            >
                              Ver Diploma
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-start border-t border-natural-border/60 pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setQuizAnswers({});
                          setQuizSubmitted(false);
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                        <span>Volver a Intentar Test</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-xs text-natural-text-muted leading-relaxed">
                      Respondé las siguientes 6 preguntas sobre los contenidos de la Clase III (Shinpiden):
                    </p>

                    <div className="space-y-6">
                      {CLASS3_TRIVIA_QUESTIONS.map((q, qIdx) => (
                        <div key={q.id} className="space-y-2.5">
                          <div className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded-full bg-natural-cream text-natural-primary text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {qIdx + 1}
                            </span>
                            <h5 className="text-xs font-bold text-natural-dark leading-snug">
                              {q.question}
                            </h5>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7">
                            {q.options.map((option, oIdx) => {
                              const isSelected = quizAnswers[q.id] === oIdx;
                              return (
                                <button
                                  type="button"
                                  key={oIdx}
                                  onClick={() =>
                                    setQuizAnswers((prev) => ({ ...prev, [q.id]: oIdx }))
                                  }
                                  className={`w-full text-left p-3 rounded-xl border text-xs leading-normal transition-all ${
                                    isSelected
                                      ? "bg-natural-secondary/15 text-natural-primary border-natural-primary font-medium"
                                      : "bg-natural-bg/50 border-natural-border hover:bg-natural-cream hover:border-natural-primary/30 text-natural-dark/90"
                                  }`}
                                >
                                  {option}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end border-t border-natural-border/60 pt-4">
                      <button
                        type="button"
                        disabled={CLASS3_TRIVIA_QUESTIONS.some(
                          (q) => quizAnswers[q.id] === undefined
                        )}
                        onClick={() => setQuizSubmitted(true)}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <span>Enviar Respuestas</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Cierre y Nuevos Comienzos */}
              <div className="bg-[#f5f2e9] p-6 rounded-3xl border border-[#e8e4d8] space-y-2.5">
                <h4 className="font-serif text-sm font-bold text-natural-dark">
                  {CLASS3_CIERRE.title}
                </h4>
                {CLASS3_CIERRE.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-xs text-natural-dark/90 leading-relaxed">
                    {p}
                  </p>
                ))}
                <div className="flex justify-end">
                  <span className="font-serif italic font-bold text-xs text-natural-primary">
                    {CLASS3_CIERRE.signature}
                  </span>
                </div>
              </div>

              <div className="flex justify-start items-center pt-4 border-t border-natural-border">
                <button
                  onClick={() => onNavigateTab("c3_videos")}
                  className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Volver</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
