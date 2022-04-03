from flask import Flask, json, render_template_string
from imagekitio import ImageKit
import os
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)

imagekit = ImageKit(
    private_key=os.environ['PRK'],
    public_key=os.environ['PBK'],
    url_endpoint=os.environ['URL']
)

limiter = Limiter(app, key_func=get_remote_address)

@app.route('/')
@limiter.limit("10/minute") 
def home():
    return render_template_string('<h1>Hello</h1>')

@app.route('/image')
@limiter.limit("10/minute") 
def getImages():
    res = imagekit.list_files({"path": "GalleryPost"})
    data = res['response'] 
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )

    response.headers.add('Access-Control-Allow-Origin', '*')
    return response