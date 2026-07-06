from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Career Platform API", version="0.1.0")


class HealthResponse(BaseModel):
    status: str
    service: str


@app.get("/health", response_model=HealthResponse)
def health() -> HealthResponse:
    return HealthResponse(status="ok", service="api")


@app.get("/api/v1/platform/summary")
def platform_summary():
    return {
        "modules": [
            "career_portfolio",
            "job_intelligence",
            "career_coach",
            "recruiter_portal",
            "employer_portal",
            "admin_portal",
        ],
        "status": "bootstrap",
    }
