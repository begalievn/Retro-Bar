import { FC } from "react";
import AddAdvertising from "./adminContent/AddAdvertising";
import AddContact from "./adminContent/AddContact";
import AddEstablishment from "./adminContent/AddEstablishment";
import AddPhoto from "./adminContent/AddPhoto";
import AddVideo from "./adminContent/AddVideo";


interface AdminValueProps {
  current: string
}

const AdminValue: FC<AdminValueProps> = ({ current }) => {


  switch (current) {
    case "photo":
      return (<AddPhoto />)
    case "video":
      return (<AddVideo />)
    case "advertising":
      return (<AddAdvertising />)
    case "establishment":
      return (<AddEstablishment/>)
    case "contacts":
      return (<AddContact />)
    default:
      return (<AddPhoto />)
  }




};

export default AdminValue;