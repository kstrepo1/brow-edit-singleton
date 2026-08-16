import GoogleMap from "../about/googleMap"

export default function MapandNumber(){
    return(
                <section className="my-2 w-full">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="w-full flex-1">
                      <GoogleMap />
                    </div>
        
                    <div className=" flex-1 text-sm text-right leading-relaxed">
                      <h2 className="text-right text-2xl font-semibold">
                        Visit the studio
                      </h2>
                      <p className="text-gray-700 text-right dark:text-gray-300">
                        You&apos;ll find The Brow Edit inside Haus of Artistry, in the
                        centre of Singleton.
                      </p>
        
                      <address className="mt-4 not-italic">
                        <div className="font-semibold">The Brow Edit Studio</div>
                        <div className="mt-1 text-gray-700 dark:text-gray-300">
                          84 John St
                          <br />
                          Singleton NSW 2330
                        </div>
                        <a
                          href="tel:0421197333"
                          className="mt-2 inline-block text-[var(--linkHighlighted)] hover:underline"
                        >
                          0421 197 333
                        </a>
                      </address>
        
                      <a
                        href="https://www.google.com/maps/dir//The+Brow+Edit,+84+John+St,+Singleton+NSW+2330/@-37.7950689,144.8841253,2711m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x6b0cb172a7519155:0x3932ac5aef96eb4!2m2!1d151.1657893!2d-32.5663148"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-[var(--linkHighlighted)] hover:underline"
                      >
                        Get directions
                      </a>
                    </div>
                  </div>
                </section>
    )
}