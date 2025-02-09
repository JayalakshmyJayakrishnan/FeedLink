from flask import Flask, render_template, request, redirect, url_for, jsonify
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Flask app
app = Flask(__name__)

# Initialize Firebase
cred = credentials.Certificate("./firebase.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
food_collection = db.collection('foods')




# Home page - Fetch donations and pass them to the template
@app.route('/')
def index():
    donations = food_collection.stream()
    donations_list = [{'id': doc.id, **doc.to_dict()} for doc in donations]
    return render_template('login.html', donations=donations_list)

@app.route('/map')
def map():
    donations = food_collection.stream()
    donations_list = [{'id': doc.id, **doc.to_dict()} for doc in donations]
    return render_template('index.html', donations=donations_list)


# API to add a new donation
@app.route('/add_donation', methods=['POST'])
def add_donation():
    name = request.form['name']
    food_details = request.form['food_details']
    latitude = float(request.form['latitude'])
    longitude = float(request.form['longitude'])

    food_collection.add({
        'name': name,
        'food_details': food_details,
        'latitude': latitude,
        'longitude': longitude
    })

    return redirect(url_for('index'))  # Refresh page to update map

# API to get all donations as JSON for the map
@app.route('/api/donations')
def get_donations():
    donations = food_collection.stream()
    donation_list = []

    for doc in donations:
        data = doc.to_dict()
        if 'latitude' in data and 'longitude' in data:
            try:
                data['latitude'] = float(data['latitude'])  # Ensure float type
                data['longitude'] = float(data['longitude'])
                donation_list.append({'id': doc.id, **data})
            except ValueError:
                continue  # Skip invalid entries

    return jsonify(donation_list)


if __name__ == '__main__':
    app.run(debug=True)
