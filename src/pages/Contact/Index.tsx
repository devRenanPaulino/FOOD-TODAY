import { useForm } from "react-hook-form"
import Input from "../../components/ui/Input/Input"
import { data } from "react-router-dom";

const Index = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit() {
    console.log("Dados Enviados: ", data)
  }

  return (
    <section aria-label="contato" className="container p-4 grid grid-cols-1 lg:grid-cols-2 justify-center items-start mx-auto gap-9">
      <div className="w-full border-b-2 border-primaria/60 lg:border-b-0 lg:border-r-2 h-full p-9">
        <form 
        className="flex flex-col gap-9"
        onSubmit={handleSubmit(onSubmit)}
        >
          <Input 
          label="Primeiro Nome"
          erro={errors.primeiroNome ? String(errors.primeiroNome.message) : null}
          type="text"
          {...register("primeiroNome", {
            required: 'O primeiro nome é obrigtório',
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/,
              message: "O nome não pode ter espaços ou símbolos"
            },
            minLength: {
              value: 3,
              message: "O primeiro nome deve ter no mínimo 3 caracteres"
            },
            maxLength: {
              value: 16,
              message: "O primeiro nome não deve ser maior que 16 caracteres"
            }
          })}
          />
          <Input 
          label="Sobrenome"
          erro={errors.sobrenome ? String(errors.sobrenome.message) : null}
          type="text"
          {...register('sobrenome', {
            required: "O sobrenome é obrigatório",
            pattern: {
              value: /^\S+$/,
              message: "O sobrenome não deve conter símbolos especiais"
            },
            minLength: {
              value: 3,
              message: 'O sobrenome deve ter no mínimo 3 caracteres'
            },
            maxLength: {
              value: 30,
              message: "O sobrenome não deve passar de 30 caracteres"
            }
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
              message: "Introduza um formato de email válido (ex: nome@email.com)"
            }
          })}
          />

          <input 
          type="textarea" 
          />
        </form>
      </div>

      <div className="flex flex-col gap-3 pt-9">
        <h2 className="text-3xl font-bold ">Endereço</h2>
        <p>Avenida Não Sei Onde - São Paulo - SP - 00000-000</p>
        <p>Rua Não Sei Onde - Bahia - BA - 00000-000</p>

        <h2  className="text-3xl font-bold ">Informações</h2>
        <p>foodtoday.contact@gmail.com</p>
      </div>
    </section>
  )
}

export default Index