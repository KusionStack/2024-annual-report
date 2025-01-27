import React from 'react';
import {
  ChartBarIcon,
  UserGroupIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  CalendarIcon,
  BuildingLibraryIcon,
  UsersIcon,
  TagIcon,
  StarIcon,
  ExclamationCircleIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { defaultLanguage } from './i18n/config';
import { translations } from './i18n/translations';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Section = ({ children, className = '' }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    className={className}
  >
    {children}
  </motion.section>
);

const Stat = ({ icon: Icon, title, value }) => {
  // Generate random gradient colors for each stat
  const gradients = [
    'from-blue-500 to-cyan-400',
    'from-purple-500 to-pink-400',
    'from-green-500 to-emerald-400',
    'from-orange-500 to-amber-400',
    'from-indigo-500 to-blue-400',
    'from-rose-500 to-pink-400',
    'from-teal-500 to-green-400',
  ];
  
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <div className="group relative">
      {/* Card container */}
      <div className="relative overflow-hidden bg-white rounded-2xl transition-all duration-300 group-hover:scale-[1.02] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] group-hover:shadow-lg border-[1.5px] border-gray-200">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_14px] opacity-25" />
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${randomGradient} opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-300`} />
        
        {/* Content */}
        <div className="relative p-5">
          {/* Header with icon and title */}
          <div className="flex items-center space-x-3 mb-4">
            <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${randomGradient} p-2 transform group-hover:scale-110 transition-all duration-300 shadow-sm`}>
              <Icon className="w-full h-full text-white" />
            </div>
            <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-medium leading-tight">
              {title}
            </div>
          </div>

          {/* Value */}
          <div className="flex items-baseline space-x-1">
            <div className={`text-4xl font-bold bg-gradient-to-br ${randomGradient} bg-clip-text text-transparent`}>
              {value}
            </div>
            {/* Optional unit or badge */}
            {value.toString().includes('+') && (
              <div className={`text-sm font-medium bg-gradient-to-br ${randomGradient} bg-clip-text text-transparent`}>
                总计
              </div>
            )}
          </div>
        </div>

        {/* Bottom border accent */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${randomGradient} opacity-50`} />
      </div>
    </div>
  );
};

const Milestone = ({ date, title, image, isLast }) => (
  <div className="relative">
    <div className="flex items-start gap-6">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-primary mt-2" />
        {!isLast && <div className="w-0.5 h-32 bg-gray-200" />}
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="text-sm text-primary font-medium mb-2">{date}</div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          {image && (
            <div className="group relative">
              <div className="relative overflow-hidden bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-xl">
                <img 
                  src={`/assets/milestones/${image}`} 
                  alt={title}
                  className="w-full object-contain transform group-hover:scale-[1.02] transition-transform duration-300"
                  style={{ maxHeight: '400px' }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10" />
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ title, description, stats, highlights, name }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      {/* Project Stats Charts */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-600">Star History</h4>
          <div className="aspect-[16/11] rounded-lg overflow-hidden bg-gray-50">
            <img 
              src={`/assets/starhistory/${name}.png`} 
              alt={`${title} Star History`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-600">OpenRank 指标</h4>
          <div className="aspect-[16/11] rounded-lg overflow-hidden bg-gray-50">
            <img 
              src={`/assets/openrank/${name}.png`} 
              alt={`${title} OpenRank`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {stats && (
        <div className="grid grid-cols-2 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
      {highlights && (
        <div>
          <h4 className="font-semibold mb-4 text-gray-800">主要进展</h4>
          <ul className="space-y-3">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-primary"></div>
                <span className="ml-4 text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

const UserCard = ({ name, description, logo, size = 'default' }) => {
  const Icon = logo || BuildingLibraryIcon;
  
  const sizeClasses = {
    'large': 'p-8',
    'default': 'p-6'
  };

  return (
    <div className={`group h-full ${size === 'large' ? 'md:col-span-2' : ''}`}>
      <div className="relative h-full overflow-hidden bg-white rounded-2xl transition-all duration-300 group-hover:scale-[1.02] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] group-hover:shadow-lg border-[1.5px] border-gray-200">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_14px] opacity-25" />
        
        {/* Content */}
        <div className={`relative h-full flex flex-col ${sizeClasses[size]}`}>
          <div className="flex items-start gap-4">
            {/* Icon/Logo */}
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary p-2.5 transform group-hover:scale-110 transition-all duration-300 shadow-sm">
              <Icon className="w-full h-full text-white" />
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-[background-image] duration-300">
                {name}
              </h3>
              {description && (
                <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary opacity-50" />
      </div>
    </div>
  );
};

function App() {
  const t = translations[defaultLanguage];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.15]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
        
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Year badge */}
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
              <CalendarIcon className="w-4 h-4" />
              <span>{t.yearBadge}</span>
            </div>
            
            {/* Main title */}
            <h1 className="relative">
              <span className="text-5xl font-bold bg-gradient-to-br from-primary via-secondary to-primary bg-clip-text text-transparent pb-2 block">
                KusionStack & KCL
              </span>
              <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mt-2 block">
                {t.annualReport}
              </span>
              {/* Right decorative dots */}
              <div className="absolute -right-12 top-0 w-24 h-24 opacity-20">
                <div className="relative w-full h-full">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={`right-${i}`}
                      className="absolute w-1.5 h-1.5 rounded-full bg-primary"
                      style={{
                        top: `${Math.floor(i / 4) * 25}%`,
                        left: `${(i % 4) * 25}%`,
                        opacity: 0.5 + (i % 4) * 0.1,
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Left decorative dots */}
              <div className="absolute -left-12 top-0 w-24 h-24 opacity-20">
                <div className="relative w-full h-full">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={`left-${i}`}
                      className="absolute w-1.5 h-1.5 rounded-full bg-primary"
                      style={{
                        top: `${Math.floor(i / 4) * 25}%`,
                        left: `${(i % 4) * 25}%`,
                        opacity: 0.5 + (i % 4) * 0.1,
                      }}
                    />
                  ))}
                </div>
              </div>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>

            {/* Bottom decoration */}
            <div className="absolute left-1/2 bottom-0 w-32 h-1 bg-gradient-to-r from-primary/20 via-secondary/40 to-primary/20 transform -translate-x-1/2 rounded-full blur-sm" />
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <Section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.15]" />
        
        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-4">
              <ChartBarIcon className="w-4 h-4" />
              <span>{t.statsTitle}</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              {t.statsSubtitle}
            </h2>
            <p className="text-gray-600 text-lg">
              {t.statsDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Stat
              icon={RocketLaunchIcon}
              title={t.majorVersions}
              value="17"
            />
            <Stat
              icon={TagIcon}
              title={t.featureReleases}
              value="142"
            />
            <Stat
              icon={ExclamationCircleIcon}
              title={t.openIssues}
              value="388"
            />
            <Stat
              icon={UserGroupIcon}
              title={t.participants}
              value="632"
            />
            {/* <Stat
              icon={DocumentDuplicateIcon}
              title={t.forkedProjects}
              value="767"
            /> */}
            <Stat
              icon={ArrowPathIcon}
              title={t.mergedPRs}
              value="2,143"
            />
            <Stat
              icon={StarIcon}
              title={t.totalStars}
              value="4,629"
            />
          </div>
        </div>
      </Section>

      {/* Key Milestones */}
      <Section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.15]" />
        
        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-4">
              <CalendarIcon className="w-4 h-4" />
              <span>{t.milestonesTitle}</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              {t.milestonesSubtitle}
            </h2>
            <p className="text-gray-600 text-lg">
              {t.milestonesDescription}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Milestone 
              date="2024年3月"
              title="KusionStack 入选 Platform Engineering 社区的 Platform Tooling Landscape"
              image="platform-landscape.webp"
            />
            <Milestone 
              date="2024年6月"
              title="PlatformCon 2024 由 KusionStack 作为赞助方和线下活动组织者，带来 2 场演讲，1 场直播 Workshop 和 1 场线下 Meetup 活动"
              image="platformcon24.jpg"
            />
            <Milestone 
              date="2024年7月"
              title="Karpor 正式开源，在 Apache CoC 亚洲开发者大会首发演讲，登上 GitHub Trending 日榜"
              image="karpor-opensource.jpg"
            />
            <Milestone 
              date="2024年7月"
              title="OpenInfra 亚太用户组线上 Meetup 中分享使用 KusionStack 构建 IDP 的实践"
              image="openinfra-meetup.jpg"
            />
            <Milestone 
              date="2024年8月"
              title="KusionStack 与越南最大的电信运营商 Viettel Cloud 达成深度合作"
              image="kusionstack-viettel.jpg"
            />
            <Milestone 
              date="2024年8月"
              title="KCL 与 Crossplane 达成深度合作"
              image="kcl-crossplane.png"
            />
            <Milestone 
              date="2024年8月"
              title="参加 2024 KubeCon HK 与来自各个社区的小伙伴们进行了交流与分享，KCL 和 KusionStack 社区也同 Crossplane 社区的同时进行了令人开心的线下沟通"
              image="kubecon-hk.png"
            />
            <Milestone 
              date="2024年9月"
              title="KusionStack 正式成为 CNCF Sandbox 项目"
              image="kusionstack-sandbox.jpg"
              isLast={true}
            />
          </div>
        </div>
      </Section>

      {/* Users */}
      <Section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.15]" />
        
        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-4">
              <UsersIcon className="w-4 h-4" />
              <span>{t.usersTitle}</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              {t.usersSubtitle}
            </h2>
            <p className="text-gray-600 text-lg">
              {t.usersDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
            {/* Decorative elements */}
            <div className="absolute -left-24 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -right-24 -bottom-12 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse" />

            {/* Company cards */}
            <UserCard 
              name="蚂蚁集团" 
              description={t.antGroup}
            />
            <UserCard 
              name="字节跳动" 
              description={t.bytedance}
            />
            <UserCard 
              name="SafetyCulture" 
              description={t.safetyCulture}
            />
            <UserCard 
              name="Viettel" 
              description={t.viettel}
            />
          </div>
        </div>
      </Section>

      {/* Core Projects */}
      <Section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.15]" />
        
        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-4">
              <CodeBracketIcon className="w-4 h-4" />
              <span>{t.coreProjectsTitle}</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              {t.coreProjectsSubtitle}
            </h2>
            {/* <p className="text-gray-600 text-lg">
              {t.coreProjectsDescription}
            </p> */}
          </div>

          <div className="space-y-8">
            {/* Kusion */}
            <ProjectCard
              title={t.kusionTitle}
              name="kusion"
              description={t.kusionDescription}
              stats={[
                { label: t.majorVersions, value: '5' },
                { label: t.featureReleases, value: '15' },
                // { label: t.newContributors, value: '11' },
                { label: t.mergedPRs, value: '330' },
                { label: t.totalStars, value: '1000+' },
                { label: t.productHuntUpvotes, value: '280+' },
                { label: t.productHuntRank, value: '#5' },
              ]}
              highlights={[
                '优化 CLI 工具，提供更友好的命令行体验',
                '优化多集群部署体验',
                '增强配置编排和验证能力',
                '提供更稳定的企业级支持',
                '发布 Kusion UI，可视化管理应用交付流程',
              ]}
            />

            {/* Karpor */}
            <ProjectCard
              title={t.karporTitle}
              name="karpor"
              description={t.karporDescription}
              stats={[
                { label: t.majorVersions, value: '4' },
                { label: t.featureReleases, value: '93' },
                { label: t.newStars, value: '1068' },
                { label: t.newContributors, value: '24' },
                { label: t.newCommunityParticipants, value: '86' },
                { label: t.mergedPRs, value: '190' },
              ]}
              highlights={[
                'Apache COC 亚洲开发者大会首发演讲',
                '登上 GitHub Trending 日榜，阮一峰的科技周刊',
                'GLCC 开源夏令营，指导学生完成开源课题',
                '上线 Live Demo、社区任务、Landing Page，构建了开放、友好的社区氛围',
              ]}
            />

            {/* Kuperator */}
            <ProjectCard
              title={t.kuperatorTitle}
              name="kuperator"
              description={t.kuperatorDescription}
              stats={[
                { label: t.majorVersions, value: '4' },
                { label: t.featureReleases, value: '4' },
                // { label: t.openIssues, value: '40+' },
                { label: t.mergedPRs, value: '200+' },
                { label: t.newContributors, value: '11' },
              ]}
              highlights={[
                '增强 Kubernetes Operator 管理能力',
                '简化自定义资源生命周期管理',
                '提供更稳定的运行时支持'
              ]}
            />

            {/* KCL */}
            <ProjectCard
              title={t.kclTitle}
              name="kcl"
              description={t.kclDescription}
              stats={[
                { label: t.majorVersions, value: '4' },
                { label: t.featureReleases, value: '30' },
                { label: t.newStars, value: '957' },
                { label: t.newCommunityParticipants, value: '464' },
                { label: t.mergedPRs, value: '1000+' },
                { label: t.thirdPartyLibraries, value: '331' },
              ]}
              highlights={[
                '升级 IDE 插件优化 KCL 代码编写体验和效率，全新的 playground!',
                '完善 KCL 多语言 SDK，支持市面上多数编程语言的快速集成',
                '全新的 KCL 命令行工具，更快速的包管理工具，以及更加丰富的三方库市场，三方库数量已达 331 个',
                '完成了与 Crossplane 的深度合作，整个 Crossplane 生态系统现在可以利用 KCL 提供的高水平经验和能力来构建自己的云原生平台',
                '参与了三次 Linux 基金会 LFX Mentorship 项目，与社区伙伴共同完成包含 KCL 包管理工具三方库版本管理，三方库 checksum 校验，KCL IDE 的快速恢复等多个任务的设计与研发'
              ]}
            />

          </div>
        </div>
      </Section>

      {/* New Year Greeting - Only show for Chinese */}
      {defaultLanguage === 'zh' && (
        <Section className="py-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-red-50/30 pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.15]" />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto relative">
              {/* Decorative elements */}
              <div className="absolute -left-12 -top-12 w-48 h-48 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />

              <div className="relative space-y-6">
                <div className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-red-50 text-red-500 text-sm font-medium">
                  <span>{t.newYearTag}</span>
                </div>
                
                <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                  {t.newYearTitle}
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t.newYearMessage}<br/>
                  {t.newYearWish}
                </p>
              </div>
            </div>
          </div>
        </Section>
      )}
    </div>
  );
}

export default App;
