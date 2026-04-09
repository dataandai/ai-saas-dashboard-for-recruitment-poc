"use client";

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Zap, 
  Calendar, 
  BarChart3, 
  Search, 
  Filter, 
  MoreVertical,
  CheckCircle2,
  Clock,
  BrainCircuit
} from 'lucide-react';

export default function Dashboard() {
  const [candidates, setCandidates] = useState([]);
  const [stats, setStats] = useState({ total_applicants: 0, ai_screened: 0, interviews_scheduled: 0, time_saved_hours: 0 });

  useEffect(() => {
    // In a real app, these would fetch from the FastAPI backend
    const mockCandidates = [
        { id: '1', name: 'Sarah Chen', role: 'Senior Frontend Engineer', match_score: 98, status: 'In Review', skills: ['React', 'TS'], ai_summary: 'Perfect architectural fit.' },
        { id: '2', name: 'Marcus Rodriguez', role: 'Backend Lead', match_score: 92, status: 'Interviewing', skills: ['Go', 'K8s'], ai_summary: 'Distributed systems expert.' },
        { id: '3', name: 'Aisha Patel', role: 'Product Designer', match_score: 89, status: 'Shortlisted', skills: ['Figma', 'UX'], ai_summary: 'Strong visual portfolio.' },
    ];
    setCandidates(mockCandidates);
    setStats({ total_applicants: 1240, ai_screened: 1198, interviews_scheduled: 45, time_saved_hours: 320 });
  }, []);

  return (
    <div className="flex min-h-screen bg-neutral-950 text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-neutral-800 p-6 flex flex-col gap-8 hidden md:flex">
        <div className="flex items-center gap-2 px-2">
          <div className="h-8 w-8 rounded-lg accent-gradient flex items-center justify-center">
            <Zap size={18} fill="white" />
          </div>
          <span className="font-bold text-xl tracking-tight">RecruitAI</span>
        </div>

        <nav className="flex flex-col gap-2">
          {['Dashboard', 'Candidates', 'Jobs', 'Schedule', 'Analytics'].map((item, i) => (
            <button 
              key={item}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                i === 0 ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              {i === 0 && <BarChart3 size={18} />}
              {i === 1 && <Users size={18} />}
              {i === 2 && <BrainCircuit size={18} />}
              {i === 3 && <Calendar size={18} />}
              {i === 4 && <Zap size={18} />}
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold">Recruitment Overview</h1>
            <p className="text-neutral-400 mt-1">AI-powered insights for your hiring pipeline.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-neutral-800 px-4 py-2 rounded-lg border border-neutral-700 hover:bg-neutral-700 transition-all">
              Settings
            </button>
            <button className="accent-gradient px-4 py-2 rounded-lg font-medium shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-all">
              Create New Job
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[ 
            { label: 'Total Applicants', value: stats.total_applicants, icon: Users, color: 'text-blue-400' },
            { label: 'AI Screened', value: stats.ai_screened, icon: BrainCircuit, color: 'text-purple-400' },
            { label: 'Interviews', value: stats.interviews_scheduled, icon: Calendar, color: 'text-pink-400' },
            { label: 'Hours Saved', value: stats.time_saved_hours, icon: Zap, color: 'text-yellow-400' }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-neutral-400 text-sm">{stat.label}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value.toLocaleString()}</h3>
                </div>
                <stat.icon size={20} className={stat.color} />
              </div>
            </div>
          ))}
        </div>

        {/* Candidates Table Area */}
        <div className="glass-card overflow-hidden">
          <div className="p-6 border-b border-neutral-800 flex justify-between items-center bg-neutral-900/30">
            <h2 className="text-lg font-semibold">Top AI Matches</h2>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                <input 
                  type="text" 
                  placeholder="Search candidates..." 
                  className="bg-neutral-950 border border-neutral-800 rounded-md py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <button className="flex items-center gap-2 text-sm bg-neutral-800 px-3 py-1.5 rounded-md border border-neutral-700">
                <Filter size={14} /> Filter
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-neutral-900/50 text-neutral-400 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Candidate</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Match Score</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">AI Summary</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {candidates.map((c) => (
                  <tr key={c.id} className="hover:bg-neutral-900/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-indigo-400 group-hover:border group-hover:border-indigo-500/50 transition-all">
                          {c.name[0]}
                        </div>
                        <div>
                          <p className="font-medium">{c.name}</p>
                          <div className="flex gap-1 mt-1">
                             {c.skills.map(s => <span key={s} className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400">{s}</span>)}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-neutral-300 text-sm">{c.role}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-neutral-800 h-1.5 w-24 rounded-full overflow-hidden">
                          <div 
                            className="h-full accent-gradient transition-all duration-1000 ease-out"
                            style={{ width: `${c.match_score}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-indigo-400">{c.match_score}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        c.status === 'Interviewing' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                      }`}>
                        {c.status === 'In Review' ? <Clock size={12} /> : <CheckCircle2 size={12} />}
                        {c.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-neutral-400 italic max-w-xs truncate">"{c.ai_summary}"</td>
                    <td className="px-6 py-4">
                      <button className="text-neutral-500 hover:text-white">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}