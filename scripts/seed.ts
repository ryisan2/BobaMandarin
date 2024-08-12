import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Traditional",
        imageSrc: "/Traditional.svg",
        description: "Some description",
      },
      {
        id: 2,
        title: "Simplified",
        imageSrc: "/Simplified.svg",
        description: "Some description",
      },
      {
        id: 3,
        title: "English",
        imageSrc: "/english.svg",
        description: "Some description",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of Mandarin",
        order: 1,
      },
    ]);

    //ALL LESSONS BELOW-------------------------------------------- 

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Nouns",
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "Verbs",
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: "Pronouncs",
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: "Adverbs",
      },
      {
        id: 5,
        unitId: 1,
        order: 5,
        title: "Adjectives",
      },
    
    ]);

  //END OF LESSONS ! -----------------------------------------------------------

  

    //CHALLENGE QUESTIONS BELOW!!!!!!!!--------------------------------------------

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, //Nouns
        type: "SELECT",
        order: 1,
        question: ' Which one of these is "The man"? ',
      },
      {
        id: 2,
        lessonId: 1, //Nouns
        type: "ASSIST",
        order: 2,
        question: ' "The man"? ',
      },
      {
        id: 3,
        lessonId: 1, //Nouns
        type: "SELECT",
        order: 3,
        question: ' Which one of these is "The woman"? ',
      },
      {
        id: 4,
        lessonId: 1, //Nouns
        type: "ASSIST",
        order: 4,
        question: ' "The woman"? ',
      },
      {
        id: 5,
        lessonId: 1, //Nouns
        type: "ASSIST",
        order: 5,
        question: 'Which one of these is "The robot"? ',
      },
  
    ]);

  //END OF CHALLENGE QUESTIONS ! --------------------------------------------




    //CHALLENGE OPTIONS TO CHOOSE ! --------------------------------------------

    await db.insert(schema.challengeOptions).values([
      {
       challengeId:1, //which one of these is the man?
       imageSrc:"/man.svg",
       correct:true,
       text: "Xiān shēng",
       audioSrc:"/xiansheng.mp3",
      },
      {
       challengeId:1, //which one of these is the man?
       imageSrc:"/woman.svg",
       correct:false,
       text: "Xiǎo jiě",
       audioSrc:"/xiaojie.mp3",
      },
      {
       challengeId:1, //which one of these is the man?
       imageSrc:"/robot.svg",
       correct:false,
       text: "Jīqìrén",
       audioSrc:"/jiqiren.mp3",
      }
     ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId:2, //which one of these is the man?
        correct:false,
        text: "Jīqìrén",
        audioSrc:"/jiqiren.mp3",
      },
      {
        challengeId:2, //which one of these is the man?
        correct:false,
        text: "Xiǎo jiě",
        audioSrc:"/xiaojie.mp3",
      },
      {
       challengeId:2, //which one of these is the man?
       correct:true,
       text: "Xiān shēng",
       audioSrc:"/xiansheng.mp3",
      },
     ]);

     await db.insert(schema.challengeOptions).values([
      {
       challengeId:3, //which one of these is the woman?
       imageSrc:"/man.svg",
       correct:false,
       text: "Xiān shēng",
       audioSrc:"/xiansheng.mp3",
      },
      {
       challengeId:3, //which one of these is the man?
       imageSrc:"/woman.svg",
       correct:true,
       text: "Xiǎo jiě",
       audioSrc:"/xiaojie.mp3",
      },
      {
       challengeId:3, //which one of these is the man?
       imageSrc:"/robot.svg",
       correct:false,
       text: "Jīqìrén",
       audioSrc:"/jiqiren.mp3",
      }
     ]);

     await db.insert(schema.challengeOptions).values([
       {
        challengeId:4, //which one of these is the man?
        correct:true,
        text: "Xiǎo jiě",
        audioSrc:"/xiaojie.mp3",
       },
       {
        challengeId:4, //which one of these is the man?
        correct:false,
        text: "Jīqìrén",
        audioSrc:"/jiqiren.mp3",
       },
      {
       challengeId:4, //which one of these is the woman?
       correct:false,
       text: "Xiān shēng",
       audioSrc:"/xiansheng.mp3",
      },
     ]);

     await db.insert(schema.challengeOptions).values([
      {
       challengeId:5, //which one of these is the robot?
       imageSrc:"/man.svg",
       correct:false,
       text: "Xiān shēng",
       audioSrc:"/xiansheng.mp3",
      },
      {
       challengeId:5, //which one of these is the robot?
       imageSrc:"/woman.svg",
       correct:false,
       text: "Xiǎo jiě",
       audioSrc:"/xiaojie.mp3",
      },
      {
       challengeId:5, //which one of these is the robot?
       imageSrc:"/robot.svg",
       correct:true,
       text: "Jīqìrén",
       audioSrc:"/jiqiren.mp3",
      }
     ]);

