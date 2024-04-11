# Login Page

## Overview
This project is a secure user registration system that allows users to sign up with a unique username and password. User information is stored in a MySQL database, and the application includes client-side validation for user input.

## Technologies Used
- Flask (Python)
- HTML
- CSS
- JavaScript
- MySQL

## Getting Started
1. Clone the repository: `git clone https://github.com/devarshi002/flask_login_page_backend_db.git`
2. Install dependencies: `pip install -r requirements.txt`
3. Set up the database:
   - Create a MySQL database named `login_page`
   - Update the database URI in `app.py` to match your MySQL settings
   - Run `python app.py db migrate` and `python app.py db upgrade` to create the necessary tables
4. Start the Flask application: `python app.py`
5. Access the application in your web browser: `http://localhost:5000`

## Usage
- Navigate to the registration page (`/register`) to create a new account.
- After registering, you can log in using your username and password on the login page (`/login`).

## Credits
- Devarshi Tambulkar

## Screenshot
![Screenshot 2024-04-11 140622](https://github.com/devarshi002/flask_login_page_backend_db/assets/124704583/17d3faca-32f8-4437-9e7d-4927432a00d1)

