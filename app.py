from flask import Flask, request, jsonify
from openai_api import chat
from flask_cors import CORS

app = Flask(__name__)
# This enables CORS for the entire app.
CORS(app)


@app.route('/api/chat', methods=['POST'])
def handle_chat():
    print('here')
    data = request.get_json()
    message = chat(data['query'])
    print(message)
    return jsonify({'message': message})


if __name__ == '__main__':
    print('starting server')
    app.run(debug=True, port=5000)
