import React from 'react'

const Contact = () => {
  return (
    <div className="mt-[10%] pb-4">
        <h2 className="my-20 text-3xl pl-8">contact</h2>
        <form className="p-8 mx-[14%]">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                type="text"
                name="name"
                placeholder="Name"
                className="flex-1 p-3 bg-transparent border-b text-stone-100 focus:outline-none"
                required
                />
                <input
                type="email"
                name="email"
                placeholder="Email"
                className="flex-1 p-3 bg-transparent border-b text-stone-100 focus:outline-none"
                required
                />
            </div>
            <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 bg-transparent border text-stone-100 focus:outline-none mb-4"
                rows={5}
                required
            />
            <button
                type="submit"
                className="w-full bg-stone-300 border-stone-300 text-stone-900 hover:bg-stone-100 hover:border-stone-100 hover:text-stone-900 py-3 font-light transition"
            >
                Submit
            </button>
            </form>

    </div>
    
  )
}

export default Contact


