'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Send } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gusdnrs@naver.com',
    href: 'mailto:gusdnrs@naver.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/gusdnrs',
    href: 'https://github.com/gusdnrs',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-bg-secondary"
    >
      <div className="section-container max-w-3xl">
        <SectionTitle
          title="Contact"
          subtitle="연락처"
          align="center"
        />

        {/* 연락처 카드 */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={
                item.href.startsWith('http')
                  ? '_blank'
                  : undefined
              }
              rel={
                item.href.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="flex items-center gap-4 p-5
                rounded-2xl bg-bg-card
                border border-border-primary
                hover:border-border-secondary
                hover:bg-bg-card-hover
                transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
            >
              <div className="p-3 rounded-xl bg-bg-secondary
                border border-border-primary
                group-hover:border-border-secondary
                transition-colors">
                <item.icon
                  size={20}
                  className="text-text-tertiary
                    group-hover:text-text-secondary
                    transition-colors"
                />
              </div>
              <div>
                <p className="font-mono-custom text-xs
                  text-text-tertiary uppercase tracking-wider
                  mb-0.5">
                  {item.label}
                </p>
                <p className="text-sm text-text-primary
                  font-medium">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* 심플 메시지 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-text-tertiary text-sm
            leading-relaxed mb-6">
            새로운 프로젝트나 협업 제안을 환영합니다.
            <br />
            편하게 연락 주세요.
          </p>
          <a
            href="mailto:gusdnrs@naver.com"
            className="inline-flex items-center gap-2
              px-8 py-3.5 rounded-full bg-accent
              text-bg-primary font-semibold text-sm
              hover:opacity-90 transition-opacity"
          >
            <Send size={16} />
            이메일 보내기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
