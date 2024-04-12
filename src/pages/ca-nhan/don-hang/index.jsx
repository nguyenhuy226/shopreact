import { ListOrder } from "@/components/ListOrder";
import OrderCard from "@/components/OrderCard";
import { Tab } from "@/components/Tab";
import { useQuery } from "@/hooks/useQuery";
import { orderService } from "@/services/order";
import { Badge } from "antd";

export default function Order() {
  const { data: pendingCount } = useQuery({
    queryFn: () => orderService.getCount("?status=pending"),
  });
  const { data: confirmCount } = useQuery({
    queryFn: () => orderService.getCount("?status=confirm"),
  });
  const { data: shippingCount } = useQuery({
    queryFn: () => orderService.getCount("?status=shipping"),
  });
  return (
    <Tab defaultAcitve="all" removeOnDeActive>
      <div className="nav mb-10">
        <Tab.Title value="all">Tất cả đơn</Tab.Title>
        <Badge count={pendingCount?.count}>
          <Tab.Title value="pending">Đang xử lý</Tab.Title>
        </Badge>
        <Badge count={confirmCount?.count}>
          <Tab.Title value="confirm">Đã xác nhận</Tab.Title>
        </Badge>
        <Badge count={shippingCount?.count}>
          <Tab.Title value="shipping">Đang vận chuyển</Tab.Title>
        </Badge>
        <Tab.Title value="finished">Đã giao</Tab.Title>
        <Tab.Title value="cancel">Đã hủy</Tab.Title>
      </div>
      <div className="tab-content">
        <Tab.Content value="all">
          <ListOrder />
        </Tab.Content>
        <Tab.Content value="pending">
          <ListOrder status="pending" />
        </Tab.Content>
        <Tab.Content value="confirm">
          <ListOrder status="confirm" />
        </Tab.Content>
        <Tab.Content value="shipping">
          <ListOrder status="shipping" />
        </Tab.Content>
        <Tab.Content value="finished">
          <ListOrder status="finished" />

          {/* <div className="flex items-center flex-col gap-5 text-center">
            <img width={200} src="/img/empty-order.png" alt />
            <p>Chưa có đơn hàng nào</p>
          </div> */}
        </Tab.Content>
        <Tab.Content value="cancel">
          <ListOrder status="cancel" />
        </Tab.Content>
      </div>
      {/* Pagination */}
      <nav className="d-flex justify-content-center justify-content-md-end mt-10">
        <ul className="pagination pagination-sm text-gray-400">
          <li className="page-item">
            <a className="page-link page-link-arrow" href="#">
              <i className="fa fa-caret-left" />
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              6
            </a>
          </li>
          <li className="page-item">
            <a className="page-link page-link-arrow" href="#">
              <i className="fa fa-caret-right" />
            </a>
          </li>
        </ul>
      </nav>
    </Tab>
  );
}
