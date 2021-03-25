import books from "../data/book.json";
import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

const BookList = (props) => {
  return (
    <Container>
      <Row>
        {books
          .filter((item) =>
            item.title.toLowerCase().includes(props.searchString.toLowerCase())
          )
          .map((item) => (
            <Col className="mb-5" xs={12} sm={6} md={4} lg={3} key={item.asin}>
              <SingleBook book={item} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
