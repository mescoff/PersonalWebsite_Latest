import * as React from "react";
import * as menuItemStyle from "./styles/menuItem";
export type Props<A> = {
  orientation: menuItemStyle.Orientation;
  revealed: boolean;
  position: number;
  title: string;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  component?: string | React.ComponentType<A>;
  componentProps?: A;
};
type State = { hovered: boolean };

 
// const GooeyNavItem2 : React.FC<Props<A>> = (props) => {
//   const [hovered, setHovered] = React.useState<boolean>();

//   return(
//     <React.Component
//       href="#"
//       title={props.title}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         ...menuItemStyle.std({ index, props.orientation }),
//         ...(hovered && menuItemStyle.hover),
//         ...(props.revealed && menuItemStyle.revealed({ index, orientation })),
//         ...props.style
//     }}
//     {...props}
//   >
//     {props.children}
//   </React.Component>
//   )

// }

export default class GooeyNavItem<A> extends React.Component<Props<any>, State> {
  state = { hovered: false };

  render() {
    const {
      children,
      component: Component = "a",
      componentProps: { style, ...compProps } = {} as { style?: React.CSSProperties },
      orientation,
      position: index,
      revealed,
      title
    } = this.props;
    return (
      <Component
        href="#"
        title={title}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        style={{
          ...menuItemStyle.std({ index, orientation }),
          ...(this.state.hovered && menuItemStyle.hover),
          ...(revealed && menuItemStyle.revealed({ index, orientation })),
          ...style
        }}
        {...compProps}
      >
        {children}
      </Component>
    );
  }
}