import React from 'react';
import { PlusCircle, Users, BarChart3, Settings, Home } from 'lucide-react';

export default function AdminIssue() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col py-6">
        <div className="px-6 mb-8 flex items-center gap-2">
           <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs">B</div>
           <div>
               <h2 className="font-bold text-gray-800 text-sm">UTP Admin</h2>
               <p className="text-xs text-gray-400">Universidad Tecnológica</p>
           </div>
        </div>

        <nav className="px-4 space-y-1 flex-1">
            <AdminNavLink icon={<Home size={18}/>} label="Dashboard" />
            <AdminNavLink icon={<PlusCircle size={18}/>} label="Credenciales Emitidas" active />
            <AdminNavLink icon={<Users size={18}/>} label="Gestionar Estudiantes" />
            <AdminNavLink icon={<BarChart3 size={18}/>} label="Verificación de Estadísticas" />
        </nav>

        <div className="px-4 mt-auto">
            <AdminNavLink icon={<Settings size={18}/>} label="Configuración" />
        </div>
      </aside>

      {/* Main Form */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Emisión de Nueva Microcredencial</h1>
            <div className="text-xs text-gray-400 flex items-center gap-1">
                <Shield size={12} /> Secured by Blockchain
            </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-3xl">
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID Estudiante</label>
                    <input type="text" placeholder="Enter Student ID" className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Credencial</label>
                    <select className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500">
                        <option>Selecciona el tipo de Credencial</option>
                        <option>Certificado</option>
                        <option>Micro-título</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Titulo de Credencial</label>
                    <input type="text" placeholder="ej., Desarrollo avanzado de blockchain" className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Descripción de Credencial</label>
                    <textarea rows="4" placeholder="Describe las credenciales y habilidades adquiridas..." className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"></textarea>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Emisión</label>
                        <input type="date" className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Expiración (Opcional)</label>
                        <input type="date" className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500"/>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button type="button" className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors">
                        Emitir Credencial
                    </button>
                </div>
            </form>
        </div>
      </main>
    </div>
  );
}

function AdminNavLink({ icon, label, active }) {
    return (
        <a href="#" className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors mb-1 ${active ? 'bg-red-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
            {icon}
            {label}
        </a>
    )
}

function Shield({size}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> }