/* eslint-disable import/prefer-default-export */

export interface Margin {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

interface AxisConfig {
  label: string;
  tickCount: number;
  tickFormat: (x: any) => string;
}

interface ScaleConfig {
  type: string;
  domain: any[];
  range: any[];
}

export interface XYEncoding {
  x: {
    axis: Partial<
      AxisConfig & {
        orient: 'top' | 'bottom';
        labelAngle: number;
        labelOverlap: string;
      }
    >;
    scale: ScaleConfig;
  };
  y: {
    axis: Partial<
      AxisConfig & {
        orient: 'left' | 'right';
      }
    >;
    scale: ScaleConfig;
  };
}
