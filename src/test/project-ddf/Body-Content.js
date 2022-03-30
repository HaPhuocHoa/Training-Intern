import { Button } from "react-bootstrap"

const BodyContent = () => {
    return(
        <div className="body-content">
        <div className="body-content-text">
          <h1 className="body-content-title">Tại sao lại chọn công ty DDF?</h1>
          Đội ngũ phát triển <b>Công ty TNHH Một Thành Viên Phần Mềm IONSITE</b> đã có <b>nhiều năm nghiên cứu</b> trong lĩnh vực <b>đào tạo</b>, chúng tôi luôn phối hợp với các 
          <b> chuyên gia</b> trong <b>lĩnh vực phần mềm</b> để xây dựng được sản phẩm tốt nhất phù hợp nhất với xu hướng <b>công nghệ </b>hiện nay. Chúng tôi liên tục cập nhật những tính năng
          mới nhằm <b>tăng tính tương tác</b> giữa người dùng và sản phẩm không còn nhàm chán. Giúp khách hàng có thể quản lý doanh nghiệp hiệu quả hơn.
          <br/><span className="body-content-text-sign" >Trân trọng cảm ơn!</span>
          <div ><Button className="body-content-btn">Processing...</Button></div>
        </div>
        <img src="https://i.ytimg.com/vi/zaohyB3kn58/mqdefault.jpg" className="body-content-img"/>
        
        </div>

    )
}

export default BodyContent