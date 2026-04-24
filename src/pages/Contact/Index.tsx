import { useForm } from "react-hook-form";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";

import enter from "../../assets/svg/login.svg"
import type { ContactFormData } from "../../domain/types/Contact";

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({ mode: "onChange"  });

  const onSubmit = (formData: ContactFormData) => {
    console.log("Dados Enviados: ", formData);
    reset()
  }

  return (
    <section
      aria-label="contato"
      className="container p-4 grid grid-cols-1 lg:grid-cols-2 justify-center items-start mx-auto gap-9"
    >
      <div className="w-full border-b-2 border-primaria/60 lg:border-b-0 lg:border-r-2 h-full p-9">
        <form className="flex flex-col gap-9" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Primeiro Nome"
            erro={
              errors.primeiroNome ? String(errors.primeiroNome.message) : null
            }
            type="text"
            {...register("primeiroNome", {
              required: "O primeiro nome é obrigtório",
              pattern: {
                value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/,
                message: "O nome não pode ter espaços ou símbolos",
              },
              minLength: {
                value: 3,
                message: "O primeiro nome deve ter no mínimo 3 caracteres",
              },
              maxLength: {
                value: 16,
                message: "O primeiro nome não deve ser maior que 16 caracteres",
              },
            })}
          />
          <Input
            label="Sobrenome"
            erro={errors.sobrenome ? String(errors.sobrenome.message) : null}
            type="text"
            {...register("sobrenome", {
              required: "O sobrenome é obrigatório",
              pattern: {
                value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
                message: "O sobrenome não deve conter símbolos especiais",
              },
              minLength: {
                value: 3,
                message: "O sobrenome deve ter no mínimo 3 caracteres",
              },
              maxLength: {
                value: 30,
                message: "O sobrenome não deve passar de 30 caracteres",
              },
            })}
          />
          <Input
            label="Email"
            erro={errors.email ? String(errors.email.message) : null}
            type="text"
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:
                  "Introduza um formato de email válido (ex: nome@email.com)",
              },
            })}
          />

          <textarea 
          className="border-b-2 border-primaria outline-none focus:ring-0 focus:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_4px_8px_-2px_rgba(0,0,0,0.1)] focus:shadow-primaria/40 px-4 py-2"
          rows={5}
          placeholder="Escreva a sua sugestão aqui"
          id="sugestao"
          {...register("sugestao", {required: "Descreva a sua sugestão para nossa equipe"})}
          />
          {errors.sugestao && <span className="text-xs text-primaria">{String(errors.sugestao.message)}</span>}

          <div className="flex gap-2 items-center">
            <input 
            type="checkbox"
            id="newsletter" 
            className="appearance-none border-2 border-primaria w-4 h-4 rounded c checked:border-primaria checked:bg-primaria cursor-pointer"
            {...register("newsletter")}
            />
            <label htmlFor="newsletter" className="text-sm">Eu desejo receber o Newsletter</label>
          </div>

          <Button 
          variant="secundary"
          type="submit"
          icon={<img src={enter}/>}
          >
            Enviar Sugestão
          </Button>
        </form>
      </div>

      <div className="flex flex-col gap-3 pt-9">
        <h2 className="text-3xl font-bold ">Endereço</h2>
        <p>Avenida Não Sei Onde - São Paulo - SP - 00000-000</p>
        <p>Rua Não Sei Onde - Bahia - BA - 00000-000</p>

        <h2 className="text-3xl font-bold ">Informações</h2>
        <p>foodtoday.contact@gmail.com</p>
      </div>
    </section>
  );
};

export default Index;
