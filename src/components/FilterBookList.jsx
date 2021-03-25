import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import BookList from "./BookList";

class FilterBookList extends React.Component {
  state = {
    searchField: "",
  };

  render() {
    return (
      <div>
        <div className="d-flex justify-content-end mb-5">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={this.state.searchField}
              onChange={(e) => this.setState({ searchField: e.target.value })}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        <div>
          <BookList searchString={this.state.searchField} />
        </div>
      </div>
    );
  }
}

export default FilterBookList;
