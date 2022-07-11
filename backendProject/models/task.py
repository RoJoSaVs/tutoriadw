import datetime
import json

class Task:
	def __init__(self, _id=0, nombre="", descripcion="", urgenciaString="", urgenciaNumber=0, fechaVencimiento="", estado="", posicion=0, datosContacto="", categoriaLista=0):
		self._id = _id
		self.nombre = nombre
		self.descripcion = descripcion
		self.urgenciaString = urgenciaString
		self.urgenciaNumber = urgenciaNumber
		self.fechaVencimiento = fechaVencimiento
		self.estado = estado
		self.posicion = posicion
		self.datosContacto = datosContacto
		self.categoriaLista = categoriaLista

	def formatResponse(self, taskList):
		taskListFormat = []
		for task in taskList:
			jsonFormat = '{"_id":%s, "nombre":"%s", "descripcion":"%s", "urgenciaString":"%s", "urgenciaNumber":%s, "fechaVencimiento":"%s", "estado":"%s", "posicion":%s, "datosContacto":"%s", "Lista":{"categoriaLista":%s, "nombreLista":"%s"}}' %(task[0], task[1], task[2], task[3], task[4], str(task[5]), task[6], task[7], task[8], task[9], task[10])
			taskListFormat.append(json.loads(jsonFormat))
		return json.dumps(taskListFormat)