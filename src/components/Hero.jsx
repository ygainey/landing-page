function Hero() {
    return (
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Simplify Your Boiler Troubleshooting</h2>
          <p className="mb-6">Access boiler manuals, diagnose error codes, and get real-time assistance.</p>
          <div className="flex justify-center space-x-4">
            <img src="/assets/qr-android.png" alt="Download for Android" className="w-20" />
            <img src="/assets/qr-ios.png" alt="Download for iOS" className="w-20" />
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;