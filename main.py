from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/index.html')
@app.route('/reasons.html')
@app.route('/')
def index():
    return render_template("index.html"), 200
def reasons():
    return render_template("/workspaces/2026CT_Web_Connor.K/templates/reasons.html"), 200
if __name__ == '__main__':
    app.run(debug=True)
