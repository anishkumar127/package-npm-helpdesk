import "./assets/Part_Three.css";
import * as React from "react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Icon } from "@fluentui/react";
initializeIcons();

function Part_Three() {
  return (
    <div>
      <section className={"sec"}>
        <div className={"header"}>
          <div>
            <h4>Contact Info</h4>
          </div>
          <div className={"icon"}>
            <Icon iconName="SkypeMessage" />
            <Icon iconName="Phone" />
            <Icon iconName="Edit" />
            <Icon iconName="SkypeMinus" />
          </div>
        </div>
        <div className={"profile"}>
          <div className={"image"}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s"
              alt="Profile image"
            />
          </div>
          <div className={"bio"}>
            <b>Abhishek H U INT</b>
            <p>Testing</p>
            <p>Technical Specialist</p>
          </div>
        </div>
        <div className={"contact"}>
          <div className={"mail"}>
            <p>
              <Icon iconName="Mail" style={{ color: "#025c5f" }} />
            </p>
            <p>helloworld@gmail.com</p>
          </div>
          <div className={"Phone"}>
            <p>
              <Icon iconName="Phone" style={{ color: "#025c5f" }} />
            </p>
            <p>1111111111</p>
          </div>
        </div>
        <hr />
        <div className={"assignment"}>
          <p style={{ width: "90%", margin: "auto" }}>
            <b>Asset Assigned:</b>
          </p>
          <div className={"asset1"}>
            <p>
              <b>Asset Name Iphone 02</b>
            </p>
            <p>
              <b>
                Assset Id <span>AST1002</span>
              </b>
            </p>
          </div>
          <div className={"asset1"}>
            <p>
              <b>Asset Name 909</b>
            </p>
            <p>
              <b>
                Assset Id <span>AST1018</span>
              </b>
            </p>
          </div>
          <div className={"asset1"}>
            <p>
              <b>Asset Name Iphone 1000</b>
            </p>
            <p>
              <b>
                Assset Id <span>AST1019</span>
              </b>
            </p>
          </div>
        </div>
        <hr />
        <div className={"tickets"}>
          <p style={{ width: "90%", margin: "auto" }}>
            <b>Recent Tickets:</b>
          </p>
          <div className={"ticket"}>
            <p>
              <b>multiple</b>
            </p>
            <p>
              <b>
                Assset Id <span>AST1002</span>
              </b>
            </p>
          </div>
          <div className={"ticket"}>
            <p>
              <b>Ticket 1</b>
            </p>
            <p>
              <b>
                <span>SR#1376</span> Unassigned
              </b>
            </p>
          </div>
          <div className={"ticket"}>
            <p>
              <b>Multiple Asset</b>
            </p>
            <p>
              <b>
                <span>SR#1376</span> Unassigned
              </b>
            </p>
          </div>
          <div className={"ticket"}>
            <p>
              <b>Comment</b>
            </p>
            <p>
              <b>
                <span>SR#1376</span> Unassigned
              </b>
            </p>
          </div>
          <div className={"ticket"}>
            <p>
              <b>Attachment</b>
            </p>
            <p>
              <b>
                <span>SR#1376</span> Unassigned
              </b>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Part_Three;
