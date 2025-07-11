import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, Filter, Search, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [displayCount, setDisplayCount] = useState(9);

  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'ecommerce', name: 'ECサイト関連' },
    { id: 'corporate', name: 'コーポレートサイト' },
    { id: 'saas', name: 'フロントエンド開発' },
    { id: 'collaboration', name: 'システム開発'},
    { id: 'portfolio', name: 'サーバー・インフラ構築／運用保守' },
    { id: 'blog', name: '運用・保守・更新代行' },
    { id: 'landing', name: 'テスト・QA・デバッグ' }
    
  
  ];

  const projects = [
    // ECサイト (8 projects)
    {
       id: 1,
      title: 'オーガニック食品マーケット',
      description: '有機食品専門のECプラットフォーム。Next.js + Shopifyで構築。',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ecommerce',
      technologies: ['Next.js', 'Shopify', 'GraphQL', 'TypeScript'],
      date: '2023年11月',
      status: '運用中',
      demo: 'https://organic-market-demo.com',
      features: ['定期購入', '産地情報', '栄養成分表示', 'レシピ提案']
    },
    {
      id: 2,
      title: 'True Towel Shop',
      description: 'プレミアムタオル専門のECサイト。カスタムWordPressテーマとWooCommerceで構築。',
      image: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ecommerce',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'CSS3', 'jQuery'],
      date: '2023年10月',
      status: '運用中',
      demo: 'https://true-towel.shop/',
      features: ['商品カタログ', 'ショッピングカート', 'ユーザー管理', 'オーダー管理']
    },
    {
      id: 3,
      title: 'がんこ本舗オンラインストア',
      description: '環境に優しい洗剤・石鹸の専門ECサイト。WordPressベースのカスタムECシステム。',
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ecommerce',
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'CSS3'],
      date: '2023年8月',
      status: '運用中',
      demo: 'http://www.gankohompo.com',
      features: ['商品検索', '会員システム', 'ポイント制度', 'レビューシステム']
    },
    {
      id: 4,
      title: 'ファッションブティック EC',
      description: '高級ファッションブランドのオンラインストア。React + Laravel APIで構築。',
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ecommerce',
      technologies: ['React', 'Laravel', 'MySQL', 'Stripe', 'AWS'],
      date: '2024年1月',
      status: '運用中',
      demo: 'https://fashion-boutique-demo.com',
      features: ['高解像度商品画像', 'サイズガイド', '配送追跡', 'ウィッシュリスト']
    },
   

    // コーポレートサイト (8 projects)
    {
      id: 9,
      title: 'アネマ株式会社',
      description: 'モダンなデザインのコーポレートサイト。WordPressカスタムテーマで構築されたレスポンシブサイト。',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'corporate',
      technologies: ['WordPress', 'PHP', 'Sass', 'JavaScript', 'Gulp'],
      date: '2023年11月',
      status: '運用中',
      demo: 'https://anema.co.jp/',
      features: ['レスポンシブデザイン', 'SEO最適化', 'お問い合わせフォーム', 'ブログ機能']
    },
    {
      id: 10,
      title: '株式会社インターナショナル・オイル',
      description: '石油関連企業のコーポレートサイトリニューアル。WordPressによるCMS構築。',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'corporate',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      date: '2023年9月',
      status: '運用中',
      demo: 'https://www.int-oi.co.jp/',
      features: ['多言語対応', 'ニュース管理', '会社情報管理', 'アクセシビリティ対応']
    },
    {
      id: 11,
      title: 'Creative Survey',
      description: 'アンケート・調査サービスのコーポレートサイト。WordPress + カスタムプラグインで構築。',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'corporate',
      technologies: ['WordPress', 'PHP', 'React', 'API', 'Chart.js'],
      date: '2023年7月',
      status: '運用中',
      demo: 'https://jp.creativesurvey.com/',
      features: ['サービス紹介', '料金プラン', 'デモ機能', 'サポートシステム']
    },
    {
      id: 12,
      title: 'テクノロジー企業サイト',
      description: 'AI・機械学習企業のコーポレートサイト。Next.js + TypeScriptで構築。',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'corporate',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      date: '2024年2月',
      status: '運用中',
      demo: 'https://tech-company-demo.com',
      features: ['技術ブログ', '採用情報', 'プロダクト紹介', 'お客様事例']
    },
   
    {
      id: 16,
      title: '教育機関サイト',
      description: '専門学校のWebサイト。学生・保護者向けの情報発信サイト。',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'corporate',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Bootstrap'],
      date: '2023年5月',
      status: '運用中',
      demo: 'https://education-institute-demo.com',
      features: ['学科紹介', 'イベント情報', '入学案内', '学生生活']
    },

    // SaaS・協業ツール (8 projects)
    {
      id: 17,
      title: 'Workship Enterprise',
      description: 'フリーランス・副業人材マッチングプラットフォーム。Laravel + React で構築された高機能SaaS。',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'collaboration',
      technologies: ['Laravel', 'React', 'MySQL', 'Redis', 'AWS'],
      date: '2024年1月',
      status: '運用中',
      demo: 'https://enterprise.goworkship.com/',
      features: ['人材マッチング', 'プロジェクト管理', 'チャット機能', '決済システム']
    },
    {
      id: 18,
      title: 'Job Antenna 北海道',
      description: '北海道特化型求人サイト。Laravel APIとVue.jsフロントエンドで構築。',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'collaboration',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Elasticsearch', 'Docker'],
      date: '2023年12月',
      status: '運用中',
      demo: 'https://hokkaido.jobantenna.jp/',
      features: ['求人検索', '応募管理', 'スカウト機能', '地域特化検索']
    },
    {
      id: 19,
      title: 'SOKUDAN',
      description: '即戦力人材のマッチングプラットフォーム。Laravel + Next.jsで構築されたモダンなWebアプリ。',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'collaboration',
      technologies: ['Laravel', 'Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
      date: '2023年10月',
      status: '運用中',
      demo: 'https://sokudan.work/',
      features: ['AI マッチング', 'ビデオ面談', 'スキル評価', 'プロジェクト管理']
    },
    {
      id: 20,
      title: '勤怠システム',
      description: '企業向け勤怠管理システム。Laravel APIとReactで構築されたSaaSプラットフォーム。',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'saas',
      technologies: ['Laravel', 'React', 'MySQL', 'Chart.js', 'AWS'],
      date: '2023年6月',
      status: '運用中',
      demo: 'https://attendance-system-demo.com',
      features: ['勤怠記録', 'シフト管理', 'レポート生成', '給与計算連携']
    },
    {
      id: 21,
      title: 'プロジェクト管理ツール',
      description: 'チーム向けプロジェクト管理SaaS。React + Node.jsで構築。',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'saas',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      date: '2024年3月',
      status: '開発中',
      features: ['タスク管理', 'ガントチャート', 'チーム協業', 'レポート機能']
    },
    {
      id: 22,
      title: '顧客管理システム',
      description: '中小企業向けCRMシステム。Laravel + Vue.jsで構築。',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'saas',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
      date: '2023年9月',
      status: '運用中',
      demo: 'https://crm-system-demo.com',
      features: ['顧客情報管理', '営業活動記録', 'メール配信', '売上分析']
    },
  

    // ポートフォリオ・ブログ・ランディングページ (16 projects)
    {
      id: 25,
      title: 'デザイナーポートフォリオ',
      description: 'グラフィックデザイナーのポートフォリオサイト。作品を美しく展示。',
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'portfolio',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      date: '2024年2月',
      status: '運用中',
      demo: 'https://designer-portfolio-demo.com',
      features: ['作品ギャラリー', 'アニメーション', 'レスポンシブ', 'お問い合わせ']
    },
    {
      id: 26,
      title: '写真家ポートフォリオ',
      description: 'プロ写真家のポートフォリオサイト。高解像度画像対応。',
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'portfolio',
      technologies: ['React', 'Gatsby', 'GraphQL', 'Netlify'],
      date: '2023年11月',
      status: '運用中',
      demo: 'https://photographer-portfolio-demo.com',
      features: ['画像最適化', 'ライトボックス', 'カテゴリ分類', 'SNS連携']
    },
    {
      id: 27,
      title: 'テックブログ',
      description: '技術情報発信ブログ。WordPress + カスタムテーマで構築。',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'blog',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Elasticsearch'],
      date: '2023年9月',
      status: '運用中',
      demo: 'https://tech-blog-demo.com',
      features: ['記事検索', 'タグ管理', 'コメント機能', 'SNS共有']
    },
   
    {
      id: 33,
      title: 'フリーランサーポートフォリオ',
      description: 'フリーランス開発者のポートフォリオサイト。技術スキルを重視した構成。',
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'portfolio',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      date: '2024年3月',
      status: '運用中',
      demo: 'https://freelancer-portfolio-demo.com',
      features: ['プロジェクト紹介', 'スキル表示', 'お問い合わせ', 'ブログ連携']
    },
    {
      id: 34,
      title: '料理ブログ',
      description: '料理レシピとライフスタイルを紹介するブログサイト。',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'blog',
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
      date: '2023年8月',
      status: '運用中',
      demo: 'https://cooking-blog-demo.com',
      features: ['レシピ検索', '材料リスト', '調理動画', 'ユーザー投稿']
    },
    {
      id: 35,
      title: 'スタートアップランディング',
      description: 'スタートアップ企業の資金調達用ランディングページ。',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'landing',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      date: '2024年2月',
      status: '運用中',
      demo: 'https://startup-landing-demo.com',
      features: ['ピッチデック', 'チーム紹介', '投資家向け情報', 'お問い合わせ']
    },
    {
      id: 36,
      title: 'ミュージシャンポートフォリオ',
      description: 'ミュージシャンの楽曲とライブ情報を紹介するサイト。',
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'portfolio',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      date: '2023年12月',
      status: '運用中',
      demo: 'https://musician-portfolio-demo.com',
      features: ['楽曲試聴', 'ライブスケジュール', 'グッズ販売', 'ファンクラブ']
    },
    {
      id: 37,
      title: '旅行ブログ',
      description: '世界各地の旅行記録と観光情報を発信するブログ。',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'blog',
      technologies: ['Gatsby', 'React', 'GraphQL', 'Netlify'],
      date: '2023年6月',
      status: '運用中',
      demo: 'https://travel-blog-demo.com',
      features: ['地図連携', '写真ギャラリー', '旅行プラン', 'SNS共有']
    },
    {
      id: 38,
      title: 'アプリランディングページ',
      description: 'モバイルアプリのプロモーション用ランディングページ。',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'landing',
      technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Netlify'],
      date: '2023年11月',
      status: '運用中',
      demo: 'https://app-landing-demo.com',
      features: ['アプリ紹介', 'ダウンロードリンク', 'スクリーンショット', 'レビュー表示']
    },
    {
      id: 39,
      title: 'コンサルタントポートフォリオ',
      description: 'ビジネスコンサルタントの実績と専門性を紹介するサイト。',
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'portfolio',
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
      date: '2023年9月',
      status: '運用中',
      demo: 'https://consultant-portfolio-demo.com',
      features: ['実績紹介', 'サービス説明', 'お客様の声', '無料相談']
    },
    {
      id: 40,
      title: 'ウェビナーランディング',
      description: 'オンラインセミナーの集客用ランディングページ。',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'landing',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      date: '2024年1月',
      status: '運用中',
      demo: 'https://webinar-landing-demo.com',
      features: ['セミナー申込み', '決済機能', 'スケジュール表示', 'リマインダー']
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedProjects = filteredProjects.slice(0, displayCount);
  const hasMoreProjects = filteredProjects.length > displayCount;

  const handleShowMore = () => {
    setDisplayCount(prev => Math.min(prev + 9, filteredProjects.length));
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setDisplayCount(9); // Reset to show first 9 when changing category
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setDisplayCount(9); // Reset to show first 9 when searching
  };

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
              プロジェクト実績
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              React、Next.js、WordPress等を使用した40以上の実際の運用中プロジェクトをご紹介します
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar - Independent Section */}
      <section className="px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-100/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <label htmlFor="project-search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    プロジェクトを検索
                  </label>
                  <input
                    id="project-search"
                    type="text"
                    placeholder="プロジェクト名、技術、説明で検索..."
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-md text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-lg"
                  />
                </div>
                {searchTerm && (
                  <button
                    onClick={() => handleSearchChange('')}
                    className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                    aria-label="検索をクリア"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              {searchTerm && (
                <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  「{searchTerm}」の検索結果: {filteredProjects.length}件
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-100/50 dark:border-gray-700/50"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">カテゴリー:</span>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:scale-105'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.status === '運用中' 
                          ? 'bg-green-600 text-white' 
                          : project.status === '開発中'
                          ? 'bg-yellow-600 text-white'
                          : 'bg-primary-600 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {project.features && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">主な機能:</h4>
                        <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <div className="w-1 h-1 bg-primary-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex space-x-3">
                      {project.status === '運用中' && project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          サイトを見る
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50/80 dark:hover:bg-gray-700/80 transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {/* Show More Button */}
          {hasMoreProjects && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center mt-12"
            >
              <button
                onClick={handleShowMore}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl font-semibold"
              >
                さらに表示 ({Math.min(9, filteredProjects.length - displayCount)}件)
                <ChevronDown className="ml-2 w-5 h-5" />
              </button>
            </motion.div>
          )}

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 mb-4">
                <Tag className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                プロジェクトが見つかりません
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                検索条件を変更してお試しください
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Technology Stats */}
      <section className="py-20 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md">
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
              40以上のプロジェクトで使用している技術の実績
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { tech: 'React', count: '18+', description: 'プロジェクト' },
              { tech: 'WordPress', count: '15+', description: 'サイト構築' },
              { tech: 'Laravel', count: '12+', description: 'API開発' },
              { tech: 'プロジェクト', count: '40+', description: '総実績数' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.count}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.tech}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-primary-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-zen-kaku">
              あなたのプロジェクトも実現しませんか？
            </h2>
            <p className="text-xl mb-8 opacity-90">
              8年以上の経験と40以上のプロジェクト実績のある技術で、
              あなたのアイデアを現実のものにします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl font-semibold"
              >
                プロジェクトを相談する
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                サービスを見る
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;