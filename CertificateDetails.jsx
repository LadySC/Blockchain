import React from 'react';
import { Download, ShieldCheck, Box } from 'lucide-react';

export default function CertificateDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
          <span className="text-red-600 font-black">U</span> UTP
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#">Dashboard</a>
          <a href="#" className="text-red-600">Mis Certificados</a>
          <a href="#">Perfil</a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Detalles de Certificación</h1>
          <p className="text-gray-500 text-sm">Vea y verifique su certificado protegido por blockchain</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Main Certificate Card */}
          <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 p-8 flex flex-col items-center text-center shadow-sm">
            <div className="mb-6">
              {/* Placeholder for the Blockchain Hexagon Logo */}
              <Box size={80} className="text-blue-900 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-blue-900 tracking-tight">Blockchain</h2>
            </div>
            
            <div className="w-full mt-auto">
              <div className="flex items-start justify-between border-t border-gray-100 pt-6 mt-6">
                <div className="text-left">
                  <div className="flex items-center gap-2 text-red-600 font-semibold mb-1">
                    <ShieldCheck size={18} />
                    <span>Blockchain Verified Certificate</span>
                  </div>
                  <p className="text-xs text-gray-500 max-w-md">
                    Este certificado es auténtico, inmutable y queda registrado permanentemente en Blockchain.
                  </p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                  <Download size={16} /> Descargar
                </button>
              </div>
            </div>
          </div>

          {/* QR Verification Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">Verificación del empleador</h3>
            <p className="text-xs text-gray-500 mb-6">
              Escanee el código QR para verificar la autenticidad de este certificado al instante.
            </p>
            <div className="bg-green-700/10 p-8 rounded-lg w-full flex items-center justify-center mb-4">
               {/* QR Placeholder */}
              <div className="w-32 h-24 bg-white flex items-center justify-center text-xs border border-gray-300 p-2">
                [QR Code]
              </div>
            </div>
            <div className="text-xs text-gray-400 flex items-center gap-1">
              <LockIcon size={12}/> Powered by SecureChain
            </div>
          </div>
        </div>

        {/* Details Footer */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4">Detalles de Verificación</h3>
            <div className="space-y-4 text-sm">
                <DetailRow label="ID del Certificado" value="#1234567890" />
                <DetailRow label="Blockchain Hash" value="0xabcdef1234567890abcdef1234567890abcde..." isMono />
                <DetailRow label="Emitido por" value="Universidad Tecnológica del Perú" />
                <DetailRow label="Emitido el" value="16 de Julio del 2024" />
            </div>
        </div>
      </main>
    </div>
  );
}

function DetailRow({ label, value, isMono }) {
    return (
        <div className="flex justify-between py-2 border-b border-gray-50 last:border-0">
            <span className="text-gray-500">{label}</span>
            <span className={`font-medium text-gray-900 ${isMono ? 'font-mono text-xs' : ''}`}>{value}</span>
        </div>
    )
}

function LockIcon({size}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> }