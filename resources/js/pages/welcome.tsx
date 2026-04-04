import { Form } from "@inertiajs/react";
import Main from "@/components/dashboard/Main";
import { Link, usePage } from "@inertiajs/react";
import "../../css/dashboard.css";


const branding = {
  legend: <span>&quot;Menos gestión,<br /><i><b>más inspiración</b></i>&quot;</span>,
  welcomeMessage: <span><i>Bienvenido</i> a bordo</span>,
}

const local = {
  email: "correo.bonito@gmail.com",
  password: "Tú secreto 🤐",
}

function Login() {

  const { status } = usePage().props;

  return (
    <>
      <aside className="lg:float-left max-w-1/4 h-screen bg-black py-6 px-8">
        <Link href="/welcome" className="text-2xl font-bold text-white tracking-wider">
          <img src="assets/logo_umman.png" alt="Logo de Umman" className="h-auto w-auto" /> {/* Changed h-10 to h-5 */}
        </Link>


        <h3 className="text-white text-[32px] my-6">
          {branding.legend}
        </h3>
      </aside>

      <Main>
        <h3 className="text-5xl font-bold">{branding.welcomeMessage}</h3>
        <Form action="/login" method="POST" className="my-6 py-4 inert:opacity-50 inert:pointer-events-none" disableWhileProcessing>
          {
            ({
              errors,
              hasErrors,
              wasSuccessful,
            }) => (
              <>
                <label htmlFor="email-login" className="font-bold">
                  Correo
                  <input id="email-login" name="email" type="email" placeholder={local["email"]} className="w-full" />
                </label>
                <label htmlFor="password-login" className="font-bold">
                  Contraseña
                  <input id="password-login" name="password" type="password" placeholder={local["password"]} className="w-full" />
                </label>
                <input type="submit" value="Ingresar" className="cursor-pointer" />
              </>
            )
          }
        </Form>
      </Main>
    </>)
}

export default Login;