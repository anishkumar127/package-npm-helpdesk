import * as React from 'react'
import { Dropdown, DropdownMenuItemType } from '@fluentui/react/lib/Dropdown';
import "./assets/Part_Two.css";
function Part_Two() {
  const dropdownStyles = {
    dropdown: { width: 230 },
  };
  const options = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
  ];
  return (
    <div>
      <section className={"sec"}>
        <div className={"header"}><b>Properties</b></div>
        <div className={"maincontent"}>
        <div className={"dropdown1"}>
        <Dropdown
        placeholder="Select an option"
        label="Basic uncontrolled example"
        options={options}
        styles={dropdownStyles}
      />
        </div>
        <div className={"dropdown1"}>
        <Dropdown
        placeholder="Select an option"
        label="Basic uncontrolled example"
        options={options}
        styles={dropdownStyles}
      />
        </div>
        <div className={"dropdown1"}>
        <Dropdown
        placeholder="Select an option"
        label="Basic uncontrolled example"
        options={options}
        styles={dropdownStyles}
      />
        </div>
        <div className={"dropdown1"}>
        <Dropdown
        placeholder="Select an option"
        label="Basic uncontrolled example"
        options={options}
        styles={dropdownStyles}
      />
        </div>
        <div className={"dropdown1"}>
        <Dropdown
        placeholder="Select an option"
        label="Basic uncontrolled example"
        options={options}
        styles={dropdownStyles}
      />
        </div>
        <div className={"dropdown1"}>
        <Dropdown
        placeholder="Select an option"
        label="Basic uncontrolled example"
        options={options}
        styles={dropdownStyles}
      />
        </div>
        <div className={"dropdown1"}>
        <Dropdown
        placeholder="Select an option"
        label="Basic uncontrolled example"
        options={options}
        styles={dropdownStyles}
      />
        </div>
        <div className={"dropdown1"}>
        <Dropdown
        placeholder="Select an option"
        label="Basic uncontrolled example"
        options={options}
        styles={dropdownStyles}
      />
        </div>
        <div className={"dropdown1"}>
        <Dropdown
        placeholder="Select an option"
        label="Basic uncontrolled example"
        options={options}
        styles={dropdownStyles}
      />
        </div>
        </div>
        <div className={"btn"}>
          <div className={"content"}>
            <p>Ticket History</p>
            <a href='#'>Click here</a>
          </div>
        </div>
        <hr style={{width:'78%',margin:'auto'}}/>
        <div className={"updatebtn"}>
          <button>Update</button>
        </div>
      </section>
    </div>
  )
}

export default Part_Two
