
// import React from 'react';
// import Accordion from './Accordion';

// const Queue = () => {
//   const accordionData = [
//     {
//       title: 'Section 1',
//       content: `Lorem ipsum`
//     },
//     {
//       title: 'Section 2',
//       content: `Lorem ipsum`
//     },
//     {
//       title: 'Section 3',
//       content: `Lorem ipsum`
//     }
//   ];

//   return (
//     <div>
//       <div className="accordion">
//         {accordionData.map(({ title, content }) => (
//           <Accordion title={title} content={content} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Queue;

import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Queue = () => (
  <Collapse accordion>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
);

export default Queue;