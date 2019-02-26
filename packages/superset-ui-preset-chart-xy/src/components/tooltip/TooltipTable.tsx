import React, { CSSProperties } from 'react';

const defaultProps = {
  className: '',
  data: [],
};

const VALUE_CELL_STYLE: CSSProperties = { paddingLeft: 8, textAlign: 'right' };

export default class TooltipTable extends React.PureComponent<
  {
    className?: string;
    data: {
      key: string;
      keyStyle?: CSSProperties;
      value: string | number;
      valueStyle?: CSSProperties;
    }[];
  },
  {}
> {
  static defaultProps = defaultProps;

  render() {
    const { className, data } = this.props;

    return (
      <table className={className}>
        <tbody>
          {data.map(({ key, keyStyle, value, valueStyle }) => (
            <tr key={key}>
              <td style={keyStyle}>{key}</td>
              <td style={valueStyle ? { ...VALUE_CELL_STYLE, ...valueStyle } : VALUE_CELL_STYLE}>
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
