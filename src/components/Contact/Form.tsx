import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const {
    register,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    e.preventDefault();
    if (!isValid) {
      e.preventDefault();
      return;
    }
    toast('Fake Message "Sent"!');
    reset();
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="mt-10 basis-1/2 md:mt-0"
    >
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <input
          className="w-full p-3 font-semibold placeholder-sky-950 bg-blue"
          type="text"
          placeholder="NAME"
          {...register("name", {
            required: true,
            maxLength: 100,
          })}
        />
        {errors.name && (
          <p className="mt-1 text-red">
            {errors.name.type === "required" && "This field is required."}
            {errors.name.type === "maxLength" && "Max length is 100 char."}
          </p>
        )}

        <input
          className="w-full p-3 mt-5 font-semibold bg-blue placeholder-sky-950"
          type="text"
          placeholder="EMAIL"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <p className="mt-1 text-red">
            {errors.email.type === "required" && "This field is required."}
            {errors.email.type === "pattern" && "Invalid email address."}
          </p>
        )}

        <textarea
          className="w-full p-3 mt-5 font-semibold bg-blue placeholder-sky-950"
          placeholder="MESSAGE"
          rows={4}
          cols={50}
          {...register("message", {
            required: true,
            maxLength: 2000,
          })}
        />
        {errors.message && (
          <p className="mt-1 text-red">
            {errors.message.type === "required" && "This field is required."}
            {errors.message.type === "maxLength" && "Max length is 2000 char."}
          </p>
        )}

        <button
          className="p-5 mt-5 font-semibold transition duration-500 bg-yellow text-deep-blue hover:bg-red hover:text-white"
          type="submit"
        >
          SEND ME A MESSAGE
        </button>
      </form>
    </motion.div>
  );
}
