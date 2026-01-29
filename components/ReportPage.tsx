
import React, { useState } from 'react';

// Added onReportSubmit to the props interface to match App.tsx usage
interface ReportPageProps {
  config: any;
  onReportSubmit?: () => void;
}

const ReportPage: React.FC<ReportPageProps> = ({ config, onReportSubmit }) => {
  const [formData, setFormData] = useState({ nickname: '', phone: '' });
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshot(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!screenshot) { alert('请先上传成绩截图哦'); return; }
    setIsSuccess(true);
    // Call the report submission tracker from props
    if (onReportSubmit) {
      onReportSubmit();
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-6 space-y-8 text-center animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center text-5xl mb-4 shadow-[0_0_50px_rgba(234,179,8,0.5)] border-4 border-red-900">🎓</div>
        <h2 className="text-4xl font-calligraphy text-yellow-400">喜报登科！</h2>
        <div className="space-y-4 text-white/90 font-serif-zh leading-relaxed bg-black/20 p-6 rounded-3xl border border-yellow-500/20">
          <p>恭喜 <span className="text-yellow-400 font-bold">{formData.nickname}</span> 同学</p>
          <p className="text-sm">您的【复试面试真题库】已准备就绪</p>
          <p className="text-xs text-white/50">稍后将通过短信形式发送至：{formData.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}</p>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-500/20 to-transparent p-6 rounded-3xl border border-yellow-500/40 w-full relative overflow-hidden">
          <div className="absolute top-[-10px] right-[-10px] text-4xl opacity-10 rotate-12">🎁</div>
          <p className="text-sm text-yellow-400 mb-4 font-bold tracking-widest">🔥 进阶：解锁千元免单奖学金</p>
          <button 
             onClick={() => setShowAssistant(true)}
             className="w-full py-4 bg-white text-red-900 rounded-xl font-bold shadow-xl active:bg-gray-100 transition"
          >
            添加助教私发录屏
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto px-6 py-12 space-y-8 scrollbar-hide pb-32">
      <div className="fixed top-40 right-4 text-4xl opacity-10 animate-float pointer-events-none">🎁</div>
      <div className="fixed bottom-40 left-4 text-3xl opacity-10 animate-pulse pointer-events-none">🧧</div>

      <div className="text-center">
        {/* Fix: Used config.heading */}
        <h1 className="text-4xl font-calligraphy font-bold gold-gradient drop-shadow-md mb-2">{config.heading}</h1>
        <p className="text-yellow-500/60 text-[10px] tracking-[0.3em] font-bold uppercase">Success Honor Roll</p>
        
        <div className="mt-4 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 flex items-center gap-2">
          <span className="text-xs">📢</span>
          <div className="flex-1 overflow-hidden whitespace-nowrap text-[10px] font-bold text-yellow-200">
            {/* Fix: Used config.marqueeText */}
            <span className="inline-block animate-marquee">{config.marqueeText}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
            <input required className="w-full bg-black/20 border-2 border-yellow-500/20 p-4 rounded-2xl text-white outline-none focus:border-yellow-500 transition" placeholder="您的昵称" value={formData.nickname} onChange={e => setFormData({...formData, nickname: e.target.value})}/>
            <input required type="tel" pattern="[0-9]{11}" className="w-full bg-black/20 border-2 border-yellow-500/20 p-4 rounded-2xl text-white outline-none focus:border-yellow-500 transition" placeholder="手机号 (用于发放奖励)" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}/>
        </div>

        <div className="space-y-4">
          <div className="bg-black/20 border-2 border-dashed border-yellow-500/40 rounded-3xl p-8 text-center relative group hover:bg-black/40 transition-all">
            {screenshot ? (
              <img src={screenshot} className="max-h-48 mx-auto rounded-lg shadow-xl" alt="Score" />
            ) : (
              <div className="space-y-3">
                <div className="text-5xl drop-shadow-md">📸</div>
                <p className="text-base text-yellow-400 font-bold font-serif-zh">上传成绩截图</p>
                <p className="text-[10px] text-white/40 font-bold italic">即刻解锁【面试真题库】</p>
              </div>
            )}
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" onChange={handleFileChange} />
          </div>

          <div 
            onClick={() => setShowAssistant(true)}
            className="bg-gradient-to-r from-[#5c0b0b] to-[#8b1111] border-2 border-yellow-500/30 rounded-3xl p-6 relative cursor-pointer active:scale-[0.98] transition-all overflow-hidden"
          >
             <div className="absolute top-[-10px] right-[-10px] text-5xl opacity-5 rotate-12">🎖️</div>
             <div className="flex items-center justify-between mb-2 relative z-10">
                <h4 className="font-bold text-yellow-400 flex items-center gap-2">
                   <span>🎞️</span> 查分高光录屏
                </h4>
                <span className="text-[9px] bg-red-600 px-2 py-0.5 rounded text-white animate-pulse font-bold border border-yellow-500/30">最高全额免单</span>
             </div>
             <p className="text-xs text-white/60 mb-2 relative z-10">录屏素材被选中，可获【全额免单】或【万元奖学金】分红权！</p>
             <div className="text-[10px] text-yellow-200/80 font-bold flex items-center gap-1 underline underline-offset-4">点击添加助教私下传输 &gt;</div>
          </div>
        </div>

        <button type="submit" className="w-full py-5 bg-gradient-to-b from-yellow-400 to-yellow-600 text-red-900 rounded-full font-bold text-xl shadow-[0_12px_24px_rgba(255,215,0,0.3)] active:translate-y-1 transition-all">
          立即报喜 领取资料
        </button>
      </form>

      {showAssistant && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowAssistant(false)}></div>
          <div className="relative bg-[#7a1212] border-4 border-yellow-500 p-8 rounded-3xl text-center space-y-4 w-full max-w-sm overflow-y-auto max-h-[90vh]">
            <div className="text-5xl animate-bounce">🎁</div>
            <h3 className="text-2xl font-calligraphy text-yellow-400">联系助教老师</h3>
            <div className="bg-black/30 p-4 rounded-2xl border border-yellow-500/20 text-sm space-y-2 text-white/90">
                {/* Fix: Used config.assistantWx */}
                <p>微信：<span className="text-yellow-400 font-bold text-lg select-all">{config.assistantWx}</span></p>
                <div className="mt-4 flex flex-col items-center gap-2">
                   <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center border-2 border-yellow-500/50">
                      {/* Fix: Used config.qrCodePlaceholder */}
                      <span className="text-gray-400 text-[10px] font-bold text-center px-2">{config.qrCodePlaceholder}</span>
                   </div>
                   <p className="text-[10px] text-white/40">长按识别二维码或手动搜索添加</p>
                </div>
            </div>
            <p className="text-[10px] text-yellow-200/70 leading-relaxed">
              发送您的【查分录屏】及【报喜姓名】，<br/>
              助教将为您核验并发放特等奖资格。
            </p>
            <button onClick={() => {
              // Fix: Used config.assistantWx
              navigator.clipboard.writeText(config.assistantWx);
              alert('微信号已复制！');
            }} className="w-full py-3 bg-yellow-500 text-red-900 rounded-xl font-bold">复制微信号并去添加</button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-150%); } }
        .animate-marquee { display: inline-block; animation: marquee 15s linear infinite; }
      `}</style>
    </div>
  );
};

export default ReportPage;
