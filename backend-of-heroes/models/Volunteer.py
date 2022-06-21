#CLASS FOR MODELING ONG 

class Volunteer:

	#CONSTRUCTOR
	def __init__(self, name = None, country = None, age = None):
		self.name = name
		self.country = country
		self.age = age


	#VALIDE ALL ATTRIBUTES WERE FILLED
	def validateModel(self):
		if(self.name == None):
			return False

		if(self.country == None):
			return False

		if(self.age == None):
			return False

		else:
			return True


	#CREATE MODEL TO ADD IN DB
	def createModelToDB(self):
		if(self.validateModel()):
			model = {}
			model.update({"name": self.name})
			model.update({"country": self.country})
			model.update({"age": self.age})
			model.update({"type": "volunteer"})
			return model
		else:
			return None

# volunteer = Volunteer("asd", "asdasd", 2)
# print(volunteer.createModelToDB())