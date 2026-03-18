'use client';

import { Github, Mail, FileText, FileUser } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const snsLinks = [
    {
      id: 1,
      name: 'Github',
      href: 'https://github.com/gusdnrs',
      icon: <Github size={18} />,
    },
    {
      id: 2,
      name: 'Notion',
      href: 'https://h-gomi.notion.site/2e0eae09287780078b1bf89ddfae8189?pvs=143',
      icon: <FileText size={18} />,
    },
    {
      id: 3,
      name: 'Email',
      href: 'mailto:gusdnrs@naver.com',
      icon: <Mail size={18} />,
    },
    {
      id: 4,
      name: 'Resume',
      href: '/documents/resume_hyunwook.pdf',
      icon: <FileUser size={18} />,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-5 md:px-10 bg-bg-gray overflow-hidden relative"
    >
      <div className="max-w-[1440px] mx-auto relative z-11">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-en text-sm font-bold tracking-widest text-brand-blue uppercase mb-4 block">
            04. The Network
          </span>
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            새로운 기회와 성장을 위한 연결을 환영합니다.
            <br className="hidden md:block" />
            이력서와 포트폴리오의 전체 내용은 아래 링크들을 통해 확인하실 수 있습니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-10 md:p-16 rounded-[40px] glass bg-white/70 border-white/60 shadow-xl max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left space-y-4">
              <p className="font-en text-3xl font-black text-brand-blue-dark tracking-tighter">
                IM HYUNWOOK
              </p>
              <p className="text-gray-500 text-base font-medium">
                기획의 진심을 기술의 가치로 번역합니다.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              {snsLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col items-center justify-center gap-3 px-6 py-5 rounded-3xl bg-white text-gray-600 hover:bg-brand-blue hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out border border-gray-100/50"
                >
                  <span className="p-3 rounded-full bg-gray-50 group-hover:bg-white/20 transition-colors duration-300 shrink-0">
                    {link.icon}
                  </span>
                  <span className="font-en text-sm font-bold tracking-tight">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
