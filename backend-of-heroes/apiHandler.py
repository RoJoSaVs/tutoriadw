import flask
from flask import request, jsonify, g, render_template, abort
from flask_cors import CORS, cross_origin
import json
import mongodbHandler
import sys

app = flask.Flask(__name__)
CORS(app, support_credentials=True)
mongo_database = mongodbHandler.MongodbHandler("MongoDBA-R", "Nodo_R", "Employees")



# A route to return all of the available entries in our catalog.
@app.route('/api/get', methods=['GET'])
def api_all():
    try:
        return jsonify(mongo_database.readAllFromMongoDB())
    except:
        abort(404)




@app.route('/api/add', methods=['POST'])
def add_single_record():
    try:
        data = request.json
        request_value = data['email']
        response = mongo_database.readOneFromMongoDB('email', request_value)
        if (response == None):
            return jsonify(mongo_database.insertToMongoDB(data))
        else:
            return jsonify(-1)
    except:
        abort(404)


@app.route('/api/edit', methods=['PUT'])
def edit_single_record():
    try:
        request_param = list(request.args.keys())[0]
        request_value = request.args.get(request_param)
        data = request.json
        return jsonify(mongo_database.updateToMongoDB(request_param, request_value, data))
    except:
        abort(404)



@app.route('/api/delete', methods=['DELETE'])
def delete_single_record():
    try:
        request_param = list(request.args.keys())[0]
        request_value = request.args.get(request_param)
        return jsonify(mongo_database.deleteToMongoDB(request_param, request_value))
    except:
        abort(404)




# if __name__ == "__main__":
#     app.run(host='0.0.0.0', port=5000, debug=True)

# app.run()