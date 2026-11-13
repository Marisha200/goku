/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  Flower2,
  Users,
  BookOpen,
  Activity,
  Compass,
  Video,
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  Play,
  Pause,
  RotateCw,
  CheckCircle2,
  XCircle,
  Sparkles,
  FileText,
  Download,
  Plus,
  Trash2,
  Upload,
  Link as LinkIcon,
  ExternalLink,
  Youtube,
  Printer,
  Lightbulb,
  HelpCircle
} from "lucide-react";

import {
  CLASS5_HERO,
  CLASS5_INICIO,
  CLASS5_ADULTO,
  CLASS5_EXPLICAR,
  CLASS5_DINAMICAS,
  CLASS5_GRUPO,
  CLASS5_FICHAS_IMPRIMIBLES,
  CLASS5_MATCH_GOALS,
  CLASS5_SIMULATOR_CASES,
  CLASS5_TRIVIA_QUESTIONS
} from "../data/class5Content";

interface Class5SectionProps {
  activeTab: string;
  onNavigateTab: (tabId: string) => void;
}

function TeachingTimer() {
  const presets = [
    { label: "1 min (Explicación imposible)", seconds: 60 },
    { label: "5 min (Microclase)", seconds: 300 },
    { label: "10 min (Práctica breve)", seconds: 600 },
    { label: "15 min (Dinámica completa)", seconds: 900 }
  ];
  const [duration, setDuration] = useState<number>(300);
  const [secondsLeft, setSecondsLeft] = useState<number>(300);
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
  const progress = duration > 0 ? ((duration - secondsLeft) / duration) * 100 : 0;

  return (
    <div className="bg-white/95 border border-natural-border rounded-2xl p-4 space-y-3 shadow-3xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-14 h-11 rounded-xl bg-natural-cream border border-natural-border flex items-center justify-center text-natural-primary font-mono text-sm font-bold">
            {formatted}
          </div>
          <div>
            <p className="text-xs font-serif font-bold text-natural-dark flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-natural-primary" />
              <span>Cronómetro de práctica docente</span>
            </p>
            <p className="text-[11px] text-natural-text-muted">
              {secondsLeft === 0
                ? "Tiempo cumplido. Pasá al momento de cierre y devolución."
                : running
                ? "Cronómetro en marcha."
                : "Elegí un bloque de tiempo para ensayar tus explicaciones."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 justify-end">
          <button
            type="button"
            onClick={() => {
              if (secondsLeft === 0) setSecondsLeft(duration);
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
              setSecondsLeft(duration);
            }}
            aria-label="Reiniciar cronómetro"
            className="p-2 rounded-xl bg-natural-cream hover:bg-natural-sand text-natural-dark transition-colors"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="w-full h-1.5 bg-natural-border/60 rounded-full overflow-hidden">
        <div
          className="h-full bg-natural-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {presets.map((p) => (
          <button
            key={p.seconds}
            type="button"
            onClick={() => {
              setRunning(false);
              setDuration(p.seconds);
              setSecondsLeft(p.seconds);
            }}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors ${
              duration === p.seconds
                ? "bg-natural-primary text-white border-natural-primary"
                : "bg-natural-eggshell text-natural-dark border-natural-border hover:bg-natural-sand/40"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export const Class5Section: React.FC<Class5SectionProps> = ({
  activeTab,
  onNavigateTab
}) => {
  // Pantalla 1: Mi recuerdo de aprendizaje
  const [memoryFields, setMemoryFields] = useState<{ que: string; como: string; clima: string }>({
    que: "",
    como: "",
    clima: ""
  });
  const [memorySaved, setMemorySaved] = useState<boolean>(false);

  // Pantalla 2: Dos alumnos, una enseñanza (Claudia y Martín)
  const [selectedAdultOption, setSelectedAdultOption] = useState<string>("");

  // Pantalla 3: Explicar sin complicar (concepto + texto ≤100 palabras + checklist)
  const [selectedConceptId, setSelectedConceptId] = useState<string>(
    CLASS5_EXPLICAR.activity.concepts[0].id
  );
  const [simpleExplanation, setSimpleExplanation] = useState<string>("");
  const [selfChecks, setSelfChecks] = useState<Record<number, boolean>>({});

  // Pantalla 4: Dinámicas (selección + diseñá tu propia dinámica)
  const [activeDynamicId, setActiveDynamicId] = useState<string>(
    CLASS5_DINAMICAS.dynamics[0].id
  );
  const [customDynamic, setCustomDynamic] = useState({
    objetivo: "",
    consigna: "",
    tiempo: "15 minutos",
    materiales: "",
    verificacion: ""
  });
  const [customDynamicSaved, setCustomDynamicSaved] = useState<boolean>(false);

  // Pantalla 5: El grupo (4 situaciones interactivas)
  const [scenarioNotes, setScenarioNotes] = useState<
    Record<string, { pasa: string; necesita: string; dirias: string; showGuide: boolean }>
  >({});

  // Pantalla 6: Videos y Material + Fichas imprimibles
  interface C5VideoItem {
    uid: string;
    embedId: string;
    type: "youtube" | "youtube_playlist";
    title: string;
    description: string;
    url: string;
  }

  interface C5MaterialItem {
    id: string;
    kind: "pdf_upload" | "blog_link" | "pdf_link";
    title: string;
    description: string;
    url: string;
    fileName?: string;
    fileSizeLabel?: string;
  }

  const [c5Videos, setC5Videos] = useState<C5VideoItem[]>(() => {
    try {
      const saved = localStorage.getItem("reiki_c5_videos");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [selectedC5VideoUid, setSelectedC5VideoUid] = useState<string>(() => {
    try {
      const saved = localStorage.getItem("reiki_c5_videos");
      const parsed = saved ? JSON.parse(saved) : [];
      return parsed.length > 0 ? parsed[0].uid : "";
    } catch {
      return "";
    }
  });
  const [newVideoTitle, setNewVideoTitle] = useState<string>("");
  const [newVideoUrl, setNewVideoUrl] = useState<string>("");
  const [newVideoDesc, setNewVideoDesc] = useState<string>("");
  const [videoFormError, setVideoFormError] = useState<string>("");

  const [c5Materials, setC5Materials] = useState<C5MaterialItem[]>(() => {
    try {
      const saved = localStorage.getItem("reiki_c5_materials");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [newLinkTitle, setNewLinkTitle] = useState<string>("");
  const [newLinkUrl, setNewLinkUrl] = useState<string>("");
  const [newLinkDesc, setNewLinkDesc] = useState<string>("");
  const [newLinkKind, setNewLinkKind] = useState<"blog_link" | "pdf_link">("blog_link");
  const [materialError, setMaterialError] = useState<string>("");
  const [activeFichaId, setActiveFichaId] = useState<string | null>(null);

  // Pantalla 7: Juegos evaluativos (Match dinámicas, Simuladores, Test Evaluativo & Diploma)
  const [matchAnswers, setMatchAnswers] = useState<Record<string, string>>({});
  const [matchChecked, setMatchChecked] = useState<boolean>(false);

  const [simSelections, setSimSelections] = useState<Record<string, number>>({});

  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [finalReflection, setFinalReflection] = useState<string>("");
  const [diplomaName, setDiplomaName] = useState<string>("");
  const [viewingDiploma, setViewingDiploma] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem("reiki_c5_videos", JSON.stringify(c5Videos));
    } catch {
      // ignore storage quota errors
    }
  }, [c5Videos]);

  useEffect(() => {
    try {
      const persistable = c5Materials.filter((m) => !m.url.startsWith("blob:"));
      localStorage.setItem("reiki_c5_materials", JSON.stringify(persistable));
    } catch {
      // ignore storage quota errors
    }
  }, [c5Materials]);

  const parseYouTubeInput = (
    rawUrl: string
  ): { embedId: string; type: "youtube" | "youtube_playlist" } | null => {
    const trimmed = rawUrl.trim();
    if (!trimmed) return null;

    try {
      const urlObj = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
      const listId = urlObj.searchParams.get("list");
      const vId = urlObj.searchParams.get("v");

      if (listId && !vId) {
        return { embedId: listId, type: "youtube_playlist" };
      }
      if (vId) {
        return { embedId: vId, type: "youtube" };
      }
      if (urlObj.hostname.includes("youtu.be")) {
        const pathId = urlObj.pathname.replace("/", "").trim();
        if (pathId) return { embedId: pathId, type: "youtube" };
      }
      if (urlObj.pathname.includes("/shorts/") || urlObj.pathname.includes("/embed/")) {
        const parts = urlObj.pathname.split("/").filter(Boolean);
        const last = parts[parts.length - 1];
        if (last) return { embedId: last, type: "youtube" };
      }
      if (listId) {
        return { embedId: listId, type: "youtube_playlist" };
      }
    } catch {
      // Fallback regex
    }

    const ytMatch = trimmed.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/
    );
    if (ytMatch && ytMatch[1]) {
      return { embedId: ytMatch[1], type: "youtube" };
    }
    return null;
  };

  const handleAddYouTubeVideo = (e: React.FormEvent) => {
    e.preventDefault();
    setVideoFormError("");
    const parsed = parseYouTubeInput(newVideoUrl);
    if (!parsed) {
      setVideoFormError("Pegá un enlace válido de YouTube (video o lista de reproducción).");
      return;
    }
    const uid = `c5v_${Date.now()}`;
    const item: C5VideoItem = {
      uid,
      embedId: parsed.embedId,
      type: parsed.type,
      title: newVideoTitle.trim() || "Video pedagógico de Clase V",
      description: newVideoDesc.trim() || "Recurso audiovisual para El Arte de Enseñar.",
      url: newVideoUrl.trim().startsWith("http") ? newVideoUrl.trim() : `https://${newVideoUrl.trim()}`
    };
    setC5Videos((prev) => [item, ...prev]);
    setSelectedC5VideoUid(uid);
    setNewVideoTitle("");
    setNewVideoUrl("");
    setNewVideoDesc("");
  };

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaterialError("");
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      setMaterialError("Seleccioná únicamente archivos en formato PDF.");
      return;
    }
    const blobUrl = URL.createObjectURL(file);
    const sizeKb = Math.max(1, Math.round(file.size / 1024));
    const sizeLabel =
      sizeKb >= 1024 ? `${(sizeKb / 1024).toFixed(1)} MB` : `${sizeKb} KB`;

    const newItem: C5MaterialItem = {
      id: `c5m_${Date.now()}`,
      kind: "pdf_upload",
      title: file.name.replace(/\.pdf$/i, ""),
      description: "Documento PDF cargado desde tu dispositivo.",
      url: blobUrl,
      fileName: file.name,
      fileSizeLabel: sizeLabel
    };
    setC5Materials((prev) => [newItem, ...prev]);
    e.target.value = "";
  };

  const handleAddMaterialLink = (e: React.FormEvent) => {
    e.preventDefault();
    setMaterialError("");
    const rawUrl = newLinkUrl.trim();
    if (!rawUrl) {
      setMaterialError("Ingresá una URL válida hacia el blog o documento.");
      return;
    }
    const normalizedUrl =
      rawUrl.startsWith("http://") || rawUrl.startsWith("https://")
        ? rawUrl
        : `https://${rawUrl}`;

    const newItem: C5MaterialItem = {
      id: `c5m_${Date.now()}`,
      kind: newLinkKind,
      title:
        newLinkTitle.trim() ||
        (newLinkKind === "blog_link" ? "Artículo del Blog Rincón Zen" : "Documento PDF"),
      description:
        newLinkDesc.trim() ||
        (newLinkKind === "blog_link"
          ? "Lectura complementaria en el blog."
          : "Documento externo para descarga o lectura."),
      url: normalizedUrl
    };
    setC5Materials((prev) => [newItem, ...prev]);
    setNewLinkTitle("");
    setNewLinkUrl("");
    setNewLinkDesc("");
  };

  const wordCount = simpleExplanation
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const matchScore = CLASS5_MATCH_GOALS.reduce(
    (acc, item) => (matchAnswers[item.id] === item.correctDynamicId ? acc + 1 : acc),
    0
  );

  const quizScore = CLASS5_TRIVIA_QUESTIONS.reduce(
    (acc, q) => (quizAnswers[q.id] === q.correctIndex ? acc + 1 : acc),
    0
  );
  const quizPassed = quizScore >= 5;

  const updateScenarioNote = (
    id: string,
    patch: Partial<{ pasa: string; necesita: string; dirias: string; showGuide: boolean }>
  ) => {
    setScenarioNotes((prev) => {
      const current = prev[id] || { pasa: "", necesita: "", dirias: "", showGuide: false };
      return { ...prev, [id]: { ...current, ...patch } };
    });
  };

  return (
    <>
      {/* === 1. INICIO — ENSEÑAR TAMBIÉN ES APRENDER === */}
      {activeTab === "c5_inicio" && (
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Flower2 className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS5_INICIO.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS5_INICIO.badge}
            </span>
          </div>

          {/* Frase de apertura */}
          <div className="bg-natural-sand/40 p-6 rounded-2xl border border-natural-border/80 text-center space-y-2">
            <p className="font-serif italic text-base sm:text-lg text-natural-dark leading-relaxed">
              &ldquo;{CLASS5_INICIO.openingQuote}&rdquo;
            </p>
          </div>

          {/* Propósito y Objetivos de aprendizaje */}
          <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-4">
            <div className="space-y-2">
              <h4 className="font-serif text-base font-bold text-natural-primary">
                El Arte de Enseñar
              </h4>
              {CLASS5_HERO.intro.map((p, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-natural-text-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-3 border-t border-natural-border/60 space-y-3">
              <p className="text-xs font-serif font-bold text-natural-dark">
                Objetivos de aprendizaje — Al finalizar la Clase V, el futuro maestro debería poder:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {CLASS5_HERO.objectives.map((obj, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-2xl bg-natural-eggshell/70 border border-natural-border/60 text-xs text-natural-dark leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-natural-primary shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bloques conceptuales */}
          <div className="grid grid-cols-1 gap-4">
            {CLASS5_INICIO.blocks.map((block, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-3"
              >
                <h4 className="font-serif text-base font-bold text-natural-dark">
                  {block.title}
                </h4>
                <div className="space-y-2.5">
                  {block.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-xs sm:text-sm text-natural-text-muted leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Para reflexionar */}
          <div className="bg-natural-cream/70 p-6 rounded-3xl border border-natural-border space-y-3">
            <h4 className="font-serif text-sm font-bold text-natural-primary flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              <span>Para reflexionar</span>
            </h4>
            <ul className="space-y-2">
              {CLASS5_INICIO.reflections.map((q, idx) => (
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

          {/* Actividad interactiva: Mi recuerdo de aprendizaje */}
          <div className="bg-gradient-to-br from-natural-eggshell to-natural-cream/60 p-6 rounded-3xl border border-natural-border space-y-4 shadow-3xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary">
                Práctica Reflexiva
              </span>
              <h4 className="font-serif text-base font-bold text-natural-dark">
                {CLASS5_INICIO.activity.title}
              </h4>
              <p className="text-xs text-natural-text-muted leading-relaxed">
                {CLASS5_INICIO.activity.instruction}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {CLASS5_INICIO.activity.fields.map((field) => (
                <div key={field.key} className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-natural-dark">
                    {field.label}
                  </label>
                  <textarea
                    rows={3}
                    value={memoryFields[field.key as keyof typeof memoryFields]}
                    onChange={(e) => {
                      setMemorySaved(false);
                      setMemoryFields((prev) => ({
                        ...prev,
                        [field.key]: e.target.value
                      }));
                    }}
                    placeholder={field.placeholder}
                    className="w-full p-2.5 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="text-[11px] italic text-natural-text-muted">
                {CLASS5_INICIO.activity.closingNote}
              </p>
              <button
                type="button"
                disabled={
                  !memoryFields.que.trim() &&
                  !memoryFields.como.trim() &&
                  !memoryFields.clima.trim()
                }
                onClick={() => setMemorySaved(true)}
                className="px-4 py-2 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors disabled:opacity-40"
              >
                Registrar mi reflexión
              </button>
            </div>

            {memorySaved && (
              <div className="p-3.5 rounded-2xl bg-white border border-natural-primary/30 text-xs text-natural-dark flex items-start gap-2 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 text-natural-primary shrink-0 mt-0.5" />
                <span>
                  Registro guardado en tu sesión. Tené presente qué clima y qué modo de explicar te ayudaron a aprender para llevarlos a tus propias clases.
                </span>
              </div>
            )}
          </div>

          {/* Enseñanza del módulo */}
          <div className="bg-natural-primary/10 border-l-4 border-natural-primary p-5 rounded-r-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary block mb-1">
              Enseñanza del módulo
            </span>
            <p className="font-serif italic text-sm sm:text-base text-natural-dark leading-relaxed">
              &ldquo;{CLASS5_INICIO.teaching}&rdquo;
            </p>
          </div>

          <div className="flex justify-end items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c5_adulto")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>El aprendizaje del adulto</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === 2. EL APRENDIZAJE DEL ADULTO === */}
      {activeTab === "c5_adulto" && (
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS5_ADULTO.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS5_ADULTO.badge}
            </span>
          </div>

          <div className="bg-natural-sand/40 p-6 rounded-2xl border border-natural-border/80 text-center">
            <p className="font-serif italic text-base sm:text-lg text-natural-dark leading-relaxed">
              &ldquo;{CLASS5_ADULTO.openingQuote}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {CLASS5_ADULTO.blocks.map((block, idx) => (
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

          {/* Cuatro condiciones */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              Cuatro condiciones que favorecen el aprendizaje
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CLASS5_ADULTO.conditions.map((cond) => (
                <div
                  key={cond.number}
                  className="bg-white p-5 rounded-3xl border border-natural-border shadow-3xs space-y-2"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-natural-primary text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {cond.number}
                    </span>
                    <h5 className="font-serif text-sm font-bold text-natural-dark">
                      {cond.title}
                    </h5>
                  </div>
                  <p className="text-xs text-natural-text-muted leading-relaxed pl-8">
                    {cond.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ritmos y estilos de aprendizaje */}
          <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-3">
            <h4 className="font-serif text-base font-bold text-natural-primary">
              {CLASS5_ADULTO.pacingAndStyles.title}
            </h4>
            {CLASS5_ADULTO.pacingAndStyles.paragraphs.map((p, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-natural-text-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* La importancia del error */}
          <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-4">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              {CLASS5_ADULTO.errorsSection.title}
            </h4>
            {CLASS5_ADULTO.errorsSection.paragraphs.map((p, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-natural-text-muted leading-relaxed">
                {p}
              </p>
            ))}
            <p className="text-xs font-semibold text-natural-dark pt-1">
              {CLASS5_ADULTO.errorsSection.compareLabel}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-red-700 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Respuesta que bloquea</span>
                </span>
                <p className="text-xs text-red-950 italic leading-relaxed">
                  {CLASS5_ADULTO.errorsSection.wrongResponse}
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-green-50/70 border border-green-200 space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-green-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Respuesta que acompaña</span>
                </span>
                <p className="text-xs text-green-950 italic leading-relaxed">
                  {CLASS5_ADULTO.errorsSection.rightResponse}
                </p>
              </div>
            </div>
          </div>

          {/* Actividad: Dos alumnos, una enseñanza */}
          <div className="bg-gradient-to-br from-natural-eggshell to-natural-cream/60 p-6 rounded-3xl border border-natural-border space-y-4 shadow-3xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary">
                Caso Práctico
              </span>
              <h4 className="font-serif text-base font-bold text-natural-dark">
                {CLASS5_ADULTO.activity.title}
              </h4>
              <p className="text-xs text-natural-text-muted leading-relaxed">
                {CLASS5_ADULTO.activity.situation}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {CLASS5_ADULTO.activity.students.map((st) => (
                <div
                  key={st.name}
                  className="p-4 rounded-2xl bg-white border border-natural-border space-y-1"
                >
                  <p className="text-xs font-serif font-bold text-natural-primary">
                    {st.name}
                  </p>
                  <p className="text-xs text-natural-dark leading-relaxed">
                    {st.profile}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2.5 pt-2">
              <p className="text-xs font-bold text-natural-dark">
                ¿Cómo decidirías acompañar a ambos durante la práctica?
              </p>
              {CLASS5_ADULTO.activity.options.map((opt) => {
                const isSelected = selectedAdultOption === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedAdultOption(opt.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border text-xs leading-relaxed transition-all ${
                      isSelected
                        ? opt.isRecommended
                          ? "bg-green-50/70 border-green-400 text-natural-dark font-medium"
                          : "bg-amber-50/70 border-amber-300 text-natural-dark font-medium"
                        : "bg-white border-natural-border hover:bg-natural-cream/60 text-natural-dark"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}

              {selectedAdultOption && (
                <div className="p-4 rounded-2xl bg-white border border-natural-primary/30 text-xs text-natural-dark leading-relaxed animate-fade-in">
                  {
                    CLASS5_ADULTO.activity.options.find(
                      (o) => o.id === selectedAdultOption
                    )?.feedback
                  }
                </div>
              )}
            </div>
          </div>

          <div className="bg-natural-primary/10 border-l-4 border-natural-primary p-5 rounded-r-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary block mb-1">
              Enseñanza del módulo
            </span>
            <p className="font-serif italic text-sm sm:text-base text-natural-dark leading-relaxed">
              &ldquo;{CLASS5_ADULTO.teaching}&rdquo;
            </p>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c5_inicio")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c5_explicar")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>El arte de explicar</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === 3. EL ARTE DE EXPLICAR === */}
      {activeTab === "c5_explicar" && (
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS5_EXPLICAR.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS5_EXPLICAR.badge}
            </span>
          </div>

          <div className="bg-natural-sand/40 p-6 rounded-2xl border border-natural-border/80 text-center">
            <p className="font-serif italic text-base sm:text-lg text-natural-dark leading-relaxed">
              &ldquo;{CLASS5_EXPLICAR.openingQuote}&rdquo;
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-3">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              Comprender algo no siempre significa poder explicarlo
            </h4>
            {CLASS5_EXPLICAR.introParagraphs.map((p, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-natural-text-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Estructura en 5 pasos con ejemplo aplicado a Gassho */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              Una estructura sencilla para explicar (con ejemplo aplicado a Gasshō)
            </h4>
            <div className="space-y-3">
              {CLASS5_EXPLICAR.steps.map((item) => (
                <div
                  key={item.step}
                  className="bg-white p-5 rounded-3xl border border-natural-border shadow-3xs grid grid-cols-1 lg:grid-cols-2 gap-4 items-start"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-natural-primary text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                        {item.step}
                      </span>
                      <h5 className="font-serif text-sm font-bold text-natural-dark">
                        {item.title}
                      </h5>
                    </div>
                    <p className="text-xs text-natural-text-muted leading-relaxed pl-8">
                      {item.description}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-natural-eggshell/80 border border-natural-border/70">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-natural-primary block mb-1">
                      Ejemplo: enseñar Gasshō
                    </span>
                    <p className="text-xs italic text-natural-dark leading-relaxed">
                      {item.exampleGassho}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ejemplos, metáforas y explicaciones circulares */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-2.5">
              <h4 className="font-serif text-base font-bold text-natural-dark">
                {CLASS5_EXPLICAR.examplesVsMetaphors.title}
              </h4>
              {CLASS5_EXPLICAR.examplesVsMetaphors.paragraphs.map((p, idx) => (
                <p key={idx} className="text-xs text-natural-text-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-2.5">
              <h4 className="font-serif text-base font-bold text-natural-dark">
                {CLASS5_EXPLICAR.circularExplanations.title}
              </h4>
              {CLASS5_EXPLICAR.circularExplanations.paragraphs.map((p, idx) => (
                <p key={idx} className="text-xs text-natural-text-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Las preguntas como herramienta */}
          <div className="bg-natural-cream/70 p-6 rounded-3xl border border-natural-border space-y-3">
            <h4 className="font-serif text-base font-bold text-natural-primary">
              {CLASS5_EXPLICAR.betterQuestions.title}
            </h4>
            <p className="text-xs sm:text-sm text-natural-dark leading-relaxed">
              {CLASS5_EXPLICAR.betterQuestions.intro}
            </p>
            <p className="text-xs font-bold text-natural-dark pt-1">
              Preguntas que realmente verifican comprensión:
            </p>
            <ul className="space-y-1.5">
              {CLASS5_EXPLICAR.betterQuestions.betterList.map((q, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-natural-dark flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-natural-primary shrink-0 mt-0.5" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actividad: Explicar sin complicar (max 100 palabras) */}
          <div className="bg-gradient-to-br from-natural-eggshell to-natural-cream/60 p-6 rounded-3xl border border-natural-border space-y-4 shadow-3xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary">
                Taller de Síntesis
              </span>
              <h4 className="font-serif text-base font-bold text-natural-dark">
                {CLASS5_EXPLICAR.activity.title}
              </h4>
              <p className="text-xs text-natural-text-muted leading-relaxed">
                {CLASS5_EXPLICAR.activity.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {CLASS5_EXPLICAR.activity.concepts.map((concept) => (
                <button
                  key={concept.id}
                  type="button"
                  onClick={() => setSelectedConceptId(concept.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
                    selectedConceptId === concept.id
                      ? "bg-natural-primary text-white border-natural-primary"
                      : "bg-white text-natural-dark border-natural-border hover:bg-natural-sand/40"
                  }`}
                >
                  {concept.name}
                </button>
              ))}
            </div>

            <p className="text-[11px] italic text-natural-primary">
              Pista: {CLASS5_EXPLICAR.activity.concepts.find((c) => c.id === selectedConceptId)?.hint}
            </p>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold text-natural-dark">
                  Tu explicación en palabras simples:
                </span>
                <span
                  className={`font-mono font-bold ${
                    wordCount > CLASS5_EXPLICAR.activity.maxWords
                      ? "text-red-600"
                      : "text-natural-primary"
                  }`}
                >
                  {wordCount} / {CLASS5_EXPLICAR.activity.maxWords} palabras
                </span>
              </div>
              <textarea
                rows={4}
                value={simpleExplanation}
                onChange={(e) => setSimpleExplanation(e.target.value)}
                placeholder="Escribí cómo se lo explicarías a alguien que nunca practicó Reiki..."
                className="w-full p-3 rounded-2xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
              />
            </div>

            <div className="bg-white/90 p-4 rounded-2xl border border-natural-border space-y-2.5">
              <p className="text-xs font-bold text-natural-dark">
                Revisión personal al terminar:
              </p>
              {CLASS5_EXPLICAR.activity.selfCheckQuestions.map((question, idx) => (
                <label
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-natural-dark cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={Boolean(selfChecks[idx])}
                    onChange={(e) =>
                      setSelfChecks((prev) => ({ ...prev, [idx]: e.target.checked }))
                    }
                    className="mt-0.5 accent-natural-primary"
                  />
                  <span>{question}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-natural-primary/10 border-l-4 border-natural-primary p-5 rounded-r-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary block mb-1">
              Enseñanza del módulo
            </span>
            <p className="font-serif italic text-sm sm:text-base text-natural-dark leading-relaxed">
              &ldquo;{CLASS5_EXPLICAR.teaching}&rdquo;
            </p>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c5_adulto")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c5_dinamicas")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Dinámicas para enseñar</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === 4. DINÁMICAS PARA ENSEÑAR REIKI === */}
      {activeTab === "c5_dinamicas" && (
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS5_DINAMICAS.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS5_DINAMICAS.badge}
            </span>
          </div>

          <div className="bg-natural-sand/40 p-6 rounded-2xl border border-natural-border/80 text-center">
            <p className="font-serif italic text-base sm:text-lg text-natural-dark leading-relaxed">
              &ldquo;{CLASS5_DINAMICAS.openingQuote}&rdquo;
            </p>
          </div>

          <p className="text-xs sm:text-sm text-natural-text-muted leading-relaxed">
            {CLASS5_DINAMICAS.intro}
          </p>

          {/* 4 preguntas previas */}
          <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-3">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              Antes de elegir una dinámica, respondé estas cuatro preguntas:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {CLASS5_DINAMICAS.fourPlanningQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-natural-eggshell/70 border border-natural-border/70 text-xs text-natural-dark flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-natural-primary text-white text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cronómetro */}
          <TeachingTimer />

          {/* Cinco dinámicas interactivas */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              Cinco dinámicas para trabajar en la maestría
            </h4>

            <div className="flex flex-wrap gap-2">
              {CLASS5_DINAMICAS.dynamics.map((dyn) => (
                <button
                  key={dyn.id}
                  type="button"
                  onClick={() => setActiveDynamicId(dyn.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                    activeDynamicId === dyn.id
                      ? "bg-natural-primary text-white border-natural-primary shadow-xs"
                      : "bg-white text-natural-dark border-natural-border hover:bg-natural-cream"
                  }`}
                >
                  {dyn.number}. {dyn.title.replace(/^Dinámica \d+: /, "")}
                </button>
              ))}
            </div>

            {CLASS5_DINAMICAS.dynamics
              .filter((d) => d.id === activeDynamicId)
              .map((dyn) => (
                <div
                  key={dyn.id}
                  className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-4 animate-fade-in"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3 border-natural-border/60">
                    <h5 className="font-serif text-lg font-bold text-natural-dark">
                      {dyn.title}
                    </h5>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-natural-cream text-natural-primary">
                      Tiempo sugerido: {dyn.durationMinutes} min
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-natural-eggshell/70 border border-natural-border/60 space-y-1">
                      <span className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                        Objetivo
                      </span>
                      <p className="text-xs text-natural-dark leading-relaxed">
                        {dyn.objective}
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-natural-eggshell/70 border border-natural-border/60 space-y-1">
                      <span className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                        Materiales
                      </span>
                      <p className="text-xs text-natural-dark leading-relaxed">
                        {dyn.materials}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold text-natural-dark">Desarrollo paso a paso:</p>
                    <ol className="space-y-1.5 list-decimal pl-5 text-xs text-natural-text-muted leading-relaxed">
                      {dyn.development.map((step, sIdx) => (
                        <li key={sIdx}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="p-4 rounded-2xl bg-natural-sand/35 border border-natural-border/70 space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-natural-primary flex items-center gap-1">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>Ejemplo o variante práctica</span>
                    </span>
                    <p className="text-xs text-natural-dark leading-relaxed">
                      {dyn.exampleOrSituation}
                    </p>
                  </div>

                  <div className="text-xs text-natural-primary italic font-medium pt-1">
                    Cierre sugerido: {dyn.closure}
                  </div>
                </div>
              ))}
          </div>

          {/* Tabla: Cómo elegir la dinámica adecuada */}
          <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-3 overflow-x-auto">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              Cómo elegir la dinámica adecuada
            </h4>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-natural-border text-natural-primary font-serif">
                  <th className="py-2.5 pr-4">Si necesitás trabajar...</th>
                  <th className="py-2.5">Podés elegir...</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-natural-border/60">
                {CLASS5_DINAMICAS.matrix.map((row) => (
                  <tr key={row.dynamicId} className="hover:bg-natural-eggshell/50">
                    <td className="py-2.5 pr-4 text-natural-dark">{row.goal}</td>
                    <td className="py-2.5">
                      <button
                        type="button"
                        onClick={() => setActiveDynamicId(row.dynamicId)}
                        className="font-semibold text-natural-primary hover:underline text-left"
                      >
                        {row.recommendedDynamic}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Actividad de integración: Diseñá tu propia dinámica */}
          <div className="bg-gradient-to-br from-natural-eggshell to-natural-cream/60 p-6 rounded-3xl border border-natural-border space-y-4 shadow-3xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary">
                Actividad de Integración
              </span>
              <h4 className="font-serif text-base font-bold text-natural-dark">
                {CLASS5_DINAMICAS.integrationActivity.title}
              </h4>
              <p className="text-xs text-natural-text-muted leading-relaxed">
                {CLASS5_DINAMICAS.integrationActivity.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-natural-dark">Objetivo concreto</label>
                <input
                  type="text"
                  value={customDynamic.objetivo}
                  onChange={(e) => {
                    setCustomDynamicSaved(false);
                    setCustomDynamic((p) => ({ ...p, objetivo: e.target.value }));
                  }}
                  placeholder="Ej.: distinguir sensación de interpretación en Byosen..."
                  className="w-full p-2.5 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-natural-dark">Tiempo y materiales</label>
                <input
                  type="text"
                  value={customDynamic.materiales}
                  onChange={(e) => {
                    setCustomDynamicSaved(false);
                    setCustomDynamic((p) => ({ ...p, materiales: e.target.value }));
                  }}
                  placeholder="Ej.: 15 minutos, sillas en ronda y tarjetas..."
                  className="w-full p-2.5 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-[11px] font-bold text-natural-dark">
                  Consigna para los alumnos (qué hacen paso a paso)
                </label>
                <textarea
                  rows={2}
                  value={customDynamic.consigna}
                  onChange={(e) => {
                    setCustomDynamicSaved(false);
                    setCustomDynamic((p) => ({ ...p, consigna: e.target.value }));
                  }}
                  placeholder="Describí la consigna con lenguaje claro y directo..."
                  className="w-full p-2.5 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-[11px] font-bold text-natural-dark">
                  ¿Cómo comprobás que aprendieron lo propuesto?
                </label>
                <input
                  type="text"
                  value={customDynamic.verificacion}
                  onChange={(e) => {
                    setCustomDynamicSaved(false);
                    setCustomDynamic((p) => ({ ...p, verificacion: e.target.value }));
                  }}
                  placeholder="Ej.: cada pareja comparte en una frase qué observó..."
                  className="w-full p-2.5 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[11px] italic text-natural-primary">
                Pregunta filtro: {CLASS5_DINAMICAS.integrationActivity.checkQuestion}
              </p>
              <button
                type="button"
                disabled={!customDynamic.objetivo.trim() || !customDynamic.consigna.trim()}
                onClick={() => setCustomDynamicSaved(true)}
                className="px-4 py-2 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors disabled:opacity-40"
              >
                Guardar borrador de dinámica
              </button>
            </div>

            {customDynamicSaved && (
              <div className="p-3.5 rounded-2xl bg-white border border-natural-primary/30 text-xs text-natural-dark flex items-start gap-2 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 text-natural-primary shrink-0 mt-0.5" />
                <span>
                  Borrador registrado. Verificá que el cierre deje tiempo real para responder dudas y consolidar el aprendizaje.
                </span>
              </div>
            )}
          </div>

          <div className="bg-natural-primary/10 border-l-4 border-natural-primary p-5 rounded-r-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary block mb-1">
              Enseñanza del módulo
            </span>
            <p className="font-serif italic text-sm sm:text-base text-natural-dark leading-relaxed">
              &ldquo;{CLASS5_DINAMICAS.teaching}&rdquo;
            </p>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c5_explicar")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c5_grupo")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>El grupo como espacio de aprendizaje</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === 5. EL GRUPO COMO ESPACIO DE APRENDIZAJE === */}
      {activeTab === "c5_grupo" && (
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border">
            <div className="flex items-center gap-3">
              <Compass className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                {CLASS5_GRUPO.sectionTitle}
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              {CLASS5_GRUPO.badge}
            </span>
          </div>

          <div className="bg-natural-sand/40 p-6 rounded-2xl border border-natural-border/80 text-center">
            <p className="font-serif italic text-base sm:text-lg text-natural-dark leading-relaxed">
              &ldquo;{CLASS5_GRUPO.openingQuote}&rdquo;
            </p>
          </div>

          <p className="text-xs sm:text-sm text-natural-text-muted leading-relaxed">
            {CLASS5_GRUPO.intro}
          </p>

          {/* Acuerdos iniciales */}
          <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-3">
            <h4 className="font-serif text-base font-bold text-natural-dark">
              La importancia de establecer acuerdos
            </h4>
            <ul className="space-y-2">
              {CLASS5_GRUPO.agreements.map((agr, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-natural-dark leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-natural-primary shrink-0 mt-0.5" />
                  <span>{agr}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4 situaciones frecuentes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CLASS5_GRUPO.situationsGuide.map((sg, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-3xl border border-natural-border shadow-3xs space-y-2"
              >
                <h5 className="font-serif text-sm font-bold text-natural-primary">
                  {sg.title}
                </h5>
                <p className="text-xs text-natural-text-muted leading-relaxed">
                  {sg.description}
                </p>
              </div>
            ))}
          </div>

          {/* Actividad: Cuatro situaciones, cuatro decisiones */}
          <div className="bg-gradient-to-br from-natural-eggshell to-natural-cream/60 p-6 rounded-3xl border border-natural-border space-y-5 shadow-3xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary">
                Entrenamiento de Criterio
              </span>
              <h4 className="font-serif text-base font-bold text-natural-dark">
                Actividad: Cuatro situaciones, cuatro decisiones
              </h4>
              <p className="text-xs text-natural-text-muted leading-relaxed">
                Leé cada situación real de aula, anotá brevemente tu análisis y comparalo con la guía pedagógica sugerida.
              </p>
            </div>

            <div className="space-y-4">
              {CLASS5_GRUPO.activityScenarios.map((sc) => {
                const state = scenarioNotes[sc.id] || {
                  pasa: "",
                  necesita: "",
                  dirias: "",
                  showGuide: false
                };
                return (
                  <div
                    key={sc.id}
                    className="bg-white p-5 rounded-2xl border border-natural-border space-y-3"
                  >
                    <h5 className="font-serif text-sm font-bold text-natural-dark">
                      {sc.title}
                    </h5>
                    <p className="text-xs text-natural-text-muted leading-relaxed bg-natural-eggshell/60 p-3 rounded-xl">
                      {sc.situation}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                      <input
                        type="text"
                        value={state.pasa}
                        onChange={(e) => updateScenarioNote(sc.id, { pasa: e.target.value })}
                        placeholder="¿Qué está pasando?"
                        className="p-2 rounded-xl border border-natural-border bg-natural-bg text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                      />
                      <input
                        type="text"
                        value={state.necesita}
                        onChange={(e) => updateScenarioNote(sc.id, { necesita: e.target.value })}
                        placeholder="¿Qué necesita el grupo?"
                        className="p-2 rounded-xl border border-natural-border bg-natural-bg text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                      />
                      <input
                        type="text"
                        value={state.dirias}
                        onChange={(e) => updateScenarioNote(sc.id, { dirias: e.target.value })}
                        placeholder="¿Qué dirías o harías?"
                        className="p-2 rounded-xl border border-natural-border bg-natural-bg text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() =>
                          updateScenarioNote(sc.id, { showGuide: !state.showGuide })
                        }
                        className="text-[11px] font-semibold text-natural-primary hover:underline"
                      >
                        {state.showGuide ? "Ocultar criterio sugerido" : "Ver criterio pedagógico sugerido"}
                      </button>
                    </div>

                    {state.showGuide && (
                      <div className="p-4 rounded-2xl bg-natural-cream/70 border border-natural-primary/25 text-xs space-y-1.5 animate-fade-in">
                        <p>
                          <strong className="text-natural-dark">Qué pasa:</strong>{" "}
                          <span className="text-natural-text-muted">{sc.whatHappens}</span>
                        </p>
                        <p>
                          <strong className="text-natural-dark">Qué necesita el grupo:</strong>{" "}
                          <span className="text-natural-text-muted">{sc.groupNeed}</span>
                        </p>
                        <p>
                          <strong className="text-natural-primary">Intervención sugerida:</strong>{" "}
                          <span className="text-natural-dark">{sc.suggestedIntervention}</span>
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Para reflexionar */}
          <div className="bg-natural-cream/70 p-6 rounded-3xl border border-natural-border space-y-3">
            <h4 className="font-serif text-sm font-bold text-natural-primary flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              <span>Para reflexionar</span>
            </h4>
            <ul className="space-y-2">
              {CLASS5_GRUPO.reflections.map((r, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-natural-dark flex items-start gap-2 leading-relaxed"
                >
                  <span className="text-natural-primary font-bold">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-natural-primary/10 border-l-4 border-natural-primary p-5 rounded-r-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-natural-primary block mb-1">
              Enseñanza del módulo
            </span>
            <p className="font-serif italic text-sm sm:text-base text-natural-dark leading-relaxed">
              &ldquo;{CLASS5_GRUPO.teaching}&rdquo;
            </p>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border">
            <button
              onClick={() => onNavigateTab("c5_dinamicas")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c5_videos")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Videos y Material</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === 6. VIDEOS Y MATERIAL (BIBLIOTECA Y FICHAS IMPRIMIBLES) === */}
      {activeTab === "c5_videos" && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between border-b pb-4 border-natural-border print:hidden">
            <div className="flex items-center gap-3">
              <Video className="w-6 h-6 text-natural-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
                Videos y Material (Clase V)
              </h3>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
              Biblioteca y Fichas Imprimibles
            </span>
          </div>

          <p className="text-natural-text-muted text-xs sm:text-sm leading-relaxed print:hidden">
            Acá tenés fichas imprimibles para preparar tus clases, además del reproductor de YouTube, carga de PDF y enlaces al blog.
          </p>

          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 print:hidden">
            <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 leading-relaxed font-medium">
              Esta sección está pendiente de ampliación: en breve se irá subiendo más material audiovisual, lecturas y fichas complementarias para El Arte de Enseñar.
            </p>
          </div>

          {/* Fichas imprimibles */}
          <div className="space-y-4">
            <div className="flex items-center justify-between print:hidden">
              <h4 className="font-serif text-base font-bold text-natural-dark flex items-center gap-2">
                <Printer className="w-4 h-4 text-natural-primary" />
                <span>Fichas Imprimibles para el Futuro Maestro</span>
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CLASS5_FICHAS_IMPRIMIBLES.map((ficha) => {
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
                        <span>Imprimir esta ficha</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Biblioteca YouTube + PDF + Blog */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 print:hidden">
            <div className="lg:col-span-2 space-y-4">
              {c5Videos.find((v) => v.uid === selectedC5VideoUid) ? (
                (() => {
                  const activeVid = c5Videos.find((v) => v.uid === selectedC5VideoUid)!;
                  const embedSrc =
                    activeVid.type === "youtube_playlist"
                      ? `https://www.youtube.com/embed/videoseries?list=${activeVid.embedId}`
                      : `https://www.youtube.com/embed/${activeVid.embedId}`;
                  return (
                    <div className="bg-white p-4 rounded-3xl border border-natural-border shadow-3xs overflow-hidden">
                      <div className="aspect-video w-full rounded-2xl overflow-hidden border border-natural-border bg-black">
                        <iframe
                          className="w-full h-full"
                          src={embedSrc}
                          title={activeVid.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="mt-4 flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-serif text-base text-natural-dark font-bold">
                              {activeVid.title}
                            </span>
                            <span className="text-[9px] px-2 py-0.5 rounded font-mono font-bold uppercase bg-red-100 text-red-700">
                              {activeVid.type === "youtube_playlist" ? "Playlist YouTube" : "YouTube"}
                            </span>
                          </div>
                          <p className="text-xs text-natural-text-muted leading-relaxed">
                            {activeVid.description}
                          </p>
                        </div>
                        <a
                          href={activeVid.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-natural-cream hover:bg-natural-sand text-[11px] font-semibold text-natural-dark transition-colors shrink-0"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-natural-primary" />
                          <span>Abrir en YouTube</span>
                        </a>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="bg-natural-sand/30 border border-dashed border-natural-border p-10 text-center rounded-3xl space-y-2">
                  <Youtube className="w-12 h-12 text-natural-primary/40 mx-auto" />
                  <p className="text-sm font-serif font-bold text-natural-dark">
                    Reproductor de YouTube listo
                  </p>
                  <p className="text-xs text-natural-text-muted max-w-md mx-auto">
                    Pegá el enlace de un video o lista de reproducción de YouTube en el panel derecho para reproducirlo acá mismo.
                  </p>
                </div>
              )}

              <div className="bg-white p-5 rounded-3xl border border-natural-border shadow-3xs space-y-4">
                <div className="flex items-center justify-between border-b pb-2.5 border-natural-border/60">
                  <h4 className="font-serif text-sm font-bold text-natural-dark flex items-center gap-2">
                    <FileText className="w-4 h-4 text-natural-primary" />
                    <span>Archivos PDF y Links al Blog ({c5Materials.length})</span>
                  </h4>
                </div>

                {c5Materials.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {c5Materials.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-2xl border border-natural-border bg-natural-eggshell/50 flex flex-col justify-between gap-3"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={`text-[9px] font-mono uppercase font-bold px-2 py-0.5 rounded ${
                                item.kind === "blog_link"
                                  ? "bg-natural-cream text-natural-primary"
                                  : "bg-amber-50 text-amber-800 border border-amber-200/70"
                              }`}
                            >
                              {item.kind === "blog_link"
                                ? "Link al Blog"
                                : item.kind === "pdf_upload"
                                ? `PDF ${item.fileSizeLabel ? `· ${item.fileSizeLabel}` : ""}`
                                : "PDF por enlace"}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                setC5Materials((prev) => prev.filter((m) => m.id !== item.id))
                              }
                              aria-label="Eliminar material"
                              className="text-natural-text-muted hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <h5 className="font-serif text-sm font-bold text-natural-dark leading-snug">
                            {item.title}
                          </h5>
                          <p className="text-[11px] text-natural-text-muted leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-end gap-2 pt-2 border-t border-natural-border/50">
                          {item.kind === "pdf_upload" && item.fileName ? (
                            <a
                              href={item.url}
                              download={item.fileName}
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-natural-primary text-white rounded-lg text-[10px] uppercase tracking-wider font-bold hover:bg-natural-primary/95 transition-colors"
                            >
                              <Download className="w-3 h-3" />
                              <span>Descargar PDF</span>
                            </a>
                          ) : (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-natural-primary text-white rounded-lg text-[10px] uppercase tracking-wider font-bold hover:bg-natural-primary/95 transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>{item.kind === "blog_link" ? "Leer en el Blog" : "Abrir PDF"}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-natural-text-muted py-4 text-center">
                    Todavía no hay archivos PDF ni enlaces cargados. Podés subir un PDF o agregar un link al blog desde el panel derecho.
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-white p-5 rounded-3xl border border-natural-border shadow-3xs space-y-4">
                <h4 className="font-serif text-xs font-bold text-natural-dark uppercase tracking-widest border-b pb-2 border-natural-border/60 flex items-center gap-1.5">
                  <Youtube className="w-4 h-4 text-red-600" />
                  <span>Videos de YouTube ({c5Videos.length})</span>
                </h4>

                {c5Videos.length > 0 && (
                  <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                    {c5Videos.map((vid) => {
                      const isSelected = vid.uid === selectedC5VideoUid;
                      return (
                        <div
                          key={vid.uid}
                          className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                            isSelected
                              ? "bg-natural-cream text-natural-primary border-natural-primary font-medium"
                              : "bg-natural-eggshell hover:bg-natural-sand/30 border-natural-border/70 text-natural-dark"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => setSelectedC5VideoUid(vid.uid)}
                            className="flex items-center gap-2 text-xs text-left min-w-0 flex-1"
                          >
                            <div
                              className={`p-1.5 rounded-lg shrink-0 ${
                                isSelected
                                  ? "bg-natural-primary text-white"
                                  : "bg-natural-sand text-natural-primary"
                              }`}
                            >
                              <Play className="w-3 h-3 fill-current" />
                            </div>
                            <span className="truncate font-semibold">{vid.title}</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setC5Videos((prev) => prev.filter((item) => item.uid !== vid.uid));
                              if (selectedC5VideoUid === vid.uid) setSelectedC5VideoUid("");
                            }}
                            aria-label="Quitar video"
                            className="p-1 text-natural-text-muted hover:text-red-600 transition-colors shrink-0"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}

                <form
                  onSubmit={handleAddYouTubeVideo}
                  className="space-y-2.5 pt-2 border-t border-natural-border/50"
                >
                  <p className="text-[10px] font-mono uppercase font-bold text-natural-primary">
                    + Agregar video o playlist de YouTube
                  </p>
                  <input
                    type="text"
                    value={newVideoTitle}
                    onChange={(e) => setNewVideoTitle(e.target.value)}
                    placeholder="Título del video..."
                    className="w-full p-2 rounded-xl border border-natural-border bg-natural-bg text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                  />
                  <input
                    type="text"
                    value={newVideoUrl}
                    onChange={(e) => setNewVideoUrl(e.target.value)}
                    placeholder="URL de YouTube (watch?v=... o list=...)"
                    className="w-full p-2 rounded-xl border border-natural-border bg-natural-bg text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                  />
                  <input
                    type="text"
                    value={newVideoDesc}
                    onChange={(e) => setNewVideoDesc(e.target.value)}
                    placeholder="Breve descripción (opcional)"
                    className="w-full p-2 rounded-xl border border-natural-border bg-natural-bg text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                  />
                  {videoFormError && (
                    <p className="text-[11px] text-red-600">{videoFormError}</p>
                  )}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Agregar Video</span>
                  </button>
                </form>
              </div>

              <div className="bg-gradient-to-b from-natural-cream/80 to-natural-sand/50 p-5 rounded-3xl border border-natural-border shadow-3xs space-y-4">
                <h4 className="font-serif text-xs font-bold text-natural-dark uppercase tracking-widest border-b pb-2 border-natural-border/60 flex items-center gap-1.5">
                  <Upload className="w-4 h-4 text-natural-primary" />
                  <span>Subir PDF o Link al Blog</span>
                </h4>

                <label className="flex flex-col items-center justify-center gap-1.5 p-4 rounded-2xl border-2 border-dashed border-natural-primary/35 bg-white/80 hover:bg-white cursor-pointer transition-colors text-center">
                  <Upload className="w-5 h-5 text-natural-primary" />
                  <span className="text-xs font-semibold text-natural-dark">
                    Subir archivo PDF
                  </span>
                  <span className="text-[10px] text-natural-text-muted">
                    Seleccioná un documento .pdf desde tu dispositivo
                  </span>
                  <input
                    type="file"
                    accept="application/pdf,.pdf"
                    onChange={handlePdfUpload}
                    className="hidden"
                  />
                </label>

                <form
                  onSubmit={handleAddMaterialLink}
                  className="space-y-2.5 pt-2 border-t border-natural-border/60"
                >
                  <p className="text-[10px] font-mono uppercase font-bold text-natural-primary flex items-center gap-1">
                    <LinkIcon className="w-3 h-3" />
                    <span>Agregar enlace al blog o PDF</span>
                  </p>
                  <select
                    value={newLinkKind}
                    onChange={(e) => setNewLinkKind(e.target.value as "blog_link" | "pdf_link")}
                    className="w-full p-2 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                  >
                    <option value="blog_link">Link al Blog / Artículo</option>
                    <option value="pdf_link">Enlace externo a PDF (Drive / web)</option>
                  </select>
                  <input
                    type="text"
                    value={newLinkTitle}
                    onChange={(e) => setNewLinkTitle(e.target.value)}
                    placeholder="Título del artículo o PDF..."
                    className="w-full p-2 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                  />
                  <input
                    type="text"
                    value={newLinkUrl}
                    onChange={(e) => setNewLinkUrl(e.target.value)}
                    placeholder="https://www.rinconzen.com.ar/..."
                    className="w-full p-2 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                  />
                  <input
                    type="text"
                    value={newLinkDesc}
                    onChange={(e) => setNewLinkDesc(e.target.value)}
                    placeholder="Nota breve (opcional)"
                    className="w-full p-2 rounded-xl border border-natural-border bg-white text-xs text-natural-dark focus:outline-none focus:border-natural-primary"
                  />
                  {materialError && (
                    <p className="text-[11px] text-red-600">{materialError}</p>
                  )}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-natural-dark text-white rounded-xl text-xs font-semibold hover:bg-natural-dark/90 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Guardar Enlace</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-natural-border print:hidden">
            <button
              onClick={() => onNavigateTab("c5_grupo")}
              className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <button
              onClick={() => onNavigateTab("c5_juegos")}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
            >
              <span>Juegos Evaluativos</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* === 7. JUEGOS EVALUATIVOS (SIMULADORES, DESAFÍOS Y EVALUACIÓN) === */}
      {activeTab === "c5_juegos" && (
        <div className="space-y-6 animate-fade-in print:p-0">
          {viewingDiploma ? (
            /* DIPLOMA CLASE V */
            <div className="bg-[#FAF8F5] border-8 border-double border-[#C29B38] p-8 md:p-16 rounded-3xl text-center shadow-lg relative max-w-2xl mx-auto my-4 animate-fade-in print:border-8 print:shadow-none print:my-0">
              <div className="absolute inset-4 border border-[#C29B38]/30 pointer-events-none" />

              <div className="absolute top-6 left-6 right-6 flex justify-between text-xs font-mono text-[#C29B38]/70 print:hidden">
                <span>MAESTRÍA REIKI TRADICIONAL JAPONÉS</span>
                <span>CLASE V</span>
              </div>

              <div className="space-y-6 relative z-10">
                <Flower2 className="w-14 h-14 text-[#C29B38] mx-auto opacity-80" />

                <div className="space-y-2">
                  <span className="font-serif text-[11px] tracking-widest text-[#C29B38] font-bold block uppercase">
                    Diploma de Honor
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif text-natural-dark font-bold italic tracking-tight">
                    El Arte de Enseñar
                  </h2>
                </div>

                <p className="font-serif text-xs italic text-natural-text-muted leading-relaxed max-w-md mx-auto">
                  Se certifica con profundo honor, alegría y gratitud sintonizada que:
                </p>

                <p className="text-2xl sm:text-3xl font-serif text-natural-dark font-extrabold border-b border-[#C29B38]/30 pb-2 inline-block px-8">
                  {diplomaName || "Estudiante de Rincón Zen"}
                </p>

                <p className="text-xs text-natural-text-muted leading-relaxed max-w-md mx-auto">
                  Ha completado con éxito las prácticas, simuladores y evaluación de la{" "}
                  <strong className="text-natural-dark">Clase V: El Arte de Enseñar</strong>, integrando los fundamentos del aprendizaje adulto, la explicación clara y honesta en cinco pasos, el diseño de dinámicas con sentido y la coordinación respetuosa de grupos.
                </p>

                {finalReflection.trim() && (
                  <div className="bg-white/80 border border-[#C29B38]/25 rounded-2xl p-4 max-w-md mx-auto text-left">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#C29B38] font-bold block mb-1">
                      Compromiso docente personal:
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
                    Juegos Evaluativos: Simuladores y Evaluación Final
                  </h3>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 bg-[#5ba27f]/10 text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold">
                  Validación Clase V
                </span>
              </div>

              {/* Desafío 1: Emparejar objetivo con dinámica */}
              <div className="bg-gradient-to-br from-natural-eggshell to-natural-cream/50 p-6 rounded-3xl border border-natural-border shadow-3xs space-y-5">
                <div className="border-b pb-3 border-natural-border/70 flex flex-wrap justify-between items-center gap-2">
                  <h4 className="font-serif text-sm font-bold text-natural-primary flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-natural-secondary" />
                    Desafío 1: Elegí la dinámica adecuada según el objetivo
                  </h4>
                  {matchChecked && (
                    <span className="text-xs font-mono font-bold bg-white text-natural-primary px-3 py-1 rounded-full border border-natural-primary/30">
                      Resultado: {matchScore} / {CLASS5_MATCH_GOALS.length} aciertos
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {CLASS5_MATCH_GOALS.map((item) => {
                    const chosen = matchAnswers[item.id] || "";
                    const isCorrect = chosen === item.correctDynamicId;
                    return (
                      <div
                        key={item.id}
                        className={`p-4 rounded-2xl border bg-white space-y-3 shadow-3xs ${
                          matchChecked
                            ? isCorrect
                              ? "border-green-300 bg-green-50/30"
                              : "border-red-300 bg-red-50/30"
                            : "border-natural-border"
                        }`}
                      >
                        <p className="text-xs font-semibold text-natural-dark leading-relaxed">
                          {item.goal}
                        </p>
                        <select
                          disabled={matchChecked}
                          value={chosen}
                          onChange={(e) =>
                            setMatchAnswers((prev) => ({ ...prev, [item.id]: e.target.value }))
                          }
                          className="w-full text-xs p-2 rounded-xl bg-natural-bg border border-natural-border text-natural-dark focus:outline-none focus:border-natural-primary/50"
                        >
                          <option value="">-- Elegir dinámica --</option>
                          {CLASS5_DINAMICAS.dynamics.map((dyn) => (
                            <option key={dyn.id} value={dyn.id}>
                              {dyn.title}
                            </option>
                          ))}
                        </select>
                        {matchChecked && (
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
                  {matchChecked ? (
                    <button
                      type="button"
                      onClick={() => {
                        setMatchAnswers({});
                        setMatchChecked(false);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Reintentar Desafío</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={CLASS5_MATCH_GOALS.some((i) => !matchAnswers[i.id])}
                      onClick={() => setMatchChecked(true)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <span>Validar Desafío</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Simulador de decisiones en el aula */}
              <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-5">
                <div className="border-b pb-3 border-natural-border/70">
                  <h4 className="font-serif text-sm font-bold text-natural-dark flex items-center gap-2">
                    <Users className="w-4 h-4 text-natural-primary" />
                    Simulador de Aula: ¿Qué responderías como maestro?
                  </h4>
                </div>

                <div className="space-y-4">
                  {CLASS5_SIMULATOR_CASES.map((sc) => {
                    const pickedIdx = simSelections[sc.id];
                    return (
                      <div
                        key={sc.id}
                        className="p-4 rounded-2xl bg-natural-eggshell/60 border border-natural-border space-y-3"
                      >
                        <div>
                          <p className="text-xs font-serif font-bold text-natural-primary">
                            {sc.title}
                          </p>
                          <p className="text-xs text-natural-dark mt-1 leading-relaxed">
                            {sc.context}
                          </p>
                        </div>

                        <div className="space-y-2">
                          {sc.options.map((opt, oIdx) => {
                            const selected = pickedIdx === oIdx;
                            return (
                              <button
                                key={oIdx}
                                type="button"
                                onClick={() =>
                                  setSimSelections((prev) => ({ ...prev, [sc.id]: oIdx }))
                                }
                                className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition-all ${
                                  selected
                                    ? opt.isBest
                                      ? "bg-green-50 border-green-400 text-natural-dark font-medium"
                                      : "bg-red-50 border-red-300 text-natural-dark font-medium"
                                    : "bg-white border-natural-border hover:bg-natural-cream/60 text-natural-dark"
                                }`}
                              >
                                {opt.label}
                              </button>
                            );
                          })}
                        </div>

                        {pickedIdx !== undefined && (
                          <p className="text-[11px] text-natural-dark bg-white p-3 rounded-xl border border-natural-border/70 leading-relaxed animate-fade-in">
                            {sc.options[pickedIdx].isBest ? "✅ " : "💡 "}
                            {sc.options[pickedIdx].feedback}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Test Evaluativo Final Clase V */}
              <div className="bg-white p-6 rounded-3xl border border-natural-border shadow-3xs space-y-6">
                <div className="border-b pb-3 border-natural-border/70">
                  <h4 className="font-serif text-sm font-bold text-natural-dark flex items-center gap-2">
                    <Award className="w-4 h-4 text-natural-primary" />
                    Evaluación Final: Test de Clase V — El Arte de Enseñar
                  </h4>
                </div>

                {quizSubmitted ? (
                  <div className="space-y-6 animate-fade-in">
                    <div className="p-6 rounded-3xl border text-center space-y-3 bg-natural-eggshell/60 border-natural-border">
                      <p className="text-xs uppercase tracking-widest font-mono font-bold text-natural-primary">
                        TU RESULTADO
                      </p>
                      <div className="text-4xl font-serif font-extrabold text-natural-dark">
                        {quizScore} de {CLASS5_TRIVIA_QUESTIONS.length} correctas
                      </div>
                      <p className="text-xs text-natural-text-muted leading-relaxed max-w-md mx-auto">
                        {quizPassed
                          ? "¡Excelente integración de la Clase V! Escribí tu compromiso docente y tu nombre completo para emitir tu Diploma Honorífico."
                          : "Necesitás al menos 5 respuestas correctas para habilitar el diploma. Revisá las explicaciones e intentá nuevamente."}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {CLASS5_TRIVIA_QUESTIONS.map((q) => {
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
                            Reflexión final y Diploma de Clase V
                          </h5>
                          <p className="text-xs text-natural-text-muted max-w-lg mx-auto">
                            Escribí en una frase qué criterio pedagógico querés priorizar cuando enseñes Reiki, y tu nombre completo para el diploma.
                          </p>
                        </div>

                        <div className="max-w-lg mx-auto space-y-3">
                          <textarea
                            rows={2}
                            value={finalReflection}
                            onChange={(e) => setFinalReflection(e.target.value)}
                            placeholder="Compromiso o reflexión personal (opcional, aparecerá en tu diploma)..."
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
                      Respondé las siguientes 6 preguntas sobre los módulos de la Clase V:
                    </p>

                    <div className="space-y-6">
                      {CLASS5_TRIVIA_QUESTIONS.map((q, qIdx) => (
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
                        disabled={CLASS5_TRIVIA_QUESTIONS.some(
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
                  onClick={() => onNavigateTab("c5_videos")}
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
