const myArray = [
  ["Rustic ConsoleMath (Rust)", "Final rewrite of the original ConsoleMath C# and C++ app. Write a fully random math equation, even without using any numbers. Currently supports all Arithmetic operators"],
  ["Denk-PlusPlus (C++)", "Advanced rewrite of the OG Denk encryptor in C# with more functionality including buffering and decentralization (unstable) "],
  ["Denk-Algorithm (C#)", "The OG Denk Algorithm, a simple encryptor that takes an input (abcc), creates for each letter a 'key', then outputs it (abcc -> asfbcdcd). Each key has a custom size and can go as high as a million letters per key."],
];

export default function ProjectsModule() {
  return (
    <div className="flex bg-background-color justify-center text-center flex-col mt-96 ">
      <div className="text-accent-color text-5xl font-hack font-bold mb-12">
        Noteworthy
        <span className="text-white"> Projects</span>
      </div>
      <div className="flex flex-wrap justify-center flex-row">
      {myArray.map((item, index) => (
        <div key={index} className="w-72   p-4">
          <div className="bg-foreground-color shadow-md rounded-md p-4">
            <h2 className="text-white font-medium text-lg">{item[0]}</h2>
            <p className="text-gray-400 mt-2">{item[1]}</p>
            
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
