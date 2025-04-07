import {current_year} from '@/lib/date_time';

const navigation = {
    social: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/people/Western-Rockies-Construction-LLC/61570162684745/#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      }
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <div className="mt-16 flex justify-center gap-x-10">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
          </div>
          <p className="mt-10 text-center text-sm/6 text-gray-400">&copy; {current_year()} Western Rockies Construction, LLC. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  