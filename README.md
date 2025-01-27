# SmartList - TO DO , NOTES APP 
ALX Software Engineering Graduation Project.

Logo :

![logo (1)](https://github.com/user-attachments/assets/b9aaa89a-bcba-4d48-9fce-c3ad854be48a)

Demo Photo :

![IMG-20250127-WA0011](https://github.com/user-attachments/assets/c4b43247-75cb-4039-b56e-36889f9360e8)


The project is about the implementation of a simple web application that allows users to manage their to-do list and notes. 
The frontend will provide a user interface for adding, editing, and deleting to-do items and notes, 
while the backend will handle the storage and retrieval of data.

The project will be implemented using the following technologies:

    React: A JavaScript library for building user interfaces.
    Django: A high-level Python web framework for building web applications.
    Django REST framework: A powerful and flexible toolkit for building Web APIs in Django.
    SQLite: A lightweight database engine used for storing data.

The project will be structured as follows:

    frontend/: Contains the React application for the frontend.
    backend/: Contains the Django application for the backend.
    README.md: Contains the project documentation.
    requirements.txt: Contains the Python dependencies for the project.
    package.json: Contains the JavaScript dependencies for the project.

The project will be implemented in the following steps:

    Step 1: Set up the project structure.
    Step 2: Implement the login and registration functionality.
    Step 3: Implement the to-do list management functionality.
    Step 4: Implement the notes management functionality.
    Step 5: Implement the API integration.
    Step 6: Deploy the application.


Features ✨
- Create, edit, and delete notes.
- Categorize notes with tags or folders.
- Search notes by title or content.
- User authentication (signup/login). (Underconstractions) 
- Responsive design for all devices.

---

Prerequisites 📋
- **Backend (Django):**
  - Python 3.9+
  - pip (Python package manager)
  - Virtualenv (recommended)
- **Frontend (React):**
  - Node.js 16+
  - npm/yarn
- **Database:** SQLite (default) or PostgreSQL.

---

Installation 🛠️

1. Clone the Repository
```bash
git clone https://github.com/your-username/note-taking-app.git
cd note-taking-app
```
2. Backend Setup (Django)
```
# Navigate to the backend directory
cd backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create a superuser (optional)
python manage.py createsuperuser

# Start the Django server
python manage.py runserver

```
3. Frontend Setup (React)
```
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the React development server
npm start
```
Configuration ⚙️
Environment Variables (Backend)
Create a .env file in the backend directory:
```
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
```
CORS Settings (Django)
Ensure your settings.py allows requests from the React frontend:
```
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # React default port
]
```
Running the Project 🚀
Locally
Backend: Run python manage.py runserver (default: http://localhost:8000).

Frontend: Run npm start (default: http://localhost:3000).

Production Deployment
Recommended Hosting:

Backend: Heroku, AWS EC2, or DigitalOcean.

Frontend: Vercel, Netlify, or Firebase Hosting.

Database: Use PostgreSQL in production (update DATABASE_URL in .env).

Static Files: Configure Django to serve static files via Whitenoise or a CDN.

Happy Note-Taking! ✍️

***Built with ❤️ by Hatem, Nouhaila, Asmaa.***




