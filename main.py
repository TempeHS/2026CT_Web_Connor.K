from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/index.html')
@app.route('/')
def index():
    card_data = (
        ("Getting Started", "How to begin your website","/starting.html","static/images/card1.png"),
        ("Examples of Good Web Design", "Here are some examples","/goodweb.html","static/images/card2.png"),
        ("Ways You Can Learn", "The Learning Ways","link","static/images/card3.png"),
        ("Ways You Can Learn", "The Learning Ways","link","static/images/card4.png"),
        ("Flash!", "Oof owie my eyes","/flash.html","static/images/card5.png"),
        ("Ways You Can Learn", "The Learning Ways","link","static/images/card6.png"),
    )
    return render_template("index.html", cards = card_data), 200


@app.route('/contact.html')
def contact():
    return render_template('contact.html'),200


@app.route('/starting.html')
def starting():
    return render_template('starting.html'),200

@app.route('/credits.html')
def credits():
    return render_template('credits.html'),200

@app.route('/goodweb.html')
def goodweb():
    return render_template('goodweb.html'),200

@app.route('/login.html')
def login():
    return render_template('loginpage.html'),200

@app.route('/flash.html')
def flash():
    return render_template('flash.html'),200

if __name__ == '__main__':
    app.run(debug=True)
