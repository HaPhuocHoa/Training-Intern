import { Button, Table } from "react-bootstrap";
import { useRef} from "react";
import ModalEdit from "./ModalEdit";

const DataList = (props) => {
    const buttonEditRef = useRef(null);
    const {setDataVacxin, dataVacxin} = props

    const handleDelete = (item) => {
        const index = dataVacxin.findIndex((x) => x.name === item.name);
        let newDataVacxin = [...dataVacxin];
        newDataVacxin.splice(index, 1);
        setDataVacxin(newDataVacxin);
      };

      const submitDataVacxin = (dataSubmit) => {
        setDataVacxin(dataSubmit)
      }
return (
    <>
    <ModalEdit ref={buttonEditRef} dataVacxin={dataVacxin}  submitDataVacxin={submitDataVacxin}/>
    <Table striped bordered hover>
            <thead>
              <tr>
                <th>Họ và Tên</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {dataVacxin.map((item) => (
                <tr key={item.Id}>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.email}</td>
                  <td>
                    <Button
                      onClick={() => {
                        buttonEditRef.current.openEdit(item);
                      }}
                      // data-toggle="modal"
                    >
                      Edit
                    </Button>{" "}
                    &nbsp;&nbsp;
                    <Button onClick={() => handleDelete(item)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          </>
)
}
export default DataList