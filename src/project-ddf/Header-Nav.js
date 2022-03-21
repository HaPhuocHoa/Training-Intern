import { Nav } from "react-bootstrap"
const Taskbar = () => {
return (
    <div className="header-nav">
      <img className="header-nav-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTE0JQddr22mX0Pcx3-fuZK-E_DX62BG7VQ&usqp=CAU"/>
      <div className="header-nav-tabs">
    <Nav variant="pills" defaultActiveKey="/home" >
  <Nav.Item >
    <Nav.Link href="/home" className="nav-tabs">TRANG CHỦ</Nav.Link >
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" className="nav-tabs">SẢN PHẨM</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2" className="nav-tabs">KHÁCH HÀNG</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3" className="nav-tabs">TUYỂN DỤNG</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-4" className="nav-tabs">VỀ CHÚNG TÔI</Nav.Link>
  </Nav.Item>
    </Nav>
    </div>
    </div>
)
}
export default Taskbar