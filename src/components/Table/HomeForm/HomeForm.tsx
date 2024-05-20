"use client";
import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  studentName: string;
  dob: string;
  gender: GenderEnum;
  community: string;
  physicallyChallenged: boolean;
  residentialAddress: string;
  mobileNo: string;
  email: string;

  parentStatus: string;
  // Add other fields similarly
}

const HomeForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="overflow-x-auto rounded-md border justify-center p-10 font-trebuchet">
      <h2>APPLICATION FOR FINANCIAL AID FOR EDUCATION</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label>1. Name of the student / மாணவர் பெயர்</label>
          <input {...register("studentName")} />
        </div>
        <div className="">
          <label>2. Date of birth / பிறந்த தேதி</label>
          <input type="date" {...register("dob")} />
        </div>
        <div className="">
          <label>3. Gender / பாலினம்</label>
          <select {...register("gender")}>
            <option value={GenderEnum.female}>Female</option>
            <option value={GenderEnum.male}>Male</option>
            <option value={GenderEnum.other}>Other</option>
          </select>
        </div>
        <div className="">
          <label>4. Community / சமூகம் </label>
          <select {...register("gender")}>
            <option value={GenderEnum.female}>Female</option>
            <option value={GenderEnum.male}>Male</option>
            <option value={GenderEnum.other}>Other</option>
          </select>
        </div>
        {/* Add other form fields */}
        <input type="submit" />
      </form>
    </div>
  );
};

export default HomeForm;
