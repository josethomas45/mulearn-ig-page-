import React from 'react';

interface Section {
  title: string;
  description: string;
  resources: string[];
  proofOfWork: string[];
}

const sections: Section[] = [
  {
    title: "Foundational Understanding",
    description: "At the heart of every great game lies a solid foundation. Whether you're a beginner or someone with a lot of experience, understanding the building blocks of game development is essential. This means delving into the core mechanics that make games tick, like player interaction, objectives, and game flow. In this phase, we'll explore the tools and systems that power Unreal Engine offers, such as user-friendly Blueprint system that lets you create logic without needing to write code. We'll also familiarize ourselves with the engine's interface, its capabilities, and its vast library of resources. Most of all, this phase is about getting comfortable with game development concepts and understanding the essential tools and materials. This isn't just about technical skills; it's about getting comfortable with the process of game creation, feeling confident in your ability to transform ideas into reality, and building the mindset that turns challenges into creative opportunities.",
    resources: [
      "Introduction to game development",
      "Unreal Engine 5 Overview"
    ],
    proofOfWork: [
      "Research the basis of game development",
      "Install Unreal Engine 5 and explore the interface"
    ]
  },
  {
    title: "Core Engine Skills",
    description: "Once you've grasped the basics, it's time to dive deeper into Unreal Engine's powerful features and learn how to use them to bring your ideas to life. Mastering the core engine skills is where the magic happens - where you turn your visions into interactive, playable experiences. In this stage, we'll focus on learning how to work with key systems like materials, lighting, and post-processing. These are the elements that are usually starting your first launch. You'll become familiar with the essentials like file types and asset management, which will set you up for powerful scripting languages, particularly Blueprints, which allow you to add interactivity without needing complex coding knowledge. We'll explore the physics engine to make your games feel dynamic and alive using elements like collisions, gravity, and real-time effects to make interactions smooth and believable. Additionally, you'll gain expertise in lighting and rendering techniques to create the perfect atmosphere, whether it's a bright sunny day or a moody night scene. By mastering these core skills, you'll be ready to create fully functional game prototypes, and your technical understanding will evolve from basic to expert, giving you the freedom to start anything from simple prototypes to elaborate game worlds. Think of this stage as learning how to work with the engine's full potential, setting you up for success in more advanced development phases.",
    resources: [
      "Project setup and navigation",
      "Scene creation",
      "Lighting and Rendering/Post processing",
      "Blueprints (Visual Scripting)"
    ],
    proofOfWork: [
      "Set up a simple project in Unreal Engine 5",
      "Design a basic game level layout",
      "Experiment with lighting settings and post-processing",
      "Create basic interactions using Blueprints"
    ]
  },
  {
    title: "Programming and Scripting",
    description: "Understanding programming fundamentals...",
    resources: ["Programming basics", "Blueprint advanced concepts"],
    proofOfWork: ["Complete basic programming exercises", "Create interactive elements"]
  },
  {
    title: "3D Modeling and Animation",
    description: "Learn the fundamentals of 3D modeling...",
    resources: ["3D modeling basics", "Animation fundamentals"],
    proofOfWork: ["Create basic 3D models", "Implement basic animations"]
  },
  {
    title: "Physics and Special Effects",
    description: "Master the physics engine and special effects...",
    resources: ["Physics system overview", "Particle systems"],
    proofOfWork: ["Implement physics-based interactions", "Create particle effects"]
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive user interfaces...",
    resources: ["UI design principles", "UX best practices"],
    proofOfWork: ["Design game menus", "Implement UI systems"]
  },
  {
    title: "Optimization and Debugging",
    description: "Learn to optimize and debug your game...",
    resources: ["Performance optimization", "Debugging techniques"],
    proofOfWork: ["Optimize game performance", "Debug common issues"]
  },
  {
    title: "Publishing and Testing",
    description: "Prepare your game for release...",
    resources: ["Testing methodologies", "Publishing guidelines"],
    proofOfWork: ["Conduct playtesting", "Prepare for publication"]
  },
  {
    title: "Portfolio and Community",
    description: "Build your portfolio and engage with the community...",
    resources: ["Portfolio development", "Community engagement"],
    proofOfWork: ["Create portfolio pieces", "Participate in community events"]
  },
  {
    title: "Engagement",
    description: "Engage with the broader game development community...",
    resources: ["Community platforms", "Networking opportunities"],
    proofOfWork: ["Join development communities", "Share your work"]
  }
];

const Sidebar = () => (
  <div className="w-64 bg-white py-4 px-6 border-r font-noto">
    <div className="mb-6">
      <h2 className="text-[#666] text-sm font-medium">Contents</h2>
    </div>
    <nav>
      <ul className="space-y-3 text-sm">
        {sections.map((section, index) => (
          <li key={index} className="text-[#666] hover:text-orange-500 cursor-pointer">
            {section.title.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default function Page() {
  return (
    <div className="flex min-h-screen font-noto bg-white">
      <Sidebar />
      <main className="flex-1 px-12 py-8">
        {sections.map((section, index) => (
          <section key={index} className="mb-20">
            <h1 className="text-[28px] font-medium text-[#F47521] mb-4 font-roboto">
              {section.title}
            </h1>
            
            <p className="mb-6 text-[#666] leading-relaxed text-[15px]">
              {section.description}
            </p>
            
            <div className="border border-[#3B82F6] rounded-lg mb-4">
              <div className="bg-[#3B82F6] py-2 px-4">
                <h3 className="text-white font-medium text-sm">Resources</h3>
              </div>
              <div className="p-4 bg-[#EFF6FF]">
                <ul className="list-disc ml-4 space-y-2 text-[#666] text-sm">
                  {section.resources.map((resource, i) => (
                    <li key={i}>{resource}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-[#F47521] rounded-lg mb-6">
              <div className="bg-[#F47521] py-2 px-4">
                <h3 className="text-white font-medium text-sm">Proof of Work</h3>
              </div>
              <div className="p-4 bg-[#FFF7F3]">
                <ul className="list-disc ml-4 space-y-2 text-[#666] text-sm">
                  {section.proofOfWork.map((work, i) => (
                    <li key={i}>{work}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button className="px-8 py-1.5 bg-[#F47521] text-white rounded text-sm">
                Skip
              </button>
              <button className="px-8 py-1.5 border border-[#F47521] text-[#F47521] rounded text-sm">
                Submit
              </button>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
