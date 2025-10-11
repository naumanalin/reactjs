import ChatBox from "./_components/ChatBox"


const CreateNewTrip = () => {
  return (
    <section className="wrapper py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Chat Box */}
        <article className="">
            <ChatBox/>
        </article>

        {/* 2. Map and Trip Plan to Display */}
        <div className="">
            map and trip
        </div>
    </section>
  )
}

export default CreateNewTrip