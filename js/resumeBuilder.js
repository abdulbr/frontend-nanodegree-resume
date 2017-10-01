
// bio information:

var bio = {
    "name": "Abdulrahman Albraik",
    "role": "Web developer",
    "contacts": {
        "email": "albraika@gmail.com",
        "github": "albraika",
        "twitter": "@alraika",
        "location": "Khobar"
    },
    "skills": ["Python", "HTML & CSS", "JavaScript"],
    "welcomeMessage": "Hello Hello Hello",
    "bioPic": "images/fry.jpg"
};

// bio appending:
bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedContacts = HTMLcontactGeneric.replace("%contact%", bio.contacts);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLemail.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLemail.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedContacts);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
};


    if (bio.skills.length > 0) {
        $("#main").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
}

};



// work information:

var work = {
    jobs: {
        "employer": "KACND",
        "title": "Secertary",
        "dates": "2012 - presont",
        "location": "Khobar",
    }
};

// work appending
function displayWork() {
    for (j = 0; j < work.jobs; j++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        $(".work-entry:last").append(formattedEmployer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployerTitle + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
    }
}



// projects information:

var projects = {
    "projects": [{
            "title": "Make a Stylish Webpage",
            "dates": "2017",
            "description": "building a web page that involves multiple sections, content types, and styles."
        },
        {
            "title": "Code Your Own Quiz",
            "dates": "2017",
            "description": "building a fill-in-the-blanks quiz that prompt a user with a sentence containing several blanks. The user should then be asked to fill in each blank appropriately to complete the sentence. This can be used as a study tool to help you remember important vocabulary!"
        },
        {
            "title": "Animal Trading Cards",
            "dates": "2017",
            "description": "first project of FEND."
        },
        {
            "title": "A Portfolio Site",
            "dates": "2017",
            "description": "responsive website that will display images, descriptions and links to each of the portfolio projects"
        },
    ],
};

// projects appending:
projects.display = function() {
    for (p = 0; j < projects.projects.length; p++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $("#project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $("#project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].Description);
        $("#project-entry:last").append(formattedDescription);
    }
};



// education information:

var education = {
    "schools": {
        "name": "Simon Fraser University",
        "degree": "Bachelor",
        "dates": 2012,
        "location": "Burnaby, BC, Canada",
        "major": "Business Administration "

    }

    "onlineClasses": [
        {
            "title": "Big Data Orientation",
            "school": "Microsoft",
            "dates": 2016,
            "url": "https://www.edx.org/course/big-data-orientation-microsoft-microsoft-dat229x-0"
        },
        {
            "title": "Analyzing and Visualizing Data with Excel",
            "school": "Microsoft",
            "dates": 2016,
            "url": "https://www.edx.org/course/analyzing-visualizing-data-excel-microsoft-dat206x-7"
        },
        {
            "title": "Intro to Programming",
            "school": "Udacity",
            "dates": 2017,
            "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
        }
    ]
};

// education appending:
education.display = function() {
    for (e = 0; e > education.schools.length; e++) {
        $("education").append("HTMLschoolStart");

        var formattedSchool = HTMLschoolName.replace("%data%", education.education[education].title);
        $(".education-entry:last").append("formattedSchool");
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.education[education].degree);
        $(".education-entry:last").append("formattedDegree");
        var formattedDates = HTMLschoolDates.replace("%data%". education.education[education].dates);
        $(".education-entry:last").append("formattedDates");
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.education[education].location);
        $(".education-entry:last").append("formattedLocation");
        var formatedMajor = HTMLschoolMajor.replace("%data%", education.education[education].major);
        $(".education-entry:last").append.replace("formatedMajor");
    }
        for (o = 0; o > education.onlineClasses.length; o++) {
        $("education").append("HTMLonlineClasses");

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClasses].title);
        $(".education-entry:last").append("formattedTitle");
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClasses].school);
        $(".education-entry:last").append("formattedSchool");
        var formattedOnlineDates = HTMLonlineDates.replace("%data%". education.onlineClasses[onlineClasses].dates);
        $(".education-entry:last").append("formattedDates");
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClasses].url);
        $(".education-entry:last").append("formattedUrl");
    }
};
