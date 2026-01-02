/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  const skills = [
    { name: 'Dart', label: 'Language' },
    { name: 'BLoC', label: 'State Mgt' },
    { name: 'Clean Arch', label: 'Pattern' },
    { name: 'Firebase', label: 'Backend' },
    { name: 'REST API', label: 'Networking' },
    { name: 'GetX', label: 'State Mgt' },
    { name: 'Figma', label: 'Design' },
    { name: 'Git', label: 'Version Control' },
    { name: 'CI/CD', label: 'DevOps' },
  ];

  return (
    <section className="pb-12 pt-24 w-full flex items-center justify-center relative overflow-hidden bg-background">

      <img
        src="/images/bg.jpg"
        alt="Background"
        className='absolute inset-0 w-full h-full object-cover z-0'
      />

      <div className="absolute inset-0 bg-background/90 z-0 backdrop-blur-[1px]"></div>


      <div className="relative z-10 w-full px-4 container mx-auto">

        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col 2xl:flex-row items-center justify-between gap-10 2xl:gap-16">

          <div className="flex flex-col xl:flex-row items-center xl:items-center text-center xl:text-left gap-8 xl:gap-16 flex-1">

            <div className="relative group shrink-0">
              <div className="absolute -inset-1.5 bg-linear-to-r from-primary to-chart-2 rounded-full blur opacity-50 group-hover:opacity-80 transition duration-500"></div>
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full p-1.5 bg-background border-2 border-primary/30">
                <img
                  src="/images/profile.jpg"
                  alt="Wajeh Al-Howari"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="flex flex-col items-center xl:items-start space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-bold text-foreground tracking-tight leading-tight">
                  Wajeh Al-Howari
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-[26px] font-medium text-primary">
                  Flutter & Cross-Platform Developer
                </h2>
                <p className="text-muted-foreground max-w-xl text-base md:text-[16px] leading-relaxed">
                  Transforming ideas into high-performance mobile applications.
                  Expert in crafting pixel-perfect UIs and robust architectures using Flutter.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
                <button className="flex items-center justify-center gap-2 shadow-lg shadow-primary/20 bg-primary cursor-pointer text-primary-foreground font-semibold py-3 px-8 rounded-full hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] hover:scale-105 transition-all duration-300">
                  <Download className="w-5 h-5" />
                  <span>DOWNLOAD CV</span>
                </button>

                <button className="flex items-center border-white/5 justify-center gap-2 bg-secondary cursor-pointer border text-foreground hover:bg-secondary hover:text-secondary-foreground font-medium py-3 px-8 rounded-full transition-all duration-300">
                  <Mail className="w-5 h-5" />
                  <span>CONTACT ME</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-xl perspective-1000 self-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-secondary hover:bg-secondary/80 border border-white/5 hover:border-primary/50 rounded-xl p-4 flex flex-col items-center gap-1 transition-all duration-300 hover:-translate-y-1 cursor-default shadow-sm"
              >
                <span className="font-semibold text-foreground text-sm lg:text-base">{skill.name}</span>
                <span className="text-[10px] lg:text-xs text-muted-foreground uppercase tracking-wider">{skill.label}</span>

                <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;