from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

DEVREGISTRATIONS = [
    {
        "name": "Linus Torvalds",
        "skills": "Linux, C, Git, React, Python",
        "age": 55,
        "salary": 1200,
        "currency": "EUR",
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

api.add_resource(HelloWorld, '/')
api.add_resource(DevRegistrations, '/devregistrations')

if __name__ == '__main__':
    app.run(debug=True)
