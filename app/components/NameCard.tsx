import { InputValues } from "../page";

interface Props {
  savedUserInfo: InputValues;
}

const NameCard: React.FC<Props> = ({ savedUserInfo }) => {
  return (
    <div className="flex flex-col gap-4 bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4 w-[500px]">
      <div className="flex items-center justify-between">
        <h3 className="text-sm">Username</h3>
        <div className="flex gap-1">
          <h1 className="text-black">{`${savedUserInfo.firstName}`}</h1>
          <h1 className="text-black">{`${savedUserInfo.lastName}`}</h1>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-sm">Email</h3>
        <div>
          <h1 className="text-black">{`${savedUserInfo.email}`}</h1>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-sm">Date of birth</h3>
        <div>
          <h1 className="text-black">{`${savedUserInfo.birthdate}`}</h1>
        </div>

      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-sm">Phone Number</h3>
        <div>
          <h1 className="text-black">{`${savedUserInfo.phoneNumber}`}</h1>
        </div>
      </div>
    </div>
  );
}

export default NameCard;