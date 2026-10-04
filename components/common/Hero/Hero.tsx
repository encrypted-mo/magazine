type Props = {
  title: string
  description?: string
  image?: string
}

const Hero = ({ title, description, image }: Props) => {
  return (
    <section className="relative mb-12 md:mb-16">
      {image ? (
        <div className="relative min-h-[320px] md:min-h-[420px] overflow-hidden">
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.48) 55%, rgba(8,8,8,0.12) 100%)',
            }}
          />

          <div className="relative min-h-[320px] md:min-h-[420px] flex items-end p-6 md:p-10 lg:p-14">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="h-px w-12"
                  style={{ backgroundColor: '#D4AF37' }}
                />

                <span
                  className="text-[10px] md:text-xs font-bold uppercase tracking-[0.24em]"
                  style={{ color: '#F7E7A3' }}
                >
                  The Desk
                </span>
              </div>

              <h1
                className="text-6xl md:text-8xl leading-[0.82] tracking-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#FFFFFF',
                }}
              >
                {title}
              </h1>

              {description && (
                <p
                  className="mt-6 max-w-2xl text-base md:text-lg leading-7 md:leading-8"
                  style={{ color: '#F3EFE5' }}
                >
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8 md:py-12 border-b">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-px w-12"
              style={{ backgroundColor: '#D4AF37' }}
            />

            <span
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.24em]"
              style={{ color: '#8A6500' }}
            >
              The Desk
            </span>
          </div>

          <h1
            className="text-6xl md:text-8xl leading-[0.82] tracking-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-8 text-primary-70">
              {description}
            </p>
          )}
        </div>
      )}
    </section>
  )
}

export default Hero
