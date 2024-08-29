import * as React from "react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";

// import { Edit } from '@fluentui/react';

import  "./assets/Part_One.css";
import { ActionButton, Icon } from "@fluentui/react";
import ReactQuill  from "react-quill";
import 'react-quill/dist/quill.snow.css';
function Part_One() {
  const Back = { iconName: "Back" };
  const CheckMark = { iconName: "CheckMark" };
  const Cancel = { iconName: "Cancel" };
  const CirclePause = { iconName: "CirclePause" };
  const FollowUser = { iconName: "FollowUser" };
  // const [toolbarOptions] = React.useState([
  //   [{ font: [] }],
  //   [{ header: [1, 2, 3, 4, 5, 6, false] }],
  //   ["bold", "italic", "underline", "strike"],
  //   // [{ 'direction': 'rtl' }],
  //   // [{ color: [] }, { background: [] }],
  //   // [{ script: "sub" }, { script: "super" }],
  //   // ["blockquote", "code-block"],
  //   [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  //   // [{ indent: "-1" }, { indent: "+1" }],
  //   // [{ 'align': [] }],
  //   ["link", "image"],
  //   // ["clean"],
  // ]);
  const reactQuillRef = React.useRef(null);
  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  return (
    <div>
      <section>
        <div className={"mainContainer"}>
          <div className={"Container1"}>
            <div className={"subContainer1"}>
              <div className={"leftdiv"}>
                <div className={"divOne"}>
                  <label className={"testpopup"}>Developer Team-Bug Resolving</label>
                  <i className={"editicon"}>
                    <Icon iconName="Edit" />
                  </i>
                  <i className={"editicon"}>
                    <Icon iconName="Download" />
                  </i>
                </div>
                <div className={"divTwo"}>
                  <p>Abhishek H U (INT) reported an issue</p>
                </div>
                <div className={"divThree"}>
                  <div className={"created"}>Created By:</div>
                  <div className={"author"}>Abhishek H U (int)</div>
                </div>
              </div>
              <div className={"rightdiv"}>
                <div className={"divOne"}>
                  <label className={"testpopup1"}>SR#1319</label>
                </div>
                <div className={"divTwo"}>
                  <div className={"created"}>16/08/2024 5:24</div>
                </div>
                <div className={"divThree"}>
                  <div className={"author"}><b>Created by</b>: John Taylor</div>
                </div>
              </div>
            </div>
            <div className={"reactquill"}>
            <ReactQuill
                      className={"quillmbstyleborder"}
                        ref={(el) => reactQuillRef.current = (el)}
                        theme="snow"
                        modules={{
                          toolbar: false,
                        }}
                        readOnly={false}
                        preserveWhitespace={true}
                        formats={formats}
                        placeholder={'Enter here'}
                        defaultValue={'<div><p >test</p><p ><b>content<b/>:</p></div>'}
                      />
            </div>
          </div>

          <div className={"Container2"}>
            <div className={"div1"}>
              <div className={"text1"}>
                <p>John Taylor replied to this ticket</p>
              </div>
              <div className={"details"}>
                <p>2024/06/29 | 1 month Ago</p>
                <div className={"arrows"}>
                  <p><Icon iconName="IncreaseIndentArrowMirrored"/></p>
                  <p><Icon iconName="DecreaseIndentArrowMirrored"/></p>
                </div>
              </div>
            </div>
            <div className={"div2"}>
              <div className={"textarea"}>
                <span>jhgj</span>
                <div className={"leftlogo"}>
                  <div><p><Icon iconName="Like"/></p></div>
                  <div><p>#1</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className={"Container3"}>
            <div className={"container3div1"}>
              <div className={"container3div2"}>
                <div className={"reply"}>
                <p><ActionButton
                           iconProps={Back}
                  /></p>
                  <p>Reply</p>
                </div>
                <div className={"reply"}>
                  <p><ActionButton
                           iconProps={CheckMark}
                  /></p>
                  <p>Approve</p>
                </div>
                <div className={"reply"}>
                  <p><ActionButton
                           iconProps={Cancel}
                  /></p>
                  <p>Reject</p>
                </div>
                <div className={"reply"}>
                  <p><ActionButton
                           iconProps={CirclePause}
                  /></p>
                  <p>Hold</p>
                </div>
                <div className={"reply"}>
                  <p><ActionButton
                           iconProps={FollowUser}
                  /></p>
                  <p>Re-assign</p>
                </div>
              </div>
              <div className={"droparrow"}>
                <p><Icon iconName="ChevronDown"/></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Part_One;
