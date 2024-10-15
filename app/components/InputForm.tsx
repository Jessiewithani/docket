const InputForm = () => {
  return (
    <form className="bg-white shadow-lg gap-4 py-10 flex flex-col items-center" role="form">
      <div className="flex px-10 gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm">First name</label>
          <input placeholder="ex: Jessie" className="w-[300px] p-2 border rounded-md"/>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm">Last name</label>
          <input placeholder="ex: Le" className="w-[300px] p-2 border rounded-md"/>
        </div>
      </div>
      <button className="hover:bg-gray-300 rounded-md bg-gray-200 text-black py-2 px-4 mt-4">Submit</button>
    </form>
  )
}

export default InputForm;