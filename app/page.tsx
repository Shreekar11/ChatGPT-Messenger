import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline' 

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen text-white px-2">
      <h1 className="text-4xl font-bold mb-8">ChatGPT</h1>
      <div className="text-center grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          {/* 1st card */}
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className='h-8 w-8 '/>
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className='infoText'>"Explain something to me"</p>
            <p className='infoText'>"What is the difference between dog and cat"</p>
            <p className='infoText'>"What is the color of the sun"</p>
          </div>
        </div>

        <div>
          {/* 2nd card */}
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className='h-8 w-8 '/>
            <h2>Capabalities</h2>
          </div>
          <div className="space-y-2">
            <p className='infoText'>"Change the ChatGPT Model to use"</p>
            <p className='infoText'>"Messages are stored in Firebase's Firestore"</p>
            <p className='infoText'>"Hot toast notification when ChatGPT is thinking"</p>
          </div>
        </div>

        <div>
          {/* 3rd card */}
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className='h-8 w-8 '/>
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className='infoText'>"May occasionally generate incorrect info"</p>
            <p className='infoText'>"May occasionally produce harmful or inappropriate content"</p>
            <p className='infoText'>"Limited knowledge of world and events after 2022"</p>
          </div>
        </div>
      </div>
    </main>
  );
}
