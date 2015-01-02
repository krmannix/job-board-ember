SchoolBinaryConverter = {
	COM: 0001,
	ENG: 0010,
	SMG: 0100,
	CAS: 1000,
	schools: [
				{name: "College of Communication", id: "com"},
				{name: "College of Engineering", id: "eng"}, 
				{name: "School of Management", id: "smg"},
				{name: "College of Arts & Sciences", id: "cas"}
			  ],
	convertSchoolsToBinary: function(school_array) {
		var t = 0;
		if (school_array.length > 0 && school_array[0].id) {
			for (var i = 0; i < school_array.length; i++) {
				var school = school_array[i];
				if (school.id === "eng") t += this.ENG;
				else if (school.id === "smg") t += this.SMG;
				else if (school.id === "cas") t += this.CAS;
				else if (school.id === "com") t += this.COM;
			}
		}
		return t;
	},
	convertBinaryToSchools: function(binaryLike) {
		var t = [];
		if (binaryLike >= 1000) {t.push(this.schools[3]); binaryLike -= 1000}
		if (binaryLike >= 100) {t.push(this.schools[2]); binaryLike -= 100}
		if (binaryLike >= 10) {t.push(this.schools[1]); binaryLike -= 10}
		if (binaryLike >= 1) {t.push(this.schools[0]); binaryLike -= 1}
	}
}

