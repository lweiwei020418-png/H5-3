
import React, { useState, useEffect } from 'react';
import { WishData } from '../types';
import { POSTER_TEMPLATES } from '../constants';

interface WishPageProps {
  config: any;
  onWishSubmit: (data: WishData) => void;
  onNext: () => void;
}

const WishPage: React.FC<WishPageProps> = ({ config, onWishSubmit, onNext }) => {
  const [showForm, setShowForm] = useState(false);
  const [showPoster, setShowPoster] = useState(false);
  const [templateIdx, setTemplateIdx] = useState(0);
  const [showShareGuide, setShowShareGuide] = useState(false);
  const [formData, setFormData] = useState<WishData>({ nickname: '', targetSchool: '', targetScore: '', message: '' });
  const [danmakuRows, setDanmakuRows] = useState<string[][]>([
    ['政治85+！', '考神附体', '一战成硕', '研友顶峰相见', '有道政治必胜', '谢谢米老师'],
    ['稳住能赢', '研招网一通百通', '26考研上岸', '有道政治太牛了', '必胜必胜', '政治一定要过'],
    ['梦想成真', '上岸上岸', '考研人加油', '政治80+稳了', '谢谢有道名师团', '成功录取']
  ]);

  const handleConfirmSync = () => {
    const newDanmaku = `${formData.nickname}: ${formData.message}`;
    setDanmakuRows(prev => {
      const newRows = [...prev];
      newRows[Math.floor(Math.random() * newRows.length)] = [newDanmaku, ...newRows[0]];
      return newRows;
    });
    setShowPoster(false);
    alert(config.syncSuccessAlert);
  };

  const handleViewCard = () => {
    const lastWish = localStorage.getItem('yidao_last_wish');
    if (lastWish) {
      setFormData(JSON.parse(lastWish));
      setShowPoster(true);
    } else {
      alert('您还没有填写心愿哦，快去许愿吧！');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onWishSubmit(formData);
    setShowPoster(true);
    setShowForm(false);
  };

  const handleShareMoments = () => {
    setShowShareGuide(true);
  };

  if (showPoster) {
    const t = POSTER_TEMPLATES[templateIdx];
    return (
      <div className="flex flex-col items-center h-full px-6 pt-20 overflow-y-auto scrollbar-hide pb-32 animate-in slide-in-from-bottom duration-500">
        <div className={`relative w-full aspect-[4/5.2] flex-shrink-0 ${t.color} rounded-[4px] p-6 shadow-2xl flex flex-col border-[6px] border-white/10 overflow-hidden`}>
          <div className="flex justify-between items-start text-[8px] font-bold opacity-70">
            <div className={t.textColor}>WIN SUCCESS</div>
            <div className={t.textColor}>IMMEDIATELY</div>
          </div>
          
          <div className="flex-1 flex flex-col justify-center items-center text-center py-4">
            <div className={`text-[18px] font-bold leading-none mb-1 opacity-30 italic ${t.textColor}`}>{t.subText}</div>
            <div className={`text-[16px] font-bold leading-none mb-6 opacity-30 italic ${t.textColor}`}>{t.subText}</div>
            <h2 className={`text-6xl font-black tracking-tighter drop-shadow-lg ${t.textColor} font-serif-zh`}>{t.title}</h2>
          </div>

          <div className="bg-[#fffcfc]/95 rounded-sm p-5 mt-4 shadow-inner border border-black/5 min-h-[120px] flex flex-col justify-center">
              <div className="flex justify-between items-center mb-2">
                 <span className="text-[#b22222] font-black text-xs">TO: {formData.nickname || '考研学子'}</span>
                 <span className="text-[#b22222] font-black text-xs">GOAL: {formData.targetScore || '高分'}分</span>
              </div>
              <p className="text-[#333] text-sm font-serif-zh italic leading-relaxed">“愿在【{formData.targetSchool || '理想院校'}】顶峰相见：{formData.message || '一战成硕！'}”</p>
          </div>

          <div className="mt-4 flex justify-between items-end text-[7px] font-bold opacity-50">
            <div className={t.textColor}>{t.bottomLeft}</div>
            <div className={t.textColor}>{t.bottomRight}</div>
          </div>
        </div>

        <div className="w-full space-y-4 mt-6 px-2 flex flex-col items-center">
           <button onClick={() => setTemplateIdx((prev) => (prev + 1) % POSTER_TEMPLATES.length)} className="w-full py-2 text-white/40 text-xs underline">切换卡片样式</button>
           
           <button onClick={handleConfirmSync} className="w-full py-4 bg-[#e62e2d] text-white rounded-full font-bold shadow-lg active:scale-95 transition">确定发布 · 同步祈福墙</button>
           
           <button onClick={handleShareMoments} className="w-full py-4 bg-[#8b1111] border-2 border-white/30 text-white rounded-full font-bold active:scale-95 transition">分享朋友圈好运加倍</button>
           
           <button onClick={onNext} className="w-full py-4 border-2 border-white/20 bg-white/10 text-white rounded-full font-bold animate-pulse flex flex-col items-center justify-center">
             <span className="text-lg">继续查分之旅 &gt;</span>
             <span className="text-[10px] font-bold text-yellow-400 mt-1 tracking-tighter drop-shadow-sm">查分后分享/查看公开课解析，好运不停歌</span>
           </button>
        </div>

        {showShareGuide && (
          <div className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-start pt-10" onClick={() => setShowShareGuide(false)}>
            <div className="absolute top-4 right-8 text-white text-right space-y-2">
               <div className="text-4xl animate-bounce">👆</div>
               <p className="text-lg font-bold">点击右上角分享<br/>让研友一起沾沾喜气！</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  const BTN_STYLE = "w-full py-6 bg-gradient-to-b from-[#f8bc3a] to-[#d68a0c] text-red-950 rounded-[40px] font-black text-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] active:scale-[0.98] transition-all";

  return (
    <div className="flex flex-col h-full pt-16 overflow-y-auto scrollbar-hide pb-32">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-5xl font-black text-white drop-shadow-lg">{config.title}</h1>
        <p className="text-yellow-500/80 text-[10px] font-bold uppercase tracking-[0.5em]">{config.subTitle}</p>
      </div>

      <div className="flex-1 flex flex-col items-center px-6">
        <div className="text-center mb-6">
           <h1 className="text-4xl font-calligraphy font-bold gold-gradient flex items-center justify-center gap-4">
             <span>{config.mainHeading[0]}</span><span className="w-px h-8 bg-yellow-500/30"></span><span>{config.mainHeading[1]}</span>
           </h1>
        </div>

        {/* 1. 公开课板块优化：放大突出预约按钮 */}
        <div 
          onClick={() => config.publicCourse.link && window.open(config.publicCourse.link, '_blank')} 
          className="w-full mb-6 bg-gradient-to-r from-[#5c0b0b] to-[#8b1111] border border-yellow-500/30 rounded-2xl p-6 flex items-center justify-between shadow-[0_10px_25px_rgba(0,0,0,0.4)] cursor-pointer hover:border-yellow-500/50 transition-all active:scale-[0.99]"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center text-3xl shadow-inner">📺</div>
            <div className="flex flex-col">
              <span className="text-yellow-400 font-black text-base">{config.publicCourse.title}</span>
              <span className="text-white/50 text-[10px] mt-0.5">{config.publicCourse.desc}</span>
            </div>
          </div>
          <div className="bg-gradient-to-b from-yellow-300 to-yellow-500 text-red-950 px-8 py-3.5 rounded-full text-sm font-black shadow-[0_4px_15px_rgba(245,166,35,0.4)] animate-pulse active:scale-95 transition-transform">
            {config.publicCourse.buttonText}
          </div>
        </div>

        <div className="w-full h-48 relative mb-6 overflow-hidden rounded-[32px] border border-white/10 bg-black/20 flex flex-col justify-around py-4">
          {danmakuRows.map((row, idx) => (
            <div key={idx} className={`flex gap-6 whitespace-nowrap ${idx % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
              {[...row, ...row].map((t, i) => (
                <div key={i} className="px-5 py-2 rounded-full border border-white/5 text-[11px] font-bold bg-white/10 backdrop-blur-sm">
                  {t}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full space-y-5">
          <button onClick={() => setShowForm(true)} className={BTN_STYLE}>
            许下上岸心愿
          </button>
          <button onClick={handleViewCard} className={BTN_STYLE}>
            查看我的心愿卡
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowForm(false)}></div>
          <form onSubmit={handleSubmit} className="relative bg-[#3a0808] border-2 border-yellow-500/30 p-8 rounded-[40px] w-full max-w-sm space-y-4">
            <h3 className="text-2xl font-calligraphy text-yellow-500 text-center mb-4">诚心所愿 必有回响</h3>
            <input required className="w-full bg-black/30 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-yellow-500" placeholder="您的昵称" value={formData.nickname} onChange={e => setFormData({...formData, nickname: e.target.value})}/>
            <input required className="w-full bg-black/30 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-yellow-500" placeholder="目标分数 (如: 400+)" value={formData.targetScore} onChange={e => setFormData({...formData, targetScore: e.target.value})}/>
            <input required className="w-full bg-black/30 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-yellow-500" placeholder="目标院校" value={formData.targetSchool} onChange={e => setFormData({...formData, targetSchool: e.target.value})}/>
            <textarea required className="w-full bg-black/30 border border-white/10 p-4 rounded-2xl text-white h-24 outline-none focus:border-yellow-500" placeholder="写下你的考研宣言..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}/>
            <button type="submit" className="w-full py-4 bg-yellow-500 text-red-900 rounded-full font-black text-xl shadow-lg">生成好运海报</button>
          </form>
        </div>
      )}

      <style>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left 15s linear infinite; }
        .animate-scroll-right { animation: scroll-right 18s linear infinite; }
      `}</style>
    </div>
  );
};

export default WishPage;
