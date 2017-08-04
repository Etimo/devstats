from flask import Flask, request
from flask_restful import Api, Resource
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/devregistrations/*": {"origins": "*"}})
api = Api(app)

DEVREGISTRATIONS = [
    {
        "name": "Linus Torvalds",
        "skills": "Linux, C, Git, React, Python",
        "age": 55,
        "salary": 200,
        "currency": "EUR",
        "experience": 47,
        "currentTech": "React, Python",
        "location": "Helsingfors"
    }
]

class HelloWorld(Resource):
    def get(self):
        return "Welcome.", 200

class DevRegistrations(Resource):
    def get(self):
        return DEVREGISTRATIONS, 200
    def post(self):
        registration = request.get_json()
        DEVREGISTRATIONS.append(registration)
        return registration

api.add_resource(HelloWorld, '/')
api.add_resource(DevRegistrations, '/devregistrations')

if __name__ == '__main__':
    app.run(debug=True)
