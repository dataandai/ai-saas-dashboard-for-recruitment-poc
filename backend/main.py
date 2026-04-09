from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="RecruitAI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Candidate(BaseModel):
    id: int
    name: str
    role: str
    score: int
    status: str
    date: str

class Insight(BaseModel):
    type: str
    message: str
    level: str

@app.get("/api/stats")
async def get_stats():
    return {
        "total_candidates": 1284,
        "match_rate": 84,
        "avg_hire_days": 18,
        "offer_acceptance": 92
    }

@app.get("/api/candidates", response_model=List[Candidate])
async def get_candidates():
    return [
        {"id": 1, "name": "Sarah Chen", "role": "Senior Frontend Engineer", "score": 98, "status": "Interviewing", "date": "2h ago"},
        {"id": 2, "name": "Marcus Rodriguez", "role": "Product Designer", "score": 92, "status": "Screening", "date": "5h ago"},
        {"id": 3, "name": "Elena Gilbert", "role": "Full Stack Developer", "score": 87, "status": "Technical Test", "date": "1d ago"}
    ]

@app.get("/api/insights", response_model=List[Insight])
async def get_insights():
    return [
        {"type": "recommendation", "message": "Sarah Chen matches 98% of your core requirements for React and System Architecture.", "level": "high"},
        {"type": "alert", "message": "3 candidates for DevOps Lead are currently in late-stage interviews with competitors.", "level": "urgent"}
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)