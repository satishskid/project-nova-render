
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for frontend development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory contacts data
contacts = [
    {"id": 1, "first_name": "John", "last_name": "Doe", "email": "john@example.com"},
    {"id": 2, "first_name": "Jane", "last_name": "Smith", "email": "jane@example.com"}
]

@app.get("/api/contacts")
def get_contacts():
    return contacts
