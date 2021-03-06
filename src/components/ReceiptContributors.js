import { React, useState, useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { v4 as UUID } from "uuid";
import { ACTIONS } from "../App";

export default function ReceiptContributors({
  contributors,
  setContributors,
  dispatch,
}) {
  const columns = [
    {
      dataField: "_id",
      hidden: true,
    },
    {
      dataField: "name",
      text: "Contributors List",
      // sort: true,
    },
  ];

  const [contributor, setContributor] = useState("");
  const inputContributorRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    // check to see if contributor already exists
    var hasElement = false;
    contributors.map((c) => {
      if (c.name === contributor) {
        hasElement = true;
      }
    });

    // Add to the start of contributors
    if (!hasElement) {
      setContributors(
        (prevContributors) =>
          (prevContributors = [{ name: contributor }, ...prevContributors])
      );
    } else {
      alert("Contributor already exists");
    }

    setContributor("");
    inputContributorRef.current.focus();
  }

  // Click to delete Contributor
  const rowEvents = {
    // make sure to remove contributor from items
    onClick: (e, row, rowIndex) => {
      setContributors((prevContributor) =>
        prevContributor.filter((p) => p.name !== row.name)
      );
      dispatch({
        type: ACTIONS.REMOVE_CONTRIBUTOR,
        payload: { contributor: row },
      });
    },
  };

  return (
    <>
      {/* Receipt Contributor */}
      <Form.Group>
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="receiptContributor">
                <Form.Control
                  type="text"
                  placeholder="Contributor"
                  value={contributor}
                  ref={inputContributorRef}
                  onChange={(e) => setContributor(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="receiptAddContributor">
                {/* Contributor Add */}
                <Button type="submit" variant="dark" className="form-control">
                  Add
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Form.Group>

      {/* Contributors  */}
      <BootstrapTable
        keyField="_id"
        data={contributors}
        columns={columns}
        rowEvents={rowEvents}
        hover
        condensed
      />
    </>
  );
}
