#CLASS FOR MODELING ONG 

class ONG:

	#CONSTRUCTOR
	def __init__(self, name = None, country = None):
		self.name = name
		self.country = country


	#VALIDE ALL ATTRIBUTES WERE FILLED
	def validateModel(self):
		if(self.name == None):
			return False
		if(self.country == None):
			return False
		else:
			return True


	#CREATE MODEL TO ADD IN DB
	def createModelToDB(self):
		if(self.validateModel()):
			model = {}
			model.update({"name": self.name})
			model.update({"country": self.country})
			model.update({"type": "ong"})
			return model
		else:
			return None

# ong = ONG("asd", "asdasd")
# print(ong.createModelToDB())