import { Form } from "@inertiajs/react";
import Main from "@/components/dashboard/Main";
import "@/lib/dashboard/dashboard.css";


const branding = {
  legend: <span className="text-32px">&quot;Menos gestión, <i><b>más inspiración</b></i>&quot;</span>,
  welcomeMessage: <span><i>Bienvenido</i> a bordo</span>,
}

const local = {
  email: "correo.bonito@gmail.com"
}

function Login() {

  return (
    <>
      <aside className="lg:float-left max-w-1/4 h-screen bg-black">
        <p className="text-white">
          {branding.legend}
        </p>
      </aside>

      <Main>
        <h3 className="text-5xl font-bold">{branding.welcomeMessage}</h3>
        <Form action="/login" method="POST" className="my-6 py-4">
          <label htmlFor="user.email" className="font-bold">
            Correo
            <input id="" name="user.email" type="email" placeholder={local["email"]} className="w-full" />
          </label>
        </Form>
      </Main>
    </>)
}

export default Login;