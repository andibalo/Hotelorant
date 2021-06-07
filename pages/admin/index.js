import { HeaderTab } from "../../components/admin/header-tab";
import { Container } from "../../components/atoms/container";
import { Navbar } from "../../components/navbar";

export default function AdminHome() {
  return (
    <div>
      <Navbar />
      <Container>
        <HeaderTab route="home" />
      </Container>
    </div>
  );
}
