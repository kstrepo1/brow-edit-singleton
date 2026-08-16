"use client"

export default function GoogleMap() {
  return (
    <div className="map-container" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.4960507752044!2d151.16327525141713!3d-32.566292448172206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0cb172a7519155%3A0x3932ac5aef96eb4!2sThe%20Brow%20Edit!5e0!3m2!1sen!2sau!4v1786871014169!5m2!1sen!2sau"
        width="450"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="The Brow Edit Google Map Location"
      />
      <div className="mb-5"/>
    </div>
  );
}
