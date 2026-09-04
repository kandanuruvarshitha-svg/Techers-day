import React, { useState, useRef } from 'react';
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';
import { Download, Printer, ArrowLeft, Heart, QrCode, Sparkles, Edit3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contentData } from '../data/content';

export const CardPage: React.FC = () => {
  const [deployedUrl, setDeployedUrl] = useState(contentData.deployedUrl);
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const qrCanvasRef = useRef<HTMLDivElement>(null);

  const handleDownloadQR = () => {
    const canvas = qrCanvasRef.current?.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Teacher-Day-Dad-QR.png';
      a.click();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const { greetingCard } = contentData;

  return (
    <div className="min-h-screen bg-cream-100 text-navy-900 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Top Header */}
      <div className="max-w-4xl mx-auto flex items-center justify-between mb-8 no-print">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-200 hover:bg-cream-300 text-navy-900 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Surprise Site</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadQR}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900 text-cream-100 hover:bg-navy-800 text-xs sm:text-sm font-medium shadow-md transition-colors"
          >
            <Download className="w-4 h-4 text-gold-400" />
            <span>Download QR PNG</span>
          </button>
          
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500 text-navy-950 font-bold hover:bg-gold-600 text-xs sm:text-sm shadow-md transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print A4 Card</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Page Title & Configurator */}
        <div className="text-center space-y-4 no-print">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 text-xs font-mono uppercase">
            <QrCode className="w-3.5 h-3.5" />
            <span>Physical Gift Companion</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-navy-900">
            Physical Greeting Card & QR Code
          </h1>

          <p className="text-navy-900/70 text-sm sm:text-base max-w-xl mx-auto font-light">
            Print this greeting card to fold and hand to your father. When he scans the QR code with his phone camera, it immediately opens the surprise website!
          </p>

          {/* Dynamic URL Configuration Bar */}
          <div className="max-w-md mx-auto glass-card rounded-2xl p-4 shadow-sm border border-gold-500/30 text-left space-y-2">
            <div className="flex items-center justify-between text-xs text-navy-900/60 font-mono">
              <span>Target Website URL for QR:</span>
              <button
                onClick={() => setIsEditingUrl(!isEditingUrl)}
                className="text-gold-600 hover:underline flex items-center gap-1 font-semibold"
              >
                <Edit3 className="w-3 h-3" />
                {isEditingUrl ? "Save" : "Change URL"}
              </button>
            </div>

            {isEditingUrl ? (
              <input
                type="text"
                value={deployedUrl}
                onChange={(e) => setDeployedUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-cream-100 border border-gold-500 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-gold-500"
                placeholder="https://your-deployed-site.vercel.app"
              />
            ) : (
              <p className="text-xs font-mono font-bold text-gold-700 truncate bg-cream-200/60 px-3 py-2 rounded-xl border border-gold-500/20">
                {deployedUrl}
              </p>
            )}
          </div>
        </div>

        {/* Printable Card Container */}
        <div
          id="printable-card"
          className="bg-white rounded-3xl border-4 border-gold-500 p-8 sm:p-12 shadow-2xl space-y-12 max-w-3xl mx-auto"
        >
          {/* Front of Card */}
          <div className="text-center space-y-4 py-8 border-b-2 border-dashed border-gold-500/30">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-600 text-xs font-mono tracking-widest font-bold">
              FRONT OF GREETING CARD
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif font-bold text-navy-900 tracking-tight">
              {greetingCard.frontTitle}
            </h2>
            <h3 className="text-3xl sm:text-5xl font-serif font-bold text-gold-600 flex items-center justify-center gap-2">
              {greetingCard.frontSubtitle} <Heart className="w-8 h-8 text-red-500 fill-red-500 inline" />
            </h3>
          </div>

          {/* Inside of Card */}
          <div className="text-center space-y-8 py-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-navy-900 text-cream-100 text-xs font-mono tracking-widest font-bold">
              INSIDE OF GREETING CARD
            </div>

            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
              "{greetingCard.insideHeading}"
            </h4>

            <p className="text-xl sm:text-2xl font-serif italic text-navy-900/80 max-w-lg mx-auto leading-relaxed">
              "{greetingCard.insideMessage}"
            </p>

            {/* Big QR Code Display Box */}
            <div className="py-6 space-y-4 flex flex-col items-center justify-center">
              <div className="text-xs font-mono uppercase tracking-widest font-bold text-gold-700 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold-600" />
                <span>SCAN ME, DAD ❤️</span>
              </div>

              {/* Rendered SVG for sharp display & hidden Canvas for PNG download */}
              <div className="p-4 bg-cream-50 rounded-2xl border-2 border-gold-500/40 shadow-inner inline-block">
                <QRCodeSVG
                  value={deployedUrl}
                  size={180}
                  level="H"
                  includeMargin={true}
                />
              </div>

              <div ref={qrCanvasRef} className="hidden">
                <QRCodeCanvas
                  value={deployedUrl}
                  size={400}
                  level="H"
                  includeMargin={true}
                />
              </div>

              <p className="text-xs font-sans text-navy-900/60 max-w-xs">
                {greetingCard.scanInstruction}
              </p>
            </div>

            <div className="pt-6 border-t border-navy-900/10">
              <p className="font-signature text-3xl sm:text-4xl text-navy-900">
                {greetingCard.fromText}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
