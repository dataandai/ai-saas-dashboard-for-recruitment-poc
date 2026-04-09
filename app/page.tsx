import React from 'react';
import { 
  Users, 
  Briefcase, 
  Zap, 
  TrendingUp, 
  Search, 
  Bell, 
  Filter, 
  ChevronRight, 
  Star
} from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend }: any) => (
  <div className="glass-card p-6 rounded-2xl">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-indigo-500/10 rounded-lg">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <span className="text-xs font-medium text-emerald-400 flex items-center">
        <TrendingUp className="w-3 h-3 mr-1" /> {trend}
      </span>
    </div>
    <p className="text-slate-400 text-sm font-medium">{title}</p>
    <h3 className="text-2xl font-bold mt-1">{value}</h3>
  </div>
);

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-slate-950/50 p-6 hidden md:block">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 fill-white text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">TalentAI</span>
        </div>
        
        <nav className="space-y-1">
          {['Dashboard', 'Candidates', 'Jobs', 'AI Insights', 'Settings'].map((item) => (
            <a key={item} href="#" className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${item === 'Dashboard' ? 'bg-indigo-600/10 text-indigo-400' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-bold">Recruitment Overview</h1>
            <p className="text-slate-400 text-sm">Welcome back, HR Intelligence system is active.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search candidates..." 
                className="bg-slate-900 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 w-64"
              />
            </div>
            <button className="p-2 glass-card rounded-full relative">
              <Bell className="w-5 h-5 text-slate-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-slate-950"></span>
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Candidates" value="1,284" icon={Users} trend="+12%" />
          <StatCard title="Active Jobs" value="14" icon={Briefcase} trend="+2" />
          <StatCard title="AI Interviews" value="452" icon={Zap} trend="+24%" />
          <StatCard title="Avg Match Score" value="84%" icon={Star} trend="+5.2%" />
        </div>

        {/* Main List Section */}
        <section className="glass-card rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h2 className="font-semibold">Top AI-Matched Candidates</h2>
            <button className="text-sm text-indigo-400 flex items-center hover:text-indigo-300 transition-colors font-medium">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs text-slate-500 uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">Candidate</th>
                  <th className="px-6 py-4 font-semibold">Match Score</th>
                  <th className="px-6 py-4 font-semibold">Experience</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[ 
                  { name: "Alex Rivera", role: "Senior Frontend Engineer", score: 98.2, exp: "8y", status: "Shortlisted" },
                  { name: "Sarah Chen", role: "ML Engineer", score: 94.5, exp: "5y", status: "Interviewing" },
                  { name: "Marcus Thorne", role: "Product Designer", score: 82.1, exp: "4y", status: "Applied" }
                ].map((c, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-xs">
                          {c.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{c.name}</p>
                          <p className="text-xs text-slate-500">{c.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-12 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-indigo-500 h-full" style={{ width: `${c.score}%` }}></div>
                        </div>
                        <span className="text-sm font-bold text-indigo-400">{c.score}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">{c.exp}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                        c.status === 'Shortlisted' ? 'bg-emerald-500/10 text-emerald-400' : 
                        c.status === 'Interviewing' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-slate-500/10 text-slate-400'
                      }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-xs bg-white text-slate-950 px-3 py-1.5 rounded-lg font-bold hover:bg-slate-200 transition-colors opacity-0 group-hover:opacity-100">
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}