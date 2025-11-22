import React from 'react';
import { LayoutDashboard, FileText, BookOpen, User, LogOut } from 'lucide-react';

export default function StudentDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div>
            <h3 className="text-sm font-bold text-gray-800">Jorge Membrillo</h3>
            <p className="text-xs text-gray-500">ID: 22229151</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
          <NavItem icon={<FileText size={20} />} label="Certificados" />
          <NavItem icon={<BookOpen size={20} />} label="Cursos" />
          <NavItem icon={<User size={20} />} label="Perfil" />
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-2 text-gray-500 text-sm hover:text-red-600">
            <LogOut size={18} /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Certificados Table */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Mis Certificados</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3">Nombre del Certificado</th>
                    <th className="px-4 py-3">Estado</th>
                    <th className="px-4 py-3">Fecha</th>
                    <th className="px-4 py-3">Revisión</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow name="CISCO y Redes" status="Emitido" date="2025-08-15" />
                  <TableRow name="Blockchain Avanzado" status="Pendiente" date="2025-09-20" />
                  <TableRow name="PowerBI" status="Emitido" date="2025-10-25" />
                </tbody>
              </table>
            </div>
          </div>

          {/* Microcredentials Progress */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Progreso de Microcredenciales</h2>
            <div className="space-y-6">
              <ProgressBar label="Python Avanzado" percent={75} />
              <ProgressBar label="Lenguaje Ensamblador" percent={50} />
              <ProgressBar label="AWS" percent={25} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper Components
function NavItem({ icon, label, active }) {
  return (
    <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-red-50 text-red-600' : 'text-gray-600 hover:bg-gray-50'}`}>
      {icon}
      {label}
    </a>
  );
}

function TableRow({ name, status, date }) {
  const statusStyle = status === 'Emitido' 
    ? 'bg-green-100 text-green-700' 
    : 'bg-yellow-100 text-yellow-700';
  
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="px-4 py-4 font-medium text-gray-900">{name}</td>
      <td className="px-4 py-4">
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyle}`}>{status}</span>
      </td>
      <td className="px-4 py-4 text-gray-500">{date}</td>
      <td className="px-4 py-4 text-red-600 cursor-pointer hover:underline">Ver</td>
    </tr>
  );
}

function ProgressBar({ label, percent }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-xs text-red-500">{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-red-600 h-2 rounded-full" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}
