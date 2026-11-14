/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  Video,
  Youtube,
  Play,
  FileText,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Eye
} from "lucide-react";

export interface ClassVideoItem {
  uid: string;
  embedId: string;
  type: "youtube" | "youtube_playlist" | "vimeo";
  title: string;
  description: string;
  url: string;
}

export interface ClassMaterialItem {
  id: string;
  kind: "pdf_upload" | "blog_link" | "pdf_link";
  title: string;
  description: string;
  url: string;
  fileName?: string;
  fileSizeLabel?: string;
}

interface ClassVideosMaterialProps {
  classTitle: string;
  badge?: string;
  introText: string;
  defaultVideos: ClassVideoItem[];
  defaultMaterials: ClassMaterialItem[];
  footerContent?: React.ReactNode;
  onBack: () => void;
  onNext: () => void;
  nextLabel: string;
}

export const ClassVideosMaterial: React.FC<ClassVideosMaterialProps> = ({
  classTitle,
  badge = "Sintonía Audiovisual",
  introText,
  defaultVideos,
  defaultMaterials,
  footerContent,
  onBack,
  onNext,
  nextLabel
}) => {
  const videos = defaultVideos;
  const pdfMaterials = defaultMaterials.filter(
    (item) => item.kind === "pdf_link" || item.kind === "pdf_upload"
  );
  const blogMaterials = defaultMaterials.filter((item) => item.kind === "blog_link");

  const [selectedVideoUid, setSelectedVideoUid] = useState<string>(
    defaultVideos.length > 0 ? defaultVideos[0].uid : ""
  );

  const activeVid = videos.find((v) => v.uid === selectedVideoUid) || videos[0] || null;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header matching Class I standard */}
      <div className="flex items-center justify-between border-b pb-4 border-natural-border print:hidden">
        <div className="flex items-center gap-3">
          <Video className="w-6 h-6 text-natural-primary" />
          <h3 className="text-xl sm:text-2xl font-serif text-natural-dark font-bold">
            Videos y Material ({classTitle})
          </h3>
        </div>
        <span className="text-[10px] px-2.5 py-0.5 bg-natural-cream text-natural-primary rounded-md uppercase tracking-wider font-mono font-semibold border border-natural-border/50">
          {badge}
        </span>
      </div>

      {/* Intro paragraph directly above the player grid */}
      <p className="text-natural-text-muted text-xs sm:text-sm leading-relaxed print:hidden">
        {introText}
      </p>

      {/* Main 3-Column Grid: Video Player at top-left, 3 stacked cards on right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start print:hidden">
        {/* Left Column (2/3): Video Player */}
        <div className="lg:col-span-2">
          {activeVid ? (
            (() => {
              const embedSrc =
                activeVid.type === "vimeo"
                  ? `https://player.vimeo.com/video/${activeVid.embedId}`
                  : activeVid.type === "youtube_playlist"
                  ? `https://www.youtube.com/embed/videoseries?list=${activeVid.embedId}`
                  : `https://www.youtube.com/embed/${activeVid.embedId}`;
              return (
                <div className="bg-white p-4 sm:p-5 rounded-3xl border border-natural-border shadow-3xs overflow-hidden">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden border border-natural-border bg-black">
                    <iframe
                      key={activeVid.uid}
                      className="w-full h-full"
                      src={embedSrc}
                      title={activeVid.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-serif text-base text-natural-dark font-bold">
                          {activeVid.title}
                        </span>
                        <span
                          className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold uppercase ${
                            activeVid.type === "vimeo"
                              ? "bg-blue-100 text-blue-700"
                              : activeVid.type === "youtube_playlist"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {activeVid.type === "vimeo"
                            ? "Vimeo"
                            : activeVid.type === "youtube_playlist"
                            ? "Playlist de YouTube"
                            : "Video de YouTube"}
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
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-natural-cream hover:bg-natural-sand text-[11px] font-semibold text-natural-dark transition-colors shrink-0 border border-natural-border/60"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-natural-primary" />
                      <span>{activeVid.type === "vimeo" ? "Abrir en Vimeo" : "Abrir en YouTube"}</span>
                    </a>
                  </div>
                </div>
              );
            })()
          ) : (
            <div className="bg-white p-4 sm:p-5 rounded-3xl border border-natural-border shadow-3xs">
              <div className="aspect-video w-full rounded-2xl border border-dashed border-natural-border bg-natural-eggshell/60 flex flex-col items-center justify-center p-6 text-center space-y-2.5">
                <Youtube className="w-12 h-12 text-natural-primary/40" />
                <p className="text-sm font-serif font-bold text-natural-dark">
                  Material audiovisual en preparación
                </p>
                <p className="text-xs text-natural-text-muted max-w-md leading-relaxed">
                  Próximamente estarán disponibles acá los videos seleccionados para acompañar esta clase.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column (1/3): Stacked Cards (Videos / Manuales en PDF / Notas del Blog) */}
        <div className="space-y-5">
          {/* Card 1: VIDEOS DE LA MAESTRÍA */}
          <div className="bg-white p-5 rounded-3xl border border-natural-border shadow-3xs space-y-3.5">
            <h4 className="font-serif text-xs font-bold text-natural-dark uppercase tracking-widest border-b pb-2.5 border-natural-border/60">
              VIDEOS DE LA MAESTRÍA ({videos.length})
            </h4>

            {videos.length > 0 ? (
              <div className="space-y-2.5">
                {videos.map((vid) => {
                  const isSelected = activeVid?.uid === vid.uid;
                  return (
                    <button
                      key={vid.uid}
                      type="button"
                      onClick={() => setSelectedVideoUid(vid.uid)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-natural-cream/60 text-natural-dark border-natural-dark/60 ring-1 ring-natural-dark/15 shadow-2xs"
                          : "bg-natural-eggshell/60 hover:bg-natural-sand/30 border-natural-border/70 text-natural-dark"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg shrink-0 ${
                          isSelected
                            ? "bg-natural-primary text-white"
                            : "bg-natural-sand/80 text-natural-text-muted"
                        }`}
                      >
                        <Play className="w-3 h-3 fill-current" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold truncate">{vid.title}</p>
                        <p className="text-[9px] font-mono uppercase tracking-wider text-natural-text-muted truncate mt-0.5">
                          {vid.type === "vimeo"
                            ? "VIMEO"
                            : vid.type === "youtube_playlist"
                            ? "PLAYLIST DE YT"
                            : "VIDEO DE YT"}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs text-natural-text-muted leading-relaxed">
                Todavía no hay videos publicados para esta clase. Se irán sumando acá próximamente.
              </p>
            )}
          </div>

          {/* Card 2: MANUALES EN PDF */}
          <div className="bg-gradient-to-b from-natural-cream/80 to-natural-sand/50 p-5 rounded-3xl border border-natural-border shadow-3xs space-y-3.5">
            <h4 className="font-serif text-xs font-bold text-natural-dark uppercase tracking-widest border-b pb-2.5 border-natural-border/60 flex items-center gap-2">
              <FileText className="w-4 h-4 text-natural-primary/80" />
              <span>MANUALES EN PDF ({pdfMaterials.length})</span>
            </h4>

            {pdfMaterials.length > 0 ? (
              <>
                <p className="text-[11px] text-natural-text-muted leading-relaxed">
                  Podés hacer clic para descargar o abrir el material de estudio en PDF:
                </p>
                <div className="space-y-3">
                  {pdfMaterials.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-4 rounded-2xl border border-natural-border/80 shadow-3xs space-y-3"
                    >
                      <div className="space-y-1">
                        <h5 className="font-serif text-xs font-bold text-natural-dark leading-snug">
                          {item.title}
                        </h5>
                        <p className="text-[11px] text-natural-text-muted leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-center gap-2">
                        {item.kind === "pdf_upload" && item.fileName ? (
                          <>
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-natural-eggshell border border-natural-border text-natural-dark rounded-xl text-[10px] font-mono uppercase tracking-wider font-bold transition-colors"
                            >
                              <Eye className="w-3.5 h-3.5 text-natural-primary" />
                              <span>Abrir</span>
                            </a>
                            <a
                              href={item.url}
                              download={item.fileName}
                              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-natural-eggshell hover:bg-natural-sand border border-natural-border text-natural-dark rounded-xl text-[10px] font-mono uppercase tracking-wider font-bold transition-colors shadow-3xs"
                            >
                              <Download className="w-3.5 h-3.5 text-natural-primary" />
                              <span>Descargar PDF</span>
                            </a>
                          </>
                        ) : (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-natural-eggshell hover:bg-natural-sand border border-natural-border text-natural-dark rounded-xl text-[10px] font-mono uppercase tracking-wider font-bold transition-colors shadow-3xs"
                          >
                            <Download className="w-3.5 h-3.5 text-natural-primary" />
                            <span>Descargar Manual</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white/80 p-4 rounded-2xl border border-natural-border/70 text-[11px] text-natural-text-muted leading-relaxed">
                Los documentos PDF de esta clase se publicarán acá próximamente.
              </div>
            )}
          </div>

          {/* Card 3: NOTAS DEL BLOG */}
          <div className="bg-gradient-to-b from-natural-cream/60 to-natural-eggshell p-5 rounded-3xl border border-natural-border shadow-3xs space-y-3.5">
            <h4 className="font-serif text-xs font-bold text-natural-dark uppercase tracking-widest border-b pb-2.5 border-natural-border/60 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-natural-primary/80" />
              <span>NOTAS DEL BLOG ({blogMaterials.length})</span>
            </h4>

            {blogMaterials.length > 0 ? (
              <>
                <p className="text-[11px] text-natural-text-muted leading-relaxed">
                  Lecturas complementarias del blog de Rincón Zen seleccionadas para esta clase:
                </p>
                <div className="space-y-3">
                  {blogMaterials.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-4 rounded-2xl border border-natural-border/80 shadow-3xs space-y-3"
                    >
                      <div className="space-y-1">
                        <h5 className="font-serif text-xs font-bold text-natural-dark leading-snug">
                          {item.title}
                        </h5>
                        <p className="text-[11px] text-natural-text-muted leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-natural-eggshell hover:bg-natural-sand border border-natural-border text-natural-dark rounded-xl text-[10px] font-mono uppercase tracking-wider font-bold transition-colors shadow-3xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-natural-primary" />
                        <span>Leer en el Blog</span>
                      </a>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white/80 p-4 rounded-2xl border border-natural-border/70 text-[11px] text-natural-text-muted leading-relaxed">
                Las notas del blog relacionadas con esta clase se sumarán acá próximamente.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Optional extra content below the standardized player & materials grid (e.g. printable sheets) */}
      {footerContent && <div>{footerContent}</div>}

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-natural-border print:hidden">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-1 px-4 py-2 bg-natural-cream hover:bg-natural-sand rounded-xl text-xs font-semibold text-natural-dark transition shadow-2xs"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>Volver</span>
        </button>

        <button
          onClick={onNext}
          className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-natural-primary text-white rounded-xl text-xs font-semibold hover:bg-natural-primary/95 transition-colors shadow-sm"
        >
          <span>{nextLabel}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
