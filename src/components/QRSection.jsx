function QRSection() {
    return (
      <section id="qr-codes" className="py-16 bg-blue-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Download the App</h2>
          <div className="flex justify-center space-x-8">
            <div>
              <img src="/assets/qr-android.png" alt="Android QR Code" className="w-32 mx-auto" />
              <p>Android</p>
            </div>
            <div>
              <img src="/assets/qr-ios.png" alt="iOS QR Code" className="w-32 mx-auto" />
              <p>iOS</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default QRSection;