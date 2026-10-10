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
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.48) 55%, rgba(8,8,8,0.12) 100%)',
            }}
          />

          <div className="relative flex min-h-[320px] items-end p-6 md:min-h-[420px] md:p-10 lg:p-14">
            <div className="max-w-4xl">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="h-px w-12"
                  style={{ backgroundColor: '#D4AF37' }}
                  aria-hidden="true"
                />

                <span
                  className="text-[10px] md:text-xs font-bold uppercase tracking-[0.24em]"
                  style={{ color: '#F7E7A3' }}
                >
                  The Desk
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl leading-tight tracking-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#FFFFFF',
                }}
              >
                {title}
              </h1>

              {description && (
                <p
                  className="mt-5 max-w-2xl text-sm md:text-base leading-7 md:leading-8"
                  style={{ color: '#F3EFE5' }}
                >
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="border-b py-8 md:py-10">
          <div className="mb-4 flex items-center gap-3">
            <span
              className="h-px w-12"
              style={{ backgroundColor: '#D4AF37' }}
              aria-hidden="true"
            />

            <span
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.24em]"
              style={{ color: '#8A6500' }}
            >
              The Desk
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl leading-tight tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {title}
          </h1>

          {description && (
            <p className="mt-4 max-w-2xl text-sm md:text-base leading-7 text-primary-70">
              {description}
            </p>
          )}
        </div>
      )}
    </section>
  )
}

export default Hero
