import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Trophy, Goal, Users } from "lucide-react";

const About = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="w-full min-h-screen bg-background text-foreground flex flex-col pt-24">
      {/* ── Hero / Motto Section ── */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Abstract animated background element / placeholder for AI Mockup */}
        <motion.div 
          className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background/90 to-blue-900/10"
          style={{ y: yParallax, opacity: opacityParallax }}
        >
          {/* USER PROVIDED ASSET PLACEHOLDER */}
          <div className="absolute inset-0 opacity-20 bg-[url('/arena-mockup.png')] bg-cover bg-center bg-no-repeat" />
        </motion.div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="flex justify-center items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-foreground/50" />
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-foreground/70">
                Our Moto
              </span>
              <span className="w-8 h-[1px] bg-foreground/50" />
            </div>
            
            <h1 className="leading-[1.1] tracking-tighter mb-8 max-w-3xl mx-auto" style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}>
              Live the Esports <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Era.</span>
            </h1>
            
            <p className="text-lg md:text-xl font-light text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Every player deserves to live up to the competition. It's not just about winning the prize—it's about achieving your place in the arena. We bring that feeling to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── On-Demand Tournaments Section ── */}
      <section className="relative w-full py-32 px-6 lg:px-20 overflow-hidden bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Image placeholder side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-full relative"
          >
             <div className="w-full aspect-[4/5] rounded-xl overflow-hidden relative border border-white/5 bg-white/5 group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                {/* USER PROVIDED ASSET PLACEHOLDER */}
                <img 
                  src="/team-shirt.png" 
                  alt="TCS Member" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
             </div>
          </motion.div>
          
          {/* Text side */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Turnkey Tournaments. <br/>
                <span className="font-display">Zero Friction.</span>
              </h2>
              <p className="text-foreground/70 text-lg font-light leading-relaxed mb-8">
                The Clutch Series is a collective dedicated to hosting tournaments on-demand. When an external team or organization brings us their vision and requirements, we execute the plan flawlessly. From brackets to broadcast—we do the things, you provide the dream.
              </p>
              
              <div className="flex items-center gap-4 text-sm font-medium tracking-widest uppercase text-foreground/90 border-b border-white/10 pb-4 inline-flex">
                Discuss Your Event
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-4 p-6 border border-white/5 bg-white/[0.02] rounded-lg"
              >
                <Trophy className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-medium">Competition</h3>
                <p className="text-foreground/60 text-sm font-light leading-relaxed">We build stages where skill shines and legacies are cemented.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-4 p-6 border border-white/5 bg-white/[0.02] rounded-lg"
              >
                <Goal className="w-6 h-6 text-indigo-400" />
                <h3 className="text-xl font-medium">Execution</h3>
                <p className="text-foreground/60 text-sm font-light leading-relaxed">Flawless logistics, stream overlay management, and broadcast standards.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Call To Action / Roster ── */}
      <section className="relative w-full py-40 flex justify-center items-center overflow-hidden border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center px-6"
        >
          <Users className="w-12 h-12 mx-auto text-foreground/40 mb-8" />
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 font-display">
            Join The Series
          </h2>
          <button className="px-8 py-4 rounded-full border border-white/20 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
            View Current Roster
          </button>
        </motion.div>
      </section>
      
      {/* ── Footer / Padding For End ── */}
      <footer className="w-full py-8 text-center border-t border-white/5 bg-black/20">
        <span className="text-xs uppercase tracking-[0.2em] text-foreground/30">
          The Clutch Series © 2026
        </span>
      </footer>
    </div>
  );
};

export default About;
