import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"

export const metadata: Metadata = {
  title: "Diet Training AI | ditrai.com",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://ditrai.com/",
    images: [
      {
        width: 1024,
        height: 1024,
        url: "https://raw.githubusercontent.com/ditrai/ditrai.com/main/.github/assets/ditrai-logo.jpeg",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Diet Training AI
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Personalized AI-Powered Diet and Training Plans
            </p>
            <Button href="mailto:hello@ditrai.com" intent="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="h-15 w-15 mb-4 flex items-center justify-center rounded-full bg-primary-100 p-2.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
