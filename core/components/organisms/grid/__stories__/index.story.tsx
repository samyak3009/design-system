import type { Meta, StoryObj } from "@storybook/react";
import { Card, Grid, GridCell } from "@/index";

const meta = {
  title: "Components/Grid/All",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    applyLoaderSchema: "true",
    loading: "false",
    error: "false",
    applySchema: "true",
    applyData: "true",
    totalRecords: "data.length",
    type: "resource",
    size: "comfortable",
    draggable: "true",
    nestedRows: "false",
    withCheckbox: "false",
    showMenu: "true",
    withPagination: "false",
    page: "1",
    pageSize: "12",
    headCellTooltip: "false",
    separator: "false",
    className: "Grid-outerWrapper",
  },
};

