import Header from '../components/Header/header'

export default function Home() {
  return (
    <>
    <Header />
    <div className='grid grid-cols-2'>
      <div className='text-white py-40  ms-30'>
        <h1 className='font-bold text-5xl max-w-150 mb-12'>AI Your Business Can Run With</h1>
        <p className=' text-xl '>Grammarly Business combines advanced AI communication assistance with the collective knowledge and style of your organization to help teams communicate more effectively. It provides real-time writing suggestions for clarity, tone, and professionalism—helping ensure that every message reflects your brand and goals.</p>
        <p className='text-xl font-sans'>Whether you're collaborating on emails, documents, or messages, Grammarly Business works where your team already does—like Google Docs, Slack, Outlook, and more. Experience smarter, faster communication with the intelligence you need, exactly when and where you need it.</p>

        <button className="bg-white hover:bg-gray-500 text-black rounded-md p-4 cursor-pointer w-50 transition-all duration-200 mt-10 font-sans">Start a free trial</button>
        

      </div>
    <img src='./design.svg' className='w-200  '></img>
    </div>

    </>
  );

}
