from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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

@app.route("/users", methods=["GET"])
def get_users():
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