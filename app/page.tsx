import React from 'react';
import { 
  Users, 
  Zap, 
  Search, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  LayoutDashboard, 
  UserPlus,
  MoreHorizontal,
  BrainCircuit
} from 'lucide-react';

export default function Dashboard() {
  const candidates = [
    { id: 1, name: 'Sarah Chen', role: 'Senior Frontend Engineer', score: 98, status: 'Interviewing', date: '2h ago' },
    { id: 2, name: 'Marcus Rodriguez', role: 'Product Designer', score: 92, status: 'Screening', date: '5h ago' },
    { id: 3, name: 'Elena Gilbert', role: 'Full Stack Developer', score: 87, status: 'Technical Test', date: '1d ago' },
    { id: 4, name: 'David Kim', role: 'DevOps Lead', score: 84, status: 'Applied', date: '2d ago' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6 flex flex-col gap-8 hidden lg:flex">
        <div className="flex items-center gap-2 px-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <BrainCircuit size={20} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">RecruitAI</span>
        </div>

        <nav className="flex flex-col gap-2">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">Menu</div>
          <button className="flex items-center gap-3 px-3 py-2 bg-indigo-600/10 text-indigo-400 rounded-lg">
            <LayoutDashboard size={18} /> Dashboard
          </button>
          <button className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:bg-white/5 rounded-lg transition-all">
            <Users size={18} /> Candidates
          </button>
          <button className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:bg-white/5 rounded-lg transition-all">
            <UserPlus size={18} /> Jobs
          </button>
          <button className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:bg-white/5 rounded-lg transition-all">
            <TrendingUp size={18} /> Analytics
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-1">Pipeline Overview</h1>
            <p className="text-slate-400 text-sm">AI is prioritizing 12 high-intent candidates today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input 
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 ring-indigo-500/50 w-64"
                placeholder="Search talent..."
              />
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
              Create Job
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Candidates" value="1,284" trend="+12%" icon={<Users className="text-indigo-400" size={20} />} />
          <StatCard title="AI Match Rate" value="84%" trend="+5%" icon={<Zap className="text-amber-400" size={20} />} />
          <StatCard title="Avg. Time to Hire" value="18 days" trend="-2d" icon={<Clock className="text-emerald-400" size={20} />} />
          <StatCard title="Offer Accepted" value="92%" trend="+3%" icon={<CheckCircle2 className="text-blue-400" size={20} />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Table */}
          <div className="lg:col-span-2 glass-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Recommended Candidates</h2>
              <button className="text-sm text-indigo-400 hover:text-indigo-300">View all</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-semibold text-slate-500 border-b border-white/5 uppercase tracking-wider">
                    <th className="pb-4">Candidate</th>
                    <th className="pb-4">Role</th>
                    <th className="pb-4">AI Score</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {candidates.map((c) => (
                    <tr key={c.id} className="hover:bg-white/5 transition-colors group">
                      <td className="py-4 font-medium">{c.name}</td>
                      <td className="py-4 text-slate-400">{c.role}</td>
                      <td className="py-4">
                        <span className={`text-xs font-bold px-2 py-1 rounded ${c.score > 90 ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-500/20 text-slate-400'}`}>
                          {c.score}%
                        </span>
                      </td>
                      <td className="py-4">
                        <span className="flex items-center gap-2 text-sm text-slate-300">
                           <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                           {c.status}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <button className="p-1 text-slate-500 hover:text-white">
                          <MoreHorizontal size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* AI Insights Card */}
          <div className="glass-card p-6 border-indigo-500/20">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-indigo-500/20 rounded-lg">
                <Zap size={20} className="text-indigo-400" />
              </div>
              <h2 className="text-lg font-semibold">AI Talent Insights</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 p-4 rounded-xl">
                <p className="text-xs font-bold text-indigo-400 uppercase mb-2">Hiring Recommendation</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  <strong>Sarah Chen</strong> has a 98% skill match for Senior Frontend. Her React performance benchmarks are in the top 1% of applicants.
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <p className="text-xs font-bold text-amber-400 uppercase mb-2">Market Alert</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Product Designer salaries have increased by 12% in your region. Consider adjusting the offer for Marcus Rodriguez.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, trend, icon }: { title: string, value: string, trend: string, icon: React.ReactNode }) {
  return (
    <div className="glass-card p-6 transition-all hover:translate-y-[-2px] cursor-default">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
        <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">{trend}</span>
      </div>
      <h3 className="text-slate-400 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );}