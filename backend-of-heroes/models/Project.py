#CLASS FOR MODELING PROJECT 

class Project:

	#CONSTRUCTOR
	def __init__(self, name = None, country = None, goalPopulation = None, duration = None):
		self.name = name
		self.country = country
		self.goalPopulation = goalPopulation
		self.duration = duration


	#VALIDE ALL ATTRIBUTES WERE FILLED
	def validateModel(self):
		if(self.name == None):
			return False

		if(self.country == None):
			return False
		
		if(self.goalPopulation == None):
			return False

		if(self.duration == None):
			return False

		else:
			return True


	#CREATE MODEL TO ADD IN DB
	def createModelToDB(self):
		if(self.validateModel()):
			model = {}
			model.update({"name": self.name})
			model.update({"country": self.country})
			model.update({"goalPopulation": self.goalPopulation})
			model.update({"duration": self.duration})
			model.update({"type": "project"})
			return model
		else:
			return None

# project = Project("asd", "asdasd", "asdasdasd", 1)
# print(project.createModelToDB())