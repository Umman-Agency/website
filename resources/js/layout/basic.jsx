import Footer from "@/components/Footer";

function BasicLayout({ children }) {

  return <>
    {children}
    <Footer/>
  </>
}

export default BasicLayout;