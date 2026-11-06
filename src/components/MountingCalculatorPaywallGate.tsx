import React from 'react';
import { 
  Lock, 
  ShieldCheck, 
  ShieldAlert, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  LayoutGrid, 
  Layers, 
  ArrowRight, 
  FileText, 
  Sun, 
  Zap, 
  Check, 
  AlertCircle,
  KeyRound,
  Calculator,
  Phone,
  Send,
  ExternalLink
} from 'lucide-react';
import { AdminContactConfig, LicenseToken, SupportedLanguage } from '../types';

interface MountingCalculatorPaywallGateProps {
  activeTab: 'mounting_calc' | 'dc_breaker_calc';
  lang: SupportedLanguage;
  theme: 'dark' | 'light';
  adminContact?: AdminContactConfig;
  activeLicense?: LicenseToken | null;
  onOpenActivation: () => void;
  onSwitchToStringSizer: () => void;
}

export const MountingCalculatorPaywallGate: React.FC<MountingCalculatorPaywallGateProps> = ({
  activeTab,
  lang,
  theme,
  adminContact,
  activeLicense,
  onOpenActivation,
  onSwitchToStringSizer,
}) => {
  const isRoofMount = activeTab === 'mounting_calc';
  const isDCBreaker = activeTab === 'dc_breaker_calc';

  const contact = adminContact || {
    viberPhone: '09 798 123 456',
    viberUrl: 'viber://chat?number=09798123456',
    telegramUsername: 'solartechadmin',
    telegramUrl: 'https://t.me/solartechadmin'
  };

  const viberCleanNumber = (contact.viberPhone || '').replace(/\D/g, '');
  const viberLink = contact.viberUrl || (viberCleanNumber ? `viber://chat?number=${viberCleanNumber}` : '#');
  const tgUser = (contact.telegramUsername || '').replace(/^@/, '');
  const telegramLink = contact.telegramUrl || (tgUser ? `https://t.me/${tgUser}` : '#');

  const t = {
    badge: lang === 'my' ? 'PRO PACKAGE သီးသန့်' : lang === 'zh' ? 'PRO 会员专享' : 'PRO PACKAGE REQUIRED',
    
    title: isDCBreaker
      ? (lang === 'my'
          ? 'Solar DC Breaker & Protection Calculator (Fuse, MCB, Isolator, SPD)'
          : lang === 'zh'
          ? 'Solar DC Breaker & Protection Calculator (Fuse, MCB, Isolator, SPD)'
          : 'Solar DC Breaker & Protection Calculator (Fuse, MCB, Isolator, SPD)')
      : (lang === 'my' 
          ? 'Solar Mounting Calculator (ခေါင်မိုး/အမိုး တပ်ဆင်ရေး)' 
          : lang === 'zh' 
          ? 'Solar Mounting Calculator (屋顶支架与材料清单)' 
          : 'Solar Mounting Calculator (Roof Mount & BOQ)'),

    tagline: isDCBreaker
      ? (lang === 'my'
          ? 'Solar DC Breaker & Protection Calculator စနစ်ကို Viber သို့မဟုတ် Telegram တွင် PRO License ရယူထားသော အင်ဂျင်နီယာများသာ အပြည့်အဝ အသုံးပြုနိုင်ပါသည်'
          : lang === 'zh'
          ? '直流断路器、熔断器与防雷保护工程系统仅对PRO套餐会员开放使用'
          : 'Just like Solar String Sizer Pro, full access to our DC Breaker, Fuse, Isolator & SPD Calculator is exclusive to PRO package members.')
      : (lang === 'my'
          ? 'Solar Mounting Calculator (ခေါင်မိုး/အမိုး) စနစ်ကို Viber သို့မဟုတ် Telegram တွင် PRO License ရယူထားသော အဖွဲ့ဝင်များသာ အပြည့်အဝ အသုံးပြုနိုင်ပါသည်'
          : lang === 'zh'
          ? '屋顶支架工程系统仅对PRO套餐会员开放使用'
          : 'Full access to our Roof Mount Engineering Calculator is exclusive to PRO package members.'),

    ctaKey: lang === 'my' ? 'လိုင်စင်ကုဒ် ထည့်သွင်းမည် (Enter License)' : 'Enter License Key',
    ctaStringSizer: lang === 'my' ? 'Solar String Sizer သို့ ပြန်သွားမည်' : 'Back to Solar String Sizer',
  };

  const roofFeatures = [
    {
      icon: LayoutGrid,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      titleMy: 'ခေါင်မိုးပုံစံအလိုက် အတိအကျ တွက်ချက်မှု',
      titleEn: 'Roof Type Specific Engineering',
      descMy: 'Metal Sheet Tin Roof, Tile Roof (ကြွေပြား/အုတ်ကြွပ်) နှင့် Flat Concrete Slab အလိုက် L-Feet, Hanger Bolts အတိအကျတွက်ချက်ပေးခြင်း',
      descEn: 'Accurate L-Feet, Hanger Bolt & Bracket sizing for Tin, Tile & Flat Concrete roofs'
    },
    {
      icon: Layers,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
      titleMy: 'အလူမီနီယမ် ရထားလမ်းနှင့် ကုပ်များ',
      titleEn: 'Aluminium Rails & Clamps',
      descMy: 'Aluminium Rail 4.2m အလျား၊ Mid Clamps, End Clamps, Rail Splice Kit နှင့် Grounding Lugs အရေအတွက် အလိုအလျောက်တွက်ချက်ပေးခြင်း',
      descEn: 'Automatic count for 4.2m Rails, Mid/End Clamps, Splice Kits & Earth Grounding Lugs'
    },
    {
      icon: Calculator,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      titleMy: 'BOQ Quotation ကုန်ကျစရိတ် စာရင်း',
      titleEn: 'Automatic BOQ Cost Quotation',
      descMy: 'မြန်မာကျပ်ငွေ (MMK) ဖြင့် ပစ္စည်းတစ်ခုချင်းစီ၏ ဈေးနှုန်း၊ စုစုပေါင်းကုန်ကျစရိတ်နှင့် Profit Margin အပြည့်အစုံ ချက်ချင်းရရှိခြင်း',
      descEn: 'Instant Bill of Quantities (BOQ) with real Myanmar MMK market pricing & margin control'
    },
    {
      icon: FileText,
      color: 'text-cyan-500',
      bg: 'bg-cyan-500/10',
      titleMy: 'PDF Quotation & Excel Export',
      titleEn: 'Official PDF & Excel Quotations',
      descMy: 'Customer များသို့ တင်ပြနိုင်သော တရားဝင် Quotation PDF Format နှင့် Excel စာရင်းများကို တစ်ချက်နှိပ်ရုံဖြင့် ဒေါင်းလုဒ်ဆွဲနိုင်ခြင်း',
      descEn: 'Download official customer-ready PDF quotation formats and Excel spreadsheets'
    }
  ];

  const dcFeatures = [
    {
      icon: Zap,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
      titleMy: 'DC Fuse တွက်ချက်မှု (gPV 1000V)',
      titleEn: 'DC String Fuse Sizing',
      descMy: 'ဆိုလာပြား Isc × 1.25 × 1.25 Safety Factor ဖြင့် ပြိုင်ဆက်စတြင်းများအတွက် gPV Fuse Rating အတိအကျတွက်ပေးခြင်း',
      descEn: 'Accurate gPV 1000V DC fuse sizing using NEC 690.8 safety factor multipliers'
    },
    {
      icon: ShieldAlert,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      titleMy: 'DC Breaker (MCB / MCCB)',
      titleEn: 'DC Breaker (MCB) Sizing',
      descMy: 'Total Isc × 1.56 အလိုက် Overcurrent & Short-circuit Trip Rating, Poles (2P/4P) နှင့် Breaking Capacity တွက်ချက်ခြင်း',
      descEn: 'Calculates DC MCB trip amperes, poles (2P/4P) and DC voltage ratings'
    },
    {
      icon: CheckCircle2,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      titleMy: 'DC Isolator Rotary Disconnector',
      titleEn: 'DC Isolator Switch Sizing',
      descMy: 'IEC 60947-3 DC-PV2 စံချိန်စံညွှန်းအရ ဝန်ရှိနေစဉ် ဓာတ်အားဖြတ်တောက်နိုင်သော IP66 Outdoor Rotary Isolator ရွေးချယ်ပေးခြင်း',
      descEn: 'IEC 60947-3 DC-PV2 rated load-break rotary switch and IP66 enclosure specs'
    },
    {
      icon: Sparkles,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
      titleMy: 'DC SPD မိုးကြိုးဗို့အားထိန်း',
      titleEn: 'DC Surge Protective Device (SPD)',
      descMy: 'ဆောင်းရာသီ အမြင့်ဆုံး Voc × 1.2 အလိုက် 600V, 1000V, 1500V Type 2 (In:20kA / Imax:40kA) DC SPD သတ်မှတ်ချက်',
      descEn: 'Continuous operating voltage Ucpv (600V/1000V/1500V) and 40kA discharge ratings'
    }
  ];

  const features = isDCBreaker ? dcFeatures : roofFeatures;

  return (
    <div className="w-full py-4 sm:py-8 space-y-6">
      <div className={`relative overflow-hidden rounded-3xl border ${
        theme === 'dark' 
          ? 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-2xl' 
          : 'bg-white border-slate-200 text-slate-900 shadow-xl'
      }`}>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative p-6 sm:p-10 lg:p-12 space-y-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono font-black uppercase tracking-wider shadow-sm">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              {t.title}
            </h2>

            <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
              {t.tagline}
            </p>
          </div>

          {/* Direct Viber & Telegram Contact Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <a
              href={viberLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-gradient-to-r from-[#7360f2] to-[#5b48db] text-white flex items-center justify-between shadow-xl shadow-purple-600/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-purple-200 block">Viber တွင် ဆက်သွယ်ဝယ်ယူရန်</span>
                  <span className="font-mono font-bold text-sm sm:text-base">{contact.viberPhone}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-purple-200" />
            </a>

            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-gradient-to-r from-[#229ed9] to-[#1880b4] text-white flex items-center justify-between shadow-xl shadow-cyan-600/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-cyan-200 block">Telegram တွင် ဆက်သွယ်ဝယ်ယူရန်</span>
                  <span className="font-mono font-bold text-sm sm:text-base">@{tgUser}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-cyan-200" />
            </a>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    theme === 'dark' 
                      ? 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700' 
                      : 'bg-slate-50/80 border-slate-200/80 hover:border-slate-300'
                  } space-y-3 flex flex-col justify-between`}
                >
                  <div className="space-y-2.5">
                    <div className={`w-10 h-10 rounded-xl ${feat.bg} ${feat.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {lang === 'my' ? feat.titleMy : feat.titleEn}
                    </h4>
                    <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
                      {lang === 'my' ? feat.descMy : feat.descEn}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-1 text-[11px] font-bold text-emerald-500">
                    <Check className="w-3.5 h-3.5" />
                    <span>PRO Included</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={onOpenActivation}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
            >
              <KeyRound className="w-4 h-4 stroke-[2.5]" />
              <span>{t.ctaKey}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onSwitchToStringSizer}
              className={`w-full sm:w-auto px-5 py-3.5 rounded-2xl border ${
                theme === 'dark' 
                  ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200' 
                  : 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800'
              } font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2`}
            >
              <Layers className="w-4 h-4 text-amber-500" />
              <span>{t.ctaStringSizer}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
