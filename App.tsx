
import React, { useState, useEffect, useCallback } from 'react';
import { AppStage, WishData } from './types';
import { INITIAL_CONFIG, INITIAL_STATS } from './constants';
import WishPage from './components/WishPage';
import CheckScorePage from './components/CheckScorePage';
import EvaluatePage from './components/EvaluatePage';
import ReportPage from './components/ReportPage';
import PrivacyModal from './components/PrivacyModal';
import AdminPanel from './components/AdminPanel';

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>(AppStage.WISH);
  const [showPrivacy, setShowPrivacy] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);
  const [config, setConfig] = useState(INITIAL_CONFIG);

  const trackEvent = useCallback((type: string, key?: string) => {
    const rawStats = localStorage.getItem('yidao_stats') || JSON.stringify(INITIAL_STATS);
    const stats = JSON.parse(rawStats);
    if (type === 'IMPRESSION') stats.impressions += 1;
    if (type === 'SHARE') stats.shares += 1;
    if (type === 'WISH_SUBMIT') stats.wishSubmits += 1;
    if (type === 'REPORT_SUBMIT') stats.reportSubmits += 1;
    if (type === 'REACH' && key) stats.stageReach[key] = (stats.stageReach[key] || 0) + 1;
    localStorage.setItem('yidao_stats', JSON.stringify(stats));
  }, []);

  useEffect(() => {
    const savedConfig = localStorage.getItem('yidao_live_config');
    if (savedConfig) {
      try { setConfig(JSON.parse(savedConfig)); } catch (e) { console.error(e); }
    }
    trackEvent('IMPRESSION');
  }, [trackEvent]);

  useEffect(() => {
    trackEvent('REACH', stage);
  }, [stage, trackEvent]);

  const handleUpdateConfig = (newConfig: any) => {
    setConfig(newConfig);
    localStorage.setItem('yidao_live_config', JSON.stringify(newConfig));
  };

  const STAGE_NAMES: Record<AppStage, string> = {
    [AppStage.WISH]: '考前祈福',
    [AppStage.CHECK_SCORE]: '查分中转',
    [AppStage.EVALUATE]: '感谢名师',
    [AppStage.SUCCESS_REPORT]: '报喜领奖'
  };

  const handleWishSubmitted = (data: WishData) => {
    trackEvent('WISH_SUBMIT');
    localStorage.setItem('yidao_last_wish', JSON.stringify(data));
    const existing = JSON.parse(localStorage.getItem('yidao_data') || '[]');
    localStorage.setItem('yidao_data', JSON.stringify([...existing, { ...data, timestamp: new Date().toLocaleString(), type: 'WISH' }]));
  };

  return (
    <div className="min-h-screen bg-[#8b1111] relative text-white font-serif-zh overflow-hidden select-none">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square bg-yellow-500/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] aspect-square bg-red-500/30 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="fixed top-2 left-0 right-0 flex justify-between items-center px-6 z-[70] pointer-events-none">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 shadow-lg pointer-events-auto">
          <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center font-bold text-xs text-white border border-yellow-500/50 shadow-inner">道</div>
          <span className="text-sm font-bold tracking-[.25em] text-white/90 uppercase">{config.global.brandName}</span>
        </div>
        <button 
          onClick={() => { trackEvent('SHARE'); alert(config.global.shareAlertText); }}
          className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 shadow-lg pointer-events-auto active:scale-95 transition-all text-yellow-400"
        >
          <span className="text-xs font-black tracking-widest">分享</span>
          <span className="text-lg">🚀</span>
        </button>
      </div>

      <main className="relative z-20 max-w-md mx-auto h-screen flex flex-col" onDoubleClick={() => setShowAdmin(true)}>
        {stage === AppStage.WISH && <WishPage config={config.wishPage} onNext={() => setStage(AppStage.CHECK_SCORE)} onWishSubmit={handleWishSubmitted} />}
        {stage === AppStage.CHECK_SCORE && <CheckScorePage config={config.checkScorePage} courseLink={config.wishPage.publicCourse.link} onNext={() => setStage(AppStage.EVALUATE)} />}
        {stage === AppStage.EVALUATE && <EvaluatePage config={config.evaluatePage} onNext={() => setStage(AppStage.SUCCESS_REPORT)} />}
        {stage === AppStage.SUCCESS_REPORT && <ReportPage config={config.reportPage} onReportSubmit={() => trackEvent('REPORT_SUBMIT')} />}
      </main>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-sm">
        <div className="bg-[#2a0505]/95 backdrop-blur-xl rounded-[40px] px-2 py-2 flex items-center justify-between shadow-2xl border border-white/5">
          {Object.values(AppStage).map(s => (
            <button key={s} onClick={() => setStage(s)} className={`flex-1 flex flex-col items-center gap-1 transition-all py-1 ${stage === s ? 'text-white' : 'text-white/40'}`}>
              <div className={`w-full max-w-[64px] h-11 flex items-center justify-center rounded-[22px] transition-all duration-300 ${stage === s ? 'bg-[#f5a623] text-black shadow-lg shadow-yellow-500/30' : ''}`}>
                <span className="text-xl">
                  {s === AppStage.WISH ? '🙇' : s === AppStage.CHECK_SCORE ? '🔍' : s === AppStage.EVALUATE ? '✍️' : '🏆'}
                </span>
              </div>
              <span className="text-[10px] font-bold mt-0.5">{STAGE_NAMES[s]}</span>
            </button>
          ))}
        </div>
      </div>

      {showPrivacy && <PrivacyModal onAgree={() => setShowPrivacy(false)} />}
      {showAdmin && <AdminPanel config={config} onUpdateConfig={handleUpdateConfig} onClose={() => setShowAdmin(false)} />}
    </div>
  );
};

export default App;
