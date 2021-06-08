import { HeaderTab } from "../../components/admin/header-tab";
import { Container } from "../../components/atoms/container";
import { Navbar } from "../../components/navbar";

export default function BookingList() {
  return (
    <div>
      <Navbar />
      <Container>
        <HeaderTab route="booking-list" />
      </Container>
    </div>
  );
}
