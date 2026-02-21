from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

DATABASE = 'bitebuddy.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

# Fake in-memory data
users = [
    {
        "id": 1,
        "name": "Alex",
        "major": "Computer Science",
        "foodPreference": "Sushi",
        "lat": 49.8951,
        "lng": -97.1384,
        "hungry": True
    },
    {
        "id": 2,
        "name": "Maya",
        "major": "Engineering",
        "foodPreference": "Burgers",
        "lat": 49.8948,
        "lng": -97.1379,
        "hungry": True
    }
]

@app.route("/login", methods=["GET"])
def login():
    data = request.json
    username = data.get("email")
    password = data.get("password")

    cursor = get_db().cursor()
    cursor.execute("SELECT * FROM users WHERE email = ? AND password = ?", (username, password))
    user = cursor.fetchone()
    if user:
        return jsonify({"message": "Login successful", "user": user})
    else:
        return jsonify({"message": "Login failed"}), 401

@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    username = data.get("email")
    password = data.get("password")
    first_name = data.get("firstName")
    last_name = data.get("lastName")
    major = data.get("major")
    dob_day = data.get("dob").get("day")
    dob_month = data.get("dob").get("month")
    dob_year = data.get("dob").get("year")
    gender = data.get("gender")

    cursor = get_db().cursor()

    command = """INSERT INTO users (email, password, first_name, last_name, major, dob_day, dob_month, dob_year, gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"""

    cursor.execute(command, (username, password, first_name, last_name, major, dob_day, dob_month, dob_year, gender))
    get_db().commit()
    return jsonify({"message": "Signup successful"})

@app.route("/profile/<string:email>", methods=["GET"])
def get_profile(email):
    cursor = get_db().cursor()
    cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()
    if user:
        return jsonify({"message": "Profile retrieved", "user": user})
    else:
        return jsonify({"message": "Profile not found"}), 404

@app.route("/users", methods=["GET"])
def get_users():
    cursor = get_db().cursor()
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    return jsonify(users)

@app.route("/toggle-hungry", methods=["POST"])
def toggle_hungry():
    data = request.json
    user_id = data.get("userId")

    for user in users:
        if user["id"] == user_id:
            user["hungry"] = not user["hungry"]
            return jsonify(user)

    return jsonify({"error": "User not found"}), 404


@app.route("/")
def home():
    return jsonify({"message": "BiteBuddy API running"})


if __name__ == "__main__":
    app.run(debug=True, port=5000)