/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  Flower2,
  Sparkles,
  Compass,
  Activity,
  Heart,
  Video,
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  Play,
  Pause,
  RotateCw,
  CheckCircle2,
  Info,
  ShieldAlert,
  FileText,
  Download,
  BookOpen,
  Plus,
  Trash2,
  Eye
} from "lucide-react";

import {
  CLASS4_INICIO,
  CLASS4_MUSHIN_SHOSHIN,
  CLASS4_HARA,
  CLASS4_BYOSEN,
  CLASS4_PRESENCIA_OTRO,
  CLASS4_RESOURCES,
  CLASS4_CLASSIFIER_ITEMS,
  CLASS4_TRIVIA_QUESTIONS,
  SensationLogEntry
} from "../data/class4Content";
import {
  ClassVideosMaterial,
  ClassVideoItem,
  ClassMaterialItem
} from "./ClassVideosMaterial";

interface Class4SectionProps {
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
  const progress = ((initialSeconds - secondsLeft) / initialSeconds) * 100;

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
              ? "Práctica completada. Observá cómo te sentís ahora."
              : running
              ? "Respirá con naturalidad. Sin forzar nada."
              : "Temporizador suave opcional para tu práctica."}
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

export const Class4Section: React.FC<Class4SectionProps> = ({
  activeTab,
  onNavigateTab
}) => {
  // Module 1: Shoshin 5 observations
  const [shoshinObservations, setShoshinObservations] = useState<string[]>(["", "", "", "", ""]);

  // Module 3: 3-column Sensation Log interactive rows
  const [customLogRows, setCustomLogRows] = useState<SensationLogEntry[]>([]);
  const [newPerceived, setNewPerceived] = useState<string>("");
  const [newThought, setNewThought] = useState<string>("");
  const [newAffirm, setNewAffirm] = useState<string>("");

  // Module 4: Scenario reveal state
  const [revealedScenarios, setRevealedScenarios] = useState<Record<string, boolean>>({
    A: true,
    B: false,
    C: false
  });

  // Evaluation Game 1: Perception classifier
  const [classifierGuesses, setClassifierGuesses] = useState<Record<string, string>>({});
  const [classifierChecked, setClassifierChecked] = useState<boolean>(false);

  // Evaluation Game 2: Trivia & Final Reflection & Diploma
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [finalReflection, setFinalReflection] = useState<string>("");
  const [diplomaName, setDiplomaName] = useState<string>("");
  const [viewingDiploma, setViewingDiploma] = useState<boolean>(false);

  // Videos y Material seleccionados por la docente (YouTube + PDFs + Blog Links)
  const c4Videos: ClassVideoItem[] = [
    {
      uid: "BLOQHv0j3uU",
      embedId: "BLOQHv0j3uU",
      type: "youtube",
      title: "El Arte de la Presencia",
      description:
        "Video de la Clase IV para profundizar en el arte de la presencia en sesión y en la vida cotidiana.",
      url: "https://www.youtube.com/watch?v=BLOQHv0j3uU"
    }
  ];
  const c4Materials: ClassMaterialItem[] = [];

  const handleAddLogRow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPerceived.trim() || !newAffirm.trim()) return;
    setCustomLogRows((prev) => [
      ...prev,
      {
        perceived: newPerceived.trim(),
        thought: newThought.trim() || "—",
        canAffirm: newAffirm.trim()
      }
    ]);
    setNewPerceived("");
    setNewThought("");
    setNewAffirm("");
  };

  const classifierScore = CLASS4_CLASSIFIER_ITEMS.reduce(
    (acc, item) => (classifierGuesses[item.id] === item.category ? acc + 1 : acc),
    0
  );

  const quizScore = CLASS4_TRIVIA_QUESTIONS.reduce(
    (acc, q) => (quizAnswers[q.id] === q.correctIndex ? acc + 1 : acc),
    0
  );
  const quizPassed = quizScore >= 4;

  return (
    <>
      {/* === C4 INICIO: LA PRESENCIA COMO CAMINO === */}
      {activeTab === "c4_inicio" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Flower2 className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS4_INICIO.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS4_INICIO.badge}
            </span>
          </div>

          <div className="bg-[#f5f2e9] p-6 rounded-3xl border border-[#e8e4d8] shadow-sm relative overflow-hidden">
            <div className="absolute right-4 top-4 text-natural-primary pointer-events-none">
              <Flower2 className="w-24 h-24 stroke-1 opacity-10" />
            </div>
            <p className="text-natural-dark font-serif italic text-sm sm:text-base leading-relaxed relative z-10">
              &ldquo;{CLASS4_INICIO.openingQuote}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {CLASS4_INICIO.blocks.map((block, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-natural-border bg-natural-eggshell/40 space-y-2.5 shadow-3xs"
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

          {/* Para reflexionar */}
          <div className="p-5 rounded-2xl border border-natural-border bg-white space-y-3">
            <h4 className="font-serif text-sm font-bold text-natural-primary uppercase tracking-wider">
              Para reflexionar
            </h4>
            <ul className="space-y-2 text-xs text-natural-text-muted list-disc pl-5">
              {CLASS4_INICIO.reflections.map((q, idx) => (
                <li key={idx} className="leading-relaxed">
                  {q}
                </li>
              ))}
            </ul>
          </div>

          {/* Pequeña práctica: 3 minutos de presencia */}
          <div className="p-6 rounded-3xl border border-natural-border bg-gradient-to-br from-natural-eggshell to-natural-cream/60 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-base font-bold text-natural-dark">
                {CLASS4_INICIO.practice.title}
              </h4>
              <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-0.5 rounded-full bg-white border border-natural-border text-natural-primary">
                3 minutos
              </span>
            </div>
            <ol className="space-y-1.5 text-xs text-natural-text-muted list-decimal pl-5">
              {CLASS4_INICIO.practice.steps.map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
            <MindfulTimer
              initialSeconds={CLASS4_INICIO.practice.durationSeconds}
              label="Tres minutos de presencia"
            />
          </div>

          <div className="bg-natural-eggshell border-l-4 border-natural-primary p-5 rounded-r-2xl">
            <p className="text-[10px] font-mono uppercase tracking-wider font-bold text-natural-primary mb-1">
              Idea central del encuentro
            </p>
            <p className="text-xs sm:text-sm font-serif italic text-natural-dark leading-relaxed">
              &ldquo;{CLASS4_INICIO.centralIdea}&rdquo;
            </p>
          </div>

          <div className="flex justify-end pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c4_mushin")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Mushin y Shoshin</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === C4 MÓDULO 1: MUSHIN Y SHOSHIN === */}
      {activeTab === "c4_mushin" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS4_MUSHIN_SHOSHIN.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS4_MUSHIN_SHOSHIN.badge}
            </span>
          </div>

          <div className="bg-natural-eggshell border-l-4 border-natural-primary p-5 rounded-r-2xl italic">
            <p className="text-sm font-serif text-natural-dark leading-relaxed">
              &ldquo;{CLASS4_MUSHIN_SHOSHIN.quote}&rdquo;
            </p>
          </div>

          <p className="text-xs text-natural-text-muted leading-relaxed">
            {CLASS4_MUSHIN_SHOSHIN.intro}
          </p>

          {/* Concept cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CLASS4_MUSHIN_SHOSHIN.concepts.map((concept) => (
              <div
                key={concept.id}
                className="bg-white p-5 rounded-2xl border border-natural-border shadow-3xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between border-b pb-2.5 border-natural-border/60">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-natural-dark">
                        {concept.title}
                      </h4>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-natural-primary font-bold">
                        {concept.subtitle}
                      </span>
                    </div>
                    <span className="text-3xl font-serif font-bold text-natural-primary">
                      {concept.kanji}
                    </span>
                  </div>
                  <p className="text-xs text-natural-text-muted leading-relaxed">
                    {concept.etymology}
                  </p>
                  <p className="text-xs text-natural-text-muted leading-relaxed">
                    {concept.summary}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-natural-border/50">
                  <div className="p-3 rounded-xl bg-natural-eggshell/60 border border-natural-border/60">
                    <p className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                      {concept.exampleTitle}
                    </p>
                    <p className="text-xs text-natural-text-muted mt-1 leading-relaxed">
                      {concept.exampleText}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-natural-cream/40 border border-natural-border/60">
                    <p className="text-[10px] font-mono uppercase font-bold text-natural-dark">
                      {concept.reikiConnectionTitle}
                    </p>
                    <p className="text-xs text-natural-text-muted mt-1 leading-relaxed">
                      {concept.reikiConnectionText}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="bg-white border border-natural-border rounded-2xl overflow-hidden shadow-3xs">
            <div className="p-4 bg-natural-cream/40 border-b border-natural-border">
              <h4 className="font-serif text-xs font-bold text-natural-dark uppercase tracking-wider">
                Una diferencia importante: Mushin vs. Shoshin
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-natural-eggshell border-b border-natural-border font-mono text-[10px] text-natural-text-muted uppercase">
                    <th className="p-3">Mushin (無心)</th>
                    <th className="p-3">Shoshin (初心)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-natural-border/60">
                  {CLASS4_MUSHIN_SHOSHIN.comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-natural-cream/10 transition-colors">
                      <td className="p-3 text-natural-dark font-medium">{row.mushin}</td>
                      <td className="p-3 text-natural-primary font-medium">{row.shoshin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Activity: La taza que creemos conocer */}
          <div className="p-6 rounded-3xl border border-natural-border bg-gradient-to-br from-natural-eggshell to-natural-cream/50 space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-natural-primary tracking-wider">
                {CLASS4_MUSHIN_SHOSHIN.activity.subtitle}
              </span>
              <h4 className="font-serif text-base font-bold text-natural-dark mt-0.5">
                {CLASS4_MUSHIN_SHOSHIN.activity.title}
              </h4>
            </div>

            <ul className="space-y-1.5 text-xs text-natural-text-muted list-disc pl-5">
              {CLASS4_MUSHIN_SHOSHIN.activity.instructions.map((inst, idx) => (
                <li key={idx} className="leading-relaxed">
                  {inst}
                </li>
              ))}
            </ul>

            <div className="pt-2 space-y-2">
              <p className="text-[11px] font-mono uppercase font-bold text-natural-dark/80">
                Bitácora breve: anotá 5 detalles que descubriste hoy
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                {shoshinObservations.map((val, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={val}
                    onChange={(e) => {
                      const next = [...shoshinObservations];
                      next[idx] = e.target.value;
                      setShoshinObservations(next);
                    }}
                    placeholder={`Detalle ${idx + 1}...`}
                    className="p-2 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                  />
                ))}
              </div>
              <p className="text-[11px] text-natural-text-muted italic">
                Nota: esta actividad no reproduce un ritual Zen; es un ejercicio contemporáneo de atención inspirado en Shoshin.
              </p>
            </div>
          </div>

          {/* Reflection & Teaching */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl border border-natural-border bg-white space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                Para reflexionar
              </span>
              <p className="text-xs text-natural-dark font-medium leading-relaxed">
                {CLASS4_MUSHIN_SHOSHIN.reflection}
              </p>
            </div>
            <div className="p-4 rounded-2xl border border-natural-border bg-natural-cream/40 space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                Enseñanza clave
              </span>
              <p className="text-xs text-natural-dark font-serif italic leading-relaxed">
                &ldquo;{CLASS4_MUSHIN_SHOSHIN.teaching}&rdquo;
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c4_inicio")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c4_hara")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Hara y Silencio</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === C4 MÓDULO 2: HARA Y EL SILENCIO === */}
      {activeTab === "c4_hara" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Compass className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS4_HARA.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS4_HARA.badge}
            </span>
          </div>

          <div className="bg-natural-eggshell border-l-4 border-natural-primary p-5 rounded-r-2xl italic">
            <p className="text-sm font-serif text-natural-dark leading-relaxed">
              &ldquo;{CLASS4_HARA.quote}&rdquo;
            </p>
          </div>

          {/* Hara & Tanden */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-natural-border bg-white space-y-2 shadow-3xs">
              <h4 className="font-serif text-sm font-bold text-natural-dark">
                {CLASS4_HARA.haraConcept.title}
              </h4>
              <p className="text-xs text-natural-text-muted leading-relaxed">
                {CLASS4_HARA.haraConcept.text}
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-natural-border bg-white space-y-2 shadow-3xs">
              <h4 className="font-serif text-sm font-bold text-natural-dark">
                {CLASS4_HARA.tandenConnection.title}
              </h4>
              <p className="text-xs text-natural-text-muted leading-relaxed">
                {CLASS4_HARA.tandenConnection.text}
              </p>
            </div>
          </div>

          {/* Dos dimensiones del silencio */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              El silencio como práctica: dos dimensiones
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CLASS4_HARA.silenceDimensions.map((dim, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-natural-border bg-natural-eggshell/50 space-y-1.5"
                >
                  <span className="text-xs font-serif font-bold text-natural-primary">
                    {dim.title}
                  </span>
                  <p className="text-xs text-natural-text-muted leading-relaxed">
                    {dim.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* La respiración como referencia */}
          <div className="p-5 rounded-2xl border border-natural-border bg-white space-y-2">
            <h4 className="font-serif text-sm font-bold text-natural-dark">
              La respiración como punto de referencia
            </h4>
            <p className="text-xs text-natural-text-muted leading-relaxed">
              {CLASS4_HARA.breathReference}
            </p>
          </div>

          {/* Práctica guiada: Regresar al Hara (5 min) */}
          <div className="p-6 rounded-3xl border border-natural-border bg-gradient-to-br from-natural-eggshell to-natural-cream/60 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-base font-bold text-natural-dark">
                {CLASS4_HARA.guidedPractice.title}
              </h4>
              <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-0.5 rounded-full bg-white border border-natural-border text-natural-primary">
                Ejercicio de atención · 5 min
              </span>
            </div>
            <ol className="space-y-1.5 text-xs text-natural-text-muted list-decimal pl-5">
              {CLASS4_HARA.guidedPractice.steps.map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
            <div className="p-3 rounded-xl bg-white/80 border border-natural-border/70 text-[11px] text-natural-text-muted flex items-start gap-2">
              <Info className="w-4 h-4 text-natural-primary shrink-0 mt-0.5" />
              <span>{CLASS4_HARA.guidedPractice.accessibilityNote}</span>
            </div>
            <MindfulTimer
              initialSeconds={CLASS4_HARA.guidedPractice.durationSeconds}
              label="Regresar al Hara (5 minutos)"
            />
          </div>

          {/* Aplicación en Reiki */}
          <div className="p-5 rounded-2xl border border-natural-border bg-natural-cream/30 space-y-1.5">
            <h4 className="font-serif text-sm font-bold text-natural-primary">
              ✦ Aplicación en Reiki
            </h4>
            <p className="text-xs text-natural-text-muted leading-relaxed">
              {CLASS4_HARA.reikiApplication}
            </p>
          </div>

          {/* Reflection & Teaching */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl border border-natural-border bg-white space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                Para reflexionar
              </span>
              <p className="text-xs text-natural-dark font-medium leading-relaxed">
                {CLASS4_HARA.reflection}
              </p>
            </div>
            <div className="p-4 rounded-2xl border border-natural-border bg-natural-cream/40 space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                Enseñanza clave
              </span>
              <p className="text-xs text-natural-dark font-serif italic leading-relaxed">
                &ldquo;{CLASS4_HARA.teaching}&rdquo;
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c4_mushin")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c4_byosen")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Byosen y Hibiki</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === C4 MÓDULO 3: BYOSEN Y HIBIKI === */}
      {activeTab === "c4_byosen" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS4_BYOSEN.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS4_BYOSEN.badge}
            </span>
          </div>

          <div className="bg-natural-eggshell border-l-4 border-natural-primary p-5 rounded-r-2xl italic">
            <p className="text-sm font-serif text-natural-dark leading-relaxed">
              &ldquo;{CLASS4_BYOSEN.quote}&rdquo;
            </p>
          </div>

          <p className="text-xs text-natural-text-muted leading-relaxed">
            {CLASS4_BYOSEN.intro}
          </p>

          {/* Byosen & Hibiki cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CLASS4_BYOSEN.terms.map((term, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-natural-border bg-white space-y-3 shadow-3xs"
              >
                <div className="flex items-center justify-between border-b pb-2 border-natural-border/60">
                  <h4 className="font-serif text-base font-bold text-natural-dark">
                    {term.name}
                  </h4>
                  <span className="text-xl font-serif font-bold text-natural-primary">
                    {term.kanji}
                  </span>
                </div>
                <p className="text-xs text-natural-text-muted leading-relaxed">
                  {term.summary}
                </p>
                <div className="p-3 rounded-xl bg-natural-sand/50 border border-natural-border/70 text-[11px] text-natural-dark leading-relaxed">
                  <strong className="text-natural-primary">Discernimiento:</strong> {term.caution}
                </div>
              </div>
            ))}
          </div>

          {/* Tres niveles de la experiencia */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              Tres niveles de la experiencia
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CLASS4_BYOSEN.levels.map((lvl) => (
                <div
                  key={lvl.step}
                  className="p-4 rounded-2xl border border-natural-border bg-natural-eggshell/50 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-natural-primary text-white text-xs font-mono font-bold flex items-center justify-center">
                      {lvl.step}
                    </span>
                    <span className="font-serif text-sm font-bold text-natural-dark">
                      {lvl.label}
                    </span>
                  </div>
                  <p className="text-xs font-serif italic text-natural-primary">
                    {lvl.example}
                  </p>
                  <p className="text-xs text-natural-text-muted leading-relaxed">
                    {lvl.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sesgo de confirmación + Qué significa percibir sin interpretar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-natural-border bg-white space-y-2">
              <h4 className="font-serif text-sm font-bold text-natural-dark flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-natural-primary" />
                <span>{CLASS4_BYOSEN.confirmationBias.title}</span>
              </h4>
              <p className="text-xs text-natural-text-muted leading-relaxed">
                {CLASS4_BYOSEN.confirmationBias.text}
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-natural-border bg-natural-cream/35 space-y-2">
              <h4 className="font-serif text-sm font-bold text-natural-dark">
                ¿Qué significa percibir sin interpretar?
              </h4>
              <ul className="space-y-1.5 text-xs text-natural-text-muted list-disc pl-4">
                {CLASS4_BYOSEN.meaningOfNotInterpreting.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ejercicio: El registro de las sensaciones */}
          <div className="bg-white border border-natural-border rounded-2xl overflow-hidden shadow-3xs">
            <div className="p-4 bg-natural-cream/40 border-b border-natural-border">
              <h4 className="font-serif text-sm font-bold text-natural-dark">
                Ejercicio: El registro de las sensaciones (3 columnas)
              </h4>
              <p className="text-[11px] text-natural-text-muted mt-0.5">
                El propósito no es evitar que aparezcan interpretaciones, sino reconocerlas como tales. Podés sumar tus propias notas de práctica abajo.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-natural-eggshell border-b border-natural-border font-mono text-[10px] text-natural-text-muted uppercase">
                    <th className="p-3">Lo que percibí</th>
                    <th className="p-3">Lo que pensé</th>
                    <th className="p-3">Lo que puedo afirmar</th>
                    {customLogRows.length > 0 && <th className="p-3 w-10"></th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-natural-border/60">
                  {CLASS4_BYOSEN.sampleLogRows.map((row, idx) => (
                    <tr key={`sample-${idx}`} className="hover:bg-natural-cream/10">
                      <td className="p-3 font-medium text-natural-dark">{row.perceived}</td>
                      <td className="p-3 text-natural-text-muted italic">{row.thought}</td>
                      <td className="p-3 font-semibold text-natural-primary">{row.canAffirm}</td>
                      {customLogRows.length > 0 && <td className="p-3"></td>}
                    </tr>
                  ))}
                  {customLogRows.map((row, idx) => (
                    <tr key={`custom-${idx}`} className="bg-natural-eggshell/40">
                      <td className="p-3 font-medium text-natural-dark">{row.perceived}</td>
                      <td className="p-3 text-natural-text-muted italic">{row.thought}</td>
                      <td className="p-3 font-semibold text-natural-primary">{row.canAffirm}</td>
                      <td className="p-3 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            setCustomLogRows((prev) => prev.filter((_, rIdx) => rIdx !== idx))
                          }
                          aria-label="Eliminar fila"
                          className="text-natural-text-muted hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <form
              onSubmit={handleAddLogRow}
              className="p-4 bg-natural-eggshell/40 border-t border-natural-border grid grid-cols-1 sm:grid-cols-4 gap-2"
            >
              <input
                type="text"
                value={newPerceived}
                onChange={(e) => setNewPerceived(e.target.value)}
                placeholder="Lo que percibí..."
                className="p-2 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
              />
              <input
                type="text"
                value={newThought}
                onChange={(e) => setNewThought(e.target.value)}
                placeholder="Lo que pensé..."
                className="p-2 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
              />
              <input
                type="text"
                value={newAffirm}
                onChange={(e) => setNewAffirm(e.target.value)}
                placeholder="Lo que puedo afirmar..."
                className="p-2 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
              />
              <button
                type="submit"
                disabled={!newPerceived.trim() || !newAffirm.trim()}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-natural-primary text-white text-xs font-semibold hover:bg-natural-primary/95 transition-colors disabled:opacity-40"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Registrar</span>
              </button>
            </form>
          </div>

          {/* Reflection & Teaching */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl border border-natural-border bg-white space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                Para reflexionar
              </span>
              <p className="text-xs text-natural-dark font-medium leading-relaxed">
                {CLASS4_BYOSEN.reflection}
              </p>
            </div>
            <div className="p-4 rounded-2xl border border-natural-border bg-natural-cream/40 space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                Enseñanza clave
              </span>
              <p className="text-xs text-natural-dark font-serif italic leading-relaxed">
                &ldquo;{CLASS4_BYOSEN.teaching}&rdquo;
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c4_hara")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c4_presencia")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Frente al Otro</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === C4 MÓDULO 4: LA PRESENCIA FRENTE AL OTRO === */}
      {activeTab === "c4_presencia" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS4_PRESENCIA_OTRO.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS4_PRESENCIA_OTRO.badge}
            </span>
          </div>

          <div className="bg-natural-eggshell border-l-4 border-natural-primary p-5 rounded-r-2xl italic">
            <p className="text-sm font-serif text-natural-dark leading-relaxed">
              &ldquo;{CLASS4_PRESENCIA_OTRO.quote}&rdquo;
            </p>
          </div>

          <p className="text-xs text-natural-text-muted leading-relaxed">
            {CLASS4_PRESENCIA_OTRO.intro}
          </p>

          {/* Escuchar sin apropiarnos */}
          <div className="p-5 rounded-2xl border border-natural-border bg-white space-y-3 shadow-3xs">
            <h4 className="font-serif text-sm font-bold text-natural-dark">
              Escuchar sin apropiarnos de la experiencia
            </h4>
            <p className="text-xs text-natural-text-muted">
              Al finalizar una sesión, alguien comenta: <strong className="text-natural-dark">{CLASS4_PRESENCIA_OTRO.exampleDialogue.personSays}</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-red-50/50 border border-red-200/70 space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-red-700">
                  Evitar interpretar
                </span>
                <p className="text-xs text-natural-dark italic">
                  {CLASS4_PRESENCIA_OTRO.exampleDialogue.avoid}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-green-50/50 border border-green-200/70 space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-green-700">
                  Abrir espacio de escucha
                </span>
                <p className="text-xs text-natural-dark font-semibold">
                  {CLASS4_PRESENCIA_OTRO.exampleDialogue.prefer}
                </p>
              </div>
            </div>
            <p className="text-[11px] text-natural-text-muted">
              {CLASS4_PRESENCIA_OTRO.exampleDialogue.explanation}
            </p>
          </div>

          {/* Tres actitudes fundamentales */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              Tres actitudes fundamentales
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CLASS4_PRESENCIA_OTRO.attitudes.map((att, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-natural-border bg-natural-eggshell/50 space-y-1.5"
                >
                  <h5 className="font-serif text-sm font-bold text-natural-primary">
                    {att.title}
                  </h5>
                  <p className="text-xs text-natural-text-muted leading-relaxed">
                    {att.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Acompañar vs dirigir & Consentimiento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-natural-border bg-white space-y-2.5">
              <h4 className="font-serif text-sm font-bold text-natural-dark">
                {CLASS4_PRESENCIA_OTRO.accompanyVsDirect.title}
              </h4>
              <ul className="space-y-1.5 text-xs text-natural-text-muted list-disc pl-4">
                {CLASS4_PRESENCIA_OTRO.accompanyVsDirect.points.map((pt, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-2xl border border-natural-border bg-natural-cream/35 space-y-2.5">
              <h4 className="font-serif text-sm font-bold text-natural-dark">
                {CLASS4_PRESENCIA_OTRO.consent.title}
              </h4>
              <p className="text-xs text-natural-text-muted leading-relaxed">
                {CLASS4_PRESENCIA_OTRO.consent.text}
              </p>
            </div>
          </div>

          {/* Situaciones para analizar */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              Situaciones para analizar (hacé clic para ver el criterio)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CLASS4_PRESENCIA_OTRO.scenarios.map((sc) => {
                const isOpen = !!revealedScenarios[sc.id];
                return (
                  <div
                    key={sc.id}
                    className="p-4 rounded-2xl border border-natural-border bg-white flex flex-col justify-between space-y-3 shadow-3xs"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                        {sc.label}
                      </span>
                      <p className="text-xs font-bold text-natural-dark">
                        {sc.situation}
                      </p>
                    </div>

                    {isOpen ? (
                      <div className="space-y-2 pt-2 border-t border-natural-border/60 text-[11px]">
                        <p className="text-red-700/90">
                          <strong>Evitar:</strong> {sc.trap}
                        </p>
                        <p className="text-natural-dark">
                          <strong className="text-natural-primary">Presencia:</strong> {sc.mindfulResponse}
                        </p>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          setRevealedScenarios((prev) => ({ ...prev, [sc.id]: true }))
                        }
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-natural-cream hover:bg-natural-sand text-xs font-semibold text-natural-dark transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-natural-primary" />
                        <span>Ver criterio</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* El maestro como ejemplo */}
          <div className="p-5 rounded-2xl border border-natural-border bg-natural-eggshell/60 space-y-2">
            <h4 className="font-serif text-sm font-bold text-natural-dark">
              El maestro como ejemplo
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-natural-text-muted">
              {CLASS4_PRESENCIA_OTRO.teacherAsExample.map((line, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-natural-border/60">
                  <CheckCircle2 className="w-4 h-4 text-natural-primary shrink-0 mt-0.5" />
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reflection & Teaching */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl border border-natural-border bg-white space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                Para reflexionar
              </span>
              <p className="text-xs text-natural-dark font-medium leading-relaxed">
                {CLASS4_PRESENCIA_OTRO.reflection}
              </p>
            </div>
            <div className="p-4 rounded-2xl border border-natural-border bg-natural-cream/40 space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                Enseñanza clave
              </span>
              <p className="text-xs text-natural-dark font-serif italic leading-relaxed">
                &ldquo;{CLASS4_PRESENCIA_OTRO.teaching}&rdquo;
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c4_byosen")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c4_recursos")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Recursos y Lecturas</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === C4 RECURSOS === */}
      {activeTab === "c4_recursos" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Video className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS4_RESOURCES.title}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              Material de Apoyo IV
            </span>
          </div>

          <p className="text-xs text-natural-text-muted leading-relaxed">
            {CLASS4_RESOURCES.subtitle}
          </p>

          <div className="bg-natural-sand/40 border border-natural-border/70 rounded-2xl p-4 flex items-start gap-3 shadow-3xs">
            <Info className="w-5 h-5 text-natural-primary shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-natural-text-muted font-medium leading-relaxed">
              {CLASS4_RESOURCES.progressiveNotice}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CLASS4_RESOURCES.guides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white p-5 rounded-3xl border border-natural-border shadow-3xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded bg-natural-cream text-natural-primary">
                      {guide.tag}
                    </span>
                    <FileText className="w-4 h-4 text-natural-primary/70" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-natural-dark leading-snug">
                    {guide.title}
                  </h4>
                  <p className="text-xs text-natural-text-muted leading-relaxed">
                    {guide.summary}
                  </p>
                  <ul className="space-y-1.5 text-[11px] text-natural-text-muted list-disc pl-4 pt-1">
                    {guide.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-natural-border/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-natural-text-muted flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-natural-primary" />
                    Ficha imprimible
                  </span>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-natural-sand hover:bg-natural-primary/10 rounded-lg text-[10px] uppercase tracking-wider font-bold text-natural-primary transition-colors border border-natural-border/50"
                  >
                    <Download className="w-3 h-3" />
                    <span>Imprimir</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c4_presencia")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c4_videos")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Videos y Material</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === C4 VIDEOS Y MATERIAL === */}
      {activeTab === "c4_videos" && (
        <ClassVideosMaterial
          classTitle="Clase IV"
          badge="Sintonía Audiovisual"
          introText="Acompañá tu práctica de El Arte de la Presencia con los recursos audiovisuales, documentos PDF y lecturas seleccionadas para la Clase IV."
          defaultVideos={c4Videos}
          defaultMaterials={c4Materials}
          onBack={() => onNavigateTab("c4_recursos")}
          onNext={() => onNavigateTab("c4_evaluacion")}
          nextLabel="Evaluación y Juegos"
        />
      )}

      {/* === C4 EVALUACIÓN: JUEGOS INTERACTIVOS Y REFLEXIÓN FINAL === */}
      {activeTab === "c4_evaluacion" && (
        <div className="space-y-6 animate-fade-in print:p-0">
          {viewingDiploma ? (
            /* DIPLOMA CLASE IV */
            <div className="bg-[#FAF8F5] border-8 border-double border-[#C29B38] p-8 md:p-16 rounded-3xl text-center shadow-lg relative max-w-2xl mx-auto my-4 animate-fade-in print:border-8 print:shadow-none print:my-0">
              <div className="absolute inset-4 border border-[#C29B38]/30 pointer-events-none" />

              <div className="absolute top-6 left-6 right-6 flex justify-between text-xs font-mono text-[#C29B38]/70 print:hidden">
                <span>MAESTRÍA REIKI TRADICIONAL JAPONÉS</span>
                <span>CLASE IV</span>
              </div>

              <div className="space-y-6 relative z-10">
                <Flower2 className="w-14 h-14 text-[#C29B38] mx-auto opacity-80" />

                <div className="space-y-2">
                  <span className="font-serif text-[11px] tracking-widest text-[#C29B38] font-bold block uppercase">
                    Diploma de Honor
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif text-natural-dark font-bold italic tracking-tight">
                    El Arte de la Presencia
                  </h2>
                </div>

                <p className="font-serif text-xs italic text-natural-text-muted leading-relaxed max-w-md mx-auto">
                  Se certifica con profundo honor, alegría y gratitud sintonizada que:
                </p>

                <p className="text-2xl sm:text-3xl font-serif text-natural-dark font-extrabold border-b border-[#C29B38]/30 pb-2 inline-block px-8">
                  {diplomaName || "Estudiante de Rincón Zen"}
                </p>

                <p className="text-xs text-natural-text-muted leading-relaxed max-w-md mx-auto">
                  Ha completado con éxito las prácticas, reflexiones y juegos evaluativos de la{" "}
                  <strong className="text-natural-dark">Clase IV: El Arte de la Presencia</strong>, integrando Mushin y Shoshin, la quietud del Hara, la percepción consciente de Byosen y Hibiki sin interpretación precipitada, y la escucha ética frente al otro.
                </p>

                {finalReflection.trim() && (
                  <div className="bg-white/80 border border-[#C29B38]/25 rounded-2xl p-4 max-w-md mx-auto text-left">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#C29B38] font-bold block mb-1">
                      Reflexión personal de cierre:
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
                      Gokuikaiden Tradicional
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
                    Evaluación: Juegos Interactivos y Reflexión Final
                  </h3>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 bg-[#5ba27f]/10 text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
                  Validación Clase IV
                </span>
              </div>

              <p className="text-xs text-natural-text-muted leading-relaxed">
                Poné en práctica el discernimiento entre percibir, interpretar y afirmar, y luego completá la trivia de integración y tu reflexión personal de cierre.
              </p>

              {/* Juego 1: Clasificador de percepción */}
              <div className="bg-gradient-to-br from-natural-eggshell to-natural-cream/50 p-6 rounded-3xl border border-natural-border shadow-3xs space-y-5">
                <div className="border-b pb-3 border-natural-border/70 flex flex-wrap justify-between items-center gap-2">
                  <h4 className="font-serif text-sm font-bold text-natural-primary flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-natural-secondary" />
                    Juego 1: ¿Sensación, Interpretación o Afirmación?
                  </h4>
                  {classifierChecked && (
                    <span className="text-xs font-mono font-bold bg-white text-natural-primary px-3 py-1 rounded-full border border-natural-primary/30">
                      Resultado: {classifierScore} / {CLASS4_CLASSIFIER_ITEMS.length} aciertos
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {CLASS4_CLASSIFIER_ITEMS.map((item) => {
                    const selected = classifierGuesses[item.id] || "";
                    const isCorrect = selected === item.category;
                    return (
                      <div
                        key={item.id}
                        className={`p-4 rounded-2xl border bg-white space-y-3 shadow-3xs ${
                          classifierChecked
                            ? isCorrect
                              ? "border-green-300 bg-green-50/30"
                              : "border-red-300 bg-red-50/30"
                            : "border-natural-border"
                        }`}
                      >
                        <p className="text-xs font-semibold text-natural-dark leading-relaxed">
                          {item.statement}
                        </p>
                        <select
                          disabled={classifierChecked}
                          value={selected}
                          onChange={(e) =>
                            setClassifierGuesses((prev) => ({
                              ...prev,
                              [item.id]: e.target.value
                            }))
                          }
                          className="w-full text-xs p-2 rounded-xl bg-natural-bg border border-natural-border text-natural-dark focus:outline-none focus:border-natural-primary/50"
                        >
                          <option value="">-- Elegir categoría --</option>
                          <option value="sensacion">1. Sensación (descripción directa)</option>
                          <option value="interpretacion">2. Interpretación (hipótesis mental)</option>
                          <option value="afirmacion">3. Afirmación injustificada / diagnóstico</option>
                        </select>
                        {classifierChecked && (
                          <p className="text-[11px] text-natural-text-muted leading-relaxed">
                            <span className="mr-1">{isCorrect ? "✅" : "❌"}</span>
                            {item.explanation}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-end gap-3 border-t border-natural-border/60 pt-4">
                  {classifierChecked ? (
                    <button
                      type="button"
                      onClick={() => {
                        setClassifierGuesses({});
                        setClassifierChecked(false);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Reintentar Clasificador</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={CLASS4_CLASSIFIER_ITEMS.some((i) => !classifierGuesses[i.id])}
                      onClick={() => setClassifierChecked(true)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <span>Validar Clasificación</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Juego 2: Test Evaluativo Clase IV */}
              <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-6">
                <div className="border-b pb-3 border-natural-border/70">
                  <h4 className="font-serif text-sm font-bold text-natural-dark flex items-center gap-2">
                    <Award className="w-4 h-4 text-natural-primary" />
                    Juego 2: Test Evaluativo — El Arte de la Presencia
                  </h4>
                </div>

                {quizSubmitted ? (
                  <div className="space-y-6 animate-fade-in">
                    <div className="p-6 rounded-3xl border text-center space-y-3 bg-natural-eggshell/60 border-natural-border">
                      <p className="text-xs uppercase tracking-widest font-mono font-bold text-natural-primary">
                        TU RESULTADO
                      </p>
                      <div className="text-4xl font-serif font-extrabold text-natural-dark">
                        {quizScore} de {CLASS4_TRIVIA_QUESTIONS.length} correctas
                      </div>
                      <p className="text-xs text-natural-text-muted leading-relaxed max-w-md mx-auto">
                        {quizPassed
                          ? "¡Excelente integración de la Clase IV! Completá tu reflexión final abajo para emitir tu Diploma Honorífico."
                          : "Necesitás al menos 4 respuestas correctas (80%) para habilitar el diploma. Revisá las explicaciones e intentá nuevamente."}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {CLASS4_TRIVIA_QUESTIONS.map((q) => {
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
                            Reflexión final y Diploma de Clase IV
                          </h5>
                          <p className="text-xs text-natural-text-muted max-w-lg mx-auto">
                            Escribí en una o dos frases qué aprendizaje de la presencia querés llevar a tu próxima sesión, y tu nombre completo para el diploma.
                          </p>
                        </div>

                        <div className="max-w-lg mx-auto space-y-3">
                          <textarea
                            rows={2}
                            value={finalReflection}
                            onChange={(e) => setFinalReflection(e.target.value)}
                            placeholder="Reflexión personal (opcional, aparecerá en tu diploma)..."
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
                      Respondé las siguientes 5 preguntas sobre los contenidos de la Clase IV:
                    </p>

                    <div className="space-y-6">
                      {CLASS4_TRIVIA_QUESTIONS.map((q, qIdx) => (
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
                        disabled={CLASS4_TRIVIA_QUESTIONS.some(
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

              <div className="flex justify-start items-center pt-4 border-t border-natural-border">
                <button
                  onClick={() => onNavigateTab("c4_videos")}
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
