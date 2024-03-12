import React, { useState } from 'react';

interface Milestone {
  type: string;
  date: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  companyUrl?: string;
}

interface Skill {
  name: string;
  value: number;
}

const FunSkills = () => {

  return (
    <div>
    <p><i>This is a text-based AI adventure exploring different parts of my CV, just to lighten it up a bit. Only available in English for now, German support will follow. :)</i></p><br></br>
    <p>Welcome, brave soul, to the Chronicles of Data and Discovery! Your journey begins at the threshold of the Infinite Archive, an endless library brimming with untold stories, mysterious data patterns, and the essence of countless cultures. Here, every book, every byte, holds a piece of the puzzle that is the human experience.</p><br></br>
    <p>As you stand ready to embark on this quest, you must first define your role in this grand adventure. Will you be:</p><br></br>
    <p>A <b>Data Weaver</b>, with the keen ability to uncover hidden narratives within numbers, transforming data into compelling tales of insight and enlightenment?</p><br></br>
    <p>A <b>Cultural Navigator</b>, whose passion for exploring the depths of human culture brings to light the rich, diverse stories etched in the Archive&apos;s corners?</p><br></br>
    <p>Or perhaps a <b>Synthesis Visionary</b>, a unique blend of analyst and empath, someone who bridges the realms of data and culture, weaving together the digital and the humanistic into a harmonious narrative?</p><br></br>
    <p>Choose your path wisely, for it will shape the adventures that lie ahead and the secrets you unveil within the Infinite Archive. Please type one of the three roles stated above.</p><br></br>
  
    <iframe
    allow="microphone;"
    width="100%"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/929259d6-914c-4102-8cde-dccf27461218">
</iframe>
</div>
  );
};

export default FunSkills;
