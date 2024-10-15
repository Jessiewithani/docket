const InputForm = () => {
  return (
    <form className="bg-white shadow-lg gap-4 py-10 flex flex-col items-center px-10 " role="form">
      <div className="flex gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm">First name</label>
          <input placeholder="ex: Jessie" className="w-[300px] p-2 border rounded-md"/>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm">Last name</label>
          <input placeholder="ex: Le" className="w-[300px] p-2 border rounded-md"/>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm">Phone number</label>
          <input placeholder="ex: 720-251-6378" className="w-[300px] p-2 border rounded-md"/>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm">Birthdate</label>
          <input placeholder="ex: 03/02/1990" className="w-[300px] p-2 border rounded-md"/>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
          <label className="text-sm">Email</label>
          <input placeholder="ex: jessiethanh.02@gmail.com" className="p-2 border rounded-md w-full"/>
        </div>
      <button className="hover:bg-gray-300 rounded-md bg-gray-200 text-black py-2 px-4 mt-4">Submit</button>
    </form>
  )
}

export default InputForm;