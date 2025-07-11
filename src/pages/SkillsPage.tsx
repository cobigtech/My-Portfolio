import React from 'react';
import { Code2, Palette, Database, Cloud, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillsPage: React.FC = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'フロントエンド開発',
      skills: [
        { name: 'React', level: 95, description: 'Redux、React DnD、Recharts等のライブラリ活用' },
        { name: 'TypeScript', level: 90, description: '型安全な開発環境の構築' },
        { name: 'Next.js', level: 88, description: 'SSR/SSG対応のWebアプリケーション' },
        { name: 'JavaScript ES6+', level: 92, description: 'モダンJavaScript開発' },
        { name: 'HTML5', level: 95, description: 'セマンティックマークアップ' },
        { name: 'CSS3/SCSS', level: 90, description: 'レスポンシブデザイン実装' },
        { name: 'Tailwind CSS', level: 92, description: 'ユーティリティファーストCSS' },
        { name: 'Chakra UI', level: 85, description: 'モダンなReactコンポーネントライブラリ' },
        { name: 'Material UI', level: 88, description: 'Googleデザインシステム' },
        { name: 'Bootstrap', level: 90, description: 'レスポンシブフレームワーク' },
        { name: 'jQuery', level: 85, description: 'DOM操作とイベント処理' },
        { name: 'React Native', level: 80, description: 'クロスプラットフォームモバイル開発' },
        { name: 'Shopify', level: 78, description: 'ECサイト構築・カスタマイズ' },
        { name: 'Bubble', level: 70, description: 'ノーコードWebアプリ開発' },
        { name: 'SASS', level: 85, description: '高度なCSSプリプロセッサ' }
      ]
    },
    {
      icon: Database,
      title: 'バックエンド開発',
      skills: [
        { name: 'PHP', level: 92, description: 'サーバーサイドWeb開発' },
        { name: 'Laravel', level: 88, description: 'エレガントなPHPフレームワーク' },
        { name: 'WordPress', level: 95, description: 'CMS開発とカスタマイズ' },
        { name: 'Ruby on Rails', level: 85, description: 'Ruby Webフレームワーク' },
        { name: 'Ruby', level: 82, description: 'オブジェクト指向プログラミング' },
        { name: 'Node.js', level: 85, description: 'サーバーサイドJavaScript開発' },
        { name: 'Python', level: 75, description: 'データ処理と機械学習' },
        { name: 'C/C++', level: 70, description: 'システムプログラミング' },
        { name: 'C#', level: 68, description: 'Windowsアプリ・ゲーム開発' },
        { name: 'Salesforce', level: 65, description: 'CRM・業務自動化' },
        { name: 'AI', level: 70, description: 'AI・機械学習プロジェクト' },
        { name: 'Excel', level: 90, description: 'データ分析・業務効率化' },
        { name: 'GraphQL', level: 80, description: '効率的なデータ取得API' },
        { name: 'REST APIs', level: 90, description: 'RESTfulサービス設計' },
        { name: 'SQL', level: 88, description: 'データベースクエリ最適化' }
      ]
    },
    {
      icon: Cloud,
      title: 'クラウド・DevOps',
      skills: [
        { name: 'AWS', level: 80, description: 'EC2、S3、Lambda、DynamoDB' },
        { name: 'AWS Amplify', level: 78, description: 'フルスタックアプリケーション開発' },
        { name: 'AWS AppSync', level: 75, description: 'GraphQL API管理' },
        { name: 'Amazon Cognito', level: 80, description: 'ユーザー認証・認可' },
        { name: 'Amazon SNS', level: 75, description: '通知サービス' },
        { name: 'Netlify', level: 85, description: 'JAMstack デプロイメント' },
        { name: 'Webflow', level: 70, description: 'ノーコード開発プラットフォーム' },
        { name: 'Docker', level: 83, description: 'コンテナ化技術' },
        { name: 'CI/CD', level: 78, description: '継続的インテグレーション' },
        { name: 'Google Analytics', level: 85, description: 'アクセス解析・データ分析' }
      ]
    },
    {
      icon: Palette,
      title: 'デザイン・UX',
      skills: [
        { name: 'UI/UX Design', level: 85, description: 'ユーザー中心設計' },
        { name: 'Figma', level: 88, description: 'デザインツール・プロトタイピング' },
        { name: 'Responsive Design', level: 92, description: 'レスポンシブWebデザイン' },
        { name: 'Web Accessibility (A11Y)', level: 80, description: 'アクセシビリティ対応' },
        { name: 'UI Components', level: 90, description: '再利用可能コンポーネント設計' },
        { name: 'UI Development', level: 88, description: 'インターフェース実装' },
        { name: 'User Interface (UI)', level: 85, description: 'ユーザーインターフェース設計' },
        { name: 'Software Design', level: 87, description: 'ソフトウェア設計' }
      ]
    },
    {
      icon: Shield,
      title: 'テスト・品質管理',
      skills: [
        { name: 'Jest', level: 85, description: 'JavaScript テストフレームワーク' },
        { name: 'Cypress', level: 80, description: 'E2Eテスト自動化' },
        { name: 'Code Review', level: 88, description: 'コード品質管理' },
        { name: 'Performance Optimization', level: 87, description: 'パフォーマンス最適化' },
        { name: 'SEO', level: 83, description: '検索エンジン最適化' },
        { name: 'Software Development', level: 90, description: 'ソフトウェア開発手法' },
        { name: 'Functional Programming', level: 82, description: '関数型プログラミング' },
        { name: 'RESTful Development', level: 88, description: 'RESTful API開発' }
      ]
    },
    {
      icon: Zap,
      title: 'ツール・その他',
      skills: [
        { name: 'Git', level: 92, description: 'バージョン管理' },
        { name: 'GitHub', level: 90, description: 'コード管理・協業' },
        { name: 'NPM', level: 88, description: 'パッケージ管理' },
        { name: 'Redux', level: 85, description: '状態管理ライブラリ' },
        { name: 'Gatsby', level: 80, description: '静的サイトジェネレーター' },
        { name: 'Mapbox SDK', level: 75, description: '地図・位置情報サービス' },
        { name: 'Headless Commerce', level: 78, description: 'ヘッドレスECシステム' },
        { name: 'i18n', level: 82, description: '国際化対応' },
        { name: 'Waterfall Methodology', level: 80, description: 'ウォーターフォール開発' }
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: Cloud
    },
    {
      name: 'PHP Zend Certified Engineer',
      issuer: 'Zend Technologies',
      year: '2020',
      icon: Code2
    },
    {
      name: 'WordPress Developer Certification',
      issuer: 'WordPress Foundation',
      year: '2019',
      icon: Database
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2022',
      icon: Code2
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2022',
      icon: Cloud
    },
    {
      name: 'Certified Scrum Master',
      issuer: 'Scrum Alliance',
      year: '2021',
      icon: Zap
    }
  ];

  const techStats = [
    { category: 'Languages', count: '10+', description: 'プログラミング言語' },
    { category: 'Frameworks', count: '15+', description: 'フレームワーク' },
    { category: 'Libraries', count: '20+', description: 'ライブラリ・API' },
    { category: 'Tools', count: '25+', description: '開発ツール' }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              技術スキル
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              8年以上の経験で培った幅広い技術スタックと、
              フルスタック開発における実践的なスキル
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                フルスタック開発者
              </span>
              <span className="px-4 py-2 bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400 rounded-full text-sm font-medium">
                8年以上の経験
              </span>
              <span className="px-4 py-2 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-full text-sm font-medium">
                WordPress専門
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              技術統計
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              習得している技術の幅広さと深さ
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.count}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.category}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mr-6">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-zen-kaku">
                  {category.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.05, duration: 0.5 }}
                    className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: skillIndex * 0.05 + 0.5, duration: 1 }}
                        className="bg-primary-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              認定・資格
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              技術力を証明する公式認定資格
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {cert.issuer}
                </p>
                <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              専門分野
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              特に得意とする技術領域
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'WordPress開発',
                description: 'カスタムテーマ・プラグイン開発、ヘッドレスCMS構築',
                technologies: ['WordPress', 'PHP', 'MySQL', 'REST API'],
                level: 95
              },
              {
                title: 'React エコシステム',
                description: 'React、Redux、Next.js を使用したモダンフロントエンド',
                technologies: ['React', 'Redux', 'Next.js', 'TypeScript'],
                level: 92
              },
              {
                title: 'Laravel開発',
                description: 'API開発、認証システム、データベース設計',
                technologies: ['Laravel', 'PHP', 'MySQL', 'API'],
                level: 88
              },
              {
                title: 'AWS クラウド',
                description: 'EC2、S3、Lambda、Cognito等のAWSサービス活用',
                technologies: ['AWS', 'Lambda', 'S3', 'Cognito'],
                level: 80
              },
              {
                title: 'UI/UX実装',
                description: 'Chakra UI、Material UI、Tailwind CSSでのUI構築',
                technologies: ['Chakra UI', 'Material UI', 'Tailwind CSS'],
                level: 87
              },
              {
                title: 'フルスタック統合',
                description: 'フロントエンドからバックエンドまでの一貫開発',
                technologies: ['React', 'Laravel', 'WordPress', 'API'],
                level: 90
              }
            ].map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {spec.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {spec.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {spec.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">習熟度</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{spec.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${spec.level}%` }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    className="bg-primary-600 h-2 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-primary-600 rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-zen-kaku">
              継続的な技術習得
            </h2>
            <p className="text-xl mb-8 opacity-90">
              8年以上の経験を通じて、技術は日々進歩していることを実感しています。
              常に新しい技術を学び、実践的なスキルを身につけることで、
              クライアントに最高の価値を提供し続けます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">実践重視</h3>
                <p className="text-sm opacity-80">
                  学んだ技術を実際のプロジェクトで活用
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">品質追求</h3>
                <p className="text-sm opacity-80">
                  コードレビューとテストで品質を保証
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">知識共有</h3>
                <p className="text-sm opacity-80">
                  GitHubとコミュニティで知識を共有
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;