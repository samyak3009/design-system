import * as React from 'react';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import schema from '@/components/organisms/grid/__stories__/_common_/simpleSchema';
import { Card, Heading, Table, Row, Column } from '@/index';
import { action } from '@/utils/action';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';

// CSF format story
export const withCheckbox = () => {
  const values = [true, false];

  // to freeze the object for typescript

  return (
    <div className="d-flex flex-wrap">
      <Row>
        {values.map((v, index) => (
          <Column key={index} className="ml-10" size={5}>
            <Heading>{`withPagination: ${v}`}</Heading>
            <div className="vh-75">
              <Card shadow="light" className="h-100">
                <Table
                  data={data}
                  schema={schema}
                  withCheckbox={true}
                  withPagination={v}
                  onSelect={(rowIndex, selected, selectedList, selectAll) =>
                    action(
                      `on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(
                        selectedList
                      )} selectAll: ${selectAll}`
                    )()
                  }
                  onPageChange={(newPage) => action(`on-page-change:- ${newPage}`)()}
                />
              </Card>
            </div>
          </Column>
        ))}
      </Row>
    </div>
  );
};

const customCode = `
() => {
  const data = ${JSON.stringify(data, null, 4)};

  const schema = [
    {
      name: 'name',
      displayName: 'Name',  
      resizable: true,
      separator: true,
      tooltip: true,
      translate: a => ({
        title: \`\${a.firstName} \${a.lastName}\`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
      cellType: 'AVATAR_WITH_TEXT',
    },
    {
      name: 'email',
      displayName: 'Email',
      width: 350,
      resizable: true,
    },
  ];

  const values = [true, false];

  return (
    <div className="d-flex flex-wrap">
      <Row>
        {values.map((v, index) => (
          <Column key={index} className="ml-10" size={5}>
            <Heading>{\`withPagination: \${v}\`}</Heading>
            <div className="vh-75">
              <Card shadow="light" className="h-100">
                <Table
                data={data}
                schema={schema}
                withCheckbox={true}
                withPagination={v}
                onSelect={(rowIndex, selected, selectedList, selectAll) => console.log(\`on-select:- rowIndex: \${rowIndex} selected: \${selected} selectedList: \${JSON.stringify(selectedList)} selectAll: \${selectAll}\`)}
                pageSize={15}
                onPageChange={newPage => console.log(\`on-page-change:- \${newPage}\`)}
                />
              </Card>
            </div>
          </Column>
        ))}
      </Row>
    </div>
  );
};
`;

export default {
  title: 'Components/Table/Variants/With Checkbox',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: { AsyncTable, SyncTable },
          exclude: ['showHead'],
        },
      },
    },
  },
};
