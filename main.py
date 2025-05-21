from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/index.html')
@app.route('/')
def index():
    card_data = (
        ("Getting Started", "How to begin your website","link","static/images/logo.png"),
        ("Examples of Good Web Design", "Here are some examples","link","static/images/logo.png"),
        ("Ways You Can Learn", "The Learning Ways","link","static/images/logo.png"),
    )
    return render_template("index.html", cards = card_data), 200
if __name__ == '__main__':
    app.run(debug=True)
