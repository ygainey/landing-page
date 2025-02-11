function Features() {
    const features = [
      { title: "Error Code Diagnostics", description: "Identify boiler error codes instantly." },
      { title: "Manual Integration", description: "Access boiler manuals on the go." },
      { title: "Real-Time Assistance", description: "Get expert solutions in real-time." },
    ];
  
    return (
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white shadow-md rounded-md text-center">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Features;