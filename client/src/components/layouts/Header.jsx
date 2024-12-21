import { Container, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Path } from "../../routes/pathConstants";

export default function Header() {
  return (
    <Navbar expand="sm" className="bg-white border" sticky="top">
      <Container>
        <Stack gap={1} direction="horizontal">
          <img src="/vite.svg" alt="Logo" />
          <Navbar.Brand as={Link} to={Path.HOME}>
            Web Book
          </Navbar.Brand>
        </Stack>
      </Container>
    </Navbar>
  );
}
