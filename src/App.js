import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/common/Header/Header.component';
import { MyRoute } from './MyRoute';
// import { ToastContainer } from 'react-toastify'
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      {/* <ToastContainer position='top-right' /> */}
      <Toaster />
      <MyRoute />
    </>
  )
}

export const Apps = App
/*
component:
-> component is the basic building block of react
-> component is used to create a user interface
-> component will always return single html node


two ways of writing a component:
1. functional component
2. class component


types of component:
1. stateless component (functional component)
2. statefull component (class based component)


state and props:
state => data within a component
props => incoming data


*/
