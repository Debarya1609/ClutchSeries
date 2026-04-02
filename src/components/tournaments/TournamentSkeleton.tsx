export function TournamentSkeleton() {
  return (
    <div className="w-full min-h-screen bg-black/40 backdrop-blur-lg flex flex-col pt-24 px-6 pb-2 md:pt-32 md:px-10 md:pb-16 overflow-hidden">
      {/* ── Subheading Skeleton ── */}
      <div className="flex items-center gap-2 mb-6 animate-pulse mt-auto">
        <div className="w-4 h-4 rounded-full bg-white/10" />
        <div className="w-32 h-3 bg-white/10" />
      </div>

      {/* ── Title Skeletons ── */}
      <div className="flex flex-col max-w-5xl gap-4">
        <div className="w-2/3 h-16 md:h-24 bg-white/10 animate-pulse" />
        <div className="w-1/2 h-16 md:h-24 bg-white/10 animate-pulse" />
        
        {/* Paragraph Skeleton */}
        <div className="mt-8 flex flex-col gap-2">
          <div className="w-3/4 max-w-2xl h-4 bg-white/10 animate-pulse" />
          <div className="w-1/2 max-w-xl h-4 bg-white/10 animate-pulse" />
          <div className="w-2/3 max-w-lg h-4 bg-white/10 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
