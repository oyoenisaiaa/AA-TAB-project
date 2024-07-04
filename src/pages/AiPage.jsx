import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function AiPage() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-lg font-semibold text-blue-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Oops! </h1>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">It seems the TAB AI team are taking a break. </h2>
        <p className="mt-6 text-base leading-7 text-gray-600">We have been working hard to build a recommendation system that will give you the best personalized experience..</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <HashLink to="/#footer-section" className="text-base text-start font-semibold text-gray-900 hover:text-blue-600">
            Subscribe to our newsletter to get notified of our product launch <span aria-hidden="true">&rarr;</span>
            </HashLink>
        </div>
      </div>
    </main>
  );
}



// import React from 'react';

// const AIRecommendation = () => {
//   return (
//     <div className="ai-recommendation-container">
//       <iframe 
//         src="https://take-a-break-movie-app.streamlit.app/" 
//         title="AI Movie Recommendation"
//         width="100%"
//         height="600px"
//         style={{ border: 'none' }}
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default AIRecommendation;
