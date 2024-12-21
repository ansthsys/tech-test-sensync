import { Breadcrumb, Container, Stack, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Path } from "../../routes/pathConstants";
import useFetch from "../../hooks/useFetch";

export default function BookIndexPage() {
  const { isLoading, data } = useFetch("/api/books");

  function handlerDelete(book) {
    const confirmed = confirm(`Delete book "${book.title}"?`);

    if (confirmed) {
      fetch(`/api/books/${book.id}`, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Success delete book");
        })
        .catch((err) => {
          alert("Something went wrong");
        })
        .finally(() => {
          window.location.reload();
        });
    }

    return;
  }

  return (
    <Container className="my-5">
      <Stack direction="horizontal">
        <h3 className="me-auto">Book List</h3>

        <Breadcrumb className="mt-2">
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>
      </Stack>

      <hr />

      <Stack direction="horizontal">
        <Link to={Path.BOOK.CREATE} className="btn btn-primary ms-auto mb-3">
          Create
        </Link>
      </Stack>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th className="text-center">No</th>
            <th className="text-center">Title</th>
            <th className="text-center">Author</th>
            <th className="text-center">Release Year</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading || !data ? (
            <tr>
              <td colSpan={5} className="text-center">
                Loading
              </td>
            </tr>
          ) : data.length < 1 ? (
            <tr>
              <td colSpan={5} className="text-center">
                No Data available
              </td>
            </tr>
          ) : (
            data?.map((i, idx) => {
              return (
                <tr key={idx}>
                  <td className="text-center">{idx + 1}</td>
                  <td>{i.title}</td>
                  <td>{i.author}</td>
                  <td className="text-center">{i.year}</td>
                  <td className="d-flex justify-content-center">
                    <Stack direction="horizontal" gap={3}>
                      <Link to={`/book/${i.id}`} className="btn btn-warning">
                        Edit
                      </Link>

                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handlerDelete(i)}
                      >
                        Delete
                      </button>
                    </Stack>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </Container>
  );
}
