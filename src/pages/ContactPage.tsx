import React, { useState } from 'react';
import { Mail, MapPin, Send, Clock, MessageCircle, CheckCircle, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'メール',
      value: 'kobayashi.naoki@gmail.com',
      description: '24時間以内に返信いたします'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/ninjia-yeti',
      description: 'コードとプロジェクトをご覧ください',
      link: 'https://github.com/cobigtech'
    },
    {
      icon: MapPin,
      title: '所在地',
      value: '日本',
      description: 'リモート対応可能'
    }
  ];

  const services = [
    'Webアプリケーション開発',
    'WordPress開発・カスタマイズ',
    'Laravel API開発',
    'React/Next.js開発',
    'UI/UXデザイン',
    'パフォーマンス最適化',
    'セキュリティ監査',
    '技術コンサルティング',
    'チーム開発支援'
  ];

  const budgetRanges = [
    '〜50万円',
    '50万円〜100万円',
    '100万円〜300万円',
    '300万円〜500万円',
    '500万円以上',
    '相談したい'
  ];

  const timelineOptions = [
    '1ヶ月以内',
    '2-3ヶ月',
    '3-6ヶ月',
    '6ヶ月以上',
    '未定'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white font-zen-kaku">
            送信完了
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            お問い合わせありがとうございます。
            24時間以内にご返信いたします。
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            戻る
          </button>
        </motion.div>
      </div>
    );
  }

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
              お問い合わせ
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              プロジェクトのご相談、技術的なお悩み、お見積もりなど、
              お気軽にお問い合わせください
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
                    {info.value}
                  </p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-zen-kaku text-gray-900 dark:text-white">
                プロジェクトのご相談
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                詳細をお聞かせください。最適なソリューションを提案いたします。
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="小林 直樹"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="example@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    会社名・組織名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="株式会社サンプル"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    お問い合わせ種別 *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    ご予算
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    希望納期
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    {timelineOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  プロジェクトの詳細 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="プロジェクトの概要、要件、期待する成果などを詳しくお聞かせください..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  送信する
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              よくある質問
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              お問い合わせの前にご確認ください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'プロジェクトの進行はどのように行われますか？',
                answer: 'アジャイル開発手法を採用し、定期的な進捗報告とフィードバックを通じて、透明性の高いプロジェクト進行を心がけています。'
              },
              {
                question: 'リモートでの対応は可能ですか？',
                answer: 'はい、全国どこからでもリモートでの対応が可能です。オンライン会議ツールを活用して、効率的なコミュニケーションを行います。'
              },
              {
                question: 'WordPressのカスタマイズは対応していますか？',
                answer: 'はい、WordPressの開発・カスタマイズは得意分野の一つです。テーマ開発からプラグイン開発まで幅広く対応いたします。'
              },
              {
                question: 'Laravel APIの開発は可能ですか？',
                answer: 'もちろんです。LaravelでのAPI開発、React/Vue.jsとの連携、データベース設計まで一貫して対応いたします。'
              },
              {
                question: '小規模なプロジェクトでも依頼できますか？',
                answer: 'もちろんです。規模に関わらず、お客様のニーズに合わせた最適なソリューションを提供いたします。'
              },
              {
                question: '技術的な相談のみでも対応していただけますか？',
                answer: 'はい、技術コンサルティングサービスとして、技術選定やアーキテクチャ設計のご相談も承っております。'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start">
                  <MessageCircle className="w-6 h-6 text-primary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-primary-600 rounded-3xl p-12 text-white"
          >
            <Clock className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-zen-kaku">
              迅速な対応をお約束
            </h2>
            <p className="text-xl mb-8 opacity-90">
              お問い合わせいただいた内容には、24時間以内にご返信いたします。
              お気軽にご相談ください。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">メール返信</h3>
                <p className="text-sm opacity-80">24時間以内</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <p className="text-sm opacity-80">コードレビュー可能</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;