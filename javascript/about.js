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
			"when": "May 2019 - August 2023",
			"what": "Game Developer // Godot Game Developer"
		},
		{
			"where": "Lamina Studios",
			"when": "March 2017 - December 2017",
			"what": "Pixel Artist @ Dungeon Souls"		},
		{
			"where": "3Decide",
			"when": "March 2017 - August 2017",
			"what": "Intern Programmer"		},
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
		whereDiv.appendChild(whereText);
		placeDiv.appendChild(whereDiv);
		
		let whenDiv = document.createElement("div");
		whenDiv.classList.add("when");
		let whenText = document.createTextNode(place.when);
		whenDiv.appendChild(whenText);
		placeDiv.appendChild(whenDiv);
		
		let whatDiv = document.createElement("div");
		whatDiv.classList.add("what");
		let whatText = document.createTextNode(place.what);
		whatDiv.appendChild(whatText);
		placeDiv.appendChild(whatDiv);
		
		section.appendChild(placeDiv);
	}
}