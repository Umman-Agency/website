const themes = {
  default: "bg-(--color-light-dash) py-4 h-screen w-full flex flex-col items-center justify-center relative lg:float-right lg:max-w-3/4 ",
}

function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className={themes.default}>
      {children}
    </main>
  )
}

export default Main;