//END OF CHALLENGE OPTIONS TO CHOOSE ! --------------------------------------------
    
//CHALLENGE 2 QUESTIONS!!!!!!--------------------------------------------

await db.insert(schema.challenges).values([
  {
    id: 6,
    lessonId: 2, //Verbs
    type: "SELECT",
    order: 1,
    question: ' Which one of these is "Run"? ',
  },
  {
    id: 7,
    lessonId: 2, //Verbs
    type: "SELECT",
    order: 2,
    question: ' "Jump? ',
  },
  {
    id: 8,
    lessonId: 2, //Verbs
    type: "SELECT",
    order: 3,
    question: ' Which one of these is "Run"? ',
  },
  {
    id: 9,
    lessonId: 2, //Verbs
    type: "ASSIST",
    order: 4,
    question: ' "Dance"? ',
  },
  {
    id: 10,
    lessonId: 2, //Verbs
    type: "SELECT",
    order: 5,
    question: 'Which one of these is "Jump"? ',
  },


]);



//END OF CHALLENGE 2 QUESTIONS ! --------------------------------------------

//CHALLENGE OPTIONS TO CHOOSE ! --------------------------------------------

await db.insert(schema.challengeOptions).values([
  {
   challengeId:6, //which one of these is the run?
   imageSrc:"/dance.png",
   correct:false,
   text: "Tiào wǔ",
   audioSrc:"/dance.mp3",
  },
  {
   challengeId:6, //which one of these is the run?
   imageSrc:"/run.png",
   correct:true,
   text: "Pǎo bù",
   audioSrc:"/run.mp3",
  },
  {
   challengeId:6, //which one of these is the run?
   imageSrc:"/jump.png",
   correct:false,
   text: "Tiào",
   audioSrc:"/jump.mp3",
  }
 ]);

await db.insert(schema.challengeOptions).values([
  {
    challengeId:7, //which one of these is the jump?
    correct:false,
    text: "Pǎo bù",
    audioSrc:"/run.mp3",
  },
  {
    challengeId:7, //which one of these is the jump?
    correct:false,
    text: "Tiào wǔ",
    audioSrc:"/dance.mp3",
  },
  {
   challengeId:7, //which one of these is the jump?
   correct:true,
   text: "Tiào",
   audioSrc:"/jump.mp3",
  },
 ]);

 await db.insert(schema.challengeOptions).values([
  {
   challengeId:8, //which one of these is the run?
   imageSrc:"/run.png",
   correct:true,
   text: "Pǎo bù",
   audioSrc:"/run.mp3",
  },
  {
   challengeId:8, //which one of these is the run?
   imageSrc:"/dance.png",
   correct:false,
   text: "Tiào wǔ",
   audioSrc:"/dance.mp3",
  },
  {
   challengeId:8, //which one of these is the run?
   imageSrc:"/jump.png",
   correct:false,
   text: "Tiào",
   audioSrc:"/jump.mp3",
  },
 ]),

 await db.insert(schema.challengeOptions).values([
  {
    challengeId:9, //which one of these is the dance?
    imageSrc:"/run.png",
    correct:false,
    text: "Pǎo bù",
    audioSrc:"/run.mp3",
   },
   {
    challengeId:9, //which one of these is the dance?
    imageSrc:"/dance.png",
    correct:true,
    text: "Tiào wǔ",
    audioSrc:"/dance.mp3",
   },
   {
    challengeId:9, //which one of these is the dance?
    imageSrc:"/jump.png",
    correct:false,
    text: "Tiào",
    audioSrc:"/jump.mp3",
   }
 ]),

 
 await db.insert(schema.challengeOptions).values([
  {
    challengeId:10, //which one of these is the jump?
    imageSrc:"/run.png",
    correct:false,
    text: "Pǎo bù",
    audioSrc:"/run.mp3",
  },
  {
   challengeId:10, //which one of these is the jump?
   imageSrc:"/jump.png",
   correct:true,
   text: "Tiào",
   audioSrc:"/jump.mp3",
  },
  {
    challengeId:10, //which one of these is the jump?
    imageSrc:"/dance.png",
    correct:false,
    text: "Tiào wǔ",
    audioSrc:"/dance.mp3",
  },


 ]);

//END OF CHALLENGE OPTIONS TO CHOOSE ! --------------------------------------------


console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};


main();
