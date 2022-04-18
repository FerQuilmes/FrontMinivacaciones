import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />
      <input {...register("exampleRequired", { required: true })} />
      <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
      <input type="number" placeholder="Cedula" {...register("Cedula", {required: true, maxLength: 9})} />
      <input type="tel" placeholder="Telefono" {...register("Telefono", {required: true, maxLength: 15})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="datetime" placeholder="Fecha" {...register("Fecha", {required: true})} />
      <select {...register("Respuesta", { required: true })}>
        <option value="En una pileteada">En una pileteada</option>
        <option value=" Asado con amig@s"> Asado con amig@s</option>
        <option value=" En una fiesta/encuentro"> En una fiesta/encuentro</option>
        <option value=" En mi casa"> En mi casa</option>
      </select>
      <input type="checkbox" placeholder="Info" {...register("Info", {required: true})} />
      <input type="submit" />
    </form>
  );
}