# Makeree Content

Makeree's lesson and course content can be changed, updated and modified by users and enthusiasts. This private course Platform allows artists and creators to publish their content within a structured template. The modified or new lessons will be monitored and approved by experts, guaranteeing the content is worthy, original and educational.

# Makeree Course Structure 

### Contribute

##### Course
A course contains a list of project-based lessons which cover a subject, gradually escalating in the level of difficulty - from easy to complex. Eventually providing the reader with extensive knowledge in the debated matter.

##### Lesson
There are three types of project-based of lessons :

- Step by step instructions – This lesson contains a list of steps and resources, providing the means to build a project from start to finish.

- Challenge – This lesson confronts the users with a challenge. Offers a trigger, encouraging users to implement what they have previously learned and challenging them to solve the issue at hand independently. At the end of the process users are invited to browse similar projects executed by their peers.

- Creative lesson - This lesson encourages users to create freely, an opportunity for open play.



##### Lesson Step
Step is part of the lesson and includes explanation and needed resources.

##### Extras
Extras are a part of the step resources and contain additional layers of information given to the users. Extras can contain a body of text or may include additional optional images.

Extras are optional in lesson steps. However, extras can add useful explanations and offer alternative techniques. 

Types of extras:

- Important
- Alternative
- What happened?

### Course format

Lessons are written in Markdown format, images and additional resources are stored in GitHub repository.

See **lesson_format.md** on GutHub for a sample format of the lesson. 

##### Lesson format

-	Lesson name 
-	Lesson description
- 	Lesson image
-	Time to make
-	List of lesson's materials
	- Material name
	- Material quantity
-	List of lesson's steps :
	- Step number
	- Step image
	- Step text
	- Step extras
		- Extra text
		- Extra image (optional)

#### Github folder structure

Folder "courses" contains all the courses and their data, including lesson texts and images.

The folder is divided into courses -  the folder name indicates the name of the course.

Each course folder contains a list of lesson folders with lesson definition, step assets and extra resources.

- [courses]
	- [course-name]
		- [lesson1-name]	
		- [lesson2-name]
			- Lesson.md
			- [assets]
				- Image.png
				- step1.png
				- step2.png
				- step3.png
				- [extra]
					- [step1]
						- extra.png
					- [step4]
						- extra1.png
						- extra2.png


#### Images

Images resolution recommendation:

The Makeree App is designed for Ipad and the images used in lessons will be viewed best at **2048 x 1536**  pixels.


### Edit lessons

Pull requests are welcome!

After forking the repository, there are a number of ways to add or edit courses and lessons.

1.  Edit in online git editor:
 
	 [Dillinger.io](http://dillinger.io)

2.  Pull the repository and use offline editors, for example MarkdownPad:
	
	[MarkdownPad](http://markdownpad.com)

3.  Add and edit Markdown files directly on GitHub.

### View changes

You can view the changes you made on our website, by entering your GitHubrepository.

[Makeree courses](http://courses.makeree.com)

### Contact

[Makeree on Facebook](www.facebook.com/freetimeacademy)

Email us: sergey@freetimeacademy.com




