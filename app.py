from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# A dictionary to store the votes
votes = {
    "candidate1": 0,
    "candidate2": 0,
    "candidate3": 0
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/vote', methods=['POST'])
def vote():
    if electionOver:
        return jsonify(success=False)

    data = request.get_json()
    candidate = data['candidate']
    if candidate in votes:
        votes[candidate] += 1
        return jsonify(success=True)
    else:
        return jsonify(success=False)

@app.route('/results')
def results():
    return jsonify(success=True, votes=votes)

if __name__ == '__main__':
    app.run(debug=True)