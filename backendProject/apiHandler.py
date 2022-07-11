import flask
from flask import request, jsonify, g, render_template, abort
from flask_cors import CORS, cross_origin
import json
import sys
import postgresqlHandler
from models.task import *

app = flask.Flask(__name__)
CORS(app, support_credentials=True)
handler = postgresqlHandler.PostgresqlHandler("localhost", "postgres", "postgres", "2659")

@app.route('/get/list/<param>', methods=['GET'])
def getList(param):
    print(param, file=sys.stderr)
    return "0"


@app.route('/get/task/<param>', methods=['GET'])
def getTask(param):
    # print(param, file=sys.stderr)
    task = Task()
    response = task.formatResponse(handler.getTaskForUser(param))
    return response


@app.route('/addList/<param>', methods=['POST'])
def addList(param):
	data = request.json
	return "0"

@app.route('/addTask/<param>', methods=['POST'])
def addTask(param):
	data = request.json
	return "0"


@app.route('/editList/<param>', methods=['PUT'])
def editList(param):
	_id = request.args.get('_id')
	data = request.json
	return "0"


@app.route('/editTask/<param>', methods=['PUT'])
def editTask(param):
	_id = request.args.get('_id')
	data = request.json
	return "0"


@app.route('/deleteList/<param>', methods=['DELETE'])
def deleteList(param):
	_id = request.args.get('_id')
	return "0"


@app.route('/deleteTask/<param>', methods=['DELETE'])
def deleteTask(param):
	_id = request.args.get('_id')
	return "0"





# if __name__ == "__main__":
#     app.run(host='0.0.0.0', port=5000, debug=True)

# app.run()