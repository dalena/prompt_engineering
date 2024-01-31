import React from 'react';
import MeChat from '@/components/MeChat';
import GptChat from '@/components/GptChat';
import Link from 'next/link';



const SyllabusCreation = () => {
  return (
    <div>
      <h1 className="font-sans font-bold text-2xl pb-4">Syllabus Creation</h1>
      <h2 className='font-sans text-sm pb-4' >This example shows the prompting process that led to a customized syllabus for a 10 week course to learn the 3D Grphical Software Blender. This processs includes Content Generation, Iterative Development and Feedback, and Rich Text formatting to LaTex code conversions. The syllabus LaTex code generated from this conversation was manually <Link target="_blank" href="/docs/Syllabus_Generator.pdf">converted into a PDF</Link> using a LaTex Code Editor.</h2>
      <MeChat
        message="You are a syllabus generator. You will help me design a custom syllabus to learn the fundamentals of Blender, a 3D graphical software. Starting today, I have 10 weeks. By the end of the 10 weeks, I want to be able to have a good grasp on how to use the software for general purpose. The syllabus should include a course summary and a detailed schedule.  My study days are Monday, Wednesday, and Thursday. Each study day should have a lesson. For each lesson, you will search online for the most relevant, recent, and popular YouTube Video that addresses the lesson for that day.  The first week should start with the very basics and each consecutive week becomes more advanced.  There should be relevant assignments at the end of each work week. They are due the following Sunday. Each assignment should apply the learned material  and build up in complexity into the final week when the Final Project is due.
        "
      />
      <GptChat
        message=""
        htmlContent="    <h1>Blender Essentials: A 10-Week Intensive Course</h1>
      <h3>Week 1: Introduction to Blender</h3>
      <ul>
          <li>Monday: Introduction to Blender Interface</li>
          <li>Wednesday: Basic Navigation in 3D Space</li>
          <li>Thursday: Object Mode vs. Edit Mode</li>
          <li>Assignment: Create a simple 3D scene using basic shapes.</li>
      </ul>
      <h3>Week 2: Modeling Basics</h3>
      <ul>
          <li>Monday: Creating and Modifying Basic Shapes</li>
          <li>Wednesday: Introduction to Mesh Editing</li>
          <li>Thursday: Extruding and Insetting Faces</li>
          <li>Assignment: Model a simple object (like a table or chair).</li>
      </ul>
      <h3>Week 3: Advanced Modeling Techniques</h3>
      <ul>
          <li>Monday: Using Modifiers for Non-Destructive Editing</li>
          <li>Wednesday: Sculpting Basics</li>
          <li>Thursday: Introduction to Texturing</li>
          <li>Assignment: Model and texture a more complex object.</li>
      </ul>
      <h3>Week 4: Materials and Texturing</h3>
      <ul>
          <li>Monday: Basics of Material and Textures</li>
          <li>Wednesday: UV Mapping for Texture Application</li>
          <li>Thursday: Procedural Textures and Nodes</li>
          <li>Assignment: Apply textures and materials to a 3D model.</li>
      </ul>
      <h3>Week 5: Lighting and Rendering</h3>
      <ul>
          <li>Monday: Introduction to Lighting in Blender</li>
          <li>Wednesday: Camera Angles and Composition</li>
          <li>Thursday: Basics of Rendering</li>
          <li>Assignment: Create a rendered scene with proper lighting and camera setup.</li>
      </ul>
      <h3>Week 6: Animation Basics</h3>
      <ul>
          <li>Monday: Keyframe Animation</li>
          <li>Wednesday: Animating Movement and Rotation</li>
          <li>Thursday: Introduction to the Graph Editor</li>
          <li>Assignment: Animate a simple object moving along a path.</li>
      </ul>
      <h3>Week 7: Advanced Animation</h3>
      <ul>
          <li>Monday: Rigging and Skinning</li>
          <li>Wednesday: Character Animation Basics</li>
          <li>Thursday: Non-Linear Animation and the NLA Editor</li>
          <li>Assignment: Animate a basic character walking.</li>
      </ul>
      <h3>Week 8: Simulation and Effects</h3>
      <ul>
          <li>Monday: Physics Simulations Basics</li>
          <li>Wednesday: Particle Systems</li>
          <li>Thursday: Introduction to Smoke and Fire Simulation</li>
          <li>Assignment: Create a scene with a basic physics simulation or particle effect.</li>
      </ul>
      <h3>Week 9: Compositing and Post-Processing</h3>
      <ul>
          <li>Monday: Basics of Compositing in Blender</li>
          <li>Wednesday: Nodes for Compositing</li>
          <li>Thursday: Introduction to Post-Processing Effects</li>
          <li>Assignment: Enhance a rendered scene using compositing and post-processing techniques.</li>
      </ul>

      <h3>Week 10: Final Project</h3>
      <ul>
          <li>Monday-Thursday: Work on Final Project</li>
          <li>Final Project: Create a short animation or a detailed 3D scene, incorporating skills learned throughout the course.</li>
          <li>Due Date: End of Week 10 (Sunday).</li>
      </ul>"
      />
      <GptChat
        message=""
        htmlContent="    <h1>YouTube Video Selection:</h1>
      <p>I will now search for the most relevant, recent, and popular YouTube videos for each of the lessons. Please note that the availability and relevance of videos can vary, and I will select the best options available at this time.</p><br>
      <p>Based on a <a href='https://chat.openai.com/backend-api/bing/redirect?query=Blender%20introduction%20tutorial%202023%20YouTube'>quick search</a>, here's what I discovered.</p><br>
      <p>'The BEST Way To Learn Blender in 2023!!' Watch here.</p><br>
      <h3>Week 1: Introduction to Blender</h3>
      <ul>
          <li>Monday: Introduction to Blender Interface: The BEST Way To Learn Blender in 2023!! <a href='https://www.youtube.com/watch?v=8K4AShjq-MU'>Watch here.</a></li>
          <li>Wednesday: Basic Navigation in 3D Space: Blender 3.4 tutorial for absolute beginner 2023 - Introduction <a href='https://www.youtube.com/watch?v=8K4AShjq-MU'>Watch here.</a></li>
          <li>Thursday: Object Mode vs. Edit Mode: Learn Blender 3D in 20 Minutes! Blender Tutorial for Absolute Beginners (2023) <a href='https://www.youtube.com/watch?v=Rqhtw7dg6Wk'>Watch here.</a></li>
          <li>Assignment: Create a simple 3D scene using basic shapes.</li>
      </ul><br>
      <p>
      These videos will give you a strong foundation in understanding Blender's interface, navigating in 3D space, and differentiating between the object and edit modes. As you progress through the weeks, you can find similar videos that align with the schedule and topics I outlined. For instance, when you reach topics like advanced modeling, materials and texturing, or animation, you can search for tutorials specific to those areas.</p><br>
      <p>Remember, the assignments at the end of each week are designed to help you apply what you've learned and gradually build up your skills. By the time you reach the final project, you should have a comprehensive understanding of Blender's capabilities and be able to create detailed 3D scenes or animations. Enjoy your learning journey!</p>
      "
      />
      <MeChat
        message="Please continue to iterate through the weeks, providing youtube video links. When you are finished with one week, ask me if I want to continue iterating.
        "
      />

      <GptChat
        message=""
        htmlContent="
      <p>For Week 2 of your Blender course, focusing on Modeling Basics, here are the selected YouTube tutorials:</p><br>
      <p>Based on a <a href='https://chat.openai.com/backend-api/bing/redirect?query=Blender%20introduction%20tutorial%202023%20YouTube'>quick search</a>, here's what I discovered.</p><br>
      <p>'The BEST Way To Learn Blender in 2023!!' Watch here.</p><br>
      <h3>Week 2: Modeling Basics</h3>
      <ul>
          <li>Monday: Creating and Modifying Basic Shapes: Super simple shapes in Blender (Tutorial) <a href='https://www.youtube.com/watch?v=A7AVXpi3hFc'>Watch here.</a></li>
          <li>Wednesday: Introduction to Mesh Editing: Beginners Blender 3D: Tutorial 4 - Creating and Modifying Objects - Introduction <a href='https://www.youtube.com/watch?v=AMQcuRHWyOg'>Watch here.</a></li>
          <li>Thursday: Extruding and Insetting Faces: Blender 3D for Beginners - Ep03 - Basic shapes, Edit Mode and Transforming Objects <a href='https://www.youtube.com/watch?v=t5XHTVMfJD0'>Watch here.</a></li>
          <li>Assignment: Create a simple 3D scene using basic shapes.</li>
      </ul><br>
      <p>
      These tutorials will help you grasp the essential skills needed for basic 3D modeling in Blender. Would you like to continue with the video selections for the next week?</p>
      "
      />
      <MeChat
        message="Yes"
      />
      <GptChat
        message=""
        htmlContent="
      <p><i>***Note: GPT generates Week 3 links in the same response format, asking me each time if it should continue iterating through the weeks. I respond 'yes' each time. The generation stops when reaching Week 10***</i></p>
      "
      />
      <MeChat
        message="Can you please look through all of the weekly assignments and make them more entertaining, engaging, and relevant to the lesson plan from that week"
      />
      <GptChat
      message=""
      htmlContent="<h2>Revised Weekly Assignments</h2>

      <h3>Week 1: Introduction to Blender</h3>
      <p>Design a mini 3D park using basic shapes. Include trees, benches, and a pathway, focusing on creatively using different shapes.</p>
      <h3>Week 2: Modeling Basics</h3>
      <p>Create a themed chess set with each piece representing a different character or object, using basic modeling techniques.</p>
      <h3>Week 3: Advanced Modeling Techniques</h3>
      <p>Design a futuristic vehicle using advanced modeling techniques. Add textures for a realistic or sci-fi look.</p>
      <h3>Week 4: Materials and Texturing</h3>
      <p>Create a small virtual room and apply different textures and materials to objects like walls, furniture, and decor.</p>
      <h3>Week 5: Lighting and Rendering</h3>
      <p>Stage a dramatic scene (like a moody café or a bright beach scene) and use lighting to set the mood. Experiment with camera angles.</p>
      <h3>Week 6: Animation Basics</h3>
      <p>Create a short story where an inanimate object comes to life and navigates through an obstacle course, using keyframe animation.</p>
      <h3>Week 7: Advanced Animation</h3>
      <p>Animate a dance routine for a character, focusing on fluid motion and expression.</p>
      <h3>Week 8: Simulation and Effects</h3>
      <p>Design a magical scene with particle effects, like a wizard casting a spell or a forest with floating lights.</p>
      <h3>Week 9: Compositing and Post-Processing</h3>
      <p>Create a short clip integrating a 3D object into real-life footage, using compositing to make the integration seamless.</p>

      <h3>Week 10: Final Project</h3>
      <p>Develop a comprehensive 3D project that tells a story or showcases a concept, incorporating all learned skills.</p>"
      />
      <MeChat
        message="Now with all of your generated information, augment the course syllabus with the links you have gathered into a single syllabus format that is easy to understand and follow. Additionally turn this into a simple LaTex file, formatted similar to how you have displayed it to me.  Please generate the code into 4 parts, and don't miss anything. Please take your time.
        "
      />
      <GptChat
        message="This part sets up your document with a title, objective, and course details. It also loads necessary packages like hyperref for clickable links and geometry for page layout. I'll proceed with the next part, which will cover Weeks 1 to 3."
        imageUrl="/img/syllabusLatex.png"
      />
      <GptChat
        message=""
        htmlContent="<p><i>***Note: GPT finishes generating the syllabus in LaTex in four parts***</i></p>You can find the syllabus taken into a Latex Code Editor and compiled into a PDF <a target='_blank' href='/docs/Syllabus_Generator.pdf'>here</a>."
      />
    </div >

  )
}

export default SyllabusCreation