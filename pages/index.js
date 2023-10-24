import Head from 'next/head';
import Header from "../src/components/Header/Header";
import Menu from "../src/components/Menu/Menu";
import Footer from "../src/components/Footer/Footer";
import Content from "../src/components/Content/Content";
function IndexPage() {
    return (
      <div>
        <Head>
          <title>My page title</title>
        </Head>
        <div>
          <Header/>
          <div className="block">
            <div className="wrapper">
              <div className="wrapper-block">
                <Menu/>
                <Content/>
              </div>
            </div>
          </div>
          
          <Footer/>
        </div>
      </div>
    )
}
   
export default IndexPage