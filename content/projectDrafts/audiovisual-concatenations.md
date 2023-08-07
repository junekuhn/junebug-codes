---
title: Audiovisual Concatenations
thumbnail: "../static/uploads/audiovisual.png"
year: "2022"
categories:
- c++
- openframeworks
- maxmsp
- machine learning

---

[https://vimeo.com/705105388](https://vimeo.com/705105388 "https://vimeo.com/705105388")


Audiovisual Concatenations is a performance tool to explore sound and live webcam feedback through gesture. Using the Openframeworks libraries RapidLib and OpenCV, the performer trains a few gestures into the Dynamic Time Warping model, which detects hand movement through the computer’s webcam. The output of model is sent to a MaxMSP patch with concatenative synthesis. The output is also mapped to the rendered visual output, which combines a series of video processing effects to map the detection of gesture to different colors.

With this tool, the performer can use their hands to sift through sounds in a more exploratory and expressive way. Usually granular synthesis has an analogy of tape and tape machines, but this experience feels more like that of gold panning, in that the performer uses motion to find the sounds that are interesting to them.

The video demonstrates both the training and running of the machine learning model. First I train the movement of my left hand to one 'gesture' and then I train the movement of my right hand to another 'gesture'.  For the third gesture, I don't move at all, and that provides a kind of 'silence' gesture.  After training, I'm able to use my hands to move the red ellipse on the MaxMSP patch around on the grid.


