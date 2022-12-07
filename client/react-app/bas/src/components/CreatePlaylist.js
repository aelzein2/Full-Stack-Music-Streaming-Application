import React from 'react'

const CreatePlaylist = () => {
  return (
    <div className='my-4 p-5 bg-[#330404] rounded-xl'>
        <form>
            <div className="mb-6">
                <label htmlFor="listName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Playlist Name</label>
                <input type="text" id="listName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#330404] dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Enter a name" required />
            </div>
            <div className="mb-6">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Playlist Description</label>
                <input type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#330404] dark:focus:ring-red-500 dark:focus:border-red-500" />
            </div>
            <div className="mb-6">
                <label htmlFor="tracklist" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tracklist</label>
                <input type="text" id="tracklist" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#330404] dark:focus:ring-red-500 dark:focus:border-red-500" placeholder='[2,3,221]' required />
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="visibility" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-red-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-red-500 dark:ring-offset-gray-800" required />
                </div>
                <label htmlFor="visibility" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Private</label>
            </div>
            <button type="submit" className="text-[#330404] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-white hover:bg-red-400">Submit</button>
        </form>
    </div>
  )
}

export default CreatePlaylist