import * as React from "react";
import * as menuItemStyle from "./styles/menuItem";
export type Props<A> = {
  // orientation: menuItemStyle.Orientation;
  revealed: boolean;
  position: number;
  title: string;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  component?: string | React.ComponentType<A>;
  componentProps?: A;
};
type State = { hovered: boolean };

// https://stackoverflow.com/a/51463284/2399897
// export const GooeyNavItem2 : <A extends any>(p: Props<A>) => React.FC<Props<any>> = (props) => {
//   const [hovered, setHovered] = React.useState<boolean>();

//   // const index = props.position;
//   // const style = props.style;
//   const {
//     children,
//     component = "a",
//     // componentProps: { style, ...compProps } = {} as { style?: React.CSSProperties },
//     // orientation,
//     position: index,
//     revealed,
//     // title
//   } = props;

//   return(
//     <var
//       // href="#"
      
//       // title={props.title}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         ...menuItemStyle.std({ index }),
//         ...(hovered && menuItemStyle.hover),
//         ...(revealed && menuItemStyle.revealed({ index })),
//         // ...style
//     }}
//     {...props}
//   >
//     {children}
//   </var>
//   )

// }

export default class GooeyNavItem<A> extends React.Component<Props<any>, State> {
  state = { hovered: false };

  render() {
    const {
      children,
      component: Component = "a",
      componentProps: { style, ...compProps } = {} as { style?: React.CSSProperties },
      // orientation,
      position,
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
          ...menuItemStyle.std({  index:position }),
          ...(this.state.hovered && menuItemStyle.hover),
          ...(revealed && menuItemStyle.revealed({ index:position })),
          ...style
        }}
        {...compProps}
      >
        {children}
      </Component>
    );
  }
}