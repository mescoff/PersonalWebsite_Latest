import React from "react";
import Item from "../GooeyNav/Item";
import Menu from "../GooeyNav/Menu";


const Icon = ({ name }: { name: string }) => <i className={`fa fa-${name}`} />;


const FakeGooeyMenu: React.FC = () => {


  return (
    <Menu>
      <Item title="Twitter!">
        <Icon name="twitter" />
      </Item>
      <Item
        title="Facebook!"
        component="a"
        componentProps={{
          href: "https://facebook.com",
          target: "_blank",
          rel: "noopener",
          onClick: (e: Event) => {
            console.log("Whoops!");
            e.preventDefault();
          }
        }}
      >
        <Icon name="facebook" />
      </Item>
      <Item title="Cool!">😎</Item>
    </Menu>
  )
}

export default FakeGooeyMenu;