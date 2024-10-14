const InputForm = () => {
  return (
    <form className="bg-white shadow-lg gap-4 py-10 flex flex-col items-center">
      <div className="flex flex-col gap-1 px-10">
        <label className="text-sm">First name</label>
        <input placeholder="ex: Jessie Le" className="w-[400px] p-2 border rounded-md"/>
      </div>
      <button className="hover:bg-gray-300 rounded-md bg-gray-200 text-black py-2 px-4 mt-4">Submit</button>
    </form>
  )
}

export default InputForm;