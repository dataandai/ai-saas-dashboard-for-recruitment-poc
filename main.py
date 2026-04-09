from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import random

app = FastAPI(title="RecruitAI Backend API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Candidate(BaseModel):
    id: str
    name: str
    role: str
    match_score: int
    experience: int
    status: str
    skills: List[str]
    ai_summary: str

# Mock Data
candidates = [
    {
        "id": "1",
        "name": "Sarah Chen",
        "role": "Senior Frontend Engineer",
        "match_score": 98,
        "experience": 7,
        "status": "In Review",
        "skills": ["React", "TypeScript", "Next.js"],
        "ai_summary": "Strong architectural knowledge. Perfect fit for the Design System team."
    },
    {
        "id": "2",
        "name": "Marcus Rodriguez",
        "role": "Backend Lead",
        "match_score": 92,
        "experience": 10,
        "status": "Interviewing",
        "skills": ["Python", "Go", "PostgreSQL"],
        "ai_summary": "Deep expertise in distributed systems and performance optimization."
    },
    {
        "id": "3",
        "name": "Aisha Patel",
        "role": "Product Designer",
        "match_score": 89,
        "experience": 5,
        "status": "Shortlisted",
        "skills": ["Figma", "UX Research", "Prototyping"],
        "ai_summary": "Excellent visual storytelling. Strong portfolio in fintech space."
    }
]

@app.get("/api/candidates", response_model=List[Candidate])
def get_candidates():
    return candidates

@app.get("/api/stats")
def get_stats():
    return {
        "total_applicants": 1240,
        "ai_screened": 1198,
        "interviews_scheduled": 45,
        "time_saved_hours": 320
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)