 // bio information:
 var bio = {
     name: "Abdulrahman Albraik",
     role: "Web developer",
     contacts: {
         email: "albraika@gmail.com",
         github: "albraika",
         twitter: "@albraika",
         location: "Khobar"
     },
     welcomeMessage: "Welocme to my resume",
     skills: ["Python ", " HTML & CSS ", " JavaScript"],
     bioPic: "images/me.jpg"
 };

 bio.display = function() {
     var formattedName = HTMLheaderName.replace("%data%", bio.name);
     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
     var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
     var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
     var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
     var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
     var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
     var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

     $("#header").prepend(formattedName, formattedRole);
     $("#topContacts, #footerContacts").append(formattedEmail, formattedGithub, formattedTwitter);
     $("#topContacts").append(formattedLocation);
     $("#header").append(formattedBioPic, formattedWelcomeMsg);


     if (bio.skills.length > 0) {
         $("#header").append(HTMLskillsStart);
         var formattedSkill = HTMLskills.replace("%data%", bio.skills);
         $("#skills").append(formattedSkill);
     }
 };
 bio.display();

 // education information:

 var education = {
     schools: [{
         name: "Simon Fraser University",
         degree: "Bachelor",
         dates: 2012,
         location: "Burnaby, BC, Canada",
         majors: "Business Administration "

     }],
     "onlineClasses": [{
             title: "Big Data Orientation",
             school: "Microsoft",
             dates: 2016,
             url: "https://www.edx.org/course/big-data-orientation-microsoft-microsoft-dat229x-0"
         },
         {
             title: "Analyzing and Visualizing Data with Excel",
             school: "Microsoft",
             dates: 2016,
             url: "https://www.edx.org/course/analyzing-visualizing-data-excel-microsoft-dat206x-7"
         },
         {
             title: "Intro to Programming",
             school: "Udacity",
             dates: 2017,
             url: "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
         }
     ]
 };

 education.display = function() {
     education.schools.forEach(function(school) {

         var formattedSchool = HTMLschoolName.replace("%data%", school.name);
         var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
         var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
         var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
         var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

         $("#education").append(HTMLschoolStart);
         $(".education-entry:last").append(formattedSchool, formattedDegree, formattedDates, formattedLocation, formattedMajor);
     });

     $("#education").append(HTMLonlineClasses);
     education.onlineClasses.forEach(function(online) {

         var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title);
         var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
         var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.dates);
         var formattedOnlineUrl = HTMLonlineURL.replace("%data%", online.url);
         $("#education").append(HTMLschoolStart);
         $(".education-entry:last").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineUrl);
     });
 };
 education.display();


 // work information:
 var work = {
     jobs: [{
         employer: "KACND",
         title: "Administrative",
         dates: "2012 - presont",
         location: "Khobar",
         description: "Manging youth programs"
     }]
 };

 work.display = function() {
     for (var j = 0; j < work.jobs.length; j++) {
         var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
         var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
         var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
         var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
         var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs.description);
         $(".work-entry:last").append(formattedEmployer, formattedTitle, formattedDates, formattedLocation, formattedDescription);
     }
 };
 work.display();


 // projects information:

 var projects = {
     projects: [{
             title: "Make a Stylish Webpage",
             dates: "2017",
             description: "built a web page that involves multiple sections, content types, and styles.",
             image: "images/Make a Stylish Webpage.png"
         },
         {
             title: "Code Your Own Quiz",
             dates: "2017",
             description: "built a fill-in-the-blanks quiz prompt the user with a sentence containing several blanks. " +
                 "The user asked to fill in each blank appropriately to complete the sentence. " +
                 "This can be used as a study tool to help remember important vocabulary!",
            image: "images/Code Your Own Quiz.png"
         },
         {
             title: "Animal Trading Card",
             dates: "2017",
             description: "A web-based trading card of favorite animal to demonstrate HTML & CSS skills.",
             image: "images/Animal Trading Card.png"
         },
         {
             title: "A Portfolio Site",
             dates: "2017",
             description: "A responsive website that  display images, descriptions and links to each of the portfolio projects",
             image: "images/A Portfolio Site.png"
         },
     ],
 };

 projects.display = function() {
     for (var p = 0; p < projects.projects.length; p++) {
         $("#projects").append(HTMLprojectStart);

         var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
         var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
         var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
         var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[p].image)
         $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription, formattedImage);
     }
 };
 projects.display();

// $("#mapDiv").append(googleMap);