import React from 'react';

function Header() {
  return (
    <header className="bg-black bg-opacity-0 text-green-400 p-6">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Claudia Stanciu</h1>
        <p className="text-green-200 mt-2">
          Associate Consultant | SWE | Java
        </p>
        <div className="mt-4">
          <p>I'm Claudia, a driven Associate Consultant fresh out of Version 1's Graduate Digital Skills Academy. There, I mastered front-end and back-end programming, business analysis, and UI/UX design. 
            <br></br>Before the academy I completed three intensive eight-week courses to become proficient in Python, SQL, and Web Development, which includes HTML, CSS, and JavaScript. My hard work paid off when I won the final projects in both the Web Development and Python courses. 
            <br></br>My skills extend to user-centered design, particularly in UI design, where I'm proficient with Canva and Figma. This allows me to transform ideas into visually appealing and user-friendly designs effortlessly. 
            <br></br>My background is diverse, with a Bachelor of Science in Psychology and a Master's of Science in Forensic Psychology, and experience in the social care sector. This unique blend of skills and experience makes me a versatile professional ready to contribute meaningfully to any project.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;