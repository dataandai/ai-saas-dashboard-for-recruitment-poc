from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="TalentAI API")

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
    score: float
    status: str
    experience: str
    skills: List[str]

@app.get("/api/stats")
def get_stats():
    return {
        "total_candidates": 1284,
        "active_jobs": 14,
        "ai_interviews_done": 452,
        "avg_match_rate": "84%"
    }

@app.get("/api/candidates", response_model=List[Candidate])
def get_candidates():
    return [
        {"id": "1", "name": "Alex Rivera", "role": "Senior Frontend Engineer", "score": 98.2, "status": "Shortlisted", "experience": "8 years", "skills": ["React", "TypeScript", "Tailwind"]},
        {"id": "2", "name": "Sarah Chen", "role": "Machine Learning Engineer", "score": 94.5, "status": "Interviewing", "experience": "5 years", "skills": ["Python", "PyTorch", "NLP"]},
        {"id": "3", "name": "Marcus Thorne", "role": "Product Designer", "score": 82.1, "status": "Applied", "experience": "4 years", "skills": ["Figma", "UX Research", "Prototyping"]},
        {"id": "4", "name": "Elena Rodriguez", "role": "DevOps Architect", "score": 89.7, "status": "Offer Sent", "experience": "10 years", "skills": ["Kubernetes", "AWS", "Terraform"]}
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)