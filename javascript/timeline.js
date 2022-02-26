var timeline_json =
{
	"places":
	[
		{
			"where": "Faculdade de Engenharia da Universidade do Porto",
			"when": "October 2021 - Present",
			"what": "Masters in Multimedia - Interactive Technologies and Digital Games"
		},
		{
			"where": "Fabamaq",
			"when": "May 2019 - Present",
			"what": "Game Developer",
			"which": "JavaScript, C++"
		},
		{
			"where": "Lamina Studios",
			"when": "March 2017 - December 2017",
			"what": "Pixel Artist @ DUngeon Souls",
			"which": "Adobe Photoshop"
		},
		{
			"where": "3Decide",
			"when": "March 2017 - August 2017",
			"what": "Intern Programmer",
			"which": "C#, Unity"
		},
		{
			"where": "Instituto Superior de Engenharia do Porto",
			"when": "September 2014 - November 2017",
			"what": "BSc. in Informatics Engineering",
		}
	]
};
	
function buildTimeline(places, section_id)
{
	places = timeline_json.places;
	console.log(places);
	
	let section = document.getElementById(section_id);
	for(let i = 0; i < places.length; i++)
	{
		let place = places[i];
		let placeDiv = document.createElement("div");
		placeDiv.classList.add("place");
		
		let whereDiv = document.createElement("div");
		whereDiv.classList.add("where");
		let whereText = document.createTextNode(place.where);
		console.log(place.where);
		whereDiv.appendChild(whereText);
		placeDiv.appendChild(whereDiv);
		
		let whenDiv = document.createElement("div");
		whenDiv.classList.add("when");
		let whenText = document.createTextNode(place.when);
		console.log(place.when);
		whenDiv.appendChild(whenText);
		placeDiv.appendChild(whenDiv);
		
		let whatDiv = document.createElement("div");
		whatDiv.classList.add("what");
		let whatText = document.createTextNode(place.what);
		console.log(place.what);
		whatDiv.appendChild(whatText);
		placeDiv.appendChild(whatDiv);
		
		let whichDiv = document.createElement("div");
		whichDiv.classList.add("which");
		let whichText = document.createTextNode(place.which);
		console.log(place.which);
		whichDiv.appendChild(whichText);
		placeDiv.appendChild(whichDiv);
		
		section.appendChild(placeDiv);
	}
}