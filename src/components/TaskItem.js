import { Checkbox } from "@material-ui/core";
import React, { Component } from "react";
import { MdDelete } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div className=" m-2 py-4">
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div
            className="col-2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Checkbox onClick={this.props.crossoutTask} />
          </div>
          <div className="col-8">
            <div style={{ color: "grey" }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<MdKeyboardArrowDown />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    {" "}
                    {this.props.priority === "High" ? (
                      <b>
                        {this.props.item} <FcHighPriority />
                      </b>
                    ) : (
                      <p>{this.props.item}</p>
                    )}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p> Priority: {this.props.priority}</p>
                    <p>
                      {" "}
                      <AiOutlineCalendar /> Due Date:{" "}
                      {this.props.date === "" ? (
                        <b>None</b>
                      ) : (
                        <b>{this.props.date}</b>
                      )}{" "}
                    </p>

                    <p>
                      <BsPencil /> Notes:{" "}
                      {this.props.notes === "" ? (
                        <b>None</b>
                      ) : (
                        <b>{this.props.notes}</b>
                      )}
                    </p>
                    <p>
                      Location:{" "}
                      {this.props.location === "" ? (
                        <b>None</b>
                      ) : (
                        <b>{this.props.location}</b>
                      )}
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div></div>
          </div>
          <div className="col-2">
            <MdDelete
              style={{ fontSize: "1.75rem" }}
              onClick={this.props.removeTask}
            />
          </div>
        </div>
      </div>
    );
  }
}
