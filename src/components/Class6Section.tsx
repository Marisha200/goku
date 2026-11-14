/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  Flower2,
  ShieldCheck,
  Scale,
  SearchCheck,
  AlertTriangle,
  Award,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  CheckCircle2,
  XCircle,
  Sparkles,
  Download,
  Printer,
  HelpCircle
} from "lucide-react";

import {
  CLASS6_INICIO,
  CLASS6_AUTORIDAD,
  CLASS6_ETICA,
  CLASS6_DISCERNIMIENTO,
  CLASS6_DIFICIL,
  CLASS6_GAME_SCENARIOS,
  CLASS6_FICHAS_IMPRIMIBLES,
  CLASS6_TRIVIA_QUESTIONS
} from "../data/class6Content";
import {
  ClassVideosMaterial,
  ClassVideoItem,
  ClassMaterialItem
} from "./ClassVideosMaterial";

interface Class6SectionProps {
  activeTab: string;
  onNavigateTab: (tabId: string) => void;
}

export const Class6Section: React.FC<Class6SectionProps> = ({
  activeTab,
  onNavigateTab
}) => {
  // Módulo 1: Autoridad o autoritarismo (4 situaciones)
  const [authResponses, setAuthResponses] = useState<
    Record<string, { text: string; showGuide: boolean }>
  >({});

  // Módulo 2: Los límites del consentimiento
  const [selectedConsentOption, setSelectedConsentOption] = useState<string>("");

  // Módulo 3: El espejo del discernimiento (en módulo y en juegos)
  const [mirrorSelections, setMirrorSelections] = useState<Record<string, string>>({});
  const [mirrorChecked, setMirrorChecked] = useState<boolean>(false);

  // Módulo 4: El dilema del maestro
  const [selectedDilemmaId, setSelectedDilemmaId] = useState<string>("");

  // Videos y Material seleccionados por la docente + Fichas imprimibles
  const c6Videos: ClassVideoItem[] = [];
  const c6Materials: ClassMaterialItem[] = [];
  const [activeFichaId, setActiveFichaId] = useState<string | null>(null);

  // Pantalla 7: Juegos evaluativos (Escenarios + Test + Diploma)
  const [gamePicks, setGamePicks] = useState<Record<string, number>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [finalReflection, setFinalReflection] = useState<string>("");
  const [diplomaName, setDiplomaName] = useState<string>("");
  const [viewingDiploma, setViewingDiploma] = useState<boolean>(false);

  const updateAuthResponse = (
    id: string,
    patch: Partial<{ text: string; showGuide: boolean }>
  ) => {
    setAuthResponses((prev) => {
      const current = prev[id] || { text: "", showGuide: false };
      return { ...prev, [id]: { ...current, ...patch } };
    });
  };

  const mirrorScore = CLASS6_DISCERNIMIENTO.mirrorItems.reduce(
    (acc, it) => (mirrorSelections[it.id] === it.correctType ? acc + 1 : acc),
    0
  );

  const quizScore = CLASS6_TRIVIA_QUESTIONS.reduce(
    (acc, q) => (quizAnswers[q.id] === q.correctIndex ? acc + 1 : acc),
    0
  );
  const quizPassed = quizScore >= 5;

  return (
    <>
      {/* === 1. INICIO — LA RESPONSABILIDAD DE ENSEÑAR === */}
      {activeTab === "c6_inicio" && (
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Flower2 className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS6_INICIO.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS6_INICIO.badge}
            </span>
          </div>

          <div className="bg-natural-sand/40 p-6 rounded-2xl border border-natural-border/80 text-center">
            <p className="font-serif italic text-base sm:text-lg text-natural-dark leading-relaxed">
              &ldquo;{CLASS6_INICIO.openingQuote}&rdquo;
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-3.5">
            {CLASS6_INICIO.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-xs sm:text-sm text-natural-text-muted leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="bg-natural-cream/70 p-6 rounded-3xl border border-natural-border space-y-3">
            <h4 className="font-serif text-sm font-bold text-natural-primary flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              <span>Para reflexionar</span>
            </h4>
            <ul className="space-y-2">
              {CLASS6_INICIO.reflections.map((q, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-natural-dark flex items-start gap-2 leading-relaxed"
                >
                  <span className="text-natural-primary font-bold">•</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c6_autoridad")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>La autoridad del maestro</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === 2. MÓDULO 1 — LA AUTORIDAD DEL MAESTRO === */}
      {activeTab === "c6_autoridad" && (
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS6_AUTORIDAD.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS6_AUTORIDAD.badge}
            </span>
          </div>

          <div className="bg-natural-sand/40 p-6 rounded-2xl border border-natural-border/80 text-center">
            <p className="font-serif italic text-base sm:text-lg text-natural-dark leading-relaxed">
              &ldquo;{CLASS6_AUTORIDAD.quote}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {CLASS6_AUTORIDAD.blocks.map((block, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-2.5"
              >
                <h4 className="font-serif text-base font-bold text-natural-dark">
                  {block.title}
                </h4>
                {block.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-xs sm:text-sm text-natural-text-muted leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Contraste de dos respuestas */}
          <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-4">
            <h4 className="font-serif text-sm font-bold text-natural-dark">
              {CLASS6_AUTORIDAD.contrastResponses.title}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-red-700 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Primera respuesta (Autoritarismo)</span>
                </span>
                <p className="text-xs text-red-950 italic leading-relaxed">
                  {CLASS6_AUTORIDAD.contrastResponses.first}
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-green-50/70 border border-green-200 space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-green-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Segunda respuesta (Autoridad pedagógica)</span>
                </span>
                <p className="text-xs text-green-950 italic leading-relaxed">
                  {CLASS6_AUTORIDAD.contrastResponses.second}
                </p>
              </div>
            </div>
            <p className="text-xs text-natural-primary font-medium">
              {CLASS6_AUTORIDAD.contrastResponses.takeaway}
            </p>
          </div>

          {/* Actividad — Autoridad o autoritarismo */}
          <div className="bg-gradient-to-br from-natural-eggshell to-natural-cream/60 p-6 rounded-3xl border border-natural-border space-y-4 shadow-3xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary">
                Práctica de Criterio
              </span>
              <h4 className="font-serif text-base font-bold text-natural-dark">
                {CLASS6_AUTORIDAD.activityTitle}
              </h4>
              <p className="text-xs text-natural-text-muted leading-relaxed">
                {CLASS6_AUTORIDAD.activityInstruction}
              </p>
            </div>

            <div className="space-y-4">
              {CLASS6_AUTORIDAD.situations.map((sit) => {
                const state = authResponses[sit.id] || { text: "", showGuide: false };
                return (
                  <div
                    key={sit.id}
                    className="bg-white p-4 rounded-2xl border border-natural-border space-y-2.5"
                  >
                    <p className="text-xs font-serif font-bold text-natural-dark">
                      {sit.number}. {sit.situation}
                    </p>
                    <textarea
                      rows={2}
                      value={state.text}
                      onChange={(e) => updateAuthResponse(sit.id, { text: e.target.value })}
                      placeholder="Escribí cómo responderías con claridad y respeto..."
                      className="w-full p-2.5 rounded-xl border border-natural-border bg-natural-bg text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                    />
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() =>
                          updateAuthResponse(sit.id, { showGuide: !state.showGuide })
                        }
                        className="text-[11px] font-semibold text-natural-primary hover:underline"
                      >
                        {state.showGuide ? "Ocultar respuesta orientativa" : "Ver respuesta orientativa"}
                      </button>
                    </div>
                    {state.showGuide && (
                      <div className="p-3.5 rounded-xl bg-natural-cream/70 border border-natural-primary/25 text-xs space-y-1 animate-fade-in">
                        <p className="text-natural-dark italic">{sit.suggestedResponse}</p>
                        <p className="text-[11px] font-semibold text-natural-primary">
                          Criterio: {sit.principle}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-natural-primary/10 border-l-4 border-natural-primary p-5 rounded-r-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary block mb-1">
              Enseñanza clave
            </span>
            <p className="font-serif italic text-sm sm:text-base text-natural-dark leading-relaxed">
              &ldquo;{CLASS6_AUTORIDAD.teaching}&rdquo;
            </p>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c6_inicio")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c6_etica")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>La ética en la práctica</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === 3. MÓDULO 2 — LA ÉTICA EN LA PRÁCTICA === */}
      {activeTab === "c6_etica" && (
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Scale className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS6_ETICA.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS6_ETICA.badge}
            </span>
          </div>

          <div className="bg-natural-sand/40 p-6 rounded-2xl border border-natural-border/80 text-center">
            <p className="font-serif italic text-base sm:text-lg text-natural-dark leading-relaxed">
              &ldquo;{CLASS6_ETICA.quote}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {CLASS6_ETICA.blocks.map((block, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-2.5"
              >
                <h4 className="font-serif text-base font-bold text-natural-dark">
                  {block.title}
                </h4>
                {block.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-xs sm:text-sm text-natural-text-muted leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Actividad — Los límites del consentimiento */}
          <div className="bg-gradient-to-br from-natural-eggshell to-natural-cream/60 p-6 rounded-3xl border border-natural-border space-y-4 shadow-3xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary">
                Caso Ético
              </span>
              <h4 className="font-serif text-base font-bold text-natural-dark">
                {CLASS6_ETICA.activity.title}
              </h4>
              <p className="text-xs text-natural-dark leading-relaxed">
                {CLASS6_ETICA.activity.scenario}
              </p>
            </div>

            <div className="space-y-2.5">
              {CLASS6_ETICA.activity.options.map((opt) => {
                const isSelected = selectedConsentOption === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedConsentOption(opt.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border text-xs leading-relaxed transition-all ${
                      isSelected
                        ? opt.isCorrect
                          ? "bg-green-50/70 border-green-400 text-natural-dark font-medium"
                          : "bg-red-50/70 border-red-300 text-natural-dark font-medium"
                        : "bg-white border-natural-border hover:bg-natural-cream/60 text-natural-dark"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}

              {selectedConsentOption && (
                <div className="p-4 rounded-2xl bg-white border border-natural-primary/30 text-xs text-natural-dark leading-relaxed animate-fade-in">
                  {
                    CLASS6_ETICA.activity.options.find(
                      (o) => o.id === selectedConsentOption
                    )?.feedback
                  }
                </div>
              )}
            </div>
          </div>

          <div className="bg-natural-primary/10 border-l-4 border-natural-primary p-5 rounded-r-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary block mb-1">
              Enseñanza clave
            </span>
            <p className="font-serif italic text-sm sm:text-base text-natural-dark leading-relaxed">
              &ldquo;{CLASS6_ETICA.teaching}&rdquo;
            </p>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c6_autoridad")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c6_discernimiento")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Discernimiento y pensamiento crítico</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === 4. MÓDULO 3 — DISCERNIMIENTO Y PENSAMIENTO CRÍTICO === */}
      {activeTab === "c6_discernimiento" && (
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <SearchCheck className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS6_DISCERNIMIENTO.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS6_DISCERNIMIENTO.badge}
            </span>
          </div>

          <div className="bg-natural-sand/40 p-6 rounded-2xl border border-natural-border/80 text-center">
            <p className="font-serif italic text-base sm:text-lg text-natural-dark leading-relaxed">
              &ldquo;{CLASS6_DISCERNIMIENTO.quote}&rdquo;
            </p>
          </div>

          {/* Observar no es interpretar */}
          <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-4">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              {CLASS6_DISCERNIMIENTO.observarVsInterpretar.title}
            </h4>
            <p className="text-xs sm:text-sm text-natural-text-muted leading-relaxed">
              {CLASS6_DISCERNIMIENTO.observarVsInterpretar.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {CLASS6_DISCERNIMIENTO.observarVsInterpretar.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-natural-eggshell/75 border border-natural-border/70 space-y-1.5"
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-natural-primary block">
                    {ex.kind}
                  </span>
                  <p className="text-xs font-serif font-bold text-natural-dark">
                    {ex.phrase}
                  </p>
                  <p className="text-[11px] text-natural-text-muted leading-relaxed">
                    {ex.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tabla: Cuatro formas de presentar el conocimiento */}
          <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-3 overflow-x-auto">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              Cuatro formas de presentar el conocimiento
            </h4>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-natural-border text-natural-primary font-serif">
                  <th className="py-2.5 pr-4">Categoría</th>
                  <th className="py-2.5 pr-4">Qué significa</th>
                  <th className="py-2.5">Ejemplo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-natural-border/60">
                {CLASS6_DISCERNIMIENTO.categories.map((cat, idx) => (
                  <tr key={idx} className="hover:bg-natural-eggshell/50">
                    <td className="py-2.5 pr-4 font-bold text-natural-dark">{cat.category}</td>
                    <td className="py-2.5 pr-4 text-natural-text-muted">{cat.meaning}</td>
                    <td className="py-2.5 text-natural-text-muted italic">{cat.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-natural-primary font-medium pt-1">
              {CLASS6_DISCERNIMIENTO.categoriesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CLASS6_DISCERNIMIENTO.blocks.map((block, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-2.5"
              >
                <h4 className="font-serif text-base font-bold text-natural-dark">
                  {block.title}
                </h4>
                {block.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-xs text-natural-text-muted leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Actividad — El espejo del discernimiento */}
          <div className="bg-gradient-to-br from-natural-eggshell to-natural-cream/60 p-6 rounded-3xl border border-natural-border space-y-4 shadow-3xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary">
                  Ejercicio de Discernimiento
                </span>
                <h4 className="font-serif text-base font-bold text-natural-dark">
                  {CLASS6_DISCERNIMIENTO.activityTitle}
                </h4>
                <p className="text-xs text-natural-text-muted leading-relaxed">
                  {CLASS6_DISCERNIMIENTO.activityInstruction}
                </p>
              </div>
              {mirrorChecked && (
                <span className="text-xs font-mono font-bold bg-white text-natural-primary px-3 py-1 rounded-full border border-natural-primary/30">
                  Resultado: {mirrorScore} / {CLASS6_DISCERNIMIENTO.mirrorItems.length}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {CLASS6_DISCERNIMIENTO.mirrorItems.map((item) => {
                const picked = mirrorSelections[item.id] || "";
                const isCorrect = picked === item.correctType;
                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border bg-white space-y-2.5 ${
                      mirrorChecked
                        ? isCorrect
                          ? "border-green-300 bg-green-50/30"
                          : "border-red-300 bg-red-50/30"
                        : "border-natural-border"
                    }`}
                  >
                    <p className="text-xs font-semibold text-natural-dark">{item.statement}</p>
                    <select
                      disabled={mirrorChecked}
                      value={picked}
                      onChange={(e) =>
                        setMirrorSelections((prev) => ({
                          ...prev,
                          [item.id]: e.target.value
                        }))
                      }
                      className="w-full p-2 rounded-xl border border-natural-border bg-natural-bg text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                    >
                      <option value="">-- Elegir clasificación --</option>
                      <option value="observacion">Observación / experiencia subjetiva</option>
                      <option value="ensenanza">Enseñanza tradicional de linaje</option>
                      <option value="evidencia">Afirmación general que requiere evidencia</option>
                      <option value="hecho">Hecho respaldado por documento histórico</option>
                    </select>
                    {mirrorChecked && (
                      <p className="text-[11px] text-natural-text-muted leading-relaxed">
                        <span className="mr-1">{isCorrect ? "✅" : "❌"}</span>
                        {item.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-2">
              {mirrorChecked ? (
                <button
                  type="button"
                  onClick={() => {
                    setMirrorSelections({});
                    setMirrorChecked(false);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Reiniciar ejercicio</span>
                </button>
              ) : (
                <button
                  type="button"
                  disabled={CLASS6_DISCERNIMIENTO.mirrorItems.some(
                    (i) => !mirrorSelections[i.id]
                  )}
                  onClick={() => setMirrorChecked(true)}
                  className="px-5 py-2 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 disabled:opacity-40"
                >
                  Comprobar clasificación
                </button>
              )}
            </div>
          </div>

          <div className="bg-natural-primary/10 border-l-4 border-natural-primary p-5 rounded-r-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary block mb-1">
              Enseñanza clave
            </span>
            <p className="font-serif italic text-sm sm:text-base text-natural-dark leading-relaxed">
              &ldquo;{CLASS6_DISCERNIMIENTO.teaching}&rdquo;
            </p>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c6_etica")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c6_dificil")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Cuando enseñar se vuelve difícil</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === 5. MÓDULO 4 — CUANDO ENSEÑAR SE VUELVE DIFÍCIL === */}
      {activeTab === "c6_dificil" && (
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS6_DIFICIL.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS6_DIFICIL.badge}
            </span>
          </div>

          <div className="bg-natural-sand/40 p-6 rounded-2xl border border-natural-border/80 text-center">
            <p className="font-serif italic text-base sm:text-lg text-natural-dark leading-relaxed">
              &ldquo;{CLASS6_DIFICIL.quote}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {CLASS6_DIFICIL.blocks.map((block, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-2.5"
              >
                <h4 className="font-serif text-base font-bold text-natural-dark">
                  {block.title}
                </h4>
                {block.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-xs sm:text-sm text-natural-text-muted leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Actividad — El dilema del maestro */}
          <div className="bg-gradient-to-br from-natural-eggshell to-natural-cream/60 p-6 rounded-3xl border border-natural-border space-y-4 shadow-3xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary">
                Decisión Ética
              </span>
              <h4 className="font-serif text-base font-bold text-natural-dark">
                {CLASS6_DIFICIL.dilemma.title}
              </h4>
              <p className="text-xs text-natural-dark leading-relaxed">
                {CLASS6_DIFICIL.dilemma.situation}
              </p>
            </div>

            <div className="space-y-2.5">
              {CLASS6_DIFICIL.dilemma.options.map((opt) => {
                const isSelected = selectedDilemmaId === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedDilemmaId(opt.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border text-xs leading-relaxed transition-all ${
                      isSelected
                        ? opt.isEthical
                          ? "bg-green-50/70 border-green-400 text-natural-dark font-medium"
                          : "bg-red-50/70 border-red-300 text-natural-dark font-medium"
                        : "bg-white border-natural-border hover:bg-natural-cream/60 text-natural-dark"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}

              {selectedDilemmaId && (
                <div className="p-4 rounded-2xl bg-white border border-natural-primary/30 text-xs text-natural-dark leading-relaxed animate-fade-in">
                  {
                    CLASS6_DIFICIL.dilemma.options.find(
                      (o) => o.id === selectedDilemmaId
                    )?.feedback
                  }
                </div>
              )}
            </div>
          </div>

          <div className="bg-natural-primary/10 border-l-4 border-natural-primary p-5 rounded-r-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary block mb-1">
              Enseñanza clave
            </span>
            <p className="font-serif italic text-sm sm:text-base text-natural-dark leading-relaxed">
              &ldquo;{CLASS6_DIFICIL.teaching}&rdquo;
            </p>
          </div>

          {/* Cierre de la Clase VI */}
          <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-3">
            <h4 className="font-serif text-base font-bold text-natural-primary">
              {CLASS6_DIFICIL.cierre.title}
            </h4>
            {CLASS6_DIFICIL.cierre.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-xs sm:text-sm text-natural-text-muted leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c6_discernimiento")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c6_videos")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Videos y Material</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === 6. VIDEOS Y MATERIAL === */}
      {activeTab === "c6_videos" && (
        <ClassVideosMaterial
          classTitle="Clase VI"
          badge="Sintonía Audiovisual"
          introText="Acompañá tu formación en El Maestro y su Responsabilidad con los recursos audiovisuales, lecturas y guías éticas imprimibles de la Clase VI."
          defaultVideos={c6Videos}
          defaultMaterials={c6Materials}
          onBack={() => onNavigateTab("c6_dificil")}
          onNext={() => onNavigateTab("c6_juegos")}
          nextLabel="Juegos Evaluativos"
          footerContent={
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between print:hidden">
                <h4 className="font-serif text-base font-bold text-natural-dark flex items-center gap-2">
                  <Printer className="w-4 h-4 text-natural-primary" />
                  <span>Guías Éticas y de Discernimiento Imprimibles</span>
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CLASS6_FICHAS_IMPRIMIBLES.map((ficha) => {
                  const isSelectedForPrint = activeFichaId === ficha.id;
                  const hideInPrint = activeFichaId !== null && !isSelectedForPrint;
                  return (
                    <div
                      key={ficha.id}
                      className={`bg-white p-6 rounded-3xl border border-natural-border shadow-3xs flex flex-col justify-between gap-4 ${
                        hideInPrint ? "print:hidden" : "print:border print:shadow-none print:col-span-2"
                      }`}
                    >
                      <div className="space-y-3">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary">
                            {ficha.code}
                          </span>
                          <h5 className="font-serif text-base font-bold text-natural-dark mt-0.5">
                            {ficha.title}
                          </h5>
                          <p className="text-xs text-natural-text-muted mt-0.5">
                            {ficha.subtitle}
                          </p>
                        </div>

                        <div className="space-y-3 pt-2 border-t border-natural-border/60">
                          {ficha.sections.map((sec, sIdx) => (
                            <div key={sIdx} className="space-y-1.5">
                              <p className="text-xs font-bold text-natural-dark">{sec.heading}</p>
                              <ul className="space-y-1 text-[11px] text-natural-text-muted leading-relaxed">
                                {sec.items.map((it, iIdx) => (
                                  <li key={iIdx} className="flex items-start gap-1.5">
                                    <span className="text-natural-primary font-bold">•</span>
                                    <span>{it}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-end pt-3 border-t border-natural-border/60 print:hidden">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveFichaId(ficha.id);
                            setTimeout(() => window.print(), 100);
                          }}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-natural-sand hover:bg-natural-primary/15 text-natural-primary rounded-xl text-xs font-bold transition-colors border border-natural-border/60"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          <span>Imprimir esta guía</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          }
        />
      )}

      {/* === 7. JUEGOS EVALUATIVOS === */}
      {activeTab === "c6_juegos" && (
        <div className="space-y-6 animate-fade-in print:p-0">
          {viewingDiploma ? (
            /* DIPLOMA CLASE VI */
            <div className="bg-[#FAF8F5] border-8 border-double border-[#C29B38] p-8 md:p-16 rounded-3xl text-center shadow-lg relative max-w-2xl mx-auto my-4 animate-fade-in print:border-8 print:shadow-none print:my-0">
              <div className="absolute inset-4 border border-[#C29B38]/30 pointer-events-none" />

              <div className="absolute top-6 left-6 right-6 flex justify-between text-xs font-mono text-[#C29B38]/70 print:hidden">
                <span>MAESTRÍA REIKI TRADICIONAL JAPONÉS</span>
                <span>CLASE VI</span>
              </div>

              <div className="space-y-6 relative z-10">
                <Flower2 className="w-14 h-14 text-[#C29B38] mx-auto opacity-80" />

                <div className="space-y-2">
                  <span className="font-serif text-[11px] tracking-widest text-[#C29B38] font-bold block uppercase">
                    Diploma de Honor
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif text-natural-dark font-bold italic tracking-tight">
                    El Maestro y su Responsabilidad
                  </h2>
                </div>

                <p className="font-serif text-xs italic text-natural-text-muted leading-relaxed max-w-md mx-auto">
                  Se certifica con profundo honor, alegría y gratitud sintonizada que:
                </p>

                <p className="text-2xl sm:text-3xl font-serif text-natural-dark font-extrabold border-b border-[#C29B38]/30 pb-2 inline-block px-8">
                  {diplomaName || "Estudiante de Rincón Zen"}
                </p>

                <p className="text-xs text-natural-text-muted leading-relaxed max-w-md mx-auto">
                  Ha completado con éxito las reflexiones, simuladores y evaluación de la{" "}
                  <strong className="text-natural-dark">Clase VI: El Maestro y su Responsabilidad</strong>, integrando la autoridad pedagógica con humildad, el consentimiento y confidencialidad éticos, el discernimiento crítico y la acción responsable ante situaciones complejas.
                </p>

                {finalReflection.trim() && (
                  <div className="bg-white/80 border border-[#C29B38]/25 rounded-2xl p-4 max-w-md mx-auto text-left">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#C29B38] font-bold block mb-1">
                      Compromiso ético personal:
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
                    Juegos Evaluativos — Clase VI
                  </h3>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 bg-[#5ba27f]/10 text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
                  Ética y Discernimiento
                </span>
              </div>

              {/* Simulador integral cubriendo Dilema, Autoridad, Límites y Respuesta */}
              <div className="bg-gradient-to-br from-natural-eggshell to-natural-cream/50 p-6 rounded-3xl border border-natural-border shadow-3xs space-y-5">
                <div className="border-b pb-3 border-natural-border/70">
                  <h4 className="font-serif text-sm font-bold text-natural-primary flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-natural-secondary" />
                    Desafío 1: El dilema del maestro, ¿Autoridad o autoritarismo?, Límites y Respuesta responsable
                  </h4>
                </div>

                <div className="space-y-4">
                  {CLASS6_GAME_SCENARIOS.map((sc) => {
                    const picked = gamePicks[sc.id];
                    return (
                      <div
                        key={sc.id}
                        className="bg-white p-4 rounded-2xl border border-natural-border space-y-3"
                      >
                        <div>
                          <p className="text-xs font-serif font-bold text-natural-primary">
                            {sc.title}
                          </p>
                          <p className="text-xs text-natural-dark mt-1 leading-relaxed">
                            {sc.situation}
                          </p>
                        </div>
                        <div className="space-y-2">
                          {sc.options.map((opt, oIdx) => {
                            const selected = picked === oIdx;
                            return (
                              <button
                                key={oIdx}
                                type="button"
                                onClick={() =>
                                  setGamePicks((prev) => ({ ...prev, [sc.id]: oIdx }))
                                }
                                className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition-all ${
                                  selected
                                    ? opt.isBest
                                      ? "bg-green-50 border-green-400 text-natural-dark font-medium"
                                      : "bg-red-50 border-red-300 text-natural-dark font-medium"
                                    : "bg-natural-bg/40 border-natural-border hover:bg-natural-cream/60 text-natural-dark"
                                }`}
                              >
                                {opt.label}
                              </button>
                            );
                          })}
                        </div>
                        {picked !== undefined && (
                          <p className="text-[11px] text-natural-dark bg-natural-eggshell/80 p-3 rounded-xl border border-natural-border/60 leading-relaxed animate-fade-in">
                            {sc.options[picked].isBest ? "✅ " : "⚠️ "}
                            {sc.options[picked].feedback}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Desafío 2: El espejo del discernimiento */}
              <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3 border-natural-border/70">
                  <h4 className="font-serif text-sm font-bold text-natural-dark flex items-center gap-2">
                    <SearchCheck className="w-4 h-4 text-natural-primary" />
                    Desafío 2: El espejo del discernimiento
                  </h4>
                  {mirrorChecked && (
                    <span className="text-xs font-mono font-bold bg-natural-cream text-natural-primary px-3 py-1 rounded-full">
                      Resultado: {mirrorScore} / {CLASS6_DISCERNIMIENTO.mirrorItems.length}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {CLASS6_DISCERNIMIENTO.mirrorItems.map((item) => {
                    const picked = mirrorSelections[item.id] || "";
                    const isCorrect = picked === item.correctType;
                    return (
                      <div
                        key={item.id}
                        className={`p-4 rounded-2xl border bg-natural-eggshell/50 space-y-2.5 ${
                          mirrorChecked
                            ? isCorrect
                              ? "border-green-300 bg-green-50/30"
                              : "border-red-300 bg-red-50/30"
                            : "border-natural-border"
                        }`}
                      >
                        <p className="text-xs font-semibold text-natural-dark">{item.statement}</p>
                        <select
                          disabled={mirrorChecked}
                          value={picked}
                          onChange={(e) =>
                            setMirrorSelections((prev) => ({
                              ...prev,
                              [item.id]: e.target.value
                            }))
                          }
                          className="w-full p-2 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                        >
                          <option value="">-- Elegir clasificación --</option>
                          <option value="observacion">Experiencia subjetiva / observación</option>
                          <option value="ensenanza">Enseñanza tradicional de linaje</option>
                          <option value="evidencia">Afirmación que requiere evidencia</option>
                          <option value="hecho">Hecho documentado</option>
                        </select>
                        {mirrorChecked && (
                          <p className="text-[11px] text-natural-text-muted leading-relaxed">
                            <span className="mr-1">{isCorrect ? "✅" : "❌"}</span>
                            {item.explanation}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-2">
                  {mirrorChecked ? (
                    <button
                      type="button"
                      onClick={() => {
                        setMirrorSelections({});
                        setMirrorChecked(false);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Reintentar Espejo</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={CLASS6_DISCERNIMIENTO.mirrorItems.some(
                        (i) => !mirrorSelections[i.id]
                      )}
                      onClick={() => setMirrorChecked(true)}
                      className="px-5 py-2 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 disabled:opacity-40"
                    >
                      Validar Espejo
                    </button>
                  )}
                </div>
              </div>

              {/* Test Evaluativo Final */}
              <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-6">
                <div className="border-b pb-3 border-natural-border/70">
                  <h4 className="font-serif text-sm font-bold text-natural-dark flex items-center gap-2">
                    <Award className="w-4 h-4 text-natural-primary" />
                    Evaluación Final: El Maestro y su Responsabilidad
                  </h4>
                </div>

                {quizSubmitted ? (
                  <div className="space-y-6 animate-fade-in">
                    <div className="p-6 rounded-3xl border text-center space-y-3 bg-natural-eggshell/60 border-natural-border">
                      <p className="text-xs uppercase tracking-widest font-mono font-bold text-natural-primary">
                        TU RESULTADO
                      </p>
                      <div className="text-4xl font-serif font-extrabold text-natural-dark">
                        {quizScore} de {CLASS6_TRIVIA_QUESTIONS.length} correctas
                      </div>
                      <p className="text-xs text-natural-text-muted leading-relaxed max-w-md mx-auto">
                        {quizPassed
                          ? "¡Excelente integración de la Clase VI! Escribí tu compromiso ético y tu nombre completo para emitir tu Diploma Honorífico."
                          : "Necesitás al menos 5 respuestas correctas para habilitar el diploma. Revisá las explicaciones e intentá nuevamente."}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {CLASS6_TRIVIA_QUESTIONS.map((q) => {
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
                            Reflexión final y Diploma de Clase VI
                          </h5>
                          <p className="text-xs text-natural-text-muted max-w-lg mx-auto">
                            Escribí brevemente qué principio ético querés sostener siempre al acompañar a tus estudiantes, y tu nombre completo para el diploma.
                          </p>
                        </div>

                        <div className="max-w-lg mx-auto space-y-3">
                          <textarea
                            rows={2}
                            value={finalReflection}
                            onChange={(e) => setFinalReflection(e.target.value)}
                            placeholder="Compromiso ético personal (opcional, aparecerá en tu diploma)..."
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
                      Respondé las siguientes 6 preguntas sobre ética, autoridad y discernimiento de la Clase VI:
                    </p>

                    <div className="space-y-6">
                      {CLASS6_TRIVIA_QUESTIONS.map((q, qIdx) => (
                        <div key={q.id} className="space-y-2.5">
                          <div className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded-full bg-natural-cream text-natural-primary text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {qIdx + 1}
                            </span>
                            <h5 className="text-xs font-bold text-natural-dark leading-snug">
                              {q.question}
                            </h5>
                          </div>
                          <div className="grid grid-cols-1 gap-2 pl-7">
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
                        disabled={CLASS6_TRIVIA_QUESTIONS.some(
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

              <div className="flex justify-start items-center pt-4 border-t border-natural-border print:hidden">
                <button
                  onClick={() => onNavigateTab("c6_videos")}
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
