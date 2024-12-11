const Features = () => {
    const features = [
      {
        title: 'Real-time Monitoring',
        description: 'Track system performance with live insights.',
        icon: '📊',
      },
      {
        title: 'AI-powered Insights',
        description: 'Predict and resolve issues automatically.',
        icon: '🤖',
      },
      {
        title: 'Custom Dashboards',
        description: 'Create personalized views to monitor key metrics.',
        icon: '📋',
      },
    ];
  
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-primary">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded hover:shadow-xl transition transform hover:-translate-y-2">
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  