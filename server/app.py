from flask import Flask, json
from imagekitio import ImageKit
import os

app = Flask(__name__)

imagekit = ImageKit(
    private_key=os.environ['PRK'],
    public_key=os.environ['PBK'],
    url_endpoint=os.environ['URL']
)

@app.route('/')
def getImages():
    res = imagekit.list_files({"path": "GalleryPost"})
    data = res['response'] 
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    response.headers.add('Access-Control-Allow-Origin', 'mclub-website.vercel.app')
    return response