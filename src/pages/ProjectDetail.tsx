// src/pages/ProjectDetail.tsx
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { projects } from '../data/Projects';
import SEO from '../components/SEO';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO 
        title={`${project.title} - 현욱 포트폴리오`}
        description={project.fullDescription || project.description}
        image={project.imageUrl}
      />
      
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 뒤로 가기 버튼 */}
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            홈으로 돌아가기
          </Link>

          {/* 프로젝트 헤더 */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              {project.fullDescription || project.description}
            </p>
            
            {/* 프로젝트 정보 */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              {project.date && <span>📅 {project.date}</span>}
              {project.duration && <span>⏱️ {project.duration}</span>}
              {project.teamSize && <span>👥 {project.teamSize}</span>}
            </div>
          </div>

          {/* 메인 이미지 */}
          {project.imageUrl && (
            <div className="mb-12">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* 링크 버튼들 */}
          {(project.liveUrl) && (
            <div className="flex gap-4 mb-12">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  🌐 Live Demo 보기
                </a>
              )}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-12">
            {/* 왼쪽 컬럼 */}
            <div className="space-y-8">
              {/* 주요 기능 */}
              {project.features && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">
                    🚀 주요 기능
                  </h2>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* 도전 과제 */}
              {project.challenges && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">
                    🎯 도전 과제
                  </h2>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-slate-600">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* 오른쪽 컬럼 */}
            <div className="space-y-8">
              {/* 해결 방안 */}
              {project.solutions && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">
                    💡 해결 방안
                  </h2>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="text-slate-600">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* 기술 스택 */}
              {project.techStack && (
                <section>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">
                    🛠️ 기술 스택
                  </h2>
                  <div className="space-y-4">
                    {project.techStack.frontend && (
                      <div>
                        <h3 className="font-semibold text-slate-700 mb-2">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.frontend.map((tech, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {project.techStack.backend && (
                      <div>
                        <h3 className="font-semibold text-slate-700 mb-2">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.backend.map((tech, index) => (
                            <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {project.techStack.database && (
                      <div>
                        <h3 className="font-semibold text-slate-700 mb-2">Database</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.database.map((tech, index) => (
                            <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {project.techStack.deployment && (
                      <div>
                        <h3 className="font-semibold text-slate-700 mb-2">Deployment</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.deployment.map((tech, index) => (
                            <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* 상세 이미지들 */}
          {project.detailImages && project.detailImages.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                📸 프로젝트 스크린샷
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.detailImages.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${project.title} 스크린샷 ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </section>
          )}

          {/* 다른 프로젝트 보기 */}
          <section className="mt-16 pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              다른 프로젝트도 확인해보세요
            </h2>
            <Link 
              to="/#projects"
              className="block w-fit mx-auto px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium"
            >
              전체 프로젝트 보기
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
